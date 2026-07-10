import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Coins, Repeat, Sparkles, ChevronRight, Download, Check, Copy } from 'lucide-react';

interface HowToBuyProps {
  contractAddress: string;
}

export default function HowToBuy({ contractAddress }: HowToBuyProps) {
  const [activeTab, setActiveTab] = useState<'robinhood' | 'standard'>('robinhood');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const robinhoodSteps = [
    {
      id: 1,
      icon: Smartphone,
      title: "Install Robinhood Wallet",
      description: "Download the official, fully self-custodial 'Robinhood Wallet' app from the iOS App Store or Google Play Store. This is your personal stealth key to Sherwood Forest.",
      badge: "iOS / Android"
    },
    {
      id: 2,
      icon: Coins,
      title: "Fund with SOL or ETH",
      description: "Purchase Solana (SOL) or Ethereum (ETH) directly within the Robinhood App, then transfer it instantly into your Web3 self-custodial Robinhood Wallet, or import existing funds.",
      badge: "Direct Fund"
    },
    {
      id: 3,
      icon: Repeat,
      title: "Paste HOODINU Contract",
      description: "Tap the 'Swap' button inside the wallet. Select your input token and choose to import custom tokens. Paste the official, verified HOODINU contract address to import $HOODINU.",
      badge: "Verify Address"
    },
    {
      id: 4,
      icon: Sparkles,
      title: "Swap & Let It Fly!",
      description: "Confirm the swap transaction with 0% tax! The stealthy dog is now in your custody. Sit back and watch the retail green candles light up the chart.",
      badge: "0% Slippage Req"
    }
  ];

  const standardSteps = [
    {
      id: 1,
      icon: Smartphone,
      title: "Get Phantom or MetaMask",
      description: "Download Phantom (for Solana) or MetaMask (for Ethereum/L2s) as a browser extension or mobile application.",
      badge: "Browser Ext"
    },
    {
      id: 2,
      icon: Coins,
      title: "Load Up Native Assets",
      description: "Buy SOL or ETH from your preferred exchange (or Robinhood app) and send it directly to your new web3 wallet address.",
      badge: "Gas Ready"
    },
    {
      id: 3,
      icon: Repeat,
      title: "Connect to DEX",
      description: "Navigate to Raydium.io (for SOL) or Uniswap (for ETH) and connect your wallet securely in one click.",
      badge: "Raydium / Uniswap"
    },
    {
      id: 4,
      icon: Sparkles,
      title: "Execute Slippage Free",
      description: "Paste the contract address, select $HOODINU, and swap your assets. Enjoy absolute decentralized retail freedom!",
      badge: "No Taxes"
    }
  ];

  const currentSteps = activeTab === 'robinhood' ? robinhoodSteps : standardSteps;

  return (
    <section id="how-to-buy" className="py-20 bg-robin-dark border-t border-robin-slate relative overflow-hidden">
      
      {/* Background visual detail */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-robin-green/5 filter blur-3xl -z-10"></div>
      <div className="absolute left-1/4 bottom-1/4 w-96 h-96 rounded-full bg-lime-brand/5 filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            How To Buy <span className="text-robin-green">$HOODINU</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Joining the retail revolution is fast and completely stealthy. Choose your preferred weapon below and follow the simple coordinate guides.
          </p>

          {/* Toggle Buttons */}
          <div className="mt-8 inline-flex p-1.5 bg-robin-slate rounded-full border border-gray-800">
            <button
              onClick={() => setActiveTab('robinhood')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'robinhood'
                  ? 'bg-robin-green text-robin-dark shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Smartphone className="h-4 w-4" />
              <span>Buy with Robinhood Wallet</span>
            </button>
            <button
              onClick={() => setActiveTab('standard')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'standard'
                  ? 'bg-robin-green text-robin-dark shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Coins className="h-4 w-4" />
              <span>Standard DEX Swap</span>
            </button>
          </div>
        </div>

        {/* Dynamic Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-robin-slate p-6 rounded-2xl border border-gray-800 hover:border-robin-green/30 hover:shadow-2xl hover:shadow-robin-green/5 transition-all group flex flex-col justify-between"
              >
                {/* Number Indicator */}
                <div className="absolute top-4 right-4 font-mono font-black text-4xl text-gray-800/60 group-hover:text-robin-green/10 transition-colors select-none">
                  0{step.id}
                </div>

                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-robin-dark border border-gray-800 flex items-center justify-center text-robin-green mb-6 group-hover:bg-robin-green group-hover:text-robin-dark transition-all duration-300">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Badge Status */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-800/60">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-robin-green bg-robin-green/10 px-2 py-1 rounded">
                    {step.badge}
                  </span>
                  <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-robin-green group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verified Address Block */}
        <div className="mt-12 bg-gradient-to-r from-robin-slate to-robin-dark p-6 rounded-3xl border border-gray-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-robin-green/40 bg-robin-slate flex-shrink-0">
              <img
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-08_18-23-12.jpg?v=1783680170"
                alt="Logo small"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="font-display font-extrabold text-base text-white">Official Hoodinu Target (CA)</div>
              <div className="text-xs text-gray-400">Paste this exactly as the destination address during custom import.</div>
            </div>
          </div>

          {/* Code copy field */}
          <div className="w-full md:w-auto flex items-center space-x-2 bg-robin-dark/80 p-2.5 rounded-xl border border-gray-800/90 max-w-md">
            <span className="font-mono text-xs sm:text-sm text-robin-green tracking-wide truncate select-all pl-2">
              {contractAddress}
            </span>
            <button
              onClick={handleCopy}
              className="px-3 py-2 rounded-lg bg-robin-slate hover:bg-gray-800 text-white font-semibold text-xs transition flex items-center space-x-1 flex-shrink-0"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-robin-green" />
                  <span className="text-robin-green">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Help Disclaimer / Callout */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 font-mono">
            *Always check the contract address coordinates on chain. Sherwood Forest transactions are non-refundable. Let's make the blockchain retail again!
          </p>
        </div>

      </div>
    </section>
  );
}
