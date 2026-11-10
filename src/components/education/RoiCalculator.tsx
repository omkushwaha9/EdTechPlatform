import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenApply: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenApply }) => {
  const [currentRoleType, setCurrentRoleType] = useState<'student' | 'junior' | 'mid'>('student');
  const [currentSalaryMonthly, setCurrentSalaryMonthly] = useState<number>(0);

  // Projected outcomes based on target role
  const projectedMetrics = {
    student: {
      roleTitle: 'Junior AI Systems Engineer',
      startingCtcAnnual: '₹14,50,000',
      monthlyGain: '₹1,20,800',
      paybackWeeks: '3.5 Weeks',
      multiplier: 'First High-Paying Job',
    },
    junior: {
      roleTitle: 'Senior Full-Stack AI Engineer',
      startingCtcAnnual: '₹24,00,000',
      monthlyGain: '₹1,15,000',
      paybackWeeks: '4 Weeks',
      multiplier: '120% Compensation Hike',
    },
    mid: {
      roleTitle: 'Lead AI Automation Architect / Founder',
      startingCtcAnnual: '₹36,00,000',
      monthlyGain: '₹1,75,000',
      paybackWeeks: '2.5 Weeks',
      multiplier: '160% Compensation Hike',
    },
  }[currentRoleType];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI & Career Payback Model</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Calculate Your Return on Investment
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Education should be an investment with measurable financial upside, not an uncalculated expense. Test your projected post-incubator outcomes based on 2026 hiring data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700">
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                1. Select Your Current Background:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'student', label: 'College Student', sub: 'Final / Pre-final Year' },
                  { id: 'junior', label: 'Junior Dev / PM', sub: '1-2 Years Experience' },
                  { id: 'mid', label: 'Mid-Level Pro', sub: '3+ Years / Switching' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentRoleType(item.id as any);
                      if (item.id === 'student') setCurrentSalaryMonthly(0);
                      if (item.id === 'junior') setCurrentSalaryMonthly(45000);
                      if (item.id === 'mid') setCurrentSalaryMonthly(90000);
                    }}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      currentRoleType === item.id
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-xs'
                        : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] opacity-80 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  2. Current Monthly In-Hand:
                </label>
                <span className="text-xs font-mono font-bold text-indigo-300">
                  {currentSalaryMonthly === 0 ? '₹0 (College Student)' : `₹${currentSalaryMonthly.toLocaleString('en-IN')}`}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={150000}
                step={5000}
                value={currentSalaryMonthly}
                onChange={(e) => setCurrentSalaryMonthly(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

            <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-800/60 text-xs text-indigo-200 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Tuition covers full 8-week access, 1-on-1 weekly founder code audits, lifelong access to private alumni network, and warm referrals to 40+ hiring startups.
              </p>
            </div>
          </div>

          {/* Projection Card Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-indigo-900/90 to-slate-900 rounded-3xl p-6 sm:p-8 border border-indigo-500/30 shadow-xl relative overflow-hidden">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-1">
              Projected Career Impact (Post-Incubator)
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {projectedMetrics.roleTitle}
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700">
                <div className="text-[11px] text-slate-400 font-medium">
                  Expected First-Year CTC
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono tabular-nums mt-1">
                  {projectedMetrics.startingCtcAnnual}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Based on recent cohort median
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700">
                <div className="text-[11px] text-slate-400 font-medium">
                  Tuition Payback Time
                </div>
                <div className="text-xl sm:text-2xl font-black text-indigo-300 font-mono tabular-nums mt-1">
                  {projectedMetrics.paybackWeeks}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  From first paychecks
                </div>
              </div>
            </div>

            <div className="mt-5 text-xs text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Upside Velocity: <strong>{projectedMetrics.multiplier}</strong></span>
            </div>

            <button
              onClick={onOpenApply}
              className="mt-6 w-full py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-indigo-500/30 cursor-pointer text-center"
            >
              Lock in Early-Bird Scholarship Seat →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
