import React from "react";
import "./Header.css";

const Header = () => (
    <header>
        <h1 className="header__title">
            Martin <span className="header__accent">Lyngås</span>
        </h1>
        <div className="header__divider" aria-hidden="true"></div>
        <h2>Full stack developer & UX/UI Designer</h2>

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

export default Header;
