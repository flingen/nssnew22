import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  FileText,
  Mail,
  ArrowRight,
  Sparkles,
  Globe,
  Users,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const TICKET_URL = 'https://tix.africa/discover/nigeria-stablecoin-summit-2027';
const MARKETING_DECK_URL =
  'https://drive.google.com/drive/folders/1sAVtMfaRg2geHYURF5c-aMNWbq5y5nhz?usp=sharing';
const ENQUIRY_EMAIL = 'nss@afristablecoin.org';

export function NSS2027Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-deep-navy">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative pt-36 pb-20 section-gradient-rich overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-nigeria-green/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-fintech-gold/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple/15 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 glass-card-strong px-5 py-2.5 rounded-full mb-8 animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-fintech-gold" />
              <span className="text-fintech-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                Save The Date
              </span>
            </div>

            <h1 className="font-satoshi font-bold text-white leading-[0.95] mb-6">
              <span className="block text-2xl md:text-3xl lg:text-4xl text-text-light mb-2 font-medium tracking-wide">
                Nigeria Stablecoin Summit
              </span>
              <span
                className="block text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[10rem] font-extrabold gradient-text-gold drop-shadow-[0_0_30px_rgba(255,215,0,0.3)] tracking-tighter"
                style={{ lineHeight: 0.9 }}
              >
                2027
              </span>
            </h1>

            <p className="text-text-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              Africa's flagship stablecoin summit returns to Lagos — a full-day
              convergence of policymakers, regulators, banks, fintechs, and global
              stablecoin leaders shaping the future of money on the continent.
            </p>

            {/* Key event info */}
            <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-5">
                <div className="w-11 h-11 rounded-xl bg-nigeria-green/20 flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-5 h-5 text-nigeria-green" />
                </div>
                <p className="text-xs text-text-grey uppercase tracking-wider mb-1">Date</p>
                <p className="text-white font-semibold text-sm md:text-base">
                  Thursday, July 22, 2027
                </p>
              </div>

              <div className="glass-card rounded-2xl p-5">
                <div className="w-11 h-11 rounded-xl bg-electric-blue/20 flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-5 h-5 text-electric-blue" />
                </div>
                <p className="text-xs text-text-grey uppercase tracking-wider mb-1">Time</p>
                <p className="text-white font-semibold text-sm md:text-base">
                  8:00 AM – 4:00 PM UTC
                </p>
              </div>

              <div className="glass-card rounded-2xl p-5">
                <div className="w-11 h-11 rounded-xl bg-fintech-gold/20 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-5 h-5 text-fintech-gold" />
                </div>
                <p className="text-xs text-text-grey uppercase tracking-wider mb-1">Venue</p>
                <p className="text-white font-semibold text-sm md:text-base">
                  Lagos Oriental Hotel
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="section-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-2 rounded-full bg-nigeria-green/10 text-nigeria-green text-sm font-semibold tracking-widest uppercase mb-6">
                What To Expect
              </span>
              <h2 className="font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl text-deep-navy mb-4 leading-tight">
                A Bigger Stage for the{' '}
                <span className="gradient-text-green">Stablecoin Conversation</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Building on the momentum of NSS 1.0 and 2.0, NSS 2027 scales up — more
                speakers, deeper panel discussions, and a continent-wide audience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="pillar-card p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-green-gradient flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-satoshi font-bold text-deep-navy text-lg mb-2">
                  500+ Delegates
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Policymakers, regulators, banks, fintech founders, and institutional
                  investors under one roof in Lagos.
                </p>
              </div>

              <div className="pillar-card p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-blue-purple-gradient flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-satoshi font-bold text-deep-navy text-lg mb-2">
                  Pan-African Focus
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cross-border payments, remittances, and stablecoin adoption across
                  Africa's fastest-growing economies.
                </p>
              </div>

              <div className="pillar-card p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-deep-navy" />
                </div>
                <h3 className="font-satoshi font-bold text-deep-navy text-lg mb-2">
                  Deal-Making Floor
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Curated exhibition hall, investor matchmaking, and dedicated
                  networking lounges for partnerships that close.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KEY THEMES */}
        <section className="section-light py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-electric-blue text-sm font-medium tracking-widest uppercase mb-4 block">
                Programme Themes
              </span>
              <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-deep-navy mb-4">
                The Conversations Shaping 2027
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Regulatory clarity & stablecoin licensing in Africa',
                'Cross-border payments and remittance rails',
                'Naira-backed stablecoins & local currency innovation',
                'Institutional adoption: banks, treasuries, and corporates',
                'Compliance, AML, and risk frameworks for digital assets',
                'Infrastructure: custody, on/off-ramps, and settlement',
              ].map((theme) => (
                <div
                  key={theme}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-nigeria-green flex-shrink-0 mt-0.5" />
                  <p className="text-deep-navy text-sm md:text-base font-medium">
                    {theme}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE CTAs */}
        <section className="section-gradient-rich py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-nigeria-green/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-fintech-gold/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-fintech-gold text-sm font-medium tracking-widest uppercase mb-4 block">
                Get Involved
              </span>
              <h2 className="font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                Choose Your <span className="gradient-text-gold">Next Step</span>
              </h2>
              <p className="text-text-light text-lg max-w-2xl mx-auto">
                Whether you're attending, sponsoring, or exploring — here's how to
                plug in.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Ticket CTA */}
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-strong rounded-2xl p-8 card-hover group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient"
                  aria-hidden
                />
                <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center mb-5 shadow-glow-gold">
                  <Ticket className="w-7 h-7 text-deep-navy" />
                </div>
                <h3 className="font-satoshi font-bold text-white text-xl mb-2">
                  Buy a Ticket
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-5">
                  Secure your seat at Africa's flagship stablecoin summit. Early-bird
                  rates available now.
                </p>
                <span className="text-fintech-gold text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Get Tickets <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              {/* Marketing Deck CTA */}
              <a
                href={MARKETING_DECK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-strong rounded-2xl p-8 card-hover group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-green-gradient"
                  aria-hidden
                />
                <div className="w-14 h-14 rounded-2xl bg-green-gradient flex items-center justify-center mb-5 shadow-glow-green">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-satoshi font-bold text-white text-xl mb-2">
                  Marketing Deck
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-5">
                  Explore sponsorship packages, exhibition opportunities, and
                  partnership tiers for NSS 2027.
                </p>
                <span className="text-nigeria-green text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Deck <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              {/* Enquiries CTA */}
              <a
                href={`mailto:${ENQUIRY_EMAIL}?subject=NSS%202027%20Enquiry`}
                className="glass-card-strong rounded-2xl p-8 card-hover group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-blue-purple-gradient"
                  aria-hidden
                />
                <div className="w-14 h-14 rounded-2xl bg-blue-purple-gradient flex items-center justify-center mb-5 shadow-glow-blue">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-satoshi font-bold text-white text-xl mb-2">
                  Send an Enquiry
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-5">
                  Questions about speaking, partnerships, or group delegations? Our
                  team will get back to you promptly.
                </p>
                <span className="text-electric-blue text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all break-all">
                  {ENQUIRY_EMAIL}
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* BACK TO HOME */}
        <section className="section-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              to="/"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-3 text-base"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
