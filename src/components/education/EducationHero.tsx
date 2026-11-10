import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Terminal, Code2, Users, Download } from 'lucide-react';

interface EducationHeroProps {
  onOpenApply: () => void;
  onScrollToCurriculum: () => void;
  onOpenDiagnostic: () => void;
}

export const EducationHero: React.FC<EducationHeroProps> = ({
  onOpenApply,
  onScrollToCurriculum,
  onOpenDiagnostic,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white pt-14 pb-16 border-b border-indigo-900/40">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Urgent Cohort Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-900/60 border border-indigo-700/50 text-indigo-200 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>COHORT 4 APPLICATIONS CLOSING SOON · ONLY 6 SEATS REMAINING</span>
        </div>

        {/* Main Value Proposition Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.1] text-balance">
            Build Real AI Systems & Digital Products.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300">
              Not Just Prompts.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            An 8-week intensive engineering & product incubator for university students and early-career builders. Ship 8 production-grade applications—from multi-agent RAG pipelines to full-stack automated workflows—mentored directly by active tech founders.
          </p>
        </div>

        {/* Primary CTA Decision Block */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={onOpenApply}
            className="px-6 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Apply for Cohort 4 (Zero-Tuition Upfront)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onScrollToCurriculum}
            className="px-5 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold rounded-xl text-sm border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>Explore 8-Week Syllabus</span>
          </button>

          <button
            onClick={onOpenDiagnostic}
            className="px-4 py-3.5 text-xs text-slate-400 hover:text-indigo-300 font-medium transition-colors text-center cursor-pointer"
          >
            Book 15-Min Portfolio Diagnostic →
          </button>
        </div>

        {/* Verified Outcome Metric Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              8 Projects
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Production Capstone Applications Shipped
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-300 font-mono tabular-nums">
              +140%
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Average Salary Uplift for Graduates
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              1-on-1
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Direct Mentorship by Founder & Senior VPs
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              14 Days
            </div>
            <div className="text-xs text-slate-400 mt-1">
              100% Risk-Free Money Back Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
