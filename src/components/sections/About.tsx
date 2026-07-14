import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-12 lg:py-16 section-dark relative overflow-hidden">
      <div className="absolute inset-0 network-bg" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-nigeria-green/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/x8DxbBTnbgs?autoplay=1&mute=1&loop=1&playlist=x8DxbBTnbgs&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1"
              title="Nigeria Stablecoin Summit Highlights"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-nigeria-green/10 text-nigeria-green text-sm font-semibold tracking-widest uppercase mb-6">
              About the Summit
            </span>

            <h2 className="font-satoshi font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
              BEYOND HYPE.
              <br />
              <span className="gradient-text-green">BEYOND CRYPTO.</span>
              <br />
              BUILDING FINANCIAL RAILS.
            </h2>

            <div className="space-y-2.5 text-text-light text-sm md:text-base lg:text-lg leading-relaxed mb-5">
              <p>
                Nigeria is at the forefront of the innovation of payments and banking with
                stablecoins.
              </p>
              <p>
                Stablecoins are reshaping the way money moves, stabilizing financial flows, and
                unlocking new opportunities for millions across Nigeria and beyond. NSS 2.0 brings
                together the builders, regulators, and visionaries who are driving this movement
                forward, sparking conversations that will define the future of finance.
              </p>
              <p>
                Like the SEC DG, Dr Emomotimi Agama said at NSS 1.0, "Nigeria is open to
                stablecoins." We are taking advantage of this momentum to build the future of
                digital money now with stablecoins.
              </p>
              <p className="text-white font-semibold text-lg md:text-xl">This is not just an event; it is an experience!</p>
            </div>

            <div className="glass-card rounded-2xl p-5 gold-border-left relative">
              <Quote className="absolute -top-3 -left-3 w-7 h-7 text-fintech-gold" />
              <blockquote className="text-white italic text-sm md:text-base lg:text-lg leading-relaxed">
                "When the history books document Africa's financial revolution, today will be
                remembered as the moment we moved from potential to action. This is a significant
                step toward fostering a thriving and regulated digital asset ecosystem."
              </blockquote>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fintech-gold to-gold-dark flex items-center justify-center">
                  <span className="font-bold text-deep-navy">EA</span>
                </div>
                <div>
                  <cite className="text-fintech-gold font-bold not-italic block">
                    Dr. Emomotimi Agama
                  </cite>
                  <span className="text-text-grey text-sm">
                    Director General, SEC Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
