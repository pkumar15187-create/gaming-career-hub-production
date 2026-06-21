import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  BookOpen, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft, 
  User, 
  UserPlus, 
  LogIn, 
  Award, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Trophy, 
  Key, 
  Users, 
  Ticket, 
  CreditCard, 
  Shield, 
  Settings,
  Mail,
  Zap,
  CheckCircle,
  FileText
} from 'lucide-react';
import { FAQItem } from '../types';

interface FaqCenterProps {
  faqItems: FAQItem[];
  currentUser: any;
  onBackToPortal: () => void;
  addToast: (msg: string, type: 'success' | 'error' | 'warning' | 'info') => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Account': <User className="w-4 h-4 text-rose-450" />,
  'Registration': <UserPlus className="w-4 h-4 text-emerald-450" />,
  'Login': <LogIn className="w-4 h-4 text-blue-450" />,
  'Membership': <Award className="w-4 h-4 text-amber-450" />,
  'Diamond Wallet': <Wallet className="w-4 h-4 text-amber-500" />,
  'Top-up': <ArrowUpRight className="w-4 h-4 text-green-450" />,
  'Withdraw': <ArrowDownLeft className="w-4 h-4 text-red-450" />,
  'Tournaments': <Trophy className="w-4 h-4 text-rose-505" />,
  'Room ID & Password': <Key className="w-4 h-4 text-cyan-400" />,
  'Referral': <Users className="w-4 h-4 text-fuchsia-400" />,
  'Promo Codes': <Ticket className="w-4 h-4 text-sky-400" />,
  'Payments': <CreditCard className="w-4 h-4 text-teal-400" />,
  'Security': <Shield className="w-4 h-4 text-rose-500" />,
  'Technical Issues': <Settings className="w-4 h-4 text-zinc-400" />
};

export default function FaqCenter({ faqItems, currentUser, onBackToPortal, addToast }: FaqCenterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  
  // Support ticket form state
  const [ticketName, setTicketName] = useState(currentUser?.gamer_name || '');
  const [ticketEmail, setTicketEmail] = useState(currentUser?.email || '');
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [isSubmittingTicket, setIsSubmittingTicket] = useState(false);

  const categories = [
    'All',
    'Account',
    'Registration',
    'Login',
    'Membership',
    'Diamond Wallet',
    'Top-up',
    'Withdraw',
    'Tournaments',
    'Room ID & Password',
    'Referral',
    'Promo Codes',
    'Payments',
    'Security',
    'Technical Issues'
  ];

  // Dynamically update SEO head metatags & inject FAQ Schema (JSON-LD)
  useEffect(() => {
    // Save original values
    const originalTitle = document.title;
    const metaDescEl = document.querySelector('meta[name="description"]');
    const originalDesc = metaDescEl ? metaDescEl.getAttribute('content') : '';

    // Set page title
    document.title = "Help & FAQ Hub | Gaming Career Hub - SECURE competitive portal";
    
    // Set meta description
    if (metaDescEl) {
      metaDescEl.setAttribute('content', 'Explore our comprehensive Help Center. Over 50+ thoroughly detailed answers regarding tourneys, withdrawals, wallets, and safety controls.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = "description";
      newMeta.content = "Explore our comprehensive Help Center. Over 50+ thoroughly detailed answers regarding tourneys, withdrawals, wallets, and safety controls.";
      document.head.appendChild(newMeta);
    }

    // Generate FAQ schema (JSON-LD)
    const FAQList = faqItems
      .filter(item => item.status === 'published')
      .slice(0, 15) // take top 15 for search layout
      .map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }));

    const schemaJSON = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQList
    };

    const scriptEl = document.createElement('script');
    scriptEl.type = "application/ld+json";
    scriptEl.id = "faq-json-ld-schema";
    scriptEl.text = JSON.stringify(schemaJSON);
    document.head.appendChild(scriptEl);

    // Smooth scroll to top of viewport
    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      // Revert metatags
      document.title = originalTitle;
      if (metaDescEl && originalDesc) metaDescEl.setAttribute('content', originalDesc);
      // Remove JSON-LD script on unmount
      const injectedScript = document.getElementById('faq-json-ld-schema');
      if (injectedScript) injectedScript.remove();
    };
  }, [faqItems]);

  // Sync user info when logged in state changes
  useEffect(() => {
    if (currentUser) {
      setTicketName(currentUser.gamer_name || '');
      setTicketEmail(currentUser.email || '');
    }
  }, [currentUser]);

  // Filter criteria 
  const filteredFaqs = faqItems.filter(item => {
    if (item.status === 'draft') return false;
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleSendSupportTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketName || !ticketEmail || !ticketMessage || !ticketSubject) {
      addToast("Please input all required ticket parameters list.", "warning");
      return;
    }

    setIsSubmittingTicket(true);
    setTimeout(() => {
      addToast(`Ticket #${Math.floor(100000 + Math.random() * 900000)} logged successfully. Crew will reply to ${ticketEmail} shortly.`, "success");
      setTicketSubject('');
      setTicketMessage('');
      setIsSubmittingTicket(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Breadcrumbs */}
        <div className="flex justify-between items-center bg-zinc-950 p-4 border border-zinc-900 rounded-2xl">
          <button
            onClick={onBackToPortal}
            className="flex items-center gap-2 text-xs font-mono font-bold text-rose-450 hover:text-rose-400 uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Esport Portal
          </button>
          
          <span className="text-[10px] font-mono font-bold bg-rose-500/10 border border-rose-500/20 text-rose-500 px-3 py-1.5 rounded-full uppercase">
            🛡️ SECURE HELP CENTER & SCHEMAS ONLINE
          </span>
        </div>

        {/* Hero Banner Section */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-12 text-center space-y-4 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-flex p-3 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-2xl mb-2">
            <BookOpen className="w-8 h-8" />
          </div>

          <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight font-mono max-w-3xl mx-auto leading-tight">
            How can we calibrate your <span className="text-rose-500 bg-gradient-to-r from-rose-555 to-rose-450 bg-clip-text text-transparent">Esports Journey</span>?
          </h1>
          <p className="text-xs md:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Search our comprehensive documentation library. From secure UPI withdrawals to Room credentials, we host transparent guides with complete SEO parameters.
          </p>

          {/* Search box block */}
          <div className="max-w-xl mx-auto relative mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-550" />
            <input
              type="text"
              placeholder="Search guides (e.g. UPI, Minimum Withdraw, K/D Stats...)"
              className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-rose-505 text-sm shadow transition-all font-mono"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-rose-400 hover:text-rose-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Carousel / Tabs */}
        <div className="space-y-4">
          <h3 className="text-[11px] font-mono font-bold text-zinc-450 uppercase tracking-widest flex items-center gap-2">
            <Zap className="w-4 h-4 text-rose-500 animate-pulse" />
            Filter by Taxonomy Department
          </h3>
          <div className="flex flex-wrap gap-2 pb-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenFaqId(null);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all border flex items-center gap-2 cursor-pointer ${
                    isSelected 
                      ? 'bg-rose-500 border-rose-600 text-white shadow-lg shadow-rose-950/20' 
                      : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800'
                  }`}
                >
                  {CATEGORY_ICONS[cat] || <HelpCircle className="w-3.5 h-3.5 text-zinc-500" />}
                  {cat === 'All' ? '🌐 All Topics' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Grid Results Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* FAQ Accordions (Left and Center) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center text-[11px] font-mono text-zinc-500 pb-2 border-b border-zinc-900">
              <span>CATEGORY MATCHES: <strong className="text-white">{filteredFaqs.length} GUIDES LISTED</strong></span>
              <span>DEP: {selectedCategory.toUpperCase()}</span>
            </div>

            {filteredFaqs.length === 0 ? (
              <div className="text-center p-16 bg-zinc-950/60 border border-zinc-900 rounded-3xl space-y-3">
                <HelpCircle className="w-12 h-12 text-zinc-700 mx-auto" />
                <p className="text-xs font-mono text-zinc-400 uppercase font-bold">No documentation matches your request</p>
                <p className="text-[11px] text-zinc-550 max-w-md mx-auto leading-relaxed">
                  Refine your keyword search queries or try filtering another category. Our administrators add live support guidelines daily.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-2 text-xs font-mono text-rose-400 hover:underline uppercase font-bold"
                >
                  Reset all Filters
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredFaqs.map((item) => {
                  const isOpen = openFaqId === item.id;
                  return (
                    <div 
                      key={item.id}
                      className={`bg-zinc-950 border transition-all rounded-2xl overflow-hidden ${
                        isOpen ? 'border-rose-950/30 ring-1 ring-rose-500/5' : 'border-zinc-900/80 hover:border-zinc-850'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(item.id)}
                        className="w-full text-left p-5 flex items-start justify-between gap-4 cursor-pointer"
                      >
                        <div className="space-y-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900 text-[9.5px] font-mono font-bold uppercase rounded-md text-zinc-400 border border-zinc-800">
                            {CATEGORY_ICONS[item.category] || <HelpCircle className="w-3 h-3" />}
                            {item.category}
                          </span>
                          <h4 className="text-xs md:text-sm font-extrabold text-white leading-relaxed">
                            {item.question}
                          </h4>
                        </div>
                        <div className="p-1 px-1.5 bg-zinc-900/60 border border-zinc-850 rounded-lg text-zinc-450 transition-colors shrink-0">
                          {isOpen ? <ChevronUp className="w-4 h-4 text-rose-500" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      <div 
                        className={`transition-all duration-200 overflow-hidden ${
                          isOpen ? 'max-h-[500px] border-t border-zinc-900/60' : 'max-h-0'
                        }`}
                      >
                        <div className="p-5 bg-zinc-950/40 text-[11.5px] text-zinc-400 leading-relaxed font-sans space-y-2">
                          <p className="whitespace-pre-line">{item.answer}</p>
                          <div className="flex justify-between items-center pt-3 border-t border-zinc-900/40 text-[10px] text-zinc-550 font-mono">
                            <span>FAQ ID: {item.id}</span>
                            <span>VERIFIED BY CO-REF CODES</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Ticket Support Desk (Right Sidebar) */}
          <div className="space-y-6">
            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 space-y-4">
              <div className="inline-flex p-2.5 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-xl">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono font-black text-white uppercase tracking-wider">
                Direct Support Desk Ticket
              </h3>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                If our 50+ database items didn't resolve your issue, upload details below to connect with active duty referees immediately.
              </p>

              <form onSubmit={handleSendSupportTicket} className="space-y-3 pt-2">
                <div className="space-y-1">
                  <label className="block text-[9px] text-zinc-500 uppercase font-black font-mono">Gamer Nickname *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-zinc-900 border border-zinc-850 text-white rounded-lg px-3 py-2 text-xs"
                    value={ticketName}
                    onChange={(e) => setTicketName(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[9px] text-zinc-500 uppercase font-black font-mono">Secret Reply Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-zinc-900 border border-zinc-850 text-white rounded-lg px-3 py-2 text-xs"
                    value={ticketEmail}
                    onChange={(e) => setTicketEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[9px] text-zinc-500 uppercase font-black font-mono">Select Issue Subject *</label>
                  <select
                    required
                    className="w-full bg-zinc-900 border border-zinc-850 text-white rounded-lg px-3 py-2 text-xs"
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                  >
                    <option value="">-- Choose Priority Department --</option>
                    <option value="Wallet Refund Issue">Wallet / Diamond Purchase</option>
                    <option value="Suspicious Profile Cheater Hold">Report Fair Play Infraction</option>
                    <option value="Room Credentials Lost">Missing Room Credentials</option>
                    <option value="Coupon Rejection">Promo Code / Coupon Typo</option>
                    <option value="System Visual Bug">Technical Bug Report</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-[9px] text-zinc-500 uppercase font-black font-mono">Match / Ticket details *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Provide chronological details of your issue..."
                    className="w-full bg-zinc-900 border border-zinc-850 text-white rounded-lg p-3 text-xs font-sans focus:outline-none"
                    value={ticketMessage}
                    onChange={(e) => setTicketMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingTicket}
                  className="w-full py-2.5 bg-rose-500 hover:bg-rose-600 border border-rose-650 text-white rounded-lg font-mono font-bold text-[10px] uppercase tracking-widest cursor-pointer transition-all disabled:opacity-50"
                >
                  {isSubmittingTicket ? "Logging on ledger..." : "Dispatch Support Signal"}
                </button>
              </form>
            </div>
            
            {/* Quick Policy Badges */}
            <div className="bg-zinc-950/40 p-4 rounded-2xl border border-zinc-900 grid grid-cols-2 gap-3 text-center">
              <div className="space-y-1">
                <span className="text-[14px] text-emerald-450 block font-bold">1-2 hr</span>
                <span className="text-[8px] text-zinc-500 uppercase font-mono tracking-relaxed block">Reply Interval</span>
              </div>
              <div className="space-y-1 border-l border-zinc-900">
                <span className="text-[14px] text-rose-505 block font-bold">100% Secure</span>
                <span className="text-[8px] text-zinc-500 uppercase font-mono tracking-relaxed block">Escrow Ledger</span>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}
