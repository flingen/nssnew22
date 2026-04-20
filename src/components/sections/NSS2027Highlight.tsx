import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function NSS2027Highlight() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="nss-2027"
      className="relative py-20 lg:py-28 section-gradient-rich overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-nigeria-green/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fintech-gold/10 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple/15 rounded-full blur-[120px]" />

      {/* Subtle diagonal light beam */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(115deg, transparent 40%, rgba(255, 215, 0, 0.08) 50%, transparent 60%)',
        }}
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Announcement pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 glass-card-strong px-5 py-2.5 rounded-full animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-fintech-gold" />
            <span className="text-fintech-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              Save The Date · Announcing
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-10">
          <h2 className="font-satoshi font-bold text-white leading-[0.95] mb-4">
            <span className="block text-2xl md:text-3xl lg:text-4xl text-text-light mb-2 font-medium tracking-wide">
              Nigeria Stablecoin Summit
            </span>
            <span
              className="block text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-extrabold gradient-text-gold drop-shadow-[0_0_30px_rgba(255,215,0,0.3)] tracking-tighter"
              style={{ lineHeight: 0.9 }}
            >
              2027
            </span>
          </h2>

          <p className="text-text-light text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            The biggest stablecoin conversation in Africa returns — bigger stages,
            deeper conversations, and a continent-wide audience.
          </p>
        </div>

        {/* Event detail cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          <div className="glass-card rounded-2xl p-5 text-center card-glow">
            <div className="w-11 h-11 rounded-xl bg-nigeria-green/20 flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-5 h-5 text-nigeria-green" />
            </div>
            <p className="text-xs text-text-grey uppercase tracking-wider mb-1">Date</p>
            <p className="text-white font-semibold text-sm md:text-base">
              Thursday, July 22, 2027
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 text-center card-glow">
            <div className="w-11 h-11 rounded-xl bg-electric-blue/20 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-5 h-5 text-electric-blue" />
            </div>
            <p className="text-xs text-text-grey uppercase tracking-wider mb-1">Time</p>
            <p className="text-white font-semibold text-sm md:text-base">
              8:00 AM – 4:00 PM UTC
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 text-center card-glow">
            <div className="w-11 h-11 rounded-xl bg-fintech-gold/20 flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-5 h-5 text-fintech-gold" />
            </div>
            <p className="text-xs text-text-grey uppercase tracking-wider mb-1">Venue</p>
            <p className="text-white font-semibold text-sm md:text-base">
              Lagos Oriental Hotel
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex justify-center">
          <Link
            to="/nss-2027"
            className="btn-primary inline-flex items-center gap-3 px-10 py-4 text-base md:text-lg group"
          >
            Learn More About NSS 2027
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
