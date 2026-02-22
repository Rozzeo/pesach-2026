import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SEDER_DATE = new Date('2026-04-01T18:00:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = SEDER_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

interface Props {
  compact?: boolean;
}

export default function CountdownTimer({ compact = false }: Props) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-gold font-semibold">
        <Clock size={16} />
        <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</span>
      </div>
    );
  }

  const units = [
    { label: t('countdown.days'), value: timeLeft.days },
    { label: t('countdown.hours'), value: timeLeft.hours },
    { label: t('countdown.minutes'), value: timeLeft.minutes },
    { label: t('countdown.seconds'), value: timeLeft.seconds },
  ];

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-4 text-gold">
        <Clock size={20} />
        <span className="text-lg font-semibold tracking-wide uppercase text-sm">{t('countdown.label')}</span>
      </div>
      <div className="flex gap-3 justify-center">
        {units.map(({ label, value }) => (
          <div
            key={label}
            className="bg-wine text-white rounded-xl px-4 py-3 min-w-[72px] text-center shadow-lg"
          >
            <div className="text-3xl font-bold font-serif tabular-nums leading-none">
              {String(value).padStart(2, '0')}
            </div>
            <div className="text-xs uppercase tracking-widest mt-1 text-gold opacity-90">
              {label}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-stone-500 mt-3 italic">
        {t('countdown.quote')}
      </p>
    </div>
  );
}
