interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  const alignment = centered ? 'text-center' : 'text-left';
  const titleColor = light ? 'text-deep-navy' : 'text-white';
  const subtitleColor = light ? 'text-gray-600' : 'text-text-grey';

  return (
    <div className={`mb-12 ${alignment}`}>
      {eyebrow && (
        <span className="text-electric-blue text-sm font-medium tracking-widest uppercase mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl ${titleColor} leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${subtitleColor} max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
