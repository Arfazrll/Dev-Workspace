"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { en } from "./en";
import { id } from "./id";
import type { TranslationKeys } from "./en";

type Language = "en" | "id";

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: TranslationKeys;
}

const translations: Record<Language, TranslationKeys> = { en, id };

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    setLang: () => { },
    t: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("lang") as Language | null;
        if (saved && (saved === "en" || saved === "id")) {
            setLangState(saved);
        }
        setMounted(true);
    }, []);

    const setLang = useCallback((newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem("lang", newLang);
    }, []);

    const t = translations[lang];

    // Avoid hydration mismatch by using default EN until mounted
    if (!mounted) {
        return (
            <LanguageContext.Provider value={{ lang: "en", setLang, t: en }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    return useContext(LanguageContext);
}
