import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const faqs = [
  {
    question: 'Who should attend Nigeria Stablecoin Summit 2.0?',
    answer:
      'NSS 2.0 is designed for policymakers, regulators, banks, fintechs, stablecoin issuers, investors, developers, students, and anyone interested in the future of money, payments, and financial innovation in Nigeria and Africa.',
  },
  {
    question: 'How do I get to the event venue?',
    answer:
      'The summit will take place at Oriental Hotel, Victoria Island, Lagos, a central and easily accessible location. You can contact us for detailed directions and recommended transport options.',
  },
  {
    question: 'Is prior knowledge of stablecoins or blockchain required?',
    answer:
      'No. The summit is structured to accommodate both beginners and industry professionals. Sessions will range from introductory insights to advanced discussions on policy, banking, and infrastructure.',
  },
  {
    question: 'How can I register or book a seat?',
    answer:
      'You can secure your spot by clicking the "Book a Seat" button on the website. General attendance is free but you can also get a VIP ticket to attend exclusive sessions.',
  },
  {
    question: 'Will there be opportunities for networking and partnerships?',
    answer:
      'Yes. NSS 2.0 is designed to encourage meaningful connections through panels, exhibitions, and networking sessions, creating space for collaboration across the stablecoin and financial ecosystem.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-nigeria-green/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-nigeria-green to-green-light mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <SectionHeading title="Frequently Asked Questions" light={true} />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-satoshi font-semibold text-deep-navy pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-nigeria-green' : 'bg-gray-100'}`}>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180 text-white' : 'text-nigeria-green'
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
