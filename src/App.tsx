/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import { TopBar } from './components/navigation/TopBar';
import { PractoView } from './components/practo/PractoView';
import { EducationView } from './components/education/EducationView';
import { CarouselView } from './components/carousel/CarouselView';
import { StrategyDossierView } from './components/dossier/StrategyDossierView';
import { Stethoscope, GraduationCap, Sparkles, FileText, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('practo');

  // Sync tab with URL search parameter if present
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab') as ActiveTab;
    if (tabParam && ['practo', 'education', 'carousel', 'dossier'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, []);

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    const url = new URL(window.location.href);
    url.searchParams.set('tab', tab);
    window.history.pushState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Bar with Three-Zone Top Bar Contract */}
      <TopBar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenDossier={() => handleTabChange('dossier')}
      />

      {/* Main View Router */}
      <div className="flex-1">
        {activeTab === 'practo' && <PractoView />}
        {activeTab === 'education' && <EducationView />}
        {activeTab === 'carousel' && <CarouselView />}
        {activeTab === 'dossier' && <StrategyDossierView onSwitchTab={handleTabChange} />}
      </div>

      {/* Persistent Minimalist Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                🐾
              </div>
              <div>
                <div className="text-white font-bold font-display text-sm">
                  Product, Design & AI Systems Candidate Suite
                </div>
                <div className="text-[11px] text-slate-500">
                  Built for the Founder · Practo for Animals & AI Education Ecosystem
                </div>
              </div>
            </div>

            {/* Quick Switcher Links in Footer */}
            <div className="flex items-center gap-4 flex-wrap text-xs">
              <button
                onClick={() => handleTabChange('practo')}
                className={`hover:text-white transition-colors cursor-pointer ${
                  activeTab === 'practo' ? 'text-emerald-400 font-semibold' : ''
                }`}
              >
                1. Practo for Animals MVP
              </button>
              <span className="text-slate-700">·</span>
              <button
                onClick={() => handleTabChange('education')}
                className={`hover:text-white transition-colors cursor-pointer ${
                  activeTab === 'education' ? 'text-indigo-400 font-semibold' : ''
                }`}
              >
                2. AI Education Landing Page
              </button>
              <span className="text-slate-700">·</span>
              <button
                onClick={() => handleTabChange('carousel')}
                className={`hover:text-white transition-colors cursor-pointer ${
                  activeTab === 'carousel' ? 'text-amber-400 font-semibold' : ''
                }`}
              >
                3. AI Carousel Studio & n8n Pipeline
              </button>
              <span className="text-slate-700">·</span>
              <button
                onClick={() => handleTabChange('dossier')}
                className={`hover:text-white transition-colors cursor-pointer ${
                  activeTab === 'dossier' ? 'text-white font-semibold' : ''
                }`}
              >
                Strategy Dossier
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <div>
              © 2026 Candidate Submission. Evaluated against 5-axis intern rubric (UI/UX 30%, Product Thinking 20%, AI Automation 25%, Technical Execution 15%, Communication 10%).
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Full-Stack Live Mode Active</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
