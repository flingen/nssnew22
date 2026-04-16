import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Sparkles, ArrowRight, Ticket, Clock } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const TICKET_URL = 'https://tix.africa/discover/nss2026';

export function AgendaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-deep-navy flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center relative overflow-hidden section-gradient-rich pt-32 pb-20">
        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fintech-gold/10 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-electric-blue/15 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/10 rounded-full blur-[180px]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-stagger">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-fintech-gold" />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Coming Soon
              </span>
            </div>

            {/* Animated calendar icon */}
            <div className="relative inline-flex items-center justify-center mb-10">
              <div className="absolute inset-0 bg-gold-gradient rounded-full blur-2xl opacity-50 animate-pulse-glow" />
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-gold-gradient flex items-center justify-center shadow-glow-gold animate-float">
                <CalendarDays className="w-14 h-14 md:w-16 md:h-16 text-deep-navy" />
              </div>
            </div>

            <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              The <span className="gradient-text-gold">Agenda</span>
              <br />
              Is Coming Together
            </h1>

            <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto leading-relaxed mb-10">
              From keynote sessions to deep-dive panels, masterclasses, and networking — we're
              crafting a full-day experience built around what matters most for Africa's
              stablecoin ecosystem. The full agenda drops soon.
            </p>

            {/* Save the date card */}
            <div className="glass-card-strong rounded-2xl p-6 max-w-md mx-auto mb-10 inline-flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-nigeria-green" />
                <div className="text-left">
                  <p className="text-text-grey text-xs uppercase tracking-wider">Save the date</p>
                  <p className="text-white font-bold">July 30, 2026 · Lagos</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
