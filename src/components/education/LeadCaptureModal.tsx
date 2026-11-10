import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [track, setTrack] = useState('AI Systems & RAG Architecture');
  const [status, setStatus] = useState('College Student (Final / Pre-Final Year)');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [reason, setReason] = useState('');
  const [isScholarshipNeeded, setIsScholarshipNeeded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setApplicationId(`AIS-${Math.floor(200000 + Math.random() * 800000)}`);
    }, 600);
  };

  const handleReset = () => {
    setApplicationId(null);
    setStep(1);
    setFullName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {applicationId ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Application Successfully Lodged!
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Candidate Reference:{' '}
              <span className="font-mono font-bold text-indigo-700">
                {applicationId}
              </span>
            </p>

            <div className="mt-5 p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-left text-xs text-slate-700 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Applicant:</span>
                <span className="font-bold text-slate-900">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Track:</span>
                <span className="font-medium text-slate-900">{track}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Admission Stage:</span>
                <span className="font-semibold text-emerald-700">15-Min Founder Diagnostic Call</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              We have sent the detailed pre-work syllabus and calendar invite link to <strong>{email}</strong>. Our admissions team reviews GitHub profiles within 12 business hours.
            </p>

            <button
              onClick={handleReset}
              className="mt-6 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
            >
              Back to Course Overview
            </button>
          </div>
        ) : (
          <div>
            {/* Header with step progress indicator */}
            <div className="mb-5">
              <div className="flex items-center justify-between text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1">
                <span>Cohort 4 Admissions</span>
                <span className="font-mono">Step {step} of 3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                {step === 1 && 'Select Your Track & Profile'}
                {step === 2 && 'Your Contact & Portfolio'}
                {step === 3 && 'Goals & Scholarship Review'}
              </h3>
              <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-indigo-600 transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); setStep((s) => (s + 1) as any); }}>
              {/* Step 1: Track Selection */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Primary Engineering Focus *
                    </label>
                    <div className="space-y-2">
                      {[
                        'AI Systems & RAG Architecture',
                        'Full-Stack Rapid Prototyping & Product MVP',
                        'No-Code / Low-Code Automation (n8n + Gemini)',
                      ].map((t) => (
                        <label
                          key={t}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                            track === t
                              ? 'bg-indigo-50 border-indigo-500 text-indigo-950'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="track"
                            checked={track === t}
                            onChange={() => setTrack(t)}
                            className="text-indigo-600 focus:ring-indigo-500"
                          />
                          <span>{t}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Current Professional Status *
                    </label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                    >
                      <option value="College Student (Final / Pre-Final Year)">
                        College Student (Final / Pre-Final Year)
                      </option>
                      <option value="Recent Graduate (Looking for First Job)">
                        Recent Graduate (Looking for First Job)
                      </option>
                      <option value="Junior Software Engineer (1-2 Years)">
                        Junior Software Engineer (1-2 Years)
                      </option>
                      <option value="Product Manager / Designer Transitioning">
                        Product Manager / Designer Transitioning
                      </option>
                      <option value="Solo Founder / Freelance Builder">
                        Solo Founder / Freelance Builder
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Continue to Contact Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Priyanshu Sharma"
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="priyanshu@gmail.com"
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        GitHub / LinkedIn URL
                      </label>
                      <input
                        type="url"
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                        placeholder="github.com/username"
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Next: Goals</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Goals & Scholarship */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      What is the #1 project or career goal you want to achieve in these 8 weeks? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="e.g. I want to build a real AI automation agency or land a 15+ LPA Systems Engineer role at an AI-first startup..."
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isScholarshipNeeded}
                        onChange={(e) => setIsScholarshipNeeded(e.target.checked)}
                        className="rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4 mt-0.5"
                      />
                      <div className="text-xs text-indigo-950">
                        <span className="font-bold">Apply for 50% Merit-Based Student Scholarship</span>
                        <p className="text-[11px] text-indigo-800 mt-0.5 leading-normal">
                          Requires passing a practical coding challenge and committing to 12+ weekly hours.
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-indigo-600/30 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? 'Evaluating Application...' : 'Submit Application Now'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
