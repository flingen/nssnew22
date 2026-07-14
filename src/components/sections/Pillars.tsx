import { Wallet, Building, Shield, Users, Globe, Server } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const pillars = [
  {
    icon: Wallet,
    title: 'Stablecoins & Digital Payments',
    description:
      'How stablecoins are transforming everyday payments, remittances, and merchant settlements.',
    color: 'from-nigeria-green to-green-light',
  },
  {
    icon: Building,
    title: 'Banking Innovation & Integration',
    description:
      'The evolving relationship between traditional banks, fintechs, and stablecoin infrastructure.',
    color: 'from-royal-blue to-electric-blue',
  },
  {
    icon: Shield,
    title: 'Regulation, Policy & Compliance',
    description: 'Navigating regulatory frameworks, risk management, and responsible innovation.',
    color: 'from-fintech-gold to-gold-dark',
  },
  {
    icon: Users,
    title: 'Financial Inclusion & Access',
    description:
      'Expanding access to financial services for individuals and businesses through stablecoin adoption.',
    color: 'from-purple to-purple-light',
  },
  {
    icon: Globe,
    title: 'Cross-Border Trade & Remittances',
    description: 'Unlocking faster, cheaper, and more transparent cross-border transactions.',
    color: 'from-cyan to-electric-blue',
  },
  {
    icon: Server,
    title: 'Infrastructure, Security & Scalability',
    description:
      'Building resilient, secure, and scalable systems for the next phase of digital finance.',
    color: 'from-nigeria-green to-cyan',
  },
];

export function Pillars() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 section-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-nigeria-green/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Scope of the Summit"
          title="Shaping the Conversation"
          subtitle="NSS 2.0 explores six critical areas shaping the future of stablecoins, banking, and finance in Nigeria and across Africa."
          light
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-satoshi font-bold text-lg text-deep-navy mb-3 group-hover:text-nigeria-green transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
