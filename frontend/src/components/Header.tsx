import { useEffect, useState } from "react";
import "./Header.css";
import { useLanguage } from "../language/LanguageContext";

const Header = () => {
    const [isLightMode, setIsLightMode] = useState(() => localStorage.getItem("theme") === "light");
    const { lang, t, toggleLang } = useLanguage();

    useEffect(() => {
        document.documentElement.classList.toggle("light", isLightMode);
        localStorage.setItem("theme", isLightMode ? "light" : "dark");
    }, [isLightMode]);

    return (
        <header>
            <div className="header__controls">
                <button
                    type="button"
                    className="header__lang-toggle"
                    onClick={toggleLang}
                    aria-label={lang === "en" ? "Bytt til norsk" : "Switch to English"}
                >
                    {lang === "en" ? "NOR" : "ENG"}
                </button>

                <button
                    type="button"
                    className="header__theme-toggle"
                    onClick={() => setIsLightMode((prev) => !prev)}
                    aria-label={`Switch to ${isLightMode ? "dark" : "light"} mode`}
                >
                    {isLightMode ? t.header.darkMode : t.header.lightMode}
                </button>
            </div>

            <h1 className="header__title">
                Martin <span className="header__accent">Lyngås</span>
            </h1>
            <div className="header__divider" aria-hidden="true"></div>
            <h2>{t.header.subtitle}</h2>

            <nav>
                <button className="button-nav" onClick={() => window.location.href = '#about-me'}>
                    {t.header.nav.aboutMe}
                </button>
                <button className="button-nav" onClick={() => window.location.href = '#education'}>
                    {t.header.nav.education}
                </button>
                <button className="button-nav" onClick={() => window.location.href = '#experience'}>
                    {t.header.nav.experience}
                </button>
                <button className="button-nav" onClick={() => window.location.href = '#contact'}>
                    {t.header.nav.contact}
                </button>
            </nav>
        </header>
    );
};

export default Header;
