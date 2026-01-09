import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerLinks = {
  socials: [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/afristablecoin', label: 'LinkedIn' },
    { icon: XIcon, href: 'https://www.x.com/afristablecoin', label: 'X (Twitter)' },
    { icon: Facebook, href: 'https://www.facebook.com/afristablecoin', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/afristablecoin', label: 'Instagram' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-deep-navy pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-nigeria-green/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center border-b border-white/10 pb-12">
            <img
              src="/asn_1-removebg-preview.png"
              alt="Africa Stablecoin Network"
              className="h-16 sm:h-20 w-auto mb-4"
            />
            <span className="font-satoshi font-bold text-white text-2xl block mb-2">NSS 2.0</span>
            <span className="text-nigeria-green text-base font-medium mb-4">
              Powered by{' '}
              <a
                href="https://afristablecoin.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                ASN
              </a>
              {' × '}
              <a
                href="https://www.linkedin.com/in/nathanielluz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Nathaniel Luz
              </a>
            </span>
            <p className="text-text-light max-w-2xl leading-relaxed text-sm">
              The{' '}
              <a
                href="https://afristablecoin.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nigeria-green hover:underline"
              >
                Africa Stablecoin Network
              </a>
              {' '}is committed to advancing the adoption and integration
              of stablecoins across Africa. We believe that collaboration among stakeholders is
              essential for creating a thriving ecosystem that benefits all Africans.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 border-b border-white/10 pb-12">
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="mailto:nss@afristablecoin.org"
                className="flex items-center gap-3 text-text-grey hover:text-nigeria-green transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-nigeria-green/20 flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>nss@afristablecoin.org</span>
              </a>
              <a
                href="tel:07025994794"
                className="flex items-center gap-3 text-text-grey hover:text-nigeria-green transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-nigeria-green/20 flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>07025994794</span>
              </a>
              <div className="flex items-center gap-3 text-text-grey">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Oriental Hotel, VI, Lagos</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="font-satoshi font-bold text-white mb-4">Connect With Us</h3>
              <div className="flex gap-3">
                {footerLinks.socials.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-text-grey hover:text-white hover:bg-nigeria-green transition-all duration-300"
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <p className="text-text-grey text-sm">
              2026 Africa Stablecoin Network. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://docs.google.com/document/d/1_LMmkeAZLt3dRqvME3K_iEkQexWGUeDYuTn4R9oFlP8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-grey hover:text-nigeria-green text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://docs.google.com/document/d/1uMBzI_3Kidqv8LeGNDkn20C5FuitpDU-GUydOW7Q9PE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-grey hover:text-nigeria-green text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
