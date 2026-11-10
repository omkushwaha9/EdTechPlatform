import React, { useState, useMemo } from 'react';
import { MOCK_PROVIDERS } from '../../data/mockProviders';
import { Provider, ProviderCategory, AnimalType } from '../../types';
import { EmergencySOSBanner } from './EmergencySOSBanner';
import { PractoHero } from './PractoHero';
import { PractoFilters } from './PractoFilters';
import { ProviderCard } from './ProviderCard';
import { BookingModal } from './BookingModal';
import { ListBusinessModal } from './ListBusinessModal';
import { CorrectionModal } from './CorrectionModal';
import { SearchX, PhoneCall, ShieldCheck, HeartHandshake, Stethoscope } from 'lucide-react';

export const PractoView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocality, setSelectedLocality] = useState('All Localities');
  const [selectedCategory, setSelectedCategory] = useState<ProviderCategory | 'all'>('all');
  const [selectedAnimals, setSelectedAnimals] = useState<AnimalType[]>([]);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [emergencyOnly, setEmergencyOnly] = useState(false);
  const [ambulanceOnly, setAmbulanceOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'distance' | 'rating' | 'fee'>('distance');

  // Modals
  const [bookingProvider, setBookingProvider] = useState<Provider | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isListBusinessOpen, setIsListBusinessOpen] = useState(false);
  const [correctionProvider, setCorrectionProvider] = useState<Provider | null>(null);
  const [isCorrectionOpen, setIsCorrectionOpen] = useState(false);

  // Toggle Animal Filter
  const handleToggleAnimal = (animal: AnimalType) => {
    setSelectedAnimals((prev) =>
      prev.includes(animal) ? prev.filter((a) => a !== animal) : [...prev, animal]
    );
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedLocality('All Localities');
    setSelectedCategory('all');
    setSelectedAnimals([]);
    setVerifiedOnly(false);
    setEmergencyOnly(false);
    setAmbulanceOnly(false);
    setSortBy('distance');
  };

  // Filtered & Sorted Providers
  const filteredProviders = useMemo(() => {
    return MOCK_PROVIDERS.filter((provider) => {
      // Category filter
      if (selectedCategory !== 'all' && provider.category !== selectedCategory) {
        return false;
      }

      // Locality filter
      if (selectedLocality !== 'All Localities' && provider.locality !== selectedLocality) {
        return false;
      }

      // Emergency filter
      if (emergencyOnly && !provider.emergency24x7) {
        return false;
      }

      // Ambulance filter
      if (ambulanceOnly && !provider.ambulanceAvailable) {
        return false;
      }

      // Verified filter
      if (verifiedOnly && !provider.verified) {
        return false;
      }

      // Animal filter (at least one matches if any selected)
      if (selectedAnimals.length > 0) {
        const matchesAnimal = selectedAnimals.some((a) => provider.animalTypes.includes(a));
        if (!matchesAnimal) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = provider.name.toLowerCase().includes(q);
        const matchesTagline = provider.tagline.toLowerCase().includes(q);
        const matchesLocality = provider.locality.toLowerCase().includes(q);
        const matchesServices = provider.featuredServices.some((s) => s.toLowerCase().includes(q));
        const matchesDoctor = provider.doctorName?.toLowerCase().includes(q);

        if (!matchesName && !matchesTagline && !matchesLocality && !matchesServices && !matchesDoctor) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'distance') return a.distanceKm - b.distanceKm;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'fee') return a.consultationFee - b.consultationFee;
      return 0;
    });
  }, [
    selectedCategory,
    selectedLocality,
    emergencyOnly,
    ambulanceOnly,
    verifiedOnly,
    selectedAnimals,
    searchQuery,
    sortBy,
  ]);

  // Handlers
  const handleOpenBooking = (provider: Provider) => {
    setBookingProvider(provider);
    setIsBookingOpen(true);
  };

  const handleOpenCorrection = (provider?: Provider) => {
    setCorrectionProvider(provider || null);
    setIsCorrectionOpen(true);
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleTriggerAmbulance = () => {
    const ambulanceProvider = MOCK_PROVIDERS.find((p) => p.category === 'ambulance') || MOCK_PROVIDERS[2];
    setBookingProvider(ambulanceProvider);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        {/* Emergency Triage Bar */}
        <EmergencySOSBanner
          onTriggerAmbulance={handleTriggerAmbulance}
          isEmergencyOnly={emergencyOnly}
          onToggleEmergencyOnly={setEmergencyOnly}
        />

        {/* Discovery Hero */}
        <PractoHero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedLocality={selectedLocality}
          onLocalityChange={setSelectedLocality}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          onOpenListBusiness={() => setIsListBusinessOpen(true)}
          onOpenCorrection={() => handleOpenCorrection()}
        />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters Bar */}
          <PractoFilters
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            selectedAnimals={selectedAnimals}
            onToggleAnimal={handleToggleAnimal}
            verifiedOnly={verifiedOnly}
            onToggleVerifiedOnly={setVerifiedOnly}
            emergencyOnly={emergencyOnly}
            onToggleEmergencyOnly={setEmergencyOnly}
            ambulanceOnly={ambulanceOnly}
            onToggleAmbulanceOnly={setAmbulanceOnly}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalResultsCount={filteredProviders.length}
            onResetFilters={handleResetFilters}
          />

          {/* Providers Grid */}
          {filteredProviders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              {filteredProviders.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  onBook={handleOpenBooking}
                  onCorrect={(p) => handleOpenCorrection(p)}
                  onCall={handleCall}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto my-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-4">
                <SearchX className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                No facilities match your exact filters
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Try removing the species filter or resetting the location to view all 8 registered clinics, hospitals, and ambulances in Bangalore.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Value Assurance Row */}
          <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  100% Verified Degrees
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Every doctor&apos;s Veterinary Council registration number is individually verified before listing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Transparent Consultation Fees
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Zero hidden charges. Clear OPD pricing displayed upfront, with zero fee options for community strays.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-100 text-red-800 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Community Rescue First
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Direct partnership with certified rescue NGOs for free treatments, vaccinations, and emergency transport.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modals */}
      <BookingModal
        provider={bookingProvider}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <ListBusinessModal
        isOpen={isListBusinessOpen}
        onClose={() => setIsListBusinessOpen(false)}
      />

      <CorrectionModal
        provider={correctionProvider}
        isOpen={isCorrectionOpen}
        onClose={() => setIsCorrectionOpen(false)}
      />
    </div>
  );
};
