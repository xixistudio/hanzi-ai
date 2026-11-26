/* Hanzi AI – nhận xét bản dịch bằng Ollama chạy trên máy người học (giai đoạn 1: dịch câu), phiên bản 4.
   - Không chấm điểm, không tự đánh dấu đúng/sai vào tiến độ.
   - Chỉ gửi câu trả lời tới địa chỉ Ollama do người dùng cấu hình (mặc định http://localhost:11434).
   - Một lượt gọi AI, kết quả theo JSON Schema: verdict = correct | has_error | unsure. Mỗi lỗi có `quote` (chữ Hán chép nguyên văn từ bài làm) và hai cụm tiếng Việt ngắn `de_noi`, `bai_lam_noi`; lời giải thích do mã tự ghép.
   - Các quy tắc bằng mã (R1–R9) chỉ tạo GỢI Ý, không bao giờ tự kết luận câu sai.
   - Dùng chung cho index.html (tab Luyện dịch) và ai-test.html (bộ kiểm thử). */
(function(){
'use strict';
const DEF={on:false,url:'http://localhost:11434',model:'qwen2.5:3b',timeout:120,fmt:'schema',think:'auto',predict:500};
const THINK_MODES=['auto','on','off'];
const RV=4; // phiên bản cấu trúc kết quả lưu trong trình duyệt
const TYPES=['meaning','vocabulary','grammar','word_order','name','extra_content'];
const TYPE_VI={unknown:'Chưa rõ loại lỗi',meaning:'Sai nghĩa / lệch ý (thời gian, địa điểm, người…)',vocabulary:'Từ vựng',grammar:'Ngữ pháp',word_order:'Trật tự từ',name:'Tên riêng / tên người / số',extra_content:'Thêm nội dung không có trong đề'};
const STATUS_VI={fit:'Phù hợp',review:'Cần xem lại',unsure:'Chưa chắc'};
const VERDICTS=['correct','has_error','unsure'],CONF=['high','medium','low'];
const hn=s=>(String(s==null?'':s).match(/\p{Script=Han}/gu)||[]).join('');
const clip=(s,n)=>String(s==null?'':s).replace(/\s+/g,' ').trim().slice(0,n);

/* ---------- Schema gửi cho Ollama (thứ tự trường = thứ tự model viết ra) ---------- */
const SCHEMA={type:'object',properties:{
 summary:{type:'string'},
 issues:{type:'array',maxItems:3,items:{type:'object',properties:{type:{type:'string',enum:TYPES},quote:{type:'string'},de_noi:{type:'string'},bai_lam_noi:{type:'string'},suggestion:{type:'string'}},required:['type','quote','de_noi','bai_lam_noi','suggestion']}},
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
'7. Mỗi lỗi có hai trường là CỤM tiếng Việt ngắn (2 đến 10 từ, không viết câu dài, không chữ Hán, viết thường): "de_noi" = điều đề yêu cầu hoặc cách nói đúng thường gặp (ví dụ «anh trai»); "bai_lam_noi" = điều bài làm đang nói hoặc đang làm sai (ví dụ «em trai»). Với loại "extra_content" chỉ cần "bai_lam_noi" (ý thừa), "de_noi" để rỗng. Chữ Hán chỉ nằm trong "quote" và "suggestion". summary và notes viết tiếng Việt ngắn gọn, dễ hiểu cho người mới học, không dùng tiếng Anh.',
'Chỉ trả lời bằng MỘT đối tượng JSON, không thêm chữ nào khác, đúng dạng:',
'{"summary":"...","issues":[{"type":"meaning|vocabulary|grammar|word_order|name|extra_content","quote":"...","de_noi":"...","bai_lam_noi":"...","suggestion":"..."}],"verdict":"correct|has_error|unsure","confidence":"high|medium|low","notes":"..."}'
].join('\n');

/* 4 ví dụ mẫu (few-shot): câu ngoài ngân hàng bài tập và ngoài bộ kiểm thử. */
const FEWSHOT=[
 {vi:'Cái áo này rất đẹp.',zh:'这件衣服很漂亮。',ans:'这件衣服很好看。',
  out:{summary:'Bạn dịch đúng ý: cái áo này rất đẹp.',issues:[],verdict:'correct',confidence:'high',notes:'Hai cách nói đều dùng được để khen đẹp, nên khác bản tham khảo vẫn đúng.'}},
 {vi:'Tôi có ba quyển sách.',zh:'我有三本书。',ans:'我有三个书。',
  out:{summary:'Ý đúng nhưng dùng sai lượng từ.',issues:[{type:'grammar',quote:'三个书',de_noi:'sách dùng lượng từ «quyển»',bai_lam_noi:'dùng lượng từ «cái» cho sách',suggestion:'我有三本书。'}],verdict:'has_error',confidence:'high',notes:''}},
 {vi:'Hôm nay tôi rất mệt.',zh:'我今天很累。',ans:'今天我很累。',
  out:{summary:'Bạn dịch đúng ý: hôm nay tôi rất mệt.',issues:[],verdict:'correct',confidence:'high',notes:'Đưa từ chỉ thời gian lên đầu câu vẫn đúng. Hai cách đặt từ chỉ thời gian đều tự nhiên.'}},
 {vi:'Anh trai tôi là bác sĩ.',zh:'我哥哥是医生。',ans:'我弟弟是医生。',
  out:{summary:'Câu đúng ngữ pháp nhưng người trong câu bị đổi.',issues:[{type:'meaning',quote:'弟弟',de_noi:'anh trai',bai_lam_noi:'em trai',suggestion:'我哥哥是医生。'}],verdict:'has_error',confidence:'high',notes:''}}
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
 const issues=(Array.isArray(o.issues)?o.issues:[]).filter(x=>x&&TYPES.includes(x.type)).slice(0,5)
  .map(x=>({type:x.type,quote:clip(x.quote,80),de_noi:clip(x.de_noi,120),bai_lam_noi:clip(x.bai_lam_noi,120),suggestion:clip(x.suggestion,300)}));
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
/* Hai trường `de_noi`, `bai_lam_noi` là cụm tiếng Việt ngắn. Trả về chuỗi sạch hoặc null nếu thiếu, cụt, vô nghĩa, có chữ Hán hoặc lẫn tiếng Anh. */
const FIELD_JUNK=/^(\.{2,}|…|không có|không rõ|n\/a|null|none|undefined|x|y|-+)$/i;
const FIELD_TAIL=/(^|\s)(và|của|là|thành|với|cho|nhưng|mà|thì|để|bởi|vì|như|hoặc|hay|một|các|những|này|đó|ở|trong)$/i;
function cleanField(v,min){
 let t=clip(v,120).replace(/^["“'\s]+|["”'\s]+$/g,'').trim();
 if(/^«[^«»]*»$/.test(t))t=t.slice(1,-1).trim();
 if(t.length<(min||2))return null;
 if(/\p{Script=Han}/u.test(t))return null;
 if(FIELD_JUNK.test(t)||FIELD_TAIL.test(t)||/[,;:\-–]$/.test(t))return null;
 if((t.match(/«/g)||[]).length!==(t.match(/»/g)||[]).length)return null;
 if(!/\p{L}{2,}/u.test(t)||langBad(t))return null;
 return t.replace(/[.!?。]+$/,'');
}
const STOP=new Set('là của và có không một những các này đó kia ở thì mà được cho với đã sẽ rất hơn tôi ta mình'.split(' '));
const toks=s=>(String(s||'').toLowerCase().normalize('NFC').match(/\p{L}+/gu)||[]).filter(w=>w.length>=2&&!STOP.has(w));
function srcTokens(it){const set=new Set();[it.vi,it.back_vi].concat((it.key_points||[]).map(k=>k&&k.vi)).forEach(x=>toks(x).forEach(w=>set.add(w)));return set}
const norm=s=>String(s||'').toLowerCase().normalize('NFC').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
/* Ghép lời giải thích bằng mã theo loại lỗi. Trả về {text} hoặc {why} khi không đủ căn cứ. */
function explain(it,x,type){
 const Y=cleanField(x.bai_lam_noi),X=cleanField(x.de_noi);
 if(type==='extra_content'){
  if(!Y)return {why:'thiếu hoặc vô nghĩa trường bai_lam_noi'};
  return {text:'Bài làm có thêm ý: '+Y+'. Đề không nói ý này.'};
 }
 if(!Y||!X)return {why:'thiếu, cụt hoặc vô nghĩa ở de_noi/bai_lam_noi'};
 if(norm(X)===norm(Y))return {why:'de_noi và bai_lam_noi giống nhau'};
 if(type==='meaning'||type==='vocabulary'||type==='name'){
  const src=srcTokens(it);if(!toks(X).some(w=>src.has(w)))return {why:'de_noi không khớp nội dung đề tiếng Việt'};
  return {text:'Đề nói «'+X+'», nhưng bài làm nói «'+Y+'».'};
 }
 if(Y.split(/\s+/).length<2||X.split(/\s+/).length<2)return {why:'de_noi/bai_lam_noi quá ngắn, chưa đủ rõ nghĩa (cần ít nhất 2 từ mỗi trường)'};
 return {text:'Chỗ có thể chưa đúng: '+Y+'. Cách nói thường gặp: '+X+'.'};
}
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
  const drop=why=>dropped.push({type:x.type,quote:x.quote,detail:[x.de_noi,x.bai_lam_noi].filter(Boolean).join(' / '),de_noi:x.de_noi,bai_lam_noi:x.bai_lam_noi,why});
  const fields=[x.de_noi,x.bai_lam_noi].join(' ');
  if(/\p{Script=Han}/u.test(fields))return drop('lời giải thích có chữ Hán');
  if(langBad(fields)){if(!langWarn.includes('detail'))langWarn.push('detail');return drop('lẫn ngôn ngữ')}
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
  const ex=explain(it,x,type==='unknown'?'grammar':type);
  if(ex.why)return drop('lời giải thích không dùng được: '+ex.why);
  const hl=!!q&&q.length*2<=ansHan.length; // đoạn trích dài hơn nửa câu chỉ làm bằng chứng, không đánh dấu
  good.push({type:unknown?'unknown':type,quote:q,hl,detail:ex.text,de_noi:x.de_noi,bai_lam_noi:x.bai_lam_noi,suggestion:x.suggestion,relabeled,unknown});
 });
 const valid=good.filter(x=>!x.unknown&&x.type!=='extra_content'),reasons=[];
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
  else if(good.some(x=>x.type==='extra_content')&&!good.some(x=>x.unknown)){status='unsure';reasons.push('AI nghi ngờ bài làm có thêm nội dung, nhưng thêm ý chưa chắc là sai nên chỉ ở mức chưa chắc.')}
  else{status='unsure';reasons.push(good.length?'AI nêu nghi ngờ nhưng không xác định được loại lỗi, nên chưa coi là lỗi chắc chắn.':'AI báo có lỗi nhưng không chỉ ra được chỗ cụ thể có căn cứ, nên không coi là lỗi.')}
 }else{status='unsure';reasons.push('AI không đủ căn cứ để kết luận.')}
 if(langWarn.length)reasons.push('AI trả lời lẫn ngôn ngữ (không phải tiếng Việt) nên phần giải thích đó đã bị ẩn.');
 return {rv:RV,status,verdict:p.verdict,confidence:p.confidence,summary,summaryHidden,notes,issues:good,hints,dropped,langWarn,reasons,schema:(meta&&meta.schema)||'schema'};
}

/* ---------- Chuẩn hóa bản ghi kết quả đọc từ localStorage (dữ liệu có thể thiếu, sai kiểu hoặc bị sửa tay) ---------- */
const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
function normalize(res){
 if(!res||typeof res!=='object'||Array.isArray(res))return null;
 const arr=v=>Array.isArray(v)?v:[],str=v=>typeof v==='string'?v:'';
 const okStatus=STATUS_VI&&own(STATUS_VI,res.status)&&typeof res.status==='string';
 const reasons=arr(res.reasons).filter(x=>typeof x==='string').slice(0,10);
 if(!okStatus)reasons.push('Dữ liệu nhận xét lưu trong trình duyệt không hợp lệ nên được hiển thị ở mức Chưa chắc.');
 return {rv:typeof res.rv==='number'?res.rv:0,status:okStatus?res.status:'unsure',verdict:str(res.verdict),summary:str(res.summary),notes:str(res.notes),
  issues:arr(res.issues).filter(x=>x&&typeof x==='object'&&str(x.detail)).slice(0,5).map(x=>({type:typeof x.type==='string'&&own(TYPE_VI,x.type)?x.type:'unknown',quote:str(x.quote),hl:x.hl===true,detail:str(x.detail),suggestion:str(x.suggestion)})),
  hints:arr(res.hints).filter(x=>x&&typeof x==='object'&&str(x.detail)).slice(0,10).map(x=>({id:str(x.id),soft:x.soft===true,detail:str(x.detail)})),
  dropped:arr(res.dropped).slice(0,20).map(()=>({})),reasons};
}

/* ---------- Gọi Ollama ---------- */
function baseUrl(u){return String(u||DEF.url).trim().replace(/\/+$/,'')}
function validUrl(u){return /^https?:\/\/[^\s/]+(:\d+)?$/i.test(baseUrl(u))}
function fail(code,msg){return {ok:false,error:{code,msg}}}
function mapNetwork(e,state){
 if(e&&e.name==='AbortError')return state.timedOut?fail('timeout','Quá thời gian chờ AI ('+state.sec+' giây). Bạn có thể thử lại hoặc tăng thời gian chờ trong Cài đặt AI.'):fail('cancel','Đã dừng yêu cầu AI.');
 return fail('network','Không kết nối được tới Ollama. Hãy kiểm tra Ollama đang chạy, địa chỉ trong Cài đặt AI, và biến OLLAMA_ORIGINS có chứa nguồn của trang này.');
}
/* Tham số `think` của Ollama: 'on' => true, 'off' => false, 'auto' => tắt suy nghĩ với mô hình qwen3 (mô hình suy nghĩ dễ dùng hết token), các mô hình khác không gửi tham số. */
function thinkParam(cfg){
 if(cfg.think==='on')return true;if(cfg.think==='off')return false;
 return /^qwen3/i.test(String(cfg.model||''))?false:undefined;
}
function predictOf(cfg){const n=+cfg.predict;return n>=100&&n<=8192?Math.round(n):DEF.predict}
async function chatOnce(cfg,messages,signal,fmt,think){
 const res=await fetch(baseUrl(cfg.url)+'/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},signal,
  body:JSON.stringify(Object.assign({model:cfg.model||DEF.model,messages,stream:false,format:fmt,keep_alive:'10m',options:{temperature:0,num_predict:predictOf(cfg),num_ctx:3072}},think===undefined?{}:{think}))});
 if(!res.ok){
  let body='';try{body=await res.text()}catch(e){}
  if(res.status===403)return fail('origin','Ollama từ chối nguồn của trang này (HTTP 403). Cần đặt OLLAMA_ORIGINS để cho phép trang web, rồi khởi động lại Ollama.');
  if(res.status===404||/not found/i.test(body))return fail('model','Ollama không tìm thấy model "'+(cfg.model||DEF.model)+'". Cài bằng lệnh: ollama pull '+(cfg.model||DEF.model));
  return Object.assign(fail('http','Ollama trả về lỗi HTTP '+res.status+'.'),{status:res.status});
 }
 let j;try{j=await res.json()}catch(e){return fail('format','Ollama trả về dữ liệu không đọc được.')}
 const text=j&&j.message&&j.message.content,th=j&&j.message&&j.message.thinking,ns=v=>typeof v==='number'?v:0;
 return {ok:true,text:typeof text==='string'?text:'',meta:{thinking:typeof th==='string'?th:'',doneReason:j&&typeof j.done_reason==='string'?j.done_reason:'',promptTokens:ns(j&&j.prompt_eval_count),evalTokens:ns(j&&j.eval_count),totalMs:Math.round(ns(j&&j.total_duration)/1e6),loadMs:Math.round(ns(j&&j.load_duration)/1e6)}};
}

/* Hỏi AI về một câu. opts.signal: tín hiệu hủy. Tự thử lại 1 lần nếu JSON sai. HTTP 400: nếu đã gửi `think` thì bỏ tham số này và gọi lại; nếu không thì (với JSON Schema) lùi về format:'json'.
   Kết quả có `meta`: think đã gửi, done_reason, số token prompt/trả lời (cộng dồn các lượt gọi), độ dài phần suy nghĩ, số token suy nghĩ ƯỚC LƯỢNG (Ollama không tách riêng). */
async function review(it,answer,cfg,opts){
 opts=opts||{};cfg=Object.assign({},DEF,cfg||{});
 if(!hn(answer))return fail('empty','Chưa có câu trả lời tiếng Trung.');
 if(!validUrl(cfg.url))return fail('url','Địa chỉ Ollama không hợp lệ (ví dụ: http://localhost:11434).');
 const ctl=new AbortController(),state={timedOut:false,sec:cfg.timeout};
 const onAbort=()=>ctl.abort();if(opts.signal){if(opts.signal.aborted)return fail('cancel','Đã dừng yêu cầu AI.');opts.signal.addEventListener('abort',onAbort)}
 const timer=setTimeout(()=>{state.timedOut=true;ctl.abort()},Math.max(5,+cfg.timeout||DEF.timeout)*1000);
 const t0=Date.now();let messages=buildMessages(it,answer),raw='',fmt=cfg.fmt==='json'?'json':SCHEMA,mode=cfg.fmt==='json'?'json':'schema',attempt=0,think=thinkParam(cfg),thinkBackup;
 const M={think:think===undefined?'không gửi':String(think),thinkDropped:false,predict:predictOf(cfg),doneReason:'',promptTokens:0,evalTokens:0,thinkChars:0,contentChars:0,thinkSample:'',totalMs:0,loadMs:0,calls:0};
 const fin=()=>Object.assign({},M,{thinkTokensEst:M.thinkChars+M.contentChars?Math.round(M.evalTokens*M.thinkChars/(M.thinkChars+M.contentChars)):0});
 try{
  while(attempt<2){
   let r;try{r=await chatOnce(cfg,messages,ctl.signal,fmt,think)}catch(e){return mapNetwork(e,state)}
   if(!r.ok&&r.error.code==='http'&&r.status===400){
    if(think!==undefined){thinkBackup=think;think=undefined;M.thinkDropped=true;continue}
    if(mode==='schema'){fmt='json';mode='json';if(thinkBackup!==undefined){think=thinkBackup;M.thinkDropped=false}continue} // 400 không do `think`: khôi phục tham số này
   }
   if(!r.ok)return r;
   const x=r.meta;M.calls++;M.doneReason=x.doneReason;M.promptTokens=Math.max(M.promptTokens,x.promptTokens);M.evalTokens+=x.evalTokens;M.thinkChars+=x.thinking.length;M.contentChars+=r.text.length;M.totalMs+=x.totalMs;M.loadMs=Math.max(M.loadMs,x.loadMs);if(x.thinking&&!M.thinkSample)M.thinkSample=clip(x.thinking,600);
   raw=r.text;
   if(!raw.trim()&&x.thinking){ // mô hình dùng hết giới hạn token để suy nghĩ, chưa kịp trả lời
    return Object.assign(fail('think','Mô hình dùng hết giới hạn '+M.predict+' token để suy nghĩ nên chưa kịp trả lời. Hãy tắt suy nghĩ (think:false) hoặc tăng giới hạn token.'),{raw:'',meta:fin()});
   }
   const p=parseResult(raw);
   if(p)return {ok:true,result:assess(it,answer,p,{schema:mode}),ms:Date.now()-t0,model:cfg.model,attempts:attempt+1,raw,meta:fin()};
   attempt++;
   messages=messages.concat([{role:'assistant',content:raw},{role:'user',content:'Câu trả lời trước chưa phải đối tượng JSON đúng dạng. Hãy trả lời lại, chỉ gồm đối tượng JSON.'}]);
  }
  return Object.assign(fail('format','AI trả lời không đúng định dạng, kể cả sau khi thử lại. Hãy thử lại sau.'),{raw,meta:fin()});
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
function save(c){try{localStorage.setItem('hanziai.ai.v1',JSON.stringify({on:!!c.on,url:c.url,model:c.model,timeout:c.timeout,fmt:c.fmt==='json'?'json':'schema',think:THINK_MODES.includes(c.think)?c.think:'auto',predict:predictOf(c)}))}catch(e){}}

window.HSK_AI={DEF,RV,thinkParam,predictOf,TYPES,TYPE_VI,STATUS_VI,SYSTEM,SCHEMA,FEWSHOT,hn,buildMessages,parseResult,assess,normalize,cleanField,explain,rules,patternHints,keyHints,localChecks,langBad,review,ping,load,save,validUrl};
})();
