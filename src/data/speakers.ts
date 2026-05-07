// Speaker data for NSS 2.0
// Order matches the curated speaker list provided by the organisers.
// Each bio is condensed from the speaker-supplied source material.

export interface Speaker {
  id: number;
  slug: string;
  name: string;
  role: string;
  organization: string;
  image: string;
  bio: string[];
}

export const speakers: Speaker[] = [
  {
    id: 1,
    slug: 'nathaniel-luz',
    name: 'Nathaniel Luz',
    role: 'Founder / President',
    organization: 'Africa Stablecoin Network',
    image: '/speakers/01-nathaniel-luz.jpg',
    bio: [
      'Nathaniel Luz is the President of the Africa Stablecoin Network, a continental initiative focused on uniting stablecoin issuers, platforms, and stakeholders across Africa to promote adoption, regulation, and ecosystem growth. He also serves as Chief Operating Officer of YDPay Africa, a pan-African crypto exchange driving accessible digital asset trading and payments infrastructure.',
      'He is the author of several books including Stablecoins: Unlocking Borderless Payments for Emerging Economies, Digital is the Cash, and Bitcoin is Cash, which explore the real-world impact of blockchain-based financial solutions. A key voice in Africa\u2019s crypto space since 2017, Nathaniel has contributed to grassroots awareness, policy advocacy, literature, and infrastructure building across Nigeria, Ghana, Kenya, Cameroon, and Sierra Leone.',
      'He holds a Master\u2019s Degree in Blockchain and Digital Currency from the University of Nicosia, Cyprus, and is widely respected for his insights on digital assets, payments, financial inclusion, and decentralized finance. Nathaniel regularly speaks at conferences, contributes to industry panels, and advises both public and private sector initiatives focused on modernizing payments infrastructure in emerging markets.',
    ],
  },
  {
    id: 2,
    slug: 'segun-aina',
    name: 'Dr. Segun Aina, OFR',
    role: 'Founder / President',
    organization: 'Africa Fintech Network',
    image: '/speakers/02-segun-aina.jpg',
    bio: [
      'Dr. Segun Aina is a global professional banking leader, internationally rated fintech ecosystem builder and respected futurist. With three decades of distinguished banking career in three banks including a six-year tenure as Bank Chief Executive Officer, Dr. Aina is the inaugural Chairman of the Global Banking Education Standards Board (GBEStB), former Chairman of Accion Bank Nigeria and Odua Investment Co Ltd, former Director of First Atlantic Bank Ghana, and served as 17th President of the Chartered Institute of Bankers of Nigeria.',
      'He is the founding President and currently Chairman, Board of Trustees of the Fintech Association of Nigeria (FINTECHNGR), founding President of the Africa Fintech Network (AFN), founding member of the Board of Global Fintech Alliance and pioneer Chairman of the International Digital Economies Association (IDEA). In these roles he has championed advocacy and initiatives aimed at improving financial and payment systems, banking regulations, financial literacy and innovation in financial services across Africa and globally.',
      'Often described as Africa\u2019s Fintech Grandmaster, Dr. Aina has incubated a number of successful fintech startups and sits on the Boards of various institutions in Banking, Insurance, Agriculture and Technology. He holds the Nigeria National honour of Officer of the Order of the Federal Republic (OFR) and has received honorary doctorate degrees from four renowned universities.',
    ],
  },
  {
    id: 3,
    slug: 'sola-adeyinka',
    name: 'Sola Adeyinka, CFA, ACCA',
    role: 'Chief Executive Officer',
    organization: 'Vale Holdings',
    image: '/speakers/03-sola-adeyinka.jpg',
    bio: [
      'Sola Adeyinka is the Chief Executive Officer of Vale, where he leads efforts to expand access to financial services across emerging markets. The group consists of Vale Finance Limited, Vale Asset Management Limited, Valemoney Inc and Kwacofocus Microfinance Bank. He is also the Chief Investment Officer of Coralstone Capital Limited, a diversified investment management firm with a portfolio across public and private equity, fixed income, real estate and alternative assets.',
      'Sola\u2019s philosophy is shaped by a simple but powerful question: how can financial systems work better for more people? His work of close to two decades sits at the intersection of capital, structure, and access for both enterprises and individuals. His experience spans wealth management, risk management, digital banking, financial structuring and advisory, oil and gas, and management consulting, with experience shaped at global institutions such as KPMG and Accenture.',
      'He holds a Bachelor\u2019s degree in Applied Accounting from Oxford Brookes University and a Bachelor\u2019s degree in Materials Science and Engineering from Obafemi Awolowo University, and has completed executive education at London Business School. Sola is a CFA charterholder and a member of the ACCA and the Institute of Chartered Accountants Nigeria (ICAN).',
    ],
  },
  {
    id: 4,
    slug: 'ayodotun-ibidunni',
    name: 'Dr. Ayodotun Ibidunni',
    role: 'Associate Professor of Entrepreneurship',
    organization: 'James Hope University',
    image: '/speakers/04-ayodotun-ibidunni.jpg',
    bio: [
      'Ayodotun Stephen Ibidunni is an Associate Professor of Strategic Management and Entrepreneurship and the Head of the Innovation, Intrapreneurship, and Entrepreneurship (IIE) Programme at James Hope University, Lekki. He also Heads the Directorate of Enterprise and Innovation (DEI) of James Hope University. His research sits at the intersection of strategic management and entrepreneurship, with a particular focus on enhancing youth employability, and the performance of small and medium-sized enterprises (SMEs) in developing economies.',
      'He has contributed more than 130 articles to highly referred international journals, book chapters, and conferences. He is the recipient of several international awards, including being listed multiple times among Elsevier\u2019s top researchers of the year by scholarly output (2018 \u2013 2023). He is a Fellow of the Chartered Association of Administration (CIA).',
      'Dr. Ibidunni is the pioneer Director of the International Centre for Policy Research and Industry Linkages (ICePRIL), where he contributes to Sustainability initiatives in Africa as the Chair of the International Conference on Africa\u2019s Sustainable Development (ICASuD). He is also a member of the MSME cohort of the Nigerian Economic Summit Group (NESG).',
    ],
  },
  {
    id: 5,
    slug: 'gbenga-omosuyi',
    name: 'Gbenga Omosuyi',
    role: 'Head of Global Business Development',
    organization: 'Sphere Labs',
    image: '/speakers/05-gbenga-omosuyi.jpg',
    bio: [
      'Gbenga Omosuyi is Head of Global Business Development at Sphere Labs, a global blockchain infrastructure and payments technology company at the forefront of stablecoin and AI-powered money movement. He focuses on expanding the company\u2019s global presence and forging partnerships that accelerate stablecoin innovation and adoption across emerging and institutional markets. Gbenga is particularly passionate about the convergence of agentic commerce and programmable money \u2014 and the infrastructure needed to power the next generation of autonomous financial transactions.',
      'With over a decade of experience bridging traditional finance and crypto, Gbenga has held senior go-to-market and business development roles across some of the industry\u2019s most influential companies. At BitGo, as Head of Strategic Partnerships, he deepened the company\u2019s institutional footprint across the digital asset ecosystem; at Fireblocks, he led Strategic and Enterprise Business Development for North America, helping scale the platform\u2019s enterprise and institutional reach. His career began at Deutsche Bank, where he progressed through roles in OTC Derivatives Clearing, Prime Brokerage, and Wealth Management.',
      'Gbenga holds an MBA from Yale University.',
    ],
  },
  {
    id: 6,
    slug: 'tosin-nathaniel-luz',
    name: 'Tosin Nathaniel-Luz, MBA | CDPO',
    role: 'Lead',
    organization: 'Nexply Compliance',
    image: '/speakers/06-tosin-nathaniel-luz.jpg',
    bio: [
      'Tosin Nathaniel-Luz is a leading authority in regulatory compliance, data protection, and cybersecurity governance, helping organisations and individuals achieve full-spectrum compliance across multiple regulatory domains. She currently serves as Principal Consultant and Lead Strategist at Nexply Compliance Company, a dynamic compliance solutions firm dedicated to guiding businesses and professionals toward seamless compliance with data privacy laws, cybersecurity standards, tax regulations, and corporate governance frameworks.',
      'She is also the Managing Partner at TNL Legals, a full-service law firm and Data Protection Compliance Organisation (DPCO) licensed by the Nigeria Data Protection Commission (NDPC), where she provides specialised legal advisory services on data privacy, digital rights, corporate law, and regulatory risk management. Her work spans data privacy program development, cybersecurity risk management, compliance audits, and DPO-as-a-Service offerings, helping organisations achieve compliance with critical regulations such as the NDPA, NDPR, and global standards like the GDPR.',
      'Tosin is the Founder of the Africa Data Privacy Network (ADPN), an initiative aimed at promoting digital rights and data protection awareness across Africa. Her professional philosophy: \u201cCompliance shouldn\u2019t stifle innovation; rather, it should power it.\u201d',
    ],
  },
  {
    id: 7,
    slug: 'chike-okonkwo',
    name: 'Chike Okonkwo',
    role: 'Business Development & Marketing Lead',
    organization: 'YDPay',
    image: '/speakers/07-chike-okonkwo.jpg',
    bio: [
      'Chike Okonkwo is a seasoned Business Development and Go-to-Market Consultant, widely recognised as a key stakeholder in Africa\u2019s fintech, blockchain, and gaming ecosystems. He currently leads Business Development and Marketing at YDPay, a fast-growing digital payments platform focused on driving financial inclusion and innovation across Nigeria and Africa, where he is spearheading strategic growth initiatives.',
      'With a strong track record of working alongside regulators, industry associations, and private enterprises across local and international markets, Chike has played a pivotal role in shaping Africa\u2019s digital economy. Previously, Chike led Pan-African strategy and partnerships at Thresh0ld.com, a UK-based digital asset transaction security platform, and served as Lead Business Developer for Africa at OKX, one of the world\u2019s leading crypto exchanges. As Business Development Director of Gamic, a decentralised social community platform backed by Yzi (formerly Binance Labs), he drove go-to-market execution and helped the platform scale to over 2 million users in under two years.',
      'Beyond tech, Chike is the Co-founder and Chief Farmer of Sky-Worth Farms, which is pioneering sustainable, large-scale cassava farming in Nigeria. He actively mentors creatives and entrepreneurs and contributes to initiatives that empower African youth.',
    ],
  },
  {
    id: 8,
    slug: 'olamide-adeyemo',
    name: 'Olamide Adeyemo',
    role: 'Head of Commercial',
    organization: 'Sporting Lagos',
    image: '/speakers/08-olamide-adeyemo.jpg',
    bio: [
      'Olamide Adeyemo is a Nigerian entrepreneur and business executive with over a decade building and leading ventures across sports, technology and education. He is a Fellow of the Chartered Management Institute (CMI), and a Member of the Academy of Management (AOM), the Chartered Institute of Marketing (CIM) and the National Institute of Marketing Nigeria (NIMN).',
      'He is currently the Head of Commercial at Sporting Lagos, and remains committed to leading and building at the intersection of business and evidence.',
    ],
  },
  {
    id: 9,
    slug: 'olubukola-abraham',
    name: 'Dr. Olubukola Abraham',
    role: 'Founder',
    organization: 'Royale Scribes',
    image: '/speakers/09-olubukola-abraham.jpg',
    bio: [
      'Olubukola Abraham is a writer, researcher, and product professional with a PhD in Botany and a strong background in academic communication, research development, and knowledge-focused innovation. She is the founder of Royale Scribes, a writing and publishing company that supports scholars, organisations, and professionals with research, editing, and publishing services.',
      'She also works in product management, bringing together strategy, structure, and clear communication to support technology-driven solutions. With experience across academia, storytelling, and innovation spaces, Olubukola is passionate about helping people engage complex ideas in clear and meaningful ways. She brings to the summit a thoughtful, curious, and balanced perspective as a moderator, helping to guide practical conversations on emerging trends in finance, technology, and digital innovation.',
    ],
  },
  {
    id: 10,
    slug: 'bolarinwa-odupe',
    name: 'Bolarinwa Odupe',
    role: 'Chief Executive Officer',
    organization: 'Centiiv',
    image: '/speakers/10-bolarinwa-odupe.jpg',
    bio: [
      'Bolarinwa Odupe is the Founder of Centiiv, a fintech startup that focuses on building digital payment infrastructure for emerging markets. Bolarinwa has 6+ years of experience in blockchain security and as a researcher with several publications to her name.',
      'She holds an MBA and an MSc. in International Business Management and has a strong background in software engineering with a knack for blockchain technology, and has worked on several fintech products and digital payment systems. With her current master\u2019s degree discourse in financial engineering, Bolarinwa is focused on exploring innovative ways technology can be used to solve real economic and payment challenges.',
    ],
  },
  {
    id: 11,
    slug: 'favour-uche',
    name: 'Favour Uche',
    role: 'Assistant Lead, Policy & Regulations Affairs',
    organization: 'Virtual Assets Service Providers Association (VASPA)',
    image: '/speakers/11-favour-uche.jpg',
    bio: [
      'Favour Uche is an Associate at Infusion Lawyers with over five years of experience at the intersection of law and emerging technology, advising Web3 startups and established organisations across Nigeria and Africa. Her practice spans regulatory compliance with CBN and SEC frameworks, contract drafting, risk assessment, business structuring, and corporate governance \u2014 supporting clients from ideation through scale.',
      'At VASPA (Virtual Asset Service Providers Association of Nigeria), Favour serves as Assistant Policy & Regulatory Affairs Lead and Project Manager of Project Green-White-Green \u2014 the association\u2019s flagship regulatory engagement initiative advancing a structured, industry-led framework for virtual asset regulation in Nigeria.',
      'Beyond her legal practice, Favour has contributed to leading organisations including the Africa Blockchain Institute, the Black Women Blockchain Council, and the Smart Contract Research Forum (SCRF). She has also shared her expertise as a panellist at global industry events including Diffusion: Open Metaverse by Outlier Ventures and EthSafari, and creates widely read content on Web3 law, fintech compliance, and regulatory developments.',
    ],
  },
  {
    id: 12,
    slug: 'sogo-dowole',
    name: 'Sogo \u2018Dowole',
    role: 'CEO, Co-Founder',
    organization: 'CircleFunds',
    image: '/speakers/12-sogo-dowole.jpg',
    bio: [
      'Sogo \u2018Dowole is the CEO and Co-Founder of CircleFunds, where he is building digital financial tools that bring trust and structure to community-led savings and lending. His work focuses on the intersection of fintech, stablecoins, and group-based finance models that have powered African economies for generations.',
      'A builder at heart, Sogo brings a product-first mindset to creating accessible financial infrastructure for Africa\u2019s next billion users. Full bio coming soon.',
    ],
  },
  {
    id: 13,
    slug: 'hezekiah-suleman',
    name: 'Hezekiah Suleman',
    role: 'Regional Lead (Africa)',
    organization: 'Mercuryo',
    image: '/speakers/13-hezekiah-suleman.jpg',
    bio: [
      'Hezekiah Suleman, mostly known as H.K., is a Growth and Business Development Specialist with a background in B2B/B2C marketing and expertise in scaling Blockchain products and solutions. He currently leads Africa Operations at Mercuryo, one of the world\u2019s leading Fintechs, where he oversees user operations, market growth, and customer-centric strategies.',
      'His interests lie at the intersection of technology and finance. He holds an Associate Accounting Technician (AAT) certificate from the Institute of Chartered Accountants of Nigeria, a Diploma in Blockchain Technology, and a Decentralized Finance Expert certification from the Blockchain Council. He is also trained in Alternative Dispute Resolution (ADR) and is an Associate Member of the Institute of Chartered Mediators and Conciliators.',
    ],
  },
  {
    id: 14,
    slug: 'mary-babatunde',
    name: 'Mary Babatunde',
    role: 'Country HR Manager',
    organization: 'SUN CSA Nigeria',
    image: '/speakers/14-mary-babatunde.jpg',
    bio: [
      'Mary Babatunde is an accomplished HR leader and currently serves as the Country HR Director for the Scaling Up Nutrition Movement (SUN-CSA) Nigeria. She is also the founder of the Corporate-Preneur Initiative, a platform committed to helping young people build workplace readiness and develop employability skills.',
      'Beyond her corporate work, Mary writes for BusinessDay, where she shares practical insights on career growth, leadership, and the evolving world of work. She has also spoken at several professional and leadership forums, inspiring audiences with her thought leadership on HR best practices, career development, and entrepreneurship. Driven by a deep passion for youth empowerment, Mary blends her strategic HR experience with impactful social initiatives, helping bridge the gap between education, employability, and meaningful work.',
    ],
  },
  {
    id: 15,
    slug: 'peace-agboola',
    name: 'Peace Agboola',
    role: 'Founder',
    organization: 'Path.Os',
    image: '/speakers/15-peace-agboola.jpg',
    bio: [
      'Peace Agboola is a Technical Product Manager, ecosystem builder, and emerging voice shaping the future of tech talent in Africa. She operates at the intersection of product, data, and human potential, building scalable digital solutions while creating pathways for the next generation of innovators to thrive.',
      'With over five years of experience, Peace has contributed to the development of user-centric products across organisations including Insomnia Labs, Berrywood Capital, Nestcoin, and Eltas Solutions. Beyond building products, she is the founder of Career Compass and pathOS, a nonprofit STEM initiative equipping young professionals with the clarity, skills, and direction needed to transition into and succeed in tech.',
      'Peace\u2019s work has earned her recognition across global platforms. She is a winner of the Build for SDG initiative, has been featured by Leading Ladies Africa, developed a speech-accessibility solution for the deaf community, and won the Girls in ICT Competition (2016). She has spoken at platforms including Product Collective, Startup Grind Campus, and She Codes Africa OAU.',
    ],
  },
  {
    id: 16,
    slug: 'edidiong-sebastian',
    name: 'Edidiong Sebastian',
    role: 'Founder and COO',
    organization: 'Techminded Company',
    image: '/speakers/16-edidiong-sebastian.jpg',
    bio: [
      'Edidiong Sebastian Udoh is a youth leader, lawyer, and builder championing technology and digital transformation across Africa. As Founder of The Techminded Company, Edidiong is building a pan-African movement to rebuild industries through talent development, creating industry-specific communities including Techminded Lawyers and Techminded Health Network that equip young African professionals to become operators, leaders, and solution builders transforming their fields.',
      'Playing at the intersection of technology, law, and business, Edidiong is a lawyer, startup advisor, and business developer. She has worked across VCs, accelerators, and startups to build, facilitate investments, and manage early-stage ventures. She has managed innovation, entrepreneurship, and leadership programs across Africa, including The Bridge Program, the Student Venture Capital Grant by the Federal Ministry of Education, and the Nigerian Startup Act State Adoption Project.',
      'Edidiong is committed to elevating Nigeria\u2019s and Africa\u2019s digital economy. She operates with the conviction that Africa\u2019s transformation will come from internally raised, ethically grounded leaders who understand both the problems and the solutions \u2014 building not for headlines, but for history.',
    ],
  },
];
