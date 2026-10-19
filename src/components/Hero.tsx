import React from 'react';
import { Award, Clock, Sparkles, ShieldCheck, ChevronRight, Compass, Sprout, ArrowDown, FileText } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="genel-bakis" className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-white to-slate-50 pt-8 pb-14 border-b border-amber-100">
      {/* Arka Plan Dekoratif Petek Geometrisi */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Üst Rozet Grubu */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
            <span>🐝</span>
            <span>Kırsal Kalkınma ve Üretim Seferberliği</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-red-100 text-[#C8232C] border border-red-200 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>%100 Ücretsiz MEB Hizmeti</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
            <Sprout className="w-3.5 h-3.5" />
            <span>Kofçaz & Istranca Florası Odaklı</span>
          </span>
        </div>

        {/* Ana Başlık ve Sloganlar */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight sm:leading-none">
            Modern Arıcılık ve <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900">
              Kovan Yönetimi Kursu
            </span>
          </h1>

          {/* Ana Slogan */}
          <p className="mt-5 text-xl sm:text-2xl font-bold text-[#1B365D] tracking-tight">
            “{COURSE_INFO.mainSlogan}”
          </p>

          {/* Alt Slogan & Pazarlama Mesajı */}
          <p className="mt-2 text-sm sm:text-base font-medium text-amber-800">
            {COURSE_INFO.subSlogan}
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kofçaz’ın eşsiz meşe ormanlarını, ıhlamurlarını ve yayla florasını yüksek katma değerli üretime dönüştürün.
            Bilimsel kovan yönetimiyle kış kayıplarını en aza indirin, kovan başı bal ve yan ürün veriminizi 3 katına çıkarın.
          </p>

          {/* Eylem Butonları */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('on-kayit')}
              className="w-full sm:w-auto bg-[#C8232C] hover:bg-[#a51921] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>Hemen Ön Kayıt Yapın</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('mufredat')}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold px-6 py-3.5 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Müfredatı ve Kazanımları Gör</span>
            </button>
            <button
              onClick={() => onNavigate('hesaplayici')}
              className="w-full sm:w-auto bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 font-bold px-5 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>Gelir Hesapla</span>
              <span className="text-xs bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded font-black">Yeni</span>
            </button>
          </div>
        </div>

        {/* 4 Ana Güvence / Özet Kartı */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/90 backdrop-blur rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-[#C8232C] flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">MEB Onaylı Belge</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              e-Devlet üzerinden sorgulanabilir, Ziraat Bankası sübvansiyonlu arıcılık kredilerinde ve hibe programlarında geçerli.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">84 Ders Saati</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              42 saat teorik kovan biyolojisi ve arı sağlığı, 42 saat kovan başında doğrudan uygulamalı pratik eğitim.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Katma Değerli Ürünler</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Yalnızca bal değil; propolis tuzakları, taze polen hasadı, arı sütü ve perga üretimiyle kovan başı 3 kat gelir.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1B365D] flex items-center justify-center mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Kofçaz'a Özel Takvim</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Istranca meşe salgı balı dönemi, püren sonbahar akımı ve kışlatma rüzgâr şartlarına uyarlanmış yerel saha bilgisi.
            </p>
          </div>
        </div>

        {/* Kurumsal Bilgilendirme Notu */}
        <div className="mt-8 bg-amber-50/80 border border-amber-200 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-amber-900 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold">📢 Resmî Duyuru:</span>
            <span>Kursumuz önümüzdeki ay başında Kofçaz Halk Eğitimi Merkezi Müdürlüğü derslikleri ve demonstrasyon arılığında başlayacaktır.</span>
          </div>
          <button
            onClick={() => onNavigate('eyaygin-rehber')}
            className="text-[#1B365D] font-bold hover:underline shrink-0 flex items-center gap-1"
          >
            <span>Nasıl Başvurulur?</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
