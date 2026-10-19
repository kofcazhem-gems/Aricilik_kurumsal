import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Monitor, Building2, Smartphone, ArrowRight, HelpCircle } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

export const EYayginGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: "e-Yaygın Sistemine Giriş",
      action: "e-yaygin.meb.gov.tr adresini tarayıcınızda açın ve 'e-Devlet ile Giriş Yap' butonuna tıklayarak T.C. kimlik numaranız ve e-Devlet şifrenizle oturum açın.",
      tip: "e-Devlet şifreniz yoksa en yakın PTT şubesinden veya internet bankacılığı üzerinden temin edebilirsiniz."
    },
    {
      step: 2,
      title: "Kursiyer Başvuru Menüsü",
      action: "Sisteme giriş yaptıktan sonra sol üst menüdeki 'Başvurular' sekmesine tıklayın ve altındaki 'Kurs Kursiyer Başvuru' seçeneğini seçin.",
      tip: "Sistemde iletişim bilgilerinizin ve telefon numaranızın güncel olduğunu teyit edin."
    },
    {
      step: 3,
      title: "İl, İlçe ve Kurs Filtreleme",
      action: "Arama formunda İl kutusuna 'KIRKLARELİ', İlçe kutusuna 'KOFÇAZ' seçin. Kurs Adı arama kutusuna 'Arıcılık' veya 'Modern Arıcılık' yazarak 'Ara' butonuna basın.",
      tip: "Kurum olarak 'Kofçaz Halk Eğitimi Merkezi Müdürlüğü' görünecektir."
    },
    {
      step: 4,
      title: "Kaydet ve Onayla",
      action: "Listelenen 'Modern Arıcılık ve Kovan Yönetimi Kursu' satırının sağ tarafında bulunan 'Kursa Başvur' butonuna tıklayarak müracaatınızı tamamlayın.",
      tip: "Başvurunuz sisteme düştükten sonra ders başlama tarihi ve sınıf listesi SMS ile telefonunuza iletilecektir."
    }
  ];

  return (
    <section id="eyaygin-rehber" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#1B365D] font-extrabold text-xs uppercase tracking-wider bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Resmî Kayıt Kılavuzu
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            e-Yaygın Üzerinden Kursa Nasıl Kayıt Olunur?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Millî Eğitim Bakanlığı Hayat Boyu Öğrenme Genel Müdürlüğü e-Yaygın sistemi üzerinden 4 kolay adımda kurs başvurunuzu yapabilirsiniz.
          </p>
        </div>

        {/* 2 Temel Başvuru Yolu Seçim Kutusu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 border-2 border-[#1B365D] shadow-sm relative overflow-hidden">
            <span className="bg-[#1B365D] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full absolute top-4 right-4">
              ÖNERİLEN • 7/24 DİJİTAL
            </span>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1B365D] flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">e-Yaygın İnternet Başvurusu</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              İlçe merkezine gelmenize gerek kalmadan, akıllı telefonunuzdan veya bilgisayarınızdan e-Devlet şifrenizle 2 dakikada başvuru yapabilirsiniz.
            </p>
            <a
              href="https://e-yaygin.meb.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1B365D] hover:bg-[#122644] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition"
            >
              <span>e-Yaygın Sistemine Git</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Kofçaz HEM Binasından Şahsen Başvuru</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              İnternet veya e-Devlet erişimi olmayan üreticilerimiz, T.C. kimlik kartı ile mesai saatleri içinde Kofçaz Halk Eğitimi Merkezi Müdürlüğü hizmet binamıza gelerek halkla ilişkiler servisimizden kayıt desteği alabilirler.
            </p>
            <div className="text-xs text-slate-500 font-medium">
              📍 {COURSE_INFO.contact.address} • Hafta içi 08:30 - 17:30
            </div>
          </div>
        </div>

        {/* 4 Adım Akışı */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
            <span>Adım Adım e-Yaygın Ekran Kılavuzu</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {steps.map((st) => (
              <button
                key={st.step}
                onClick={() => setActiveStep(st.step)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeStep === st.step
                    ? 'bg-[#1B365D] text-white border-[#1B365D] shadow-md ring-2 ring-amber-400'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-7 h-7 rounded-full text-xs font-black flex items-center justify-center ${
                      activeStep === st.step ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {st.step}
                  </span>
                  {activeStep === st.step && <span className="text-[10px] font-bold text-amber-300">Aktif Adım</span>}
                </div>
                <h4 className="font-bold text-sm leading-tight">{st.title}</h4>
              </button>
            ))}
          </div>

          {/* Aktif Adım Detay Kartı */}
          {(() => {
            const current = steps[activeStep - 1];
            return (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#C8232C] text-white text-xs font-black px-2 py-0.5 rounded">
                    Adım {current.step}
                  </span>
                  <h4 className="text-lg font-black text-slate-900">{current.title}</h4>
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed mb-4">
                  {current.action}
                </p>
                <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span><strong>Faydalı İpucu:</strong> {current.tip}</span>
                </div>

                <div className="mt-5 flex justify-between items-center pt-4 border-t border-slate-200">
                  <button
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="text-xs font-bold text-slate-600 disabled:opacity-30 hover:text-slate-900"
                  >
                    ← Önceki Adım
                  </button>
                  <button
                    disabled={activeStep === 4}
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="text-xs font-bold text-[#1B365D] disabled:opacity-30 hover:underline flex items-center gap-1"
                  >
                    <span>Sonraki Adım</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
