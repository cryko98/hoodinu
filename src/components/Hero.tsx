import { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, TrendingUp, ShieldAlert, ArrowDown, Send } from 'lucide-react';

const XIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface HeroProps {
  contractAddress: string;
}

export default function Hero({ contractAddress }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative bg-lime-brand text-black overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Dynamic Grid replicating the attached image layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Replicated Image Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Main Ticker Header with Tall Bold Distressed Style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h1 className="font-display font-extrabold text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[8.5rem] leading-[0.85] tracking-tight uppercase text-black select-none">
                $HOODINU
              </h1>
            </motion.div>

            {/* Subheading: "LOYAL. STEALTHY. UNCHAINED." */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs sm:text-sm md:text-xl font-bold tracking-[0.35em] sm:tracking-[0.45em] text-black uppercase opacity-95 select-none"
            >
              LOYAL. STEALTHY. UNCHAINED.
            </motion.p>

            {/* Badge: "NOT YOUR AVERAGE DOG" nested in a black brushed background replication */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative inline-block"
            >
              <div className="bg-black text-lime-brand font-mono font-black text-xs sm:text-base md:text-lg tracking-[0.25em] px-8 py-3 uppercase rounded-sm shadow-xl select-none relative overflow-hidden">
                {/* Subtle grunge background lines to simulate brush texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                <span className="relative z-10">NOT YOUR AVERAGE DOG.</span>
              </div>
            </motion.div>

            {/* Interactive Section for Smart Contract & Launch Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full max-w-lg mt-4 bg-black/5 p-4 sm:p-5 rounded-2xl border border-black/10 backdrop-blur-sm"
            >
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/60 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-black mr-2 animate-ping"></span>
                    Verified Contract Address
                  </span>
                  <span className="text-xs font-bold text-black/80 font-mono">SOLANA / ERC20 READY</span>
                </div>
                
                {/* Contract Input Copy Box */}
                <div className="flex items-center space-x-2 bg-black text-white p-2 sm:p-3 rounded-xl border border-black shadow-inner">
                  <span className="font-mono text-xs sm:text-sm text-lime-brand truncate flex-1 select-all pl-1">
                    {contractAddress}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-robin-dark hover:bg-robin-slate text-white active:scale-95 transition flex items-center justify-center space-x-1 flex-shrink-0"
                    title="Copy Contract Address"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-lime-brand" />
                        <span className="text-[10px] font-bold px-1 text-lime-brand">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span className="text-[10px] font-bold px-1">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Main Action CTAs */}
                <div className="pt-2 flex gap-3">
                  <a
                    href="https://t.me/hoodinucommunity"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-black hover:bg-black/95 text-lime-brand hover:text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all active:scale-95 text-sm"
                    title="Telegram"
                  >
                    <Send className="h-4 w-4" />
                    <span>Telegram</span>
                  </a>
                  <a
                    href="https://x.com/i/communities/2038276050287993288"
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 flex items-center justify-center bg-black hover:bg-black/95 text-lime-brand hover:text-white font-bold py-3.5 rounded-xl shadow-lg transition-all active:scale-95 text-sm"
                    title="X Community"
                  >
                    <XIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Banner (Robinhood style) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 pt-4 border-t border-black/10 w-full text-xs sm:text-sm"
            >
              <div>
                <span className="block font-mono text-black/50 text-[10px] uppercase font-bold tracking-wider">Total Tax</span>
                <span className="font-display font-extrabold text-lg sm:text-xl text-black">0% (Zero Tax)</span>
              </div>
              <div className="border-l border-black/10 h-8"></div>
              <div>
                <span className="block font-mono text-black/50 text-[10px] uppercase font-bold tracking-wider">Liquidity Status</span>
                <span className="font-display font-extrabold text-lg sm:text-xl text-black">100% Locked & Burned</span>
              </div>
              <div className="border-l border-black/10 h-8"></div>
              <div>
                <span className="block font-mono text-black/50 text-[10px] uppercase font-bold tracking-wider">Vibe Checker</span>
                <span className="font-display font-extrabold text-lg sm:text-xl text-black">99.9% Bullish</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Replicating the bronze/dark hooded dog statue */}
          <div className="lg:col-span-5 flex justify-center items-center relative select-none">
            {/* Soft shadow glow behind statue */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-black/10 filter blur-3xl -z-10"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Outer decorative borders with a tech/modern touch */}
              <div className="absolute inset-0 border-2 border-dashed border-black/10 rounded-full animate-[spin_100s_linear_infinite] pointer-events-none"></div>
              
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] mx-auto relative group-hover:scale-105 transition-transform duration-500 ease-out">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-08_18-23-12.jpg?v=1783680170"
                  alt="HOODINU Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Small Overlay Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-2xl">
                <ShieldAlert className="h-3 w-3 text-lime-brand animate-pulse" />
                <span className="text-gray-300 font-bold">100% RETAIL-SECURED MEMECOIN</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Wave bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-robin-dark to-transparent"></div>
    </section>
  );
}
