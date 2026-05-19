import { Link } from 'react-router-dom';
import { ArrowRight, Mic2 } from 'lucide-react';
import { speakers } from '../../data/speakers';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function SpeakersHighlight() {
  const { ref, isVisible } = useScrollAnimation();

  // Duplicate the list so the marquee loops seamlessly
  const loop = [...speakers, ...speakers];

  return (
    <section
      id="speakers-highlight"
      className="py-20 lg:py-28 bg-deep-navy relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-nigeria-green/10 rounded-full blur-[150px] pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-fintech-gold/10 text-fintech-gold text-sm font-semibold tracking-widest uppercase mb-6">
            Meet the Speakers
          </span>
          <h2 className="font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Voices Shaping the Future
          </h2>
          <p className="text-text-light text-lg max-w-3xl mx-auto">
            Founders, regulators, operators, and academics shaping the future of
            stablecoins, payments, and digital finance in Africa take the stage at NSS&nbsp;2.0.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-deep-navy via-deep-navy/90 to-transparent z-20 pointer-events-none" />

        <div
          className="flex gap-5 sm:gap-6 animate-slide-left hover:[animation-play-state:paused] py-4"
          style={{ width: 'max-content', animationDuration: '80s' }}
        >
          {loop.map((speaker, i) => (
            <Link
              key={`${speaker.id}-${i}`}
              to="/speakers"
              className="group flex-shrink-0 w-56 sm:w-64 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-fintech-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-gold"
            >
              <div className="aspect-square overflow-hidden bg-white/10">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  width={512}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4">
                <h3 className="font-satoshi font-bold text-white text-base leading-tight mb-1 group-hover:text-fintech-gold transition-colors line-clamp-1">
                  {speaker.name}
                </h3>
                <p className="text-text-light text-xs leading-snug line-clamp-1">
                  {speaker.role}
                </p>
                <p className="text-nigeria-green text-xs font-medium mt-1 line-clamp-1">
                  {speaker.organization}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
        <div className="text-center">
          <Link
            to="/speakers"
            className="btn-primary inline-flex items-center gap-3 px-8 py-3.5 text-base group"
          >
            <Mic2 className="w-5 h-5" />
            View All Speakers
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
