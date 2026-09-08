import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, ArrowUpRight, ShieldCheck, Heart, Github } from 'lucide-react';

const XIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  contractAddress: string;
}

export default function Header({ onNavigate, contractAddress }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const menuItems = [
    { label: 'Story', id: 'story' },
    { label: 'How to Buy', id: 'how-to-buy' },
    { label: 'Portfolio Sim', id: 'portfolio' },
    { label: 'Tokenomics', id: 'tokenomics' },
    { label: 'Robinhood News', id: 'news' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-robin-dark/95 backdrop-blur-md border-b border-robin-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Brand Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('hero')}>
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-lime-brand/50 bg-robin-slate flex-shrink-0">
              <img 
                src="/hoodinu.png" 
                alt="HOODINU Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center">
                HOODINU
                <span className="ml-1.5 px-1.5 py-0.5 rounded text-[9px] font-mono tracking-widest bg-lime-brand text-robin-dark font-black">
                  $HOODINU
                </span>
              </span>
            </div>
          </div>

          {/* Center: Search Bar (Robinhood Signature UI) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              placeholder="Search '$HOODINU' or ticker..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-robin-slate/60 text-white placeholder-gray-400 text-sm pl-9 pr-4 py-2 rounded-lg border border-transparent focus:border-robin-green/40 focus:bg-robin-slate/80 focus:outline-none transition-all duration-200"
            />
            {searchQuery && (
              <div className="absolute top-12 left-0 right-0 bg-robin-slate rounded-lg border border-robin-green/30 p-3 shadow-2xl text-xs z-50">
                <div className="font-mono text-[10px] text-robin-green uppercase tracking-wider mb-1 font-bold">Search Result</div>
                <div className="flex items-center justify-between text-white p-1 hover:bg-robin-dark/40 rounded transition">
                  <span className="font-bold flex items-center">
                    🟢 $HOODINU <span className="ml-2 text-gray-400 font-normal">Robinhood Memecoin</span>
                  </span>
                  <span className="text-robin-green font-semibold">+8,840.21% Today</span>
                </div>
              </div>
            )}
          </div>

          {/* Right: Desktop Navigation Links & Action */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-gray-300 hover:text-robin-green text-sm font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={copyAddress}
              className="px-3 py-1.5 rounded bg-robin-slate text-xs font-mono text-gray-300 hover:text-white hover:bg-robin-slate/90 transition flex items-center space-x-1.5"
            >
              <span className="text-gray-500">CA:</span>
              <span className="text-robin-green font-bold">
                {contractAddress.substring(0, 6)}...{contractAddress.substring(contractAddress.length - 4)}
              </span>
              <span className="text-[10px] px-1 py-0.2 bg-robin-dark rounded text-gray-400">
                {isCopied ? 'Copied! ✅' : 'Copy'}
              </span>
            </button>

            <div className="flex items-center space-x-2 border-l border-gray-800 pl-4">
              <a 
                href="https://x.com/i/communities/2038276050287993288" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full text-gray-400 hover:text-[#c1d202] hover:bg-robin-dark/50 transition flex items-center justify-center border border-gray-800"
                title="X Community"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={copyAddress}
              className="px-2 py-1.5 rounded bg-robin-slate text-[10px] font-mono text-gray-300 flex items-center"
            >
              <span className="text-robin-green font-bold">
                {isCopied ? 'Copied! ✅' : 'CA: xxxx...xxxx'}
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-robin-slate/95 border-b border-robin-slate overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {/* Search in mobile */}
              <div className="relative py-2">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                  <Search className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search '$HOODINU'..."
                  className="w-full bg-robin-dark text-white placeholder-gray-400 text-sm pl-9 pr-4 py-2 rounded-lg focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-robin-dark/40 hover:text-robin-green transition-colors"
                >
                  {item.label}
                </button>
              ))}

              {/* Removed Connect Wallet mobile block */}
              <div className="pt-4 border-t border-robin-dark flex items-center justify-center">
                <a 
                  href="https://x.com/i/communities/2038276050287993288" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-6 py-2 bg-robin-dark text-gray-300 hover:text-[#c1d202] rounded-xl text-xs font-mono font-bold flex items-center space-x-2 border border-gray-800 w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XIcon className="h-4 w-4" />
                  <span>X Community</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
