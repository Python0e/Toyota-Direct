import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

export type Language = 'en' | 'es' | 'fa' | 'ps';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const dir = (language === 'fa' || language === 'ps') ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, params?: Record<string, string | number>) => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    
    let result = typeof value === 'string' ? value : key;
    
    if (params) {
      Object.keys(params).forEach(param => {
        result = result.replace(`{${param}}`, String(params[param]));
      });
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir: (language === 'fa' || language === 'ps') ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
