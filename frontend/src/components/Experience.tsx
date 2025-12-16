import { useMemo, useState } from "react";
import "./Experience.css";

type TimelineItem = {
    id: string;
    title: string;
    org: string;
    period: string;
    kind: "it" | "general";
    bullets: string[];
    tags?: string[];
    linkLabel?: string;
    linkHref?: string;
    sortKey: number;
};

const ITEMS: TimelineItem[] = [
    {
        id: "portfolio",
        title: "Digital Portfolio / CV",
        org: "Personal project",
        period: "2025 – Present",
        kind: "it",
        bullets: [
            "Frontend-only digital portfolio used to showcase projects and experience.",
            "Minimalistic dark theme with focus on typography, layout, and readability.",
            "Component-based React structure with modular and reusable styling.",
            "Continuously updated as projects progress and new work is added.",
        ],
        tags: ["React", "TypeScript", "Figma", "Modular CSS", "Design systems", "Accessibility"],
        sortKey: 202509,
    },
    {
        id: "bandsite",
        title: "Band Website (Hobby Project)",
        org: "Independent",
        period: "2025 - Present",
        kind: "it",
        bullets: [
            "Currently designing the site structure, user flows, and UI in Figma.",
            "Producing technical documentation including system architecture, API contracts, and data models.",
            "Planned implementation of a React frontend based on the Figma designs.",
            "Planned .NET backend for content management and admin-controlled updates.",
            "Work in progress.",
        ],
        tags: ["Figma", "UI/UX", "Architecture", "React (planned)", ".NET (planned)"],
        sortKey: 202505,
    },
    {
        id: "drommekoppen",
        title: "Full-stack Bachelor Project – “Drømmekoppen”",
        org: "OsloMet",
        period: "2024 – 2025",
        kind: "it",
        bullets: [
            "Responsible for frontend development using React and JavaScript.",
            "Created UI/UX sketches and prototypes in Figma.",
            "Implemented GSAP-based animations and interactive UI elements.",
            "Handled deployment and hosting on Azure, including CI/CD with GitHub Actions.",
            "Worked closely with the team to ensure usability, accessibility, and performance.",
        ],
        tags: ["React", "JavaScript", ".NET 8", "Azure (App Service, SQL)", "GitHub Actions (CI/CD)", "Figma", "UI/UX", "Accessibility", "GSAP"],
        linkLabel: "Live demo",
        linkHref: "https://matchaogmokka.no/",
        sortKey: 202506,
    },
    {
        id: "maxbo-sinsen",
        title: "Sales Assistant – Paint & Hardware",
        org: "Maxbo Sinsen",
        period: "June 2023 – November 2025",
        kind: "general",
        bullets: [
            "Worked primarily in the paint department, taking ownership of daily operations and ensuring the area ran smoothly.",
            "Advised customers on paint types, color choices, and material combinations.",
            "Mixed and prepared paint orders with focus on accuracy and quality.",
            "Supported related areas such as tools, fasteners, and general hardware as needed.",
            "Provided customer guidance throughout the purchasing process."
        ],
        tags: ["Customer service", "Color guidance", "Product knowledge", "Communication"],
        sortKey: 202306,
    },
    {
        id: "maxbo-lier-2",
        title: "Area Lead – Timber",
        org: "Maxbo Stormarked Lier",
        period: "September 2021 – August 2022",
        kind: "general",
        bullets: [
            "Responsible for the timber department on the shop floor, including product knowledge and day-to-day operations.",
            "Provided daily guidance and coordination for a team of 6 full-time and 7 part-time employees.",
            "Handled supplier orders, warehouse restocking, and special customer orders.",
            "Managed complaints and ensured product quality and customer satisfaction."
        ],
        tags: ["Team coordination", "Customer service", "Logistics", "Inventory management"],
        sortKey: 202109,
    },
    {
        id: "maxbo-lier-1",
        title: "Sales Assistant",
        org: "Maxbo Stormarked Lier",
        period: "April 2016 – August 2021",
        kind: "general",
        bullets: [
            "Assisted customers with product choices in timber and building merchandise departments.",
            "Provided service-oriented guidance to help customers find suitable solutions.",
        ],
        tags: ["Sales", "Customer service"],
        sortKey: 201604,
    },
];

export function Experience() {
    const [filter, setFilter] = useState<"it" | "general" | "all">("it");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const data = useMemo(() => {
        const arr = filter === "all" ? ITEMS : ITEMS.filter((i) => i.kind === filter);
        return [...arr].sort((a, b) => b.sortKey - a.sortKey);
    }, [filter]);

    const toggle = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <section id="experience" className="tl">
            <header className="tl__head">
                <h2 className="tl__title">
                    Experience
                    &
                    <span className="tl__accent"> Projects</span>

                </h2>
                <div className="tl__tabs" role="tablist" aria-label="Experience filters">
                    {[
                        { key: "it", label: "IT-related" },
                        { key: "general", label: "General" },
                        { key: "all", label: "All" },
                    ].map((t) => (
                        <button
                            key={t.key}
                            role="tab"
                            aria-selected={filter === (t.key as any)}
                            className={`tl__tab ${filter === (t.key as any) ? "is-active" : ""}`}
                            onClick={() => {
                                setFilter(t.key as any);
                                setExpandedId(null);
                            }}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </header>

            <div className="tl__wrap">
                <div className="tl__line" aria-hidden="true" />
                <ol className="tl__list">
                    {data.map((item, i) => {
                        const side = i % 2 === 0 ? "left" : "right";
                        const isOpen = expandedId === item.id;
                        return (
                            <li key={item.id} className={`tl__row tl__row--${side}`}>
                                {/* Bigger center circle (no connector line) */}
                                <button
                                    className={`tl__dot ${isOpen ? "is-open" : ""}`}
                                    aria-label={`Toggle details for ${item.title}`}
                                    onClick={() => toggle(item.id)}
                                />
                                <article
                                    className={`tl__card ${isOpen ? "is-open" : "is-collapsed"}`}
                                    onClick={() => toggle(item.id)}
                                >
                                    <header className="tl__cardHead">
                                        <button
                                            className="tl__toggle"
                                            aria-expanded={isOpen}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggle(item.id);
                                            }}
                                        >
                                            <h3 className="tl__role">{item.title}</h3>
                                            <div className="tl__meta">
                                                <span className="tl__org">{item.org}</span>
                                                <span className="tl__period">{item.period}</span>
                                            </div>
                                        </button>
                                    </header>
                                    {item.tags && (
                                        <div className={`tl__tags ${isOpen ? "is-open" : "is-collapsed"}`}>
                                            {item.tags.map((t) => (
                                                <span key={t} className="tl__tag">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}


                                    {/* Details show only when open */}
                                    {isOpen && (
                                        <>
                                            <ul className="tl__bullets">
                                                {item.bullets.map((b, j) => (
                                                    <li key={j}>{b}</li>
                                                ))}
                                            </ul>
                                            {item.linkHref && (
                                                <a
                                                    className="tl__link"
                                                    href={item.linkHref}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {item.linkLabel}
                                                </a>
                                            )}
                                        </>
                                    )}
                                </article>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
