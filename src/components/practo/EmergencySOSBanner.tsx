import React from 'react';
import { Siren, PhoneCall, Clock, ShieldAlert } from 'lucide-react';

interface EmergencySOSBannerProps {
  onTriggerAmbulance: () => void;
  isEmergencyOnly: boolean;
  onToggleEmergencyOnly: (val: boolean) => void;
}

export const EmergencySOSBanner: React.FC<EmergencySOSBannerProps> = ({
  onTriggerAmbulance,
  isEmergencyOnly,
  onToggleEmergencyOnly,
}) => {
  return (
    <div className="bg-red-50 border-b border-red-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 text-red-900 font-medium">
            <span className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Siren className="w-4 h-4 animate-pulse" />
            </span>
            <div>
              <span className="font-bold text-red-950">Pet Health Emergency?</span>{' '}
              <span className="text-red-800">
                24/7 Rapid Ambulance & ICU Trauma centers are on active dispatch standby.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
            <button
              onClick={() => onToggleEmergencyOnly(!isEmergencyOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isEmergencyOnly
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-white text-red-800 border border-red-300 hover:bg-red-100'
              }`}
            >
              {isEmergencyOnly ? 'Showing 24/7 Emergency Only ✓' : 'Filter 24/7 Centers'}
            </button>

            <a
              href="tel:18002479110"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-xs shadow-xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call 1800-247-9110</span>
            </a>

            <button
              onClick={onTriggerAmbulance}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-xs transition-colors shadow-xs"
            >
              Dispatch Ambulance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
