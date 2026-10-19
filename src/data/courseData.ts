export interface Module {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  hours: number;
  practicalHours: number;
  theoryHours: number;
  topics: string[];
  equipment: string[];
  gain: string;
}

export interface FloraItem {
  name: string;
  period: string;
  nectarLevel: 'Yüksek' | 'Çok Yüksek' | 'Orta';
  pollenLevel: 'Yüksek' | 'Çok Yüksek' | 'Orta';
  description: string;
  benefit: string;
}

export interface CalendarSeason {
  season: string;
  months: string;
  focus: string;
  tasks: string[];
  alert: string;
}

export interface FaqItem {
  q: string;
  a: string;
  category: 'Kayıt' | 'Müfredat' | 'Belge' | 'Destekler';
}

export const COURSE_INFO = {
  courseName: "Modern Arıcılık ve Kovan Yönetimi Kursu",
  institution: "T.C. Kırklareli Valiliği - Kofçaz Kaymakamlığı",
  subInstitution: "İlçe Millî Eğitim Müdürlüğü - Kofçaz Halk Eğitimi Merkezi Müdürlüğü",
  directorate: "Hayat Boyu Öğrenme Genel Müdürlüğü",
  mainSlogan: "Kofçaz’ın Doğasında Bereket, Bilinçli Üretimle Gelecek Var!",
  subSlogan: "Geleneksel Emek, Modern Bilgiyle Buluşuyor: Kovanlarınızda Yüksek Verim, Evinizde Bereket.",
  targetAudience: "Kofçaz ve köylerindeki arıcılar, çiftçiler, üretime katılmak isteyen kadınlarımız ve yeni başlayacak üreticilerimiz.",
  duration: "84 Ders Saati (42 Saat Teori + 42 Saat Kovan Başı Saha Uygulaması)",
  certificateType: "Millî Eğitim Bakanlığı Onaylı, e-Devlet'ten Doğrulanabilir Kurs Bitirme Belgesi",
  fee: "Ücretsiz (Devlet Hizmeti)",
  startDate: "Önümüzdeki Ay Başında (Dönem Başı)",
  applicationChannels: [
    { title: "e-Yaygın Portalı", desc: "e-Devlet şifresi ile internet üzerinden 7/24", url: "https://e-yaygin.meb.gov.tr" },
    { title: "Kofçaz HEM Binası", desc: "Nüfus cüzdanı fotokopisiyle şahsen başvuru", address: "Kofçaz İlçe Merkezi" }
  ],
  contact: {
    phone: "0 (288) 315 10 24",
    email: "kofcazhem@meb.k12.tr",
    address: "Yeni Mahalle, Hükümet Konağı Yanı Kofçaz / KIRKLARELİ",
    web: "kofcazhem.meb.k12.tr",
    workingHours: "Hafta içi 08:30 - 17:30"
  }
};

export const MODULES: Module[] = [
  {
    id: "mod-1",
    number: "01",
    title: "Modern Arıcılık Temelleri & Koloni Biyolojisi",
    shortDesc: "Arı ırkları, kast sistemi, petek mimarisi ve arılık yer seçimi kriterleri.",
    hours: 14,
    theoryHours: 8,
    practicalHours: 6,
    topics: [
      "Arı ailesinin fertleri: Ana arı (Kraliçe), İşçi arı, Erkek arı fizyolojisi",
      "Istranca ekosistemine uygun arı ırkları ve melezleme avantajları",
      "Modern Langstroth ve Dadant kovan standartları ve ölçüleri",
      "Arılık yeri seçimi: Rüzgâr yönü, güneş açısı, su kaynağı ve flora mesafesi",
      "Arıcılıkta kişisel koruyucu ekipman ve emniyet tedbirleri"
    ],
    equipment: ["Körük ve yakıtı", "Arıcı maskesi & eldiveni", "El demiri", "Temel petek"],
    gain: "Koloni içindeki görev dağılımını okuyabilme, kovan açılış kurallarına ve güvenlik protokollerine tam hâkimiyet."
  },
  {
    id: "mod-2",
    number: "02",
    title: "Mevsimsel Kovan Bakımı & Oğul Önleme",
    shortDesc: "İlkbahar uyanışından kışlatmaya kadar döngüsel kovan yönetimi ve sürü kontrolü.",
    hours: 16,
    theoryHours: 6,
    practicalHours: 10,
    topics: [
      "İlkbahar erken teşvik beslemesi (1:1 şurup ve arı keki uygulamaları)",
      "Kuluçkalık sıkıştırma ve petek ilavesi teknikleri",
      "İstenmeyen oğul içgüdüsünü önceden tespit etme ve modern bölme (yapay oğul) metotları",
      "Kat (ballık) atma zamanlaması ve ızgara (ana arı ızgarası) kullanımı",
      "Kışlatma hazırlığı: Rutubetsiz havalandırma ve genç kış arısı popülasyonu sağlama"
    ],
    equipment: ["Şurup besleme kapları", "Ana arı ızgarası", "Kovan bölme tahtası", "Kovan üst örtü bezleri"],
    gain: "Kovanların zamansız oğul vermesini önleyerek tarlacı arı gücünü koruma ve kışlatma kayıplarını %5'in altına düşürme."
  },
  {
    id: "mod-3",
    number: "03",
    title: "Arı Sağlığı, Zararlılar & Biyolojik Mücadele",
    shortDesc: "Varroa akarı, yavru çürüklüğü ve güve ile kalıntısız, mevzuata uygun mücadele.",
    hours: 16,
    theoryHours: 8,
    practicalHours: 8,
    topics: [
      "Varroa Destructor teşhisi: Pudra şekeri ve alkol yıkama ile bulaşıklık oranı ölçümü",
      "Kalıntısız organik asit uygulamaları: Oksalik asit (buharlaştırma/damlatma) ve formik asit kullanımı",
      "Amerikan ve Avrupa Yavru Çürüklüğü belirtileri, karantina ve imha yöntemleri",
      "Balmumu güvesi ve kireç hastalığıyla mücadelede hijyen kuralları",
      "Tarımsal ilaçlamalara (pestisit) karşı arılık savunma protokolleri"
    ],
    equipment: ["Varroa sayım tablası", "Oksalik asit buharlaştırıcı", "Dozaj pipeti", "Koruyucu gaz maskesi"],
    gain: "Balda kesinlikle kimyasal kalıntı bırakmadan sağlıklı, dirençli ve uzun ömürlü koloniler yetiştirme."
  },
  {
    id: "mod-4",
    number: "04",
    title: "Ana Arı Yetiştiriciliği & Koloni Yenileme",
    shortDesc: "Damızlık seçimi, larva transferi, ana arı çiftleştirme ve ana arı kabul ettirme.",
    hours: 14,
    theoryHours: 6,
    practicalHours: 8,
    topics: [
      "Hırçın olmayan, oğul vermeye meyilsiz, verimli damızlık ana arı kriterleri",
      "Doolittle yöntemiyle yüksük hazırlama ve hassas larva transferi (aşılama)",
      "Başlatıcı ve bitirici kovan hazırlama stratejileri",
      "Çiftleştirme kutuları (ruşet) yönetimi ve çiftleşme uçuşu güvenliği",
      "Yaşlı/verimsiz ana arıyı değiştirme ve yeni anayı kovana stressiz kabul ettirme metotları"
    ],
    equipment: ["Larva transfer kaşığı", "Plastik yüksük tabanları", "Çiftleştirme ruşeti", "Ana arı kafesi"],
    gain: "Dışarıdan damızlık satın alma maliyetini sıfırlayarak kendi arılığının genç ve dinamik kraliçelerini üretebilme."
  },
  {
    id: "mod-5",
    number: "05",
    title: "Katma Değerli Arı Ürünleri Üretimi & Hasat",
    shortDesc: "Balın ötesinde; propolis, taze polen, arı sütü, perga ve balmumu hasadı.",
    hours: 12,
    theoryHours: 6,
    practicalHours: 6,
    topics: [
      "Istranca Meşe Balı ve yayla çiçek balı olgunlaşma (sırlama) kontrolü ve hijyenik sağım",
      "Polen tuzaklarının montajı, günlük temiz toplama ve nem alma süreçleri",
      "Propolis tuzağı serimi, derin dondurucuda hasat ve saf alkolsüz/alkollü ekstraksiyon farkındalığı",
      "Arı sütü üretimi için gerekli özel şartlar ve soğuk zincir protokolü",
      "Perga (Arı ekmeği) çıkarma yöntemleri ve piyasa ekonomik değeri"
    ],
    equipment: ["Propolis tuzakları", "Alt taban polen tuzakları", "Bal süzme kazanı", "Sır alma tarağı"],
    gain: "Kovan başı geliri yalnızca balla sınırlı bırakmayıp 3 katına kadar yükseltecek ürün çeşitliliği."
  },
  {
    id: "mod-6",
    number: "06",
    title: "Hijyen Standartları, Butik Markalaşma & Tarımsal Destekler",
    shortDesc: "Gıda kodeksi, arıcı birlikleri, kovan kayıt sistemi (AKS) ve devlet teşvikleri.",
    hours: 12,
    theoryHours: 8,
    practicalHours: 4,
    topics: [
      "Türk Gıda Kodeksi Bal Tebliği: Rutubet, HMF, prolin ve diyastaz değerleri",
      "Arıcılık Kayıt Sistemi (AKS) tescili ve ilçe tarım bildirim zorunlulukları",
      "Ziraat Bankası sıfır/düşük faizli sübvansiyonlu arıcılık kredileri ve başvuru koşulları",
      "TKDK / KOSGEB kırsal kalkınma hibe programlarında arıcılık projeleri",
      "Kofçaz yerel balı için butik ambalajlama, etiketleme ve e-ticaret satış stratejileri"
    ],
    equipment: ["Refraktometre (nem ölçer)", "Numune kavanozları", "Gıda onaylı etiket örnekleri"],
    gain: "Resmî teşviklerden tam faydalanma, yasal güvence ve ürününü aracısız yüksek fiyatla tüketiciye pazarlama kabiliyeti."
  }
];

export const KOFAZ_FLORA: FloraItem[] = [
  {
    name: "Istranca Meşe Salgı Balı (Quercus)",
    period: "Temmuz - Ağustos",
    nectarLevel: "Çok Yüksek",
    pollenLevel: "Orta",
    description: "Kofçaz'ın el değmemiş meşe ormanlarında palamut ve yapraklardan salgılanan zengin mineral ve antioksidan deposu siyah kehribar renkli özel bal.",
    benefit: "Çiçek balına göre 5 kat daha yüksek fenolik bileşen ve antibakteriyel güç taşır."
  },
  {
    name: "Istranca Ihlamuru (Tilia tomentosa)",
    period: "Haziran - Temmuz",
    nectarLevel: "Çok Yüksek",
    pollenLevel: "Yüksek",
    description: "Orman içlerindeki ulu ıhlamur ağaçlarının çiçek açmasıyla havanın buram buram koktuğu bereketli dönem.",
    benefit: "Sakinleştirici aroması ve yoğun nektar akışıyla kovanlarda kat doldurma hızını ikiye katlar."
  },
  {
    name: "Orman Gülü & Dağ Kekiği",
    period: "Mayıs - Temmuz",
    nectarLevel: "Yüksek",
    pollenLevel: "Yüksek",
    description: "Kofçaz meralarında ve taşlık tepe yamaçlarında kendiliğinden yetişen zengin kekik ve adaçayı türleri.",
    benefit: "Balın kristalize olmadan aromatik ferahlık ve boğazı yakmayan asil bir tat kazanmasını sağlar."
  },
  {
    name: "Püren (Erica Fundalıkları)",
    period: "Eylül - Ekim",
    nectarLevel: "Yüksek",
    pollenLevel: "Çok Yüksek",
    description: "Sonbaharda pembemsi çiçekler açan funda çalıları. Kış öncesi arıların kuluçka atması için hayati polen kaynağıdır.",
    benefit: "Arıların kışa genç ve güçlü girmesini sağlarken koyu kıvamlı nefis bir sonbahar balı verir."
  },
  {
    name: "Erken Bahar Söğüdü & Akasya",
    period: "Mart - Mayıs",
    nectarLevel: "Yüksek",
    pollenLevel: "Çok Yüksek",
    description: "Dere kenarlarındaki söğütlerin ve köy girişlerindeki akasyaların ilk uyanış nektarı.",
    benefit: "Kıştan çıkan arının ilk hızlandırıcı protein ihtiyacını karşılayıp kuluçkayı patlatır."
  }
];

export const BEEKEEPING_CALENDAR: CalendarSeason[] = [
  {
    season: "İlkbahar (Uyanış ve Gelişim)",
    months: "Mart - Nisan - Mayıs",
    focus: "Popülasyon artırma, oğul kontrolü ve ana arı yenileme",
    tasks: [
      "Hava sıcaklığı 15°C üzerine çıktığında ilk hızlı kovan dip tahtası temizliği.",
      "Ana arının yumurtlama durumunun kontrolü ve besin stoku bittiyse kek takviyesi.",
      "Nisan ayında 1:1 şeker şurubuyla kuluçka teşviki ve temel petek ilavesi.",
      "Mayıs ayında oğul eğiliminin kontrolü, yapay bölme ile arılığı büyütme ve katların atılması."
    ],
    alert: "Erken baharda kovanı uzun süre açık tutup kuluçkayı üşütmemeye dikkat edilmelidir."
  },
  {
    season: "Yaz (Büyük Bal Akımı & Hasat)",
    months: "Haziran - Temmuz - Ağustos",
    focus: "Maksimum nektar depolama ve hijyenik sağım",
    tasks: [
      "Ihlamur ve meşe salgısı döneminde kovanların havalandırma deliklerinin açık tutulması.",
      "Propolis ve polen tuzaklarının faal tutulması.",
      "Temmuz sonu / Ağustos başında en az %80'i sırlanmış bal çerçevelerinin sağımı.",
      "Hasat sonrası arılığa taze ve temiz su kaynağı sağlanması."
    ],
    alert: "Sırlanmamış (olgunlaşmamış) balların sağılması balın ekşimesine yol açar; nem oranı %18'in altında olmalıdır."
  },
  {
    season: "Sonbahar (Kışa Hazırlık & Sağlık)",
    months: "Eylül - Ekim - Kasım",
    focus: "Varroa akarıyla kesin mücadele ve kış stoku tamamlama",
    tasks: [
      "Bal hasadı biter bitmez ruhsatlı ve kalıntısız organik Varroa ilaçlaması yapılması.",
      "Püren ve sonbahar florasından yararlanılarak kışlayacak genç işçi arı neslinin yetiştirilmesi.",
      "Ekim ayında 2:1 koyu şurupla kovanın kışlık bal kemerlerinin doldurulması.",
      "Zayıf ve anasız kovanların birleştirilerek güçlü kolonilerle kışa girilmesi."
    ],
    alert: "Varroa mücadelesini geçe bırakmak, kışın kovanların tamamen sönmesine neden olur!"
  },
  {
    season: "Kış (Huzur ve Kovan Dinlenmesi)",
    months: "Aralık - Ocak - Şubat",
    focus: "Rutubet kontrolü, rüzgâr yalıtımı ve ekipman tamiri",
    tasks: [
      "Kovanların arkaya doğru hafif eğimli bırakılmaması; öne doğru hafif eğilerek suyun tahliyesi.",
      "Kovan içi havalandırmanın sağlanması; arıyı soğuk değil rutubet ve nem öldürür.",
      "Yavrusuz dönemde (Aralık ayı) ılık bir günde tek doz damlatma/buhar oksalik asit tatbiki.",
      "Kış boyunca arılıkta sessizliğin korunması, çerçeve ve kovan marangozluk işlerinin tamamlanması."
    ],
    alert: "Kışın kovanlar kesinlikle lüzumsuz yere açılıp salkım bozulmamalıdır."
  }
];

export const KOFAZ_VILLAGES = [
  "Kofçaz İlçe Merkezi (Yeni Mahalle / Yeşillik)",
  "Ahlatlı Köyü",
  "Aşağıkanara Köyü",
  "Beyci Köyü",
  "Devletliağaç Köyü",
  "Elmacık Köyü",
  "Karaabalar Köyü",
  "Kocatarla Köyü",
  "Kocayazı Köyü",
  "Malkoçlar Köyü",
  "Tatlıpınar Köyü",
  "Terzidere Köyü",
  "Topçular Köyü",
  "Yukarıkanara Köyü",
  "Diğer / Komşu Köyler"
];

export const FAQ_LIST: FaqItem[] = [
  {
    q: "Kursa katılmak için herhangi bir ücret ödemem gerekiyor mu?",
    a: "Hayır. Millî Eğitim Bakanlığı Kofçaz Halk Eğitimi Merkezi tarafından düzenlenen tüm kurslarımız gibi bu kursumuz da %100 devlet güvencesiyle tamamen ücretsizdir.",
    category: "Kayıt"
  },
  {
    q: "Daha önce hiç kovanım olmadı, arıcılığı sıfırdan öğrenebilir miyim?",
    a: "Kesinlikle evet! Müfredatımız sıfırdan başlayan üreticilerimizin anlayabileceği yalınlıkta, temel kovan anatomisinden başlayıp ileri düzey koloni yönetimi ve pratik kovan başı uygulamalarını içerecek şekilde hazırlanmıştır.",
    category: "Müfredat"
  },
  {
    q: "Alacağım kurs bitirme belgesi resmî ve geçerli midir?",
    a: "Evet. Kursu başarıyla tamamlayan kursiyerlerimize Millî Eğitim Bakanlığı Onaylı Kurs Bitirme Belgesi verilir. Bu belge doğrudan e-Devlet kapısına işlenir ve barkodlu olarak sorgulanabilir.",
    category: "Belge"
  },
  {
    q: "Bu belge ile devlet desteklerine veya banka kredilerine başvurabilir miyim?",
    a: "Evet. Ziraat Bankası sübvansiyonlu faiz indirimli arıcılık yatırım ve işletme kredilerinde, Tarım ve Orman Bakanlığı Arı Kovanı Desteklemelerinde, KOSGEB ve TKDK IPARD kırsal kalkınma hibe projelerinde MEB Arıcılık Belgesi zorunlu veya puan artırıcı resmî kriter olarak kabul edilmektedir.",
    category: "Destekler"
  },
  {
    q: "Ders günleri ve saatleri kırsaldaki çiftçilerimizin tarla/iş saatlerine uygun mu?",
    a: "Evet. Eğitim saatlerimiz köy ve ilçe merkezindeki üreticilerimizin günlük tarımsal faaliyetleri ve hayvan bakım saatleri göz önüne alınarak, katılımcılarımızın ortak mutabakatıyla en verimli saatlerde (öğleden sonra veya hafta sonu saha uygulaması) yürütülmektedir.",
    category: "Müfredat"
  },
  {
    q: "e-Yaygın üzerinden nasıl başvuru yapabilirim?",
    a: "e-yaygin.meb.gov.tr adresine girip e-Devlet şifrenizle giriş yapınız. 'Başvurular' sekmesinden 'Kurs Kursiyer Başvuru' alanına gelerek İl: KIRKLARELİ, İlçe: KOFÇAZ seçimini yapıp kursumuzu listeleyerek tek tıkla başvurabilirsiniz. İnterneti olmayan üreticilerimiz Kofçaz HEM müdürlüğümüze şahsen gelerek de kayıt yaptırabilirler.",
    category: "Kayıt"
  }
];

export const OFFICIAL_NEWS_TEXT = {
  title: "Kofçaz Halk Eğitimi Merkezimizde \"Modern Arıcılık ve Kovan Yönetimi Kursu\" Başlıyor",
  date: "Önümüzdeki Ay Başında",
  source: "T.C. Kofçaz İlçe Millî Eğitim Müdürlüğü - Kofçaz Halk Eğitimi Merkezi",
  content: `Kofçaz Halk Eğitimi Merkezi Müdürlüğü bünyesinde, ilçemizdeki tarım ve hayvancılık potansiyelini yükseltmek, kırsalda yaşayan üreticilerimizin aile ekonomilerine katkı sunmak amacıyla "Modern Arıcılık ve Kovan Yönetimi Kursu" planlanmıştır.

Önümüzdeki ay başlayacak olan kurs programı kapsamında; geleneksel arıcılık pratiklerinin modern tarım teknikleriyle buluşturulması, koloni kayıplarının önlenmesi, kovan içi hijyen kuralları ve yüksek katma değerli arı ürünlerinin üretimi uygulamalı ve teorik olarak aktarılacaktır. Kurs sonunda başarılı olan katılımcılara e-Devlet üzerinden de sorgulanabilir Millî Eğitim Bakanlığı onaylı sertifika düzenlenecektir.

Başvurular, Kofçaz Halk Eğitimi Merkezi hizmet binasından şahsen veya Bakanlığımızın e-Yaygın sistemi (e-yaygin.meb.gov.tr) üzerinden T.C. kimlik numarası ile yapılabilecektir. Tüm üreticilerimize ve ilgililere önemle duyurulur.`
};

export const SOCIAL_MEDIA_KIT = {
  postTitle: "📢 KOFÇAZ’DA ÜRETİME DEĞER, BALA BEREKET KATIYORUZ!",
  postBody: `T.C. Millî Eğitim Bakanlığı Kofçaz Halk Eğitimi Merkezi Müdürlüğü olarak; kırsal kalkınmayı desteklemek ve üreticilerimizin mesleki bilgi birikimini güçlendirmek amacıyla "Modern Arıcılık ve Kovan Yönetimi Kursu" açıyoruz.

Kofçaz’ın zengin orman ve mera florasını kazanca dönüştürmek, bilimsel yöntemlerle kovan verimini ve kalitesini artırmak isteyen tüm üreticilerimiz ve hemşehrilerimiz davetlidir.

📌 Kurs Programında Neler Var?
🔹 Modern Kovan Yönetimi ve Mevsimsel Bakım
🔹 Arı Sağlığı, Zararlılar ve Doğal Mücadele Yöntemleri
🔹 Kaliteli Bal, Polen, Propolis ve Arı Sütü Üretimi
🔹 Ana Arı Yetiştiriciliği ve Koloni Yönetimi
🔹 Tarımsal Desteklemeler ve Hijyen Standartları

🎓 Kursu başarıyla tamamlayan kursiyerlerimize MEB Onaylı Kurs Bitirme Belgesi verilecektir.

🗓️ Başvuru Tarihleri: Önümüzdeki Ay Başlangıcına Kadar
📍 Kayıt Yeri: Kofçaz Halk Eğitimi Merkezi Müdürlüğü
💻 Online Kayıt: e-yaygin.meb.gov.tr
📞 İletişim & Danışma: 0 (288) 315 10 24

Üreten eller Kofçaz'ın geleceğini inşa ediyor. 🌾🐝`,
  hashtags: "#KofçazHEM #Kofçaz #Kırklareli #HayatBoyuÖğrenme #MEB #ModernArıcılık #ArıcılıkKursu #KırsalKalkınma #ÜretenTürkiye #KovanYönetimi #HalkEğitimi"
};
