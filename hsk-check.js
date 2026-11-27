/* hsk-check.js — Chấm bài Luyện dịch bằng quy tắc, KHÔNG dùng AI, KHÔNG gọi mạng.
   window.HSK_CHK = { check(item, answer), checkPara(items, answer), normalize, segment, renderMarked, LABEL }.
   Nguyên tắc: "Chưa đúng" chỉ xuất hiện khi có căn cứ chắc chắn (lỗi trong mục avoid, mẫu ngữ pháp sai điển hình,
   nhầm từ cùng nhóm đóng khi đề yêu cầu từ khác, sai lượng từ, mất/thêm phủ định so với đề, thiếu tên riêng).
   Chỉ khác đáp án mẫu thì tối đa là "Gần đúng" hoặc "Chưa khớp, chưa đủ căn cứ" và được ghi rõ là KHÁC BIỆT, không phải LỖI.
   Dữ liệu dùng: window.HSK (từ điển HSK), window.HSK_VI (nghĩa Việt), window.HSK_CHK_DATA (hsk-check-data.js). Mở rộng HSK2–6: chỉ cần ngân hàng câu cùng định dạng. */
(function(g){
'use strict';
var DATA=function(){return g.HSK_CHK_DATA||{}};
var HANRE=/[一-鿿]/;
var VERSION=1;
var LABEL={correct:'Đúng',near:'Gần đúng, có khác biệt nhỏ',wrong:'Chưa đúng: có lỗi chắc chắn',unknown:'Chưa khớp đáp án, chưa đủ căn cứ kết luận sai',empty:'Chưa nhập câu trả lời',nohan:'Chưa có chữ Hán'};
function hn(s){return String(s==null?'':s).split('').filter(function(c){return HANRE.test(c)}).join('')}
function uniq(a){var o={},r=[];a.forEach(function(x){if(!o[x]){o[x]=1;r.push(x)}});return r}
/* ---------- Chuẩn hóa ---------- */
function numToZh(s){
 var n=parseInt(s,10);if(!(n>=0)||s.length>3)return null;
 var D='零一二三四五六七八九';
 if(n<10)return D[n];
 if(n<20)return '十'+(n%10?D[n%10]:'');
 if(n<100)return D[Math.floor(n/10)]+'十'+(n%10?D[n%10]:'');
 var h=Math.floor(n/100),r=n%100,o=D[h]+'百';
 if(r===0)return o;if(r<10)return o+'零'+D[r];if(r<20)return o+'一十'+(r%10?D[r%10]:'');
 return o+D[Math.floor(r/10)]+'十'+(r%10?D[r%10]:'');
}
/* normalize: cmp = chuỗi chỉ gồm chữ Hán (số Ả Rập đổi thành chữ Hán, phồn thể đổi sang giản thể);
   src[i] = [bắt đầu, kết thúc) của ký tự cmp[i] trong chuỗi gốc; brk[i] = true nếu có dấu câu/khoảng trắng ngay trước cmp[i]. */
function normalize(str){
 str=String(str==null?'':str);
 var TRAD=DATA().TRAD||{},cps=str.split(''),cmp=[],src=[],brk={},trad=false,latin=false,conv=false,pend=false,i=0;
 while(i<cps.length){
  var ch=cps[i].normalize('NFKC');
  if(/^[0-9]$/.test(ch)){
   var j=i,run='';while(j<cps.length&&/^[0-9]$/.test(cps[j].normalize('NFKC'))){run+=cps[j].normalize('NFKC');j++}
   var z=numToZh(run);
   if(z){if(pend&&cmp.length)brk[cmp.length]=true;pend=false;for(var k=0;k<z.length;k++){cmp.push(z[k]);src.push([i,j])}conv=true}else pend=true;
   i=j;continue}
  if(HANRE.test(ch)){
   var c1=TRAD[ch];if(c1&&c1!==ch){trad=true;ch=c1}
   if(pend&&cmp.length)brk[cmp.length]=true;pend=false;cmp.push(ch);src.push([i,i+1]);i++;continue}
  if(/^[A-Za-z]$/.test(ch))latin=true;
  pend=true;i++;
 }
 return {cmp:cmp.join(''),src:src,brk:brk,trad:trad,latin:latin,conv:conv};
}
function stripEr(s){return s.replace(/(?<!女)儿(?!子)/g,'')}
/* ---------- Tách từ (khớp từ dài nhất, từ điển HSK 1–6) ---------- */
var DICT=null;
function dict(){
 if(DICT)return DICT;DICT={};var H=g.HSK||{};
 Object.keys(H).forEach(function(l){(H[l]||[]).forEach(function(e){var w=e&&e[0];if(typeof w==='string'&&/^[一-鿿]{2,6}$/.test(w))DICT[w]=1})});
 return DICT;
}
function segment(s,extra){
 var D=dict(),out=[],i=0;
 while(i<s.length){
  var L=Math.min(6,s.length-i),hit=0;
  for(;L>=2;L--){var w=s.substr(i,L);if(D[w]||(extra&&extra[w])){hit=L;break}}
  if(!hit)hit=1;out.push({t:s.substr(i,hit),s:i,e:i+hit});i+=hit;
 }
 return out;
}
function teq(a,b){return a===b||stripEr(a)===stripEr(b)}
function isSoft(t){return t.length===1&&(DATA().SOFT||'').indexOf(t)>=0}
function isNeg(t){return t==='不'||t==='没'||t==='没有'}
function classOf(t){var C=DATA().CLASSES||{};for(var k in C)if(C[k].indexOf(t)>=0)return k;return null}
function gloss(t){var V=g.HSK_VI||{},P=(DATA().PART||{});if(P[t])return P[t];var v=V[t];return v?String(v).split(/[;,]/)[0].trim():''}
function q(t){var gl=gloss(t);return '«'+t+'»'+(gl?' ('+gl+')':'')}
/* ---------- Ứng viên đáp án chấp nhận ---------- */
var CACHE={};
function extraWords(item){
 var o={};(item.vocab||[]).forEach(function(v){if(v&&v.w&&/^[一-鿿]{2,6}$/.test(v.w))o[v.w]=1});
 (item.names||[]).forEach(function(n){n=hn(n);if(n.length>=2&&n.length<=6)o[n]=1});
 return o;
}
function variantsOf(base,kps,useRaw){
 var res=[base];
 kps.forEach(function(kp){
  var forms=uniq((kp.zh_ok||[]).map(function(z){return useRaw?String(z):hn(z)}).filter(Boolean));if(forms.length<2)return;
  var loc=null;forms.forEach(function(f){if(loc===null&&base.indexOf(f)>=0)loc=f});
  if(loc===null)return;
  var nf=forms.filter(function(f){return f!==loc&&Math.abs(f.length-loc.length)<=2});
  if(!nf.length)return;
  var nx=[];
  res.forEach(function(r){nx.push(r);if(r.indexOf(loc)>=0)nf.forEach(function(f){nx.push(r.replace(loc,f))})});
  res=uniq(nx).slice(0,300);
 });
 return res;
}
function candidates(item){
 var key=item.id||item.zh;if(CACHE[key]&&CACHE[key].zh===item.zh)return CACHE[key].c;
 var c=[],seen={},add=function(raw,kind){var z=stripEr(normalize(raw).cmp);if(!z||seen[z])return;seen[z]=1;c.push({raw:raw,z:z,kind:kind})};
 add(item.zh,'main');
 (item.alt||[]).forEach(function(a){if(a&&a.zh)add(a.zh,'alt')});
 ((DATA().ACCEPT||{})[item.id]||[]).forEach(function(r){add(r,'extra')});
 var kps=(item.key_points||[]).filter(function(k){return k&&Array.isArray(k.zh_ok)});
 var rawBases=[item.zh].concat((item.alt||[]).map(function(a){return a&&a.zh?a.zh:''}).filter(Boolean));
 rawBases.forEach(function(b){variantsOf(b,kps,true).forEach(function(v){add(v,'gen')})});
 rawBases.forEach(function(b){variantsOf(normalize(b).cmp,kps,false).forEach(function(v){add(v,'gen')})});
 CACHE[key]={zh:item.zh,c:c};return c;
}
/* ---------- Căn chỉnh theo từ (khoảng cách sửa có trọng số) ---------- */
function wIns(t){return isNeg(t)?1.2:isSoft(t)?0.5:1}
function wSub(u,r){if(teq(u,r))return 0;if(u.split('').some(function(c){return r.indexOf(c)>=0}))return 0.6;return 1.2}
function align(U,R){
 var n=U.length,m=R.length,D=[],i,j;
 for(i=0;i<=n;i++){D[i]=[];for(j=0;j<=m;j++)D[i][j]=0}
 for(i=1;i<=n;i++)D[i][0]=D[i-1][0]+wIns(U[i-1].t);
 for(j=1;j<=m;j++)D[0][j]=D[0][j-1]+wIns(R[j-1].t);
 for(i=1;i<=n;i++)for(j=1;j<=m;j++){
  var d=D[i-1][j-1]+wSub(U[i-1].t,R[j-1].t),a=D[i-1][j]+wIns(U[i-1].t),b=D[i][j-1]+wIns(R[j-1].t);
  D[i][j]=Math.min(d,a,b);
 }
 var ops=[];i=n;j=m;
 while(i>0||j>0){
  if(i>0&&j>0&&D[i][j]===D[i-1][j-1]+wSub(U[i-1].t,R[j-1].t)){ops.push({k:teq(U[i-1].t,R[j-1].t)?'eq':'sub',u:i-1,r:j-1});i--;j--}
  else if(i>0&&D[i][j]===D[i-1][j]+wIns(U[i-1].t)){ops.push({k:'ins',u:i-1,r:-1});i--}
  else{ops.push({k:'del',u:-1,r:j-1});j--}
 }
 ops.reverse();var cost=D[n][m];
 /* Nhận diện từ bị đảo chỗ: một từ thừa và một từ thiếu giống nhau => đổi chỗ, không phải thêm + bớt. */
 var used={};
 ops.forEach(function(a,ai){
  if(a.k!=='ins')return;
  for(var bi=0;bi<ops.length;bi++){var b=ops[bi];if(b.k==='del'&&!used[bi]&&teq(U[a.u].t,R[b.r].t)){used[bi]=1;a.k='mv';a.r=b.r;b.k='mvd';cost-=wIns(U[a.u].t)*2-0.8;break}}
 });
 ops=ops.filter(function(o){return o.k!=='mvd'});
 /* Hai từ kề nhau đổi chỗ cho nhau (sub, sub) */
 for(var x=0;x+1<ops.length;x++){
  var p1=ops[x],p2=ops[x+1];
  if(p1.k==='sub'&&p2.k==='sub'&&teq(U[p1.u].t,R[p2.r].t)&&teq(U[p2.u].t,R[p1.r].t)){p1.k='mv';p2.k='mv';cost-=1.6}
 }
 var den=Math.max(1,Math.max(n,m));
 return {ops:ops,cost:Math.max(0,cost),dist:Math.max(0,cost)/den};
}
/* ---------- Kiểm tra theo cụm ý chính (key_points) ---------- */
function slotsOf(item,cmpE){
 return (item.key_points||[]).filter(function(k){return k&&k.vi&&Array.isArray(k.zh_ok)&&k.zh_ok.length}).map(function(k){
  var forms=k.zh_ok.map(function(z){return stripEr(hn(z))}).filter(Boolean),pos=-1,form='';
  forms.forEach(function(f){var p=cmpE.indexOf(f);if(p>=0&&(pos<0||p<pos)){pos=p;form=f}});
  return {vi:k.vi,forms:k.zh_ok,ok:pos>=0,pos:pos,form:form};
 });
}
/* ---------- Phát hiện lỗi chắc chắn ---------- */
var NEGZH=/[不没别无未非勿莫否]/;
var NEGIDIOM=/对不起|不好意思|没关系|不客气|不用谢|不谢|不错|不得了|不管|不过|不但|不仅|无论/g;
function hasNeg(c){return NEGZH.test(c.replace(NEGIDIOM,''))}
function negVi(vi){var v=String(vi||'');if(/\?/.test(v))return false;return /(^|[\s,.;!])(không|chưa|chẳng|đừng|chớ|khỏi)([\s,.;!]|$)/i.test(v)}
function clauseRanges(A){
 var cs=[],start=0,n=A.cmp.length;
 for(var i=1;i<=n;i++){if(i===n||A.brk[i]){cs.push([start,i]);start=i}}
 return cs;
}
function hardIssues(item,A,toks,best,slots){
 var out=[],cmpE=stripEr(A.cmp),D=DATA();
 /* H1: trùng nguyên một lỗi thường gặp trong mục avoid */
 (item.avoid||[]).forEach(function(a){
  if(a&&a.zh&&stripEr(normalize(a.zh).cmp)===cmpE)out.push({type:'known',s:0,e:A.cmp.length,msg:'Trùng một lỗi thường gặp của câu này'+(a.why?': '+a.why:'.'),fix:null});
 });
 /* H2: mẫu ngữ pháp sai điển hình, quét trong từng mệnh đề */
 var embed=/知道|问|告诉|不知|看看|猜|觉得|明白|记得|想知|说|听|关心/;
 clauseRanges(A).forEach(function(cr){
  var c=A.cmp.slice(cr[0],cr[1]);
  (D.RULES||[]).forEach(function(r){
   r.re.lastIndex=0;var m;
   while((m=r.re.exec(c))){
    if(m.index===r.re.lastIndex)r.re.lastIndex++;
    var prev=m.index>0?c[m.index-1]:'';
    if(r.skipPrev&&prev&&r.skipPrev.indexOf(prev)>=0)continue;
    if(r.test&&!r.test(m,c))continue;
    if(r.embed&&embed.test(c))continue;
    out.push({type:r.type==='word_order'?'order':'grammar',s:cr[0]+m.index,e:cr[0]+m.index+m[0].length,msg:r.msg+(r.eg?' Ví dụ: '+r.eg+'.':''),rule:r.id,fix:null});
    break;
   }
  });
 });
 /* H3: sai lượng từ */
 var MW=D.MEASURE||{},mws=D.MWSET||'';
 Object.keys(MW).forEach(function(noun){
  var re=new RegExp('([一二两三四五六七八九十几这那哪每])([一-鿿])(?='+noun+')','g'),m;
  while((m=re.exec(cmpE))){
   var u=m[2];if(mws.indexOf(u)>=0&&MW[noun].indexOf(u)<0)out.push({type:'measure',s:m.index+1,e:m.index+2,msg:'«'+noun+'» đi với lượng từ «'+MW[noun].join('/')+'», không dùng «'+u+'».',fix:null});
  }
 });
 /* H4: nhầm từ cùng nhóm đóng trong chỗ đề yêu cầu một từ cụ thể (từ nằm trong cụm ý chính) */
 if(best){
  best.al.ops.forEach(function(o){
   if(o.k!=='sub')return;
   var u=toks[o.u],r=best.R[o.r],cu=classOf(u.t),cr=classOf(r.t);
   if(!cu||cu!==cr||teq(u.t,r.t))return;
   var inKP=(item.key_points||[]).some(function(k){return(k.zh_ok||[]).some(function(z){return hn(z).indexOf(r.t)>=0})});
   var other=(item.key_points||[]).some(function(k){return(k.zh_ok||[]).some(function(z){return hn(z).indexOf(u.t)>=0})});
   if(inKP&&!other)out.push({type:'wrong_word',s:u.s,e:u.e,msg:'Đề yêu cầu '+q(r.t)+' nhưng bạn viết '+q(u.t)+'.',fix:r.t});
  });
 }
 /* H5: đề có cụm ý chính mang phủ định (不…/没…), người học viết đúng phần khẳng định của cụm đó mà không có phủ định => nghĩa bị đảo.
    Chỉ kết luận khi các cụm ý chính còn lại đều có mặt (tránh nhầm với bài làm chưa đủ ý). */
 var kpsAll=(item.key_points||[]).filter(function(k){return k&&Array.isArray(k.zh_ok)&&k.zh_ok.length});
 var negKPs=kpsAll.filter(function(k){return k.zh_ok.some(function(z){return /[不没]/.test(hn(z).replace(NEGIDIOM,''))})});
 if(negKPs.length&&!hasNeg(A.cmp)){
  var othersOk=kpsAll.filter(function(k){return negKPs.indexOf(k)<0}).every(function(k){return k.zh_ok.some(function(z){return cmpE.indexOf(stripEr(hn(z)))>=0})});
  if(othersOk)negKPs.forEach(function(k){
   var hitStem=null;
   k.zh_ok.forEach(function(z){
    var f=hn(z),st=f.replace(/没有|没|不/,'');
    if(st&&st!==f&&cmpE.indexOf(stripEr(st))>=0&&!hitStem)hitStem={st:st,pos:cmpE.indexOf(stripEr(st))};
   });
   if(hitStem)out.push({type:'negation',s:hitStem.pos,e:hitStem.pos+hitStem.st.length,msg:'Đề có ý phủ định («'+k.vi+'») nhưng câu của bạn viết ở dạng khẳng định, nghĩa bị đảo ngược. Thêm 不 hoặc 没 vào chỗ phù hợp.',fix:null});
  });
 }
 /* H6: tên riêng bị viết thành tên khác (nếu chỉ thiếu tên thì chỉ là nhận xét nhẹ, không kết luận sai) */
 if(best)(item.names||[]).forEach(function(nm){
  var z=hn(nm);if(!z||A.cmp.indexOf(z)>=0)return;
  best.al.ops.forEach(function(o){
   if(o.k==='sub'&&best.R[o.r].t===z){var u=toks[o.u];out.push({type:'name',s:u.s,e:u.e,msg:'Tên riêng trong đề là «'+nm+'» nhưng bài làm có tên khác hoặc viết sai tên.',fix:nm})}
  });
 });
 return out;
}
/* ---------- Giải thích khác biệt (mức "khác đáp án mẫu", không phải lỗi) ---------- */
function diffIssues(al,U,R){
 var out=[];
 al.ops.forEach(function(o){
  if(o.k==='eq')return;
  if(o.k==='del'){var t=R[o.r].t;out.push({type:'missing',msg:'So với đáp án mẫu: thiếu '+q(t)+'. Nếu bạn dùng cách diễn đạt khác có cùng nghĩa thì có thể vẫn đúng.',u:-1,r:o.r,at:o.u})}
  else if(o.k==='ins'){var t2=U[o.u].t;out.push({type:'extra',msg:'So với đáp án mẫu: có thêm '+q(t2)+'. Hãy xem từ này có cần cho nghĩa của câu không.',u:o.u})}
  else if(o.k==='sub'){out.push({type:'diff',msg:'Đáp án mẫu dùng '+q(R[o.r].t)+' ở chỗ bạn viết '+q(U[o.u].t)+'. Nếu cùng nghĩa thì vẫn có thể chấp nhận.',u:o.u})}
  else if(o.k==='mv'){out.push({type:'order',msg:'Từ '+q(U[o.u].t)+' đứng ở vị trí khác so với đáp án mẫu. Thứ tự từ trong tiếng Trung khá chặt, hãy đối chiếu với đáp án.',u:o.u})}
 });
 return out;
}
/* ---------- Hàm chính ---------- */
function check(item,answer,opts){
 opts=opts||{};
 var res={v:VERSION,orig:String(answer==null?'':answer),verdict:'unknown',label:'',kind:null,best:null,fix:null,issues:[],hard:[],marks:[],gaps:[],slots:[],notes:[],dist:null};
 var A=normalize(res.orig);
 if(!A.cmp){res.verdict=/\S/.test(res.orig)?'nohan':'empty';res.label=LABEL[res.verdict];if(res.verdict==='nohan')res.notes.push('Hãy viết bằng chữ Hán (không dùng pinyin hay chữ Latin).');return res}
 if(A.trad)res.notes.push('Bạn dùng chữ Hán phồn thể; Hanzi AI dùng chữ giản thể. Chữ phồn thể không bị tính là lỗi.');
 if(A.latin)res.notes.push('Câu có chữ Latin (pinyin); phần đó không được dùng để chấm.');
 var cmpE=stripEr(A.cmp),cands=candidates(item),ex=extraWords(item);
 /* 1. Khớp đáp án (đã chuẩn hóa) */
 var hit=null;cands.forEach(function(c){if(!hit&&c.z===cmpE)hit=c});
 if(hit){res.verdict='correct';res.label=LABEL.correct;res.kind=hit.kind;res.best={raw:hit.raw,kind:hit.kind};return res}
 /* 2. Căn chỉnh với đáp án gần nhất */
 var U=segment(A.cmp,ex),best=null;
 cands.forEach(function(c){
  var R=segment(c.z,ex),al=align(U,R);
  if(!best||al.dist<best.al.dist-1e-9||(Math.abs(al.dist-best.al.dist)<1e-9&&c.kind==='main'))best={c:c,R:R,al:al};
 });
 res.best={raw:best.c.raw,kind:best.c.kind};res.dist=best.al.dist;
 res.slots=slotsOf(item,cmpE);
 var slotsOk=res.slots.length?res.slots.every(function(s){return s.ok}):false;
 /* 3. Lỗi chắc chắn */
 res.hard=hardIssues(item,A,U,best,res.slots);
 /* 4. Khác biệt so với đáp án mẫu (chỉ liệt kê khi đủ gần để so sánh có nghĩa) */
 var comparable=best.al.dist<=0.6;
 if(comparable)res.issues=diffIssues(best.al,U,best.R);
 /* 5. Kết luận */
 if(res.hard.length)res.verdict='wrong';
 else if(res.slots.length?(slotsOk&&best.al.dist<=0.5):best.al.dist<=0.25)res.verdict='near';
 else res.verdict='unknown';
 res.label=LABEL[res.verdict];
 /* 6. Đánh dấu vị trí (theo ký tự trong chuỗi gốc) */
 var mk=[],gp=[],S=A.src;
 function span(s,e){if(e<=s||!S[s])return null;return [S[s][0],S[e-1][1]]}
 if(comparable){
  best.al.ops.forEach(function(o){
   if(o.k==='ins'||o.k==='sub'||o.k==='mv'){var t=U[o.u],sp=span(t.s,t.e);if(sp)mk.push({s:sp[0],e:sp[1],cls:o.k==='ins'?'ex':o.k==='sub'?'sb':'mv',tip:o.k==='ins'?'Thêm so với đáp án mẫu':o.k==='sub'?'Đáp án mẫu: '+best.R[o.r].t:'Vị trí khác đáp án mẫu'})}
  });
 }
 /* vị trí thiếu: tính từ chỉ số từ người dùng đứng ngay sau chỗ thiếu */
 if(comparable){
  var ui=0;
  best.al.ops.forEach(function(o){
   if(o.k==='del'){var t=ui<U.length?U[ui]:null,pos=t?(S[t.s]?S[t.s][0]:res.orig.length):(S.length?S[S.length-1][1]:0);gp.push({at:pos,text:best.R[o.r].t,tip:'Thiếu so với đáp án mẫu'})}
   else if(o.k!=='mvd'&&o.u>=0)ui=o.u+1;
  });
 }
 res.hard.forEach(function(h){var sp=span(h.s,h.e);if(sp)mk.push({s:sp[0],e:sp[1],cls:'hd',tip:h.msg})});
 res.marks=mk;res.gaps=gp;
 /* 7. Câu sửa gợi ý */
 if((res.verdict==='wrong'||res.verdict==='near')&&best.al.dist<=0.7)res.fix=best.c.raw;
 return res;
}
/* ---------- Đoạn văn: tách câu và ghép với từng câu của đề ---------- */
function splitSentences(text){
 var out=[],cur='';
 String(text||'').split('').forEach(function(ch){cur+=ch;if(/[。！？!?\n]/.test(ch)){if(hn(cur))out.push(cur.trim());cur=''}});
 if(hn(cur))out.push(cur.trim());
 return out;
}
function checkPara(items,answer){
 var S=splitSentences(answer),n=S.length,m=items.length,i,j;
 var sc=[];for(i=0;i<n;i++){sc[i]=[];for(j=0;j<m;j++){var r=check(items[j],S[i]);sc[i][j]=r.verdict==='correct'?0:(r.dist==null?1:Math.min(1,r.dist))}}
 var SK=0.8,Dp=[],B=[];
 for(i=0;i<=n;i++){Dp[i]=[];B[i]=[];for(j=0;j<=m;j++){Dp[i][j]=0;B[i][j]=0}}
 for(i=1;i<=n;i++){Dp[i][0]=i*SK;B[i][0]=1}
 for(j=1;j<=m;j++){Dp[0][j]=j*SK;B[0][j]=2}
 for(i=1;i<=n;i++)for(j=1;j<=m;j++){
  var a=Dp[i-1][j-1]+sc[i-1][j-1],b=Dp[i-1][j]+SK,c=Dp[i][j-1]+SK;
  if(a<=b&&a<=c){Dp[i][j]=a;B[i][j]=0}else if(b<=c){Dp[i][j]=b;B[i][j]=1}else{Dp[i][j]=c;B[i][j]=2}
 }
 var pairs=[],extra=[],missing=[];i=n;j=m;
 while(i>0||j>0){
  if(i>0&&j>0&&B[i][j]===0){pairs.push({s:S[i-1],item:items[j-1],idx:j-1});i--;j--}
  else if(i>0&&(j===0||B[i][j]===1)){extra.push(S[i-1]);i--}
  else{missing.push(items[j-1]);j--}
 }
 pairs.reverse();
 pairs.forEach(function(p){p.res=check(p.item,p.s)});
 var cnt={correct:0,near:0,wrong:0,unknown:0};pairs.forEach(function(p){cnt[p.res.verdict]=(cnt[p.res.verdict]||0)+1});
 var verdict;
 if(!n)verdict='empty';
 else if(cnt.wrong)verdict='wrong';
 else if(missing.length||extra.length||cnt.unknown)verdict='unknown';
 else verdict=cnt.near?'near':'correct';
 return {verdict:verdict,label:LABEL[verdict],pairs:pairs,extra:extra,missing:missing,counts:cnt,total:m,sentences:n};
}
/* ---------- Hiển thị câu của người học kèm đánh dấu (an toàn XSS qua esc) ---------- */
function renderMarked(res,esc){
 esc=esc||function(s){return String(s).replace(/[&<>"']/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]})};
 var o=res.orig,pts=[];
 (res.marks||[]).forEach(function(m){pts.push({s:m.s,e:m.e,cls:m.cls,tip:m.tip})});
 var rank={hd:4,sb:3,ex:2,mv:1};
 /* ký tự -> dấu có ưu tiên cao nhất */
 var per=new Array(o.length);
 pts.forEach(function(p){for(var i=p.s;i<p.e&&i<o.length;i++){if(!per[i]||rank[p.cls]>rank[per[i].cls])per[i]=p}});
 var gaps={};(res.gaps||[]).forEach(function(gp){(gaps[gp.at]=gaps[gp.at]||[]).push(gp)});
 var h='',i=0,cur=null,open=false;
 function closeSpan(){if(open){h+='</span>';open=false}}
 for(i=0;i<=o.length;i++){
  if(gaps[i]){closeSpan();cur=null;gaps[i].forEach(function(gp){h+='<span class="mk gp" title="'+esc(gp.tip)+'">＋'+esc(gp.text)+'</span>'})}
  if(i===o.length)break;
  var p=per[i]||null;
  if(p!==cur){closeSpan();cur=p;if(p){h+='<span class="mk '+p.cls+'" title="'+esc(p.tip)+'">';open=true}}
  h+=esc(o[i]);
 }
 closeSpan();return h;
}
g.HSK_CHK={version:VERSION,check:check,checkPara:checkPara,splitSentences:splitSentences,normalize:normalize,segment:segment,renderMarked:renderMarked,candidates:candidates,LABEL:LABEL,hn:hn};
})(typeof window!=='undefined'?window:globalThis);
