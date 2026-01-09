import { Scale, Coins, Building2, TrendingUp, Code, Lightbulb } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const audiences = [
  {
    icon: Scale,
    title: 'Policymakers & Regulators',
    description: 'Shaping financial frameworks',
    color: 'from-fintech-gold to-gold-dark',
  },
  {
    icon: Coins,
    title: 'Stablecoin Issuers',
    description: 'Fintech innovators',
    color: 'from-nigeria-green to-green-light',
  },
  {
    icon: Building2,
    title: 'Banks & PSPs',
    description: 'Payment infrastructure builders',
    color: 'from-royal-blue to-electric-blue',
  },
  {
    icon: TrendingUp,
    title: 'Investors',
    description: 'Ecosystem enablers',
    color: 'from-purple to-purple-light',
  },
  {
    icon: Code,
    title: 'Developers',
    description: 'Technical builders',
    color: 'from-cyan to-electric-blue',
  },
  {
    icon: Lightbulb,
    title: 'Entrepreneurs',
    description: 'Curious changemakers',
    color: 'from-nigeria-green to-cyan',
  },
];

export function WhoShouldAttend() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
      <div className="absolute inset-0 network-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Who Should Be Listening?"
          title="This Summit is Designed For"
          subtitle="Whether you're deeply embedded in the stablecoin industry or exploring its potential, NSS 2.0 has insights for you."
        />

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="text-center group cursor-pointer glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-satoshi font-bold text-white text-sm mb-1 group-hover:text-nigeria-green transition-colors">
                {audience.title}
              </h3>
              <p className="text-text-grey text-xs">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
