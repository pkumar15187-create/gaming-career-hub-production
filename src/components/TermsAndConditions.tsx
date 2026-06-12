import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Scale, 
  User, 
  Trophy, 
  Briefcase, 
  Wallet, 
  CreditCard, 
  RefreshCw, 
  Download, 
  AlertTriangle, 
  Ban, 
  HelpCircle, 
  Mail, 
  ArrowLeft,
  ChevronRight
} from 'lucide-react';

interface TermsProps {
  onBackToPortal: () => void;
}

export default function TermsAndConditions({ onBackToPortal }: TermsProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 space-y-8 text-zinc-300 font-sans leading-relaxed">
      
      {/* breadcrumb path / header */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
        <button 
          onClick={onBackToPortal}
          className="flex items-center gap-2 text-xs font-mono font-bold text-rose-500 hover:text-rose-400 uppercase tracking-widest bg-rose-500/10 hover:bg-rose-500/20 px-3 py-1.5 rounded-lg border border-rose-500/10 transition-all duration-150"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Portal
        </button>
        <span className="text-[10px] text-zinc-550 font-mono tracking-widest uppercase">
          LEGAL MATRIX • VERSION 4.0
        </span>
      </div>

      {/* Hero Header Area */}
      <div className="relative overflow-hidden p-6 md:p-8 bg-zinc-950/60 border border-zinc-900 rounded-3xl mb-4 shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Scale className="w-48 h-48 text-rose-500" />
        </div>
        <div className="relative space-y-3 z-10">
          <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2.5 py-1 rounded-md w-fit">
            <Scale className="w-3.5 h-3.5" />
            Platform Rules
          </span>
          <h1 className="text-2xl md:text-3.5xl font-black text-white uppercase tracking-tight font-sans">
            Terms & <span className="text-rose-500">Conditions</span>
          </h1>
          <p className="text-zinc-400 text-xs md:text-sm font-sans max-w-2xl">
            Please read these terms and conditions carefully before accessing your esports calibration dashboard. By entering, you submit to our community guidelines.
          </p>
          <p className="text-[10px] font-mono text-zinc-500">
            Effective Date: June 12, 2026 • Code Reference: GCH-TC-2026
          </p>
        </div>
      </div>

      {/* Main Grid Policy Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Side Quick Menu / Table of Contents */}
        <div className="md:col-span-1 space-y-4">
          <div className="p-4 bg-zinc-950/80 border border-zinc-900 rounded-2xl sticky top-4 space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
              <ShieldCheck className="w-4 h-4 text-rose-500" />
              <h5 className="text-xs font-black text-white font-mono uppercase tracking-wider">T&C Navigation</h5>
            </div>
            
            <nav className="flex flex-col gap-1 text-[11px] font-mono select-none">
              <a href="#t-accept" className="p-1.5 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400">
                <span>1. Acceptance of Terms</span>
                <ChevronRight className="w-3 h-3 text-zinc-605 group-hover:text-rose-500" />
              </a>
              <a href="#t-accounts" className="p-1.5 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400">
                <span>2. User Accounts</span>
                <ChevronRight className="w-3 h-3 text-zinc-605 group-hover:text-rose-500" />
              </a>
              <a href="#t-membership" className="p-1.5 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400">
                <span>3. Membership Rules</span>
                <ChevronRight className="w-3 h-3 text-zinc-605 group-hover:text-rose-500" />
              </a>
              <a href="#t-tournaments" className="p-1.5 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400">
                <span>4. Tournament Playbound</span>
                <ChevronRight className="w-3 h-3 text-zinc-650" />
              </a>
              <a href="#t-wallets" className="p-1.5 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400">
                <span>5. Diamond Wallet Policy</span>
                <ChevronRight className="w-3 h-3 text-zinc-605" />
              </a>
              <a href="#t-withdraw" className="p-1.5 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400">
                <span>6. Withdrawal Rules</span>
                <ChevronRight className="w-3 h-3 text-zinc-605" />
              </a>
              <a href="#t-prohibited" className="p-1.5 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-rose-450 font-bold">
                <span>7. Prohibited Behavior</span>
                <ChevronRight className="w-3 h-3 text-rose-500" />
              </a>
            </nav>
            
            <div className="pt-2 border-t border-zinc-900 text-[9px] text-zinc-550 font-mono">
              ⚡ Game-on protocols are legally audited to ensure absolute competitive parity and fraud prevention.
            </div>
          </div>
        </div>

        {/* Right Side Core Content Areas */}
        <div className="md:col-span-2 space-y-8 font-sans text-sm text-zinc-350">
          
          {/* 1. Acceptance of Terms */}
          <section id="t-accept" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">01</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">Acceptance of Terms</h3>
            </div>
            <p>
              By installing, registration or simple profile loading, you represent that you stand fully bound by these Terms & Conditions. If you do not agree to every clause, you must instantly seize server interactions and avoid submitting data payloads.
            </p>
          </section>

          {/* 2. User Accounts */}
          <section id="t-accounts" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">02</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">User Accounts & Compliance</h3>
            </div>
            <p>
              To claim victory states and organize rosters, you must initiate custom profile registration. You are strictly responsible for preserving password secrecy and checking system access. You declare that registration records are genuine and that you are of appropriate legal age parameters.
            </p>
          </section>

          {/* 3. Membership Rules */}
          <section id="t-membership" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">03</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">Membership Perks Rules</h3>
            </div>
            <p>
              We provide specific Premium subscription tiers (Silver, Gold, Platinum) conferring features, cosmetic items, custom player headers, and priority entry multipliers. Subscriptions are billed based on parameters stated in our payment interfaces. Membership activation is subject to manual screenshot receipt verification or gateway trace logs.
            </p>
          </section>

          {/* 4. Tournament Rules */}
          <section id="t-tournaments" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">04</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">Tournament and Matchplay rules</h3>
            </div>
            <p>
              By registering to join any custom match lobbies listed on our tournaments grid:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-400 text-xs">
              <li>You agree to submit registration files and seat placements before structural timelines close.</li>
              <li>You must enter using original IDs and check anti-cheat software protocols.</li>
              <li>Match score declarations, screenshots, and visual results are audited. The head referee's confirmation stands absolute, final, and non-negotiable.</li>
            </ul>
          </section>

          {/* 5. Diamond Wallet Policy */}
          <section id="t-wallets" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">05</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">Diamond Wallet Policy</h3>
            </div>
            <p>
              Our virtual balance system handles diamonds: topup_diamonds, winning_diamonds, and locked_withdraw_diamonds.
            </p>
            <p className="text-xs text-zinc-400">
              Diamonds do not constitute direct fiduciary assets. They only represent competitive credits applicable inside standard Gaming Career Hub lobby processes. Wallet balance modifications can occur due to tournament exit refunds, manual administrator adjustments (for proven billing discrepancies), or leaderboard rewards payouts.
            </p>
          </section>

          {/* 6. Payment, Refunds & Cancellations */}
          <section id="t-payments" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">06</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">Payments, Refunds & Cancellations</h3>
            </div>
            <p>
              All payments transferred to fund subscriptions or diamond top-ups are completed voluntarily. Cancellation of membership or top-up requests must occur under the user panel and requires verified proof receipt. Refund calculations (if applicable) are sent within 7-14 standard banking days.
            </p>
          </section>

          {/* 7. Withdrawal Policy */}
          <section id="t-withdraw" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">07</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">Withdrawal Policy & Limits</h3>
            </div>
            <p>
              Only active balances originating from <strong className="text-white">winning_diamonds</strong> are available for withdrawal requests. When a withdrawal is filed, those values transit to <strong className="text-white">locked_withdraw_diamonds</strong> to prevent double spending. The administration audits payment addresses and processes payouts via UPI frameworks. If fraudulent gameplay or tournament win manipulation is tracked, the withdrawal request is rejected and balance items are locked indefinitely.
            </p>
          </section>

          {/* 8. User Responsibilities & Prohibited Behavior */}
          <section id="t-prohibited" className="scroll-mt-4 space-y-3.5 bg-zinc-950/70 p-4 border border-rose-950/30 rounded-2xl">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
              <h3 className="text-md font-black text-white uppercase tracking-wider">Prohibited Activities</h3>
            </div>
            <p className="text-xs">
              Platform participants agree NOT to engage in any of the following unauthorized activities under penalty of hardware-level profile banning:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-400 text-xs">
              <li>Using aimbots, wallhacks, macros, or external script injectors in associated tournament matches.</li>
              <li>Altering local javascript files or bypassing wallet balances to artificially credit diamonds.</li>
              <li>Harassing community members, manipulating reviews, or impersonating administrative representatives.</li>
              <li>Exploiting network vulnerabilities or spamming registration processes.</li>
            </ul>
          </section>

          {/* 9. Limitations of Liability */}
          <section id="t-liability" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">08</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">Limitation of Liability</h3>
            </div>
            <p className="text-xs text-zinc-400">
              Gaming Career Hub does not guarantee uninterrupted connection signals, lag-free match environments, or error-free servers. We provide the services "as is" and bear zero responsibility for profile standings or database disruptions resulting from connection drops or third-party client outages.
            </p>
          </section>

          {/* 10. Contact Administration */}
          <section id="t-contact" className="scroll-mt-4 p-4 bg-zinc-950/85 border border-zinc-900 rounded-2xl space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <Mail className="w-4 h-4 text-rose-500" />
              <h3 className="text-md font-black text-white uppercase tracking-wider">Legal Resolution & Contact</h3>
            </div>
            <p className="text-xs">
              If you have any questions or require legal clarification regarding these terms, send inquiries under our administrative team mail:
            </p>
            <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-xl space-y-1 text-xs">
              <p className="m-0 text-zinc-400 font-mono">
                📧 Legal & Compliance Email: <strong className="text-rose-500 hover:underline">pkumar15187@gmail.com</strong>
              </p>
              <p className="m-0 text-zinc-400 font-mono">
                🌐 Main Platform Domain: <strong className="text-white">Gaming Career Hub</strong>
              </p>
            </div>
          </section>

        </div>

      </div>

      {/* Footer Area */}
      <div className="pt-6 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-550 font-mono">
        <span>© 2026 Gaming Career Hub • Legal Terms Matrix</span>
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
