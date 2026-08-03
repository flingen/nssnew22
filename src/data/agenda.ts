// Public-facing programme for NSS 2.0.
//
// This is the audience-facing cut of the internal run of show. Anything that only
// the production team needs (panel briefing documents, MC cue notes, stage
// changeover instructions, the room number of the invite-only lounge) is
// deliberately not represented here.
//
// People are referenced by `slug` into src/data/speakers.ts so that a photo, role
// or bio only ever has to be corrected in one place. Guests who are on the
// programme but not yet in the speaker directory are written inline and render
// with an initials tile instead of a photo.

import { speakers, type Speaker } from './speakers';

export type SessionKind =
  | 'opening'
  | 'keynote'
  | 'fireside'
  | 'panel'
  | 'showcase'
  | 'networking';

export interface AgendaPerson {
  /** Links to a record in speakers.ts for the photo and bio. */
  slug?: string;
  /** Inline details, used when there is no speaker record yet, or to override one. */
  name?: string;
  role?: string;
  organization?: string;
  /** Short qualifier shown beside the name, e.g. "Joining virtually". */
  note?: string;
}

export interface AgendaSession {
  id: string;
  start: string;
  end: string;
  minutes: number;
  kind: SessionKind;
  title: string;
  summary?: string;
  /** Shown as a small line under the title, e.g. the networking room. */
  location?: string;
  /** Access qualifier, e.g. "By invitation only". */
  access?: string;
  host?: AgendaPerson;
  hostLabel?: string;
  moderator?: AgendaPerson;
  people?: AgendaPerson[];
  peopleLabel?: string;
}

export const EVENT = {
  name: 'Nigeria Stablecoin Summit 2.0',
  shortName: 'NSS 2.0',
  date: 'Thursday, 30 July 2026',
  venue: 'Oriental Hotel, Victoria Island, Lagos',
  doors: '08:30',
  close: '16:10',
  timezone: 'WAT (GMT+1)',
} as const;

export const KIND_META: Record<
  SessionKind,
  { label: string; chip: string; dot: string; bar: string }
> = {
  opening: {
    label: 'Opening',
    chip: 'bg-purple-light/15 text-purple-light border-purple-light/30',
    dot: 'bg-purple-light',
    bar: 'bg-purple-light/70',
  },
  keynote: {
    label: 'Keynote',
    chip: 'bg-fintech-gold/15 text-fintech-gold border-fintech-gold/30',
    dot: 'bg-fintech-gold',
    bar: 'bg-fintech-gold/80',
  },
  fireside: {
    label: 'Fireside chat',
    chip: 'bg-cyan/15 text-cyan border-cyan/30',
    dot: 'bg-cyan',
    bar: 'bg-cyan/70',
  },
  panel: {
    label: 'Panel',
    chip: 'bg-nigeria-green/15 text-green-light border-nigeria-green/30',
    dot: 'bg-nigeria-green',
    bar: 'bg-nigeria-green/80',
  },
  showcase: {
    label: 'Partner showcase',
    chip: 'bg-teal/15 text-teal border-teal/30',
    dot: 'bg-teal',
    bar: 'bg-teal/70',
  },
  networking: {
    label: 'Networking',
    chip: 'bg-white/10 text-text-light border-white/20',
    dot: 'bg-text-grey',
    bar: 'bg-white/25',
  },
};

export const agenda: AgendaSession[] = [
  {
    id: 'arrival',
    start: '08:30',
    end: '09:30',
    minutes: 60,
    kind: 'opening',
    title: 'Arrival, Special Word & Prayers',
    summary:
      'Doors open. Collect your badge, find your seat, and settle in before the programme begins.',
    people: [{ slug: 'nathaniel-luz' }],
    peopleLabel: 'Led by',
  },
  {
    id: 'welcome',
    start: '09:30',
    end: '10:00',
    minutes: 30,
    kind: 'opening',
    title: 'Welcome Address',
    summary: 'The opening word from the floor, and the shape of the day ahead.',
    people: [{ name: 'Tosin Adebiyi', role: 'Host' }],
    peopleLabel: 'Delivered by',
  },
  {
    id: 'fireside-opening',
    start: '10:00',
    end: '10:10',
    minutes: 10,
    kind: 'fireside',
    title: 'Fireside Chat: The State of Stablecoins in Nigeria',
    summary:
      'A short opening conversation on where Nigeria stands in the stablecoin era, and what has to happen next.',
    people: [{ slug: 'nathaniel-luz' }],
    peopleLabel: 'In conversation',
    host: { slug: 'edidiong-sebastian' },
    hostLabel: 'Hosted by',
  },
  {
    id: 'opening-keynote',
    start: '10:10',
    end: '10:20',
    minutes: 10,
    kind: 'keynote',
    title: 'Opening Keynote',
    summary:
      'Three decades of banking leadership and a decade of building Africa\u2019s fintech ecosystem, brought to bear on the question of programmable money.',
    people: [{ slug: 'segun-aina', note: 'Joining virtually' }],
    peopleLabel: 'Keynote',
  },
  {
    id: 'panel-bridging-the-gap',
    start: '10:20',
    end: '10:55',
    minutes: 35,
    kind: 'panel',
    title:
      'Bridging the Gap: How Academia, Policy, and Industry Can Collaborate to Accelerate Financial Innovation',
    summary:
      'The role of research institutions, policy frameworks, and industry partnerships in creating an enabling environment for financial innovation.',
    moderator: { slug: 'olamide-adeyemo' },
    peopleLabel: 'On the panel',
    people: [
      { slug: 'ayodotun-ibidunni' },
      { slug: 'mallick-bolakale' },
      { slug: 'bolarinwa-odupe' },
      { slug: 'sogo-dowole' },
      { slug: 'osaro-jackson' },
    ],
  },
  {
    id: 'panel-cross-border',
    start: '10:55',
    end: '11:25',
    minutes: 30,
    kind: 'panel',
    title:
      'Cross-Border Payments Reimagined: Stablecoins and the New Rails for African Remittances and Trade',
    summary:
      'How stablecoins, PAPSS, and emerging corridors can cut the cost and time of moving money across borders, unlocking cheaper remittances and faster intra-African trade settlement.',
    moderator: { slug: 'mary-babatunde' },
    peopleLabel: 'On the panel',
    people: [
      { slug: 'chukwuma-ukegbu' },
      { slug: 'ephraim-okorodudu' },
      { slug: 'ifeanyi-olabode' },
      { slug: 'hezekiah-suleman' },
      { name: 'Ashwin Ravichandran', role: 'Africa Director', organization: 'BMONI' },
    ],
  },
  {
    id: 'panel-banks',
    start: '11:25',
    end: '12:10',
    minutes: 45,
    kind: 'panel',
    title: 'Banks and Stablecoins: Turning Disruption into Partnership',
    summary:
      'How Nigerian banks can win in the stablecoin era, including banks setting up fintechs and fintechs setting up banks.',
    moderator: { slug: 'edidiong-sebastian' },
    peopleLabel: 'On the panel',
    people: [
      { slug: 'gbenga-omosuyi' },
      { slug: 'sola-adeyinka' },
      { slug: 'nathaniel-luz' },
    ],
  },
  {
    id: 'fireside-nrs',
    start: '12:10',
    end: '12:40',
    minutes: 30,
    kind: 'fireside',
    title: 'Fireside Chat with the Nigeria Revenue Service',
    summary:
      'Tax treatment of digital assets, non-resident operators, and what compliance looks like in practice, direct from the revenue authority.',
    host: { slug: 'nathaniel-luz' },
    hostLabel: 'Hosted by',
    peopleLabel: 'In conversation',
    people: [{ slug: 'oni-oluwole-olushola', organization: 'Nigeria Revenue Service' }],
  },
  {
    id: 'showcase-nexply',
    start: '12:40',
    end: '12:50',
    minutes: 10,
    kind: 'showcase',
    title: 'Partner Showcase: Nexply Compliance',
    summary:
      'Where compliance, data protection, and cybersecurity governance meet the digital asset business.',
    people: [{ slug: 'tosin-nathaniel-luz' }],
    peopleLabel: 'Presented by',
  },
  {
    id: 'keynote-daya',
    start: '12:50',
    end: '13:00',
    minutes: 10,
    kind: 'keynote',
    title: 'Keynote: Daya',
    summary: 'Using payments, stablecoins, and digital finance to help businesses grow across borders.',
    people: [{ slug: 'ifeanyi-olabode' }],
    peopleLabel: 'Keynote',
  },
  {
    id: 'panel-trust',
    start: '13:00',
    end: '13:30',
    minutes: 30,
    kind: 'panel',
    title:
      'Trust Is the Product: Building Fraud-Proof, Compliant, and Consumer-Safe Stablecoin Systems',
    summary:
      'Compliance leaders, security experts, and regulators on how strong AML and CFT practices, smart fraud controls, and consumer protection can make digital assets safe for every Nigerian.',
    moderator: { slug: 'favour-uche' },
    peopleLabel: 'On the panel',
    people: [
      { slug: 'michael-emeeka' },
      { slug: 'chinedu-obidiegwu' },
      { slug: 'tosin-nathaniel-luz' },
    ],
  },
  {
    id: 'panel-leapfrog',
    start: '13:30',
    end: '14:00',
    minutes: 30,
    kind: 'panel',
    title: 'The Payments Leapfrog: How Stablecoins Can Power Africa\u2019s Digital Economy',
    summary:
      'The opportunity for stablecoins to go beyond remittances and become everyday money, powering merchant payments, gig-worker earnings, SME settlements, and financial access for millions still outside the formal banking system.',
    moderator: { slug: 'olubukola-abraham' },
    peopleLabel: 'On the panel',
    people: [
      { slug: 'francis-ogbuka' },
      { slug: 'kofi-akosah-adusei' },
      { slug: 'ayo-adewuyi' },
      { slug: 'oke-omolade' },
    ],
  },
  {
    id: 'keynote-ydpay',
    start: '14:00',
    end: '14:10',
    minutes: 10,
    kind: 'keynote',
    title: 'Keynote: YDPay',
    summary: 'Cross-border payments, foreign exchange, and treasury management on stablecoin rails.',
    people: [{ slug: 'ephraim-okorodudu' }],
    peopleLabel: 'Keynote',
  },
  {
    id: 'roundtable',
    start: '14:10',
    end: '16:10',
    minutes: 120,
    kind: 'networking',
    title: 'Roundtable Networking',
    summary:
      'Closed-door roundtables for issuers, banks, regulators, and infrastructure partners to carry the day\u2019s conversations further.',
    location: 'VIP Lounge',
    access: 'By invitation only',
  },
];

/* ---------------------------------------------------------------- helpers */

export interface ResolvedPerson {
  key: string;
  name: string;
  role: string;
  organization: string;
  image?: string;
  bio: string[];
  note?: string;
  initials: string;
  hasProfile: boolean;
}

const bySlug = new Map<string, Speaker>(speakers.map((s) => [s.slug, s]));

function initialsOf(name: string): string {
  const cleaned = name.replace(/[^\p{L}\s'\u2018\u2019-]/gu, ' ');
  const parts = cleaned.split(/\s+/).filter(Boolean);
  const letters = parts.slice(0, 2).map((part) => {
    const match = part.match(/\p{L}/u);
    return match ? match[0].toUpperCase() : '';
  });
  return letters.join('') || '?';
}

export function resolvePerson(person: AgendaPerson): ResolvedPerson {
  const record = person.slug ? bySlug.get(person.slug) : undefined;
  const name = person.name ?? record?.name ?? 'To be announced';
  const bio = record?.bio ?? [];

  return {
    key: person.slug ?? name,
    name,
    role: person.role ?? record?.role ?? '',
    organization: person.organization ?? record?.organization ?? '',
    image: record?.image,
    bio,
    note: person.note,
    initials: initialsOf(name),
    hasProfile: bio.length > 0,
  };
}

/** Everyone who appears anywhere in the programme, de-duplicated, in running order. */
export function programmeParticipants(): ResolvedPerson[] {
  const seen = new Set<string>();
  const out: ResolvedPerson[] = [];

  for (const session of agenda) {
    const all = [session.host, session.moderator, ...(session.people ?? [])];
    for (const person of all) {
      if (!person) continue;
      const resolved = resolvePerson(person);
      if (seen.has(resolved.key)) continue;
      seen.add(resolved.key);
      out.push(resolved);
    }
  }

  return out;
}

export const DAY_MINUTES = agenda.reduce((total, session) => total + session.minutes, 0);

export const AGENDA_STATS = {
  sessions: agenda.length,
  panels: agenda.filter((s) => s.kind === 'panel').length,
  keynotes: agenda.filter((s) => s.kind === 'keynote').length,
  firesides: agenda.filter((s) => s.kind === 'fireside').length,
  voices: programmeParticipants().length,
};
