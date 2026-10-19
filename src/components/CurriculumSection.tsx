import React, { useState } from 'react';
import { MODULES, Module } from '../data/courseData';
import { BookOpen, CheckCircle, Clock, Wrench, Target, ChevronDown, ChevronUp, Layers } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<string>(MODULES[0].id);
  const [expandedAll, setExpandedAll] = useState<boolean>(false);

  const selectedModule = MODULES.find((m) => m.id === activeModuleId) || MODULES[0];

  return (
    <section id="mufredat" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Bölüm Başlığı */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#C8232C] font-extrabold text-xs uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            84 Saatlik Resmî MEB Müfredatı
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Eğitim Modülleri ve Kovan Başı Kazanımlar
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Teorik derslik eğitiminin yanı sıra doğrudan kovan başında çıta inceleme, ana arı bulma,
            oğul önleme ve hijyenik hasat uygulamalarıyla eksiksiz uzmanlık programı.
          </p>
        </div>

        {/* Özet Metrik Şeridi */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-4xl mx-auto text-center">
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
            <span className="text-2xl font-black text-[#1B365D]">84</span>
            <span className="text-xs text-slate-500 block font-semibold">Toplam Ders Saati</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
            <span className="text-2xl font-black text-amber-600">42 + 42</span>
            <span className="text-xs text-slate-500 block font-semibold">Teorik + Uygulama</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
            <span className="text-2xl font-black text-emerald-600">6</span>
            <span className="text-xs text-slate-500 block font-semibold">Temel Uzmanlık Modülü</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
            <span className="text-2xl font-black text-[#C8232C]">%100</span>
            <span className="text-xs text-slate-500 block font-semibold">MEB Onaylı Belge</span>
          </div>
        </div>

        {/* Masaüstü Modül Seçim Sekmeleri */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {MODULES.map((mod) => {
            const isActive = mod.id === activeModuleId;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`text-left p-3 rounded-xl border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#1B365D] text-white border-[#1B365D] shadow-md ring-2 ring-amber-400'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-xs font-black px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-800'
                    }`}
                  >
                    Modül {mod.number}
                  </span>
                  <span className={`text-[11px] font-bold ${isActive ? 'text-amber-200' : 'text-slate-500'}`}>
                    {mod.hours}s
                  </span>
                </div>
                <p className="text-xs font-bold line-clamp-2 leading-tight">{mod.title}</p>
              </button>
            );
          })}
        </div>

        {/* Seçili Modül Detay Kartı */}
        <div className="bg-slate-50 rounded-2xl border border-slate-300 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-[#C8232C] text-white text-xs font-black px-2.5 py-1 rounded-md">
                  MODÜL {selectedModule.number}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Toplam {selectedModule.hours} Ders Saati
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                {selectedModule.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                {selectedModule.shortDesc}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-white border border-slate-200 px-3 py-2 rounded-xl text-center">
                <span className="text-xs text-slate-500 block">Teori</span>
                <span className="text-base font-bold text-[#1B365D]">{selectedModule.theoryHours} Saat</span>
              </div>
              <div className="bg-white border border-slate-200 px-3 py-2 rounded-xl text-center">
                <span className="text-xs text-slate-500 block">Kovan Başı Saha</span>
                <span className="text-base font-bold text-amber-600">{selectedModule.practicalHours} Saat</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Konu Başlıkları */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>İşlenecek Ayrıntılı Ders Konuları</span>
              </h4>
              <div className="space-y-2.5">
                {selectedModule.topics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Yan Bilgi: Kazanım ve Ekipmanlar */}
            <div className="space-y-5">
              <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-xl">
                <h4 className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <Target className="w-4 h-4 text-amber-700" />
                  <span>Modülün Temel Kazanımı</span>
                </h4>
                <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                  {selectedModule.gain}
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                  <Wrench className="w-4 h-4 text-[#1B365D]" />
                  <span>Kullanılacak Eğitim Ekipmanları</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedModule.equipment.map((eq, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-md border border-slate-200"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tüm Modülleri Listeleyen Aç/Kapat Butonu */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setExpandedAll(!expandedAll)}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1B365D] hover:text-[#C8232C] transition-colors"
          >
            <Layers className="w-4 h-4" />
            <span>{expandedAll ? 'Özet Görünüme Dön' : 'Tüm Modüllerin Özet Listesini Aç'}</span>
            {expandedAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {expandedAll && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-300">
            {MODULES.map((m) => (
              <div key={m.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-[#C8232C]">Modül {m.number}</span>
                  <span className="text-xs font-bold text-slate-500">{m.hours} Saat</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">{m.title}</h4>
                <p className="text-xs text-slate-600 mb-3">{m.shortDesc}</p>
                <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-200">
                  🎯 {m.gain}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
