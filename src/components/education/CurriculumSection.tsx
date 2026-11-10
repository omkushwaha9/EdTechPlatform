import React, { useState } from 'react';
import { COURSE_MODULES } from '../../data/courseData';
import { ChevronDown, ChevronUp, Code2, Check, ArrowRight, Download, Laptop, Sparkles } from 'lucide-react';

interface CurriculumSectionProps {
  onOpenApply: () => void;
  onDownloadSyllabus: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  onOpenApply,
  onDownloadSyllabus,
}) => {
  const [activeWeek, setActiveWeek] = useState<number>(1);

  return (
    <section id="curriculum" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
              Curriculum Architecture
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display">
              8 Weeks of Relentless, Hands-On Engineering
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Every single week culminates in an individually deployable artifact that lives on your public portfolio, verified by automated test suites.
            </p>
          </div>

          <button
            onClick={onDownloadSyllabus}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors cursor-pointer self-start md:self-auto shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Download Detailed PDF Syllabus</span>
          </button>
        </div>

        {/* 2-Column Split: Module Selector + Active Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Module Week List (4 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {COURSE_MODULES.map((module) => {
              const isActive = activeWeek === module.week;
              return (
                <button
                  key={module.week}
                  onClick={() => setActiveWeek(module.week)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isActive
                      ? 'bg-indigo-50/80 border-indigo-400/80 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                        isActive
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      W{module.week}
                    </span>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-slate-500 font-mono">
                        {module.duration}
                      </div>
                      <div
                        className={`text-xs sm:text-sm font-bold truncate ${
                          isActive ? 'text-indigo-950' : 'text-slate-800'
                        }`}
                      >
                        {module.title}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive
                        ? 'text-indigo-600 translate-x-0.5'
                        : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Card for Active Week (7 cols) */}
          <div className="lg:col-span-7">
            {COURSE_MODULES.filter((m) => m.week === activeWeek).map((mod) => (
              <div
                key={mod.week}
                className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                    Week {mod.week} Focus Breakdown
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    {mod.duration}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  {mod.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {mod.description}
                </p>

                {/* Capstone Box */}
                <div className="mt-6 p-4 rounded-2xl bg-white border border-indigo-100 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 mb-1">
                    <Laptop className="w-4 h-4 text-indigo-600" />
                    <span>Capstone Project Shipped This Week:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">
                    {mod.capstoneProject}
                  </p>
                </div>

                {/* Core Skills Checklist */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                    Engineering Capabilities Mastered:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {mod.coreSkills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Taught */}
                <div className="mt-6 pt-5 border-t border-slate-200 flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-slate-500">Tech Stack:</span>
                  {mod.toolsTaught.map((tool, idx) => (
                    <React.Fragment key={tool}>
                      <span className="text-xs font-mono font-semibold text-slate-800">
                        {tool}
                      </span>
                      {idx < mod.toolsTaught.length - 1 && (
                        <span className="text-slate-300">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Apply CTA inside module */}
                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500">
                    Live interactive labs every Tuesday & Thursday evening.
                  </div>
                  <button
                    onClick={onOpenApply}
                    className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                  >
                    Apply for this Curriculum →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
