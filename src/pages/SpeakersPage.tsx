import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Ticket, Bell, X, Mic2 } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { speakers, type Speaker } from '../data/speakers';

const TICKET_URL = 'https://luma.com/event/evt-Spr0dDUlIpAziaO';

export function SpeakersPage() {
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock background scroll while modal is open + close on Escape
  useEffect(() => {
    if (!activeSpeaker) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveSpeaker(null);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [activeSpeaker]);

  return (
    <div className="min-h-screen bg-deep-navy flex flex-col">
      <Header />

      <main className="flex-grow relative overflow-hidden section-gradient-rich pt-32 pb-20">
        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nigeria-green/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-fintech-gold" />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Confirmed Speakers
              </span>
            </div>

            <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Meet the <span className="gradient-text-green">Speakers</span>
            </h1>

            <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
              Founders, regulators, operators, and academics shaping the future of
              stablecoins and digital finance in Africa. Tap any speaker to read their bio.
            </p>
          </div>

          {/* Speaker grid: 5 per row on large, responsive on smaller screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6">
            {speakers.map((speaker) => (
              <button
                key={speaker.id}
                type="button"
                onClick={() => setActiveSpeaker(speaker)}
                className="group text-left rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-fintech-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-gold focus:outline-none focus:ring-2 focus:ring-fintech-gold/60 focus:ring-offset-2 focus:ring-offset-deep-navy"
                aria-label={`Read bio of ${speaker.name}`}
              >
                <div className="aspect-square overflow-hidden bg-white/10 relative">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    width={512}
                    height={512}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-fintech-gold text-xs font-semibold tracking-widest uppercase">
                      Read Bio
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-satoshi font-bold text-white text-base leading-tight mb-1 group-hover:text-fintech-gold transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-text-light text-xs leading-snug mb-1">
                    {speaker.role}
                  </p>
                  <p className="text-nigeria-green text-xs font-medium">
                    {speaker.organization}
                  </p>
                </div>
              </button>
            ))}

            {/* "More speakers coming soon" placeholder cards to fill the row of 5 */}
            {Array.from({ length: 4 }).map((_, i) => (
              <ComingSoonCard key={`soon-${i}`} delay={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
              >
                <Ticket className="w-5 h-5" />
                Book a Seat
              </a>
              <Link
                to="/"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
              >
                Back to Home
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 text-text-grey text-sm mt-8">
              <Bell className="w-4 h-4" />
              <span>
                Follow{' '}
                <a
                  href="https://www.x.com/afristablecoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nigeria-green hover:underline font-semibold"
                >
                  @afristablecoin
                </a>{' '}
                for the next speaker reveals
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Bio modal */}
      {activeSpeaker && (
        <SpeakerBioModal
          speaker={activeSpeaker}
          onClose={() => setActiveSpeaker(null)}
        />
      )}
    </div>
  );
}

function ComingSoonCard({ delay }: { delay: number }) {
  return (
    <div
      className="rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-md border border-dashed border-white/15 flex flex-col items-center justify-center text-center p-6 min-h-[280px] opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="w-14 h-14 rounded-full bg-fintech-gold/10 flex items-center justify-center mb-4">
        <Mic2 className="w-6 h-6 text-fintech-gold/70" />
      </div>
      <p className="text-white/80 font-satoshi font-semibold text-sm mb-1">
        More Speakers
      </p>
      <p className="text-text-grey text-xs">Coming Soon</p>
    </div>
  );
}

function SpeakerBioModal({
  speaker,
  onClose,
}: {
  speaker: Speaker;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`speaker-${speaker.id}-name`}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-deep-navy/85 backdrop-blur-md cursor-default"
      />

      {/* Modal content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-navy-light to-deep-navy border border-white/10 shadow-2xl">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors"
          aria-label="Close speaker bio"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-[280px_1fr] gap-0 md:gap-8">
          {/* Photo */}
          <div className="md:p-8 md:pr-0">
            <div className="aspect-square md:rounded-2xl overflow-hidden bg-white/5 md:max-w-[280px]">
              <img
                src={speaker.image}
                alt={speaker.name}
                width={512}
                height={512}
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:py-8 md:pr-8">
            <h2
              id={`speaker-${speaker.id}-name`}
              className="font-satoshi font-bold text-2xl md:text-3xl text-white leading-tight mb-2"
            >
              {speaker.name}
            </h2>
            <p className="text-fintech-gold font-medium mb-1">{speaker.role}</p>
            <p className="text-nigeria-green font-semibold mb-6">
              {speaker.organization}
            </p>

            <div className="border-t border-white/10 pt-6 space-y-4">
              {speaker.bio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-text-light leading-relaxed text-sm md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
