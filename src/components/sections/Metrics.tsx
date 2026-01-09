import { Users, Building2, Mic2, Store, FileText, LayoutGrid } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';

const metrics = [
  { value: 750, suffix: '+', label: 'Attendees', icon: Users, color: 'from-nigeria-green to-green-light' },
  { value: 50, suffix: '+', label: 'Companies', icon: Building2, color: 'from-royal-blue to-electric-blue' },
  { value: 25, suffix: '+', label: 'Speakers', icon: Mic2, color: 'from-purple to-purple-light' },
  { value: 10, suffix: '+', label: 'Exhibitions', icon: Store, color: 'from-fintech-gold to-gold-dark' },
  { value: 2, suffix: '', label: 'Essay Competitions', icon: FileText, color: 'from-cyan to-electric-blue' },
  { value: 1, suffix: '', label: 'Stage', icon: LayoutGrid, color: 'from-nigeria-green to-cyan' },
];

function MetricCard({ value, suffix, label, icon: Icon, color }: typeof metrics[0]) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="metric-card p-6 text-center group">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="font-satoshi font-extrabold text-4xl md:text-5xl text-deep-navy mb-2">
        {count}
        <span className="gradient-text-green">{suffix}</span>
      </div>
      <div className="text-gray-600 text-sm font-medium">{label}</div>
    </div>
  );
}

export function Metrics() {
  return (
    <section className="py-20 lg:py-28 section-light-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <svg viewBox="0 0 800 800" className="w-full h-full">
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00A859" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <path
              d="M400 100 C200 150 150 300 200 400 C250 500 300 600 400 700 C500 600 550 500 600 400 C650 300 600 150 400 100"
              fill="url(#mapGradient)"
              stroke="#00A859"
              strokeWidth="2"
              strokeOpacity="0.3"
            />
          </svg>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-nigeria-green/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-nigeria-green/10 text-nigeria-green text-sm font-semibold tracking-widest uppercase mb-6">
            At a Glance
          </span>
          <h2 className="font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl text-deep-navy">
            The Numbers For <span className="gradient-text-green">NSS 2.0</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
