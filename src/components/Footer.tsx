import { motion } from 'motion/react';
import { Twitter, Shield, Heart, HelpCircle, FileText } from 'lucide-react';

interface FooterProps {
  contractAddress: string;
}

export default function Footer({ contractAddress }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-robin-dark text-gray-500 border-t border-robin-slate py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-800/80">
          
          {/* Column 1: Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-lime-brand/30 bg-robin-slate flex-shrink-0">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-08_18-23-12.jpg?v=1783680170" 
                  alt="HOODINU Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight uppercase">
                HOODINU
              </span>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              The ultimate Robinhood-inspired memecoin. Owned entirely by the retail pack, governed by unchained smart contracts, and dedicated to the redistribution of green candles.
            </p>

            <div className="flex space-x-3 pt-2">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-robin-slate hover:bg-robin-green/10 text-gray-400 hover:text-robin-green flex items-center justify-center border border-gray-800/80 transition"
                aria-label="Twitter link"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick navigation map */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-display font-bold text-white text-xs uppercase tracking-widest">
              Sherwood Map
            </h5>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#hero" className="hover:text-robin-green transition">Top Coordinates</a>
              </li>
              <li>
                <a href="#story" className="hover:text-robin-green transition">Backstory & Creed</a>
              </li>
              <li>
                <a href="#how-to-buy" className="hover:text-robin-green transition">How to Swap</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-robin-green transition">Live Portfolio Sim</a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-robin-green transition">Key Statistics</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Safety coordinates */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-display font-bold text-white text-xs uppercase tracking-widest">
              Official Target Coord
            </h5>
            <p className="text-xs text-gray-400">
              Only interact with the verified smart contract address below. Ensure correct address configuration before sending resources.
            </p>
            <div className="bg-robin-slate p-3 rounded-xl border border-gray-800/80 font-mono text-[10px] text-robin-green break-all select-all">
              {contractAddress}
            </div>
          </div>

        </div>

        {/* Lower footer: Traditional parody disclaimers (Robinhood themed) */}
        <div className="pt-12 space-y-6 text-[10px] leading-relaxed font-mono text-gray-500">
          
          <div className="flex items-start space-x-2">
            <FileText className="h-4 w-4 text-gray-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Memecoin Disclosure:</strong> Cryptocurrency trading involves significant financial risks. $HOODINU is a decentralized memecoin created purely for community culture, humor, and retail solidarity. It is not affiliated, sponsored, or endorsed by Robinhood Markets, Inc. or any traditional financial exchange.
            </p>
          </div>

          <p>
            <strong>Robinhood Parody Information:</strong> The &quot;Live Portfolio&quot; and trade buttons represented on this application are interactive mockups designed for amusement and entertainment purposes. Swap actions within the simulator do not constitute real-world financial transactions or exchange orders.
          </p>

          <p>
            <strong>Sherwood Exemption:</strong> Hoodinu does not support margin lending, options contracts, pattern day-trading locks, or server downtime during massive green breakouts. Under Sherwood bylaws, all pups remain fully unchained, loyal, and in complete custody of their digital coins.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800/40 gap-4">
            <span className="text-[10px]">
              &copy; {currentYear} HOODINU Pack. All retail rights unchained.
            </span>
            <span className="flex items-center space-x-1.5 text-[9px]">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              <span>for the Retail Pack</span>
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
