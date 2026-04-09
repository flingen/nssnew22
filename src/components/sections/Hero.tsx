import { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';

const TICKET_URL = 'https://tix.africa/discover/nss2026';

const SLIDES = [
  '/nss1-01.jpg',
  '/nss1-02.jpg',
  '/nss1-03.jpg',
  '/nss1-04.jpg',
  '/nss1-05.jpg',
];

const SLIDE_INTERVAL_MS = 5000;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow background */}
      <div className="absolute inset-0">
        {SLIDES.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('${src}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentSlide ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        mixBlendMode: 'multiply'
      }} />

      <div className="absolute top-0 right-0 w-96 h-96 md:w-[500px] md:h-[500px] opacity-40">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="subtleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="none" stroke="url(#subtleGrad)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="url(#subtleGrad)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="url(#subtleGrad)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-0 w-80 h-80 md:w-96 md:h-96 opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="20" y="20" width="160" height="160" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.4" />
          <rect x="40" y="40" width="120" height="120" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
          <rect x="60" y="60" width="80" height="80" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-white/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-40">
        <div className="animate-stagger">
          <div className="mb-6">
            <img
              src="/group_1_(1).png"
              alt="Nigeria Stablecoin Summit 2.0 - New Vistas"
              className="mx-auto max-w-full h-auto w-[70%] sm:w-[60%] md:w-[50%] lg:w-[45%] drop-shadow-2xl"
            />
          </div>

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
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-lg inline-flex items-center justify-center gap-2 font-bold"
            >
              <Calendar className="w-5 h-5" />
              Book a Seat
            </a>
            <a
              href="https://drive.google.com/drive/folders/1oz7kOV88m6olRAZYrPGP-WxSv1mcJcZM?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/90 backdrop-blur-md border-2 border-emerald-500 text-white px-10 py-4 text-lg inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all hover:bg-slate-700/90 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Marketing Opportunities
            </a>
            <a
              href="https://calendly.com/nigeriastablecoinsummit/nss"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/90 backdrop-blur-md border-2 border-emerald-500 text-white px-10 py-4 text-lg inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all hover:bg-slate-700/90 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-44 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-8 h-12 rounded-full border-2 border-white/60 flex items-start justify-center p-2">
          <div className="w-2 h-3 bg-white/80 rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 py-4 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <span className="text-gray-700 text-lg sm:text-xl lg:text-2xl tracking-wide font-semibold">
              Powered by
            </span>
            <div className="flex items-center gap-4 sm:gap-5">
              <a
                href="https://afristablecoin.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src="/asn_1-removebg-preview.png"
                  alt="Africa Stablecoin Network"
                  className="h-12 sm:h-14 lg:h-16 w-auto"
                />
              </a>
              <span className="text-gray-500 text-2xl sm:text-3xl font-light">×</span>
              <a
                href="https://www.linkedin.com/in/nathanielluz"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src="/nl_wordmark-05.png"
                  alt="Nathaniel Luz"
                  className="h-9 sm:h-10 lg:h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
