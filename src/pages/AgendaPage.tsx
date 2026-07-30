import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Clock, Ticket, ArrowRight, Users, Radio } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PersonAvatar, PersonModal } from '../components/ui/PersonModal';
import {
  agenda,
  AGENDA_STATS,
  EVENT,
  KIND_META,
  resolvePerson,
  type AgendaPerson,
  type AgendaSession,
  type ResolvedPerson,
  type SessionKind,
} from '../data/agenda';
import { TICKET_URL, openTicketModal } from '../lib/ticketModal';

const EVENT_DAY = { year: 2026, month: 7, day: 30 };

const FILTER_ORDER: SessionKind[] = [
  'panel',
  'keynote',
  'fireside',
  'showcase',
  'opening',
  'networking',
];

/** Minutes since midnight, from a "HH:MM" string. */
function toMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  const hourLabel = `${hours} hr${hours > 1 ? 's' : ''}`;
  return rest ? `${hourLabel} ${rest} min` : hourLabel;
}

/** Current wall-clock time in Lagos (WAT, GMT+1), whatever timezone the visitor is in. */
function lagosNow(): Date {
  const now = new Date();
  return new Date(now.getTime() + (now.getTimezoneOffset() + 60) * 60_000);
}

export function AgendaPage() {
  const [filter, setFilter] = useState<SessionKind | 'all'>('all');
  const [activePerson, setActivePerson] = useState<ResolvedPerson | null>(null);
  const [nowMinutes, setNowMinutes] = useState<number | null>(null);
  const sessionRefs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    window.scrollTo(0, 0);

    const previousTitle = document.title;
    document.title = `Agenda | ${EVENT.name}`;

    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute('content') ?? null;
    meta?.setAttribute(
      'content',
      `The full ${EVENT.name} programme: ${AGENDA_STATS.panels} panels, ${AGENDA_STATS.keynotes} keynotes and ${AGENDA_STATS.firesides} fireside chats in one day at ${EVENT.venue}.`,
    );

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) meta?.setAttribute('content', previousDescription);
    };
  }, []);

  // Live "on now" tracking. Only ever active on the day itself.
  useEffect(() => {
    const tick = () => {
      const wat = lagosNow();
      const isEventDay =
        wat.getUTCFullYear() === EVENT_DAY.year &&
        wat.getUTCMonth() + 1 === EVENT_DAY.month &&
        wat.getUTCDate() === EVENT_DAY.day;
      setNowMinutes(isEventDay ? wat.getUTCHours() * 60 + wat.getUTCMinutes() : null);
    };

    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const kindCounts = useMemo(() => {
    const counts = new Map<SessionKind, number>();
    for (const session of agenda) {
      counts.set(session.kind, (counts.get(session.kind) ?? 0) + 1);
    }
    return counts;
  }, []);

  const activeKinds = useMemo(
    () => FILTER_ORDER.filter((kind) => kindCounts.has(kind)),
    [kindCounts],
  );

  const visible = filter === 'all' ? agenda : agenda.filter((s) => s.kind === filter);

  const liveSession = useMemo(() => {
    if (nowMinutes === null) return null;
    return (
      agenda.find((s) => nowMinutes >= toMinutes(s.start) && nowMinutes < toMinutes(s.end)) ?? null
    );
  }, [nowMinutes]);

  const scrollToSession = (id: string) => {
    if (filter !== 'all') setFilter('all');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.requestAnimationFrame(() => {
      const node = sessionRefs.current[id];
      if (!node) return;
      node.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      node.classList.add('ring-2', 'ring-fintech-gold/70');
      window.setTimeout(() => node.classList.remove('ring-2', 'ring-fintech-gold/70'), 1600);
    });
  };

  return (
    <div className="min-h-screen bg-deep-navy flex flex-col">
      <Header />

      <main className="flex-grow relative overflow-hidden section-gradient-rich pt-32 pb-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-nigeria-green/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-fintech-gold/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ------------------------------------------------------------ hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <CalendarDays className="w-4 h-4 text-fintech-gold" />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Full Programme
              </span>
            </div>

            <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
              One day on the <span className="gradient-text-green">new rails</span>
            </h1>

            <p className="text-lg md:text-xl text-text-light leading-relaxed mb-8">
              Nigeria&rsquo;s banks, regulators, issuers, and builders in one room to work out what
              stablecoins actually change. {AGENDA_STATS.panels} panels, {AGENDA_STATS.keynotes}{' '}
              keynotes, {AGENDA_STATS.firesides} fireside chats, and {AGENDA_STATS.voices} voices
              from {EVENT.doors} to {EVENT.close}.
            </p>

            <dl className="flex flex-wrap gap-x-8 gap-y-4 mb-12">
              <div className="flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-nigeria-green shrink-0" />
                <div>
                  <dt className="text-text-grey text-[11px] uppercase tracking-wider">Date</dt>
                  <dd className="text-white font-semibold text-sm">{EVENT.date}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-nigeria-green shrink-0" />
                <div>
                  <dt className="text-text-grey text-[11px] uppercase tracking-wider">Venue</dt>
                  <dd className="text-white font-semibold text-sm">{EVENT.venue}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-nigeria-green shrink-0" />
                <div>
                  <dt className="text-text-grey text-[11px] uppercase tracking-wider">Doors</dt>
                  <dd className="text-white font-semibold text-sm">
                    {EVENT.doors} {EVENT.timezone}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* -------------------------------------------------- day scrubber */}
          <section aria-labelledby="shape-of-the-day" className="mb-12">
            <div className="flex items-baseline justify-between mb-3">
              <h2
                id="shape-of-the-day"
                className="font-satoshi font-semibold text-white text-sm tracking-wide"
              >
                The shape of the day
              </h2>
              <span className="text-text-grey text-xs font-mono">
                {EVENT.doors}&nbsp;&rarr;&nbsp;{EVENT.close}
              </span>
            </div>

            <div className="glass-card rounded-2xl p-3 sm:p-4">
              <ul className="flex gap-[3px] h-12 sm:h-14">
                {agenda.map((session) => {
                  const meta = KIND_META[session.kind];
                  const isLive = liveSession?.id === session.id;
                  return (
                    <li
                      key={session.id}
                      style={{ flexGrow: session.minutes, flexBasis: 0, minWidth: 11 }}
                      className="flex"
                    >
                      <button
                        type="button"
                        onClick={() => scrollToSession(session.id)}
                        title={`${session.start} to ${session.end} · ${session.title}`}
                        aria-label={`Jump to ${session.title}, ${session.start} to ${session.end}`}
                        className={`group relative w-full rounded-md ${meta.bar} transition-all duration-300 hover:brightness-125 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-fintech-gold/70 ${
                          isLive ? 'ring-2 ring-fintech-gold animate-pulse-glow' : ''
                        }`}
                      >
                        <span className="pointer-events-none absolute -top-2 left-1/2 z-20 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border border-white/15 bg-deep-navy/95 px-2 py-1 font-mono text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                          {session.start}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-3">
                {activeKinds.map((kind) => (
                  <span key={kind} className="inline-flex items-center gap-1.5">
                    <span className={`h-2.5 w-2.5 rounded-sm ${KIND_META[kind].bar}`} />
                    <span className="text-[11px] text-text-grey">{KIND_META[kind].label}</span>
                  </span>
                ))}
                <span className="ml-auto hidden text-[11px] text-text-grey/60 sm:inline">
                  Segment width follows real session length
                </span>
              </div>
            </div>

            {liveSession && (
              <button
                type="button"
                onClick={() => scrollToSession(liveSession.id)}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-fintech-gold/40 bg-fintech-gold/10 px-4 py-2 text-sm font-semibold text-fintech-gold transition-colors hover:bg-fintech-gold/20 focus:outline-none focus:ring-2 focus:ring-fintech-gold/60"
              >
                <Radio className="h-4 w-4" />
                On now: {liveSession.title.split(':')[0]}
              </button>
            )}
          </section>

          {/* ------------------------------------------------------- filters */}
          <div className="scrollbar-hide -mx-4 mb-8 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <div className="flex min-w-max gap-2" role="group" aria-label="Filter the programme">
              <FilterChip
                label="Everything"
                count={agenda.length}
                active={filter === 'all'}
                onClick={() => setFilter('all')}
              />
              {activeKinds.map((kind) => (
                <FilterChip
                  key={kind}
                  label={KIND_META[kind].label}
                  count={kindCounts.get(kind) ?? 0}
                  active={filter === kind}
                  onClick={() => setFilter(kind)}
                />
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------ timeline */}
          <ol className="space-y-4">
            {visible.map((session, index) => (
              <SessionRow
                key={session.id}
                session={session}
                isLast={index === visible.length - 1}
                isLive={liveSession?.id === session.id}
                isPast={nowMinutes !== null && nowMinutes >= toMinutes(session.end)}
                onSelectPerson={setActivePerson}
                registerRef={(node) => {
                  sessionRefs.current[session.id] = node;
                }}
              />
            ))}
          </ol>

          <p className="mt-10 text-sm text-text-grey">
            All times are {EVENT.timezone}. The programme is confirmed but may shift slightly on the
            day.
          </p>

          {/* ----------------------------------------------------------- CTA */}
          <div className="glass-card-strong mt-16 rounded-3xl p-8 text-center sm:p-10">
            <h2 className="font-satoshi mb-4 text-2xl font-bold text-white sm:text-3xl">
              {AGENDA_STATS.voices} voices. One room. One day.
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-text-light">
              Seats at {EVENT.shortName} are limited, and the roundtables that close the day are by
              invitation. Register now to be in the room.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={TICKET_URL}
                onClick={(e) => {
                  e.preventDefault();
                  openTicketModal();
                }}
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
              >
                <Ticket className="h-5 w-5" />
                Book a Seat
              </a>
              <Link
                to="/speakers"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
              >
                <Users className="h-5 w-5" />
                Meet the Speakers
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {activePerson && <PersonModal person={activePerson} onClose={() => setActivePerson(null)} />}
    </div>
  );
}

/* --------------------------------------------------------------- sub-components */

function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-fintech-gold/60 ${
        active
          ? 'border-nigeria-green bg-nigeria-green/20 text-white'
          : 'border-white/15 bg-white/5 text-text-light hover:border-white/30 hover:text-white'
      }`}
    >
      {label}
      <span className={`text-xs ${active ? 'text-green-light' : 'text-text-grey'}`}>{count}</span>
    </button>
  );
}

function SessionRow({
  session,
  isLast,
  isLive,
  isPast,
  onSelectPerson,
  registerRef,
}: {
  session: AgendaSession;
  isLast: boolean;
  isLive: boolean;
  isPast: boolean;
  onSelectPerson: (person: ResolvedPerson) => void;
  registerRef: (node: HTMLLIElement | null) => void;
}) {
  const meta = KIND_META[session.kind];
  const dimmed = isPast && !isLive;

  return (
    <li
      ref={registerRef}
      className="scroll-mt-28 rounded-2xl transition-shadow md:grid md:grid-cols-[92px_28px_1fr]"
    >
      {/* time gutter, desktop only */}
      <div className={`hidden pr-4 pt-6 text-right md:block ${dimmed ? 'opacity-50' : ''}`}>
        <div className="font-mono text-sm leading-none text-fintech-gold">{session.start}</div>
        <div className="mt-1.5 font-mono text-xs leading-none text-text-grey">{session.end}</div>
        <div className="mt-2 text-[10px] uppercase tracking-wide text-text-grey/70">
          {formatDuration(session.minutes)}
        </div>
      </div>

      {/* rail */}
      <div className="relative hidden justify-center md:flex" aria-hidden>
        {!isLast && (
          <span className="absolute -bottom-4 left-1/2 top-7 w-px -translate-x-1/2 bg-white/10" />
        )}
        <span
          className={`relative mt-6 h-3 w-3 rounded-full ring-4 ring-deep-navy ${meta.dot} ${
            isLive ? 'animate-pulse-glow' : ''
          } ${dimmed ? 'opacity-40' : ''}`}
        />
      </div>

      {/* card */}
      <div
        className={`rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
          isLive
            ? 'border-fintech-gold/50 bg-white/[0.07] shadow-glow-gold'
            : 'border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.06]'
        } ${dimmed ? 'opacity-65' : ''}`}
      >
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${meta.chip}`}
          >
            {meta.label}
          </span>

          {/* time, mobile only */}
          <span className="font-mono text-sm text-fintech-gold md:hidden">
            {session.start} &ndash; {session.end}
          </span>
          <span className="text-xs text-text-grey md:hidden">
            {formatDuration(session.minutes)}
          </span>

          {isLive && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-fintech-gold px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-deep-navy">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-deep-navy" />
              On now
            </span>
          )}

          {session.access && (
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-medium text-text-light">
              {session.access}
            </span>
          )}
        </div>

        <h3 className="font-satoshi mb-2 text-lg font-bold leading-snug text-white sm:text-xl">
          {session.title}
        </h3>

        {session.location && (
          <p className="mb-2 flex items-center gap-1.5 text-sm text-text-grey">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {session.location}
          </p>
        )}

        {session.summary && (
          <p className="text-sm leading-relaxed text-text-light">{session.summary}</p>
        )}

        {(session.moderator || session.host || session.people?.length) && (
          <div className="mt-5 space-y-5 border-t border-white/10 pt-5">
            {session.moderator && (
              <PersonBlock
                label="Moderator"
                people={[session.moderator]}
                prominent
                onSelectPerson={onSelectPerson}
              />
            )}
            {session.host && (
              <PersonBlock
                label={session.hostLabel ?? 'Hosted by'}
                people={[session.host]}
                prominent
                onSelectPerson={onSelectPerson}
              />
            )}
            {session.people && session.people.length > 0 && (
              <PersonBlock
                label={session.peopleLabel ?? 'Speaking'}
                people={session.people}
                onSelectPerson={onSelectPerson}
              />
            )}
          </div>
        )}
      </div>
    </li>
  );
}

function PersonBlock({
  label,
  people,
  prominent = false,
  onSelectPerson,
}: {
  label: string;
  people: AgendaPerson[];
  prominent?: boolean;
  onSelectPerson: (person: ResolvedPerson) => void;
}) {
  const resolved = people.map(resolvePerson);

  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-text-grey">
        {label}
      </p>
      <div className={prominent ? 'grid gap-3' : 'grid gap-3 sm:grid-cols-2 lg:grid-cols-3'}>
        {resolved.map((person) => (
          <button
            key={person.key}
            type="button"
            onClick={() => onSelectPerson(person)}
            className="group -m-2 flex items-center gap-3 rounded-xl border border-transparent p-2 text-left transition-colors hover:border-white/15 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-fintech-gold/60"
            aria-label={`View details for ${person.name}`}
          >
            <PersonAvatar
              person={person}
              size={prominent ? 'lg' : 'md'}
              className="ring-2 ring-white/10 transition-all group-hover:ring-nigeria-green/50"
            />
            <span className="min-w-0">
              <span
                className={`font-satoshi block font-bold leading-tight text-white transition-colors group-hover:text-fintech-gold ${
                  prominent ? 'text-base' : 'text-sm'
                }`}
              >
                {person.name}
              </span>
              {person.role && (
                <span className="mt-0.5 block text-xs leading-snug text-text-light">
                  {person.role}
                </span>
              )}
              {person.organization && (
                <span className="block text-xs font-medium leading-snug text-nigeria-green">
                  {person.organization}
                </span>
              )}
              {person.note && (
                <span className="mt-1 inline-block rounded-full border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[10px] font-medium text-cyan">
                  {person.note}
                </span>
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
