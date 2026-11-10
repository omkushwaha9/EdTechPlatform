import React, { useState } from 'react';
import { Mic, ArrowRight, Bot, Cpu, Layout, CheckCircle, Share2, Layers, Terminal, Sparkles } from 'lucide-react';

export const AutomationWorkflowDiagram: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<number>(2);

  const pipelineNodes = [
    {
      id: 1,
      title: '1. Founder Trigger',
      subtitle: 'Raw Idea Capture',
      tool: 'Telegram Bot / Notion / Audio Memo',
      icon: <Mic className="w-5 h-5 text-amber-600" />,
      color: 'border-amber-400 bg-amber-50/50',
      description: 'The founder sends a 30-second voice memo or rough 3-bullet insight from their phone while on the move.',
      details: {
        input: 'Voice note or Telegram text: "Why most founders fail at automation because they try to automate before standardizing."',
        processing: 'Whisper API transcribes audio into raw markdown within 2 seconds.',
        output: 'Clean raw concept passed via HTTPS Webhook to n8n orchestrator.',
      },
    },
    {
      id: 2,
      title: '2. Orchestrator',
      subtitle: 'Workflow Routing',
      tool: 'n8n (Self-Hosted) or Make.com',
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
      color: 'border-indigo-400 bg-indigo-50/50',
      description: 'The automated nervous system that formats payloads, handles retries, and coordinates the AI prompt chain.',
      details: {
        input: 'Webhook payload with raw transcription and metadata (author tag, platform target: LinkedIn/IG).',
        processing: 'Extracts topic, matches against brand voice guidelines, injects structured JSON schema.',
        output: 'Structured API request sent to Gemini 3.8 Flash endpoint with low-latency thinking parameters.',
      },
    },
    {
      id: 3,
      title: '3. Cognitive Core',
      subtitle: 'Copy & Structure Engine',
      tool: '@google/genai (Gemini 3.8 Flash)',
      icon: <Bot className="w-5 h-5 text-emerald-600" />,
      color: 'border-emerald-400 bg-emerald-50/50',
      description: 'Deconstructs the raw idea into a scroll-stopping hook, 4 value-dense instructional slides, and a viral CTA slide.',
      details: {
        input: 'Prompt with strict responseSchema requiring deckTitle, slideNumber, headline, subhead, bodyPoints, and visualDirection.',
        processing: 'Gemini 3.8 Flash generates 6 slides with viral formatting, zero fluff, and precise layout specifications.',
        output: 'Guaranteed valid JSON object containing complete copy and design parameters.',
      },
    },
    {
      id: 4,
      title: '4. Visual Engine',
      subtitle: 'Automated Rendering',
      tool: 'Canva Connect API / HTML Canvas',
      icon: <Layout className="w-5 h-5 text-blue-600" />,
      color: 'border-blue-400 bg-blue-50/50',
      description: 'Injects the structured copy into pre-tested brand layout templates with dynamic font-scaling and accent colorways.',
      details: {
        input: 'JSON slide deck + brand color palette (Obsidian / Indigo / Emerald).',
        processing: 'Renders pixel-perfect 1080x1080 (1:1) and 1080x1350 (4:5) slide PNGs in parallel.',
        output: 'Multi-page PDF for LinkedIn Carousel and compressed JPG sequence for Instagram multi-slide.',
      },
    },
    {
      id: 5,
      title: '5. Founder Approval',
      subtitle: 'Human-In-The-Loop',
      tool: 'Slack / Telegram / In-App Review',
      icon: <CheckCircle className="w-5 h-5 text-purple-600" />,
      color: 'border-purple-400 bg-purple-50/50',
      description: 'The founder receives a 1-tap review notification on mobile. They can approve directly or tweak a word in 30 seconds.',
      details: {
        input: 'Slide preview images sent to founder Telegram / Studio preview.',
        processing: 'Founder taps "Approve & Schedule" or edits copy directly in this web studio.',
        output: 'Approved assets pushed to distribution queue.',
      },
    },
    {
      id: 6,
      title: '6. Auto-Publisher',
      subtitle: 'Scheduled Distribution',
      tool: 'Buffer / Typefully / LinkedIn API',
      icon: <Share2 className="w-5 h-5 text-rose-600" />,
      color: 'border-rose-400 bg-rose-50/50',
      description: 'Automatically schedules the carousel during peak audience engagement windows (e.g. 08:30 AM Tuesday).',
      details: {
        input: 'Multi-slide media + formatted post caption with hashtags and first comment.',
        processing: 'Dispatches to LinkedIn Document Post and Instagram Graph Carousel endpoints.',
        output: 'Published live on social channels with zero manual graphic design overhead.',
      },
    },
  ];

  const activeNodeData = pipelineNodes.find((n) => n.id === selectedNode) || pipelineNodes[1];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Production Automation Architecture</span>
        </div>
        <h3 className="text-xl sm:text-3xl font-extrabold text-white font-display">
          End-to-End Content Pipeline Blueprint
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
          How a solo founder replaces an entire $4,000/month design agency using modular webhooks, Gemini 3.8 Flash structured schemas, and headless template rendering. Click any node below to inspect data payloads.
        </p>
      </div>

      {/* Horizontal Flowchart Nodes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {pipelineNodes.map((node) => {
          const isSelected = selectedNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-800 border-indigo-400 shadow-lg shadow-indigo-500/10'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-700">
                  {node.icon}
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-500">
                  0{node.id}
                </span>
              </div>

              <div>
                <div className="text-xs font-bold text-white leading-tight">
                  {node.title}
                </div>
                <div className="text-[10px] text-indigo-300 font-medium truncate mt-0.5">
                  {node.tool}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Active Node Inspector */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 sm:p-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">
              Node 0{activeNodeData.id} Inspector
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs font-semibold text-slate-300">
              {activeNodeData.subtitle} ({activeNodeData.tool})
            </span>
          </div>
          <span className="text-[11px] text-emerald-400 font-mono">Status: Verified Nominal</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
          {activeNodeData.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">
              Input Payload
            </div>
            <div className="text-slate-300 text-[11px] leading-relaxed">
              {activeNodeData.details.input}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="text-[10px] text-indigo-400 font-bold uppercase mb-1">
              Transform Logic
            </div>
            <div className="text-indigo-200 text-[11px] leading-relaxed">
              {activeNodeData.details.processing}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="text-[10px] text-emerald-400 font-bold uppercase mb-1">
              Emitted Output
            </div>
            <div className="text-emerald-200 text-[11px] leading-relaxed">
              {activeNodeData.details.output}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
