import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const mediaPartners = [
  { name: 'Stablecoin Media', initials: 'SM' },
  { name: 'Crypto Africa', initials: 'CA' },
  { name: 'Fintech News', initials: 'FN' },
  { name: 'Digital Assets Review', initials: 'DA' },
];

export function MediaPartners() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 section-gradient">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-center text-text-grey text-sm mb-6 tracking-wide uppercase">
          Media Partners
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {mediaPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 group cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="font-satoshi font-bold text-white text-sm">
                  {partner.initials}
                </span>
              </div>
              <span className="text-white text-sm font-medium hidden sm:block">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
