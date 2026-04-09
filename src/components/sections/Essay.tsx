import { Trophy, Calendar, GraduationCap, FileText, Award, Users, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const prizes = [
  { icon: Trophy, text: 'Prizes for the top 3 essays' },
  { icon: Award, text: 'Recognition at the Nigeria Stablecoin Summit' },
  { icon: Users, text: 'Exclusive networking opportunities' },
];

const guidelines = [
  'Open to undergraduates across Nigerian tertiary institutions',
  'Original essays only - AI-generated content will be disqualified',
  'Application closes: June 30, 2026',
];

const categories = [
  {
    icon: GraduationCap,
    title: 'Undergraduates',
    topic: 'New Vistas: Stablecoins as a Tool for Payments and Banking Innovation',
    color: 'from-royal-blue to-electric-blue',
    borderColor: 'border-royal-blue',
    submitLink: 'https://forms.gle/UkgTxizuxoxSqndp8',
  },
];

export function Essay() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="essay" className="py-20 lg:py-28 section-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-nigeria-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-nigeria-green/10 text-nigeria-green text-sm font-semibold tracking-widest uppercase mb-6">
            Student Spotlight
          </span>
          <h2 className="font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl text-deep-navy leading-tight mb-4">
            The NSS 2.0 National Essay Competition
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Spotlighting the next generation of thinkers and innovators through a nationwide Essay Contest
            for undergraduates of tertiary institutions in Nigeria.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-1 max-w-2xl mx-auto gap-8 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category) => (
            <div
              key={category.title}
              className={`essay-card p-8 border-t-4 ${category.borderColor}`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-satoshi font-bold text-2xl text-deep-navy mb-2">
                {category.title}
              </h3>

              <p className="text-gray-500 text-sm mb-4">Essay Topic:</p>

              <p className="text-gray-700 font-medium leading-relaxed mb-6 min-h-[60px]">
                "{category.topic}"
              </p>

              <a
                href={category.submitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green px-6 py-3 inline-flex items-center gap-2 text-sm"
              >
                Submit Essay <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fintech-gold to-gold-dark flex items-center justify-center">
                <Trophy className="w-6 h-6 text-deep-navy" />
              </div>
              <h3 className="font-satoshi font-bold text-xl text-deep-navy">What's at Stake</h3>
            </div>

            <div className="space-y-4">
              {prizes.map((prize) => (
                <div
                  key={prize.text}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-nigeria-green/10 flex items-center justify-center flex-shrink-0">
                    <prize.icon className="w-5 h-5 text-nigeria-green" />
                  </div>
                  <p className="text-gray-700 font-medium">{prize.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-blue to-electric-blue flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-satoshi font-bold text-xl text-deep-navy">Key Details</h3>
            </div>

            <div className="space-y-4">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-6 h-6 rounded-full bg-nigeria-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-nigeria-green" />
                  </div>
                  <p className="text-gray-700">{guideline}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 p-4 bg-fintech-gold/10 rounded-xl border border-fintech-gold/20">
              <Calendar className="w-5 h-5 text-fintech-gold flex-shrink-0" />
              <p className="text-deep-navy font-semibold">
                Deadline: June 30, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
