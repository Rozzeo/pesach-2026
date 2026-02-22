import { NavLink } from 'react-router-dom';
import { Home, CheckSquare, UtensilsCrossed, Star } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { to: '/', label: t('nav.home'), icon: Home, end: true },
    { to: '/preparation', label: t('nav.preparation'), icon: CheckSquare, end: false },
    { to: '/recipes', label: t('nav.recipes'), icon: UtensilsCrossed, end: false },
    { to: '/kids', label: t('nav.kids'), icon: Star, end: false },
  ];

  return (
    <header className="bg-wine shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between py-3 border-b border-wine-light/30">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🍷</span>
            <div>
              <h1 className="text-white font-serif font-bold text-lg leading-tight">{t('nav.title')}</h1>
              <p className="text-gold text-xs tracking-wide">{t('nav.subtitle')}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CountdownTimer compact />

            {/* Language toggle */}
            <div className="flex gap-1 ml-2">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded-md text-xs font-bold transition-colors ${
                  lang === 'en'
                    ? 'bg-gold text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => setLang('ru')}
                className={`px-2 py-1 rounded-md text-xs font-bold transition-colors ${
                  lang === 'ru'
                    ? 'bg-gold text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                🇷🇺 RU
              </button>
            </div>
          </div>
        </div>

        <nav className="flex overflow-x-auto">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  isActive
                    ? 'text-gold border-gold'
                    : 'text-white/70 border-transparent hover:text-white hover:border-white/30'
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
