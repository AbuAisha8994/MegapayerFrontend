'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translation } from '@/types/i18n';
import { TRANSLATIONS } from '@/constants/translations';

// Context value interface
interface LanguageContextValue {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translation;
}

// Create the context with undefined default (will be provided by LanguageProvider)
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

// Provider props
interface LanguageProviderProps {
    children: ReactNode;
    defaultLanguage?: Language;
}

// Language storage key for localStorage
const LANGUAGE_STORAGE_KEY = 'megapayer-language';

// RTL languages
const RTL_LANGUAGES: Language[] = ['ar'];

/**
 * LanguageProvider - Manages the current language state and provides translations
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
    defaultLanguage = 'en',
}) => {
    // Initialize language from localStorage or use default
    const [language, setLanguageState] = useState<Language>(defaultLanguage);
    const [isClient, setIsClient] = useState(false);

    // Load saved language preference on client-side
    useEffect(() => {
        setIsClient(true);
        const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
        if (savedLanguage && Object.keys(TRANSLATIONS).includes(savedLanguage)) {
            setLanguageState(savedLanguage);
        }
    }, []);

    // Handle RTL/LTR direction based on language
    useEffect(() => {
        if (!isClient) return;

        const isRTL = RTL_LANGUAGES.includes(language);

        // Set the document direction
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

        // Set the lang attribute
        document.documentElement.lang = language;

        // Optional: Add a data attribute for CSS styling hooks
        document.documentElement.setAttribute('data-language', language);
    }, [language, isClient]);

    // Language setter that also persists to localStorage
    const setLanguage = (lang: Language) => {
        if (Object.keys(TRANSLATIONS).includes(lang)) {
            setLanguageState(lang);
            localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        }
    };

    // Get current translations
    const t = TRANSLATIONS[language];

    const value: LanguageContextValue = {
        language,
        setLanguage,
        t,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

/**
 * useLanguage - Custom hook to access language context
 * @returns LanguageContextValue containing language, setLanguage, and translations (t)
 * @throws Error if used outside of LanguageProvider
 */
export const useLanguage = (): LanguageContextValue => {
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }

    return context;
};

/**
 * Helper to get language display name
 */
export const getLanguageDisplayName = (lang: Language): string => {
    const displayNames: Record<Language, string> = {
        en: 'English',
        tr: 'Türkçe',
        uz: "O'zbek",
        ru: 'Русский',
        ar: 'العربية',
        es: 'Español',
    };
    return displayNames[lang];
};

/**
 * Helper to get language flag emoji
 */
export const getLanguageFlag = (lang: Language): string => {
    const flags: Record<Language, string> = {
        en: '🇺🇸',
        tr: '🇹🇷',
        uz: '🇺🇿',
        ru: '🇷🇺',
        ar: '🇸🇦',
        es: '🇪🇸',
    };
    return flags[lang];
};

/**
 * List of all supported languages
 */
export const SUPPORTED_LANGUAGES: Language[] = ['en', 'tr', 'uz', 'ru', 'ar', 'es'];

export default LanguageContext;
