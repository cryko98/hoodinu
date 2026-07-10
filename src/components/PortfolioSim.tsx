import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LineChart, ArrowUpRight, Check, Coins, TrendingUp, AlertCircle, Info, RefreshCw, Smartphone, Award, Search, ExternalLink } from 'lucide-react';
import { CONTRACT_ADDRESS } from '../data';

// Price simulation datasets for SVG chart path generation
const CHART_DATA: Record<string, { points: string; color: string; returnText: string; pctText: string; peakVal: string }> = {
  '1D': {
    points: '0,180 50,175 100,160 150,165 200,140 250,150 300,110 350,120 400,40 450,20',
    color: '#21ce99',
    returnText: '+$1,260,420.69',
    pctText: '+8,840.21%',
    peakVal: '$1,420,690.00'
  },
  '1W': {
    points: '0,190 50,180 100,185 150,150 200,155 250,130 300,140 350,90 400,60 450,15',
    color: '#21ce99',
    returnText: '+$2,110,500.00',
    pctText: '+14,240.55%',
    peakVal: '$2,310,500.00'
  },
  '1M': {
    points: '0,195 50,190 100,170 150,160 200,130 250,110 300,90 350,70 400,30 450,5',
    color: '#21ce99',
    returnText: '+$5,840,110.00',
    pctText: '+42,100.99%',
    peakVal: '$6,040,110.00'
  },
  '3M': {
    points: '0,198 50,195 100,190 150,175 200,160 250,140 300,110 350,85 400,40 450,2',
    color: '#21ce99',
    returnText: '+$12,450,000.00',
    pctText: '+99,999.00%',
    peakVal: '$12,650,000.00'
  },
  '1Y': {
    points: '0,199 50,197 100,194 150,185 200,160 250,120 300,80 350,50 400,20 450,1',
    color: '#21ce99',
    returnText: '+$42,000,000.00',
    pctText: '+342,069.00%',
    peakVal: '$42,200,000.00'
  },
  'ALL': {
    points: '0,199 50,198 100,195 150,190 200,170 250,130 300,90 350,60 400,25 450,0',
    color: '#21ce99',
    returnText: '+$69,420,000.00',
    pctText: '+1,420,690.00%',
    peakVal: '$69,620,000.00'
  }
};

export default function PortfolioSim() {
  const [activeTab, setActiveTab] = useState<'1D' | '1W' | '1M' | '3M' | '1Y' | 'ALL'>('1D');
  const [purchaseAsset, setPurchaseAsset] = useState<'USD' | 'SOL' | 'ETH'>('USD');
  const [purchaseAmount, setPurchaseAmount] = useState<string>('100');
  const [orderReviewing, setOrderReviewing] = useState<boolean>(false);
  const [orderCompleted, setOrderCompleted] = useState<boolean>(false);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  const [chain, setChain] = useState<'solana' | 'base' | 'ethereum'>('solana');
  const [address, setAddress] = useState<string>(
    CONTRACT_ADDRESS && CONTRACT_ADDRESS !== 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' 
      ? CONTRACT_ADDRESS 
      : 'EKpQGSJtjMFqKZ9LNAnZ7Yg3rFMU1e35E4ayqMR5pump'
  );
  const [customAddress, setCustomAddress] = useState<string>('');

  // Exchange rates
  const conversionRates = {
    USD: 2500, // 2500 HOODINU per USD
    SOL: 520000, // 520k HOODINU per SOL
    ETH: 8400000 // 8.4M HOODINU per ETH
  };

  const getMultiplier = () => {
    return conversionRates[purchaseAsset];
  };

  const calculateTokens = () => {
    const val = parseFloat(purchaseAmount);
    if (isNaN(val) || val <= 0) return 0;
    return Math.floor(val * getMultiplier());
  };

  const handleReviewOrder = (e: FormEvent) => {
    e.preventDefault();
    const val = parseFloat(purchaseAmount);
    if (isNaN(val) || val <= 0) return;
    setOrderReviewing(true);
  };

  const handleConfirmOrder = () => {
    setIsSwiping(true);
    setTimeout(() => {
      setOrderCompleted(true);
      setOrderReviewing(false);
      setIsSwiping(false);
    }, 1200);
  };

  const handleReset = () => {
    setOrderCompleted(false);
    setPurchaseAmount('100');
  };

  return (
    <section id="portfolio" className="py-20 bg-robin-dark border-t border-robin-slate relative overflow-hidden">
      
      {/* Absolute glowing shapes to simulate premium dark style */}
      <div className="absolute right-1/4 bottom-0 w-80 h-80 rounded-full bg-robin-green/10 filter blur-3xl -z-10"></div>
      <div className="absolute left-1/4 top-0 w-80 h-80 rounded-full bg-lime-brand/5 filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module title header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 bg-robin-green/10 text-robin-green px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold mb-3">
            <TrendingUp className="h-3.5 w-3.5 animate-pulse" />
            <span>Interactive Sherwood Simulator</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Robinhood <span className="text-robin-green">Live Portfolio</span>
          </h2>
          <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
            Monitor real-time simulated returns of the $HOODINU retail treasury, and buy a bag instantly using our custom Robinhood simulated interface.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Live Real Dexscreener Chart (8 columns on lg) */}
          <div className="lg:col-span-8 bg-robin-slate p-4 sm:p-6 rounded-3xl border border-gray-800 flex flex-col justify-between h-[550px] shadow-2xl relative group overflow-hidden">
            
            {/* Ambient subtle light border on hover */}
            <div className="absolute inset-0 border border-robin-green/10 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>

            {/* Header statistics block */}
            <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c1d202] animate-pulse"></span>
                  <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block">
                    LIVE DEXMARKET CHART
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-1">
                  $HOODINU Market Chart
                </h3>
              </div>
              
              {/* Chain Selector */}
              <div className="flex space-x-1.5 bg-robin-dark p-1 rounded-xl border border-gray-800/80 self-start sm:self-center">
                {(['solana', 'base', 'ethereum'] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setChain(c);
                      // Set popular default addresses for chain swaps
                      if (c === 'solana') setAddress('EKpQGSJtjMFqKZ9LNAnZ7Yg3rFMU1e35E4ayqMR5pump');
                      else if (c === 'base') setAddress('0x532f27101965dd16442e59d40670faf5ebb142e4'); // BRETT
                      else if (c === 'ethereum') setAddress('0x6982508145454ce325ddbe47a25d4ec3d2311933'); // PEPE
                    }}
                    className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase font-black transition ${
                      chain === c
                        ? 'bg-[#c1d202] text-black shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Real Dexscreener Chart Iframe */}
            <div className="flex-1 w-full bg-robin-dark/50 rounded-2xl overflow-hidden border border-gray-800/80 relative min-h-[280px]">
              <iframe 
                src={`https://dexscreener.com/${chain}/${address}?embed=1&theme=dark&trades=0&info=0`}
                className="absolute inset-0 w-full h-full border-0"
                title="Dexscreener Chart"
                allow="clipboard-write"
                allowFullScreen
              ></iframe>
            </div>

            {/* Footer Control bar for updating contract address */}
            <div className="mt-4 border-t border-gray-800/80 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                  <input
                    type="text"
                    value={customAddress}
                    onChange={(e) => setCustomAddress(e.target.value)}
                    placeholder="Paste Contract Address..."
                    className="w-full pl-10 pr-4 py-2 bg-robin-dark border border-gray-800 rounded-xl text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-[#c1d202] transition"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (customAddress.trim()) {
                      setAddress(customAddress.trim());
                    }
                  }}
                  className="px-4 py-2 bg-[#c1d202] text-black font-black font-mono text-xs uppercase tracking-wider rounded-xl transition hover:opacity-90 active:scale-95"
                >
                  Load Chart
                </button>
              </div>

              {/* Quick links */}
              <div className="flex items-center space-x-2">
                {CONTRACT_ADDRESS && CONTRACT_ADDRESS !== 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' && (
                  <button
                    type="button"
                    onClick={() => {
                      setChain('solana');
                      setAddress(CONTRACT_ADDRESS);
                      setCustomAddress(CONTRACT_ADDRESS);
                    }}
                    className="px-3 py-1.5 bg-robin-dark/80 hover:bg-robin-dark text-gray-300 hover:text-white rounded-lg border border-gray-800/80 text-[10px] font-mono font-bold flex items-center space-x-1 transition"
                  >
                    <span>Use $HOODINU</span>
                  </button>
                )}
                <a
                  href={`https://dexscreener.com/${chain}/${address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-robin-dark/80 hover:bg-[#c1d202]/10 text-gray-400 hover:text-[#c1d202] rounded-lg border border-gray-800/80 text-[10px] font-mono font-bold flex items-center space-x-1 transition"
                >
                  <span>Dexscreener</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Buy/Sell Panel (4 columns on lg) */}
          <div className="lg:col-span-4 bg-robin-slate rounded-3xl border border-gray-800 p-6 shadow-2xl relative min-h-[520px] flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {/* STATE 1: Completed Order Success Screen */}
              {orderCompleted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-8 space-y-6 flex-1"
                >
                  <div className="w-16 h-16 rounded-full bg-robin-green/10 border border-robin-green/30 flex items-center justify-center text-robin-green animate-bounce">
                    <Check className="h-8 w-8" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-extrabold text-2xl text-white">Order Filled! 💸</h4>
                    <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                      You have successfully secured your bag of <span className="text-robin-green font-bold">{calculateTokens().toLocaleString()} $HOODINU</span>!
                    </p>
                  </div>

                  {/* Fun Robinhood styled certificate card */}
                  <div className="w-full bg-robin-dark p-4 rounded-2xl border border-gray-800 font-mono text-[10px] space-y-2.5 text-left relative overflow-hidden">
                    <div className="absolute right-3 top-3 opacity-10">
                      <Award className="h-10 w-10 text-robin-green" />
                    </div>
                    <div className="text-robin-green font-bold text-[11px] border-b border-gray-800 pb-1.5 uppercase tracking-widest">
                      Robinhood Executed
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Asset:</span>
                      <span className="text-white font-bold">$HOODINU (Sherwood)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Amount Paid:</span>
                      <span className="text-white font-bold">{parseFloat(purchaseAmount).toLocaleString()} {purchaseAsset}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tokens Loaded:</span>
                      <span className="text-robin-green font-extrabold">+{calculateTokens().toLocaleString()} HOODINU</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-800/60 pt-1.5">
                      <span className="text-gray-500">Tax Fee:</span>
                      <span className="text-robin-green font-bold">$0.00 (Zero Fee)</span>
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-gray-500 italic max-w-xs">
                    "Whale liquidity drained. Retail score updated. Sherwood Forest thanks you, pup."
                  </p>

                  <button
                    onClick={handleReset}
                    className="w-full py-3 bg-robin-green hover:bg-robin-green/90 text-robin-dark font-black text-xs uppercase tracking-widest rounded-xl transition active:scale-95 cursor-pointer"
                  >
                    Buy Another Bag
                  </button>
                </motion.div>
              ) : orderReviewing ? (
                /* STATE 2: Order Review Slide-up */
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="flex flex-col justify-between flex-1 py-4 space-y-6"
                >
                  <div>
                    <h4 className="font-display font-extrabold text-xl text-white tracking-tight border-b border-gray-800 pb-3">
                      Review Swap Order
                    </h4>

                    {/* Step breakdowns */}
                    <div className="mt-6 space-y-4 font-mono text-xs">
                      <div className="flex justify-between text-gray-400">
                        <span>Swap Input:</span>
                        <span className="text-white font-bold">{purchaseAmount} {purchaseAsset}</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Swap Output:</span>
                        <span className="text-robin-green font-extrabold">{calculateTokens().toLocaleString()} HOODINU</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Exchange Rate:</span>
                        <span className="text-gray-300">1 {purchaseAsset} ≈ {getMultiplier().toLocaleString()} HOODINU</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Slippage Tolerance:</span>
                        <span className="text-robin-green font-bold">Auto (0.1%)</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Gas Fees:</span>
                        <span className="text-robin-green font-semibold">FREE (Sherwood Covered)</span>
                      </div>
                    </div>

                    <div className="mt-8 bg-robin-dark/60 p-3.5 rounded-xl border border-gray-800 flex items-start space-x-2">
                      <Info className="h-4 w-4 text-robin-green mt-0.5 flex-shrink-0" />
                      <p className="text-[10px] text-gray-400 leading-relaxed font-sans">
                        By completing this order, you are sending liquidity to locked pool pools. $HOODINU is self-custodial and operates with absolute decentralized authority.
                      </p>
                    </div>
                  </div>

                  {/* Swipe / Action Button */}
                  <div className="space-y-3 pt-4">
                    <button
                      onClick={handleConfirmOrder}
                      disabled={isSwiping}
                      className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all relative overflow-hidden flex items-center justify-center ${
                        isSwiping 
                          ? 'bg-robin-green/40 text-robin-dark' 
                          : 'bg-robin-green text-robin-dark hover:bg-robin-green/90'
                      }`}
                    >
                      {isSwiping ? (
                        <div className="flex items-center space-x-2">
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span>Routing Through Sherwood...</span>
                        </div>
                      ) : (
                        <span>Confirm Swap Order 🏹</span>
                      )}
                    </button>
                    <button
                      onClick={() => setOrderReviewing(false)}
                      className="w-full text-center py-2.5 text-xs font-mono font-bold text-gray-400 hover:text-white"
                    >
                      Edit Order Amount
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* STATE 3: Standard Input Form */
                <motion.form
                  onSubmit={handleReviewOrder}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col justify-between flex-1"
                >
                  <div>
                    {/* Header: Trade panels */}
                    <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                      <h4 className="font-display font-extrabold text-lg text-white">
                        Buy $HOODINU
                      </h4>
                      
                      {/* Asset selector */}
                      <div className="flex space-x-1 bg-robin-dark p-1 rounded-lg border border-gray-800">
                        {(['USD', 'SOL', 'ETH'] as const).map((asset) => (
                          <button
                            type="button"
                            key={asset}
                            onClick={() => setPurchaseAsset(asset)}
                            className={`px-2.5 py-1 rounded text-[10px] font-mono font-black transition ${
                              purchaseAsset === asset
                                ? 'bg-robin-green text-robin-dark'
                                : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            {asset}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Main input body */}
                    <div className="mt-8 space-y-6">
                      <div className="flex justify-between items-center bg-robin-dark/40 p-4 rounded-xl border border-gray-800">
                        <div>
                          <label className="block text-[10px] font-mono font-black text-gray-400 uppercase tracking-widest">
                            INVESTING AMOUNT
                          </label>
                          <input
                            type="number"
                            min="1"
                            placeholder="0.00"
                            value={purchaseAmount}
                            onChange={(e) => setPurchaseAmount(e.target.value)}
                            className="bg-transparent text-white font-display font-bold text-xl sm:text-2xl outline-none focus:outline-none w-32 mt-1"
                            required
                          />
                        </div>
                        <span className="font-mono font-extrabold text-base text-gray-400">
                          {purchaseAsset}
                        </span>
                      </div>

                      {/* Display equivalent calculation */}
                      <div className="bg-robin-dark/80 p-4 rounded-xl border border-gray-800/60 flex items-center justify-between">
                        <div>
                          <span className="block text-[9px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                            ESTIMATED HOODINU RECEIVED
                          </span>
                          <span className="font-display font-black text-lg text-robin-green mt-1.5 block">
                            {calculateTokens().toLocaleString()} <span className="text-xs">HOODINU</span>
                          </span>
                        </div>
                        <Coins className="h-6 w-6 text-robin-green" />
                      </div>

                      {/* Extra informative details (Robinhood stats) */}
                      <div className="space-y-3.5 font-mono text-[10px] text-gray-400 border-t border-gray-800/50 pt-5">
                        <div className="flex justify-between">
                          <span>Slippage Tolerance</span>
                          <span className="text-robin-green font-bold">0.1% (Low Impact)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Market Rate Status</span>
                          <span className="text-white font-semibold">Active & Stealthy</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sherwood Fee</span>
                          <span className="text-robin-green font-bold">$0.00 (Zero Gas)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Primary Review Order button */}
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-robin-green hover:bg-robin-green/90 text-robin-dark font-black text-xs uppercase tracking-widest rounded-xl shadow-xl transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <span>Review Simulated Order</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <div className="text-center mt-3 flex items-center justify-center space-x-1.5 text-[9px] font-mono text-gray-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>This is a visual trading mockup for entertainment</span>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
