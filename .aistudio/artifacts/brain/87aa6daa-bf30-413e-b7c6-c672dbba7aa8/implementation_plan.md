# Product Development, Design & AI Systems Intern Assignment Platform

An integrated, production-grade candidate submission platform that comprehensively delivers and demonstrates all three required assignments: **Practo for Animals (MVP Discovery & Search)**, **AI Education Academy (Course Landing Page)**, and **AI-Powered Content Creation System (Live Carousel Generator & Automation Architecture)**, accompanied by an executive product strategy dossier.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The clarification questions yielded the default recommended selections, which have been incorporated into this plan:
> 1. **Multi-App Executive Architecture**: A polished unified switcher allowing the founder/evaluator to seamlessly test all three fully functional prototypes as well as inspect the strategic breakdown, CTAs, and system architecture.
> 2. **Live AI Carousel Studio**: Powered by server-side Gemini 3.8 Flash (`@google/genai`) with an interactive canvas for Instagram & LinkedIn slide customization (aspect ratios, typography, color palettes, slide rearrangement, export to PNG/JSON, and interactive n8n/Make automation visualizer).
> 3. **Warm Trustworthy Healthcare Aesthetic**: Forest emerald, warm amber, and slate neutrals with verified provider credentials, emergency SOS ambulance quick-dispatch, and accessible mobile-friendly filters.

- **Confirmed Decision 1**: Deliver all 3 assignment tasks as interactive, production-ready modules rather than static mockups.
- **Confirmed Decision 2**: Provide full working forms and flows (appointment booking, provider registration, correction submission, course syllabus viewer, ROI calculator, interactive lead capture modal, and live AI carousel generation).
- **Confirmed Decision 3**: Include an in-depth "Founder Brief & Strategic Dossier" tab detailing the evaluation criteria, CTA strategy, automation pipeline architecture (Make/n8n + Gemini + Canvas/Canva API), and tool selection matrix.

---

### 1. Overview & Core Concept

- **What It Does**: 
  - **Module 1 (Practo for Animals)**: An animal healthcare discovery engine where pet parents and animal welfare volunteers can find verified veterinary clinics, 24/7 emergency hospitals, boarding facilities, pathology diagnostics, animal ambulances, and rescue NGOs. Includes distance/open-now filtering, verified provider profiles, real-time consultation booking, "List Your Business" onboarding, and "Submit a Correction" crowdsourced data integrity workflows.
  - **Module 2 (AI Education — Practical Digital Skills)**: A conversion-focused course landing page for practical AI and digital skills targeting ambitious university students and early-career professionals. Features clear value propositions, interactive week-by-week curriculum inspection, alumni outcome metrics, tuition ROI calculator, and a high-converting multi-step lead capture / cohort registration modal.
  - **Module 3 (AI-Powered Content Creation System)**: An automated content workflow and interactive Carousel Studio. Founders input raw ideas or industry notes; the AI structures them into catchy hooks, slide-by-slide value points, visual direction, and ready-to-publish Instagram (1:1 / 4:5) and LinkedIn carousels with instant theme switching, drag-and-drop slide reordering, export capabilities, plus a comprehensive automation architecture diagram (Make/n8n, Gemini API, Canva Connect API).
  - **Module 4 (Executive Summary & Strategy Dossier)**: A dedicated reviewer guide mapping directly to the assignment evaluation rubric (UI/UX 30%, Product Thinking 20%, AI Automation 25%, Technical Execution 15%, Communication 10%).

- **Target Audience / Persona**:
  - *Pet Parents & Animal Rescuers*: Seeking immediate veterinary care, urgent ambulance transport, or trusted boarding.
  - *Students & Young Professionals*: Looking to break into tech, product, and AI workflows with hands-on portfolio projects.
  - *Solo Founders & Content Creators*: Needing scalable, designer-grade social media carousels without recurring graphic design expenses.
  - *Hiring Founder / Evaluators*: Reviewing candidate capability across product intuition, aesthetic craftsmanship, and technical systems engineering.

- **Key Value**: Demonstrates end-to-end execution from raw founder vision to finished, responsive software with zero placeholders or non-functional stubs.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  - **Practo for Animals Discovery Flow**: User lands on search portal $\rightarrow$ selects animal type (Dogs, Cats, Birds, Cattle, Exotics) and service category (Vet Clinics, 24/7 Hospitals, Boarding, Diagnostics, Ambulance, NGOs) $\rightarrow$ filters by rating, 24/7 availability, emergency care, verified badge $\rightarrow$ views provider card details $\rightarrow$ books appointment or initiates emergency ambulance dispatch $\rightarrow$ tests "List Your Business" or "Submit a Correction" modals.
  - **AI Education Conversion Flow**: User explores hero value proposition $\rightarrow$ interacts with curriculum accordion / hands-on projects $\rightarrow$ reviews verified cohort alumni testimonials and placement stats $\rightarrow$ tests ROI career impact calculator $\rightarrow$ submits lead capture / application modal with instant feedback.
  - **AI Carousel Studio Flow**: Founder enters raw thought/bullet point $\rightarrow$ selects target platform (LinkedIn / Instagram) and aesthetic theme (Clean Minimal, Dark Obsidian, Bold Brand, Warm Amber) $\rightarrow$ triggers Gemini AI generation $\rightarrow$ live preview updates with slide deck $\rightarrow$ founder edits copy directly, switches colorways, reorders slides $\rightarrow$ exports as slides or JSON $\rightarrow$ inspects the n8n/Make automation pipeline blueprint.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Warm trustworthy healthcare & clean modern editorial. Polished, accessible, and free of AI tropes (no purple gradients, no pill badge clutter, no fake latency tickers).
  - *Color Palette*:
    - Canvas (60%): Clean warm slate `#F8FAFC` and soft off-white surfaces `#FFFFFF`, with dark mode pairing `#0F172A` / `#020617`.
    - Structural Surfaces (30%): Hairline borders `rgba(0,0,0,0.08)`, subtle slate cards, clean tabular dividers.
    - Accent Budget (10%): Forest Emerald `#059669` / `#047857` for animal healthcare trust, Crimson `#DC2626` strictly for emergency triage/ambulance actions, and Deep Indigo `#4F46E5` for educational CTAs.
  - *Typography*:
    - Display / Headings: `Plus Jakarta Sans` with tight tracking and balanced headlines (`text-wrap: balance`).
    - Body Prose: `Plus Jakarta Sans` / `DM Sans` (15px-16px, 1.6 line height).
    - Metrics & Timestamps: Tabular figures (`tabular-nums`) with crisp alignment.
  - *Zero-Pill Discipline*: Categories, ratings, and locations rendered as clean unboxed text with typographic separators (`·`, `/`). Interactive filter controls styled as tactile segmented buttons.

- **Interactive Feedback & Motion**:
  - Smooth 150ms hover feedback and tab transitions using Motion (`motion/react`).
  - Mobile-responsive navigation with sliding drawers and touch targets $\ge 44\text{px}$.
  - Live preview updates for carousel slide editing with zero layout shift.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Full-Stack Express Server with Gemini 3.8 Flash vs Client-Only Generation**
  - *Chosen Approach*: Implement server-side proxy route (`/api/generate-carousel`) using `@google/genai` with `gemini-3.8-flash` and structured JSON schema (`responseSchema`), falling back to an instant pre-built high-quality carousel if an external API key is absent.
  - *Why*: Complies with AI Studio security standards (never expose keys to client) and ensures 100% reliability for evaluators testing with or without configured keys.
  - *Alternatives Considered*: Client-side prompt calls (insecure, violates runtime constraints).

- **Decision 2: Unified Executive Applet Switcher vs Scattered Single Pages**
  - *Chosen Approach*: A refined top-level switcher with direct deep-linking state (`?tab=practo`, `?tab=education`, `?tab=carousel`, `?tab=dossier`), allowing the reviewer to evaluate all three deliverables in one cohesive experience without tab fragmentation.
  - *Why*: Allows immediate side-by-side verification and showcases overall product coherence and design consistency.

- **Decision 3: Complete Mobile-Friendly Emergency Triage Bar in Practo for Animals**
  - *Chosen Approach*: Sticky top emergency toggle allowing immediate filtering for 24/7 emergency trauma centers and animal ambulances with one tap.
  - *Why*: Critical UX for animal emergencies where seconds matter; differentiates the platform from generic human-centric directory clones.

- **Decision 4: Real Functional Modals for CTAs**
  - *Chosen Approach*: Fully interactive forms for "Book Consultation", "List Your Business", "Submit a Correction", and "Enrol in Cohort" with form state validation, toast notifications, and persistent local storage saving.
  - *Why*: Evaluator can test every specified CTA directly with zero dead clicks.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        App Root Navigation Shell                       │
│     [ Practo for Animals ] [ AI Education ] [ Carousel Studio ] [ Dossier ]│
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Active Tab
        ┌───────────────────────────┼───────────────────────────┐
        ▼                           ▼                           ▼
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│ Practo for Pets  │       │   AI Education   │       │ Carousel Studio  │
│ - Discovery Grid │       │ - Course Hero    │       │ - Prompt Engine  │
│ - Emergency Triage│      │ - Syllabus Tree  │       │ - Live Canvas    │
│ - Filter Toolbar │       │ - ROI Calculator │       │ - Style Presets  │
│ - Provider Cards │       │ - Alumni Proof   │       │ - n8n/Make Map   │
│ - Action Modals  │       │ - Lead Modal     │       │ - Export Deck    │
└────────┬─────────┘       └────────┬─────────┘       └────────┬─────────┘
         │                          │                          │
         ▼                          ▼                          ▼
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│ Pet Providers DB │       │ Cohort Curriculum│       │ Server API Route │
│ (Local State +   │       │ (Modules, Projects│      │ /api/gemini/     │
│ Filters & Search)│       │ Outcomes Data)   │       │ generate-carousel│
└──────────────────┘       └──────────────────┘       └────────┬─────────┘
                                                               │
                                                               ▼
                                                      ┌──────────────────┐
                                                      │  @google/genai   │
                                                      │ gemini-3.8-flash │
                                                      └──────────────────┘
```

- **Data Models**:
  - `Provider`: id, name, category (vet, hospital, boarding, diagnostics, ambulance, ngo), animalTypes, rating, reviewsCount, verified, emergency24x7, address, phone, priceRange, servicesOffered, image, openHours.
  - `CourseCurriculum`: week, title, description, skillsAcquired, projects, toolsUsed.
  - `CarouselDeck`: topic, targetAudience, theme, slides (array of slideNumber, headline, subhead, body, visualTip, ctaText).
  - `LeadSubmission` & `ListingSubmission`: captured form data with validation.

- **Component Hierarchy**:
  - `src/App.tsx`: App shell, active view switcher, shared header, responsive menu, and toast notifications.
  - `src/components/practo/`:
    - `PractoHeader.tsx`: Search input, location picker, emergency toggle, List Business button.
    - `PractoFilters.tsx`: Category selector, animal species pills, verified/24-7 checkboxes.
    - `ProviderCard.tsx`: Rich profile card with contact action, directions, and booking trigger.
    - `BookingModal.tsx`, `ListBusinessModal.tsx`, `CorrectionModal.tsx`: Complete forms.
  - `src/components/education/`:
    - `EducationHero.tsx`: High-conversion hero, value proposition, cohort countdown badge.
    - `CurriculumAccordion.tsx`: Detailed modular breakdown with project showcase.
    - `RoiCalculator.tsx`: Interactive salary & career uplift calculator.
    - `LeadCaptureModal.tsx`: Multi-step enrollment application with validation.
  - `src/components/carousel/`:
    - `CarouselStudio.tsx`: Topic input, prompt modifiers, platform switch (IG/LinkedIn), theme picker.
    - `CarouselSlideViewer.tsx`: Interactive slide deck viewer with copy inline-editing and slide reorder.
    - `AutomationWorkflowDiagram.tsx`: Visual interactive flowchart of Founder $\rightarrow$ n8n $\rightarrow$ Gemini $\rightarrow$ Canva/Canvas API $\rightarrow$ Buffer/Social schedule.
  - `src/components/dossier/`:
    - `AssignmentDossier.tsx`: Comprehensive writeup of product thinking, tech stack rationale, CTA strategy, and workflow breakdown aligned to the evaluation rubric.
  - `server.ts`: Express backend proxy with `@google/genai` integration for carousel generation and static Vite serving.

---

### Verification & Testing Plan
- **Module 1**: Test category filters (Vets, Boarding, Ambulances, NGOs), keyword search, emergency toggle, "Book Consultation", "List Your Business", and "Submit a Correction" modals.
- **Module 2**: Verify curriculum tabs, interactive ROI calculator sliders, and course lead capture form validation.
- **Module 3**: Verify prompt submission, AI carousel generation (and fallback resilience), slide copy editing, theme switching, aspect ratio switching (1:1 vs 4:5), and export features.
- **Module 4**: Verify all assignment prompts and evaluation criteria points are addressed thoroughly with clear diagrams.
- **Build Verification**: Run `compile_applet` and `lint_applet` to guarantee error-free compilation and clean styling.
