import { createContext, useContext, useState, type ReactNode } from 'react';
import translations, { type Lang } from '../i18n/translations';

type Translations = typeof translations['en'];
type NestedKeyOf<T, K extends keyof T = keyof T> = K extends string
  ? T[K] extends Record<string, string>
    ? `${K}.${string & keyof T[K]}`
    : never
  : never;
type TranslationKey = NestedKeyOf<Translations>;

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem('pesach-lang');
      return (stored === 'ru' || stored === 'en') ? stored : 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('pesach-lang', newLang);
    } catch {
      // ignore
    }
  };

  const t = (key: TranslationKey): string => {
    const [section, field] = key.split('.') as [keyof Translations, string];
    const sectionObj = translations[lang][section] as Record<string, string>;
    return sectionObj?.[field] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
