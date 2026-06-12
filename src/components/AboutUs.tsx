import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Users, 
  UserCheck, 
  Wallet, 
  ShieldCheck, 
  Sparkles, 
  Mail, 
  ChevronRight, 
  ArrowLeft,
  Target,
  Zap,
  Flame,
  Award
} from 'lucide-react';

interface AboutProps {
  onBackToPortal: () => void;
}

export default function AboutUs({ onBackToPortal }: AboutProps) {
  const capabilities = [
    {
      icon: <Trophy className="w-5 h-5 text-rose-500" />,
      title: "Tournament Management",
      desc: "Instant automated leagues lobbies creation, live brackets, seedings, registration validations, and champion prize declarations."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-cyan-400" />,
      title: "Player Profiles",
      desc: "Robust customizable professional profile credentials showing gamer tags, K/D ratios, skill metrics (MMR), achievements, and comment walls."
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: "Team Management",
      desc: "Form squads, seek missing roles via recruitment boards, customize insignias, and manage pending rosters seamlessly."
    },
    {
      icon: <Wallet className="w-5 h-5 text-amber-500" />,
      title: "Diamond Wallet Engine",
      desc: "Three-tier wallet tracking: topup_diamonds, winning_diamonds, and locked_withdraw_diamonds preventing double-withdrawals."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      title: "Membership Perks Tiers",
      desc: "Silver, Gold, and Platinum premium subscription pipelines granting profile modifications, customization decals, and multipliers."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-pink-500" />,
      title: "Gaming Community Hub",
      desc: "Sponsor marketplace interaction, custom featured profiles campaign, profile comment feedback systems, and referral networking."
    },
    {
      icon: <Flame className="w-5 h-5 text-rose-400" />,
      title: "Competitive Opportunities",
      desc: "Play-to-earn pipelines with immediate UPI payment clearances, refund mechanisms on empty seats, and automated tournament lobbies."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 space-y-12 text-zinc-300 font-sans leading-relaxed">
      
      {/* Back button / header metadata */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
        <button 
          onClick={onBackToPortal}
          className="flex items-center gap-2 text-xs font-mono font-bold text-rose-500 hover:text-rose-400 uppercase tracking-widest bg-rose-500/10 hover:bg-rose-500/20 px-3 py-1.5 rounded-lg border border-rose-500/10 transition-all duration-150"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Portal
        </button>
        <span className="text-[10px] text-zinc-550 font-mono tracking-widest uppercase">
          ABOUT PLATFORM • CORP INTEL
        </span>
      </div>

      {/* Hero Header Area */}
      <div className="relative overflow-hidden p-6 md:p-10 bg-zinc-950/60 border border-zinc-900 rounded-3xl shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Target className="w-64 h-64 text-rose-500 animate-spin-slow" />
        </div>
        
        <div className="relative space-y-4 z-10">
          <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2.5 py-1 rounded-md w-fit">
            <Zap className="w-3.5 h-3.5" />
            Empowering Esports Elite
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-title uppercase tracking-tighter text-white">
            Gaming <span className="text-rose-500 font-bold">Career Hub</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-md font-sans max-w-2xl leading-relaxed">
            We are a vanguard competitive platform built from scratch to calibrate players, host secure tournaments tournaments, support custom team recruiters, and reward gaming excellence. No simulation, no mock infrastructures—just robust, pure electronic sports matchmaking.
          </p>
        </div>
      </div>

      {/* Corporate Mission Banner */}
      <div className="p-5 bg-gradient-to-r from-zinc-950/80 via-zinc-950/90 to-rose-950/20 border border-zinc-900 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-1.5">
          <h4 className="text-xs font-black tracking-wider text-rose-400 uppercase font-mono">Our Prime Mission</h4>
          <p className="text-xs text-zinc-400 m-0 leading-relaxed">
            To provide grassroots competitive gamers with professional tier stats telemetry, secure wallets, and a merit-backed ladder system where talent meets real sponsor monetization rewards.
          </p>
        </div>
        <div className="flex justify-start md:justify-end">
          <div className="flex items-center gap-2 px-3 py-2 bg-rose-500/10 border border-rose-500/20 rounded-xl">
            <Award className="w-5 h-5 text-rose-505" />
            <div className="text-left leading-none">
              <span className="text-[14px] font-black font-mono text-white block">100% SECURE</span>
              <span className="text-[8.5px] text-zinc-500 tracking-wider uppercase font-mono">Verified Match outcomes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Capabilities List Grid */}
      <div className="space-y-6">
        <div className="flex flex-col">
          <span className="text-[10px] text-rose-500 font-mono uppercase tracking-widest font-bold">Comprehensive Services</span>
          <h2 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight mt-0.5">Core System Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="p-4 md:p-5 bg-zinc-950/40 hover:bg-zinc-950/75 border border-zinc-900/60 hover:border-zinc-800 rounded-2xl flex gap-4 transition-all duration-150 group"
            >
              <div className="p-2 bg-zinc-900 group-hover:bg-zinc-850 rounded-xl shrink-0 h-fit border border-zinc-850">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold text-white tracking-wide uppercase group-hover:text-rose-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact administrative Area */}
      <div className="p-4 md:p-6 bg-zinc-950/80 border border-zinc-900 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-1.5">
          <h3 className="text-xs font-black text-rose-400 font-mono uppercase tracking-wider">Join the calibration movement</h3>
          <p className="text-xs text-zinc-400 m-0">
            For questions, corporate sponsorships, and integration proposals, contact us under the primary administrative email handle.
          </p>
        </div>
        <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-xl text-center md:text-left shrink-0">
          <span className="text-[9.5px] text-zinc-550 block font-mono uppercase tracking-wider">PLATFORM ADMINISTRATION</span>
          <a href="mailto:pkumar15187@gmail.com" className="text-xs font-mono font-bold text-rose-450 hover:underline hover:text-rose-400 tracking-tight block mt-0.5">
            pkumar15187@gmail.com
          </a>
        </div>
      </div>

      {/* Footer Area */}
      <div className="pt-6 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-550 font-mono">
        <span>© 2026 Gaming Career Hub • Info Portfolio</span>
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
