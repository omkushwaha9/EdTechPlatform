import React, { useState } from 'react';
import { EducationHero } from './EducationHero';
import { CurriculumSection } from './CurriculumSection';
import { RoiCalculator } from './RoiCalculator';
import { AlumniSection } from './AlumniSection';
import { LeadCaptureModal } from './LeadCaptureModal';

export const EducationView: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleScrollToCurriculum = () => {
    const el = document.getElementById('curriculum');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadSyllabus = () => {
    // Generate and download a structured text syllabus
    const syllabusText = `PRACTICAL AI & DIGITAL SKILLS INCUBATOR (8 WEEKS)
=============================================================
Week 1: Modern Generative AI Architecture & LLM Foundations (@google/genai, structured outputs)
Week 2: Full-Stack Rapid Prototyping & Prototyping (Vite, React 19, Tailwind v4)
Week 3: No-Code & Low-Code Workflow Automation Systems (n8n, Make, Webhooks)
Week 4: Retrieval Augmented Generation (RAG) & Vector Databases (pgvector, Supabase)
Week 5: Autonomous Multi-Agent Systems & Tool Invocations (LangGraph, Functions)
Week 6: Product Thinking, UX/UI Craftsmanship & Anti-Slop Discipline
Week 7: Enterprise Deployment, Observability & Cloud Run
Week 8: Founder Pitch, Portfolio Defense & Career Launchpad
=============================================================
Admissions: 6 Seats Remaining for Cohort 4. 14-Day 100% Money-back Guarantee.`;

    const blob = new Blob([syllabusText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Practical_AI_Engineering_8Week_Syllabus.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <EducationHero
        onOpenApply={() => setIsLeadModalOpen(true)}
        onScrollToCurriculum={handleScrollToCurriculum}
        onOpenDiagnostic={() => setIsLeadModalOpen(true)}
      />

      {/* Curriculum Accordion Breakdown */}
      <CurriculumSection
        onOpenApply={() => setIsLeadModalOpen(true)}
        onDownloadSyllabus={handleDownloadSyllabus}
      />

      {/* Interactive ROI Calculator */}
      <RoiCalculator
        onOpenApply={() => setIsLeadModalOpen(true)}
      />

      {/* Alumni Proof & FAQ */}
      <AlumniSection
        onOpenApply={() => setIsLeadModalOpen(true)}
      />

      {/* Multi-Step Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />
    </div>
  );
};
