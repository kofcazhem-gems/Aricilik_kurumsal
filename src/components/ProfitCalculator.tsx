import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const ProfitCalculator: React.FC = () => {
  const [hiveCount, setHiveCount] = useState<number>(20);
  const [honeyPrice, setHoneyPrice] = useState<number>(450); // TL/kg
  const [propolisEnabled, setPropolisEnabled] = useState<boolean>(true);
  const [pollenEnabled, setPollenEnabled] = useState<boolean>(true);

  // Geleneksel Hesaplama
  const tradHoneyPerHive = 9; // kg
  const tradHoneyTotalKg = hiveCount * tradHoneyPerHive;
  const tradGrossIncome = tradHoneyTotalKg * honeyPrice;

  // Modern Yönetim Hesaplama
  const modernHoneyPerHive = 20; // kg
  const modernHoneyTotalKg = hiveCount * modernHoneyPerHive;
  const modernHoneyIncome = modernHoneyTotalKg * honeyPrice;

  // Yan Ürünler
  const propolisGramsPerHive = propolisEnabled ? 150 : 0; // gram
  const propolisPricePerGram = 3.5; // TL/gr (Kilosu ~3500 TL)
  const propolisIncome = hiveCount * (propolisGramsPerHive * propolisPricePerGram);

  const pollenKgPerHive = pollenEnabled ? 2.5 : 0; // kg
  const pollenPricePerKg = 500; // TL/kg
  const pollenIncome = hiveCount * (pollenKgPerHive * pollenPricePerKg);

  const modernGrossIncome = modernHoneyIncome + propolisIncome + pollenIncome;
  const netAdvantage = modernGrossIncome - tradGrossIncome;
  const multiplier = (modernGrossIncome / (tradGrossIncome || 1)).toFixed(1);

  return (
    <section id="hesaplayici" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-800 font-extrabold text-xs uppercase tracking-wider bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
            Üretici Kazanç Simülatörü
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Geleneksel vs Modern Kovan Verim ve Gelir Hesaplayıcı
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Bilinçli oğul kontrolü, genç ana arı kullanımı ve propolis/polen tuzaklarıyla kovan başına kazancınızı nasıl üçe katlayacağınızı canlı hesaplayın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sol Panel: Giriş ve Ayarlar */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
            <h3 className="font-black text-slate-900 text-lg flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-600" />
              <span>Arılık Parametreleriniz</span>
            </h3>

            {/* Kovan Sayısı */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700">Mevcut veya Hedef Kovan Sayısı:</label>
                <span className="text-lg font-black text-[#1B365D] bg-white px-2.5 py-0.5 rounded border border-slate-300">
                  {hiveCount} Kovan
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={hiveCount}
                onChange={(e) => setHiveCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1B365D]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                <span>5 Kovan</span>
                <span>25 Kovan</span>
                <span>50 Kovan</span>
                <span>100 Kovan</span>
              </div>

              {/* Hızlı Seçim Butonları */}
              <div className="flex gap-2 mt-2">
                {[10, 20, 30, 50].map((num) => (
                  <button
                    key={num}
                    onClick={() => setHiveCount(num)}
                    className={`flex-1 py-1 text-xs font-bold rounded-lg border transition ${
                      hiveCount === num
                        ? 'bg-[#1B365D] text-white border-[#1B365D]'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {num} Adet
                  </button>
                ))}
              </div>
            </div>

            {/* Bal Satış Fiyatı */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700">Tahmini Bal Satış Fiyatı (TL/kg):</label>
                <span className="text-sm font-black text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {honeyPrice} ₺ / kg
                </span>
              </div>
              <input
                type="range"
                min="250"
                max="800"
                step="25"
                value={honeyPrice}
                onChange={(e) => setHoneyPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                *Kofçaz meşe salgı balı ve ıhlamur balı perakende kilogram fiyatı piyasada 400 - 700 ₺ arasındadır.
              </p>
            </div>

            {/* Yan Ürün Tercihleri */}
            <div className="border-t border-slate-200 pt-4 space-y-3">
              <label className="text-xs font-bold text-slate-800 block">Modern Yan Ürün Hasadı:</label>
              
              <label className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 cursor-pointer hover:border-amber-400 transition">
                <input
                  type="checkbox"
                  checked={propolisEnabled}
                  onChange={(e) => setPropolisEnabled(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-600 accent-amber-600"
                />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">Propolis Tuzağı Kurulsun (+150 gr / kovan)</span>
                  <span className="text-slate-500">Doğal bağışıklık ürünü, yüksek piyasa değeri</span>
                </div>
              </label>

              <label className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 cursor-pointer hover:border-amber-400 transition">
                <input
                  type="checkbox"
                  checked={pollenEnabled}
                  onChange={(e) => setPollenEnabled(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-600 accent-amber-600"
                />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">Polen Tuzağı Kullanılsın (+2.5 kg / kovan)</span>
                  <span className="text-slate-500">İlkbaharda taze polen hasadı, sıfır maliyetle ek gelir</span>
                </div>
              </label>
            </div>
          </div>

          {/* Sağ Panel: Karşılaştırmalı Sonuçlar */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Geleneksel Kovan Tablosu */}
              <div className="bg-slate-100 rounded-2xl p-5 border border-slate-300">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Geleneksel / Bakımsız Kovan
                </span>
                <p className="text-2xl font-black text-slate-700">
                  {tradGrossIncome.toLocaleString('tr-TR')} ₺
                </p>
                <div className="mt-4 space-y-2 text-xs text-slate-600 border-t border-slate-200 pt-3">
                  <div className="flex justify-between">
                    <span>Kovan başı ortalama:</span>
                    <strong className="text-slate-800">{tradHoneyPerHive} kg</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Toplam bal hasadı:</span>
                    <strong className="text-slate-800">{tradHoneyTotalKg} kg</strong>
                  </div>
                  <div className="flex justify-between text-red-600 font-semibold">
                    <span>Kışlatma kaybı riski:</span>
                    <span>%25 - %35</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Propolis & Polen:</span>
                    <span>0 ₺ (Hasat yok)</span>
                  </div>
                </div>
              </div>

              {/* Modern Kovan Yönetimi Tablosu */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 rounded-2xl p-5 shadow-lg border border-amber-400 relative overflow-hidden">
                <span className="absolute top-2 right-2 bg-slate-950 text-amber-300 text-[10px] font-black px-2 py-0.5 rounded-full">
                  KURS SONRASI
                </span>
                <span className="text-xs font-bold text-amber-950 uppercase tracking-wider block mb-1">
                  Modern Kovan Yönetimi
                </span>
                <p className="text-3xl font-black text-slate-950">
                  {modernGrossIncome.toLocaleString('tr-TR')} ₺
                </p>
                <div className="mt-4 space-y-2 text-xs text-amber-950/90 border-t border-amber-400/60 pt-3 font-semibold">
                  <div className="flex justify-between">
                    <span>Kovan başı ortalama:</span>
                    <strong className="text-slate-950">{modernHoneyPerHive} kg</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Toplam bal hasadı:</span>
                    <strong className="text-slate-950">{modernHoneyTotalKg} kg</strong>
                  </div>
                  <div className="flex justify-between text-emerald-950 font-bold">
                    <span>Kışlatma kaybı oranı:</span>
                    <span>%5'in altında</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Yan ürün katkısı:</span>
                    <strong className="text-slate-950">{(propolisIncome + pollenIncome).toLocaleString('tr-TR')} ₺</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Net Kazanç Farkı Vurgu Kartı */}
            <div className="bg-emerald-50 border-2 border-emerald-500/50 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div>
                <span className="bg-emerald-600 text-white text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  NET EKONOMİK KAZANÇ ARTIŞI
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-emerald-950 mt-2">
                  +{netAdvantage.toLocaleString('tr-TR')} ₺ Fazladan Gelir
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-1">
                  Modern teknikleri uygulayan bir üreticimiz, {hiveCount} kovandan <strong>{multiplier} kat daha fazla</strong> gelir elde eder ve kışın arılarını kaybetmez.
                </p>
              </div>

              <div className="shrink-0 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-black shadow-md mx-auto">
                  {multiplier}x
                </div>
                <span className="text-[11px] font-bold text-emerald-900 mt-1 block">Katma Değer</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Hesaplama; Kofçaz Halk Eğitimi Merkezi ve Kırklareli Arı Yetiştiricileri Birliği demonstrasyon sahalarında modern yöntem uygulanan arılıkların saha verilerine dayanmaktadır.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
