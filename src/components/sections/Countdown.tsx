import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const targetDate = new Date('2026-07-30T08:00:00+01:00');

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <section className="py-12 lg:py-16 section-light-gradient">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-8">
          <span className="text-nigeria-green text-sm font-medium tracking-widest uppercase">
            Countdown to Event
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-8">
          {timeBlocks.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="glass-card-white rounded-xl w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center mb-2 shadow-md">
                <span className="font-satoshi font-bold text-2xl sm:text-3xl lg:text-4xl text-deep-navy">
                  {String(value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-gray-600 text-xs sm:text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
