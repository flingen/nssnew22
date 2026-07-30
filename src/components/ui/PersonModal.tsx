import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { ResolvedPerson } from '../../data/agenda';

/**
 * Avatar that falls back to an initials tile when a speaker has no photo yet,
 * so a missing headshot reads as a deliberate design state rather than a
 * broken image.
 */
export function PersonAvatar({
  person,
  size = 'md',
  className = '',
}: {
  person: ResolvedPerson;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) {
  const sizes = {
    sm: 'w-10 h-10 text-[11px]',
    md: 'w-12 h-12 text-xs',
    lg: 'w-16 h-16 text-sm',
    xl: 'w-full h-full text-3xl',
  };

  const base = `${sizes[size]} rounded-full overflow-hidden shrink-0 ${className}`;

  if (person.image) {
    return (
      <div className={`${base} bg-white/10`}>
        <img
          src={person.image}
          alt={person.name}
          width={512}
          height={512}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`${base} bg-gradient-to-br from-royal-blue/60 to-purple/50 border border-white/15 flex items-center justify-center`}
      aria-hidden
    >
      <span className="font-satoshi font-bold text-white/90 tracking-wide">
        {person.initials}
      </span>
    </div>
  );
}

export function PersonModal({
  person,
  onClose,
}: {
  person: ResolvedPerson;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const titleId = `person-${person.key}-name`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-deep-navy/85 backdrop-blur-md cursor-default"
      />

      <div className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-navy-light to-deep-navy border border-white/10 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-fintech-gold/60"
          aria-label="Close speaker details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-[260px_1fr]">
          <div className="p-6 pb-0 md:p-8 md:pr-0">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 max-w-[220px] md:max-w-none mx-auto md:mx-0">
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  width={512}
                  height={512}
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-royal-blue/60 to-purple/50 flex items-center justify-center">
                  <span className="font-satoshi font-bold text-4xl text-white/90">
                    {person.initials}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 md:py-8 md:pr-8">
            <h2
              id={titleId}
              className="font-satoshi font-bold text-2xl md:text-3xl text-white leading-tight mb-2"
            >
              {person.name}
            </h2>
            {person.role && <p className="text-fintech-gold font-medium mb-1">{person.role}</p>}
            {person.organization && (
              <p className="text-nigeria-green font-semibold">{person.organization}</p>
            )}
            {person.note && (
              <p className="mt-3 inline-flex items-center rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                {person.note}
              </p>
            )}

            {person.bio.length > 0 ? (
              <div className="border-t border-white/10 mt-6 pt-6 space-y-4">
                {person.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-text-light leading-relaxed text-sm md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className="border-t border-white/10 mt-6 pt-6 text-text-grey text-sm">
                A full profile for {person.name} is on the way.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
