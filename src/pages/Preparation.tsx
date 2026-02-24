import { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { checklistPhases, getAllTasks, getPhaseByDate, type ChecklistTask } from '../data/checklist';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useLanguage } from '../contexts/LanguageContext';

export default function Preparation() {
  const { t, lang } = useLanguage();
  const allTasks = getAllTasks();
  const [checkedIds, setCheckedIds] = useLocalStorage<string[]>('pesach-checklist', []);
  const [expandedPhases, setExpandedPhases] = useState<number[]>([getPhaseByDate()]);
  const [expandedTasks, setExpandedTasks] = useState<string[]>([]);
  const currentPhaseId = getPhaseByDate();

  const toggleCheck = (id: string) => {
    setCheckedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const togglePhase = (id: number) => {
    setExpandedPhases(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleTask = (id: string) => {
    setExpandedTasks(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const totalCompleted = allTasks.filter(t => checkedIds.includes(t.id)).length;
  const globalPct = Math.round((totalCompleted / allTasks.length) * 100);

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-wine mb-2">{t('prep.heading')}</h2>
        <p className="text-stone-600 mb-5">
          {allTasks.length} {t('prep.subtitle')}
        </p>

        {/* Global Progress */}
        <div className="bg-sand rounded-xl p-4 border border-gold/20">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-wine text-sm">{t('prep.globalProgress')}</span>
            <span className="text-sm font-bold text-wine">{totalCompleted} / {allTasks.length}</span>
          </div>
          <div className="h-3 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-wine to-gold rounded-full transition-all duration-500"
              style={{ width: `${globalPct}%` }}
            />
          </div>
          <p className="text-xs text-stone-500 mt-2">{globalPct}%</p>
        </div>
      </div>

      <div className="space-y-4">
        {checklistPhases.map(phase => {
          const phaseTasks = phase.tasks;
          const phaseCompleted = phaseTasks.filter(t => checkedIds.includes(t.id)).length;
          const phasePct = Math.round((phaseCompleted / phaseTasks.length) * 100);
          const isExpanded = expandedPhases.includes(phase.id);
          const isCurrent = phase.id === currentPhaseId;

          return (
            <div
              key={phase.id}
              className={`rounded-xl border overflow-hidden shadow-sm ${
                isCurrent
                  ? 'border-wine ring-2 ring-wine/20'
                  : 'border-stone-200'
              }`}
            >
              {/* Phase Header */}
              <button
                onClick={() => togglePhase(phase.id)}
                className={`w-full text-left px-5 py-4 flex items-center gap-3 transition-colors ${
                  isCurrent ? 'bg-wine text-white' : 'bg-white hover:bg-stone-50 text-stone-800'
                }`}
              >
                <span className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {isCurrent && (
                      <span className="text-xs bg-gold text-white font-bold px-2 py-0.5 rounded-full">
                        {t('prep.currentBadge')}
                      </span>
                    )}
                    <span className={`text-xs font-bold uppercase tracking-widest ${isCurrent ? 'text-gold' : 'text-wine'}`}>
                      {t('prep.phaseLabel')} {phase.id}
                    </span>
                  </div>
                  <div className="font-serif font-bold text-lg">{phase.title[lang]}</div>
                  <div className={`text-sm ${isCurrent ? 'text-white/80' : 'text-stone-500'}`}>
                    {phase.when[lang]} — {phaseCompleted}/{phaseTasks.length} {t('prep.done')}
                  </div>
                </span>

                {/* Phase mini-progress */}
                <div className="flex items-center gap-3">
                  <div className="hidden sm:block">
                    <div className={`h-2 w-20 rounded-full ${isCurrent ? 'bg-white/30' : 'bg-stone-200'}`}>
                      <div
                        className={`h-full rounded-full transition-all ${isCurrent ? 'bg-gold' : 'bg-wine'}`}
                        style={{ width: `${phasePct}%` }}
                      />
                    </div>
                  </div>
                  {isExpanded
                    ? <ChevronDown size={20} className={isCurrent ? 'text-white' : 'text-stone-400'} />
                    : <ChevronRight size={20} className={isCurrent ? 'text-white' : 'text-stone-400'} />
                  }
                </div>
              </button>

              {/* Tasks */}
              {isExpanded && (
                <div className="divide-y divide-stone-100">
                  {phaseTasks.map((task: ChecklistTask) => {
                    const isChecked = checkedIds.includes(task.id);
                    const isTaskExpanded = expandedTasks.includes(task.id);

                    return (
                      <div key={task.id} className={`px-5 py-3 ${isChecked ? 'bg-stone-50' : 'bg-white'}`}>
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => toggleCheck(task.id)}
                            className="mt-0.5 flex-shrink-0 transition-colors"
                            aria-label={isChecked ? 'Mark incomplete' : 'Mark complete'}
                          >
                            {isChecked
                              ? <CheckCircle2 size={22} className="text-herb-green" />
                              : <Circle size={22} className="text-stone-300 hover:text-wine transition-colors" />
                            }
                          </button>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className={`font-medium text-sm leading-snug ${isChecked ? 'line-through text-stone-400' : 'text-stone-800'}`}>
                                {task.title[lang]}
                              </span>
                              <button
                                onClick={() => toggleTask(task.id)}
                                className="text-xs text-stone-400 hover:text-wine whitespace-nowrap flex items-center gap-1 transition-colors"
                              >
                                {isTaskExpanded ? t('prep.less') : t('prep.why')}
                                {isTaskExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                              </button>
                            </div>
                            {isTaskExpanded && (
                              <p className="text-xs text-stone-600 mt-2 leading-relaxed bg-parchment rounded-lg px-3 py-2">
                                {task.explanation[lang]}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {totalCompleted === allTasks.length && (
        <div className="mt-8 text-center bg-herb-green text-white rounded-2xl p-8">
          <div className="text-4xl mb-3">🎉</div>
          <h3 className="text-2xl font-serif font-bold mb-2">{t('prep.congrats')}</h3>
          <p className="text-white/90">{t('prep.complete')} {allTasks.length} {t('prep.completeSuffix')}</p>
        </div>
      )}
    </main>
  );
}
