import { motion } from 'motion/react';
import { PieChart, ShieldCheck, Heart, Users, Trash2, Award, Scale } from 'lucide-react';

export default function Tokenomics() {
  
  const stats = [
    {
      label: "TOTAL SUPPLY",
      value: "1,000,000,000",
      subText: "100% Minted, No Inflation",
      icon: Award
    },
    {
      label: "RETAIL CIRCULATION",
      value: "90%",
      subText: "900M Tokens in Public Pools",
      icon: Users
    },
    {
      label: "LIQUIDITY LOCKED",
      value: "100% BURNED",
      subText: "Keys Sent to Sherwood Crypt",
      icon: Trash2
    },
    {
      label: "TRANSACTION TAX",
      value: "0% TAX",
      subText: "No Buying Fees, No Selling Fees",
      icon: Scale
    }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-robin-slate border-t border-gray-900 relative">
      
      {/* Background circles */}
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-robin-green/5 filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-robin-green/10 text-robin-green px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold mb-3">
            <PieChart className="h-3.5 w-3.5" />
            <span>Fair Allocation</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Key Statistics <span className="text-robin-green">& Tokenomics</span>
          </h2>
          <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
            Unlike venture-backed chains, HOODINU was distributed fairly with zero insider allocation.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-robin-dark p-6 rounded-2xl border border-gray-800 hover:border-robin-green/30 hover:shadow-2xl hover:shadow-robin-green/5 transition-all group flex flex-col justify-between h-48"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                      {stat.label}
                    </span>
                    <IconComponent className="h-4.5 w-4.5 text-robin-green opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-4 group-hover:text-robin-green transition-colors">
                    {stat.value}
                  </h4>
                </div>

                <div className="border-t border-gray-800/60 pt-3">
                  <p className="text-[11px] font-mono text-gray-400">
                    {stat.subText}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed breakdown widget - resembling Robinhood's layout */}
        <div className="mt-12 bg-robin-dark p-6 sm:p-8 rounded-3xl border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Pie details table */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="font-display font-bold text-lg text-white mb-2">
                Supply Distribution Guide
              </h4>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded hover:bg-robin-slate/40 transition">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-robin-green"></div>
                    <span className="text-gray-300">Public Liquidity Pool</span>
                  </div>
                  <span className="text-white font-bold">90.0% (900,000,000 Tokens)</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded hover:bg-robin-slate/40 transition">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-lime-brand"></div>
                    <span className="text-gray-300">Stealth Sherwood Marketing</span>
                  </div>
                  <span className="text-white font-bold">5.0% (50,000,000 Tokens)</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded hover:bg-robin-slate/40 transition">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <span className="text-gray-300">Centralized Exchange Reserves</span>
                  </div>
                  <span className="text-white font-bold">5.0% (50,000,000 Tokens)</span>
                </div>
              </div>
            </div>

            {/* Custom security banner */}
            <div className="lg:col-span-5 bg-robin-slate p-6 rounded-2xl border border-gray-800/80 flex flex-col justify-between h-full space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-robin-green/10 flex items-center justify-center text-robin-green">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-display font-extrabold text-white text-sm">Sherwood Safe Crypt</h5>
                  <p className="text-[10px] text-gray-500 font-mono">100% DECENTRALIZED COMPLIANCE</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                No developer key backdoor risks. The contract is fully renounced, rendering the code immortal. Zero risk of rogue adjustments or sudden changes.
              </p>

              <div className="flex items-center space-x-1.5 text-[10px] font-mono text-robin-green font-bold">
                <span className="w-2 h-2 rounded-full bg-robin-green animate-pulse"></span>
                <span>AUDIT SECURED</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
