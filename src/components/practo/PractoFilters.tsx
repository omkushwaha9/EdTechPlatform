import React from 'react';
import { Filter, Check, RotateCcw, ShieldCheck, Clock, Truck } from 'lucide-react';
import { ProviderCategory, AnimalType } from '../../types';

interface PractoFiltersProps {
  selectedCategory: ProviderCategory | 'all';
  onCategorySelect: (cat: ProviderCategory | 'all') => void;
  selectedAnimals: AnimalType[];
  onToggleAnimal: (animal: AnimalType) => void;
  verifiedOnly: boolean;
  onToggleVerifiedOnly: (val: boolean) => void;
  emergencyOnly: boolean;
  onToggleEmergencyOnly: (val: boolean) => void;
  ambulanceOnly: boolean;
  onToggleAmbulanceOnly: (val: boolean) => void;
  sortBy: 'distance' | 'rating' | 'fee';
  onSortChange: (sort: 'distance' | 'rating' | 'fee') => void;
  totalResultsCount: number;
  onResetFilters: () => void;
}

export const PractoFilters: React.FC<PractoFiltersProps> = ({
  selectedCategory,
  onCategorySelect,
  selectedAnimals,
  onToggleAnimal,
  verifiedOnly,
  onToggleVerifiedOnly,
  emergencyOnly,
  onToggleEmergencyOnly,
  ambulanceOnly,
  onToggleAmbulanceOnly,
  sortBy,
  onSortChange,
  totalResultsCount,
  onResetFilters,
}) => {
  const animalOptions: Array<{ id: AnimalType; label: string; icon: string }> = [
    { id: 'dogs', label: 'Dogs', icon: '🐕' },
    { id: 'cats', label: 'Cats', icon: '🐈' },
    { id: 'birds', label: 'Birds', icon: '🦜' },
    { id: 'exotics', label: 'Rabbits & Exotics', icon: '🐇' },
    { id: 'cattle', label: 'Cattle & Equine', icon: '🐄' },
    { id: 'community', label: 'Community / Strays', icon: '🐾' },
  ];

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedAnimals.length > 0 ||
    verifiedOnly ||
    emergencyOnly ||
    ambulanceOnly ||
    sortBy !== 'distance';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-emerald-600" />
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Refine Providers & Care Options
          </h2>
          <span className="text-xs text-slate-500 font-medium font-mono tabular-nums">
            ({totalResultsCount} verified facilities found)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="distance">📍 Distance (Closest First)</option>
              <option value="rating">★ Highest Rating</option>
              <option value="fee">₹ Consultation Fee (Low to High)</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 px-2 py-1 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Animal Species Segment */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2">
            Target Animal / Species
          </label>
          <div className="flex flex-wrap gap-1.5">
            {animalOptions.map((animal) => {
              const isSelected = selectedAnimals.includes(animal.id);
              return (
                <button
                  key={animal.id}
                  onClick={() => onToggleAnimal(animal.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{animal.icon}</span>
                  <span>{animal.label}</span>
                  {isSelected && <Check className="w-3 h-3 ml-0.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quality & Critical Care Toggles */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2">
            Facility Credentials & Emergency
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={verifiedOnly}
                onChange={(e) => onToggleVerifiedOnly(e.target.checked)}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-3.5 h-3.5"
              />
              <span className="text-xs text-slate-700 group-hover:text-slate-900 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified License & Degrees Only</span>
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={emergencyOnly}
                onChange={(e) => onToggleEmergencyOnly(e.target.checked)}
                className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-3.5 h-3.5"
              />
              <span className="text-xs text-slate-700 group-hover:text-slate-900 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-red-600" />
                <span>24/7 ICU & Emergency Trauma Center</span>
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={ambulanceOnly}
                onChange={(e) => onToggleAmbulanceOnly(e.target.checked)}
                className="rounded border-slate-300 text-amber-600 focus:ring-amber-500 w-3.5 h-3.5"
              />
              <span className="text-xs text-slate-700 group-hover:text-slate-900 flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-amber-600" />
                <span>Mobile Oxygen Pet Ambulance Available</span>
              </span>
            </label>
          </div>
        </div>

        {/* Quick Triage Guidance Box */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-slate-800 mb-1">
              Need immediate advice?
            </div>
            <p className="text-[11px] text-slate-600 leading-normal">
              For acute choking, road accidents, poisonings or persistent seizures, bypass regular OPD and filter by <strong>24/7 Trauma Centers</strong> or call the ambulance hotline immediately.
            </p>
          </div>
          <div className="mt-2 text-[11px] text-emerald-700 font-semibold">
            ✓ Practo Animal Guarantee: 100% Verified Degrees
          </div>
        </div>
      </div>
    </div>
  );
};
