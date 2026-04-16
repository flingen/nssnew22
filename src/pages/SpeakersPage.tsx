import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mic2, Sparkles, ArrowRight, Ticket, Bell } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const TICKET_URL = 'https://tix.africa/discover/nss2026';

export function SpeakersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-deep-navy flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center relative overflow-hidden section-gradient-rich pt-32 pb-20">
        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nigeria-green/15 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/15 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[180px]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-stagger">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-fintech-gold" />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Coming Soon
              </span>
            </div>

            {/* Animated mic icon */}
            <div className="relative inline-flex items-center justify-center mb-10">
              <div className="absolute inset-0 bg-green-gradient rounded-full blur-2xl opacity-50 animate-pulse-glow" />
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-green-gradient flex items-center justify-center shadow-glow-green animate-float">
                <Mic2 className="w-14 h-14 md:w-16 md:h-16 text-white" />
              </div>
            </div>

            <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Our <span className="gradient-text-green">Speakers</span>
              <br />
              Are Almost Ready
            </h1>

            <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto leading-relaxed mb-10">
              We're finalising an extraordinary lineup of founders, regulators, and operators
              shaping the future of stablecoins in Africa. Speaker reveals begin shortly —
              follow us to be the first to know.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

            <div className="inline-flex items-center gap-2 text-text-grey text-sm">
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
                for speaker announcements
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
