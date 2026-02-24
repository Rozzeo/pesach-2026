import { Link } from 'react-router-dom';
import { CheckSquare, UtensilsCrossed, Star, ArrowRight } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import { checklistPhases, getAllTasks } from '../data/checklist';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t, lang } = useLanguage();
  const allTasks = getAllTasks();
  const [checkedIds] = useLocalStorage<string[]>('pesach-checklist', []);
  const completedCount = allTasks.filter(t => checkedIds.includes(t.id)).length;
  const progressPct = Math.round((completedCount / allTasks.length) * 100);

  const currentPhaseId = (() => {
    const today = new Date();
    const sederDate = new Date('2026-04-01');
    const daysOut = Math.ceil((sederDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if (daysOut > 28) return 1;
    if (daysOut > 14) return 2;
    if (daysOut > 7) return 3;
    if (daysOut > 3) return 4;
    if (daysOut > 1) return 5;
    return 6;
  })();
  const currentPhase = checklistPhases.find(p => p.id === currentPhaseId);

  const sections = [
    {
      to: '/preparation',
      icon: CheckSquare,
      stat: t('home.section1Stat'),
      title: t('home.section1Title'),
      description: t('home.section1Desc'),
      color: 'bg-wine text-white',
      accent: 'text-gold',
    },
    {
      to: '/recipes',
      icon: UtensilsCrossed,
      stat: t('home.section2Stat'),
      title: t('home.section2Title'),
      description: t('home.section2Desc'),
      color: 'bg-herb-green text-white',
      accent: 'text-gold-light',
    },
    {
      to: '/kids',
      icon: Star,
      stat: t('home.section3Stat'),
      title: t('home.section3Title'),
      description: t('home.section3Desc'),
      color: 'bg-gold text-white',
      accent: 'text-parchment',
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="text-center mb-12">
        <div className="inline-block bg-gold/10 border border-gold/30 rounded-full px-4 py-1 text-gold text-sm font-medium mb-4">
          {t('home.badge')}
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-wine mb-4 leading-tight">
          {t('home.headline')}<br />
          <span className="text-gold">{t('home.headlineAccent')}</span>
        </h2>
        <p className="text-stone-600 text-lg max-w-xl mx-auto mb-8">
          {t('home.subline')}
        </p>
        <CountdownTimer />
      </section>

      {/* Progress Banner */}
      {completedCount > 0 && (
        <section className="bg-sand rounded-2xl p-5 mb-8 border border-gold/20">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-wine">{t('home.progressLabel')}</span>
            <span className="text-sm font-bold text-wine">{completedCount} / {allTasks.length} {t('home.progressSuffix')}</span>
          </div>
          <div className="h-3 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-wine to-gold rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="text-xs text-stone-500 mt-2">{progressPct}{t('home.progressPercent')}</p>
        </section>
      )}

      {/* Current Phase Highlight */}
      {currentPhase && (
        <section className="bg-white border-l-4 border-wine rounded-xl p-5 mb-8 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-wine mb-1">{t('home.phaseNow')}</div>
          <h3 className="text-xl font-serif font-bold text-stone-800 mb-1">{currentPhase.title[lang]}</h3>
          <p className="text-stone-600 text-sm mb-3">{currentPhase.when[lang]} — {currentPhase.description[lang]}</p>
          <Link
            to="/preparation"
            className="inline-flex items-center gap-2 text-sm font-semibold text-wine hover:text-wine-dark transition-colors"
          >
            {t('home.viewTasks')} <ArrowRight size={14} />
          </Link>
        </section>
      )}

      {/* Section Cards */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        {sections.map(({ to, icon: Icon, title, description, color, accent, stat }) => (
          <Link
            key={to}
            to={to}
            className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`${color} p-6`}>
              <Icon size={28} className={`${accent} mb-3`} />
              <div className={`text-xs font-bold uppercase tracking-widest ${accent} mb-2`}>{stat}</div>
              <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
              <p className="text-sm opacity-85 leading-relaxed">{description}</p>
            </div>
            <div className="bg-white px-6 py-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-stone-700">{t('home.explore')}</span>
              <ArrowRight size={16} className="text-stone-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </section>

      {/* Seder Overview */}
      <section className="bg-parchment border border-sand rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-serif font-bold text-wine mb-3">{t('home.sederSteps')}</h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {[
            'Kadesh', 'Urchatz', 'Karpas', 'Yachatz', 'Maggid',
            'Rachtzah', 'Motzi Matzah', 'Maror', 'Korech', 'Shulchan Orech',
            'Tzafun', 'Barech', 'Hallel', 'Nirtzah', 'Chad Gadya',
          ].map((step, i) => (
            <div key={step} className="bg-white rounded-lg px-2 py-2 text-center shadow-sm">
              <div className="text-xs text-gold font-bold">{i + 1}</div>
              <div className="text-xs text-stone-700 font-medium leading-tight">{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="text-center py-6">
        <blockquote className="text-stone-600 italic text-lg font-serif max-w-2xl mx-auto">
          {t('home.quote')}
        </blockquote>
        <cite className="text-sm text-stone-400 mt-2 block">{t('home.cite')}</cite>
      </section>
    </main>
  );
}
