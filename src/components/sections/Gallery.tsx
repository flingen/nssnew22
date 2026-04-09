import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const speakingImages = Array.from({ length: 10 }, (_, i) => `/gallery/speaking-${String(i + 1).padStart(2, '0')}.jpg`);
const exhibitingImages = Array.from({ length: 10 }, (_, i) => `/gallery/exhibiting-${String(i + 1).padStart(2, '0')}.jpg`);
const attendingImages = Array.from({ length: 10 }, (_, i) => `/gallery/attending-${String(i + 1).padStart(2, '0')}.jpg`);

type MarqueeRowProps = {
  images: string[];
  direction: 'left' | 'right';
  altPrefix: string;
};

function MarqueeRow({ images, direction, altPrefix }: MarqueeRowProps) {
  // Duplicate the images so the animation loops seamlessly
  const looped = [...images, ...images];
  const animationClass = direction === 'right' ? 'animate-slide-right' : 'animate-slide-left';

  return (
    <div className="overflow-hidden">
      <div className={`flex gap-4 w-max ${animationClass}`}>
        {looped.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className="flex-shrink-0 w-64 sm:w-72 md:w-80 h-44 sm:h-48 md:h-52 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={src}
              alt={`${altPrefix} ${(idx % images.length) + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-deep-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-royal-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-nigeria-green/10 rounded-full blur-[120px]" />

      <div className="relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 px-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-nigeria-green/10 text-nigeria-green text-sm font-semibold tracking-widest uppercase mb-6">
            Relive The Moments
          </span>
          <h2 className="font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Highlights from Past Events
          </h2>
          <p className="text-text-light text-lg max-w-3xl mx-auto">
            A look back at the conversations, connections, and community that made NSS 1.0 unforgettable.
          </p>
        </div>

        <div className="space-y-4">
          <MarqueeRow images={speakingImages} direction="right" altPrefix="Speaking moment" />
          <MarqueeRow images={exhibitingImages} direction="left" altPrefix="Exhibiting moment" />
          <MarqueeRow images={attendingImages} direction="right" altPrefix="Attending moment" />
        </div>
      </div>
    </section>
  );
}
