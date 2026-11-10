import React from 'react';
import { Provider } from '../../types';
import { ShieldCheck, Star, MapPin, Clock, Phone, Calendar, AlertCircle, ArrowUpRight, Siren } from 'lucide-react';

interface ProviderCardProps {
  provider: Provider;
  onBook: (provider: Provider) => void;
  onCorrect: (provider: Provider) => void;
  onCall: (phone: string) => void;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({
  provider,
  onBook,
  onCorrect,
  onCall,
}) => {
  const isEmergency = provider.emergency24x7;

  return (
    <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 transition-all hover:border-slate-300 hover:shadow-sm flex flex-col justify-between">
      <div>
        {/* Top Metadata Row: Zero-Pill Discipline */}
        <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-semibold text-emerald-800 uppercase tracking-wider text-[11px]">
              {provider.categoryLabel}
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="flex items-center gap-1 text-slate-600 font-mono tabular-nums">
              <MapPin className="w-3 h-3 text-slate-400" />
              {provider.distanceKm} km away ({provider.locality})
            </span>
            {provider.verified && (
              <>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Facility
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-1 text-slate-900 font-bold">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="font-mono tabular-nums">{provider.rating}</span>
            <span className="text-xs font-normal text-slate-400">({provider.reviewCount})</span>
          </div>
        </div>

        {/* Provider Title & Tagline */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display hover:text-emerald-700 transition-colors">
          {provider.name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          {provider.tagline}
        </p>

        {/* Doctor / Specialist Details if available */}
        {provider.doctorName && (
          <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              Dr
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-900 truncate">
                {provider.doctorName}
              </div>
              <div className="text-[11px] text-slate-500 truncate">
                {provider.doctorDegree} · {provider.yearsExperience} yrs exp.
              </div>
            </div>
          </div>
        )}

        {/* Featured Services (Clean inline typography, no heavy pill sandwich) */}
        <div className="mt-3 flex items-center gap-1.5 flex-wrap text-xs text-slate-600">
          <span className="text-[11px] font-medium text-slate-400">Services:</span>
          {provider.featuredServices.map((svc, idx) => (
            <React.Fragment key={svc}>
              <span className="hover:text-slate-900 transition-colors">{svc}</span>
              {idx < provider.featuredServices.length - 1 && (
                <span aria-hidden="true" className="text-slate-300">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Animals Accepted */}
        <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-500">
          <span className="text-[11px] font-medium text-slate-400">Treats:</span>
          <span className="capitalize text-slate-700">
            {provider.animalTypes.join(', ')}
          </span>
        </div>
      </div>

      {/* Footer / Booking Affordances */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1 text-slate-900">
            {provider.consultationFee === 0 ? (
              <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">
                Free / NGO Sponsored
              </span>
            ) : (
              <>
                <span className="text-base font-extrabold font-mono tabular-nums text-slate-900">
                  ₹{provider.consultationFee}
                </span>
                <span className="text-xs text-slate-500">consultation fee</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium mt-0.5">
            <Clock className="w-3 h-3" />
            <span>Next: {provider.availableSlot}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onCorrect(provider)}
            title="Report outdated info or submit correction"
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <AlertCircle className="w-4 h-4" />
          </button>

          <a
            href={`tel:${provider.phone}`}
            onClick={(e) => {
              e.preventDefault();
              onCall(provider.phone);
            }}
            className="flex items-center gap-1 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-slate-500" />
            <span>Call</span>
          </a>

          {isEmergency && provider.category === 'ambulance' ? (
            <button
              onClick={() => onBook(provider)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              <Siren className="w-3.5 h-3.5" />
              <span>Dispatch SOS</span>
            </button>
          ) : (
            <button
              onClick={() => onBook(provider)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Visit</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
