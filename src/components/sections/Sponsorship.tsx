import { Mic, Store, ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const opportunities = [
  {
    icon: Mic,
    title: 'Spotlight Sessions',
    description:
      'Position your brand and leadership at the forefront of stablecoin, banking, and financial innovation by speaking directly to an influential audience of policymakers, builders, and decision-makers.',
    highlight: 'Own a keynote or panel discussion. Shape the narrative.',
    color: 'from-fintech-gold to-gold-dark',
  },
  {
    icon: Store,
    title: 'Exhibitions',
    description:
      'Explore interactive exhibits from industry builders showcasing stablecoin technology, fintech products, and next-gen payment solutions. Book a slot for your brand to show your next level solutions at the summit.',
    highlight: 'Physical booths to showcase your product to 750+ attendees.',
    color: 'from-nigeria-green to-green-light',
  },
];

export function Sponsorship() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sponsors" className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-fintech-gold/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-nigeria-green/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Marketing Opportunities"
          title="Position Your Brand at the Center of Fintech"
          subtitle="Gain visibility through strategic marketing opportunities designed for innovators in stablecoins, banking, and finance at the premier stablecoin meeting in Nigeria."
          light={true}
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.title}
              className="pillar-card p-8 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${opportunity.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <opportunity.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-satoshi font-bold text-2xl text-deep-navy mb-4">
                {opportunity.title}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {opportunity.description}
              </p>

              <div className="flex items-center gap-2 text-fintech-gold">
                <Sparkles className="w-4 h-4" />
                <p className="text-sm font-semibold italic">
                  {opportunity.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="glass-card-white rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-fintech-gold to-gold-dark flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-satoshi font-bold text-2xl text-deep-navy mb-2">
              Book Now - Slots are Limited!
            </h3>
            <p className="text-gray-700 mb-8">
              Contact us to discuss partnership packages tailored to your brand's goals and objectives.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1oz7kOV88m6olRAZYrPGP-WxSv1mcJcZM?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2"
            >
              Download Marketing Opportunities Deck <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
