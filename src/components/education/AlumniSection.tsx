import React from 'react';
import { ALUMNI_OUTCOMES, FAQ_ITEMS } from '../../data/courseData';
import { Quote, ArrowUpRight, CheckCircle2, HelpCircle } from 'lucide-react';

interface AlumniSectionProps {
  onOpenApply: () => void;
}

export const AlumniSection: React.FC<AlumniSectionProps> = ({ onOpenApply }) => {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
            Verified Alumni Outliers
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Built by Ambitious Minds. Hired by Scaling Startups.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every graduate leaves with production code in public GitHub repositories, tested in real market conditions.
          </p>
        </div>

        {/* Alumni Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ALUMNI_OUTCOMES.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={alumni.avatar}
                      alt={alumni.name}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-2xl object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {alumni.name}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {alumni.company}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-black font-mono tabular-nums text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-100">
                    +{alumni.hikePercent}%
                  </span>
                </div>

                <div className="text-xs text-slate-600 italic leading-relaxed mb-4">
                  &ldquo;{alumni.quote}&rdquo;
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Previous:</span>
                  <span className="text-slate-600 font-medium">{alumni.priorRole}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Current:</span>
                  <span className="font-bold text-indigo-900">{alumni.currentRole}</span>
                </div>
                <div className="pt-1.5 text-[11px] text-slate-500 font-mono">
                  🚀 Capstone: {alumni.projectBuilt}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-16 pt-12 border-t border-slate-200 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Everything you need to know about the admissions and scholarship process.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200"
              >
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-indigo-600 font-mono">Q:</span>
                  <span>{item.q}</span>
                </h4>
                <p className="text-xs text-slate-600 mt-2 pl-5 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenApply}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
            >
              Ready to build? Submit Your Application (4 Min) →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
