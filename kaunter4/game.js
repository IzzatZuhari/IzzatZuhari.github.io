const $=s=>$d.querySelector(s),$d=document,DAY=24,REPO='IzzatZuhari/IzzatZuhari.github.io';
const MD={biasa:["📋","Syif Biasa","Sasaran KPI naik setiap hari.",9000,1],rush:["🔥","Rush Hour","5 saat setiap kad. Kesan buruk 1.3×.",5000,1.3],mar:["♾️","Maraton","Tiada sasaran. Bertahan selagi mampu.",9000,1,1]};
const AC=[["d1","🌅","Hari Pertama","Habiskan Hari 1"],["d5","🏅","Veteran N19","Sampai Hari 5"],["rush","🔥","Tahan Panas","Menang sehari dalam Rush Hour"],["mar","♾️","Tak Reti Balik","Capai Hari 3 dalam Maraton"],["hero","🛡️","Berintegriti","Tolak duit kopi"],["sprm","🚔","Kena Cekup","Terima duit kopi"],["viral","📹","Selebriti TikTok","Jadi viral"],["burn","🤕","Dapat MC","Burnout"],["datuk","👔","Bersemuka Datuk","Jumpa Datuk Hamdan"]];
let S,deck=[],tm,busy=1,mode='biasa',G=JSON.parse(localStorage.k4a||'{}'),AX;
const R=a=>a[Math.random()*a.length|0],cl=v=>Math.max(0,Math.min(100,v)),sc=()=>S.total*10+S.day*50;
const rk=()=>sc()<300?"Pegawai Pelatih":sc()<800?"Pegawai Cemerlang":sc()<1800?"Veteran N19":"Legenda Kaunter";
function bp(f,d=.12){try{AX=AX||new AudioContext();const o=AX.createOscillator(),g=AX.createGain();o.type='square';o.frequency.value=f;g.gain.value=.05;o.connect(g);g.connect(AX.destination);o.start();g.gain.exponentialRampToValueAtTime(.001,AX.currentTime+d);o.stop(AX.currentTime+d)}catch(e){}}
function ach(id){if(G[id])return;G[id]=1;localStorage.k4a=JSON.stringify(G);const a=AC.find(x=>x[0]==id),t=$('#toast');t.textContent=`${a[1]} ${a[2]}!`;t.style.top='10px';bp(880,.3);setTimeout(()=>t.style.top='-60px',2800)}
function bg(){const r=(a,b)=>a+Math.random()*(b-a);let s='<svg viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="w" x2="0" y2="1"><stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#0b1f4b"/></linearGradient><radialGradient id="l"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect width="400" height="800" fill="url(#w)"/>';
 for(let i=0;i<4;i++)s+=`<ellipse cx="${50+i*100}" cy="20" rx="60" ry="20" fill="url(#l)"/>`;
 s+='<rect y="50" width="400" height="26" fill="#ffd23f"/><text x="200" y="68" font-size="12" font-weight="800" text-anchor="middle" fill="#0b1f4b" font-family="sans-serif">JABATAN PENDAFTARAN &amp; URUSAN AM MALAYSIA</text>';
 for(let i=0;i<4;i++){const x=20+i*95;s+=`<rect x="${x}" y="90" width="80" height="14" fill="#150a00"/><text x="${x+40}" y="101" font-size="10" fill="#ff9a1f" text-anchor="middle" font-family="monospace">KAUNTER ${i+1}</text><rect x="${x}" y="106" width="80" height="64" rx="4" fill="#9ad1ff" opacity=".3" stroke="#fff5"/><circle cx="${x+40}" cy="128" r="9" fill="#e0ac84"/><rect x="${x+28}" y="137" width="24" height="33" rx="9" fill="#3b82f6"/><rect x="${x-4}" y="170" width="88" height="12" fill="#6b4f3a"/>`}
 s+='<rect y="480" width="400" height="320" fill="#13296b"/>';for(let i=0;i<8;i++)s+=`<path d="M0 ${480+i*45}H400" stroke="#fff2"/>`;
 for(let y=520;y<800;y+=90)for(let x=-10;x<400;x+=38){const h=r(0,360),sk=R(['#e0ac84','#c68642','#8d5524','#f1c27d']);s+=`<rect x="${x}" y="${y+22}" width="30" height="24" rx="5" fill="#2b6fe0"/><rect x="${x+4}" y="${y}" width="22" height="26" rx="9" fill="hsl(${h},55%,45%)"/><circle cx="${x+15}" cy="${y-8}" r="9" fill="${sk}"/>${Math.random()<.3?`<path d="M${x+5} ${y-9}a10 10 0 0 1 20 0v6h-20z" fill="hsl(${h},50%,30%)"/>`:''}`}
 $('#bg').innerHTML=s+'</svg>'}
function ov(h,f){const o=$('#ov');o.innerHTML=h;o.style.display='flex';busy=1;clearTimeout(tm);$('#timer').style.width=0;const g=o.querySelector('#go');if(g)g.onclick=f}
function panel(h){ov(h+'<button class="s" id="bk2">◀ Kembali</button>');$('#bk2').onclick=menu}
function menu(){ov(`<div class="e">🏛️</div><h1>KAUNTER 4</h1><p class="sub">Simulasi Pegawai Gred N19 · JPUAM<br>Bertahan sampai 5:00 petang.</p>${Object.entries(MD).map(([k,m])=>`<button class="m${k==mode?' on':''}" data-m="${k}">${m[0]} ${m[1]}<small>${m[2]}</small></button>`).join('')}<button id="go">▶ Mula Syif</button><div class="row"><button class="s" id="ac">🏆 Pencapaian</button><button class="s" id="lb2">📊 Markah</button><button class="s" id="hp">❓ Cara</button></div>`,newGame);
 $d.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{mode=b.dataset.m;menu()});
 $('#ac').onclick=()=>panel(`<h1>🏆 Pencapaian ${Object.keys(G).length}/${AC.length}</h1><div class="al">${AC.map(a=>`<div class="${G[a[0]]?'':'lk'}">${G[a[0]]?a[1]:'❓'} <b>${a[2]}</b><br>${a[3]}</div>`).join('')}</div>`);
 $('#lb2').onclick=board;
 $('#hp').onclick=()=>panel('<h1>❓ Cara Main</h1><p>Seret kad ke kiri/kanan, atau tekan butang.<br>⚡ Tenaga atau 😡 Kesabaran sampai 0 = tamat.<br>📊 KPI mesti cukup sebelum 5:00 petang.<br>Setiap kad ada pemasa. Pilihan tertentu ada kesan susulan, jadi berhati-hati dengan sampul.</p>')}
async function board(){const B=JSON.parse(localStorage.k4s||'{}');panel(`<h1>📊 Papan Markah</h1><p>Terbaik anda: ${Object.entries(B).map(([k,v])=>MD[k][0]+v).join(' ')||'-'}</p><p id="bl">Memuatkan…</p>`);
 try{const a=await(await fetch('leaderboard.json?'+Date.now())).json();$('#bl').innerHTML=a.length?'<ol class="lbl">'+a.slice(0,10).map(e=>`<li><b>${e.n}</b> ${MD[e.m]?MD[e.m][0]:''} H${e.d}<span>${e.s}</span></li>`).join('')+'</ol>':'Belum ada markah. Jadilah yang pertama!'}catch(e){$('#bl').textContent='Tiada sambungan.'}}
function newGame(){S={e:100,p:100,k:0,day:1,total:0,m:mode};deck=[];startDay()}
function startDay(){S.n=0;S.k=0;S.q=[];S.mod=R(MODS);S.tgt=MD[S.m][5]?0:Math.min(18,9+S.day*1.5|0);if(S.day>=5)ach('d5');
 $('#dy').textContent='Hari '+S.day;ui();
 ov(`<div class="e">🌅</div><h1>Hari ${S.day}: ${S.mod[0]}</h1><p>${S.mod[1]}<br>${S.tgt?`Sasaran: <b>${S.tgt} KPI</b> sebelum 5:00 petang.`:'Bertahan sepanjang mungkin!'}</p><button id="go">Buka Kaunter</button>`,()=>{$('#ov').style.display='none';draw()})}
function ui(){$('#be').style.width=S.e+'%';$('#bp').style.width=S.p+'%';$('#bk').style.width=S.tgt?Math.min(100,S.k/S.tgt*100)+'%':'0';$('#kt').textContent=S.tgt?S.k+'/'+S.tgt:S.k;
 const m=480+S.n*(540/DAY);$('#clk').textContent=`${(m/60|0)%12||12}:${String(m%60|0).padStart(2,'0')} ${m>=720?'PM':'AM'}`;$('#led').textContent=String(S.total+42).padStart(3,'0')}
function draw(){if(S.n>=DAY)return endDay();
 if(S.q.length&&S.q[0][0]<=S.n)S.c=S.q.shift()[1];else{if(!deck.length)deck=[...CARDS].sort(()=>Math.random()-.5);S.c=deck.pop()}
 const c=S.c;if(c===SP.datuk)ach('datuk');$('#ico').textContent=c[0];$('#ct').textContent=c[1];$('#tx').textContent='“'+c[2]+'”';
 $('#la').textContent=c[3];$('#lb').textContent=c[5];$('#ba').textContent='◀ '+c[3];$('#bb').textContent=c[5]+' ▶';
 const k=$('#card');k.style.transition='none';k.style.transform='translateX(0)';k.style.opacity=1;busy=0;
 const t=$('#timer'),T=MD[S.m][3];t.style.transition='none';t.style.width='100%';setTimeout(()=>{t.style.transition=`width ${T}ms linear`;t.style.width='0'},30);
 clearTimeout(tm);tm=setTimeout(()=>{S.p=cl(S.p-8);pick(Math.random()<.5?0:1)},T+50)}
function pick(i){if(busy)return;busy=1;clearTimeout(tm);const c=S.c,f=c[4+2*i],m=S.mod,d=MD[S.m][4],sc2=1+.06*(S.day-1);
 let[e,p,k,end,fu,bo]=f;if(bo&&Math.random()<bo){p+=15;k+=1}
 S.e=cl(S.e+(e<0?e*m[3]*sc2*d:e));S.p=cl(S.p+(p<0?p*m[2]*sc2*d:p));S.k=Math.max(0,S.k+k);S.n++;S.total++;
 if(c[1]=="Duit Kopi")ach(i?'hero':'sprm');if(fu)S.q.push([S.n+2,SP[fu]]);
 bp(p<0?150:660);if(navigator.vibrate)navigator.vibrate(p<0?40:10);ui();
 const cd=$('#card');cd.style.transition='transform .3s,opacity .3s';cd.style.transform=`translateX(${i?420:-420}px) rotate(${i?25:-25}deg)`;cd.style.opacity=0;
 setTimeout(()=>end?over(end):S.e<=0?over('energy'):S.p<=0?over('patience'):draw(),320)}
function endDay(){S.n=DAY;ui();
 if(MD[S.m][5]){S.day++;S.n=0;S.mod=R(MODS);if(S.day>=3)ach('mar');$('#dy').textContent='Hari '+S.day;return draw()}
 if(S.k<S.tgt)return over('kpi');ach('d1');if(S.m=='rush')ach('rush');bp(660,.2);setTimeout(()=>bp(880,.3),200);
 ov(`<div class="e">🏆</div><h1>Hari ${S.day} Selesai!</h1><p>KPI ${S.k}/${S.tgt}. Datuk puas hati.<br>Anda rehat sebentar dan pulih sedikit tenaga.</p><button id="go">Hari Seterusnya ▶</button>`,()=>{S.day++;S.e=cl(S.e+40);S.p=cl(S.p+30);startDay()})}
function over(k){const E=END[k],B=JSON.parse(localStorage.k4s||'{}');if(sc()>(B[S.m]||0)){B[S.m]=sc();localStorage.k4s=JSON.stringify(B)}
 ({energy:'burn',patience:'viral',sprm:'sprm'})[k]&&ach(({energy:'burn',patience:'viral',sprm:'sprm'})[k]);bp(120,.5);
 ov(`<div class="e">${E[0]}</div><h1>${E[1]}</h1><p>${E[2]}</p><p>${MD[S.m][0]} Hari ${S.day} · ${S.total} pelanggan<br>🎖️ ${rk()} · <b>${sc()}</b> mata</p><button id="go">Main Semula</button><div class="row"><button class="s" id="sh">🖼️ Kongsi</button><button class="s" id="sb">📊 Hantar Markah</button><button class="s" id="mn">🏠 Menu</button></div>`,newGame);
 $('#mn').onclick=menu;$('#sh').onclick=()=>img(E);
 $('#sb').onclick=()=>{const n=(prompt('Nama (maks 12 huruf):',localStorage.k4n||'')||'').replace(/[^\w ]/g,'').slice(0,12);if(!n)return;localStorage.k4n=n;open(`https://github.com/${REPO}/issues/new?title=${encodeURIComponent(['SCORE',n,S.m,S.day,S.total,sc()].join('|'))}&body=Tekan+Submit+new+issue+untuk+hantar+markah.`)}}
function img(E){const c=$d.createElement('canvas');c.width=600;c.height=315;const x=c.getContext('2d');x.fillStyle='#0b1f4b';x.fillRect(0,0,600,315);x.fillStyle='#ffd23f';x.fillRect(0,0,600,14);x.textAlign='center';x.fillStyle='#fff';x.font='bold 28px sans-serif';x.fillText('KAUNTER 4 · JPUAM',300,56);x.font='80px sans-serif';x.fillText(E[0],300,150);x.fillStyle='#ffd23f';x.font='bold 28px sans-serif';x.fillText(E[1]+' · '+rk(),300,200);x.fillStyle='#fff';x.font='20px sans-serif';x.fillText(`${MD[S.m][1]} · Hari ${S.day} · ${S.total} pelanggan · ${sc()} mata`,300,245);x.fillText(location.host+location.pathname,300,285);
 c.toBlob(b=>{const f=new File([b],'kaunter4.png',{type:'image/png'});if(navigator.canShare&&navigator.canShare({files:[f]}))navigator.share({files:[f],text:'Boleh kalahkan saya?'});else{const a=$d.createElement('a');a.href=URL.createObjectURL(b);a.download='kaunter4.png';a.click()}})}
let x0=null;const cd=$('#card');
cd.onpointerdown=e=>{if(!busy){x0=e.clientX;cd.setPointerCapture(e.pointerId);cd.style.transition='none'}};
cd.onpointermove=e=>{if(x0==null)return;const d=e.clientX-x0;cd.style.transform=`translateX(${d}px) rotate(${d/18}deg)`;
 $('#la').style.opacity=d<-20?Math.min(1,-d/90):0;$('#lb').style.opacity=d>20?Math.min(1,d/90):0;
 const f=S.c[d<0?4:6];['se','sp','sk'].forEach((id,j)=>$('#'+id).classList.toggle('hint',Math.abs(d)>40&&!!f[j]))};
cd.onpointerup=e=>{if(x0==null)return;const d=e.clientX-x0;x0=null;['la','lb'].forEach(i=>$('#'+i).style.opacity=0);$d.querySelectorAll('.hint').forEach(n=>n.classList.remove('hint'));
 if(Math.abs(d)>90)pick(d>0?1:0);else{cd.style.transition='transform .2s';cd.style.transform='translateX(0)'}};
$('#ba').onclick=()=>pick(0);$('#bb').onclick=()=>pick(1);
addEventListener('keydown',e=>{if(e.key=='ArrowLeft')pick(0);if(e.key=='ArrowRight')pick(1)});
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
bg();menu();
