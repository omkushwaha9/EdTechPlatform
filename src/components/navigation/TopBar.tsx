import React from 'react';
import { ActiveTab } from '../../types';
import { Sparkles, FileText, Stethoscope, GraduationCap, LayoutGrid } from 'lucide-react';

interface TopBarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenDossier: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ activeTab, onTabChange, onOpenDossier }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8 h-16">
          {/* Zone 1: Wordmark */}
          <button
            onClick={() => onTabChange('practo')}
            className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-emerald-700 transition-colors">
              🐾
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 font-display whitespace-nowrap">
                Candidate Portfolio
              </span>
              <span className="text-[11px] text-slate-500 font-medium whitespace-nowrap hidden sm:inline">
                Product & AI Systems Intern
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean single-line tabs with semantic active states) */}
          <nav className="flex items-center gap-1 sm:gap-2 p-1 bg-slate-100 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => onTabChange('practo')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'practo'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
              <span>1. Practo for Animals</span>
            </button>

            <button
              onClick={() => onTabChange('education')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'education'
                  ? 'bg-white text-indigo-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
              <span>2. AI Education</span>
            </button>

            <button
              onClick={() => onTabChange('carousel')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'carousel'
                  ? 'bg-white text-amber-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>3. Carousel Studio</span>
            </button>

            <button
              onClick={() => onTabChange('dossier')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'dossier'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-slate-600" />
              <span>Strategy Dossier</span>
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenDossier}
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>Evaluation Rubric</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
