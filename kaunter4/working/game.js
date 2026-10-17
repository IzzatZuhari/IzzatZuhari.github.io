const $=s=>$d.querySelector(s),$d=document,DAY=24;
const MD={biasa:["📋","Syif Biasa","Sasaran KPI naik setiap hari.",9000,1],rush:["🔥","Rush Hour","5 saat setiap kad. Kesan buruk 1.3×.",5000,1.3],mar:["♾️","Maraton","Tiada sasaran. Bertahan selagi mampu.",9000,1,1]};
const AC=[["d1","🌅","Hari Pertama","Habiskan Hari 1"],["d5","🏅","Veteran N19","Sampai Hari 5"],["rush","🔥","Tahan Panas","Menang sehari dalam Rush Hour"],["mar","♾️","Tak Reti Balik","Capai Hari 3 dalam Maraton"],["hero","🛡️","Berintegriti","Tolak duit kopi"],["sprm","🚔","Kena Cekup","Terima duit kopi"],["viral","📹","Selebriti TikTok","Jadi viral"],["burn","🤕","Dapat MC","Burnout"],["datuk","👔","Bersemuka Datuk","Jumpa Datuk Hamdan"],["d10","🎖️","Sepuluh Hari","Capai Hari 10"],["nov","🧑‍🎓","Pegawai Baru Berjaya","Hari 3 sebagai Pegawai Baru"],["vet","🧓","Veteran Sejati","Hari 3 sebagai Veteran"],["leg","👑","Legenda Kaunter","Capai 1800 mata"]];
let S,deck=[],tm,busy=1,mode='biasa',G=JSON.parse(localStorage.k4a||'{}'),AX;
const R=a=>a[Math.random()*a.length|0],cl=v=>Math.max(0,Math.min(100,v)),sc=()=>S.total*10+S.day*50;
const rk0=()=>sc()<300?"Pegawai Pelatih":sc()<800?"Pegawai Cemerlang":sc()<1800?"Veteran N19":"Legenda Kaunter";
const rk=()=>[[2600,'Datuk Pengarah'],[1800,'Legenda Kaunter'],[1200,'Ketua Bahagian'],[800,'Veteran N19'],[500,'Penyelia Unit'],[300,'Pegawai Cemerlang'],[150,'Kerani Gigih'],[0,'Pegawai Pelatih']].find(x=>sc()>=x[0])[1];
function bp(f,d=.12){if(mute)return;try{AX=AX||new AudioContext();const o=AX.createOscillator(),g=AX.createGain();o.type='square';o.frequency.value=f;g.gain.value=.05;o.connect(g);g.connect(AX.destination);o.start();g.gain.exponentialRampToValueAtTime(.001,AX.currentTime+d);o.stop(AX.currentTime+d)}catch(e){}}
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
function menu(){ov(`<div class="e">🏛️</div><h1>KAUNTER 4</h1><p class="sub">Simulasi Pegawai Gred N19 · JPUAM<br>Bertahan sampai 5:00 petang.</p>${Object.entries(MD).map(([k,m])=>`<button class="m${k==mode?' on':''}" data-m="${k}">${m[0]} ${m[1]}<small>${m[2]}</small></button>`).join('')}<div class="row">${BGS.map((b,i)=>`<button class="s${i==bgi?" on2":""}" data-b="${i}">${b[0]} ${b[1]}</button>`).join("")}</div><p class="sub">${BGS[bgi][2]}</p><button id="go">▶ Mula Syif</button><div class="row"><button class="s" id="ac">🏆 Pencapaian</button><button class="s" id="lb2">🏅 Rekod</button><button class="s" id="sn">${mute?"🔇":"🔊"}</button><button class="s" id="hp">❓ Cara</button></div>`,newGame);
 $d.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{mode=b.dataset.m;menu()});
 $('#ac').onclick=()=>panel(`<h1>🏆 Pencapaian ${Object.keys(G).length}/${AC.length}</h1><div class="al">${AC.map(a=>`<div class="${G[a[0]]?'':'lk'}">${G[a[0]]?a[1]:'❓'} <b>${a[2]}</b><br>${a[3]}</div>`).join('')}</div>`);
 $d.querySelectorAll('[data-b]').forEach(b=>b.onclick=()=>{bgi=+b.dataset.b;menu()});$('#sn').onclick=()=>{mute=!mute;localStorage.k4m=+mute;menu()};$('#lb2').onclick=rekod;
 $('#hp').onclick=()=>panel('<h1>❓ Cara Main</h1><p>Semak dokumen pemohon mengikut <b>Peraturan Hari Ini</b>. Tekan ✔ LULUS jika sah, ✖ TOLAK jika ada kesalahan (←/→ pada papan kekunci). Betul = KPI naik; salah = kesabaran & tenaga jatuh. Kadang-kadang Kes Khas dan Peristiwa Pantas muncul: jawab cepat!</p>')}
const BGS=[["🧑‍🎓","Pegawai Baru","Tenaga tahan lasak (-20% drain), tetapi sasaran KPI +2.",.8,1,2],["🧓","Veteran 20 Tahun","Pandai layan orang (-20% drain kesabaran), tetapi cepat letih.",1.2,.8,0],["📎","Kerani Biasa","Seimbang. Tiada kelebihan, tiada kelemahan.",1,1,0]];const PK=[['🥤','Termos Milo','Tenaga hilang 10% lebih perlahan.','milo'],['😊','Senyum Plastik','Kesabaran hilang 10% lebih perlahan.','senyum'],['⚡','Kerja Pantas','Sasaran KPI -1 setiap hari.','pantas'],['🏖️','Cuti Tahunan','Sekali: bangkit semula bila tenaga/kesabaran 0.','cuti'],['🥟','Hamper Raya','Pulih 35 tenaga & 35 kesabaran sekarang.','hamper'],['📎','Stapler Sakti','Mulakan setiap hari dengan KPI +2.','stapler']];
function toast(t){const e=$('#toast');e.textContent=t;e.style.top='10px';setTimeout(()=>e.style.top='-60px',2800)}
function pop(id,v,i){if(!v)return;const s=$d.createElement('b');s.className='pop '+(v>0?'up':'dn');s.textContent=(v>0?'+':'')+Math.round(v)+i;$('#'+id).appendChild(s);setTimeout(()=>s.remove(),900)}
let bgi=2,mute=localStorage.k4m==1;
function rekod(){const B=JSON.parse(localStorage.k4s||'{}');panel(`<h1>🏅 Rekod Anda</h1><div class="al">${Object.entries(MD).map(([k,m])=>`<div>${m[0]} <b>${m[1]}</b>: ${B[k]||0} mata</div>`).join('')}<div>🏆 Pencapaian: ${Object.keys(G).length}/${AC.length}</div></div>`)}
function newGame(){S={e:100,p:100,k:0,day:1,total:0,m:mode,b:bgi,pk:{}};deck=[];startDay()}
function startDay(){S.n=0;S.k=2*(S.pk.stapler||0);S.q=[];S.rl=[...RL].sort(()=>Math.random()-.5).slice(0,Math.min(5,2+S.day));S.mod=R(MODS);S.tgt=MD[S.m][5]?0:Math.max(4,Math.min(16,6+S.day)+BGS[S.b][5]-(S.pk.pantas||0));if(S.day>=5)ach('d5');if(S.day>=10)ach('d10');if(S.day>=3)ach(S.b==0?'nov':S.b==1?'vet':'d1');
 $('#dy').textContent='Hari '+S.day;ui();
 ov(`<div class="e">🌅</div><h1>Hari ${S.day}: ${S.mod[0]}</h1><p>${S.mod[1]}<br>${S.tgt?`Sasaran: <b>${S.tgt} KPI</b> sebelum 5:00 petang.`:'Bertahan sepanjang mungkin!'}</p><p><b>📋 Peraturan hari ini:</b><br>${S.rl.map(r=>"• "+r[1]).join("<br>")}</p><button id="go">Buka Kaunter</button>`,()=>{$('#ov').style.display='none';draw()})}
function ui(){$('#be').style.width=S.e+'%';$('#bp').style.width=S.p+'%';$('#bk').style.width=S.tgt?Math.min(100,S.k/S.tgt*100)+'%':'0';$('#kt').textContent=S.tgt?S.k+'/'+S.tgt:S.k;
 const m=480+S.n*(540/DAY);$('#clk').textContent=`${(m/60|0)%12||12}:${String(m%60|0).padStart(2,'0')} ${m>=720?'PM':'AM'}`;$('#led').textContent=String(S.total+42).padStart(3,'0')}
const KS_RE=/\bIC\b|MyKad|borang|lesen|sijil|dokumen|permohonan|renew|\bcop\b|surat|nombor|MySikap|sistem|resit|cukai|rayuan|pelanggan|klien|pak cik|mak cik|aduan|VIP|passport|pasport|gambar|kiosk|sampul|duit kopi|Datuk|JPJ|status|runner|pekeliling|audit/i;
const KS=CARDS.filter(c=>KS_RE.test(c[1]+' '+c[2])),QE=CARDS.filter(c=>!KS.includes(c));
const RL=[["exp","Tarikh tamat belum luput"],["ic","No. IC sepadan tarikh lahir"],["cop","Ada cop JPUAM"],["pho","Gambar jelas, tiada filter"],["ori","Dokumen ASAL, bukan salinan"]];
const NM=["Ahmad Firdaus","Nurul Huda","Lim Wei Han","Muthu Kumar","Siti Aminah","Abdul Razak","Tan Mei Ling","Kavitha Devi","Mohd Hafiz","Rosnah Ibrahim","Jamal Din","Farah Nabila"];
const TD=new Date(),fd=d=>[d.getDate(),d.getMonth()+1].map(x=>String(x).padStart(2,'0')).join('/')+'/'+d.getFullYear(),R2=(a,b)=>a+Math.random()*(b-a)|0;
function genTask(){const act=S.rl.map(r=>r[0]),inv=Math.random()<.5,y=R2(1960,2006),m=String(R2(1,13)).padStart(2,'0'),d=R2(1,29),dd=String(d).padStart(2,'0');
 const o={t:R(["KAD PENGENALAN","LESEN MEMANDU","SIJIL LAHIR","PASPORT"]),n:R(NM),ic:`${String(y).slice(2)}${m}${dd}-${String(R2(1,17)).padStart(2,'0')}-${R2(1000,9999)}`,dob:`${dd}/${m}/${y}`,ex:fd(new Date(TD.getTime()+R2(30,2000)*864e5)),ori:'ASAL',cop:1,pho:'🙂',valid:true};
 const brk=k=>{if(k=='exp')o.ex=fd(new Date(TD.getTime()-R2(5,900)*864e5));if(k=='ic')o.dob=`${String(d%28+1).padStart(2,'0')}/${m}/${y}`;if(k=='cop')o.cop=0;if(k=='pho')o.pho='😺';if(k=='ori')o.ori='SALINAN'};
 if(inv){brk(R(act));o.valid=false}else if(Math.random()<.2){const x=RL.map(r=>r[0]).filter(k=>!act.includes(k));if(x.length)brk(R(x))}
 return o}
function draw(){if(S.n>=DAY)return endDay();
 $('#rl').innerHTML=S.rl.map(r=>`<li>${r[1]}</li>`).join('');
 let c;if(S.q.length&&S.q[0][0]<=S.n)c=S.q.shift()[1];else{const r=Math.random(),pl=S.n>0;
  if(pl&&r<.2)c=R(QE);else if(pl&&r<.38)c=R(KS);else{const t=genTask();c=[R(['🧑','👩','👴','👵','🧔','🧕','👨‍🦱','👩‍🦰']),t.t,R(t.valid?['Ini dokumen saya, encik.','Semua lengkap kan? Saya nak cepat.','Anak menunggu dalam kereta.']:['Tolonglah bang, terlupa tadi!','Saya kenal Datuk Hamdan tau.','Sistem tu yang salah, bukan saya.','Alah, beza sikit je tu.']),'✖ TOLAK',t.valid?[-4,-18,0]:[-4,-6,1],'✔ LULUS',t.valid?[-4,4,1]:[-12,-8,0]];c.t=t}}
 S.c=c;if(c===SP.datuk)ach('datuk');const q=QE.includes(c);
 $('#qe').style.display=q?'flex':'none';$('#btns').style.visibility=q?'hidden':'visible';
 if(q){$('#qi').textContent=c[0];$('#qt').textContent=c[1];$('#qx').textContent=c[2];$('#qa').textContent=c[3];$('#qc').textContent=c[5];$('#pt').textContent='SILA JAWAB PERISTIWA';$('#pf').innerHTML=''}
 else{$('#av').textContent=c[0];$('#say').textContent='“'+c[2]+'”';$('#ba').textContent=c[3];$('#bb').textContent=c[5];
  if(c.t){const t=c.t;$('#pt').textContent=t.t+' · JPUAM';$('#pf').innerHTML=`<div class="ph">${t.pho}</div>`+[['Nama',t.n],['No. IC',t.ic],['Tarikh Lahir',t.dob],['Tamat',t.ex],['Jenis',t.ori],['Cop JPUAM',t.cop?'✔ ADA':'— TIADA']].map(x=>`<div><span>${x[0]}</span><b>${x[1]}</b></div>`).join('')}
  else{$('#pt').textContent='KES KHAS · '+c[1];$('#pf').innerHTML=`<p class="slip">Pelanggan merayu. Sila putuskan.</p>`}}
 busy=0;const t=$('#timer'),T=q?5000:c.t?MD[S.m][3]*1.5:MD[S.m][3];t.style.transition='none';t.style.width='100%';setTimeout(()=>{t.style.transition=`width ${T}ms linear`;t.style.width='0'},30);
 clearTimeout(tm);tm=setTimeout(()=>{S.p=cl(S.p-8);pick(c.t?0:Math.random()<.5?0:1)},T+50)}
function pick(i){if(busy)return;busy=1;clearTimeout(tm);const c=S.c,f=c[4+2*i],m=S.mod,d=MD[S.m][4],sc2=1+.06*(S.day-1);
 const oe=S.e,op=S.p,ok=S.k;let[e,p,k,end,fu,bo]=f;if(bo&&Math.random()<bo){p+=15;k+=1}
 S.e=cl(S.e+(e<0?e*m[3]*sc2*d*BGS[S.b][3]*.9**(S.pk.milo||0):e));S.p=cl(S.p+(p<0?p*m[2]*sc2*d*BGS[S.b][4]*.9**(S.pk.senyum||0):p));S.k=Math.max(0,S.k+k);S.n++;S.total++;pop('se',S.e-oe,'⚡');pop('sp',S.p-op,'😡');pop('sk',S.k-ok,'📊');
 if(c[1]=="Duit Kopi")ach(i?'hero':'sprm');if(fu)S.q.push([S.n+2,SP[fu]]);
 if(c.t){toast((i==1)==c.t.valid?'✔ Keputusan betul':'✘ Salah! '+(c.t.valid?'Dokumen sebenarnya sah':'Ada kesalahan dokumen'));const n=$('#ink');n.textContent=i?'LULUS':'TOLAK';n.className='on '+(i?'g':'r')}
 bp(p<0?150:660);if(navigator.vibrate)navigator.vibrate(p<0?40:10);ui();
 setTimeout(()=>{$('#ink').className='';$('#qe').style.display='none';if(!end&&(S.e<=0||S.p<=0)&&S.pk.cuti>0){S.pk.cuti--;if(S.e<=0)S.e=35;if(S.p<=0)S.p=35;ui();toast('🏖️ Cuti Tahunan digunakan!')}end?over(end):S.e<=0?over('energy'):S.p<=0?over('patience'):draw()},c.t?550:250)}
function endDay(){S.n=DAY;ui();
 if(MD[S.m][5]){S.day++;S.n=0;S.mod=R(MODS);if(S.day>=3)ach('mar');$('#dy').textContent='Hari '+S.day;return draw()}
 if(S.k<S.tgt)return over('kpi');ach('d1');if(S.m=='rush')ach('rush');bp(660,.2);setTimeout(()=>bp(880,.3),200);
 const ch=[...PK].sort(()=>Math.random()-.5).slice(0,3);
 ov(`<div class="e">🏆</div><h1>Hari ${S.day} Selesai!</h1><p>KPI ${S.k}/${S.tgt}. Datuk puas hati.<br>Pilih satu ganjaran kenaikan pangkat:</p>${ch.map(x=>`<button class="m" data-pk="${x[3]}">${x[0]} ${x[1]}<small>${x[2]}</small></button>`).join('')}`);
 $d.querySelectorAll('[data-pk]').forEach(b=>b.onclick=()=>{const k=b.dataset.pk;S.pk[k]=(S.pk[k]||0)+1;S.day++;S.e=cl(S.e+40);S.p=cl(S.p+30);if(k=='hamper'){S.e=cl(S.e+35);S.p=cl(S.p+35)}startDay()})}
function over(k){const E=END[k],B=JSON.parse(localStorage.k4s||'{}');if(sc()>(B[S.m]||0)){B[S.m]=sc();localStorage.k4s=JSON.stringify(B)}
 ({energy:'burn',patience:'viral',sprm:'sprm'})[k]&&ach(({energy:'burn',patience:'viral',sprm:'sprm'})[k]);bp(120,.5);if(sc()>=1800)ach('leg');
 ov(`<div class="e">${E[0]}</div><h1>${E[1]}</h1><p>${E[2]}</p><p>${MD[S.m][0]} Hari ${S.day} · ${S.total} pelanggan<br>🎖️ ${rk()} · <b>${sc()}</b> mata</p><button id="go">Main Semula</button><div class="row"><button class="s" id="sh">🖼️ Kongsi</button><button class="s" id="mn">🏠 Menu</button></div>`,newGame);
 $('#mn').onclick=menu;$('#sh').onclick=()=>img(E);
}
function img(E){const c=$d.createElement('canvas');c.width=600;c.height=315;const x=c.getContext('2d');x.fillStyle='#0b1f4b';x.fillRect(0,0,600,315);x.fillStyle='#ffd23f';x.fillRect(0,0,600,14);x.textAlign='center';x.fillStyle='#fff';x.font='bold 28px sans-serif';x.fillText('KAUNTER 4 · JPUAM',300,56);x.font='80px sans-serif';x.fillText(E[0],300,150);x.fillStyle='#ffd23f';x.font='bold 28px sans-serif';x.fillText(E[1]+' · '+rk(),300,200);x.fillStyle='#fff';x.font='20px sans-serif';x.fillText(`${MD[S.m][1]} · Hari ${S.day} · ${S.total} pelanggan · ${sc()} mata`,300,245);x.fillText(location.host+location.pathname,300,285);
 c.toBlob(b=>{const f=new File([b],'kaunter4.png',{type:'image/png'});if(navigator.canShare&&navigator.canShare({files:[f]}))navigator.share({files:[f],text:'Boleh kalahkan saya?'});else{const a=$d.createElement('a');a.href=URL.createObjectURL(b);a.download='kaunter4.png';a.click()}})}
$('#ba').onclick=()=>pick(0);$('#qa').onclick=()=>pick(0);$('#qc').onclick=()=>pick(1);$('#bb').onclick=()=>pick(1);
addEventListener('keydown',e=>{if(e.key=='ArrowLeft')pick(0);if(e.key=='ArrowRight')pick(1)});
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
bg();menu();setTimeout(()=>$('#splash').classList.add('gone'),700);
