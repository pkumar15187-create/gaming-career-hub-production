import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Trophy, 
  Compass, 
  MapPin, 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle, 
  ChevronDown, 
  Sparkles,
  Award,
  TrendingUp,
  Flame,
  Users,
  Target,
  FileCheck
} from 'lucide-react';

import { FAQItem } from '../types';

interface HomeAdditionsProps {
  faqItems?: FAQItem[];
  onViewAll?: () => void;
}

export default function HomeAdditions({ faqItems = [], onViewAll }: HomeAdditionsProps) {
  const [openFAQ, setOpenFAQ] = useState<Record<number, boolean>>({});


  const toggleFAQ = (idx: number) => {
    setOpenFAQ(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const careerTracks = [
    {
      title: "Tactical Pro Athlete",
      icon: <Flame className="w-5 h-5 text-rose-500" />,
      desc: "Maintain peak MMR, build verified tournament statistics blocks, and show of your clutch potential to recruitment scouts."
    },
    {
      title: "Strategic Coach & Analyst",
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      desc: "Analyze squad rotation telemetry, study drop-spot efficiency ratios, and draft custom strategy playbooks."
    },
    {
      title: "Content Creator & Caster",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      desc: "Build your streaming brand, cast live match lobbies, and connect with corporate sponsors looking for brand ambassadors."
    }
  ];

  const tournamentSteps = [
    {
      stage: "01",
      title: "Construct Portfolio",
      desc: "Register your secure Gamer ID, connect gaming handles, and verify your statistics (K/D ratios, MMR standings)."
    },
    {
      stage: "02",
      title: "Enlist in Matchmaking Lobbies",
      desc: "Browse scheduled battle arenas on our tournaments grid and secure seats using your virtual diamond balance."
    },
    {
      stage: "03",
      title: "Compete & Claim Rewards",
      desc: "Enter playrooms with original IDs. After matches conclude, submit screenshots for automated referee audit and instant wallet disbursement."
    }
  ];

  const benefits = [
    {
      title: "Zero Artificial Barriers",
      desc: "Every core platform feature remains 100% free and open to aspiring grassroots players. No registration gatekeeping."
    },
    {
      title: "Secure Wallet Operations",
      desc: "Our virtual diamond model uses separate tracking variables, checking transactions against double-withdrawal exploits."
    },
    {
      title: "Sponsor Pitch Marketplace",
      desc: "Skip emails altogether. Directly deliver curated sponsorship pitches to major hardware and beverage brands."
    },
    {
      title: "Instant Verification Pipeline",
      desc: "Our automated tournament lobby clearance system reconciles results within minutes of screenshot uploads."
    }
  ];

  const faqs = [
    {
      q: "What is Gaming Career Hub and how does it help gamers?",
      a: "Gaming Career Hub is a vanguard digital platform designed to help grassroots gamers transition into professional esports. We provide players with verified statistics profiles, custom squad recruitment boards, secure wallet engines for matchmaking rewards, and direct portals to pitch global sponsorship brands."
    },
    {
      q: "How do I participate in tournaments hosted on the portal?",
      a: "First, register and complete your gamer profile with your verified game handles (like BGMI character ID or Valorant tag). Head over to the Arena Meetups tab, pick an upcoming matchmaking lobby, secure a seat using your topup_diamonds, and compete at the scheduled hour."
    },
    {
      q: "How are tournament outcomes and prize pools verified?",
      a: "We employ an audited double-confirmation pipeline. Players upload match victory screenshots at the end of matches. Our referee panel matches these uploads against telemetry feeds, and verified winnings are deposited directly into your winning_diamonds wallet."
    },
    {
      q: "Are there any service fees for withdrawing from my wallet?",
      a: "No, we do not charge service fees on withdrawals! Only active winning_diamonds are eligible. Once a withdrawal is placed, funds transition into locked_withdraw_diamonds to protect against double transactions and are cleared directly via UPI within 7-14 banking days."
    },
    {
      q: "How can squads find and recruit team members?",
      a: "Our squad Finder board allows teams to post specific role requirements (e.g., looking for an aggressive IGL or support sniper for BGMI). Aspiring players can view these recruitment cards and apply directly by sending their verified profile logs."
    }
  ];

  return (
    <div className="space-y-16 mt-16 text-zinc-350">
      
      {/* 1. COMPREHENSIVE PLATFORM INTRODUCTION */}
      <section className="p-6 md:p-8 bg-zinc-950/60 border border-zinc-900 rounded-3xl relative overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-lg text-xs font-mono font-bold uppercase tracking-wider">
              About Gaming Career Hub
            </span>
          </div>
          <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight">
            The Digital Frontier for <span className="text-rose-505 text-rose-500">Esports Excellence</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans">
            Gaming Career Hub is built entirely from the ground up to solve the most difficult issues facing competitive gamers today: unverifiable skill claims, non-transparent tournament systems, and inaccessible brand sponsorships. 
          </p>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans mt-2">
            We provide players with a verified, secure portfolio ID where stats are audited, team recruitments are live and active, and sponsor deals are structured fairly. No mock setups, no unrequested fluff—just direct esports advancement.
          </p>
        </div>
        <div className="p-5 bg-zinc-900/40 border border-zinc-850 rounded-2xl flex flex-col gap-3 justify-center items-center text-center">
          <ShieldCheck className="w-10 h-10 text-emerald-400 animate-pulse" />
          <div>
            <h5 className="text-xs font-mono font-bold uppercase text-white tracking-wider">100% Verified</h5>
            <p className="text-[10px] text-zinc-550 mt-1 leading-normal uppercase">
              ANTI-CHEAT COMPILATION • REFEREE SCREEN AUDITS
            </p>
          </div>
        </div>
      </section>

      {/* 2. ESPORTS CAREER PATHWAY GUIDANCE */}
      <section className="space-y-6">
        <div className="flex flex-col">
          <span className="text-[10px] text-rose-500 font-mono uppercase tracking-widest font-bold">Career Calibration</span>
          <h2 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight mt-0.5">Professional Career Guidance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerTracks.map((track, idx) => (
            <div key={idx} className="p-5 bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 rounded-2xl space-y-3.5 transition-all group">
              <div className="p-2.5 bg-zinc-90 w-fit rounded-xl border border-zinc-850 group-hover:bg-zinc-850 transition-colors">
                {track.icon}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-black text-white uppercase tracking-wider group-hover:text-rose-400 transition-colors">
                  {track.title}
                </h4>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed m-0">
                  {track.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TOURNAMENT PARTICIPATION GUIDE */}
      <section className="space-y-6">
        <div className="flex flex-col">
          <span className="text-[10px] text-rose-500 font-mono uppercase tracking-widest font-bold">Step-by-Step playbook</span>
          <h2 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight mt-0.5">Tournament Participation Guide</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tournamentSteps.map((step, idx) => (
            <div key={idx} className="p-5 bg-zinc-950/50 border border-zinc-900 rounded-2xl relative overflow-hidden flex gap-4">
              <div className="text-2xl font-mono font-black text-rose-500/20 absolute -top-1 -right-1 leading-none p-4 select-none">
                {step.stage}
              </div>
              <div className="space-y-2 relative z-10">
                <h4 className="text-xs font-mono font-black text-rose-500 uppercase tracking-widest">
                  STAGE {step.stage}
                </h4>
                <h3 className="text-sm font-black text-white uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed m-0">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. USER BENEFITS & PLATFORM FEATURES */}
      <section className="space-y-6">
        <div className="flex flex-col">
          <span className="text-[10px] text-rose-500 font-mono uppercase tracking-widest font-bold">Why Gaming Career hub?</span>
          <h2 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight mt-0.5">Member Benefits & Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-4 md:p-5 bg-zinc-950/40 hover:bg-zinc-950/80 border border-zinc-900 rounded-2xl flex gap-4 transition-all">
              <div className="p-2 bg-rose-500/10 rounded-xl h-fit border border-rose-550/10 shrink-0">
                <CheckCircle className="w-4 h-4 text-rose-500" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black text-white uppercase tracking-wider">
                  {benefit.title}
                </h4>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed m-0">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SAFETY AND FAIR PLAY POLICY */}
      <section className="p-5 bg-zinc-950/70 border border-rose-950/30 rounded-2xl flex flex-col md:flex-row gap-5 items-start md:items-center">
        <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl shrink-0">
          <AlertTriangle className="w-6 h-6 text-rose-500" />
        </div>
        <div className="space-y-1.5 flex-1">
          <h4 className="text-xs font-black font-mono text-rose-400 uppercase tracking-widest">
            🛡️ Platform Fair Play & Safety Policy
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Gaming Career Hub enforces a strict zero-tolerance policy against hacking, scripting, macro injections, or any third-party engine modifications. All registered players submit to hardware-level profiles banning in event of cheating. We collaborate directly with publisher anti-cheat squads of BGMI, Valorant, and COD to guarantee competitive parity.
          </p>
        </div>
      </section>

      {/* 6. FAQ (ACCORDION SECTION) */}
      <section className="space-y-6">
        <div className="flex flex-col">
          <span className="text-[10px] text-rose-500 font-mono uppercase tracking-widest font-bold">Support Database</span>
          <h2 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight mt-0.5">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3 max-w-4xl">
          {(() => {
            const activeFaqs = faqItems?.length > 0 
              ? faqItems.filter(f => f.status === 'published').slice(0, 6)
              : faqs.map((f, i) => ({ id: `static-${i}`, question: f.q, answer: f.a }));

            return activeFaqs.map((faq, idx) => {
              const isOpen = openFAQ[idx] || false;
              return (
                <div 
                  key={faq.id || idx} 
                  className="bg-zinc-950/80 border border-zinc-900 rounded-xl overflow-hidden transition-all duration-150"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:text-white transition-colors gap-4"
                  >
                    <span className="text-xs md:text-sm font-extrabold text-zinc-250">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-150 shrink-0 ${isOpen ? 'rotate-180 text-rose-500' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs md:text-xs text-zinc-400 leading-relaxed border-t border-zinc-900 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            });
          })()}
        </div>

        {onViewAll && (
          <div className="pt-2">
            <button
              onClick={onViewAll}
              className="px-6 py-3 bg-rose-500 hover:bg-rose-600 border border-rose-650 text-white rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-rose-950/20"
            >
              View All FAQs ({faqItems?.length || 50}+)
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
