import React from 'react';
import { CarouselSlide, CarouselDeck } from '../../types';
import { ChevronLeft, ChevronRight, Edit3, Layout, Smartphone, Monitor, Copy, Check, Sparkles, Download } from 'lucide-react';

interface CarouselSlideEditorProps {
  deck: CarouselDeck;
  currentSlideIndex: number;
  onSlideChange: (idx: number) => void;
  onUpdateSlide: (updatedSlide: CarouselSlide) => void;
  selectedTheme: string;
  onThemeChange: (theme: any) => void;
  aspectRatio: '1:1' | '4:5';
  onAspectRatioChange: (ratio: '1:1' | '4:5') => void;
  onCopyAll: () => void;
  onExportJson: () => void;
}

export const CarouselSlideEditor: React.FC<CarouselSlideEditorProps> = ({
  deck,
  currentSlideIndex,
  onSlideChange,
  onUpdateSlide,
  selectedTheme,
  onThemeChange,
  aspectRatio,
  onAspectRatioChange,
  onCopyAll,
  onExportJson,
}) => {
  const currentSlide = deck.slides[currentSlideIndex] || deck.slides[0];
  const totalSlides = deck.slides.length;

  // Theme styling definitions
  const themeClasses: Record<string, { bg: string; text: string; sub: string; accent: string; border: string; pillBg: string; pillText: string }> = {
    obsidian: {
      bg: 'bg-neutral-950',
      text: 'text-white',
      sub: 'text-neutral-300',
      accent: 'text-emerald-400',
      border: 'border-neutral-800',
      pillBg: 'bg-neutral-800',
      pillText: 'text-emerald-400',
    },
    'minimal-light': {
      bg: 'bg-stone-50',
      text: 'text-stone-900',
      sub: 'text-stone-600',
      accent: 'text-indigo-600',
      border: 'border-stone-200',
      pillBg: 'bg-stone-200',
      pillText: 'text-stone-900',
    },
    'royal-indigo': {
      bg: 'bg-indigo-950',
      text: 'text-white',
      sub: 'text-indigo-200',
      accent: 'text-sky-300',
      border: 'border-indigo-800',
      pillBg: 'bg-indigo-900',
      pillText: 'text-sky-300',
    },
    'emerald-health': {
      bg: 'bg-emerald-950',
      text: 'text-white',
      sub: 'text-emerald-200',
      accent: 'text-emerald-400',
      border: 'border-emerald-800',
      pillBg: 'bg-emerald-900',
      pillText: 'text-emerald-300',
    },
    'warm-amber': {
      bg: 'bg-amber-950',
      text: 'text-amber-50',
      sub: 'text-amber-200',
      accent: 'text-amber-400',
      border: 'border-amber-800',
      pillBg: 'bg-amber-900',
      pillText: 'text-amber-300',
    },
  };

  const currentThemeStyle = themeClasses[selectedTheme] || themeClasses['royal-indigo'];

  const handleHeadlineChange = (val: string) => {
    onUpdateSlide({ ...currentSlide, headline: val });
  };

  const handleSubheadChange = (val: string) => {
    onUpdateSlide({ ...currentSlide, subhead: val });
  };

  const handleBodyPointChange = (idx: number, val: string) => {
    const updated = [...currentSlide.bodyPoints];
    updated[idx] = val;
    onUpdateSlide({ ...currentSlide, bodyPoints: updated });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs">
      {/* Top Toolbar: Ratio, Theme, and Export Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Format:
          </span>
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              onClick={() => onAspectRatioChange('1:1')}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                aspectRatio === '1:1'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1:1 Square (LinkedIn / IG)
            </button>
            <button
              onClick={() => onAspectRatioChange('4:5')}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                aspectRatio === '4:5'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              4:5 Portrait (High Engagement)
            </button>
          </div>
        </div>

        {/* Theme Picker */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Palette:
          </span>
          <div className="flex items-center gap-1.5">
            {[
              { id: 'obsidian', label: 'Obsidian', color: 'bg-neutral-900' },
              { id: 'royal-indigo', label: 'Indigo', color: 'bg-indigo-900' },
              { id: 'emerald-health', label: 'Emerald', color: 'bg-emerald-900' },
              { id: 'minimal-light', label: 'Light', color: 'bg-stone-200' },
              { id: 'warm-amber', label: 'Amber', color: 'bg-amber-900' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => onThemeChange(t.id)}
                title={t.label}
                className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${t.color} ${
                  selectedTheme === t.id
                    ? 'border-indigo-600 scale-110 shadow-xs'
                    : 'border-transparent hover:scale-105'
                }`}
              />
            ))}
          </div>

          <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />

          {/* Quick Actions */}
          <button
            onClick={onCopyAll}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs transition-colors cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5 text-slate-500" />
            <span>Copy Text</span>
          </button>

          <button
            onClick={onExportJson}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-xs transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>
        </div>
      </div>

      {/* Main Slide Workspace Split: Visual Canvas + Live Editor & Tips */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Slide Canvas (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div
            className={`w-full max-w-[480px] rounded-3xl p-7 sm:p-9 shadow-lg transition-all border flex flex-col justify-between relative overflow-hidden ${
              aspectRatio === '1:1' ? 'aspect-square' : 'aspect-[4/5]'
            } ${currentThemeStyle.bg} ${currentThemeStyle.border}`}
          >
            {/* Top Slide Row: Tag & Slide Counter */}
            <div className="flex items-center justify-between text-xs">
              <span
                className={`px-2.5 py-1 rounded-md font-mono font-bold uppercase tracking-wider text-[11px] ${currentThemeStyle.pillBg} ${currentThemeStyle.pillText}`}
              >
                {currentSlide.tag || `SLIDE 0${currentSlide.slideNumber}`}
              </span>

              <span className={`font-mono font-bold text-xs ${currentThemeStyle.sub}`}>
                0{currentSlide.slideNumber} / 0{totalSlides}
              </span>
            </div>

            {/* Slide Body Content */}
            <div className="my-auto py-4">
              <h2
                className={`text-xl sm:text-2xl font-black font-display tracking-tight leading-tight ${currentThemeStyle.text}`}
              >
                {currentSlide.headline}
              </h2>

              {currentSlide.subhead && (
                <p
                  className={`mt-2.5 text-xs sm:text-sm font-medium leading-relaxed ${currentThemeStyle.sub}`}
                >
                  {currentSlide.subhead}
                </p>
              )}

              {currentSlide.bodyPoints && currentSlide.bodyPoints.length > 0 && (
                <div className="mt-5 space-y-2.5">
                  {currentSlide.bodyPoints.map((pt, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${currentThemeStyle.accent}`}
                        style={{ backgroundColor: 'currentColor' }}
                      />
                      <span className={currentThemeStyle.text}>{pt}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Slide Footer: Author branding & CTA swipe */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-[10px] text-white">
                  F
                </div>
                <span className={`font-semibold text-[11px] ${currentThemeStyle.sub}`}>
                  @founder / Practo Animals
                </span>
              </div>

              <span className={`font-bold font-mono text-[11px] ${currentThemeStyle.accent}`}>
                {currentSlide.ctaText || (currentSlideIndex === totalSlides - 1 ? 'Save & Share' : 'Swipe →')}
              </span>
            </div>
          </div>

          {/* Slide Navigation Pagination */}
          <div className="mt-5 flex items-center gap-3">
            <button
              disabled={currentSlideIndex === 0}
              onClick={() => onSlideChange(currentSlideIndex - 1)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Thumbnail Pills */}
            <div className="flex items-center gap-1.5">
              {deck.slides.map((s, idx) => (
                <button
                  key={s.slideNumber}
                  onClick={() => onSlideChange(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    currentSlideIndex === idx
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {s.slideNumber}
                </button>
              ))}
            </div>

            <button
              disabled={currentSlideIndex === totalSlides - 1}
              onClick={() => onSlideChange(currentSlideIndex + 1)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Slide Copy Live-Editor & Visual Direction (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Direct Slide Copy Editor (Slide {currentSlide.slideNumber})</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Headline:
                </label>
                <input
                  type="text"
                  value={currentSlide.headline}
                  onChange={(e) => handleHeadlineChange(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-bold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Subheadline / Intrigue:
                </label>
                <input
                  type="text"
                  value={currentSlide.subhead || ''}
                  onChange={(e) => handleSubheadChange(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Bullet Points / Framework Elements:
                </label>
                <div className="space-y-2">
                  {currentSlide.bodyPoints.map((pt, i) => (
                    <input
                      key={i}
                      type="text"
                      value={pt}
                      onChange={(e) => handleBodyPointChange(i, e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Visual Direction Advice */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>AI Visual Direction Guidance:</span>
            </div>
            <p className="text-xs text-indigo-950 leading-relaxed">
              {currentSlide.visualDirection ||
                'High-contrast focal point, tight leading, generous margins, minimal icons to ensure maximum readability on mobile feeds.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
