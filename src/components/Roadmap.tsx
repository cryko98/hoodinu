import { motion } from 'motion/react';
import { ROADMAP_PHASES } from '../data';
import { ShieldCheck, Compass, Target, Rocket, CheckCircle, Hourglass, Calendar } from 'lucide-react';

export default function Roadmap() {
  
  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case 'Phase 1': return <Compass className="h-5 w-5" />;
      case 'Phase 2': return <Target className="h-5 w-5" />;
      case 'Phase 3': return <Rocket className="h-5 w-5" />;
      case 'Phase 4': return <ShieldCheck className="h-5 w-5" />;
      default: return <Target className="h-5 w-5" />;
    }
  };

  const getStatusBadgeStyle = (status: 'completed' | 'in-progress' | 'upcoming') => {
    switch (status) {
      case 'completed':
        return 'bg-robin-green/15 text-robin-green border border-robin-green/30';
      case 'in-progress':
        return 'bg-lime-brand/15 text-lime-brand border border-lime-brand/30 animate-pulse';
      case 'upcoming':
        return 'bg-gray-800 text-gray-500 border border-gray-800';
    }
  };

  const getStatusLabel = (status: 'completed' | 'in-progress' | 'upcoming') => {
    switch (status) {
      case 'completed': return 'Secure & Active';
      case 'in-progress': return 'Active Launch';
      case 'upcoming': return 'Stealth Target';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-robin-slate border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-robin-green/10 text-robin-green px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold mb-3">
            <Calendar className="h-3.5 w-3.5" />
            <span>Target Milestones</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            The Sherwood <span className="text-robin-green">Stealth Campaign</span>
          </h2>
          <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
            Our strategic trajectory is divided into structured operational phases. Follow the coordinates below as we expand the retail domain.
          </p>
        </div>

        {/* Timeline Grid layout (responsive, vertical stack on mobile, grid on large screen) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_PHASES.map((phase, idx) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-robin-dark p-6 rounded-3xl border border-gray-800 hover:border-robin-green/20 hover:shadow-2xl hover:shadow-robin-green/2 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-robin-slate border border-gray-800 flex items-center justify-center text-robin-green group-hover:bg-robin-green group-hover:text-robin-dark transition-all duration-300">
                    {getPhaseIcon(phase.phase)}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${getStatusBadgeStyle(phase.status)}`}>
                    {getStatusLabel(phase.status)}
                  </span>
                </div>

                {/* Info titles */}
                <div className="space-y-1 mb-5">
                  <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest block">
                    {phase.phase}
                  </span>
                  <h4 className="font-display font-extrabold text-base sm:text-lg text-white group-hover:text-robin-green transition-colors">
                    {phase.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed pt-1.5 font-sans">
                    {phase.description}
                  </p>
                </div>

                {/* Sub-items check list */}
                <ul className="space-y-2.5 border-t border-gray-800/60 pt-5 text-xs font-mono">
                  {phase.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2 text-gray-400 leading-snug">
                      {phase.status === 'completed' ? (
                        <CheckCircle className="h-3.5 w-3.5 text-robin-green flex-shrink-0 mt-0.5" />
                      ) : phase.status === 'in-progress' && pIdx === 0 ? (
                        <Hourglass className="h-3.5 w-3.5 text-lime-brand animate-spin flex-shrink-0 mt-0.5 [animation-duration:4s]" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2 ml-1 flex-shrink-0"></div>
                      )}
                      <span className={phase.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-400'}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress visual indicator at bottom of card */}
              <div className="mt-8 pt-4 border-t border-gray-800/40">
                <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${phase.status === 'completed' ? 'bg-robin-green w-full' : phase.status === 'in-progress' ? 'bg-lime-brand w-2/5' : 'bg-gray-900 w-0'}`}
                  ></div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
