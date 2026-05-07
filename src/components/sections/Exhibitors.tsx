import { SectionHeading } from '../ui/SectionHeading';

interface Exhibitor {
  slug: string;
  name: string;
  logo: string;
  href?: string;
}

const exhibitors: Exhibitor[] = [
  { slug: 'ydpay',     name: 'YDPay',             logo: '/exhibitors/ydpay.svg' },
  { slug: 'centiiv',   name: 'Centiiv',           logo: '/exhibitors/centiiv.svg' },
  { slug: 'nexply',    name: 'Nexply Compliance', logo: '/exhibitors/nexply-compliance.png' },
  { slug: 'ledig',     name: 'Ledig',             logo: '/exhibitors/ledig.png' },
  { slug: 'vaspa',     name: 'VASPA',             logo: '/exhibitors/vaspa.png' },
  { slug: 'yogupay',   name: 'YogUpay',           logo: '/exhibitors/yogupay.png' },
];

export function Exhibitors() {
  // Duplicate so the marquee loops seamlessly
  const loop = [...exhibitors, ...exhibitors, ...exhibitors];

  return (
    <section id="exhibitors" className="py-20 md:py-24 section-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-fintech-gold/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-nigeria-green/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 relative z-10">
        <SectionHeading
          eyebrow="On the Show Floor"
          title="Meet Our Exhibitors"
          subtitle="Walk the exhibition hall and engage directly with the platforms, infrastructure providers, and ecosystem builders powering Africa’s stablecoin economy."
        />
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-deep-navy via-deep-navy/90 to-transparent z-20 pointer-events-none" />

        <div
          className="flex gap-6 sm:gap-8 animate-slide-left hover:[animation-play-state:paused] py-4"
          style={{ width: 'max-content', animationDuration: '50s' }}
        >
          {loop.map((exhibitor, i) => (
            <div
              key={`${exhibitor.slug}-${i}`}
              className="flex-shrink-0 w-48 h-28 sm:w-56 sm:h-32 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center p-6 shadow-xl border border-white/10 transition-all duration-300 hover:bg-white hover:shadow-glow-gold hover:-translate-y-1"
            >
              <img
                src={exhibitor.logo}
                alt={`${exhibitor.name} logo`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
        <div className="text-center">
          <p className="text-text-grey text-sm">
            <span className="text-fintech-gold font-semibold">{exhibitors.length}+</span> exhibitors confirmed ·{' '}
            <span className="text-nigeria-green font-semibold">More joining</span> the show floor
          </p>
        </div>
      </div>
    </section>
  );
}
