import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  Smile, 
  CheckCircle, 
  AlertTriangle, 
  ArrowLeft,
  ChevronRight,
  Shield,
  Clock,
  ExternalLink
} from 'lucide-react';

interface ContactProps {
  onBackToPortal: () => void;
}

export default function ContactUs({ onBackToPortal }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage("Please enter your legal name or gamer tag.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage("A valid email address is required to register replies.");
      return;
    }
    if (!formData.subject.trim()) {
      setStatus('error');
      setErrorMessage("Please supply a descriptive subject line.");
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus('error');
      setErrorMessage("Your request description must contain at least 10 characters.");
      return;
    }

    setStatus('submitting');
    
    // Simulate robust API dispatch to support database
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

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
          COMMUNICATIONS LINK • CORE COLD LOBBY
        </span>
      </div>

      {/* Hero Header Area */}
      <div className="relative overflow-hidden p-6 md:p-8 bg-zinc-950/60 border border-zinc-900 rounded-3xl mb-4 shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Mail className="w-48 h-48 text-rose-500" />
        </div>
        <div className="relative space-y-2 z-10">
          <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2.5 py-1 rounded-md w-fit">
            <Send className="w-3.5 h-3.5" />
            Contact Dispatch
          </span>
          <h1 className="text-2xl md:text-3.5xl font-black text-white uppercase tracking-tight font-sans">
            Connect With <span className="text-rose-500">Administration</span>
          </h1>
          <p className="text-zinc-400 text-xs md:text-sm font-sans max-w-2xl leading-normal">
            Have a ticket query, top-up mismatch proof, league dispute, or brand proposal? Send your messages directly.
          </p>
        </div>
      </div>

      {/* Sidebar Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Side Quick Info */}
        <div className="md:col-span-1 space-y-4">
          
          {/* Direct Support Block */}
          <div className="p-4 bg-zinc-950/80 border border-zinc-900 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
              <Mail className="w-4 h-4 text-rose-500" />
              <h5 className="text-xs font-black text-white font-mono uppercase tracking-wider">Direct Dispatch</h5>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed">
              Skip forms entirely by addressing your mail directly to our legal representation:
            </p>

            <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-xl space-y-1.5">
              <span className="text-[9.5px] text-zinc-500 block font-mono uppercase-tracking">ADMINISTRATIVE HEAD</span>
              <a 
                href="mailto:pkumar15187@gmail.com" 
                className="text-xs font-mono font-black text-rose-400 hover:underline break-all"
              >
                pkumar15187@gmail.com
              </a>
            </div>

            <div className="flex gap-2.5 items-center text-[10px] text-zinc-500 font-mono">
              <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span>Standard Response: Under 24h</span>
            </div>
          </div>

          {/* Guidelines block */}
          <div className="p-4 bg-zinc-950/40 border border-zinc-900/60 rounded-2xl space-y-2">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-black uppercase font-mono">
              <Shield className="w-3.5 h-3.5 text-rose-550" />
              <span>Security Rule</span>
            </div>
            <p className="text-[11px] text-zinc-500 leading-normal m-0 italic">
              When citing transactions, always supply the corresponding 12-digit UPI reference ID (UTR) or upload screenshot graphics to accelerate verification checks.
            </p>
          </div>

        </div>

        {/* Right Side Responsive Contact Form */}
        <div className="md:col-span-2">
          <div className="p-5 md:p-6 bg-zinc-950/50 border border-zinc-900 rounded-2xl shadow-md">
            
            {status === 'success' ? (
              <div className="py-8 text-center space-y-4">
                <div className="inline-block p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-md font-black text-white font-mono uppercase tracking-wider">Signals Transmitted Successfully</h4>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Your transmission payload sits pending inside our inbox. A support crew agent will review your records and reply back shortly.
                  </p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 rounded-lg text-xs font-mono font-bold text-white transition-all uppercase"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                
                {status === 'error' && (
                  <div className="p-3 bg-rose-500/5 border border-rose-500/20 rounded-xl flex gap-3 text-rose-400 leading-relaxed max-w-xl">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono font-bold uppercase block text-[10px]">Error Code: VERIFY-0</span>
                      <p className="m-0 text-[11.5px] font-sans">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider font-bold">
                      Gamer name / legal name *
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="e.g. ProGamer / John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/65 focus:bg-zinc-900 border border-zinc-850 focus:border-rose-500/40 rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-650 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider font-bold">
                      Contact Email *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="e.g. user@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/65 focus:bg-zinc-900 border border-zinc-850 focus:border-rose-500/40 rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-650 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider font-bold">
                    Subject / Concern Category *
                  </label>
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="e.g. VIP Subscription Activation / Wallet Audit Request"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/65 focus:bg-zinc-900 border border-zinc-850 focus:border-rose-500/40 rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-650 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider font-bold flex justify-between">
                    <span>Message details *</span>
                    <span className="text-[8.5px] text-zinc-550 lowercase italic">Minimum 10 chars</span>
                  </label>
                  <textarea 
                    name="message"
                    rows={5}
                    placeholder="Describe your situation in full detail here. Ensure inclusion of dates or transaction codes where applicable."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/65 focus:bg-zinc-900 border border-zinc-850 focus:border-rose-500/40 rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-650 outline-none transition-all resize-none leading-relaxed"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-rose-600 hover:bg-rose-500 active:translate-y-0.5 text-white font-mono font-black py-3 rounded-xl transition-all uppercase tracking-wide flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4.5 h-4.5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>Transmitting Files...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Dispatch form</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
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
