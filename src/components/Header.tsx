import React, { useState } from 'react';
import { ExternalLink, Phone, MapPin, Award, BookOpen, Menu, X, CheckCircle2 } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Genel Bakış', id: 'genel-bakis' },
    { label: 'Müfredat (84 Saat)', id: 'mufredat' },
    { label: 'Kofçaz Florası & Takvim', id: 'flora-takvim' },
    { label: 'Verim Hesaplayıcı', id: 'hesaplayici' },
    { label: 'e-Yaygın Rehberi', id: 'eyaygin-rehber' },
    { label: 'Ön Kayıt Formu', id: 'on-kayit' },
    { label: 'Basın & Medya Kiti', id: 'medya-kiti' },
    { label: 'S.S.S.', id: 'sss' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Üst MEB Resmî Antet Bandı */}
      <div className="bg-[#C8232C] text-white py-2 px-4 border-b border-red-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs font-medium gap-1.5">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="tracking-wide">
              T.C. MİLLÎ EĞİTİM BAKANLIĞI • KIRKLARELİ / KOFÇAZ HALK EĞİTİMİ MERKEZİ MÜDÜRLÜĞÜ
            </span>
          </div>
          <div className="flex items-center space-x-4 text-white/90">
            <span className="hidden md:inline-flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
              Hayat Boyu Öğrenme Genel Müdürlüğü
            </span>
            <a
              href={`tel:${COURSE_INFO.contact.phone.replace(/[^0-9]/g, '')}`}
              className="hover:text-amber-200 transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              {COURSE_INFO.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Ana Navigasyon Çubuğu */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo ve Başlık */}
          <div
            onClick={() => handleNavClick('genel-bakis')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-11 h-11 bg-[#1B365D] rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-sm border border-slate-300 group-hover:scale-105 transition-transform">
                <span className="text-amber-400">H</span>EM
              </div>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#C8232C] text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                🐝
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none">
                  Kofçaz HEM
                </span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-300">
                  Resmî Kurs Portalı
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                Modern Arıcılık ve Kovan Yönetimi Eğitimi
              </p>
            </div>
          </div>

          {/* Masaüstü Menü */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs xl:text-sm font-semibold text-slate-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-2.5 py-1.5 rounded-lg hover:text-[#1B365D] hover:bg-slate-100 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Sağ Eylem Butonları */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={() => handleNavClick('on-kayit')}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm px-3.5 py-2 rounded-lg transition-all shadow-sm hover:shadow flex items-center gap-1.5"
            >
              <span>Ön Kayıt Yap</span>
            </button>
            <a
              href="https://e-yaygin.meb.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1B365D] hover:bg-[#122644] text-white font-semibold text-xs sm:text-sm px-3.5 py-2 rounded-lg transition-all shadow-sm hover:shadow flex items-center gap-1.5"
            >
              <span>e-Yaygın</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Menüyü aç/kapat"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobil Menü Açılır Alanı */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-5 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('on-kayit')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm py-2.5 rounded-lg text-center shadow-sm"
              >
                Kurs Ön Kaydı Yap
              </button>
              <a
                href="https://e-yaygin.meb.gov.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1B365D] text-white font-semibold text-sm py-2.5 rounded-lg text-center flex items-center justify-center gap-2"
              >
                <span>e-Yaygın Resmî Girişi</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
