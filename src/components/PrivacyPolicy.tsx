import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Lock, 
  Database, 
  Cookie, 
  Globe, 
  Mail, 
  Info, 
  FileText, 
  Settings, 
  AlertCircle, 
  Eye, 
  ArrowLeft,
  ChevronRight
} from 'lucide-react';

interface PrivacyPolicyProps {
  onBackToPortal: () => void;
}

export default function PrivacyPolicy({ onBackToPortal }: PrivacyPolicyProps) {
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
          SECURE PROTOCOL • VERSION 2.1
        </span>
      </div>

      {/* Hero Header Area */}
      <div className="relative overflow-hidden p-6 md:p-8 bg-zinc-950/60 border border-zinc-900 rounded-3xl mb-4 shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Shield className="w-48 h-48 text-rose-500" />
        </div>
        <div className="relative space-y-3 z-10">
          <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2.5 py-1 rounded-md w-fit">
            <Lock className="w-3.5 h-3.5 animate-pulse" />
            Privacy Policy
          </span>
          <h1 className="text-2xl md:text-3.5xl font-black text-white uppercase tracking-tight font-sans">
            Privacy Policy & <span className="text-rose-500">Data Terms</span>
          </h1>
          <p className="text-zinc-400 text-xs md:text-sm font-sans max-w-2xl">
            This Privacy Policy governs the manner in which Gaming Career Hub collects, uses, maintains, and discloses information collected from users. Your privacy is paramount to our calibration matrix.
          </p>
          <p className="text-[10px] font-mono text-zinc-500">
            Last Updated: June 12, 2026 • Legal Division Code: CH-PP-2026
          </p>
        </div>
      </div>

      {/* Main Grid Policy Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Side Quick Menu / Table of Contents */}
        <div className="md:col-span-1 space-y-4">
          <div className="p-4 bg-zinc-950/80 border border-zinc-900 rounded-2xl sticky top-4 space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
              <FileText className="w-4 h-4 text-rose-500" />
              <h5 className="text-xs font-black text-white font-mono uppercase tracking-wider">Policy Navigation</h5>
            </div>
            
            <nav className="flex flex-col gap-1 text-[11px] font-mono">
              <a href="#section-collect" className="p-2 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400 border border-transparent hover:border-zinc-800">
                <span>1. Information We Collect</span>
                <ChevronRight className="w-3 h-3 text-zinc-650 group-hover:text-rose-500 transition-colors" />
              </a>
              <a href="#section-usage" className="p-2 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400 border border-transparent hover:border-zinc-800">
                <span>2. How We Use Info</span>
                <ChevronRight className="w-3 h-3 text-zinc-650 group-hover:text-rose-500 transition-colors" />
              </a>
              <a href="#section-cookies" className="p-2 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400 border border-transparent hover:border-zinc-800">
                <span>3. Cookies</span>
                <ChevronRight className="w-3 h-3 text-zinc-650 group-hover:text-rose-500 transition-colors" />
              </a>
              <a href="#section-adsense" className="p-2 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-rose-400 font-extrabold border border-rose-950/20 bg-rose-950/5">
                <span>4. AdSense & Ads</span>
                <ChevronRight className="w-3 h-3 text-rose-500" />
              </a>
              <a href="#section-payments" className="p-2 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400 border border-transparent hover:border-zinc-800">
                <span>5. Payment Security</span>
                <ChevronRight className="w-3 h-3 text-zinc-650 group-hover:text-rose-500 transition-colors" />
              </a>
              <a href="#section-accounts" className="p-2 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400 border border-transparent hover:border-zinc-800">
                <span>6. User Accounts</span>
                <ChevronRight className="w-3 h-3 text-zinc-650 group-hover:text-rose-500 transition-colors" />
              </a>
              <a href="#section-security" className="p-2 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400 border border-transparent hover:border-zinc-800">
                <span>7. Data Protection</span>
                <ChevronRight className="w-3 h-3 text-zinc-650 group-hover:text-rose-500 transition-colors" />
              </a>
              <a href="#section-contact" className="p-2 hover:bg-zinc-900 hover:text-white rounded-lg flex items-center justify-between group transition-all text-zinc-400 border border-transparent hover:border-zinc-800">
                <span>8. Contact Info</span>
                <ChevronRight className="w-3 h-3 text-zinc-650 group-hover:text-rose-500 transition-colors" />
              </a>
            </nav>
            
            <div className="pt-2 border-t border-zinc-900 text-[9px] text-zinc-550 font-mono">
              💡 By logging in or using Gaming Career Hub, you assent to these structural terms.
            </div>
          </div>
        </div>

        {/* Right Side Core Content Areas */}
        <div className="md:col-span-2 space-y-8 font-sans text-sm text-zinc-350">
          
          {/* AdSense specific warning block (extremely visible to reviewers) */}
          <div className="p-4 bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/20 rounded-2xl flex gap-3.5 items-start transition-colors">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-black font-mono text-amber-400 uppercase tracking-wider">AdSense Compliance Note</h4>
              <p className="text-[11.5px] text-zinc-400 leading-normal">
                This document conforms strictly to Google's Privacy Disclosures policy. We deploy Google AdSense context-based ads and utilize standard tracking cookies. You may toggle interest personalization via Google Ads Settings anytime.
              </p>
            </div>
          </div>

          {/* 1. Information We Collect */}
          <section id="section-collect" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">01</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">Information We Collect</h3>
            </div>
            <p>
              We collect information to provide a more tailored competitive calibration experience for our esports community. This occurs in various ways:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400 text-xs">
              <li>
                <strong className="text-zinc-200">Personal Identification Info:</strong> Username, legal name, gamer tags, email address, password coordinates, and geographic metrics.
              </li>
              <li>
                <strong className="text-zinc-200">Gaming Metrics & Statistics:</strong> Skill ratings (MMR), game titles played, K/D ratios, match records, team affiliations, and achievement awards.
              </li>
              <li>
                <strong className="text-zinc-200">Voluntary Uploads:</strong> Payment proofs, screenshots, company/sponsor presentations, commentary logs, and profile pictures.
              </li>
            </ul>
          </section>

          {/* 2. How We Use Information */}
          <section id="section-usage" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">02</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">How We Use Information</h3>
            </div>
            <p>
              Your datasets help customize, run, and protect your Gaming Career Hub experience:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400 text-xs">
              <li>To run gamer matchmaking profiles and manage tournament leagues.</li>
              <li>To track, audit, and disburse leaderboard ranks and virtual currency rewards.</li>
              <li>To send real-time system alerts, tournament registration approvals, and critical security logs.</li>
              <li>To understand cumulative web patterns to optimize our server configurations.</li>
            </ul>
          </section>

          {/* 3. Cookies */}
          <section id="section-cookies" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">03</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">Cookies Policy</h3>
            </div>
            <p>
              Our application utilizes standard "cookies" and similar digital tracking technologies to enhance navigation efficiency. Cookies are small data assets stored on your device's storage. 
            </p>
            <p className="text-xs text-zinc-400">
              We use security cookies (to keep authentication active), performance cookies (to analyze loading speed), and marketing cookies (delegated to match advertising topics to your hobbies). You can instruct your browser to decline cookies, but please note that some portal modules may not load correctly as a consequence.
            </p>
          </section>

          {/* 4. Google AdSense and Third-Party Advertising */}
          <section id="section-adsense" className="scroll-mt-4 p-4 md:p-5 bg-zinc-950/70 border border-rose-500/15 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/20 border border-rose-500/35 rounded font-mono text-xs text-rose-400 font-extrabold">04</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider text-rose-400">Google AdSense Disclosures</h3>
            </div>
            <p className="text-[13px] leading-relaxed">
              We serve third-party ads using the Google AdSense partner program. Google and its affiliate marketing vendors use cookies to serve highly contextual ads based on previous visits to <span className="text-white font-semibold">Gaming Career Hub</span> and other sites across the internet.
            </p>
            
            <div className="bg-zinc-900/50 border border-zinc-800 p-3.5 rounded-xl space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white font-mono font-bold uppercase text-[10px]">
                <Settings className="w-3.5 h-3.5 text-rose-500" /> Control Your Experience
              </div>
              <p className="text-zinc-400 m-0 leading-normal">
                Google's use of advertising cookies enables it and its partners to serve targeted ads strictly based on physical visits. You can actively review and withdraw consent for personalized advertising under the browser parameters or directly inside the <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:underline hover:text-rose-350">Google Ads Settings Portal</a>.
              </p>
            </div>
            
            <p className="text-xs text-zinc-400">
              Third-party ad networks or servers may also utilize scripts, beacons, and cookies to assess advertising effectiveness. Gaming Career Hub bears zero control over outside cookie data stored by third-party partner advertisers.
            </p>
          </section>

          {/* 5. Payment Information */}
          <section id="section-payments" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">05</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">Payment Information Security</h3>
            </div>
            <p>
              Gaming Career Hub does not record nor harvest sensitive credit card parameters on our databases. All payments (membership upgrades, tournament fees, and wallet top-ups) are routed. We use secure image validation for transactional QR processes and monitor transaction UTR logs. Verified transactions are audited on our secure backend.
            </p>
          </section>

          {/* 6. User Accounts */}
          <section id="section-accounts" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">06</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">User Accounts & Rights</h3>
            </div>
            <p>
              You maintain ownership of all statistical portfolios published under your gamer profile:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400 text-xs">
              <li><strong className="text-zinc-200">Right to Update:</strong> You can edit profile pictures, stats, bios, and links whenever you wish inside your User Dashboard.</li>
              <li><strong className="text-zinc-200">Right to Delete:</strong> You can request profile deletion or account termination. Deleting an account wipes private database logs while tournament listings might store generic historic results to maintain ladder consistency.</li>
            </ul>
          </section>

          {/* 7. Data Security */}
          <section id="section-security" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">07</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">Data Protection Measures</h3>
            </div>
            <p>
              We implement industry-standard database architecture and TLS encryption algorithms to guard system credentials. When you transfer information over our portal, it transits securely via cryptographic handshakes. However, no communication technology is 100% immune; protect your passwords to safeguard your access points.
            </p>
          </section>

          {/* 8. Children's Privacy */}
          <section id="section-children" className="scroll-mt-4 space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <div className="p-1 px-1.5 bg-rose-500/10 border border-rose-500/20 rounded font-mono text-xs text-rose-500 font-extrabold">08</div>
              <h3 className="text-md font-black text-white uppercase tracking-wider">Children's Privacy Protection</h3>
            </div>
            <p>
              Gaming Career Hub does not knowingly solicit or collect personal identification datasets from anyone under the age of 13. If you believe your child has registered profile records without authorization, please contact us immediately to purge those records from our servers.
            </p>
          </section>

          {/* 9. Contact Information */}
          <section id="section-contact" className="scroll-mt-4 p-4 bg-zinc-950/80 border border-zinc-900 rounded-2xl space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-900">
              <Mail className="w-4 h-4 text-rose-500" />
              <h3 className="text-md font-black text-white uppercase tracking-wider">Contact Administration</h3>
            </div>
            <p className="text-xs">
              If you have any questions or require support regarding these data terms, contact us through our administrative dispatch desk:
            </p>
            <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-xl space-y-1 text-xs">
              <p className="m-0 text-zinc-400 font-mono">
                📧 Legal & Support Email: <strong className="text-rose-500 hover:underline">pkumar15187@gmail.com</strong>
              </p>
              <p className="m-0 text-zinc-400 font-mono">
                🌐 Main Platform Domain: <strong className="text-white">Gaming Career Hub</strong>
              </p>
            </div>
          </section>

        </div>

      </div>

      {/* Dynamic Back-to-Top Area */}
      <div className="pt-6 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
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
