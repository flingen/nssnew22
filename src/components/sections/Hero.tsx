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

      {/* Top gradient - darkens only the top of the hero so nav + title stay readable */}
      <div className="absolute top-0 left-0 right-0 h-[55%] bg-gradient-to-b from-black/75 via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-40">
        <div className="animate-stagger">
          <h1 className="font-satoshi font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-2xl" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}>
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
              Marketing Deck
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
