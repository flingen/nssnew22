import { SectionHeading } from '../ui/SectionHeading';

// Brand logo files in /public/brands/
const brands = [
  'aptos',
  'base-network',
  'lisk',
  'solana-superteam',
  'threshold',
  'flincap',
  'maplerad',
  'monierate',
  'roqqu',
  'paycrest',
  'oneremit',
  'paynest',
  'boundlesspay',
  'centiiv',
  'apex',
  'cloudplexo',
  'cryptonia',
  'dexpay',
  'jamit',
  'fusd',
  'nectarfi',
  'oryx',
  'pajcash',
  'staipy',
  'nexply',
  'sswerv',
  'hizo',
  'chainup',
  'crypto-apis',
  'digitpay',
  'xelio',
  'ydpay',
  'zerocard',
  'condia',
  'news-central',
  'coinsafe',
  'sphere',
  'upesa',
  'web3bridge',
  'chain-consults',
  'ledig',
  'zabira',
  'azza',
  'women-in-defi',
  'nirvana-academy',
  'partner-conduit',
];

export function PastBrands() {
  // Duplicate the list so the marquee can loop seamlessly via translateX(-50% → 0)
  const loop = [...brands, ...brands];

  return (
    <section className="py-20 md:py-24 section-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-nigeria-green/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-electric-blue/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 relative z-10">
        <SectionHeading
          eyebrow="Trusted by industry leaders"
          title="Brands That Have Graced Our Stage"
          subtitle="Founders, operators, and policy voices from these companies have shared insights at past Africa Stablecoin Network events. Join the next chapter at NSS 2.0."
        />
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-deep-navy via-deep-navy/90 to-transparent z-20 pointer-events-none" />

        {/* Sliding track — duplicated content for seamless loop */}
        <div
          className="flex gap-6 sm:gap-8 animate-slide-left hover:[animation-play-state:paused] py-4"
          style={{ width: 'max-content', animationDuration: '90s' }}
        >
          {loop.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 w-40 h-24 sm:w-48 sm:h-28 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center p-5 shadow-xl border border-white/10 transition-all duration-300 hover:bg-white hover:shadow-glow-green hover:-translate-y-1"
            >
              <img
                src={`/brands/${brand}.png`}
                alt={`${brand} logo`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
        <div className="text-center">
          <p className="text-text-grey text-sm">
            <span className="text-nigeria-green font-semibold">{brands.length}+</span> brands ·{' '}
            <span className="text-fintech-gold font-semibold">2 editions</span> · One movement
            shaping Africa&apos;s stablecoin future
          </p>
        </div>
      </div>
    </section>
  );
}
