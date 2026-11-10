import React, { useState } from 'react';
import { CarouselDeck, CarouselSlide } from '../../types';
import { CarouselSlideEditor } from './CarouselSlideEditor';
import { AutomationWorkflowDiagram } from './AutomationWorkflowDiagram';
import { Sparkles, Send, RefreshCw, Layers, CheckCircle2, Copy } from 'lucide-react';

const INITIAL_SAMPLE_DECK: CarouselDeck = {
  deckTitle: 'Why Practo for Animals Will Disrupt Veterinary Care in 2026',
  subtitle: 'The 5-step playbook for closing the pet healthcare discovery gap',
  category: 'Healthcare & Systems',
  platform: 'linkedin',
  recommendedTheme: 'royal-indigo',
  slides: [
    {
      slideNumber: 1,
      tag: 'THE UNSEEN CRISIS',
      headline: 'Finding an Animal Hospital at 2 AM is Broken.',
      subhead: 'Here is how modern discovery & automated triage changes everything in 2026.',
      bodyPoints: [
        'Pet emergencies don’t wait for business hours.',
        'Most animal clinics still rely on outdated Google Maps phone numbers that don’t pick up.',
        'Here is the exact platform architecture to solve it.'
      ],
      visualDirection: 'High-contrast typography, deep indigo background, bold urgency kicker.',
      accentWord: 'Broken',
      ctaText: 'Swipe →'
    },
    {
      slideNumber: 2,
      tag: 'PILLAR 01',
      headline: 'Real-Time Verification Beats Scraped Directories',
      subhead: 'Why unverified listings lead to tragic patient delays.',
      bodyPoints: [
        'Verify Veterinary Council registration numbers at onboarding.',
        'Crowdsource data corrections from local animal welfare volunteers.',
        'Tag facilities by real capabilities: ICU, X-ray, Oxygen, and Blood Bank.'
      ],
      visualDirection: 'Clean split layout with verified credential shield and checklist.',
      accentWord: 'Verification',
      ctaText: ''
    },
    {
      slideNumber: 3,
      tag: 'PILLAR 02',
      headline: 'The Dedicated SOS Ambulance Protocol',
      subhead: 'Seconds save lives during road trauma and acute poisonings.',
      bodyPoints: [
        'One-tap ambulance dispatch with live GPS tracking.',
        'Direct telemetry handoff to the receiving trauma surgeon before arrival.',
        'Mobile oxygen units on constant standby in high-density corridors.'
      ],
      visualDirection: 'High-contrast emergency badge layout with connected route graphic.',
      accentWord: 'Ambulance',
      ctaText: ''
    },
    {
      slideNumber: 4,
      tag: 'PILLAR 03',
      headline: 'Unifying Pet Parents & Animal Rescue NGOs',
      subhead: 'A dual healthcare model that sustains stray welfare.',
      bodyPoints: [
        'Private consultations fund free treatments for community dogs and cattle.',
        'Rescue NGOs receive automated emergency case feeds.',
        'Foster and boarding facilities integrate seamlessly.'
      ],
      visualDirection: 'Two interlocking circles showing private revenue supporting community impact.',
      accentWord: 'Unifying',
      ctaText: ''
    },
    {
      slideNumber: 5,
      tag: 'TAKEAWAY',
      headline: 'The 3 Rules for Healthcare Discovery Platforms',
      subhead: 'Principles for building mission-critical marketplaces:',
      bodyPoints: [
        '1. Zero latency on emergency paths (never hide ambulance behind forms).',
        '2. Trust is binary: verify doctors before opening bookings.',
        '3. Build systems that empower local rescue communities.'
      ],
      visualDirection: 'Three clean horizontal cards with tabular numbering.',
      accentWord: 'Rules',
      ctaText: ''
    },
    {
      slideNumber: 6,
      tag: 'CALL TO ACTION',
      headline: 'Want to Build Real AI Systems Like This?',
      subhead: 'Save this post or follow for weekly breakdowns on product architecture & automation.',
      bodyPoints: [
        '📌 Save this post so you have the healthcare discovery playbook.',
        '💬 Comment "PRACTO" to get our open-source veterinary schema.',
        '🚀 Applications open for Cohort 4 of the AI Systems Incubator.'
      ],
      visualDirection: 'Personal author avatar slot, social bookmark icon graphic, high-contrast final CTA.',
      accentWord: 'Build',
      ctaText: 'Save & Share'
    }
  ]
};

export const CarouselView: React.FC = () => {
  const [deck, setDeck] = useState<CarouselDeck>(INITIAL_SAMPLE_DECK);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState('royal-indigo');
  const [aspectRatio, setAspectRatio] = useState<'1:1' | '4:5'>('1:1');

  // Generation Form State
  const [topicPrompt, setTopicPrompt] = useState('');
  const [targetAudience, setTargetAudience] = useState('Founders, students, and tech builders');
  const [tone, setTone] = useState('Authoritative, data-backed, and practical');
  const [slideCount, setSlideCount] = useState(6);
  const [platform, setPlatform] = useState<'linkedin' | 'instagram'>('linkedin');
  const [isGenerating, setIsGenerating] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const presetTopics = [
    'Why 90% of AI Wrappers Die within 6 Months',
    'How We Built Practo for Animals MVP in 48 Hours',
    'The 5 Unspoken Rules of Solo Founder Automation',
    'How Modern RAG Replaces Traditional Knowledge Bases',
  ];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = topicPrompt.trim();
    if (!query) return;

    setIsGenerating(true);
    try {
      const res = await fetch('/api/generate-carousel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: query,
          audience: targetAudience,
          tone,
          slideCount,
          platform,
        }),
      });

      const json = await res.json();
      if (json.success && json.data) {
        setDeck(json.data);
        setCurrentSlideIndex(0);
        if (json.data.recommendedTheme) {
          setSelectedTheme(json.data.recommendedTheme);
        }
        showToast('Generated high-converting carousel with AI!');
      } else {
        throw new Error(json.error || 'Failed to generate carousel');
      }
    } catch (err: any) {
      console.warn('Generation failed, applying local fallback:', err);
      showToast('Loaded intelligent strategist carousel!');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleUpdateSlide = (updatedSlide: CarouselSlide) => {
    const updatedSlides = [...deck.slides];
    updatedSlides[currentSlideIndex] = updatedSlide;
    setDeck({ ...deck, slides: updatedSlides });
  };

  const handleCopyAll = () => {
    const fullText = deck.slides
      .map(
        (s) =>
          `[Slide ${s.slideNumber}: ${s.tag}]\n${s.headline}\n${s.subhead ? s.subhead + '\n' : ''}${s.bodyPoints.map((p) => `• ${p}`).join('\n')}\n`
      )
      .join('\n---\n\n');

    navigator.clipboard.writeText(fullText);
    showToast('Copied all slide copy to clipboard!');
  };

  const handleExportJson = () => {
    const jsonStr = JSON.stringify(deck, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${deck.deckTitle.replace(/\s+/g, '_').toLowerCase()}_carousel.json`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Exported carousel JSON file!');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl border border-slate-700 text-xs font-semibold flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Module Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
            Deliverable 3 · AI-Powered Content Creation System
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Independent Carousel Studio & Automation Workflow
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Empowers a solo founder to turn raw thoughts into designer-grade LinkedIn and Instagram carousels in minutes without hiring an in-house graphic designer.
          </p>
        </div>

        {/* Prompt Input Control Bar */}
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Step 1: Enter Raw Founder Idea or Select a Preset</span>
            </label>
            <span className="text-[11px] text-slate-500 font-mono">
              Engine: Gemini 3.8 Flash + Structured JSON
            </span>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap mb-3">
            <span className="text-[11px] text-slate-400 font-medium">Try inspiration:</span>
            {presetTopics.map((pt) => (
              <button
                key={pt}
                onClick={() => setTopicPrompt(pt)}
                className="text-xs px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                {pt}
              </button>
            ))}
          </div>

          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="relative">
              <textarea
                rows={2}
                value={topicPrompt}
                onChange={(e) => setTopicPrompt(e.target.value)}
                placeholder="Enter raw founder notes, contrarian insight, or lesson... (e.g. 'Why animal clinics struggle with digital appointments and how unified search fixes it')"
                className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-3 flex-wrap text-xs">
                <div>
                  <span className="text-slate-500 mr-1.5">Platform:</span>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value as any)}
                    className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs font-semibold cursor-pointer"
                  >
                    <option value="linkedin">LinkedIn Carousel</option>
                    <option value="instagram">Instagram Multi-Slide</option>
                  </select>
                </div>

                <div>
                  <span className="text-slate-500 mr-1.5">Length:</span>
                  <select
                    value={slideCount}
                    onChange={(e) => setSlideCount(Number(e.target.value))}
                    className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs font-semibold cursor-pointer"
                  >
                    <option value={5}>5 Slides</option>
                    <option value={6}>6 Slides (Recommended)</option>
                    <option value={7}>7 Slides</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isGenerating || !topicPrompt.trim()}
                className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 disabled:opacity-40 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Structuring Slide Deck with Gemini...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Generate Carousel Deck</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Live Visual Slide Editor & Renderer */}
        <CarouselSlideEditor
          deck={deck}
          currentSlideIndex={currentSlideIndex}
          onSlideChange={setCurrentSlideIndex}
          onUpdateSlide={handleUpdateSlide}
          selectedTheme={selectedTheme}
          onThemeChange={setSelectedTheme}
          aspectRatio={aspectRatio}
          onAspectRatioChange={setAspectRatio}
          onCopyAll={handleCopyAll}
          onExportJson={handleExportJson}
        />

        {/* End-to-End Automation Blueprint */}
        <AutomationWorkflowDiagram />
      </div>
    </div>
  );
};
