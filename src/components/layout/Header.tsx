import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Ticket } from 'lucide-react';

const TICKET_URL = 'https://tix.africa/discover/nss2026';

type NavLink =
  | { label: string; to: string; type: 'internal' }
  | { label: string; to: string; type: 'external' };

const navLinks: NavLink[] = [
  { label: 'Home', to: '/', type: 'internal' },
  { label: 'Speakers', to: '/speakers', type: 'internal' },
  { label: 'Agenda', to: '/agenda', type: 'internal' },
  { label: 'Travel', to: '/travel', type: 'internal' },
  {
    label: 'Marketing Deck',
    to: 'https://drive.google.com/drive/folders/1oz7kOV88m6olRAZYrPGP-WxSv1mcJcZM?usp=sharing',
    type: 'external',
  },
  {
    label: 'Gallery',
    to: 'https://drive.google.com/drive/folders/16mrdO5-lheId1-mZ_m3sY4QoVHuT8pXa',
    type: 'external',
  },
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

  const linkClassesDesktop =
    'text-white/80 hover:text-nigeria-green text-sm font-medium transition-colors relative group';
  const linkClassesMobile =
    'text-white/80 hover:text-nigeria-green text-base font-medium transition-colors';

  const renderDesktopLink = (link: NavLink) => {
    const underline = (
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nigeria-green transition-all group-hover:w-full" />
    );

    if (link.type === 'internal') {
      return (
        <Link key={link.to} to={link.to} className={linkClassesDesktop}>
          {link.label}
          {underline}
        </Link>
      );
    }

    return (
      <a
        key={link.to}
        href={link.to}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassesDesktop}
      >
        {link.label}
        {underline}
      </a>
    );
  };

  const renderMobileLink = (link: NavLink) => {
    if (link.type === 'internal') {
      return (
        <Link
          key={link.to}
          to={link.to}
          onClick={() => setIsMobileMenuOpen(false)}
          className={linkClassesMobile}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <a
        key={link.to}
        href={link.to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setIsMobileMenuOpen(false)}
        className={linkClassesMobile}
      >
        {link.label}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card-strong py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/asn_1-removebg-preview.png"
              alt="NSS 2.0"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(renderDesktopLink)}
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
              {navLinks.map(renderMobileLink)}
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
