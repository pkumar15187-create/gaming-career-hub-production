import React from 'react';
import { motion } from 'motion/react';
import { 
  RefreshCw, 
  RotateCcw, 
  Wallet, 
  CheckCircle, 
  ShieldCheck, 
  HelpCircle, 
  ArrowLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface RefundProps {
  onBackToPortal: () => void;
}

export default function RefundPolicy({ onBackToPortal }: RefundProps) {
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
          COMMERCIAL CORE • REFUND & CANCELLATION
        </span>
      </div>

      {/* Hero Header Block */}
      <div className="relative overflow-hidden p-6 md:p-8 bg-zinc-950/60 border border-zinc-900 rounded-3xl shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <RefreshCw className="w-48 h-48 text-rose-500" />
        </div>
        <div className="relative space-y-3 z-10">
          <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2.5 py-1 rounded-md w-fit">
            <RotateCcw className="w-3.5 h-3.5" />
            Refund Rules
          </span>
          <h1 className="text-2xl md:text-3.5xl font-black text-white uppercase tracking-tight">
            Refund, Upgrade & <span className="text-rose-500">Cancellations</span>
          </h1>
          <p className="text-zinc-400 text-xs md:text-sm font-sans max-w-2xl">
            Our explicit handbook regarding transaction reversals, membership subscription cancellations, and diamond wallet credits.
          </p>
          <p className="text-[10px] font-mono text-zinc-500">
            Effective: June 2026 • Billing Code: GCH-RF-99
          </p>
        </div>
      </div>

      {/* Multi Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left column brief */}
        <div className="md:col-span-1 space-y-4">
          <div className="p-4 bg-zinc-950/80 border border-zinc-900 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
              <ShieldCheck className="w-4 h-4 text-rose-500" />
              <h5 className="text-xs font-black text-white font-mono uppercase tracking-wider">Refund Summary</h5>
            </div>
            
            <ul className="space-y-3 text-xs leading-relaxed text-zinc-400 list-none pl-0">
              <li className="flex gap-2 items-start">
                <span className="text-emerald-500 font-bold">✓</span>
                <span><strong className="text-zinc-300">Upgrade Period:</strong> 24 hour buffer period for membership cancellations.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-500 font-bold">✓</span>
                <span><strong className="text-zinc-300">Empty Tournaments:</strong> Automatic 105% diamond refund on cancelled matchmaking divisions.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-500 font-bold">✓</span>
                <span><strong className="text-zinc-300">Process Time:</strong> 7 to 14 standard working business days directly via UPI.</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-zinc-900 text-[9px] text-zinc-550 font-mono">
              ⚡ Clear commercial protocols build absolute player safety and reliable esports league operations.
            </div>
          </div>
        </div>

        {/* Right column details */}
        <div className="md:col-span-2 space-y-6 text-sm text-zinc-405">
          
          <section className="space-y-3">
            <h3 className="text-xs font-mono font-black text-white uppercase tracking-wider border-b border-zinc-900 pb-1.5">
              1. Premium Membership Subscription Upgrades
            </h3>
            <p className="leading-relaxed">
              Gaming Career Hub provides Premium Upgrades (Silver, Gold, and Platinum status options) that offer statistical visual badges, recruiter highlights, and profile comment decorations. Subscription payments are fully processed immediately.
            </p>
            <p className="text-xs text-zinc-450 leading-relaxed">
              If you purchase an upgrade in error, you may file a refund request message within <strong className="text-white">24 hours</strong> of the original upgrade. Provided the specialized features (such as profile customization fields) have not been actively utilized, we will approve a full transaction refund directly.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs font-mono font-black text-white uppercase tracking-wider border-b border-zinc-900 pb-1.5">
              2. Diamond Top-ups & Locked Wallet Balances
            </h3>
            <p className="leading-relaxed">
              Virtual diamonds configured inside the <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">topup_diamonds</code> wallet are non-refundable except under confirmed billing error telemetry logs. If duplicate payments occur in error on QR codes, submit your 12-digit UPI Transaction Reference (UTR) screenshot within 48 hours for adjustment. Corrective topup values are processed after payment validation.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs font-mono font-black text-white uppercase tracking-wider border-b border-zinc-900 pb-1.5">
              3. Tournament Matchmaking Cancellations
            </h3>
            <p className="leading-relaxed">
              In cases where tournament matches are cancelled due to empty match seats, server failures, or game client updates, the entry diamond tokens are credited back to each user's wallet automatically under <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">winning_diamonds</code> or <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">topup_diamonds</code>.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs font-mono font-black text-white uppercase tracking-wider border-b border-zinc-900 pb-1.5">
              4. Transfer Methods & Timing
            </h3>
            <p className="leading-relaxed">
              Approved refunds are credited directly to the payer's source banking handle or UPI account. In order to safeguard our database channels against fraud, structural refunds require <strong className="text-white">7 to 14 business days</strong> to clear.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs font-mono font-black text-white uppercase tracking-wider border-b border-zinc-900 pb-1.5 font-bold">
              5. Submission of Claims
            </h3>
            <p className="leading-relaxed">
              To launch an upgrade cancel or double billing reconciliation request, please address our administration team directly:
            </p>
            <div className="p-3.5 bg-zinc-950 border border-zinc-904 rounded-xl flex flex-col gap-1 font-mono text-xs text-zinc-400">
              <span>📧 Operations Support Desk: <strong className="text-rose-500 hover:underline">pkumar15187@gmail.com</strong></span>
              <span>🔒 Validation Requirement: Supply original transaction ID and date.</span>
            </div>
          </section>

        </div>

      </div>

      {/* Bottom return bar */}
      <div className="pt-6 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
        <span>© 2026 Gaming Career Hub • Refund Matrix</span>
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
