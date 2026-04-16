import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Plane,
  Mail,
  FileText,
  Globe,
  ClipboardCheck,
  MessageCircle,
  Hotel,
  Car,
  Ticket,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const TICKET_URL = 'https://tix.africa/discover/nss2026';
const INVITE_EMAIL = 'nss@afristablecoin.org';
const RDG_WHATSAPP =
  'https://wa.me/2349035523731?text=Hello%20Olamide%2C%20I%27m%20enquiring%20about%20travel%20support%20for%20the%20Nigeria%20Stablecoin%20Summit.';

export function TravelPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-deep-navy">
      <Header />

      <main>
        {/* HERO STRIP */}
        <section className="relative pt-36 pb-20 section-gradient-rich overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-nigeria-green/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple/10 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <Plane className="w-4 h-4 text-nigeria-green" />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Travel & Visa Assistance
              </span>
            </div>

            <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Travel to <span className="gradient-text-green">Lagos, Nigeria</span>
            </h1>

            <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
              Everything you need to plan your trip to the Nigeria Stablecoin Summit 2.0 — visa
              support, flight bookings, hotels, and airport transfers, all coordinated through our
              official travel partner.
            </p>
          </div>
        </section>

        {/* INVITATION LETTER */}
        <section className="section-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start mb-12">
              <div className="w-16 h-16 rounded-2xl bg-green-gradient flex items-center justify-center shadow-glow-green flex-shrink-0">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-electric-blue text-sm font-medium tracking-widest uppercase mb-3 block">
                  Step 1
                </span>
                <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-deep-navy mb-4">
                  Invitation Letter
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  If you require an invitation letter to support your visa application for the
                  Nigeria Stablecoin Summit 2.0, please email us with proof of your ticket
                  purchase attached.
                </p>

                <div className="essay-card p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-nigeria-green flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Send your request to</p>
                      <a
                        href={`mailto:${INVITE_EMAIL}?subject=Invitation%20Letter%20Request%20-%20NSS%202.0`}
                        className="text-deep-navy font-bold text-lg hover:text-nigeria-green transition-colors break-all"
                      >
                        {INVITE_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-fintech-gold rounded-r-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-deep-navy">Please note:</strong> Tickets are
                    non-refundable once an invitation letter has been issued.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISA REQUIREMENTS */}
        <section className="section-light py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-electric-blue text-sm font-medium tracking-widest uppercase mb-4 block">
                Step 2
              </span>
              <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-deep-navy mb-4">
                Check Your Visa Requirements
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Citizens of <strong>ECOWAS member states</strong> may enter Nigeria visa-free.
                Most other passport holders must apply for an <strong>e-Visa</strong> before
                travel — Nigeria discontinued its Visa-on-Arrival programme on 1 May 2025.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://immigration.gov.ng/nigerian-visa/"
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-card p-6 card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-purple-gradient flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-satoshi font-bold text-deep-navy text-lg mb-2">
                  Visa Categories
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Browse all Nigerian visa types and find the right one for your visit.
                </p>
                <span className="text-nigeria-green text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Nigeria Immigration Service <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="https://evisa.immigration.gov.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-card p-6 card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-gradient flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-satoshi font-bold text-deep-navy text-lg mb-2">
                  Apply for e-Visa
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Submit your e-Visa application online. Decisions issued within 48 hours.
                </p>
                <span className="text-nigeria-green text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Official e-Visa Portal <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="https://lecard.immigration.gov.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-card p-6 card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-deep-navy" />
                </div>
                <h3 className="font-satoshi font-bold text-deep-navy text-lg mb-2">
                  Landing & Exit Cards
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  All international travellers must complete the Landing Card online before
                  boarding, and the Exit Card before departure.
                </p>
                <span className="text-nigeria-green text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Complete Online <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* RDG TRAVEL PARTNER */}
        <section className="section-gradient-rich py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-nigeria-green/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-fintech-gold text-sm font-medium tracking-widest uppercase mb-4 block">
                Step 3 — Official Travel Partner
              </span>
              <h2 className="font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                Book Through <span className="gradient-text-gold">RDG Travel Agency</span>
              </h2>
              <p className="text-text-light text-lg max-w-2xl mx-auto">
                We've partnered with RDG Travel Agency to handle every part of your trip — so you
                can focus on the summit, not the logistics.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { icon: FileText, label: 'Visa Application Support' },
                { icon: Plane, label: 'Flight Bookings' },
                { icon: Hotel, label: 'Hotel Reservations' },
                { icon: Car, label: 'Airport Pick-up & Drop-off' },
              ].map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.label}
                    className="glass-card rounded-2xl p-6 text-center card-glow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-nigeria-green/20 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-nigeria-green" />
                    </div>
                    <p className="text-white font-semibold text-sm">{service.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="glass-card-strong rounded-2xl p-8 md:p-10 text-center">
              <p className="text-text-light text-base mb-2">Speak directly with</p>
              <h3 className="font-satoshi font-bold text-2xl md:text-3xl text-white mb-1">
                Olamide at RDG Travel
              </h3>
              <p className="text-text-grey text-sm mb-6">
                Mention <span className="text-fintech-gold font-semibold">"Nigeria Stablecoin Summit"</span>{' '}
                for delegate rates and priority support.
              </p>

              <a
                href={RDG_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green inline-flex items-center gap-3 px-8 py-4 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp +234 903 552 3731
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-deep-navy mb-4">
              We look forward to welcoming you to <span className="gradient-text-green">Lagos</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Secure your seat at NSS 2.0 and join Africa's leading voices on stablecoins,
              payments, and the future of money.
            </p>

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
        </section>
      </main>

      <Footer />
    </div>
  );
}
