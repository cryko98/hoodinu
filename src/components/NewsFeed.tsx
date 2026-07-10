import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HOODINU_NEWS } from '../data';
import { Newspaper, ChevronDown, ChevronUp, MessageSquare, ThumbsUp, Flame, Star } from 'lucide-react';

export default function NewsFeed() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [newsList, setNewsList] = useState(HOODINU_NEWS);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const incrementReads = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setNewsList(prev => prev.map(news => {
      if (news.id === id) {
        return { ...news, reads: news.reads + 1 };
      }
      return news;
    }));
  };

  const getSentimentStyle = (sentiment: 'bullish' | 'highly-bullish' | 'moon') => {
    switch (sentiment) {
      case 'bullish':
        return 'bg-robin-green/10 text-robin-green border border-robin-green/20';
      case 'highly-bullish':
        return 'bg-lime-brand/20 text-black border border-lime-brand bg-lime-brand font-black';
      case 'moon':
        return 'bg-pink-500/10 text-pink-400 border border-pink-500/20 animate-pulse';
    }
  };

  const getSentimentLabel = (sentiment: 'bullish' | 'highly-bullish' | 'moon') => {
    switch (sentiment) {
      case 'bullish': return 'BULLISH';
      case 'highly-bullish': return 'HIGHLY BULLISH';
      case 'moon': return 'SOLAR FLARE / MOON';
    }
  };

  return (
    <section id="news" className="py-20 bg-robin-dark border-t border-robin-slate relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1 bg-robin-green/10 text-robin-green px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold mb-3">
            <Newspaper className="h-3.5 w-3.5" />
            <span>Sherwood Media Coverage</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Robinhood Crypto <span className="text-robin-green">News Feed</span>
          </h2>
          <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
            Follow the latest whispers, strategic coordinates, and viral updates regarding $HOODINU directly from the decentralized press.
          </p>
        </div>

        {/* News Feed List */}
        <div className="space-y-4">
          {newsList.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                layout="position"
                className="bg-robin-slate rounded-2xl border border-gray-800/80 hover:border-gray-700 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                {/* Visible Header Row */}
                <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1.5 flex-1">
                    {/* Meta info row */}
                    <div className="flex flex-wrap items-center gap-2.5 text-[10px] font-mono font-bold">
                      <span className="text-robin-green uppercase tracking-wider">{item.source}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">{item.time}</span>
                      <span className="text-gray-500">•</span>
                      <span className={`px-2 py-0.5 rounded text-[8px] tracking-wider uppercase ${getSentimentStyle(item.sentiment)}`}>
                        {getSentimentLabel(item.sentiment)}
                      </span>
                    </div>

                    {/* Article Headline */}
                    <h4 className="font-display font-extrabold text-base sm:text-lg text-white hover:text-robin-green transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div className="flex items-center space-x-3 self-end sm:self-center">
                    <span className="hidden sm:inline-block text-[11px] font-mono text-gray-500 font-bold uppercase tracking-wider">
                      Read Coverage
                    </span>
                    <div className="w-8 h-8 rounded-full bg-robin-dark border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition">
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </div>
                </div>

                {/* Animated Collapsible Expandable Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-800/60 bg-robin-dark/40 overflow-hidden"
                    >
                      <div className="p-6 space-y-4">
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                          {item.summary}
                        </p>
                        
                        {/* Interactive footer for the article */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-800/60 text-xs font-mono text-gray-500">
                          <button
                            onClick={(e) => incrementReads(item.id, e)}
                            className="flex items-center space-x-1.5 hover:text-robin-green transition"
                          >
                            <ThumbsUp className="h-3.5 w-3.5 text-robin-green" />
                            <span className="font-bold">{item.reads.toLocaleString()} Hodlers Liked</span>
                          </button>

                          <span className="flex items-center space-x-1.5 text-gray-500">
                            <Star className="h-3.5 w-3.5 text-lime-brand animate-pulse" />
                            <span>Sherwood Certified</span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic call to action at bottom of news list */}
        <div className="mt-8 text-center p-6 bg-robin-slate/30 rounded-2xl border border-dashed border-gray-800">
          <p className="text-xs text-gray-500 font-mono">
            Want to submit a Sherwood coordinate or community meme? Join our active chat room and propose it to the Round Table.
          </p>
        </div>

      </div>
    </section>
  );
}
