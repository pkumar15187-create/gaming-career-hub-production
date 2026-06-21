import React from 'react';
import { motion } from 'motion/react';
import { 
  AlertOctagon, 
  ShieldAlert, 
  HelpCircle, 
  ExternalLink, 
  ArrowLeft,
  ChevronRight,
  Sparkles,
  DollarSign
} from 'lucide-react';

interface DisclaimerProps {
  onBackToPortal: () => void;
}

export default function Disclaimer({ onBackToPortal }: DisclaimerProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 space-y-8 text-zinc-350 font-sans leading-relaxed">
      
      {/* Header breadcrumb */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
        <button 
          onClick={onBackToPortal}
          className="flex items-center gap-2 text-xs font-mono font-bold text-rose-500 hover:text-rose-400 uppercase tracking-widest bg-rose-500/10 hover:bg-rose-500/20 px-3 py-1.5 rounded-lg border border-rose-500/10 transition-all duration-150"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Portal
        </button>
        <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
          LEGAL CORE • PUBLIC DISCLAIMER
        </span>
      </div>

      {/* Hero Header Block */}
      <div className="relative overflow-hidden p-6 md:p-8 bg-zinc-950/60 border border-zinc-900 rounded-3xl shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <AlertOctagon className="w-48 h-48 text-rose-500" />
        </div>
        <div className="relative space-y-3 z-10">
          <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-orange-500 uppercase tracking-widest bg-orange-550/10 px-2.5 py-1 rounded-md w-fit">
            <ShieldAlert className="w-3.5 h-3.5 animate-pulse" />
            Legal Notice
          </span>
          <h1 className="text-2xl md:text-3.5xl font-black text-white uppercase tracking-tight">
            Compliance & <span className="text-rose-500">Legal Disclaimer</span>
          </h1>
          <p className="text-zinc-400 text-xs md:text-sm font-sans max-w-2xl">
            This notice details the terms of service, limitations, and liabilities associated with using the Gaming Career Hub platform.
          </p>
          <p className="text-[10px] font-mono text-zinc-500">
            Current Version: 2026.1 • Legal Reference: GCH-DISC-01
          </p>
        </div>
      </div>

      {/* Two Column Structural Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left column info box */}
        <div className="md:col-span-1 space-y-4">
          <div className="p-4 bg-zinc-950/80 border border-zinc-900 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
              <HelpCircle className="w-4 h-4 text-rose-500" />
              <h5 className="text-xs font-black text-white font-mono uppercase tracking-wider">Key Takeaways</h5>
            </div>
            
            <ul className="space-y-3 text-xs leading-relaxed text-zinc-400 list-none pl-0">
              <li className="flex gap-2 items-start">
                <span className="text-rose-500 font-bold">•</span>
                <span>We serve as a tracking and matchmaking service, not a financial exchange.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-rose-500 font-bold">•</span>
                <span>Official results listed are final and subject to rigorous community review.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-rose-500 font-bold">•</span>
                <span>Third-party integrations (Sponsors, Discord, YouTube) have separate policies.</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-zinc-900 text-[9px] text-zinc-550 font-mono">
              💡 Our terms are fully engineered to remain in full alignment with global advertising distribution models.
            </div>
          </div>
        </div>

        {/* Right column detailed paragraphs */}
        <div className="md:col-span-2 space-y-6 text-sm text-zinc-405">
          
          <section className="space-y-3">
            <h3 className="text-xs font-mono font-black text-white uppercase tracking-wider border-b border-zinc-900 pb-1.5">
              1. General Information Purpose
            </h3>
            <p className="leading-relaxed">
              All materials, statistics, profiles, articles, and recommendations published on <strong className="text-white">Gaming Career Hub</strong> are provided for general informational, educational, and professional benchmarking purposes only. While we build robust calibration systems, we do not guarantee specific recruitment outcomes, job acquisition, or guaranteed esports sponsorship deals.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs font-mono font-black text-white uppercase tracking-wider border-b border-zinc-900 pb-1.5">
              2. No Financial or Investment Advice
            </h3>
            <p className="leading-relaxed">
              Our diamond currency operations, including virtual wallet balances like <code className="bg-zinc-900 px-1 py-0.5 rounded text-zinc-300">winning_diamonds</code> and <code className="bg-zinc-900 px-1 py-0.5 rounded text-zinc-300">topup_diamonds</code>, are dedicated platforms tools for tournament entry calibration and reward disbursement. They do not constitute securities, banking deposits, or investable capital. Any payment made for membership upgrades is purely for digital features access.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs font-mono font-black text-white uppercase tracking-wider border-b border-zinc-900 pb-1.5">
              3. Tournament Match Outcomes
            </h3>
            <p className="leading-relaxed">
              While we inspect screenshots, telemetry details, and bracket profiles to issue diamond rankings fairly, we bear no liability for gameplay lag, connectivity disruptions, server instability, or third-party titles' updates that affect match environments. Rulings made by tournament referees are bound by strict anti-monitoring guidelines to check fraud.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs font-mono font-black text-rose-400 uppercase tracking-wider border-b border-zinc-900 pb-1.5">
              4. External Links and Google AdSense
            </h3>
            <p className="leading-relaxed">
              This site displays third-party sponsor directories and Context-Rich advertising campaigns powered by Google AdSense. We do not endorse, monitor, nor guarantee accuracy for external hyperlink sites. Clicking on outbound promotional links redirects you to distinct portals governed by independent privacy and safety terms.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs font-mono font-black text-white uppercase tracking-wider border-b border-zinc-900 pb-1.5">
              5. Consent & Support Contacts
            </h3>
            <p className="leading-relaxed">
              By continued interaction inside our platform halls, you express complete consent to our Terms, Privacy, and Disclaimer matrixes. For clarifications or requests regarding legal safety rules, address our administration desk directly:
            </p>
            <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl font-mono text-xs text-zinc-400">
              📧 Support & Compliance: <a href="mailto:pkumar15187@gmail.com" className="text-rose-500 hover:underline">pkumar15187@gmail.com</a>
            </div>
          </section>

        </div>

      </div>

      {/* Bottom return bar */}
      <div className="pt-6 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
        <span>© 2026 Gaming Career Hub • Compliance Index</span>
        <button 
          onClick={onBackToPortal}
          className="text-rose-500 hover:underline flex items-center gap-1 font-bold"
        >
          Return to Portal Root <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
