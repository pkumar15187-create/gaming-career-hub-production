import React from 'react';
import { 
  Trophy, 
  Gamepad2, 
  Users, 
  Award, 
  Flame, 
  Coins, 
  TrendingUp, 
  ChevronRight, 
  Calendar, 
  ArrowRight, 
  BookOpen, 
  Smartphone, 
  Sparkles, 
  Layers, 
  Lock, 
  Shield,
  ShieldCheck,
  CheckCircle2,
  Gift
} from 'lucide-react';
import { Tournament, AdminOffer, UserProfile, FAQItem } from '../types';
import { articles, Article } from '../data/articles';
import HomeAdditions from './HomeAdditions';

interface HomeLandingProps {
  currentUser: UserProfile | null;
  tournaments: Tournament[];
  offers: AdminOffer[];
  onAuthAction: (type: 'login' | 'register') => void;
  onNavigateSection: (section: string) => void;
  addToast: (msg: string, type: 'success' | 'error' | 'warning' | 'info') => void;
  blogArticles?: Article[];
  faqItems?: FAQItem[];
}

export default function HomeLanding({
  currentUser,
  tournaments,
  offers,
  onAuthAction,
  onNavigateSection,
  addToast,
  blogArticles,
  faqItems
}: HomeLandingProps) {

  // Filter only active offers that fall within start_date and end_date
  const activeOffers = offers.filter(offer => {
    if (!offer.active_status) return false;
    const now = new Date();
    
    if (offer.start_date) {
      const start = new Date(offer.start_date);
      if (now < start) return false;
    }
    
    if (offer.end_date) {
      const end = new Date(offer.end_date);
      if (now > end) return false;
    }
    
    return true;
  });

  // Get up to 3 upcoming tournaments
  const featuredTourneys = tournaments
    .filter(t => t.status === 'upcoming' || t.status === 'live')
    .slice(0, 3);

  const articlesLocal = (blogArticles || articles).filter(a => a.status !== 'draft');

  // Get the 3 latest articles for preview
  const previewArticles = articlesLocal.slice(0, 3);

  const handleRegisterTournamentClick = (tournamentId: string) => {
    if (!currentUser) {
      addToast("Authentication Needed: Please login to reserve your competitive slots.", "warning");
      onAuthAction('login');
    } else {
      window.location.hash = '#tournaments';
      onNavigateSection('tournaments');
    }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative p-8 md:p-16 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-800/80 rounded-3xl overflow-hidden flex flex-col justify-between min-h-[460px] shadow-2xl">
        {/* Glow ambient meshes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="space-y-6 max-w-3xl relative z-10 my-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/30 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-rose-500 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            Empowering Grassroot Esport Talents
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight leading-none uppercase">
            GAMING CAREER HUB <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500">
              Where Players Turn Pro
            </span>
          </h1>
          
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
            The ultimate open digital portal designed exclusively for competitive esports. Claim your verified gamer portfolio, find active squads, sign-up for audited cashback arena matches, and showcase your achievements directly to global hardware and beverage brands.
          </p>

          {/* Action buttons with strict AdSense button spacing separation to avoid accidental ads overlays */}
          <div className="flex flex-wrap gap-4 pt-4 relative z-10">
            <button
              id="hero-join-tournaments-btn"
              onClick={() => {
                window.location.hash = '#tournaments';
                onNavigateSection('tournaments');
              }}
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold font-mono text-xs px-6 py-4 rounded-xl uppercase tracking-wider transition-all shadow-lg shadow-rose-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Trophy className="w-4 h-4" />
              Join Tournaments
            </button>

            {currentUser ? (
              <button
                id="hero-go-dashboard-btn"
                onClick={() => {
                  window.location.hash = '#dashboard';
                  onNavigateSection('dashboard');
                }}
                className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-bold font-mono text-xs px-6 py-4 rounded-xl uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                Go to My Dashboard
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <>
                <button
                  id="hero-register-btn"
                  onClick={() => onAuthAction('register')}
                  className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-bold font-mono text-xs px-6 py-4 rounded-xl uppercase tracking-wider transition-all cursor-pointer"
                >
                  Create Portfolio ID
                </button>
                <button
                  id="hero-login-btn"
                  onClick={() => onAuthAction('login')}
                  className="bg-zinc-950 border border-zinc-850 hover:bg-zinc-900 text-zinc-400 hover:text-white font-mono text-xs px-5 py-4 rounded-xl uppercase transition-all cursor-pointer"
                >
                  Sign In
                </button>
              </>
            )}

            <button
              id="hero-download-btn"
              onClick={() => {
                window.location.hash = '#download';
                onNavigateSection('download');
              }}
              className="px-5 py-4 bg-zinc-950/40 border border-zinc-850 hover:border-zinc-700 rounded-xl text-zinc-400 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-rose-500" />
              📲 NATIVE APP
            </button>
          </div>
        </div>
      </section>

      {/* 2. PLATFORM OVERVIEW */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded">
            Integrated Ecosystem
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
            Comprehensive Platform Overview
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-sans">
            Gaming Career Hub is not just a match finder; it is a full-stack digital career infrastructure bringing transparency, verification, and income opportunities to competitive esports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-2xl space-y-4 transition-all">
            <div className="p-3 bg-rose-500/10 rounded-xl w-fit text-rose-500">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase">Esports Tournaments</h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
              Enlist in regular BGMI, Valorant, Free Fire tournaments with real prize pools. Enjoy fully automated point allocations, double-verified referee screenshot audits, and transparent rules.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-2xl space-y-4 transition-all">
            <div className="p-3 bg-cyan-500/10 rounded-xl w-fit text-cyan-400">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase">Player Profiles</h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
              Equip your profile sheet with live career statistics, game ratios, verified platform badges, and embed streaming clips. Showcase your skills securely with zero inflated claims.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-2xl space-y-4 transition-all">
            <div className="p-3 bg-amber-500/10 rounded-xl w-fit text-amber-500">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase">Squad Finder</h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
              Assemble or apply to elite gaming squads. Review leader role parameters, test mechanical synergies, and match up with active team leaders in direct in-app messaging.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-2xl space-y-4 transition-all">
            <div className="p-3 bg-emerald-500/10 rounded-xl w-fit text-emerald-400">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase">Diamond Wallets</h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
              Enjoy zero transaction friction. Pay arena entry requirements with Topup Diamonds, track match rewards in Winning Diamonds, and request UPI disbursements easily.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-2xl space-y-4 transition-all">
            <div className="p-3 bg-purple-500/10 rounded-xl w-fit text-purple-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase">Premium Membership</h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
              Activate Silver, Gold, or Platinum tiers. Unlock custom neon profile rings, premium profile background banners, and premium support channels instantly.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-2xl space-y-4 transition-all">
            <div className="p-3 bg-rose-500/10 rounded-xl w-fit text-rose-500">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase">Sponsorship Zone</h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
              Design direct commercial pitch proposals. Reach major brands, leverage verified media kit viewer matrices, and sign sponsorship contracts.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ACTIVE AMIN OFFERS / PROMOTIONS (BANNER SLOTS) */}
      {activeOffers.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-zinc-900 pb-3">
            <Gift className="w-5 h-5 text-amber-500 animate-bounce" />
            <h3 className="text-lg font-black font-display text-white uppercase tracking-tight">
              Featured Promotions & Latest Offers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeOffers.map((offer) => (
              <div 
                key={offer.id} 
                className="relative bg-zinc-950 border border-zinc-900/80 rounded-2xl overflow-hidden shadow-xl hover:border-zinc-800 transition-all group flex flex-col md:flex-row h-full"
              >
                {/* Banner Thumbnail */}
                <div className="w-full md:w-2/5 aspect-video md:aspect-auto md:min-h-full overflow-hidden bg-zinc-900 shrink-0 relative">
                  <img 
                    src={offer.banner_image || "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60"} 
                    alt={offer.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none"></div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase bg-rose-500/10 text-rose-500 border border-rose-500/25 px-2.5 py-0.5 rounded font-bold">
                      ADMIN SPECIAL OFFER
                    </span>
                    <h4 className="text-base font-black text-white uppercase tracking-tight leading-tight group-hover:text-amber-400 transition-colors">
                      {offer.title}
                    </h4>
                    <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                      {offer.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a 
                      href={offer.cta_link} 
                      onClick={(e) => {
                        // Safe routing support
                        if (offer.cta_link?.startsWith('#')) {
                          e.preventDefault();
                          const targetSection = offer.cta_link.substring(1);
                          window.location.hash = offer.cta_link;
                          onNavigateSection(targetSection);
                        }
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold font-mono text-xs uppercase rounded-lg tracking-wider transition-colors pointer-events-auto"
                    >
                      {offer.cta_text || 'Claim Offer'}
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. CLINCHING FEATURED TOURNAMENTS */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-4">
          <div>
            <span className="text-[10px] text-rose-500 font-mono uppercase tracking-widest font-bold">Active Arenas</span>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mt-0.5">
              Featured Tournament Brackets
            </h2>
          </div>
          <button
            onClick={() => {
              window.location.hash = '#tournaments';
              onNavigateSection('tournaments');
            }}
            className="text-xs text-rose-400 font-mono hover:underline flex items-center gap-1 shrink-0 uppercase font-black"
          >
            Browse All Battlegrounds ({tournaments.length})
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {featuredTourneys.length === 0 ? (
          <div className="p-8 text-center bg-zinc-950/40 border border-zinc-900 rounded-2xl text-zinc-500 text-xs font-mono">
            No live tournament registries currently listed. Stay tuned!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTourneys.map((t) => {
              const activeRegCount = t.registrants ? t.registrants.length : 0;
              const maxCount = t.registrationType === 'team' ? t.max_teams : (t.max_players || 48);
              const seatsLeft = Math.max(0, maxCount - activeRegCount);

              return (
                <div key={t.id} className="bg-zinc-950/80 border border-zinc-900 hover:border-zinc-800 rounded-2xl overflow-hidden shadow-lg transition-all group flex flex-col justify-between">
                  <div className="h-36 bg-zinc-900 relative">
                    <img 
                      src={t.banner_url || "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60"} 
                      alt={t.title} 
                      className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/70 border border-zinc-800 text-[10px] font-mono font-bold text-rose-400 uppercase">
                      💰 Pool: {t.prize_pool || t.prizePool}
                    </div>
                    
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 px-2 py-1 rounded backdrop-blur border border-zinc-850">
                      <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-[10px] font-mono text-zinc-300 font-bold uppercase">{t.game}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-black text-white hover:text-rose-400 transition-colors uppercase line-clamp-1">
                        {t.title}
                      </h4>
                      <p className="text-zinc-400 text-[11px] leading-relaxed line-clamp-2 font-sans italic">
                        {t.description || "Enter the arena to prove your operational skills and rank on the standings."}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-2 border-t border-zinc-900 text-xs font-mono">
                      <div className="flex items-center justify-between text-zinc-550 text-[11px]">
                        <span>Entry Fee:</span>
                        <span className="text-emerald-400 font-bold">{t.entry_fee ? `♦️ ${t.entry_fee}` : 'FREE'}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-zinc-550 text-[11px]">
                        <span>Format:</span>
                        <span className="text-zinc-300 capitalize">{t.registrationType} Play</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-zinc-550">Lobby Slots:</span>
                        <span className={`font-bold ${seatsLeft === 0 ? 'text-rose-500' : 'text-zinc-300'}`}>
                          {seatsLeft === 0 ? 'Lobby Full' : `${seatsLeft} / ${maxCount} seats left`}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleRegisterTournamentClick(t.id)}
                        className="w-full text-center py-2.5 bg-rose-500/10 hover:bg-rose-500 border border-rose-500/25 hover:border-transparent text-rose-400 hover:text-white font-bold font-mono text-xs uppercase rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Enlist Seat
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="space-y-8 bg-zinc-950/40 p-8 rounded-3xl border border-zinc-900">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-[10px] text-rose-500 font-mono uppercase tracking-widest font-bold">Execution Playbook</span>
          <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
            How It Works
          </h2>
          <p className="text-zinc-400 text-xs font-sans">
            Your seamless competitive walkthrough from signup to instant wallet disbursal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center font-mono relative">
          <div className="space-y-2.5 p-4 rounded-xl relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-5xl font-black text-rose-500/10 select-none">
              01
            </span>
            <div className="w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center font-bold text-sm mx-auto relative z-10">
              ID
            </div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider relative z-10">
              Create Account
            </h4>
            <p className="text-[10.5px] text-zinc-450 leading-relaxed max-w-[180px] mx-auto m-0">
              Verify your email handles, input BGMI character IDs or Valorant tags, and generate your portfolio.
            </p>
          </div>

          <div className="space-y-2.5 p-4 rounded-xl relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-5xl font-black text-rose-500/10 select-none">
              02
            </span>
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm mx-auto relative z-10">
              GO
            </div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider relative z-10">
              Join Tournament
            </h4>
            <p className="text-[10.5px] text-zinc-450 leading-relaxed max-w-[180px] mx-auto m-0">
              Browse upcoming battle arenas, review scheduled slots, and click Enlist Seat to confirm placement.
            </p>
          </div>

          <div className="space-y-2.5 p-4 rounded-xl relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-5xl font-black text-rose-500/10 select-none">
              03
            </span>
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center font-bold text-sm mx-auto relative z-10">
              Pay
            </div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider relative z-10">
              Pay Entry
            </h4>
            <p className="text-[10.5px] text-zinc-450 leading-relaxed max-w-[180px] mx-auto m-0">
              Deduct standard tournament entry bounds seamlessly from your persistent virtual diamond wallet reserves.
            </p>
          </div>

          <div className="space-y-2.5 p-4 rounded-xl relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-5xl font-black text-rose-500/10 select-none">
              04
            </span>
            <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm mx-auto relative z-10">
              War
            </div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider relative z-10">
              Play Match
            </h4>
            <p className="text-[10.5px] text-zinc-450 leading-relaxed max-w-[180px] mx-auto m-0">
              Compete strictly on custom in-game lobbies. Admin staff hosts Rooms dynamically at the scheduled hours.
            </p>
          </div>

          <div className="space-y-2.5 p-4 rounded-xl relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-5xl font-black text-rose-500/10 select-none">
              05
            </span>
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm mx-auto relative z-10">
              Win
            </div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider relative z-10">
              Win Rewards
            </h4>
            <p className="text-[10.5px] text-zinc-450 leading-relaxed max-w-[180px] mx-auto m-0">
              Upload match outcome screenshots. Verified outcomes result in instant token payout to your winnings reserves.
            </p>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE GAMING CAREER HUB */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded">
            Our Advantage
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
            Why Choose Gaming Career Hub?
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-sans mx-auto max-w-xl">
            We operate on integrity, verification, and speed. Skip non-auditable claims and enter the professional arena directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-2xl flex gap-4 transition-all">
            <div className="p-2.5 bg-rose-500/10 rounded-xl h-fit border border-rose-550/10 shrink-0 text-rose-400">
              <ShieldCheck className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">
                Fair & Clean Tournaments
              </h4>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed m-0 font-sans">
                Zero tolerances for hacks, scripts, or macro injections. Referee screenshot checks and double reconciliation ensure competitive parity.
              </p>
            </div>
          </div>

          <div className="p-5 bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-2xl flex gap-4 transition-all">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl h-fit border border-cyan-550/10 shrink-0 text-cyan-400">
              <LightningIcon className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">
                Fast & Frictionless Registration
              </h4>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed m-0 font-sans">
                Secure your tournament place in seconds. Our database automatically reads your character eligibility parameters to register you instantly.
              </p>
            </div>
          </div>

          <div className="p-5 bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-2xl flex gap-4 transition-all">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl h-fit border border-emerald-550/10 shrink-0 text-emerald-400">
              <Lock className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">
                Secure Diamond Wallets
              </h4>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed m-0 font-sans">
                A dual balance system checks and prevents race conditions. Your winnings can be safely disbursed directly via popular UPI payment methods.
              </p>
            </div>
          </div>

          <div className="p-5 bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-2xl flex gap-4 transition-all">
            <div className="p-2.5 bg-amber-500/10 rounded-xl h-fit border border-amber-550/10 shrink-0 text-amber-500">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">
                Advanced Custom Room Mechanics
              </h4>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed m-0 font-sans">
                Specifically built for Free Fire MAX and BGMI custom lobbies. Automatic dynamic countdowns push ID and password keys directly to approved registrants' profiles.
              </p>
            </div>
          </div>

          <div className="p-5 bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-2xl flex gap-4 transition-all">
            <div className="p-2.5 bg-blue-500/10 rounded-xl h-fit border border-blue-550/10 shrink-0 text-blue-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">
                End-To-End Prize Tracking
              </h4>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed m-0 font-sans">
                Never miss a claim. Match rankings and prize pools are permanently logged on the global leaderboard, keeping administrative records completely public and auditable.
              </p>
            </div>
          </div>

          <div className="p-5 bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 rounded-2xl flex gap-4 transition-all">
            <div className="p-2.5 bg-purple-500/10 rounded-xl h-fit border border-purple-550/10 shrink-0 text-purple-400">
              <Users className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">
                Complete Gamer Resume Profile
              </h4>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed m-0 font-sans">
                Gather badges, aggregate previous squad milestones, list tournament rankings history, and build a stellar gaming portfolio ready to pitch to recruiters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BLOG / GUIDES PREVIEW */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-4">
          <div>
            <span className="text-[10px] text-rose-500 font-mono uppercase tracking-widest font-bold">Intel Room</span>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mt-0.5">
              Latest Esports Strategy Guides
            </h2>
          </div>
          <button
            onClick={() => {
              window.location.hash = '#blog';
              onNavigateSection('blog');
            }}
            className="text-xs text-rose-400 font-mono hover:underline flex items-center gap-1 shrink-0 uppercase font-black"
          >
            Access All Guides ({articlesLocal.length})
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewArticles.map((article) => (
            <div 
              key={article.id} 
              onClick={() => {
                window.location.hash = `#blog/${article.slug}`;
                onNavigateSection('blog');
              }}
              className="bg-zinc-950 border border-zinc-900 hover:border-zinc-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-video bg-zinc-900 overflow-hidden relative">
                  <img 
                    src={article.image || "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60"} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-rose-500/10 border border-rose-550/20 text-[10px] font-mono text-rose-400 font-bold uppercase">
                    {article.category}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-3 text-[10px] text-zinc-500 font-mono">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight group-hover:text-rose-400 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-sans line-clamp-2 italic">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <span className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Masterclass
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. EMBED COMPREHENSIVE FAQS, POLICIES SECTION FROM HOMEADDITIONS */}
      <HomeAdditions faqItems={faqItems} onViewAll={() => onNavigateSection('faq')} />

      {/* Legal & Support Section */}
      <section className="bg-zinc-950/60 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6 mt-12 font-mono">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-zinc-850 pb-4 gap-4">
          <div>
            <h3 className="text-sm font-black text-white tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              LEGAL & SUPPORT ZONE
            </h3>
            <p className="text-[11px] text-zinc-550 font-sans mt-0.5">
              Verified compliance matrices & legal declarations. AdSense-ready regulatory hub.
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-[10px] text-zinc-400 block uppercase font-bold">OPERATIONS INTEGRITY DESK</span>
            <a href="mailto:pkumar15187@gmail.com" className="text-xs text-rose-450 hover:text-rose-400 font-bold underline transition-colors">
              pkumar15187@gmail.com
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-[11px]">
          <a
            href="#privacy-policy"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#privacy-policy';
              onNavigateSection('privacy');
            }}
            className="p-3 bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-850 hover:border-zinc-700 rounded-xl transition-all text-center font-bold text-zinc-300 hover:text-white"
          >
            🛡️ Privacy Policy
          </a>
          <a
            href="#terms-and-conditions"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#terms-and-conditions';
              onNavigateSection('terms');
            }}
            className="p-3 bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-850 hover:border-zinc-700 rounded-xl transition-all text-center font-bold text-zinc-300 hover:text-white"
          >
            📜 Terms & Conditions
          </a>
          <a
            href="#about-us"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#about-us';
              onNavigateSection('about');
            }}
            className="p-3 bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-850 hover:border-zinc-700 rounded-xl transition-all text-center font-bold text-zinc-300 hover:text-white"
          >
            👥 About Us
          </a>
          <a
            href="#contact-us"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#contact-us';
              onNavigateSection('contact');
            }}
            className="p-3 bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-850 hover:border-zinc-700 rounded-xl transition-all text-center font-bold text-zinc-300 hover:text-white"
          >
            📧 Contact Us
          </a>
          <a
            href="#disclaimer"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#disclaimer';
              onNavigateSection('disclaimer');
            }}
            className="p-3 bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-850 hover:border-zinc-700 rounded-xl transition-all text-center font-bold text-zinc-300 hover:text-white"
          >
            ⚖️ Disclaimer
          </a>
          <a
            href="#refund-policy"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#refund-policy';
              onNavigateSection('refund');
            }}
            className="p-3 bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-850 hover:border-zinc-700 rounded-xl transition-all text-center font-bold text-zinc-300 hover:text-white"
          >
            💸 Refund Policy
          </a>
        </div>
      </section>

    </div>
  );
}

// Minimalist vector lightning icon
function LightningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
}
