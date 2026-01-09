import { useState, useEffect } from 'react';
import { Menu, X, Ticket } from 'lucide-react';

const TICKET_URL = 'https://tix.africa/discover/nss2026';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Marketing Opportunities', href: 'https://drive.google.com/drive/folders/1oz7kOV88m6olRAZYrPGP-WxSv1mcJcZM?usp=sharing', external: true },
  { label: 'Essay Contest', href: '#essay' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card-strong py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img
              src="/asn_1-removebg-preview.png"
              alt="NSS 2.0"
              className="h-10 sm:h-12 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="text-white/80 hover:text-nigeria-green text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nigeria-green transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm"
            >
              <Ticket className="w-4 h-4" />
              Book a Seat
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-nigeria-green transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-nigeria-green text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 w-full text-center py-3 sm:hidden inline-flex items-center justify-center gap-2"
              >
                <Ticket className="w-4 h-4" />
                Book a Seat
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
