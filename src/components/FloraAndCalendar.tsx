import React, { useState } from 'react';
import { KOFAZ_FLORA, BEEKEEPING_CALENDAR, FloraItem, CalendarSeason } from '../data/courseData';
import { Sprout, Calendar, AlertTriangle, CheckCircle, Droplets, Sun, Wind, Snowflake } from 'lucide-react';

export const FloraAndCalendar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flora' | 'calendar'>('flora');
  const [selectedSeasonIdx, setSelectedSeasonIdx] = useState<number>(0);

  const seasonIcons = [Sun, Sun, Wind, Snowflake];

  return (
    <section id="flora-takvim" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-emerald-700 font-extrabold text-xs uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Kofçaz ve Istranca Doğasına Özel
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Bölgesel Arı Florası ve Yıllık Kovan Takvimi
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Kofçaz’ın yüksek rakımı, palamut ve meşe ormanları, nem dengesi ve zengin fundalıkları sayesinde
            Türkiye’nin en kıymetli meşe salgı ballarından biri üretilmektedir.
          </p>

          {/* Sekme Değiştirici */}
          <div className="mt-6 inline-flex p-1 bg-white border border-slate-200 rounded-xl shadow-xs">
            <button
              onClick={() => setActiveTab('flora')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'flora'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sprout className="w-4 h-4" />
              <span>Kofçaz Bal Florası</span>
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'calendar'
                  ? 'bg-[#1B365D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>4 Mevsim Arıcılık Takvimi</span>
            </button>
          </div>
        </div>

        {/* 1. SEÇENEK: KOFÇAZ FLORASI */}
        {activeTab === 'flora' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {KOFAZ_FLORA.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                        {item.period}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                        <Droplets className="w-3.5 h-3.5 text-blue-500" />
                        <span>Nektar: <strong className="text-slate-800">{item.nectarLevel}</strong></span>
                      </div>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="bg-emerald-50/70 border border-emerald-200/80 p-3 rounded-xl text-xs text-emerald-950 font-medium">
                    <strong className="text-emerald-900 block font-bold mb-0.5">🌾 Üreticiye Değeri:</strong>
                    {item.benefit}
                  </div>
                </div>
              ))}
            </div>

            {/* Flora Bilgilendirme Notu */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
              <span className="text-xl">🍯</span>
              <div>
                <strong className="font-bold text-amber-950">Istranca Meşe Balı Coğrafi Değeri:</strong>
                <p className="mt-0.5 leading-relaxed">
                  Kofçaz ilçemiz sınırlarında üretilen meşe salgı balı, prolin değeri ve antioksidan kapasitesi bakımından Türkiye ortalamasının katbekat üzerindedir. Kursumuzda bu balın erken sağımı, nem seviyesinin ölçümü ve kristalizasyonsuz depolama kuralları detaylı olarak işlenecektir.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 2. SEÇENEK: 4 MEVSİM ARICILIK TAKVİMİ */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            {/* Mevsim Butonları */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {BEEKEEPING_CALENDAR.map((cal, idx) => {
                const isSelected = idx === selectedSeasonIdx;
                const IconComponent = seasonIcons[idx];
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedSeasonIdx(idx)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-[#1B365D] text-white border-[#1B365D] shadow-md ring-2 ring-amber-400'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className={`w-5 h-5 ${isSelected ? 'text-amber-300' : 'text-slate-400'}`} />
                      <span className={`text-[11px] font-bold ${isSelected ? 'text-amber-200' : 'text-slate-500'}`}>
                        {cal.months}
                      </span>
                    </div>
                    <h4 className="font-black text-sm">{cal.season}</h4>
                  </button>
                );
              })}
            </div>

            {/* Seçili Mevsim Detayı */}
            {(() => {
              const current = BEEKEEPING_CALENDAR[selectedSeasonIdx];
              return (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-5 mb-5">
                    <div>
                      <span className="text-xs font-black text-[#C8232C] uppercase tracking-wider">
                        {current.months}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-1">
                        {current.season}
                      </h3>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-lg text-xs font-bold text-amber-900">
                      🎯 Temel Hedef: {current.focus}
                    </div>
                  </div>

                  {/* Yapılacak İşler */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      Uygulanacak Kritik Kovan İşlemleri:
                    </h4>
                    {current.tasks.map((task, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {task}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Kritik Uyarı */}
                  <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-red-900">
                    <AlertTriangle className="w-5 h-5 text-[#C8232C] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold text-red-950">Kofçaz İklimi İçin Kritik Dikkat:</strong>
                      <p className="mt-0.5 leading-relaxed">{current.alert}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
};
