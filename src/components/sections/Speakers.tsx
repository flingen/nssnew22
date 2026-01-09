import { Mic2, User, Bell } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const speakerSlots = [
  { role: 'Regulator', description: 'Policy & Compliance' },
  { role: 'Builder', description: 'Fintech Innovation' },
  { role: 'Industry', description: 'Global Stablecoin' },
  { role: 'Banking', description: 'Traditional Finance' },
  { role: 'Investor', description: 'Ecosystem Capital' },
  { role: 'Developer', description: 'Technical Infrastructure' },
];

const roleColors: Record<string, string> = {
  Regulator: 'border-fintech-gold bg-fintech-gold/10',
  Builder: 'border-nigeria-green bg-nigeria-green/10',
  Industry: 'border-purple bg-purple/10',
  Banking: 'border-royal-blue bg-royal-blue/10',
  Investor: 'border-gold-dark bg-gold-dark/10',
  Developer: 'border-cyan bg-cyan/10',
};

export function Speakers() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="speakers" className="py-20 lg:py-28 section-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-nigeria-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Summit Speakers"
          title="Meet the Voices Shaping the Future"
          subtitle="Get ready for over 25 visionary leading voices who are pushing the boundaries of banking, fintech and stablecoin innovation."
          light
        />

        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="glass-card-white rounded-3xl p-8 md:p-12 text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-nigeria-green to-green-light flex items-center justify-center">
              <Mic2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-satoshi font-bold text-2xl md:text-3xl text-deep-navy mb-4">
              Speaker List Coming Soon!
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We're curating an exceptional lineup of thought leaders, regulators, innovators, and industry experts
              who will share their insights on the future of payments and banking innovation in Africa.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {speakerSlots.map((slot) => (
                <div
                  key={slot.role}
                  className={`p-4 rounded-xl border-2 ${roleColors[slot.role]} transition-all hover:scale-105`}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/80 flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="font-satoshi font-bold text-deep-navy text-sm">{slot.role}</p>
                  <p className="text-gray-500 text-xs">{slot.description}</p>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-nigeria-green/10 to-purple/10 border border-nigeria-green/20">
              <Bell className="w-5 h-5 text-nigeria-green" />
              <span className="text-deep-navy font-medium">Stay tuned for announcements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
