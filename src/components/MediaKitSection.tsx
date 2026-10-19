import React, { useState } from 'react';
import { OFFICIAL_NEWS_TEXT, SOCIAL_MEDIA_KIT, COURSE_INFO } from '../data/courseData';
import { Copy, Check, Share2, Newspaper, Palette, Award, QrCode, ExternalLink, Printer } from 'lucide-react';

export const MediaKitSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'news' | 'social' | 'poster'>('news');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="medya-kiti" className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#C8232C] font-extrabold text-xs uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Kofçaz HEM Basın ve İletişim Masası
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Basın, Sosyal Medya ve Afiş Şablon Kiti
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Kofçaz HEM - Dijital İletişim ve İçerik Ajansı standartlarında hazırlanan; resmî haber metni,
            sosyal medya duyuruları ve baskıya uygun afiş taslağı.
          </p>

          {/* Sekmeler */}
          <div className="mt-6 inline-flex p-1 bg-white border border-slate-200 rounded-xl shadow-xs">
            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'news'
                  ? 'bg-[#1B365D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              <span>Resmî Web Sitesi Haberi</span>
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'social'
                  ? 'bg-[#C8232C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Share2 className="w-4 h-4" />
              <span>Sosyal Medya Paylaşım Metni</span>
            </button>
            <button
              onClick={() => setActiveTab('poster')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'poster'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Canva / Baskı Afiş Şablonu</span>
            </button>
          </div>
        </div>

        {/* 1. SEKME: RESMÎ WEB SİTESİ HABERİ */}
        {activeTab === 'news' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400">
                  Format: kofcazhem.meb.k12.tr Haber Modülü
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  {OFFICIAL_NEWS_TEXT.title}
                </h3>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    `${OFFICIAL_NEWS_TEXT.title}\n\n${OFFICIAL_NEWS_TEXT.content}`,
                    'news'
                  )
                }
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition shrink-0"
              >
                {copiedType === 'news' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Haber Kopyalandı!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Haber Metnini Kopyala</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 font-sans text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {OFFICIAL_NEWS_TEXT.content}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100 gap-2">
              <span>Kurum: Kofçaz Halk Eğitimi Merkezi Müdürlüğü</span>
              <span>Yayın Tarihi: Önümüzdeki Ay Başı</span>
            </div>
          </div>
        )}

        {/* 2. SEKME: SOSYAL MEDYA PAYLAŞIM METNİ */}
        {activeTab === 'social' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="text-[11px] font-bold text-red-600">
                  Instagram & Facebook Hazır Gönderi Şablonu
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">
                  {SOCIAL_MEDIA_KIT.postTitle}
                </h3>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    `${SOCIAL_MEDIA_KIT.postTitle}\n\n${SOCIAL_MEDIA_KIT.postBody}\n\n${SOCIAL_MEDIA_KIT.hashtags}`,
                    'social'
                  )
                }
                className="bg-[#C8232C] hover:bg-[#a51921] text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition shrink-0"
              >
                {copiedType === 'social' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Metin + Etiketler Kopyalandı!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Tüm Paylaşımı Kopyala</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line font-sans">
              {SOCIAL_MEDIA_KIT.postBody}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-bold text-slate-600">Etiket Seti (Hashtags):</span>
                <button
                  onClick={() => copyToClipboard(SOCIAL_MEDIA_KIT.hashtags, 'tags')}
                  className="text-xs text-[#1B365D] hover:underline font-bold"
                >
                  {copiedType === 'tags' ? 'Kopyalandı!' : 'Sadece Etiketleri Kopyala'}
                </button>
              </div>
              <p className="bg-slate-100 p-3 rounded-lg text-xs font-mono text-slate-700 leading-relaxed border border-slate-200">
                {SOCIAL_MEDIA_KIT.hashtags}
              </p>
            </div>
          </div>
        )}

        {/* 3. SEKME: CANVA / AFİŞ ŞABLONU GÖRSELİ */}
        {activeTab === 'poster' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-700">
                🎨 Baskı / Afiş Şablonu Önizleme (A4 / Sosyal Medya Kartı)
              </span>
              <button
                onClick={() => window.print()}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black px-4 py-2 rounded-lg flex items-center gap-1.5 transition"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Yazdır / PDF İndir</span>
              </button>
            </div>

            {/* Afiş Kartı Mockup */}
            <div className="bg-white rounded-3xl border-4 border-slate-800 shadow-2xl overflow-hidden relative text-slate-900">
              {/* Üst Kırmızı Bant */}
              <div className="bg-[#C8232C] text-white py-4 px-6 text-center border-b-4 border-amber-400">
                <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                  T.C. MİLLÎ EĞİTİM BAKANLIĞI • KIRKLARELİ / KOFÇAZ KAYMAKAMLIĞI
                </p>
                <p className="text-xs sm:text-sm font-black tracking-wide mt-0.5">
                  Kofçaz Halk Eğitimi Merkezi Müdürlüğü
                </p>
              </div>

              {/* Afiş Gövdesi */}
              <div className="p-6 sm:p-10 text-center bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30">
                <span className="inline-block bg-[#1B365D] text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
                  🐝 KIRSAL KALKINMA SEFERBERLİĞİ
                </span>

                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  MODERN ARICILIK VE <br />
                  <span className="text-[#C8232C]">KOVAN YÖNETİMİ KURSU</span>
                </h3>

                <p className="mt-3 text-base sm:text-lg font-bold text-amber-900">
                  “{COURSE_INFO.mainSlogan}”
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                  {COURSE_INFO.subSlogan}
                </p>

                {/* 3 İkon Kutusu */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8 text-left">
                  <div className="bg-white p-3.5 rounded-xl border border-amber-200 shadow-xs">
                    <span className="text-lg block mb-1">🍯</span>
                    <strong className="text-xs font-black text-slate-900 block">Kovan Sağlığı & Bakımı</strong>
                    <span className="text-[11px] text-slate-500">Varroa mücadelesi ve kış kayıplarını önleme</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-amber-200 shadow-xs">
                    <span className="text-lg block mb-1">🐝</span>
                    <strong className="text-xs font-black text-slate-900 block">Ana Arı & Verim</strong>
                    <span className="text-[11px] text-slate-500">Larva transferi, oğul önleme ve bal artışı</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-amber-200 shadow-xs">
                    <span className="text-lg block mb-1">📜</span>
                    <strong className="text-xs font-black text-slate-900 block">MEB Onaylı Belge</strong>
                    <span className="text-[11px] text-slate-500">Ziraat Bankası sübvansiyonlu arıcılık kredisine uygun</span>
                  </div>
                </div>

                {/* Alt Bant Bilgileri */}
                <div className="bg-[#1B365D] text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="text-left space-y-1">
                    <p className="font-bold text-amber-300">BAŞVURU VE KAYIT MERKEZİ:</p>
                    <p className="text-white/90">Kofçaz Halk Eğitimi Merkezi Hizmet Binası</p>
                    <p className="text-white/80">Online: e-yaygin.meb.gov.tr • Danışma: 0 (288) 315 10 24</p>
                  </div>
                  <div className="shrink-0 bg-white text-slate-900 p-2 rounded-xl text-center flex flex-col items-center">
                    <QrCode className="w-12 h-12 text-[#1B365D]" />
                    <span className="text-[9px] font-black mt-1">e-YAYGIN GİRİŞİ</span>
                  </div>
                </div>
              </div>

              {/* Kurumsal Renk Paleti Bilgisi */}
              <div className="bg-slate-900 text-slate-300 py-3 px-6 text-[10px] flex flex-wrap justify-between items-center gap-2">
                <span>Kurumsal Palet: #C8232C (MEB) • #1B365D (HEM) • #F59E0B (Bal) • #15803D (Doğa)</span>
                <span>T.C. Millî Eğitim Bakanlığı Onaylı Format</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
