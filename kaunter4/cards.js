// Kad: [ikon,tajuk,teks,labelKiri,[⚡,😡,📊,tamat?,kad susulan?,peluang bonus?],labelKanan,[...]]
const CARDS=[
["🧑‍💼","Abang Runner","Saya hantar renew lesen untuk 15 orang bos. Surat wakil kuasa semua tak ada cop Pesuruhjaya Sumpah.","Ambil nombor esok",[-5,-15,0],"Print & uruskan",[-25,20,1]],
["👵","Mak Cik Kabel Besar","Lupa bawa IC. Tapi mak cik kenal Datuk Hamdan, sepupu ipar jiran mak cik!","Undang-undang tetap undang-undang",[-10,-20,0,null,"datuk"],"Semak guna nombor IC",[-5,15,1]],
["💻","MySikap Down!","Ralat 505. Skrin biru. Klien mula ketuk meja.","Ketuk CPU, tiup kabel LAN",[-15,-5,0,null,null,.5],"Semua pergi makan dulu",[10,-40,0]],
["🥟","Karipap Kak Sal","Kak Sal bawa karipap panas & teh tarik ikat tepi.","Makan sorok bawah meja",[30,-5,0],"Lepas syif nanti",[0,10,0]],
["🧓","Pak Cik vs Kiosk","Kiosk skrin sentuh ni apa benda? Saya nak tekan butang je.","Ajar step by step",[-15,10,1],"Ambil nombor biasa",[-3,-12,0]],
["🧕","Gambar Passport","Gambar saya senyum lebar, ada filter telinga kucing. Comel kan?","Tolak, muka neutral",[-5,-15,0],"Lulus je, cepat",[-10,10,1]],
["💰","Duit Kopi","Dik, sampul ni ada RM200. Duit kopi je, laju-lajukan ya.","Terima sampul",[10,20,3,"sprm"],"Tolak & lapor SPRM",[-10,-5,2]],
["👔","Datuk Turun Padang","Datuk datang tanpa notis. 'Kenapa beratur panjang?'","'Semua terkawal, Datuk'",[-10,-10,1],"Jujur: sistem selalu down",[-5,5,-1]],
["📞","Mesyuarat Mengejut","Bos WhatsApp: 'Semua wajib hadir mesyuarat. 2 jam.'","Hadir",[-20,-25,0],"Pura-pura sakit perut",[5,-30,0]],
["🧾","Pekeliling Baharu","Borang A kini Borang A1. Stok lama tak boleh pakai.","Guna borang lama juga",[-5,10,1],"Ikut peraturan",[-15,-15,0]],
["👶","Budak Menangis","Budak kecil menjerit sebab bosan. Mak dia buat tak tahu.","Bagi sticker JPUAM",[-5,15,0],"Buat tak tahu",[0,-15,0]],
["🔢","Nombor Bergaduh","Nombor 87 dipanggil, tapi dua orang pegang 87.","Layan yang tua dulu",[-5,5,1],"Panggil semula",[-15,-10,0]],
["💧","Aircond Bocor","Air menitik atas kaunter. Dokumen basah.","Letak baldi, teruskan",[-10,5,1],"Tutup kaunter",[10,-30,0]],
["📱","TikTok Live","Pelanggan siaran langsung: 'Tengok servis kerajaan!'","Senyum profesional",[-10,15,1],"Tutup muka dengan fail",[5,-25,0]],
["🛵","Rider Nasi Lemak","Rakan sekerja order nasi lemak telur. Rider tunggu depan kaunter.","Ambil & makan",[25,-10,0],"Letak tepi, sibuk",[0,5,0]],
["🖨️","Printer Jammed","Kertas tersangkut. Barisan makin panjang.","Cabut kasar",[-10,-5,0,null,null,.5],"Tulis tangan",[-20,10,1]],
["👴","Pak Mat 82 Tahun","Naik bas 2 jam. MyKad hilang. Nak buat pengganti.","Bantu semak manual",[-20,25,1],"Ikut SOP, minta balik",[-3,-25,0]],
["🕌","Waktu Zohor","Jam 1.00. Barisan masih panjang. Perut berbunyi.","Rehat sekejap",[25,-25,0],"Teruskan layan",[-15,10,2]],
["🕴️","VIP Potong Q","'Saya ada temujanji dengan Tuan Pengarah!' (Tiada janji.)","Bagi potong",[-5,-20,1],"Beratur macam orang lain",[-10,15,0]],
["🖋️","Cop Dakwat Kering","Cop kering. Klien nak cop 'nampak jelas'.","Tiup & tekan kuat",[-10,0,1],"Pinjam cop jabatan sebelah",[-15,5,1]],
["📊","Audit KPI","Ketua Unit: 'Hari ni mesti 25 pelanggan. Jangan lembab!'","Cepat & ringkas",[-20,-10,2],"Kualiti dulu",[-5,10,0]],
["🎂","Kek Hari Jadi","Kak Ani sebelah sambut birthday. Kek coklat moist.","Makan kek",[20,-5,0],"Abaikan",[0,5,0]],
["🏛️","Nak Jumpa Menteri","'Saya nak adu kat Menteri, saya kenal ADUN!'","Beri borang aduan",[-5,5,1],"Bagi nombor telefon Datuk",[0,-15,0,null,"datuk"]],
["📄","Salinan IC Kabur","IC difotostat 80% kabur. 'Cuba tengok betul-betul bang.'","Lulus, teka je",[-25,15,1],"Minta fotostat semula",[-5,-15,0]],
["🥵","Sistem Lambat","Skrin pusing 'loading' 10 minit. Dewan semakin panas.","Pasang kipas meja",[-10,10,0],"Pujuk sabar",[-15,-5,1]]];
const SP={datuk:["👔","Datuk Hamdan Datang","'Mana mak cik tadi? Dia mengadu pasal anda.' Datuk merenung tajam.","Minta maaf, mengaku silap",[-15,10,0],"Pertahankan SOP",[-5,-15,2]]};
const MODS=[["Hari Biasa","Tiada apa-apa. Setakat ini.",1,1],["Hari Gaji","Semua orang datang serentak!",1.3,1],["Hujan Lebat","Pelanggan basah & moody.",1.2,1.1],["Akhir Bulan","Semua nak renew sebelum tamat!",1.2,1.2],["Jumaat","Ramai nak balik awal solat Jumaat.",1,.9],["Cuti Sekolah","Budak lari-lari merata.",1.1,1.2]];
const END={energy:["🤕","BURNOUT!","Anda pengsan di kaunter. Kak Sal tolong dukung ke klinik. Dapat MC 2 hari."],patience:["📹","VIRAL TIKTOK!","Video muka ketat anda tular: 'Gaji guna duit cukai kami tapi servis lambat!' Anda digantung kerja."],kpi:["📩","SURAT TUNJUK SEBAB","Jam 5.00 petang, sasaran tak tercapai. Surat tunjuk sebab menanti di meja."],sprm:["🚔","SPRM TERBAIK!","Sampul tadi rupanya perangkap. Anda ditahan reban di depan 200 orang. Tular juga."]};
