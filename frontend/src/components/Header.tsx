import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
    const [isLightMode, setIsLightMode] = useState(() => localStorage.getItem("theme") === "light");

    useEffect(() => {
        document.documentElement.classList.toggle("light", isLightMode);
        localStorage.setItem("theme", isLightMode ? "light" : "dark");
    }, [isLightMode]);

    return (
        <header>
            <button
                type="button"
                className="header__theme-toggle"
                onClick={() => setIsLightMode((prev) => !prev)}
                aria-label={`Switch to ${isLightMode ? "dark" : "light"} mode`}
            >
                {isLightMode ? "Dark mode" : "Light mode"}
            </button>

            <h1 className="header__title">
                Martin <span className="header__accent">Lyngås</span>
            </h1>
            <div className="header__divider" aria-hidden="true"></div>
            <h2>Fullstack Developer with a Frontend & UX Focus</h2>

            <nav>
                <button className="button-nav" onClick={() => window.location.href = '#about-me'}>
                    About Me
                </button>
                <button className="button-nav" onClick={() => window.location.href = '#education'}>
                    Education
                </button>
                <button className="button-nav" onClick={() => window.location.href = '#experience'}>
                    Experience
                </button>
                <button className="button-nav" onClick={() => window.location.href = '#contact'}>
                    Contact
                </button>
            </nav>
        </header>
    );
};

export default Header;
