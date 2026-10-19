import React, { useState, useEffect } from 'react';
import { KOFAZ_VILLAGES, COURSE_INFO } from '../data/courseData';
import { CheckCircle, AlertCircle, Printer, Download, UserCheck, Shield, PhoneCall } from 'lucide-react';

export const RegistrationForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [tcNo, setTcNo] = useState('');
  const [phone, setPhone] = useState('');
  const [village, setVillage] = useState(KOFAZ_VILLAGES[0]);
  const [experience, setExperience] = useState('Kovanım yok, sıfırdan başlayacağım');
  const [interest, setInterest] = useState('Bal verimi artırma ve kışlatma');
  const [notes, setNotes] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [registeredData, setRegisteredData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('kofcaz_hem_registration');
    if (saved) {
      try {
        setRegisteredData(JSON.parse(saved));
        setSubmitted(true);
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const refNo = `KFC-HEM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const record = {
      refNo,
      fullName,
      tcNo: tcNo ? `${tcNo.slice(0, 3)}*****${tcNo.slice(-2)}` : 'Belirtilmedi',
      phone,
      village,
      experience,
      interest,
      notes,
      date: new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    setTimeout(() => {
      localStorage.setItem('kofcaz_hem_registration', JSON.stringify(record));
      setRegisteredData(record);
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    localStorage.removeItem('kofcaz_hem_registration');
    setSubmitted(false);
    setRegisteredData(null);
    setFullName('');
    setTcNo('');
    setPhone('');
    setNotes('');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="on-kayit" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Başlık */}
        <div className="text-center mb-10">
          <span className="text-amber-800 font-extrabold text-xs uppercase tracking-wider bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
            Ücretsiz Resmî Başvuru & Ön Kayıt
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Kurs Ön Kayıt ve Bilgilendirme Formu
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Kofçaz ilçemizde ikamet eden üreticilerimiz aşağıdaki formu doldurarak sınıf planlaması ve ders saatleri hakkında öncelikli bilgi alabilirler.
          </p>
        </div>

        {submitted && registeredData ? (
          /* Başarı Ekranı */
          <div className="bg-emerald-50/90 border-2 border-emerald-500 rounded-3xl p-6 sm:p-10 shadow-lg text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <CheckCircle className="w-10 h-10" />
            </div>

            <span className="bg-emerald-200 text-emerald-900 text-xs font-black px-3 py-1 rounded-full uppercase">
              Ön Kayıt Talebiniz Başarıyla Alındı
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-emerald-950 mt-3">
              Tebrikler, {registeredData.fullName}!
            </h3>
            <p className="text-sm text-emerald-800 max-w-lg mx-auto mt-2 leading-relaxed">
              Kofçaz HEM Arıcılık Kursu ön kayıt listenize kaydınız yapılmıştır. Kurs başlangıç tarihi öncesinde kurumumuz personeli tarafından belirtmiş olduğunuz <strong>{registeredData.phone}</strong> numarasından sizinle iletişime geçilecektir.
            </p>

            {/* Fiş Özeti */}
            <div className="bg-white rounded-2xl p-6 border border-emerald-200 max-w-md mx-auto my-6 text-left text-xs sm:text-sm space-y-2.5 shadow-xs">
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500">Kayıt Referans Kodu:</span>
                <strong className="text-[#1B365D] font-mono">{registeredData.refNo}</strong>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500">İkamet Köyü:</span>
                <strong className="text-slate-800">{registeredData.village}</strong>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500">Mevcut Durum:</span>
                <strong className="text-slate-800">{registeredData.experience}</strong>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500">Öncelikli Odak:</span>
                <strong className="text-slate-800">{registeredData.interest}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Kayıt Tarihi:</span>
                <strong className="text-slate-800">{registeredData.date}</strong>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handlePrint}
                className="bg-[#1B365D] hover:bg-[#122644] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-2 transition"
              >
                <Printer className="w-4 h-4" />
                <span>Kayıt Fişini Yazdır</span>
              </button>
              <button
                onClick={handleReset}
                className="bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl border border-slate-300 transition"
              >
                Yeni Başvuru Yap
              </button>
            </div>

            <div className="mt-6 text-[11px] text-emerald-800/80">
              *Resmî e-Devlet kursiyer kaydınız için e-yaygin.meb.gov.tr sisteminden de onay vermeyi unutmayınız.
            </div>
          </div>
        ) : (
          /* Form Alanı */
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 border border-slate-300 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Ad Soyad */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Adınız ve Soyadınız <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Ahmet Yılmaz"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                />
              </div>

              {/* Telefon */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Telefon Numaranız (SMS & İletişim İçin) <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="05XX XXX XX XX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                />
              </div>

              {/* T.C. Kimlik No (İsteğe Bağlı) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  T.C. Kimlik Numarası (e-Yaygın eşleşmesi için)
                </label>
                <input
                  type="text"
                  maxLength={11}
                  placeholder="11 haneli kimlik no (isteğe bağlı)"
                  value={tcNo}
                  onChange={(e) => setTcNo(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                />
              </div>

              {/* Köy / Mahalle */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  İkamet Ettiğiniz Köy / Mahalle <span className="text-red-600">*</span>
                </label>
                <select
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                >
                  {KOFAZ_VILLAGES.map((v, i) => (
                    <option key={i} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mevcut Arıcılık Durumu */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Mevcut Arıcılık Tecrübeniz & Kovan Durumu
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                >
                  <option value="Kovanım yok, sıfırdan başlayacağım">Kovanım yok, sıfırdan başlayacağım</option>
                  <option value="1 - 10 kovanım var (Hobi / Aile Tipi)">1 - 10 kovanım var (Hobi / Aile Tipi)</option>
                  <option value="11 - 30 kovanım var (Gelişen Üretici)">11 - 30 kovanım var (Gelişen Üretici)</option>
                  <option value="30+ kovanım var (Profesyonel Arıcı)">30+ kovanım var (Profesyonel Arıcı)</option>
                </select>
              </div>

              {/* Öncelikli İlgi Alanı */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Öncelikli Öğrenmek İstediğiniz Konu
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                >
                  <option value="Bal verimi artırma ve kışlatma">Bal verimi artırma ve kışlatma</option>
                  <option value="Varroa ve arı hastalıklarıyla biyolojik mücadele">Varroa ve arı hastalıklarıyla biyolojik mücadele</option>
                  <option value="Ana arı yetiştiriciliği ve larva transferi">Ana arı yetiştiriciliği ve larva transferi</option>
                  <option value="Propolis, polen ve arı sütü hasadı">Propolis, polen ve arı sütü hasadı</option>
                  <option value="Ziraat Bankası sübvansiyonlu arıcılık kredisi ve hibe şartları">Ziraat Bankası kredileri & hibeler</option>
                </select>
              </div>
            </div>

            {/* Ek Not */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Varsa Eklemek İstediğiniz Not veya Sorunuz
              </label>
              <textarea
                rows={2}
                placeholder="Örn: Derslerin öğleden sonra yapılmasını rica ederim..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
              />
            </div>

            {/* KVKK / Güvence Notu */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-amber-700 shrink-0" />
              <span>
                Bilgileriniz 6698 sayılı KVKK kapsamında yalnızca Kofçaz HEM kurs planlaması ve resmî bilgilendirme amacıyla korunmaktadır. Hiçbir 3. şahısla paylaşılmaz.
              </span>
            </div>

            {/* Gönder Butonu */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#C8232C] hover:bg-[#a51921] text-white font-bold text-base py-3.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <UserCheck className="w-5 h-5" />
              <span>{submitting ? 'Kaydınız Alınıyor...' : 'Ön Kayıt Talebini Gönder (Ücretsiz)'}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
