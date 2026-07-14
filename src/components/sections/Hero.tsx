import { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { TICKET_URL, openTicketModal } from '../../lib/ticketModal';

// Each slide ships in two WebP widths (800w mobile, 1600w desktop) plus a JPG fallback.
// First slide is preloaded in index.html and loaded eagerly with fetchpriority="high";
// the rest are deferred until after the page is interactive.
const SLIDES = [
  { base: '/nss1-01', alt: 'NSS 1.0 main stage' },
  { base: '/nss1-02', alt: 'NSS 1.0 audience' },
  { base: '/nss1-03', alt: 'NSS 1.0 panel discussion' },
  { base: '/nss1-04', alt: 'NSS 1.0 networking' },
  { base: '/nss1-05', alt: 'NSS 1.0 exhibition floor' },
];

const SLIDE_INTERVAL_MS = 5000;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Only load slides 2-5 after the page is interactive — saves ~150 KB on initial load.
  const [loadRest, setLoadRest] = useState(false);

  useEffect(() => {
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    if (idle) {
      idle(() => setLoadRest(true));
      return;
    }
    const t = setTimeout(() => setLoadRest(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loadRest) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [loadRest]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-deep-navy"
    >
      {/* Slideshow background — uses <picture> for WebP + responsive sizing.
          First image is high-priority and eager; the rest lazy-load. */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => {
          const isFirst = index === 0;
          if (!isFirst && !loadRest) return null;

          return (
            <picture
              key={slide.base}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: index === currentSlide ? 1 : 0 }}
            >
              <source
                type="image/webp"
                media="(max-width: 768px)"
                srcSet={`${slide.base}-800.webp`}
              />
              <source
                type="image/webp"
                srcSet={`${slide.base}-1600.webp`}
              />
              <img
                src={`${slide.base}-1600.jpg`}
                alt={slide.alt}
                width={1600}
                height={900}
                fetchPriority={isFirst ? 'high' : 'low'}
                loading={isFirst ? 'eager' : 'lazy'}
                decoding={isFirst ? 'sync' : 'async'}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </picture>
          );
        })}
      </div>

      {/* Top gradient - darkens only the top of the hero so nav + title stay readable */}
      <div className="absolute top-0 left-0 right-0 h-[55%] bg-gradient-to-b from-black/75 via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-24">
        <div className="animate-stagger">
          <h1
            className="font-satoshi font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-2xl"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}
          >
            Nigeria Stablecoin Summit 2.0
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
            <div className="bg-slate-800/90 backdrop-blur-md flex items-center gap-3 px-6 py-3 rounded-xl shadow-lg border border-slate-700/50">
              <Clock className="w-5 h-5 text-amber-400" />
              <div className="text-left">
                <span className="block text-white font-bold">08:00 AM</span>
                <span className="text-slate-300 text-sm">July 30, 2026</span>
              </div>
            </div>

            <div className="bg-slate-800/90 backdrop-blur-md flex items-center gap-3 px-6 py-3 rounded-xl shadow-lg border border-slate-700/50">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <span className="block text-white font-bold">Oriental Hotel</span>
                <span className="text-slate-300 text-sm">VI, Lagos</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={TICKET_URL}
              onClick={(e) => {
                e.preventDefault();
                openTicketModal();
              }}
              className="btn-primary px-10 py-4 text-lg inline-flex items-center justify-center gap-2 font-bold"
            >
              <Calendar className="w-5 h-5" />
              Get a Free Ticket
            </a>
            <a
              href="https://drive.google.com/drive/folders/1oz7kOV88m6olRAZYrPGP-WxSv1mcJcZM?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/90 backdrop-blur-md border-2 border-emerald-500 text-white px-10 py-4 text-lg inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all hover:bg-slate-700/90 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Marketing Deck
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
