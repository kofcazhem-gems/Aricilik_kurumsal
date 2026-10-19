import React from 'react';
import { COURSE_INFO } from '../data/courseData';
import { ExternalLink, Phone, Mail, MapPin, Clock, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 text-xs font-sans">
      {/* Üst Vurgulayıcı Şerit */}
      <div className="bg-[#1B365D] border-b border-slate-700 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs font-medium text-slate-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>T.C. Kofçaz Kaymakamlığı • İlçe Millî Eğitim Müdürlüğü</span>
          </div>
          <div className="text-slate-300">
            Hayat Boyu Öğrenme ile Her Zaman, Her Yerde, Herkese Eğitim
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* 1. Kurum Kimliği */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#C8232C] rounded-lg flex items-center justify-center text-white font-black text-base shadow">
                HEM
              </div>
              <div>
                <h4 className="font-black text-white text-sm">Kofçaz HEM</h4>
                <p className="text-[11px] text-slate-400">Halk Eğitimi Merkezi Müdürlüğü</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Kofçaz’ın kırsal üreticilerini modern tarım ve arıcılık teknikleriyle buluşturarak aile ekonomilerini güçlendirmeyi ve bölgesel meşe balı kalitesini yükseltmeyi hedefliyoruz.
            </p>
          </div>

          {/* 2. İletişim Bilgileri */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              İletişim & Ulaşım
            </h4>
            <div className="flex items-start gap-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{COURSE_INFO.contact.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`tel:${COURSE_INFO.contact.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white">
                {COURSE_INFO.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{COURSE_INFO.contact.email}</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{COURSE_INFO.contact.workingHours}</span>
            </div>
          </div>

          {/* 3. Resmî Bağlantılar */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              Resmî Bağlantılar
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="https://e-yaygin.meb.gov.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                  <span>e-Yaygın Kurs Başvuru Portalı</span>
                </a>
              </li>
              <li>
                <a
                  href="https://hbogm.meb.gov.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Hayat Boyu Öğrenme Genel Md.</span>
                </a>
              </li>
              <li>
                <a
                  href="https://kofcaz.meb.gov.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Kofçaz İlçe Millî Eğitim Müdürlüğü</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.turkiye.gov.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>e-Devlet Kapısı Belge Doğrulama</span>
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Resmî Belge & Güvence */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              Kurs Belgesi Güvencesi
            </h4>
            <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700 text-[11px] text-slate-300 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>e-Devlet Doğrulanabilir</span>
              </div>
              <p className="leading-relaxed">
                Kurs bitirme belgeniz T.C. Millî Eğitim Bakanlığı bilişim sistemlerine işlenir ve barkodlu olarak tüm resmî kurumlarda geçerlidir.
              </p>
            </div>
          </div>
        </div>

        {/* En Alt Telif & Yasal Çizgi */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} T.C. Millî Eğitim Bakanlığı Kofçaz Halk Eğitimi Merkezi Müdürlüğü. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <span>Resmî Hayat Boyu Öğrenme Portalı</span>
            <button
              onClick={scrollToTop}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg flex items-center gap-1 transition"
            >
              <span>Yukarı Çık</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
