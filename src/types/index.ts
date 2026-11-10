export type ActiveTab = 'practo' | 'education' | 'carousel' | 'dossier';

export type ProviderCategory = 'vet' | 'hospital' | 'boarding' | 'diagnostics' | 'ambulance' | 'ngo';

export type AnimalType = 'dogs' | 'cats' | 'birds' | 'cattle' | 'exotics' | 'community';

export interface Provider {
  id: string;
  name: string;
  category: ProviderCategory;
  categoryLabel: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  emergency24x7: boolean;
  ambulanceAvailable: boolean;
  address: string;
  locality: string;
  distanceKm: number;
  animalTypes: AnimalType[];
  consultationFee: number;
  availableSlot: string;
  openHours: string;
  phone: string;
  featuredServices: string[];
  doctorName?: string;
  doctorDegree?: string;
  yearsExperience?: number;
  badges: string[];
  about: string;
}

export interface CourseModule {
  week: number;
  title: string;
  duration: string;
  description: string;
  coreSkills: string[];
  capstoneProject: string;
  toolsTaught: string[];
}

export interface AlumniOutcome {
  id: string;
  name: string;
  avatar: string;
  priorRole: string;
  currentRole: string;
  company: string;
  hikePercent: number;
  quote: string;
  projectBuilt: string;
}

export interface CarouselSlide {
  slideNumber: number;
  tag: string;
  headline: string;
  subhead: string;
  bodyPoints: string[];
  visualDirection: string;
  accentWord?: string;
  ctaText?: string;
}

export interface CarouselDeck {
  deckTitle: string;
  subtitle: string;
  category: string;
  platform: 'linkedin' | 'instagram';
  recommendedTheme: 'obsidian' | 'minimal-light' | 'warm-amber' | 'emerald-health' | 'royal-indigo';
  slides: CarouselSlide[];
}
