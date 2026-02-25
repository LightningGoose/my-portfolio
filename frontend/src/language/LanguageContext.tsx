import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import en from "./en.js";
import no from "./no.js";
import type { Translations } from "./en.js";

type Lang = "en" | "no";

interface LanguageContextValue {
    lang: Lang;
    t: Translations;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(
        () => (localStorage.getItem("lang") as Lang) || "en"
    );

    const t = lang === "no" ? no : en;

    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const toggleLang = () => setLang((prev) => (prev === "en" ? "no" : "en"));

    return (
        <LanguageContext.Provider value={{ lang, t, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
    return ctx;
}
