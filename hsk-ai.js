/* Hanzi AI – nhận xét bản dịch bằng Ollama chạy trên máy người học (giai đoạn 1: dịch câu), phiên bản 2.
   - Không chấm điểm, không tự đánh dấu đúng/sai vào tiến độ.
   - Chỉ gửi câu trả lời tới địa chỉ Ollama do người dùng cấu hình (mặc định http://localhost:11434).
   - Một lượt gọi AI, kết quả theo JSON Schema: verdict = correct | has_error | unsure. Mỗi lỗi có `quote` (chữ Hán chép nguyên văn từ bài làm) để mã kiểm chứng.
   - Các quy tắc bằng mã (R1–R9) chỉ tạo GỢI Ý, không bao giờ tự kết luận câu sai.
   - Dùng chung cho index.html (tab Luyện dịch) và ai-test.html (bộ kiểm thử). */
(function(){
'use strict';
const DEF={on:false,url:'http://localhost:11434',model:'qwen2.5:3b',timeout:120,fmt:'schema'};
const RV=3; // phiên bản cấu trúc kết quả lưu trong trình duyệt
const TYPES=['meaning','vocabulary','grammar','word_order','name','extra_content'];
const TYPE_VI={unknown:'Chưa rõ loại lỗi',meaning:'Sai nghĩa / lệch ý (thời gian, địa điểm, người…)',vocabulary:'Từ vựng',grammar:'Ngữ pháp',word_order:'Trật tự từ',name:'Tên riêng / tên người / số',extra_content:'Thêm nội dung không có trong đề'};
const STATUS_VI={fit:'Phù hợp',review:'Cần xem lại',unsure:'Chưa chắc'};
const VERDICTS=['correct','has_error','unsure'],CONF=['high','medium','low'];
const hn=s=>(String(s==null?'':s).match(/\p{Script=Han}/gu)||[]).join('');
const clip=(s,n)=>String(s==null?'':s).replace(/\s+/g,' ').trim().slice(0,n);

/* ---------- Schema gửi cho Ollama (thứ tự trường = thứ tự model viết ra) ---------- */
const SCHEMA={type:'object',properties:{
 summary:{type:'string'},
 issues:{type:'array',maxItems:3,items:{type:'object',properties:{type:{type:'string',enum:TYPES},quote:{type:'string'},detail:{type:'string'},suggestion:{type:'string'}},required:['type','quote','detail','suggestion']}},
 verdict:{type:'string',enum:VERDICTS},
 confidence:{type:'string',enum:CONF},
 notes:{type:'string'}},
 required:['summary','issues','verdict','confidence','notes']};

const SYSTEM=[
'Bạn là trợ lý nhận xét bài dịch Việt → Trung của người học tiếng Trung (trình độ HSK 1). Bài tập chưa được giáo viên duyệt, nên bạn chỉ giúp tham khảo, không phải giám khảo.',
'Nhiệm vụ: so CÂU TRẢ LỜI CỦA NGƯỜI HỌC với CÂU TIẾNG VIỆT, xem có diễn đạt đúng ý bằng tiếng Trung chấp nhận được hay không.',
'Quy tắc:',
'1. Một câu tiếng Việt có nhiều cách dịch đúng. Bản tham khảo và các bản đúng khác chỉ là ví dụ, KHÔNG phải đáp án duy nhất. Không coi là sai chỉ vì khác bản tham khảo, dùng từ đồng nghĩa, thêm hoặc bớt từ mà nghĩa không đổi, hay đổi trật tự mà vẫn đúng.',
'2. Xét nghĩa trước, rồi từ vựng, ngữ pháp, trật tự từ.',
'3. Không được đổi tên riêng, con số, thời gian, địa điểm hay người so với câu tiếng Việt (ví dụ: anh trai thành em trai, hôm qua thành hôm nay). Nếu người học đổi, đó là lỗi.',
'4. Không bịa lỗi. Mỗi lỗi phải có "quote": đoạn chữ Hán chép NGUYÊN VĂN từ CÂU TRẢ LỜI CỦA NGƯỜI HỌC (không thêm, không sửa chữ nào). Không chỉ ra được đoạn cụ thể thì không nêu lỗi. Không đề nghị thêm từ không cần thiết. Từ ngoài trình độ HSK 1 không phải là lỗi.',
'5. Mỗi lỗi chỉ có một loại: "meaning" = nghĩa hoặc thông tin bị đổi (thời gian, địa điểm, người thân…); "vocabulary" = chọn sai từ; "grammar" = sai ngữ pháp, trợ từ, lượng từ, phủ định; "word_order" = sai trật tự từ; "name" = tên riêng, tên người hoặc con số bị đổi; "extra_content" = thêm thông tin không có trong câu tiếng Việt.',
'6. verdict: "correct" = ý đúng và tiếng Trung chấp nhận được (issues để rỗng); "has_error" = có lỗi thật (phải có ít nhất một mục trong issues); "unsure" = không đủ căn cứ để kết luận. Không chắc thì chọn "unsure" hoặc confidence thấp và giải thích trong notes.',
'7. "detail" chỉ viết tiếng Việt, một hoặc hai câu trọn vẹn kết thúc bằng dấu chấm, TUYỆT ĐỐI không chèn chữ Hán (muốn nhắc tới từ nào thì dùng nghĩa tiếng Việt, ví dụ «hôm qua», «anh trai»). Chữ Hán chỉ nằm trong "quote" và "suggestion". summary và notes cũng viết tiếng Việt ngắn gọn, dễ hiểu cho người mới học, không dùng tiếng Anh.',
'Chỉ trả lời bằng MỘT đối tượng JSON, không thêm chữ nào khác, đúng dạng:',
'{"summary":"...","issues":[{"type":"meaning|vocabulary|grammar|word_order|name|extra_content","quote":"...","detail":"...","suggestion":"..."}],"verdict":"correct|has_error|unsure","confidence":"high|medium|low","notes":"..."}'
].join('\n');

/* 4 ví dụ mẫu (few-shot): câu ngoài ngân hàng bài tập và ngoài bộ kiểm thử. */
const FEWSHOT=[
 {vi:'Cái áo này rất đẹp.',zh:'这件衣服很漂亮。',ans:'这件衣服很好看。',
  out:{summary:'Bạn dịch đúng ý: cái áo này rất đẹp.',issues:[],verdict:'correct',confidence:'high',notes:'Hai cách nói đều dùng được để khen đẹp, nên khác bản tham khảo vẫn đúng.'}},
 {vi:'Tôi có ba quyển sách.',zh:'我有三本书。',ans:'我有三个书。',
  out:{summary:'Ý đúng nhưng dùng sai lượng từ.',issues:[{type:'grammar',quote:'三个书',detail:'Danh từ chỉ sách thường dùng lượng từ «quyển», không dùng lượng từ chung «cái» trong câu này.',suggestion:'我有三本书。'}],verdict:'has_error',confidence:'high',notes:''}},
 {vi:'Hôm nay tôi rất mệt.',zh:'我今天很累。',ans:'今天我很累。',
  out:{summary:'Bạn dịch đúng ý: hôm nay tôi rất mệt.',issues:[],verdict:'correct',confidence:'high',notes:'Đưa từ chỉ thời gian lên đầu câu vẫn đúng. Hai cách đặt từ chỉ thời gian đều tự nhiên.'}},
 {vi:'Anh trai tôi là bác sĩ.',zh:'我哥哥是医生。',ans:'我弟弟是医生。',
  out:{summary:'Câu đúng ngữ pháp nhưng người trong câu bị đổi.',issues:[{type:'meaning',quote:'弟弟',detail:'Đề nói «anh trai» nhưng bài dịch viết «em trai», nên người trong câu bị đổi.',suggestion:'我哥哥是医生。'}],verdict:'has_error',confidence:'high',notes:''}}
];

function userMsg(vi,zh,alts,ans){
 return ['CÂU TIẾNG VIỆT: '+vi,'BẢN THAM KHẢO (một cách dịch đúng): '+zh,'CÁC BẢN ĐÚNG KHÁC: '+(alts.length?alts.join(' ; '):'không có'),'CÂU TRẢ LỜI CỦA NGƯỜI HỌC: '+ans].join('\n')}

function buildMessages(it,answer){
 const alts=(it.alt||[]).filter(a=>a&&a.zh).map(a=>a.zh);
 const m=[{role:'system',content:SYSTEM}];
 FEWSHOT.forEach(e=>{m.push({role:'user',content:userMsg(e.vi,e.zh,[],e.ans)});m.push({role:'assistant',content:JSON.stringify(e.out)})});
 m.push({role:'user',content:userMsg(it.vi,it.zh,alts,clip(answer,300))});
 return m;
}

/* ---------- Đọc và kiểm tra JSON do model trả về (chưa đánh giá). Null nếu không dùng được. ---------- */
function parseResult(text){
 if(typeof text!=='string')return null;
 let t=text.trim().replace(/^```(?:json)?/i,'').replace(/```$/,'').trim();
 const a=t.indexOf('{'),b=t.lastIndexOf('}');if(a<0||b<=a)return null;
 let o;try{o=JSON.parse(t.slice(a,b+1))}catch(e){return null}
 if(!o||typeof o!=='object'||!VERDICTS.includes(o.verdict))return null;
 const issues=(Array.isArray(o.issues)?o.issues:[]).filter(x=>x&&TYPES.includes(x.type)&&String(x.detail==null?'':x.detail).trim().length).slice(0,5)
  .map(x=>({type:x.type,quote:clip(x.quote,80),detail:clip(x.detail,300),suggestion:clip(x.suggestion,300)}));
 const res={verdict:o.verdict,confidence:CONF.includes(o.confidence)?o.confidence:'low',summary:clip(o.summary,400),issues,notes:clip(o.notes,300)};
 if(!res.summary&&!issues.length&&!res.notes&&res.verdict==='unsure')return null;
 return res;
}

/* ---------- R9: lọc ngôn ngữ (phần giải thích phải là tiếng Việt) ---------- */
const EN=new Set('the is are was were of and that this should because learner answer correct incorrect wrong sentence with for has have used instead missing translation source reference means meaning grammar not but does did can could would must need needs error issue'.split(' '));
function langBad(s){
 s=String(s||'').replace(/word_order|extra_content/g,' ');if(!s.trim())return false;
 const words=(s.toLowerCase().match(/[a-z]+/g)||[]),hits=new Set(words.filter(w=>EN.has(w)));
 if(hits.size>=3)return true;
 const han=(s.match(/\p{Script=Han}/gu)||[]).length,letters=(s.match(/\p{L}/gu)||[]).length-han;
 return han>=10&&han/(han+Math.max(0,letters))>0.6;
}

/* ---------- Quy tắc bằng mã (gợi ý, KHÔNG phải kết luận) ---------- */
const COMPOUND='但可还就要若总硬倒凡于正只老净先越也都又才却不';
const EMBED=/知道|问|告诉|不知|看看|猜|觉得|明白|记得|想知|说|听|关心/; // câu hỏi lồng trong câu khác thì 吗 ở cuối là đúng
/* Mẫu ngữ pháp hẹp. skipPrev: nếu chữ đứng ngay trước chỗ khớp thuộc tập này thì bỏ qua (tránh 但是, 就是, 不是…). */
const PAT=[
 {id:'R4',type:'grammar',re:/没(?:有)?(?!有)[一-鿿]了(?![解吗吧啊呢嘛哦])[一-鿿]/g,
  detail:'Có thể sai ngữ pháp: «没(有)» đã phủ định quá khứ, thường không thêm «了» ngay sau động từ khi còn tân ngữ (ví dụ: 没有来学校).'},
 {id:'R5',type:'grammar',re:/是([一-鿿]{1,4})(?:上面|里面|下面|前面|后面|旁边|左边|右边|上|里|下)$/g,skipPrev:COMPOUND,test:m=>!/[的在]/.test(m[1]),
  detail:'Có thể sai ngữ pháp: nói vị trí của vật thường dùng «在», không dùng «是» (ví dụ: 书在桌子上).'},
 {id:'R6',type:'grammar',re:/是(?:很|太|非常)?(?:热|冷|忙|累|高|大|小|多|少|好|饿|渴|贵|便宜)$/g,skipPrev:COMPOUND,
  detail:'Có thể sai ngữ pháp: tính từ làm vị ngữ thường không cần «是» (ví dụ: 今天很热).'},
 {id:'R7',type:'word_order',re:/(?:学习|学|说|读|写|看|吃|喝)(?:汉语|中文|英语|书|电影|电视|饭|水|茶|咖啡|水果|东西)在(?:家|学校|医院|公司|商店|饭馆|教室|这儿|那儿|这里|那里)$/g,
  detail:'Có thể sai trật tự từ: cụm chỉ nơi chốn «在…» thường đứng trước động từ (ví dụ: 在家学汉语).'},
 {id:'R8',type:'word_order',re:/(?:睡觉|吃饭|起床|上班|下班)几点$/g,
  detail:'Có thể sai trật tự từ: từ hỏi giờ «几点» thường đứng trước động từ (ví dụ: 几点睡觉).'},
 {id:'R10',type:'grammar',re:/(?:([\u4e00-\u9fff])不\1|有没有)[\u4e00-\u9fff]{0,6}吗$/g,test:(m,c)=>!EMBED.test(c),
  detail:'Có thể sai ngữ pháp: câu hỏi chính phản (như 会不会…, 是不是…, 有没有…) đã là câu hỏi, thường không thêm «吗» ở cuối.'},
 {id:'R11',type:'grammar',re:/(?:多少钱|几岁|几点|多大)吗$/g,test:(m,c)=>!EMBED.test(c),
  detail:'Có thể sai ngữ pháp: câu hỏi đã có từ để hỏi (như 多少钱, 几岁, 几点) thì thường không thêm «吗» ở cuối.'}
];
function clauses(s){return String(s||'').split(/[，,。\.？\?！!；;、：:\s]+/).map(hn).filter(Boolean)}
/* Chạy các mẫu ngữ pháp trên một chuỗi bất kỳ (dùng cho kiểm thử "câu đúng không bị bắt"). */
function patternHints(answer){
 const out=[],seen={};
 clauses(answer).forEach(c=>{PAT.forEach(p=>{
  p.re.lastIndex=0;let m;
  while((m=p.re.exec(c))){
   if(m.index===p.re.lastIndex)p.re.lastIndex++;
   const prev=m.index>0?c[m.index-1]:'';
   if(p.skipPrev&&prev&&p.skipPrev.includes(prev))continue;
   if(p.test&&!p.test(m,c))continue;
   if(!seen[p.id]){seen[p.id]=1;out.push({id:p.id,type:p.type,soft:false,detail:p.detail})}break}
 })});
 return out;
}
/* R2: tên riêng khai báo trong dữ liệu phải có trong bài làm. */
function localChecks(it,answer){
 const n=hn(answer),out=[];
 (it.names||[]).forEach(nm=>{if(nm&&!n.includes(hn(nm)))out.push({id:'R2',type:'name',soft:false,detail:'Không thấy tên riêng «'+nm+'» trong bài dịch của bạn.'})});
 return out;
}
/* R1: chỉ dùng mục `avoid` đã được xác minh (verified:true). Dữ liệu hiện tại chưa có mục nào => không làm gì. */
function avoidHints(it,answer){
 const n=hn(answer);if(!n)return [];
 if([it.zh].concat((it.alt||[]).map(a=>a&&a.zh)).some(z=>hn(z)===n))return [];
 return (it.avoid||[]).filter(a=>a&&a.verified===true&&hn(a.zh)===n).map(a=>({id:'R1',type:'grammar',soft:false,detail:'Trùng một lỗi thường gặp đã được xác minh'+(a.why?': '+clip(a.why,200):'.')}));
}
/* R3: ý chính của đề (chỉ đối chiếu với key_points của chính đề, không dùng danh sách từ chung). Chỉ là gợi ý nhẹ. */
const NEG_VI=/(không|chưa|chẳng|đừng|chớ|khỏi)/i;
function keyHints(it,answer){
 const n=hn(answer),out=[];if(!n)return out;
 (it.key_points||[]).forEach(k=>{
  if(!k||!k.vi||!Array.isArray(k.zh_ok)||!k.zh_ok.length)return;
  const forms=k.zh_ok.map(hn).filter(Boolean);if(!forms.length)return;
  const occ=[];forms.forEach(z=>{let i=n.indexOf(z);while(i>=0){occ.push({z,i});i=n.indexOf(z,i+1)}});
  if(!occ.length){out.push({id:'R3',type:'meaning',soft:true,detail:'Chưa thấy ý «'+k.vi+'» theo các cách viết trong dữ liệu ('+k.zh_ok.join(' / ')+'). Có thể bạn dùng cách diễn đạt khác.'});return}
  const negOK=NEG_VI.test(k.vi)||forms.every(z=>/^[不没]/.test(z));
  if(!negOK&&occ.every(o=>o.i>0&&(n[o.i-1]==='不'||n[o.i-1]==='没')))
   out.push({id:'R3',type:'meaning',soft:true,detail:'Trước cách viết «'+occ[0].z+'» có «'+n[occ[0].i-1]+'» (phủ định), nhưng ý «'+k.vi+'» trong đề không có phủ định. Hãy xem lại.'});
 });
 return out;
}
/* Tất cả gợi ý bằng mã cho một bài làm. Bài khớp chính xác đáp án/đáp án phụ thì không có gợi ý. */
function rules(it,answer){
 const n=hn(answer);if(!n)return [];
 if([it.zh].concat((it.alt||[]).map(a=>a&&a.zh)).some(z=>hn(z)===n))return [];
 return localChecks(it,answer).concat(avoidHints(it,answer),patternHints(answer),keyHints(it,answer));
}

/* ---------- Kết hợp kết quả AI và gợi ý thành trạng thái cuối ---------- */
const sameChars=(a,b)=>a.length===b.length&&[...a].sort().join('')===[...b].sort().join('');
/* `detail` hợp lệ: câu trọn vẹn (có dấu kết thúc), không bị cụt giữa chừng. */
function detailComplete(d){d=String(d||'').trim();return d.length>=12&&/[.!?。！？…»”"')\]]$/.test(d)}
const SUMMARY_OK=/(dịch đúng|đúng ý|chính xác|không có lỗi|không sai|hoàn toàn đúng)/i;
/* opts.requireQuote=false chỉ dùng khi phát lại kết quả cũ (không có quote) để ước lượng; ứng dụng luôn dùng mặc định true. */
function assess(it,answer,p,meta,opts){
 opts=opts||{};const requireQuote=opts.requireQuote!==false;
 const ansHan=hn(answer),refs=[it.zh].concat((it.alt||[]).map(a=>a&&a.zh)).map(hn).filter(Boolean);
 const hints=rules(it,answer),hard=hints.some(h=>!h.soft),hardPat=hints.find(h=>!h.soft&&(h.type==='grammar'||h.type==='word_order'));
 const perm=refs.some(r=>r!==ansHan&&sameChars(r,ansHan));
 const names=(it.names||[]).map(hn).filter(Boolean),nameMissing=names.some(nm=>!ansHan.includes(nm));
 const langWarn=[];
 let summary=p.summary,notes=p.notes,summaryHidden=false;
 if(langBad(summary)){langWarn.push('summary');summary=''}
 if(langBad(notes)){langWarn.push('notes');notes=''}
 if(p.verdict==='has_error'&&summary&&SUMMARY_OK.test(summary)){summary='';summaryHidden=true}
 const good=[],dropped=[];
 p.issues.forEach(x=>{
  const drop=why=>dropped.push({type:x.type,quote:x.quote,detail:x.detail,why});
  if(langBad(x.detail)){if(!langWarn.includes('detail'))langWarn.push('detail');return drop('lẫn ngôn ngữ')}
  if(!detailComplete(x.detail))return drop('lời giải thích bị cụt hoặc quá ngắn');
  const q=hn(x.quote);
  if(requireQuote){if(!q)return drop('thiếu đoạn trích (quote)');if(!ansHan.includes(q))return drop('đoạn trích không có trong bài làm')}
  if(x.type==='extra_content'&&q&&refs.some(r=>r.includes(q)))return drop('đoạn trích đã có trong bản tham khảo, không phải nội dung thêm');
  let type=x.type,relabeled=null,unknown=false;
  if(type==='name'){ // «name» chỉ dành cho tên riêng/tên người mà đề đã khai báo
   const hit=names.some(nm=>q&&(q.includes(nm)||nm.includes(q)));
   if(!(names.length&&(nameMissing||hit))){type='meaning';relabeled='name'}
  }
  if(type==='word_order'&&!perm){ // trật tự từ chỉ đúng nghĩa khi bài làm là hoán vị của một bản đúng
   relabeled='word_order';
   if(hardPat)type=hardPat.type;else unknown=true;
  }
  good.push({type:unknown?'unknown':type,quote:x.quote,detail:x.detail,suggestion:x.suggestion,relabeled,unknown});
 });
 const valid=good.filter(x=>!x.unknown),reasons=[];
 let status;
 if(p.verdict==='correct'){
  if(good.length){status='unsure';reasons.push('AI kết luận đúng nhưng vẫn nêu nghi ngờ có căn cứ, nên chưa thể coi là chắc chắn.')}
  else if(hints.length){status='unsure';reasons.push('AI không thấy lỗi, nhưng quy tắc kiểm tra bằng mã có gợi ý bên dưới.')}
  else status='fit';
 }else if(p.verdict==='has_error'){
  if(valid.length){
   if(perm&&!hard){status='unsure';reasons.push('Bài làm chỉ khác bản tham khảo ở trật tự từ, mà nhiều trật tự đều đúng; chưa có quy tắc nào xác nhận là lỗi.')}
   else status='review';
  }else if(hard&&hardPat){status='review';reasons.push('AI báo có lỗi và quy tắc kiểm tra bằng mã cũng có gợi ý tương ứng.')}
  else{status='unsure';reasons.push(good.length?'AI nêu nghi ngờ nhưng không xác định được loại lỗi, nên chưa coi là lỗi chắc chắn.':'AI báo có lỗi nhưng không chỉ ra được chỗ cụ thể có căn cứ, nên không coi là lỗi.')}
 }else{status='unsure';reasons.push('AI không đủ căn cứ để kết luận.')}
 if(langWarn.length)reasons.push('AI trả lời lẫn ngôn ngữ (không phải tiếng Việt) nên phần giải thích đó đã bị ẩn.');
 return {rv:RV,status,verdict:p.verdict,confidence:p.confidence,summary,summaryHidden,notes,issues:good,hints,dropped,langWarn,reasons,schema:(meta&&meta.schema)||'schema'};
}

/* ---------- Gọi Ollama ---------- */
function baseUrl(u){return String(u||DEF.url).trim().replace(/\/+$/,'')}
function validUrl(u){return /^https?:\/\/[^\s/]+(:\d+)?$/i.test(baseUrl(u))}
function fail(code,msg){return {ok:false,error:{code,msg}}}
function mapNetwork(e,state){
 if(e&&e.name==='AbortError')return state.timedOut?fail('timeout','Quá thời gian chờ AI ('+state.sec+' giây). Bạn có thể thử lại hoặc tăng thời gian chờ trong Cài đặt AI.'):fail('cancel','Đã dừng yêu cầu AI.');
 return fail('network','Không kết nối được tới Ollama. Hãy kiểm tra Ollama đang chạy, địa chỉ trong Cài đặt AI, và biến OLLAMA_ORIGINS có chứa nguồn của trang này.');
}
async function chatOnce(cfg,messages,signal,fmt){
 const res=await fetch(baseUrl(cfg.url)+'/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},signal,
  body:JSON.stringify({model:cfg.model||DEF.model,messages,stream:false,format:fmt,keep_alive:'10m',options:{temperature:0,num_predict:500,num_ctx:3072}})});
 if(!res.ok){
  let body='';try{body=await res.text()}catch(e){}
  if(res.status===403)return fail('origin','Ollama từ chối nguồn của trang này (HTTP 403). Cần đặt OLLAMA_ORIGINS để cho phép trang web, rồi khởi động lại Ollama.');
  if(res.status===404||/not found/i.test(body))return fail('model','Ollama không tìm thấy model "'+(cfg.model||DEF.model)+'". Cài bằng lệnh: ollama pull '+(cfg.model||DEF.model));
  return Object.assign(fail('http','Ollama trả về lỗi HTTP '+res.status+'.'),{status:res.status});
 }
 let j;try{j=await res.json()}catch(e){return fail('format','Ollama trả về dữ liệu không đọc được.')}
 const text=j&&j.message&&j.message.content;
 return {ok:true,text:typeof text==='string'?text:''};
}

/* Hỏi AI về một câu. opts.signal: tín hiệu hủy. Tự thử lại 1 lần nếu JSON sai; nếu Ollama cũ không nhận JSON Schema (HTTP 400) thì lùi về format:'json'. */
async function review(it,answer,cfg,opts){
 opts=opts||{};cfg=Object.assign({},DEF,cfg||{});
 if(!hn(answer))return fail('empty','Chưa có câu trả lời tiếng Trung.');
 if(!validUrl(cfg.url))return fail('url','Địa chỉ Ollama không hợp lệ (ví dụ: http://localhost:11434).');
 const ctl=new AbortController(),state={timedOut:false,sec:cfg.timeout};
 const onAbort=()=>ctl.abort();if(opts.signal){if(opts.signal.aborted)return fail('cancel','Đã dừng yêu cầu AI.');opts.signal.addEventListener('abort',onAbort)}
 const timer=setTimeout(()=>{state.timedOut=true;ctl.abort()},Math.max(5,+cfg.timeout||DEF.timeout)*1000);
 const t0=Date.now();let messages=buildMessages(it,answer),raw='',fmt=cfg.fmt==='json'?'json':SCHEMA,mode=cfg.fmt==='json'?'json':'schema',attempt=0;
 try{
  while(attempt<2){
   let r;try{r=await chatOnce(cfg,messages,ctl.signal,fmt)}catch(e){return mapNetwork(e,state)}
   if(!r.ok&&r.error.code==='http'&&r.status===400&&mode==='schema'){fmt='json';mode='json';continue}
   if(!r.ok)return r;
   raw=r.text;const p=parseResult(raw);
   if(p)return {ok:true,result:assess(it,answer,p,{schema:mode}),ms:Date.now()-t0,model:cfg.model,attempts:attempt+1,raw};
   attempt++;
   messages=messages.concat([{role:'assistant',content:raw},{role:'user',content:'Câu trả lời trước chưa phải đối tượng JSON đúng dạng. Hãy trả lời lại, chỉ gồm đối tượng JSON.'}]);
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
function save(c){try{localStorage.setItem('hanziai.ai.v1',JSON.stringify({on:!!c.on,url:c.url,model:c.model,timeout:c.timeout,fmt:c.fmt==='json'?'json':'schema'}))}catch(e){}}

window.HSK_AI={DEF,RV,TYPES,TYPE_VI,STATUS_VI,SYSTEM,SCHEMA,FEWSHOT,hn,buildMessages,parseResult,assess,detailComplete,rules,patternHints,keyHints,localChecks,langBad,review,ping,load,save,validUrl};
})();
