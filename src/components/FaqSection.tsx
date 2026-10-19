import React, { useState } from 'react';
import { FAQ_LIST, FaqItem } from '../data/courseData';
import { ChevronDown, ChevronUp, HelpCircle, PhoneCall } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const categories = ['Tümü', 'Kayıt', 'Müfredat', 'Belge', 'Destekler'];

  const filteredFaqs =
    selectedCategory === 'Tümü'
      ? FAQ_LIST
      : FAQ_LIST.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="sss" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Başlık */}
        <div className="text-center mb-10">
          <span className="text-amber-800 font-extrabold text-xs uppercase tracking-wider bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
            Üreticilerimizin Merak Ettikleri
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Sıkça Sorulan Sorular (S.S.S.)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Kurs süresi, katılım şartları, sertifikanın devlet desteklerindeki geçerliliği hakkında merak edilen tüm yanıtlar.
          </p>

          {/* Filtre Butonları */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIdx(0);
                }}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-lg border transition ${
                  selectedCategory === cat
                    ? 'bg-[#1B365D] text-white border-[#1B365D]'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Akordeon Listesi */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#1B365D]"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center shrink-0 font-black">
                      ?
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    <p>{faq.a}</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 font-semibold pt-2 border-t border-slate-100">
                      <span>Kategori: {faq.category}</span>
                      <span className="text-emerald-600">✓ Resmî Bilgilendirme</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Farklı Bir Soru İçin Danışma */}
        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#1B365D]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <PhoneCall className="w-5 h-5 text-[#1B365D] shrink-0" />
            <span>
              Sorunuzun cevabını bulamadınız mı? Kofçaz HEM müdürlüğümüzü doğrudan arayarak bilgi alabilirsiniz.
            </span>
          </div>
          <a
            href="tel:02883151024"
            className="bg-[#1B365D] hover:bg-[#122644] text-white font-bold px-4 py-2 rounded-lg shrink-0 transition"
          >
            0 (288) 315 10 24
          </a>
        </div>
      </div>
    </section>
  );
};
