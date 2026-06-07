import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

export type Language = 'de' | 'en';

type I18nContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('de');

  useEffect(() => {
    const saved = localStorage.getItem('novadash-lang') as Language;
    if (saved && (saved === 'de' || saved === 'en')) {
      setLangState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = 'de';
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('novadash-lang', newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = translations[lang];
    for (const k of keys) {
      if (current[k] === undefined) {
        return key; // fallback
      }
      current = current[k];
    }
    return current as string;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
