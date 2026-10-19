/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CurriculumSection } from './components/CurriculumSection';
import { FloraAndCalendar } from './components/FloraAndCalendar';
import { ProfitCalculator } from './components/ProfitCalculator';
import { EYayginGuide } from './components/EYayginGuide';
import { RegistrationForm } from './components/RegistrationForm';
import { MediaKitSection } from './components/MediaKitSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-200 selection:text-amber-900">
      <Header onNavigate={handleNavigate} />
      <main className="flex-grow">
        <Hero onNavigate={handleNavigate} />
        <CurriculumSection />
        <FloraAndCalendar />
        <ProfitCalculator />
        <EYayginGuide />
        <RegistrationForm />
        <MediaKitSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
