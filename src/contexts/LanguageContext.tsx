import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

async function getUserLocation(): Promise<string | null> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code;
  } catch (error) {
    console.error('Error detecting location:', error);
    return null;
  }
}

function getBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('es')) {
    return 'es';
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    async function initializeLanguage() {
      const savedLanguage = localStorage.getItem('language') as Language | null;

      if (savedLanguage) {
        setLanguageState(savedLanguage);
        setIsInitialized(true);
        return;
      }

      const userCountry = await getUserLocation();

      if (userCountry === 'ES') {
        setLanguageState('es');
      } else {
        const browserLang = getBrowserLanguage();
        setLanguageState(browserLang);
      }

      setIsInitialized(true);
    }

    initializeLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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
