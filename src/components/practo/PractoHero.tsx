import React from 'react';
import { Search, MapPin, PlusCircle, AlertCircle, Sparkles, Stethoscope, Building2, Home, Activity, Truck, Heart } from 'lucide-react';
import { ProviderCategory } from '../../types';

interface PractoHeroProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedLocality: string;
  onLocalityChange: (val: string) => void;
  selectedCategory: ProviderCategory | 'all';
  onCategorySelect: (cat: ProviderCategory | 'all') => void;
  onOpenListBusiness: () => void;
  onOpenCorrection: () => void;
}

export const PractoHero: React.FC<PractoHeroProps> = ({
  searchQuery,
  onSearchChange,
  selectedLocality,
  onLocalityChange,
  selectedCategory,
  onCategorySelect,
  onOpenListBusiness,
  onOpenCorrection,
}) => {
  const categories: Array<{ id: ProviderCategory | 'all'; label: string; icon: React.ReactNode; desc: string }> = [
    { id: 'all', label: 'All Services', icon: <Sparkles className="w-4 h-4 text-emerald-600" />, desc: 'Explore full directory' },
    { id: 'vet', label: 'Find a Vet', icon: <Stethoscope className="w-4 h-4 text-emerald-600" />, desc: 'OPD, surgery & vaccines' },
    { id: 'hospital', label: '24/7 Hospitals', icon: <Building2 className="w-4 h-4 text-blue-600" />, desc: 'ICU & emergency care' },
    { id: 'ambulance', label: 'Ambulance SOS', icon: <Truck className="w-4 h-4 text-red-600" />, desc: 'Oxygen-fitted mobile ICU' },
    { id: 'boarding', label: 'Pet Boarding', icon: <Home className="w-4 h-4 text-amber-600" />, desc: 'Cage-free day & overnight' },
    { id: 'diagnostics', label: 'Diagnostics', icon: <Activity className="w-4 h-4 text-purple-600" />, desc: 'Blood, X-Ray & Ultrasound' },
    { id: 'ngo', label: 'Animal NGOs', icon: <Heart className="w-4 h-4 text-rose-600" />, desc: 'Free stray OPD & rescue' },
  ];

  const localities = [
    'All Localities',
    'Indiranagar',
    'Koramangala',
    'HSR Layout',
    'Sarjapur Road',
    'Domlur',
    'Jayanagar',
    'KR Puram',
  ];

  return (
    <div className="bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 border-b border-slate-200 pt-8 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Kicker & Action Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>PRACTO FOR ANIMALS · VERIFIED HEALTHCARE DIRECTORY</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenListBusiness}
              className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>List Your Clinic / NGO</span>
            </button>
            <span className="text-slate-300">·</span>
            <button
              onClick={onOpenCorrection}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:underline cursor-pointer"
            >
              <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
              <span>Submit a Correction</span>
            </button>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display leading-tight text-balance">
            Your Pet&apos;s Health Deserves Verified, Immediate Care.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover verified veterinary clinics, 24/7 trauma hospitals, cage-free boarding, accredited diagnostics, animal ambulances, and rescue NGOs in your neighborhood.
          </p>
        </div>

        {/* Search & Location Bar */}
        <div className="bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-200 shadow-sm max-w-4xl flex flex-col md:flex-row items-stretch gap-2">
          {/* Location Picker */}
          <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 md:w-64 shrink-0">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <select
              value={selectedLocality}
              onChange={(e) => onLocalityChange(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
            >
              {localities.map((loc) => (
                <option key={loc} value={loc}>
                  {loc === 'All Localities' ? '📍 All Localities (Bangalore)' : loc}
                </option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by clinic, vet doctor, surgery, vaccine, diagnostics, or emergency..."
              className="w-full bg-transparent text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-xs text-slate-400 hover:text-slate-600 font-bold px-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Trigger Button */}
          <button
            onClick={() => onCategorySelect(selectedCategory)}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-xs whitespace-nowrap cursor-pointer"
          >
            Find a Vet
          </button>
        </div>

        {/* Quick Category Segmented Tiles */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategorySelect(cat.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`p-1.5 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100'}`}>
                    {cat.icon}
                  </span>
                  {cat.id === 'ambulance' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                      SOS
                    </span>
                  )}
                </div>
                <div>
                  <div className={`text-xs font-bold leading-snug ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {cat.label}
                  </div>
                  <div className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-emerald-100' : 'text-slate-500'}`}>
                    {cat.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
