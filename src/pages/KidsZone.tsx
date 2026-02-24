import { useState } from 'react';
import { Clock, Users, ChevronDown, ChevronUp, Package, Lightbulb, FlaskConical } from 'lucide-react';
import { activities, type Activity } from '../data/activities';
import { useLanguage } from '../contexts/LanguageContext';

const typeColors: Record<string, string> = {
  'Kitchen Science': 'bg-orange-500 text-white',
  'Water Experiment': 'bg-blue-600 text-white',
  'Science Lab': 'bg-herb-green text-white',
  'Creative Craft': 'bg-purple-600 text-white',
  'Family Game Design': 'bg-wine text-white',
  'Engineering Challenge': 'bg-amber-700 text-white',
  'Discussion & Writing': 'bg-teal-600 text-white',
};

const phaseEmojis: Record<string, string> = {
  'The Question': '❓',
  'The Story': '📖',
  'The Science': '🔬',
  'The Experiment': '⚗️',
  'The Artifact': '🏆',
  'Setup: The Lab Notebook': '📓',
  'Experiment 1: Blood (Dam)': '🩸',
  'Experiment 2: Darkness (Choshech)': '🌑',
  'Experiment 3: Frogs (Tzfardea)': '🐸',
  'Experiment 4: Hail (Barad)': '🧊',
  'Synthesis: The Lab Report': '📋',
  'Research Together': '🗺️',
  'Draw the Map': '✏️',
  'Populate the Map': '🌟',
  'The Distance Calculation': '📐',
  'Hang the Map': '📌',
  'The Concept': '💡',
  'Write the Clues': '✍️',
  'Hide Everything': '🙈',
  'The Hunt Begins': '🔍',
  'The Negotiation': '🤝',
  'The Artifact Lives On': '📦',
  'The Challenge': '🏗️',
  'Round 1: Free Build': '🧱',
  'Round 2: Pyramid Challenge': '🔺',
  'The Human Connection': '⛏️',
  'The Engineering Debrief': '📊',
  'Brainstorm: Our Questions': '🧠',
  'Choose the Best Four': '🗳️',
  'Research One Question': '🔎',
  'Write the Science Haggadah': '📝',
};

function ActivityCard({ activity }: { activity: Activity }) {
  const [expanded, setExpanded] = useState(false);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const { t, lang } = useLanguage();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${typeColors[activity.type.en] ?? 'bg-stone-500 text-white'}`}>
            {activity.type[lang]}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-parchment text-stone-600 border border-sand flex items-center gap-1">
            <Users size={10} />
            {t('kids.ages')} {activity.ageRange}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-parchment text-stone-600 border border-sand flex items-center gap-1">
            <Clock size={10} />
            {activity.duration[lang]}
          </span>
        </div>

        <h3 className="text-xl font-serif font-bold text-stone-800 mb-1">{activity.title[lang]}</h3>
        <p className="text-sm font-medium text-wine mb-3">{activity.subtitle[lang]}</p>
        <p className="text-sm text-stone-600 leading-relaxed mb-4">{activity.overview[lang]}</p>

        <div className="flex items-center gap-2 text-sm text-gold font-medium">
          <span>🏆</span>
          <span>{t('kids.artifact')} {activity.artifact[lang]}</span>
        </div>
      </div>

      {/* Expand Button */}
      <button
        onClick={() => setExpanded(e => !e)}
        className="w-full px-6 py-3 bg-parchment border-t border-sand flex items-center justify-between text-sm font-semibold text-wine hover:bg-sand transition-colors"
      >
        <span>{expanded ? t('kids.collapseActivity') : t('kids.expandActivity')}</span>
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t border-sand">
          {/* Materials */}
          <div className="px-6 py-5 bg-parchment/50">
            <h4 className="font-bold text-stone-700 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
              <Package size={14} className="text-wine" />
              {t('kids.materials')}
            </h4>
            <ul className="grid sm:grid-cols-2 gap-1">
              {activity.materials.map((m, i) => (
                <li key={i} className="text-sm text-stone-700 flex items-start gap-2">
                  <span className="text-gold mt-1 flex-shrink-0">•</span>
                  {m[lang]}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div className="px-6 py-5">
            <h4 className="font-bold text-stone-700 mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
              <FlaskConical size={14} className="text-wine" />
              {t('kids.steps')}
            </h4>
            <div className="space-y-3">
              {activity.steps.map((step, i) => {
                const emoji = phaseEmojis[step.phase.en] ?? '▶';
                const isOpen = expandedStep === step.phase.en;
                return (
                  <div key={i} className="border border-stone-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedStep(isOpen ? null : step.phase.en)}
                      className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-stone-50 transition-colors"
                    >
                      <span className="text-lg flex-shrink-0">{emoji}</span>
                      <span className="font-semibold text-stone-800 text-sm flex-1">{step.phase[lang]}</span>
                      {isOpen ? <ChevronUp size={14} className="text-stone-400" /> : <ChevronDown size={14} className="text-stone-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 bg-stone-50 border-t border-stone-100">
                        <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">{step.content[lang]}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Parent Tips */}
          <div className="px-6 pb-6">
            <div className="bg-gold/10 border border-gold/30 rounded-xl px-4 py-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={14} className="text-gold" />
                <span className="text-xs font-bold text-gold uppercase tracking-wide">{t('kids.parentTips')}</span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">{activity.parentTips[lang]}</p>
            </div>

            {activity.scienceNote && (
              <div className="mt-3 bg-herb-green/10 border border-herb-green/20 rounded-xl px-4 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <FlaskConical size={14} className="text-herb-green" />
                  <span className="text-xs font-bold text-herb-green uppercase tracking-wide">{t('kids.science')}</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">{activity.scienceNote?.[lang]}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function KidsZone() {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-wine mb-2">{t('kids.heading')}</h2>
        <p className="text-stone-600 mb-4">{t('kids.subtitle')}</p>
        <div className="flex flex-wrap gap-3">
          <div className="bg-parchment border border-sand rounded-xl px-4 py-2 text-sm">
            <span className="font-bold text-wine">{t('kids.pedagogyLabel')}</span>
            <span className="text-stone-600"> {t('kids.pedagogyNote')}</span>
          </div>
        </div>
      </div>

      {/* Activity Grid */}
      <div className="space-y-6">
        {activities.map((activity, i) => (
          <div key={activity.id}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 bg-wine text-white rounded-full text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
            <ActivityCard activity={activity} />
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center bg-parchment border border-sand rounded-2xl p-6">
        <p className="text-stone-600 text-sm italic mb-2">{t('kids.quote')}</p>
        <p className="text-xs text-stone-400">{t('kids.cite')}</p>
      </div>
    </main>
  );
}
