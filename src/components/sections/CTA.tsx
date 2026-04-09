import { ArrowRight, Ticket, Handshake } from 'lucide-react';

const TICKET_URL = 'https://tix.africa/discover/nss2026';

export function CTA() {
  return (
    <section className="py-20 lg:py-28 section-gradient-blue-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nigeria-green/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/15 rounded-full blur-[120px]" />
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-15">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="ctaRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A859" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#00A859" />
            </linearGradient>
          </defs>
          <path d="M200 0 Q150 50 200 100 Q150 50 100 100 Q150 50 200 0" fill="url(#ctaRibbon)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full mb-8 shadow-sm">
          <div className="w-2 h-2 bg-fintech-gold rounded-full animate-pulse" />
          <span className="text-gray-700 text-sm font-medium">Registration is Open</span>
        </div>

        <h2 className="font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl text-deep-navy mb-6 leading-tight">
          Be a Part of Building Nigeria's{' '}
          <span className="gradient-text-green">Stablecoin Future</span>
        </h2>

        <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
          Join policymakers, regulators, banks, and fintech leaders as we unlock the next frontier
          of financial infrastructure in Africa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-lg inline-flex items-center justify-center gap-2"
          >
            <Ticket className="w-5 h-5" />
            Book a Seat
            <ArrowRight size={18} />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1oz7kOV88m6olRAZYrPGP-WxSv1mcJcZM?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-10 py-4 text-lg inline-flex items-center justify-center gap-2"
          >
            <Handshake className="w-5 h-5" />
            Marketing Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}
