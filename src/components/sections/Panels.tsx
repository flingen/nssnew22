import { Scale, Wallet, Globe, Zap } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const panels = [
  {
    icon: Scale,
    title: 'Regulation & Policy',
    description: 'Exploring the frameworks shaping stablecoin adoption and compliance in Nigeria.',
    color: 'from-fintech-gold to-gold-dark',
  },
  {
    icon: Wallet,
    title: 'Stablecoins in Everyday Finance',
    description: 'Real-world applications transforming payments and financial access.',
    color: 'from-nigeria-green to-green-light',
  },
  {
    icon: Globe,
    title: 'Cross-Border Payments & Trade',
    description: 'Breaking down barriers in international transactions and remittances.',
    color: 'from-royal-blue to-electric-blue',
  },
  {
    icon: Zap,
    title: 'Innovation in Banking & Digital Ecosystems',
    description: 'How traditional finance is embracing digital transformation.',
    color: 'from-purple to-purple-light',
  },
];

export function Panels() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="agenda" className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-nigeria-green/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fintech-gold/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Panel Discussions"
          title="Deep Dive Sessions"
          subtitle="Each session dives deep into the forces advancing stablecoin adoption and financial transformation."
          light={true}
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {panels.map((panel) => (
            <div
              key={panel.title}
              className="glass-card-white rounded-2xl p-8 group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${panel.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <panel.icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h3 className="font-satoshi font-bold text-xl text-deep-navy mb-3 group-hover:text-nigeria-green transition-colors">
                    {panel.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{panel.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
