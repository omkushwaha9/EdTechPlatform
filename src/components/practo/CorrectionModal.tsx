import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, FileCheck } from 'lucide-react';
import { Provider } from '../../types';

interface CorrectionModalProps {
  provider: Provider | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CorrectionModal: React.FC<CorrectionModalProps> = ({
  provider,
  isOpen,
  onClose,
}) => {
  const [targetField, setTargetField] = useState('Operating Hours');
  const [details, setDetails] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDone(true);
  };

  const handleReset = () => {
    setIsDone(false);
    setDetails('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-xl border border-slate-200 relative">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Correction Submitted!
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Thank you for keeping pet healthcare data accurate. Our team checks with the clinic within 2 hours.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                Community Data Integrity
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">
                Submit a Correction
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {provider ? `Reporting for: ${provider.name}` : 'Report outdated clinic info or wrong contact details.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  What needs updating? *
                </label>
                <select
                  value={targetField}
                  onChange={(e) => setTargetField(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                >
                  <option value="Operating Hours">Operating / Emergency Hours</option>
                  <option value="Phone Number">Phone Number / Emergency Line</option>
                  <option value="Clinic Relocated">Clinic Relocated / Address Changed</option>
                  <option value="Doctor Changed">Doctor / Specialist Changed</option>
                  <option value="Consultation Fee">Consultation Fee Changed</option>
                  <option value="Permanently Closed">Facility Permanently Closed</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Correct Details / Notes *
                </label>
                <textarea
                  required
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="e.g. Clinic is now open 24/7 on weekends; new emergency number is..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Email (for notification)
                </label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
              >
                Send Correction for Review
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
