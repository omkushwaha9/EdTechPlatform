import { CourseModule, AlumniOutcome } from '../types';

export const COURSE_MODULES: CourseModule[] = [
  {
    week: 1,
    title: 'Modern Generative AI Architecture & LLM Foundations',
    duration: 'Week 1 · 12 Hours',
    description: 'Transition from naive prompt engineering to production AI systems. Understand token economics, context windows, temperature/thinking parameters, and structured JSON schemas.',
    coreSkills: ['Model Selection & Routing', 'Structured Output Schemas', 'Token Budgeting', 'System Prompt Hardening'],
    capstoneProject: 'Multi-Agent Semantic Researcher: A tool that takes raw messy notes and generates publication-ready briefing docs.',
    toolsTaught: ['@google/genai SDK', 'Gemini 3.8 Flash', 'OpenAI API', 'JSON Schema']
  },
  {
    week: 2,
    title: 'Full-Stack Rapid Prototyping & AI-Assisted Engineering',
    duration: 'Week 2 · 14 Hours',
    description: 'Master building reactive, production-ready web applications at 10x velocity using modern React, Tailwind CSS, TypeScript, and server-side proxies.',
    coreSkills: ['Express/Node.js API Proxies', 'Tailwind v4 Clean Design', 'State Architecture', 'Error Boundaries & Fallbacks'],
    capstoneProject: 'Live SaaS Dashboard: Real-time data visualization tool with resilient error handling and zero-latency UI states.',
    toolsTaught: ['Vite', 'React 19', 'Tailwind CSS', 'Cursor', 'TypeScript']
  },
  {
    week: 3,
    title: 'No-Code & Low-Code Workflow Automation Systems',
    duration: 'Week 3 · 12 Hours',
    description: 'Build enterprise-grade automated pipelines that bridge webhooks, AI models, databases, and third-party SaaS APIs without writing bloated boilerplate.',
    coreSkills: ['Webhook Architecture', 'Error Retries & Dead Letter Queues', 'State Serialization', 'Data Transformation Nodes'],
    capstoneProject: 'Automated Content Engine: A webhook listener that takes founder voice memos, transcribes, structures, and creates social carousel drafts.',
    toolsTaught: ['n8n', 'Make.com', 'Airtable', 'Buffer API', 'Canva Connect API']
  },
  {
    week: 4,
    title: 'Retrieval Augmented Generation (RAG) & Vector Knowledge Bases',
    duration: 'Week 4 · 14 Hours',
    description: 'Ground AI systems in company-specific proprietary documents, PDFs, and relational records without hallucination or context degradation.',
    coreSkills: ['Chunking Strategies', 'Hybrid Vector + Lexical Search', 'Re-ranking Algorithms', 'Source Attribution Footnotes'],
    capstoneProject: 'Veterinary Clinical Diagnostic Co-Pilot: Query 5,000 pages of veterinary medical manuals with verified citations.',
    toolsTaught: ['pgvector', 'Supabase / Cloud SQL', 'Embeddings API', 'Cohere Rerank']
  },
  {
    week: 5,
    title: 'Autonomous Multi-Agent Systems & Tool Invocations',
    duration: 'Week 5 · 15 Hours',
    description: 'Design agentic workflows where LLMs execute multi-step deterministic functions, validate calculations, and recover gracefully from edge-case errors.',
    coreSkills: ['Function Calling (Tools)', 'Human-in-the-Loop Approval Curtains', 'Agent Guardrails', 'Orchestration Graphs'],
    capstoneProject: 'Autonomous Customer Triage Agent: Handles user booking, checks vet calendar availability, and sends calendar invites.',
    toolsTaught: ['LangGraph', 'Function Declarations', 'Google Calendar API', 'Postman']
  },
  {
    week: 6,
    title: 'Product Thinking, UX/UI Craftsmanship & Anti-Slop Design',
    duration: 'Week 6 · 12 Hours',
    description: 'Differentiate your work from generic AI boilerplates. Master typographic hierarchy, micro-interactions, mobile touch targets, and high-conversion UX flows.',
    coreSkills: ['Design Tokens & Theme Scales', 'Conversion Rate Optimization (CRO)', 'Mobile Sticky Budgets', 'Tabular Numeric Layouts'],
    capstoneProject: 'Interactive Product MVP Portfolio: A multi-page candidate evaluation platform that stands out to top-tier founders.',
    toolsTaught: ['Figma', 'Motion (Framer Motion)', 'Lucide Icons', 'WCAG AA Audit']
  },
  {
    week: 7,
    title: 'Enterprise Deployment, Observability & Security',
    duration: 'Week 7 · 10 Hours',
    description: 'Deploy real applications to Cloud Run, Vercel, and Docker. Monitor latency, track token costs, implement rate limiters, and protect API secrets.',
    coreSkills: ['Docker Containerization', 'Cloud Run & Serverless', 'Rate Limiting & DDOS Protection', 'Cost Telemetry'],
    capstoneProject: 'Zero-Secret Production Deployment: Deployed full-stack app with SSL, custom domain, and automated CI/CD.',
    toolsTaught: ['Google Cloud Run', 'GitHub Actions', 'Docker', 'Helicone']
  },
  {
    week: 8,
    title: 'Founder Pitch, Portfolio Defense & Career Launchpad',
    duration: 'Week 8 · 10 Hours',
    description: 'Work directly with tech founders and hiring managers. Present your capstone projects, undergo technical mock defenses, and access our vetted hiring network.',
    coreSkills: ['Technical Storytelling', 'System Architecture Whiteboarding', 'Founder Pitching', 'Contract Negotiation'],
    capstoneProject: 'Live Capstone Presentation Day with 25+ Tech Founders & Engineering VPs.',
    toolsTaught: ['Loom', 'Product Hunt', 'GitHub Portfolio', 'ReadMe Docs']
  }
];

export const ALUMNI_OUTCOMES: AlumniOutcome[] = [
  {
    id: 'alum-1',
    name: 'Siddharth Verma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    priorRole: 'College Final Year Student (ECE)',
    currentRole: 'AI Systems Engineer',
    company: 'NextGen HealthTech',
    hikePercent: 180,
    quote: 'Before this program, I only knew how to call ChatGPT API. By Week 4, I had built a production RAG system that landed me my dream role before graduation.',
    projectBuilt: 'Clinical Note Summarizer with Verified Source Citations'
  },
  {
    id: 'alum-2',
    name: 'Pooja Krishnan',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    priorRole: 'Associate Product Manager',
    currentRole: 'Senior AI Product Manager',
    company: 'FinScale Global',
    hikePercent: 120,
    quote: 'The automation and system thinking modules taught me how to talk to engineering leads with real architectural authority. Doubled my compensation in 5 months.',
    projectBuilt: 'Autonomous Credit Underwriting Pipeline'
  },
  {
    id: 'alum-3',
    name: 'Arjun Mehta',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    priorRole: 'Freelance Frontend Developer',
    currentRole: 'Founder & AI Automation Agency Lead',
    company: 'AutomateForge',
    hikePercent: 240,
    quote: 'The n8n + Gemini workflow frameworks allowed me to sign 4 enterprise retainer clients in my first month after completing the capstone.',
    projectBuilt: 'Omnichannel B2B Inbound Qualification Engine'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Who is this programme specifically tailored for?',
    a: 'Ambitious undergraduate and graduate students in computer science, design, or engineering, as well as early-career software developers, designers, and product managers who want to build real AI-native products instead of surface-level chatbots.'
  },
  {
    q: 'How many hours of weekly commitment are required?',
    a: '10 to 14 hours per week, consisting of 4 hours of live architectural sessions, 6 hours of hands-on project building, and 2 hours of office hours / code reviews.'
  },
  {
    q: 'Are there prerequisite requirements for programming?',
    a: 'Basic knowledge of JavaScript/TypeScript or Python and general familiarity with web concepts is recommended. We provide pre-work modules to get everyone up to speed on React and Git before Day 1.'
  },
  {
    q: 'What is the refund and satisfaction guarantee policy?',
    a: 'We offer a 14-day 100% money-back guarantee. If you complete the Week 1 capstone project and feel the depth is not transformative, you receive a full refund with no questions asked.'
  }
];
