/* Hanzi AI – nhận xét bản dịch bằng Ollama chạy trên máy người học (giai đoạn 1: dịch câu).
   - Không chấm điểm, không tự đánh dấu đúng/sai vào tiến độ.
   - Chỉ gửi câu trả lời tới địa chỉ Ollama do người dùng cấu hình (mặc định http://localhost:11434).
   - Dùng chung cho index.html (tab Luyện dịch) và ai-test.html (bộ kiểm thử). */
(function(){
'use strict';
const DEF={on:false,url:'http://localhost:11434',model:'qwen2.5:3b',timeout:120};
const TYPES=['meaning','vocabulary','grammar','word_order','name','extra_content'];
const TYPE_VI={meaning:'Sai nghĩa / lệch ý',vocabulary:'Từ vựng',grammar:'Ngữ pháp',word_order:'Trật tự từ',name:'Tên riêng / địa danh / số / thời gian',extra_content:'Thêm nội dung không có trong đề'};
const MEANING=['same','different','unsure'],CONF=['high','medium','low'];
const hn=s=>(String(s==null?'':s).match(/\p{Script=Han}/gu)||[]).join('');
const clip=(s,n)=>String(s==null?'':s).replace(/\s+/g,' ').trim().slice(0,n);

const SYSTEM=[
'You give REFERENCE-ONLY feedback on a Vietnamese learner\'s Chinese translation (HSK 1 level). The exercises have not been checked by a teacher, so you are only a helper, not a judge.',
'Task: compare the LEARNER ANSWER with the Vietnamese SOURCE. Decide whether it expresses the same meaning in correct Chinese.',
'Rules:',
'1. Many different translations can be correct. The REFERENCE and the ACCEPTED ALTERNATIVES are only examples, NOT the only correct answers. Never call an answer wrong just because it differs from them, uses different but correct words, or has a different but correct word order.',
'2. Judge the meaning against the Vietnamese SOURCE first. Then check vocabulary, grammar and word order.',
'3. Never change or "correct" proper names, place names, numbers, times or people from the SOURCE. If the learner changed any of them, report an issue of type "name" (or "meaning").',
'4. Do not suggest adding words or structures that are not needed. Do not report style preferences or out-of-level words as errors.',
'5. Give every issue exactly one type: "meaning" (wrong meaning or information), "vocabulary" (wrong word chosen), "grammar" (wrong grammar, particle, measure word, negation), "word_order", "name" (name/place/number/time/person changed), "extra_content" (information added that is not in the SOURCE).',
'6. If the answer is fine, return an empty issues list. Do not invent errors.',
'7. If you are not sure, set confidence to "low" or "medium" and explain the doubt in "notes". Set meaning to "unsure" when you cannot decide.',
'8. Write summary, detail, suggestion and notes in Vietnamese, short and clear. Keep Chinese words in Chinese characters.',
'Output ONLY one JSON object, no other text, in exactly this shape:',
'{"meaning":"same|different|unsure","confidence":"high|medium|low","summary":"...","issues":[{"type":"meaning|vocabulary|grammar|word_order|name|extra_content","detail":"...","suggestion":"..."}],"notes":"..."}'
].join('\n');

function buildMessages(it,answer){
 const alts=(it.alt||[]).filter(a=>a&&a.zh).map(a=>'- '+a.zh).join('\n')||'none';
 const kps=(it.key_points||[]).filter(k=>k&&k.vi).map(k=>'- '+k.vi+' ('+(k.zh_ok||[]).join(' / ')+')').join('\n')||'none';
 const avoid=(it.avoid||[]).filter(a=>a&&a.zh).map(a=>'- '+a.zh+(a.why?' : '+clip(a.why,120):'')).join('\n')||'none';
 const user=['SOURCE (Vietnamese): '+it.vi,
  'REFERENCE (one correct translation): '+it.zh,
  'ACCEPTED ALTERNATIVES (also correct):\n'+alts,
  'KEY POINTS the translation should express:\n'+kps,
  'EXAMPLES OF WRONG ANSWERS (for reference only):\n'+avoid,
  'LEARNER ANSWER: '+clip(answer,300),
  'Return the JSON object now.'].join('\n\n');
 return [{role:'system',content:SYSTEM},{role:'user',content:user}];
}

/* Đọc và kiểm tra JSON do model trả về. Trả về null nếu không dùng được. */
function parseResult(text){
 if(typeof text!=='string')return null;
 let t=text.trim().replace(/^```(?:json)?/i,'').replace(/```$/,'').trim();
 const a=t.indexOf('{'),b=t.lastIndexOf('}');if(a<0||b<=a)return null;
 let o;try{o=JSON.parse(t.slice(a,b+1))}catch(e){return null}
 if(!o||typeof o!=='object')return null;
 const meaning=MEANING.includes(o.meaning)?o.meaning:'unsure';
 let confidence=CONF.includes(o.confidence)?o.confidence:'low';
 const issues=(Array.isArray(o.issues)?o.issues:[]).filter(x=>x&&TYPES.includes(x.type)&&clip(x.detail,1).length).slice(0,5)
  .map(x=>({type:x.type,detail:clip(x.detail,300),suggestion:clip(x.suggestion,300)}));
 const res={meaning,confidence,summary:clip(o.summary,400),issues,notes:clip(o.notes,300),flags:[]};
 // mâu thuẫn nội bộ -> hạ độ tin cậy và báo cho người học
 if(meaning==='same'&&issues.some(x=>x.type==='meaning'||x.type==='name'||x.type==='extra_content'))res.flags.push('AI vừa nói giữ đúng ý vừa nêu lỗi về nghĩa/tên/nội dung thêm: kết quả mâu thuẫn, hãy xem kỹ.');
 if(meaning==='different'&&!issues.length)res.flags.push('AI nói lệch ý nhưng không chỉ ra lỗi cụ thể: kết quả chưa đáng tin.');
 if(!res.summary&&!issues.length&&!res.notes)return null;
 if(res.flags.length)res.confidence='low';
 return res;
}

/* Kiểm tra tự động bằng mã (không phải AI): tên riêng khai trong dữ liệu phải còn trong bài làm. */
function localChecks(it,answer){
 const n=hn(answer),out=[];
 (it.names||[]).forEach(nm=>{if(nm&&!n.includes(hn(nm)))out.push({type:'name',detail:'Không thấy tên riêng "'+nm+'" trong bài dịch của bạn.'})});
 return out;
}

function baseUrl(u){return String(u||DEF.url).trim().replace(/\/+$/,'')}
function validUrl(u){return /^https?:\/\/[^\s/]+(:\d+)?$/i.test(baseUrl(u))}

function fail(code,msg){return {ok:false,error:{code,msg}}}
function mapNetwork(e,state){
 if(e&&e.name==='AbortError')return state.timedOut?fail('timeout','Quá thời gian chờ AI ('+state.sec+' giây). Bạn có thể thử lại hoặc tăng thời gian chờ trong Cài đặt AI.'):fail('cancel','Đã dừng yêu cầu AI.');
 return fail('network','Không kết nối được tới Ollama. Hãy kiểm tra Ollama đang chạy, địa chỉ trong Cài đặt AI, và biến OLLAMA_ORIGINS có chứa nguồn của trang này.');
}

async function chatOnce(cfg,messages,signal,state){
 const res=await fetch(baseUrl(cfg.url)+'/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},signal,
  body:JSON.stringify({model:cfg.model||DEF.model,messages,stream:false,format:'json',keep_alive:'10m',options:{temperature:0,num_predict:450,num_ctx:2048}})});
 if(!res.ok){
  let body='';try{body=await res.text()}catch(e){}
  if(res.status===403)return fail('origin','Ollama từ chối nguồn của trang này (HTTP 403). Cần đặt OLLAMA_ORIGINS để cho phép trang web, rồi khởi động lại Ollama.');
  if(res.status===404||/not found/i.test(body))return fail('model','Ollama không tìm thấy model "'+(cfg.model||DEF.model)+'". Cài bằng lệnh: ollama pull '+(cfg.model||DEF.model));
  return fail('http','Ollama trả về lỗi HTTP '+res.status+'.');
 }
 let j;try{j=await res.json()}catch(e){return fail('format','Ollama trả về dữ liệu không đọc được.')}
 const text=j&&j.message&&j.message.content;
 return {ok:true,text:typeof text==='string'?text:''};
}

/* Hỏi AI về một câu. opts.signal: tín hiệu hủy do người dùng. Tự thử lại 1 lần nếu JSON sai. */
async function review(it,answer,cfg,opts){
 opts=opts||{};cfg=Object.assign({},DEF,cfg||{});
 if(!hn(answer))return fail('empty','Chưa có câu trả lời tiếng Trung.');
 if(!validUrl(cfg.url))return fail('url','Địa chỉ Ollama không hợp lệ (ví dụ: http://localhost:11434).');
 const ctl=new AbortController(),state={timedOut:false,sec:cfg.timeout};
 const onAbort=()=>ctl.abort();if(opts.signal){if(opts.signal.aborted)return fail('cancel','Đã dừng yêu cầu AI.');opts.signal.addEventListener('abort',onAbort)}
 const timer=setTimeout(()=>{state.timedOut=true;ctl.abort()},Math.max(5,+cfg.timeout||DEF.timeout)*1000);
 const t0=Date.now();let messages=buildMessages(it,answer),raw='';
 try{
  for(let attempt=0;attempt<2;attempt++){
   let r;try{r=await chatOnce(cfg,messages,ctl.signal,state)}catch(e){return mapNetwork(e,state)}
   if(!r.ok)return r;
   raw=r.text;const res=parseResult(raw);
   if(res)return {ok:true,result:res,ms:Date.now()-t0,model:cfg.model,attempts:attempt+1,raw};
   messages=messages.concat([{role:'assistant',content:raw},{role:'user',content:'Your previous reply was not a valid JSON object in the required shape. Reply again with ONLY the JSON object.'}]);
  }
  return Object.assign(fail('format','AI trả lời không đúng định dạng, kể cả sau khi thử lại. Hãy thử lại sau.'),{raw});
 }finally{clearTimeout(timer);if(opts.signal)opts.signal.removeEventListener('abort',onAbort)}
}

/* Kiểm tra kết nối: GET /api/tags */
async function ping(cfg){
 cfg=Object.assign({},DEF,cfg||{});
 if(!validUrl(cfg.url))return fail('url','Địa chỉ Ollama không hợp lệ.');
 const ctl=new AbortController(),state={timedOut:false,sec:8},timer=setTimeout(()=>{state.timedOut=true;ctl.abort()},8000);
 try{
  const res=await fetch(baseUrl(cfg.url)+'/api/tags',{signal:ctl.signal});
  if(res.status===403)return fail('origin','Ollama từ chối nguồn của trang này (HTTP 403). Cần đặt OLLAMA_ORIGINS.');
  if(!res.ok)return fail('http','Ollama trả về lỗi HTTP '+res.status+'.');
  const j=await res.json(),names=(j.models||[]).map(m=>m.name||m.model).filter(Boolean);
  const want=cfg.model||DEF.model,has=names.some(n=>n===want||n===want+':latest');
  return {ok:true,models:names,hasModel:has};
 }catch(e){return mapNetwork(e,state)}finally{clearTimeout(timer)}
}

function load(){try{const o=JSON.parse(localStorage.getItem('hanziai.ai.v1')||'null');return Object.assign({},DEF,o&&typeof o==='object'?o:{})}catch(e){return Object.assign({},DEF)}}
function save(c){try{localStorage.setItem('hanziai.ai.v1',JSON.stringify({on:!!c.on,url:c.url,model:c.model,timeout:c.timeout}))}catch(e){}}

window.HSK_AI={DEF,TYPES,TYPE_VI,SYSTEM,hn,buildMessages,parseResult,localChecks,review,ping,load,save,validUrl};
})();
