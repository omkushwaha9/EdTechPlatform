import React, { useState } from 'react';
import { X, Building2, CheckCircle2, ShieldCheck, Stethoscope, Phone, MapPin } from 'lucide-react';
import { ProviderCategory } from '../../types';

interface ListBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ListBusinessModal: React.FC<ListBusinessModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState<ProviderCategory>('vet');
  const [vetName, setVetName] = useState('');
  const [vetDegree, setVetDegree] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('Indiranagar');
  const [hasEmergency, setHasEmergency] = useState(false);
  const [hasAmbulance, setHasAmbulance] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setBusinessName('');
    setVetName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Facility Application Received!
            </h3>
            <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
              Our veterinary verification board verifies veterinary council registrations within 24 hours. Your profile preview has been initialized for <strong>{businessName}</strong>.
            </p>
            <div className="mt-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 text-left space-y-1.5">
              <div><strong>Category:</strong> {category.toUpperCase()}</div>
              <div><strong>Lead Clinician:</strong> {vetName} ({vetDegree || 'BVSc'})</div>
              <div><strong>Contact:</strong> {phone}</div>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                Practo Provider Network
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">
                List Your Animal Care Facility
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Reach over 45,000 active pet parents and animal welfare community members seeking verified care.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Facility / Clinic / NGO Name *
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Blue Cross Animal Clinic & Surgery"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Facility Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  >
                    <option value="vet">Veterinary Clinic</option>
                    <option value="hospital">24/7 Animal Hospital</option>
                    <option value="boarding">Pet Boarding / Daycare</option>
                    <option value="diagnostics">Diagnostics & Lab</option>
                    <option value="ambulance">Animal Ambulance</option>
                    <option value="ngo">Animal Welfare NGO / Shelter</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Locality / Area *
                  </label>
                  <input
                    type="text"
                    required
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    placeholder="e.g. Indiranagar, HSR"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Lead Doctor / Manager *
                  </label>
                  <input
                    type="text"
                    required
                    value={vetName}
                    onChange={(e) => setVetName(e.target.value)}
                    placeholder="Dr. Full Name"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Degree / Registration *
                  </label>
                  <input
                    type="text"
                    required
                    value={vetDegree}
                    onChange={(e) => setVetDegree(e.target.value)}
                    placeholder="e.g. BVSc & AH, KVC Reg 4102"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Official Phone / Emergency Contact *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 00000"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasEmergency}
                    onChange={(e) => setHasEmergency(e.target.checked)}
                    className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-3.5 h-3.5"
                  />
                  <span className="text-xs text-slate-700">We offer 24/7 overnight emergency & ICU admission</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasAmbulance}
                    onChange={(e) => setHasAmbulance(e.target.checked)}
                    className="rounded border-slate-300 text-amber-600 focus:ring-amber-500 w-3.5 h-3.5"
                  />
                  <span className="text-xs text-slate-700">We operate an oxygen-fitted animal ambulance</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
              >
                Submit Facility for Free Verification
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
