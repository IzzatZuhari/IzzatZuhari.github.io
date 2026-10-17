const $=s=>document.querySelector(s),DAY=24,TIME=9000;let S,deck=[],tm,busy=1;
const hi=()=>JSON.parse(localStorage.getItem('k4')||'{"d":0,"k":0}');
const R=a=>a[Math.random()*a.length|0],cl=v=>Math.max(0,Math.min(100,v));
function shuffle(){deck=[...CARDS].sort(()=>Math.random()-.5)}
function newGame(){S={e:100,p:100,k:0,day:1,total:0};shuffle();startDay()}
function startDay(){S.n=0;S.k=0;S.q=[];S.mod=R(MODS);S.tgt=Math.min(18,9+S.day*1.5|0);
 ov(`<div class="e">🌅</div><h1>Hari ${S.day}: ${S.mod[0]}</h1><p>${S.mod[1]}<br>Sasaran: <b>${S.tgt} KPI</b> sebelum 5:00 petang.</p><button id="go">Buka Kaunter</button>`,()=>{$('#ov').style.display='none';draw()});
 $('#dy').textContent='Hari '+S.day;ui()}
function ov(h,f){const o=$('#ov');o.innerHTML=h;o.style.display='flex';busy=1;clearTimeout(tm);$('#timer').style.width=0;o.querySelector('#go')&&(o.querySelector('#go').onclick=f)}
function ui(){$('#be').style.width=S.e+'%';$('#bp').style.width=S.p+'%';$('#bk').style.width=Math.min(100,S.k/S.tgt*100)+'%';$('#kt').textContent=S.k+'/'+S.tgt;
 const m=480+S.n*(540/DAY);$('#clk').textContent=`${(m/60|0)%12||12}:${String(m%60|0).padStart(2,'0')} ${m>=720?'PM':'AM'}`;
 $('#led').textContent=String(S.total+42).padStart(3,'0')}
function draw(){if(S.n>=DAY)return endDay();
 if(S.q.length&&S.q[0][0]<=S.n)S.c=S.q.shift()[1];else{if(!deck.length)shuffle();S.c=deck.pop()}
 const c=S.c;$('#ico').textContent=c[0];$('#ct').textContent=c[1];$('#tx').textContent='“'+c[2]+'”';
 $('#la').textContent=c[3];$('#lb').textContent=c[5];$('#ba').textContent='◀ '+c[3];$('#bb').textContent=c[5]+' ▶';
 const k=$('#card');k.style.transition='none';k.style.transform='translateX(0)';k.style.opacity=1;busy=0;
 const t=$('#timer');t.style.transition='none';t.style.width='100%';setTimeout(()=>{t.style.transition=`width ${TIME}ms linear`;t.style.width='0'},30);
 clearTimeout(tm);tm=setTimeout(()=>{S.p=cl(S.p-8);pick(Math.random()<.5?0:1)},TIME+50)}
function pick(i){if(busy)return;busy=1;clearTimeout(tm);const c=S.c,f=c[4+2*i],m=S.mod,sc=1+.06*(S.day-1);
 let[e,p,k,end,fu,bo]=f;if(bo&&Math.random()<bo){p+=15;k+=1}
 S.e=cl(S.e+(e<0?e*m[3]*sc:e));S.p=cl(S.p+(p<0?p*m[2]*sc:p));S.k=Math.max(0,S.k+k);S.n++;S.total++;
 if(fu)S.q.push([S.n+2,SP[fu]]);
 if(navigator.vibrate)navigator.vibrate(p<0?40:10);
 flash('se',e);flash('sp',p);flash('sk',k);ui();
 const cd=$('#card');cd.style.transition='transform .3s,opacity .3s';cd.style.transform=`translateX(${i?420:-420}px) rotate(${i?25:-25}deg)`;cd.style.opacity=0;
 setTimeout(()=>end?over(end):S.e<=0?over('energy'):S.p<=0?over('patience'):draw(),320)}
function flash(id,v){if(!v)return;const el=$('#'+id);el.classList.remove('shake');void el.offsetWidth;if(v<0)el.classList.add('shake')}
function endDay(){S.n=DAY;ui();if(S.k<S.tgt)return over('kpi');
 const b=hi();if(S.day>b.d)localStorage.setItem('k4',JSON.stringify({d:S.day,k:S.total}));
 ov(`<div class="e">🏆</div><h1>Hari ${S.day} Selesai!</h1><p>KPI ${S.k}/${S.tgt}. Datuk puas hati.<br>Tenaga & kesabaran dipulihkan sedikit selepas rehat balik kampung.</p><button id="go">Hari Seterusnya ▶</button>`,()=>{S.day++;S.e=cl(S.e+40);S.p=cl(S.p+30);startDay()})}
function over(k){const E=END[k],b=hi();if(S.day>b.d||(S.day==b.d&&S.total>b.k))localStorage.setItem('k4',JSON.stringify({d:S.day,k:S.total}));
 const t=`Saya bertahan ${S.day} hari (${S.total} pelanggan) di Kaunter 4 sebelum "${E[1]}". Boleh kalahkan saya? ${location.href}`,h=hi();
 ov(`<div class="e">${E[0]}</div><h1>${E[1]}</h1><p>${E[2]}</p><p>Hari ${S.day} · ${S.total} pelanggan<br>🏅 Rekod: Hari ${h.d}</p><button id="go">Main Semula</button><button class="s" id="sh">📤 Kongsi</button>`,newGame);
 $('#sh').onclick=()=>navigator.share?navigator.share({text:t}):navigator.clipboard.writeText(t).then(()=>$('#sh').textContent='Disalin ✔')}
// Seret / klik
let x0=null;const cd=$('#card');
cd.onpointerdown=e=>{if(!busy){x0=e.clientX;cd.setPointerCapture(e.pointerId);cd.style.transition='none'}};
cd.onpointermove=e=>{if(x0==null)return;const d=e.clientX-x0;cd.style.transform=`translateX(${d}px) rotate(${d/18}deg)`;
 $('#la').style.opacity=d<-20?Math.min(1,-d/90):0;$('#lb').style.opacity=d>20?Math.min(1,d/90):0;
 const f=S.c[d<0?4:6];['se','sp','sk'].forEach((id,j)=>$('#'+id).classList.toggle('hint',Math.abs(d)>40&&!!f[j]))};
cd.onpointerup=e=>{if(x0==null)return;const d=e.clientX-x0;x0=null;['la','lb'].forEach(i=>$('#'+i).style.opacity=0);document.querySelectorAll('.hint').forEach(n=>n.classList.remove('hint'));
 if(Math.abs(d)>90)pick(d>0?1:0);else{cd.style.transition='transform .2s';cd.style.transform='translateX(0)'}};
$('#ba').onclick=()=>pick(0);$('#bb').onclick=()=>pick(1);
addEventListener('keydown',e=>{if(e.key=='ArrowLeft')pick(0);if(e.key=='ArrowRight')pick(1)});
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
ov(`<div class="e">🏛️</div><h1>KAUNTER 4</h1><p>Anda Pegawai Gred N19, JPUAM.<br>Seret kad kiri/kanan (atau tekan butang).<br>Jangan biar ⚡ atau 😡 sampai 0. Capai KPI sebelum 5:00 petang.<br><small>Ada masa 9 saat setiap kad!</small></p><button id="go">Mula Syif</button>`,newGame);
