import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  BookOpen, 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  ChevronRight, 
  Filter, 
  Heart, 
  Share2, 
  MessageSquare,
  HelpCircle,
  Eye,
  TrendingUp,
  Bookmark,
  Share
} from 'lucide-react';
import { articles, Article } from '../data/articles';
import AdSenseSlot from './AdSenseSlot';

interface BlogSectionProps {
  onBackToPortal: () => void;
  onSelectArticleBySlug?: (slug: string) => void;
  initialSlug?: string;
  addToast: (msg: string, type: 'success' | 'error' | 'warning' | 'info') => void;
  blogArticles?: Article[];
}

export default function BlogSection({ onBackToPortal, onSelectArticleBySlug, initialSlug, addToast, blogArticles }: BlogSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});

  const articlesLocal = (blogArticles || articles).filter(a => a.status !== 'draft');

  const articlesPerPage = 6;

  // Handle routing by initial article slug if passed
  useEffect(() => {
    if (initialSlug) {
      const found = articlesLocal.find(a => a.slug === initialSlug);
      if (found) {
        setSelectedArticle(found);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      setSelectedArticle(null);
    }
  }, [initialSlug]);

  const categories = [
    'All', 'Free Fire MAX', 'BGMI', 'Call of Duty', 'Valorant', 
    'Esports News', 'Gaming Career', 'Tournament Guides', 
    'Gaming Tips', 'Gaming Phones', 'Gaming PCs'
  ];

  const filteredArticles = articlesLocal.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.sections.some(s => s.heading.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination bounds
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    if (onSelectArticleBySlug) {
      onSelectArticleBySlug(article.slug);
    }
    window.location.hash = `#blog/${article.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    window.location.hash = '#blog';
    if (onSelectArticleBySlug) {
      onSelectArticleBySlug('');
    }
  };

  const handleToggleBookmark = (id: string, title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked(prev => {
      const state = !prev[id];
      addToast(state ? `Added "${title}" to your offline library!` : `Removed "${title}" from offline library`, 'info');
      return { ...prev, [id]: state };
    });
  };

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const liked = hasLiked[id];
    setHasLiked(prev => ({ ...prev, [id]: !liked }));
    setLikes(prev => ({
      ...prev,
      [id]: (prev[id] ?? 0) + (liked ? -1 : 1)
    }));
    addToast(liked ? "Vote retracted." : "Professional endorsement recorded! ⚡", "success");
  };

  const handleShare = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    addToast(`Link to "${title}" successfully saved to your clipboard!`, 'success');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 space-y-12 text-zinc-300 font-sans leading-relaxed">
      
      {/* Header Info breadcrumb */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
        <button 
          onClick={selectedArticle ? handleCloseArticle : onBackToPortal}
          className="flex items-center gap-2 text-xs font-mono font-bold text-rose-500 hover:text-rose-400 uppercase tracking-widest bg-rose-500/10 hover:bg-rose-500/20 px-3 py-1.5 rounded-lg border border-rose-500/10 transition-all duration-150"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> {selectedArticle ? "Back to Articles" : "Back to Portal"}
        </button>
        <span className="text-[10px] text-zinc-550 font-mono tracking-widest uppercase">
          {selectedArticle ? `READING COGNITIVE MODULE • ${selectedArticle.category}` : "GAMING CAREES LITERARY BANK • BLOG"}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {!selectedArticle ? (
          // ARTICLES DIRECTORY GRID VIEW
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* Header Content Section */}
            <div className="relative overflow-hidden p-6 md:p-10 bg-zinc-950/60 border border-zinc-900 rounded-3xl shadow-xl flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div className="space-y-3 z-10 max-w-2xl">
                <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2.5 py-1 rounded-md w-fit">
                  <BookOpen className="w-3.5 h-3.5" />
                  Esports Knowledge Hub
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                  Gamer & Esports <span className="text-rose-500">Insights</span>
                </h1>
                <p className="text-zinc-400 text-sm font-sans leading-relaxed">
                  Calibrate your skills, keep track of fast-moving gaming devices, explore tournament guides, and discover high-value professional esports career tips.
                </p>
              </div>

              {/* Trending topics highlight */}
              <div className="bg-zinc-900/60 border border-zinc-850 p-4 rounded-2xl md:max-w-xs shrink-0 font-mono space-y-2">
                <div className="flex items-center gap-1.5 text-rose-400 text-[10px] font-bold uppercase tracking-widest">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Trending Topics</span>
                </div>
                <div className="space-y-1 text-xs">
                  <button onClick={() => setSelectedCategory('BGMI')} className="block text-zinc-400 hover:text-white transition-colors hover:underline"># BGMI Rotation Analysis</button>
                  <button onClick={() => setSelectedCategory('Gaming Career')} className="block text-zinc-400 hover:text-white transition-colors hover:underline"># Esports Sponsoring Guidelines</button>
                  <button onClick={() => setSelectedCategory('Valorant')} className="block text-zinc-400 hover:text-white transition-colors hover:underline"># Immortal Elo Guides</button>
                </div>
              </div>
            </div>

            {/* Premium Ad Header Spot */}
            <div className="p-3 bg-zinc-950/40 border border-zinc-90 w-full rounded-2xl">
              <AdSenseSlot slotType="home" />
              {/* Optional beautiful default placeholder if AdSense not enabled yet */}
              <div className="text-center py-2 text-[10px] text-zinc-550 font-mono">
                💡 High-Value Context Sensitive Advertising zone helps sponsor Gaming Career Hub server uptime.
              </div>
            </div>

            {/* Filters bar: Search & Category pills */}
            <div className="flex flex-col gap-4 p-4 bg-zinc-950/80 border border-zinc-900 rounded-2xl">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* Search bar */}
                <div className="relative w-full sm:flex-1">
                  <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search articles on BGMI strategy, Valorant comps, gear guides..."
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-xs text-white focus:border-rose-500 placeholder-zinc-550 rounded-xl pl-10 pr-4 py-3 outline-none font-mono"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                {/* Search indicator */}
                <span className="text-[10px] text-zinc-550 font-mono tracking-wider shrink-0 uppercase">
                  {filteredArticles.length} / {articlesLocal.length} MODULES ONLINE
                </span>
              </div>

              {/* Category selector chips scroll container */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                <span className="text-[10px] text-zinc-550 font-mono uppercase font-bold pr-1 shrink-0 flex items-center gap-1">
                  <Filter className="w-3 h-3 text-rose-500" /> CATEGORIES:
                </span>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-extrabold tracking-wide uppercase transition-all shrink-0 ${
                      selectedCategory === cat 
                        ? 'bg-rose-500 text-white border border-rose-650 shadow-md shadow-rose-950/30'
                        : 'bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-zinc-200 border border-zinc-850 hover:border-zinc-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Directory Grid */}
            {currentArticles.length === 0 ? (
              <div className="p-12 text-center bg-zinc-950/50 border border-zinc-900/60 rounded-3xl space-y-4">
                <BookOpen className="w-12 h-12 text-rose-505/20 mx-auto animate-pulse" />
                <div className="space-y-1">
                  <h4 className="text-md font-mono font-black text-white uppercase">No tactical archives match searching</h4>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Verify spelling or pick a different category card filter option to locate standard tournament calibration files.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="px-4 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg text-xs font-bold font-mono border border-rose-500/20 uppercase"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentArticles.map((art, index) => {
                  const isBookmarked = bookmarked[art.id] || false;
                  const likeCount = (likes[art.id] ?? 0) + 12 + (index * 4);
                  return (
                    <motion.div
                      key={art.id}
                      onClick={() => handleArticleClick(art)}
                      className="group cursor-pointer bg-zinc-950/40 hover:bg-zinc-950/80 border border-zinc-900 hover:border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-200 flex flex-col justify-between"
                      whileHover={{ y: -3 }}
                    >
                      {/* Thumbnail frame */}
                      <div className="relative h-44 w-full bg-zinc-900 overflow-hidden">
                        <img 
                          src={art.image} 
                          alt={art.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                        
                        {/* Category badge */}
                        <span className="absolute top-3 left-3 bg-rose-500 text-white font-mono font-extrabold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border border-rose-600">
                          {art.category}
                        </span>

                        {/* Interactive secondary action tray */}
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={(e) => handleToggleBookmark(art.id, art.title, e)}
                            className="p-1.5 bg-zinc-950/85 hover:bg-zinc-900 border border-zinc-850 hover:border-rose-500/50 rounded-lg text-rose-405 transition-colors"
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-rose-500 text-rose-500' : ''}`} />
                          </button>
                        </div>
                      </div>

                      {/* Info body */}
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-3 text-[10px] text-zinc-500 font-mono">
                            <span className="flex items-center gap-1"><User className="w-3 h-3 text-zinc-600" /> {art.author}</span>
                            <span>•</span>
                            <span>{art.date}</span>
                          </div>
                          
                          <h3 className="text-[13.5px] font-black tracking-tight leading-snug text-white group-hover:text-rose-450 transition-colors uppercase">
                            {art.title}
                          </h3>
                          
                          <p className="text-[11.5px] text-zinc-400 line-clamp-2">
                            {art.summary}
                          </p>
                        </div>

                        {/* Metadata row */}
                        <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-[10.5px] font-mono text-zinc-500">
                          <span className="flex items-center gap-1 text-zinc-550">
                            <Clock className="w-3 h-3" /> {art.readTime}
                          </span>
                          
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={(e) => handleLike(art.id, e)}
                              className="hover:text-rose-400 flex items-center gap-1 transition-colors"
                            >
                              <Heart className={`w-3 h-3 ${hasLiked[art.id] ? 'fill-rose-500 text-rose-500' : 'text-zinc-650'}`} />
                              <span>{likeCount}</span>
                            </button>
                            
                            <button 
                              onClick={(e) => handleShare(art.title, e)}
                              className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
                            >
                              <Share2 className="w-3 h-3 text-zinc-650" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Pagination footer section */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between border-t border-zinc-900 pt-6">
                <span className="text-[11px] font-mono text-zinc-500 uppercase">
                  PAGE {currentPage} OF {totalPages}
                </span>

                <div className="flex gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className="px-3.5 py-1.5 bg-zinc-900 disabled:opacity-30 disabled:hover:bg-zinc-900 border border-zinc-850 hover:bg-zinc-850 hover:text-white rounded-lg text-xs font-mono font-bold text-zinc-400 transition-colors uppercase"
                  >
                    Previous
                  </button>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className="px-3.5 py-1.5 bg-zinc-900 disabled:opacity-30 disabled:hover:bg-zinc-900 border border-zinc-850 hover:bg-zinc-850 hover:text-white rounded-lg text-xs font-mono font-bold text-zinc-400 transition-colors uppercase"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          // SINGLE DIGITAL ARTICLE DETAILED READ VIEW
          <motion.div
            key="article"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* Context breadcrumb & controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={handleCloseArticle}
                className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-500 hover:text-rose-400 uppercase tracking-wider"
              >
                ← Back to Articles Library
              </button>
              
              <div className="flex gap-2">
                <button
                  onClick={(e) => handleToggleBookmark(selectedArticle.id, selectedArticle.title, e)}
                  className="p-2 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded-xl text-zinc-400 hover:text-rose-500 transition-all"
                  title="Bookmark Article"
                >
                  <Bookmark className={`w-4 h-4 ${bookmarked[selectedArticle.id] ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>
                <button
                  onClick={(e) => handleShare(selectedArticle.title, e)}
                  className="p-2 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white transition-all"
                  title="Copy share link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Article Editorial Cover Frame */}
            <div className="relative h-[250px] md:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-zinc-900">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent"></div>
              
              {/* Category tags */}
              <div className="absolute bottom-6 left-6 md:left-8 space-y-3 z-10 max-w-4xl pr-4">
                <span className="bg-rose-505/10 bg-rose-500 border border-rose-550/20 text-white font-mono font-extrabold text-[10px] tracking-widest uppercase px-3 py-1 rounded w-fit">
                  {selectedArticle.category}
                </span>
                
                <h1 className="text-xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                  {selectedArticle.title}
                </h1>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-rose-500" /> By {selectedArticle.author}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-zinc-500" /> {selectedArticle.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /> {selectedArticle.readTime}</span>
                </div>
              </div>
            </div>

            {/* Main Editorial Core with rail AdSense Slot */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Left Main Article content */}
              <div className="lg:col-span-3 space-y-8 text-[15px] text-zinc-300 leading-relaxed font-sans">
                
                {/* Meta properties display block for compliance */}
                <div className="bg-rose-500/5 border border-rose-500/10 p-3.5 rounded-2xl flex flex-col gap-1 text-[11px] font-mono leading-normal text-zinc-400">
                  <span className="text-rose-455 font-bold text-[10px] uppercase">SEO TELEMETRY (AdSense Compliant)</span>
                  <span><strong>Meta Title:</strong> {selectedArticle.metaTitle}</span>
                  <span><strong>Meta Description:</strong> {selectedArticle.metaDescription}</span>
                </div>

                {/* Subsections rendering */}
                {selectedArticle.sections.map((section, idx) => (
                  <section key={idx} className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight border-b border-zinc-900 pb-2">
                      {section.heading}
                    </h2>
                    
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>
                        {p}
                      </p>
                    ))}

                    {/* Check if section list bullets exist */}
                    {section.list && (
                      <ul className="list-none pl-0 space-y-2.5 my-4">
                        {section.list.map((bullet, bIdx) => {
                          const [boldText, innerText] = bullet.split(": ");
                          return (
                            <li key={bIdx} className="bg-zinc-950/40 border border-zinc-900/50 p-3 rounded-xl flex gap-3 items-start">
                              <span className="p-1 px-2 bg-rose-510/10 bg-rose-500 text-white font-mono font-extrabold text-[10px] rounded shrink-0 leading-none">
                                {bIdx + 1}
                              </span>
                              <div className="text-xs text-zinc-400">
                                {innerText ? (
                                  <>
                                    <strong className="text-zinc-200">{boldText}</strong>: {innerText}
                                  </>
                                ) : (
                                  bullet
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </section>
                ))}

                {/* FAQ section */}
                {selectedArticle.faq && selectedArticle.faq.length > 0 && (
                  <section className="space-y-4 bg-zinc-950/40 border border-zinc-900 p-5 rounded-2xl">
                    <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
                      <HelpCircle className="w-5 h-5 text-rose-500" />
                      <h3 className="text-xs font-mono font-black text-white uppercase tracking-widest">
                        Frequently Asked Questions
                      </h3>
                    </div>

                    <div className="space-y-4 font-sans">
                      {selectedArticle.faq.map((item, fIdx) => (
                        <div key={fIdx} className="space-y-1.5 pb-3 border-b border-zinc-900/50 last:border-b-0 last:pb-0">
                          <h4 className="text-sm font-extrabold text-white">
                            Q: {item.question}
                          </h4>
                          <p className="text-xs text-zinc-400 m-0">
                            <strong>A:</strong> {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

              </div>

              {/* Right Sidebar Ad and related layout */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Embedded Sidebar Ad slot */}
                <div className="sticky top-6 space-y-6">
                  
                  <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-2xl space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
                      <BookOpen className="w-4 h-4 text-rose-505" />
                      <h5 className="text-[10px] font-mono font-black text-white uppercase tracking-wider">Related Modules</h5>
                    </div>

                    <div className="space-y-3.5">
                      {articlesLocal
                        .filter(a => a.id !== selectedArticle.id && (a.category === selectedArticle.category || a.category === 'Esports News'))
                        .slice(0, 3)
                        .map(rel => (
                          <div 
                            key={rel.id} 
                            onClick={() => handleArticleClick(rel)}
                            className="group/rel cursor-pointer flex gap-3 h-fit items-start hover:bg-zinc-900/30 p-1.5 rounded-lg transition-colors"
                          >
                            <img 
                              src={rel.image} 
                              alt={rel.title} 
                              referrerPolicy="no-referrer"
                              className="w-12 h-12 object-cover rounded-lg shrink-0 border border-zinc-900 group-hover/rel:border-rose-500/20" 
                            />
                            <div className="space-y-0.5 leading-tight">
                              <span className="text-[8px] font-mono font-bold text-rose-500 uppercase">{rel.category}</span>
                              <h4 className="text-[11.5px] font-black font-sans text-zinc-400 group-hover/rel:text-white transition-colors line-clamp-2">
                                {rel.title}
                              </h4>
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-950/60 border border-zinc-900 rounded-2xl">
                    <AdSenseSlot slotType="sponsor" />
                    <span className="text-[8px] text-zinc-650 font-mono block text-center mt-2.5">
                      Targeted sponsored matches help secure elite match hosting calibrations
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* bottom close trigger */}
            <div className="pt-6 border-t border-zinc-900 flex justify-between items-center text-[10.5px] font-mono text-zinc-500">
              <button 
                onClick={handleCloseArticle}
                className="text-rose-500 hover:underline flex items-center gap-1 font-bold"
              >
                ← Back to Articles Matrix
              </button>
              
              <span>© 2026 Gaming Career Hub</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
