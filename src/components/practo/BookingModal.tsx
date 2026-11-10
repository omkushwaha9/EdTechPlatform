import React, { useState } from 'react';
import { Provider } from '../../types';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, MapPin, User, Phone, AlertTriangle } from 'lucide-react';

interface BookingModalProps {
  provider: Provider | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  provider,
  isOpen,
  onClose,
}) => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('Dog');
  const [reason, setReason] = useState('General Health Consultation');
  const [date, setDate] = useState('2026-11-12');
  const [timeSlot, setTimeSlot] = useState('11:30 AM');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  if (!isOpen || !provider) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName || !phone || !petName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `PAW-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedBookingId(generatedId);
    }, 600);
  };

  const handleReset = () => {
    setConfirmedBookingId(null);
    setPetName('');
    setOwnerName('');
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

        {confirmedBookingId ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              {provider.category === 'ambulance' ? 'Ambulance Dispatched!' : 'Consultation Confirmed!'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Booking Ref:{' '}
              <span className="font-mono font-bold text-emerald-700">
                {confirmedBookingId}
              </span>
            </p>

            <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs text-slate-700 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Facility:</span>
                <span className="font-bold text-slate-900">{provider.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Patient:</span>
                <span className="font-medium text-slate-900">{petName} ({petType})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="font-medium text-slate-900">{date} at {timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Consultation Fee:</span>
                <span className="font-mono font-bold text-slate-900">
                  {provider.consultationFee === 0 ? 'Free' : `₹${provider.consultationFee}`}
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              An SMS with directions and doctor prep instructions has been sent to <strong>{phone}</strong>.
            </p>

            <button
              onClick={handleReset}
              className="mt-6 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
            >
              Done & Return to Directory
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                Instant Appointment Booking
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">
                {provider.name}
              </h3>
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{provider.address}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Pet Info */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pet Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="e.g. Bruno, Bella"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pet Species *
                  </label>
                  <select
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  >
                    <option value="Dog">Dog / Puppy</option>
                    <option value="Cat">Cat / Kitten</option>
                    <option value="Bird">Bird / Parrot</option>
                    <option value="Rabbit">Rabbit / Rodent</option>
                    <option value="Community Dog">Community / Stray Animal</option>
                    <option value="Other">Other Species</option>
                  </select>
                </div>
              </div>

              {/* Consultation Reason */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Reason for Visit / Symptoms
                </label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                >
                  <option value="General Health Consultation">General Health Consultation / Checkup</option>
                  <option value="Vaccination & Deworming">Vaccination & Deworming</option>
                  <option value="Vomiting / Lethargy / Fever">Vomiting / Lethargy / Fever</option>
                  <option value="Skin Rash / Ear Infection">Skin Rash / Ear Infection / Itching</option>
                  <option value="Trauma / Limping / Accident">Trauma / Limping / Accident</option>
                  <option value="Dental Scaling / Cleaning">Dental Scaling / Cleaning</option>
                  <option value="Boarding Evaluation">Boarding Facility Inspection</option>
                </select>
              </div>

              {/* Date & Slot */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  >
                    <option value="10:00 AM">10:00 AM - 10:30 AM</option>
                    <option value="11:30 AM">11:30 AM - 12:00 PM</option>
                    <option value="02:30 PM">02:30 PM - 03:00 PM</option>
                    <option value="04:30 PM">04:30 PM - 05:00 PM</option>
                    <option value="06:30 PM">06:30 PM - 07:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parent / Caretaker Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Consultation Guarantee Note */}
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-2 text-xs text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  No advance payment needed. Pay directly at the clinic. Guaranteed zero waiting time window with direct vet assignment.
                </p>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? 'Confirming with Clinic...' : 'Confirm Appointment'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
