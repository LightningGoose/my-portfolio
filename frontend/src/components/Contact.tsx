import React from "react";
import "./Contact.css";

type ContactItem = {
    label: string;
    value: string;
    href?: string | null;
    icon?: React.ReactNode;
};

export function Contact() {
    const contactInfo: ContactItem[] = [
        {
            label: "Email",
            value: "m.lyngas@gmail.com",
            href: "mailto:m.lyngas@gmail.com",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm2-.5 7 4.25L19 6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/martin-lyngås",
            href: "https://www.linkedin.com/in/martin-lyng%C3%A5s",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h4v2h.06c.56-1.04 1.93-2.14 3.97-2.14C21 8.86 22 11 22 14.2V21h-4v-6c0-1.43-.03-3.28-2-3.28-2 0-2.3 1.56-2.3 3.18V21h-4V9z" fill="currentColor" />
                </svg>
            ),
        },
        {
            label: "GitHub",
            value: "github.com/LightningGoose",
            href: "https://github.com/LightningGoose",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.8-.25.8-.57v-2c-3.26.71-3.95-1.57-3.95-1.57-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.8 2.73 1.28 3.4.98.11-.76.41-1.28.75-1.58-2.6-.3-5.33-1.3-5.33-5.8 0-1.28.46-2.33 1.22-3.15-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.28 1.22a11.5 11.5 0 0 1 5.98 0C19 .95 20 .5 20 .5c.65 1.65.24 2.88.12 3.18.76.82 1.22 1.87 1.22 3.15 0 4.51-2.73 5.5-5.34 5.8.42.36.8 1.08.8 2.18v3.23c0 .33.21.69.81.57A11.5 11.5 0 0 0 12 .5Z" fill="currentColor" />
                </svg>
            ),
        },
        {
            label: "Location",
            value: "Drammen, Norway",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="currentColor" />
                </svg>
            ),
        },
    ];

    return (
        <section id="contact" className="contact">
            <h2 className="contact__title">
                Get in <span className="contact__accent">Touch</span>
            </h2>

            <p className="contact__intro">
                My main focus is frontend development and UX/UI design, where I can combine code with creativity. I’m also open to full-stack junior roles, freelance opportunities, and collaborative projects. Don’t hesitate to get in touch!
            </p>

            <div className="contact__grid">
                {contactInfo.map((c) => {
                    const Content = (
                        <>
                            <div className="contact__icon">{c.icon}</div>
                            <div className="contact__text">
                                <span className="contact__label">{c.label}</span>
                                <span className="contact__value">{c.value}</span>
                            </div>
                        </>
                    );

                    return c.href ? (
                        <a
                            key={c.label}
                            href={c.href}
                            className="contact__card"
                            target={c.href.startsWith("http") ? "_blank" : undefined}
                            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                            {Content}
                        </a>
                    ) : (
                        <div key={c.label} className="contact__card">
                            {Content}
                        </div>
                    );
                })}
            </div>

            <div className="contact__cta">
                <a href="mailto:m.lyngas@gmail.com" className="contact__button">
                    Email me
                </a>
            </div>
        </section>
    );
}
