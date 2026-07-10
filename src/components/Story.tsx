import { motion } from 'motion/react';
import { HOODINU_STORY } from '../data';
import { Shield, Coins, Flame, Skull, Users, ArrowUpRight } from 'lucide-react';

export default function Story() {
  
  // Resolve icons dynamically based on static dataset
  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield': return <Shield className="h-6 w-6" />;
      case 'Coins': return <Coins className="h-6 w-6" />;
      case 'Flame': return <Flame className="h-6 w-6" />;
      default: return <Flame className="h-6 w-6" />;
    }
  };

  return (
    <section id="story" className="py-20 bg-robin-slate relative overflow-hidden border-t border-gray-900">
      
      {/* Background patterns */}
      <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(#1e2224_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout: Image left/right, Story cards right/left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual representation with custom quote */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Visual wrapper mimicking a premium collectible card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden bg-robin-dark border-2 border-robin-green/40 p-4 shadow-2xl shadow-robin-green/5 group max-w-lg w-full"
            >
              {/* Highlight accent glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-robin-green to-lime-brand opacity-20 blur-xl group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-robin-dark rounded-2xl overflow-hidden p-2">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/hoodinu.png?v=1783680171"
                  alt="HOODINU Stealth"
                  className="w-full h-auto aspect-[3/1] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Stats overlay */}
                <div className="mt-4 p-4 bg-robin-slate rounded-xl border border-gray-800">
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold mb-1">
                    <span>Rank</span>
                    <span>Power Level</span>
                  </div>
                  <div className="flex justify-between items-center text-white font-display font-extrabold text-base">
                    <span className="text-robin-green">#1 SHERWOOD PROTECTOR</span>
                    <span>99,999+</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Custom Quote Banner */}
            <div className="mt-8 text-center max-w-sm">
              <span className="text-6xl font-serif text-robin-green/20 leading-none">“</span>
              <p className="text-gray-300 italic text-sm -mt-4 leading-relaxed font-sans">
                The whales take the profit, we take the power. In Sherwood Forest, every pup eats. There is no pre-sale, no developer tax, only absolute decentralized growth.
              </p>
              <div className="mt-3 font-mono text-[10px] text-robin-green font-bold uppercase tracking-widest">- HOODINU SCRIPTURE</div>
            </div>

          </div>

          {/* Right Column: Narrative / Lore segments */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-robin-green/10 text-robin-green px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-bold mb-3 border border-robin-green/20">
                <Skull className="h-3 w-3 animate-pulse" />
                <span>Robinhood Memecoin Legend</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                The Legend of <span className="text-robin-green">HOODINU</span>
              </h2>
              <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                Most memecoins are made to benefit the founders and early whales. Hoodinu has emerged from the depths of Sherwood Forest with a different code of honor.
              </p>
            </div>

            {/* Stories Grid */}
            <div className="space-y-6">
              {HOODINU_STORY.map((chapter, idx) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-robin-dark p-6 rounded-2xl border border-gray-800/80 hover:border-robin-green/20 hover:shadow-lg hover:shadow-robin-green/2 transition-all group flex gap-5 items-start"
                >
                  {/* Icon Box */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-robin-slate border border-gray-800 flex items-center justify-center text-robin-green group-hover:bg-robin-green group-hover:text-robin-dark transition-all duration-300">
                    {getIcon(chapter.iconName)}
                  </div>

                  {/* Story Text */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-extrabold text-lg text-white group-hover:text-robin-green transition-colors">
                        {chapter.title}
                      </h3>
                      <span className="text-[9px] font-mono bg-robin-slate text-gray-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                        {chapter.subtitle}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pt-1">
                      {chapter.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick action button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 text-xs sm:text-sm">
              <a
                href="#how-to-buy"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-robin-green hover:bg-robin-green/90 text-robin-dark font-extrabold transition text-center flex items-center justify-center space-x-2"
              >
                <span>Read Sherwood Scroll</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="flex items-center space-x-2 text-gray-500 font-mono text-[11px]">
                <Users className="h-4 w-4 text-robin-green" />
                <span>Launched for 100% of the community</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
