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
        id: "drommekoppen",
        title: "Full-stack Bachelor Project – “Drømmekoppen”",
        org: "OsloMet",
        period: "2024 – 2025",
        kind: "it",
        bullets: [
            "Led a team of five; React/TypeScript frontend, .NET 8 API, Azure SQL.",
            "Implemented CI/CD with GitHub Actions; deployed production-ready GSAP micro-animations.",
            "Focused on UX, accessibility, and performance optimization.",
        ],
        tags: ["React", "TypeScript", ".NET 8", "Azure (App Service, SQL)", "GitHub Actions (CI/CD)", "Figma", "Design systems", "Accessibility", "GSAP"],
        linkLabel: "Live demo",
        linkHref: "https://matchaogmokka.no/",
        sortKey: 202506,
    },
    {
        id: "portfolio",
        title: "Digital Portfolio / CV",
        org: "Personal project",
        period: "2025 – Present",
        kind: "it",
        bullets: [
            "Minimalistic black theme with clean typography.",
            "Component-driven structure with modular CSS.",
            "Planned feature: Admin panel for content management.",
            ".Net 8 backend with React/TypeScript frontend (in progress).",
        ],
        tags: ["React", ".NET", "Figma", "Modular CSS", "Design systems", "Azure", "Accessibility"],
        sortKey: 202509,
    },
    {
        id: "bandsite",
        title: "Band Website (Hobby)",
        org: "Independent",
        period: "2025",
        kind: "it",
        bullets: [
            "Developed information pages, gig schedule, and embedded media.",
            "Lightweight backend for updates and content management.",
        ],
        tags: ["React", "Routing", "Content"],
        sortKey: 202505,
    },
    {
        id: "maxbo-sinsen",
        title: "Sales Assistant – Paint & Hardware",
        org: "Maxbo Sinsen",
        period: "June 2023 – Present",
        kind: "general",
        bullets: [
            "Primary responsibility for the paint department, advising customers on colors, combinations, and finishes.",
            "Mixed and prepared paint orders, ensuring accuracy and quality.",
            "Supported related areas such as tools, fasteners, and general hardware.",
            "Provided tailored customer service and guidance throughout the purchasing process."
        ],
        tags: ["Customer focus", "Color consulting", "Product knowledge", "Communication"],
        sortKey: 202306,
    },
    {
        id: "maxbo-lier-2",
        title: "Area Lead – Timber",
        org: "Maxbo Stormarked Lier",
        period: "September 2021 – August 2022",
        kind: "general",
        bullets: [
            "Responsible for the timber department on the shop floor, with subject-matter responsibility for products and team support.",
            "Day-to-day leadership of a team of 6 full-time and 7 part-time employees.",
            "Handled supplier orders, warehouse restocking, and special customer orders.",
            "Processed complaints and ensured product quality and customer satisfaction."
        ],
        tags: ["Team leadership", "Customer service", "Logistics", "Inventory management"],
        sortKey: 202109,
    },
    {
        id: "maxbo-lier-1",
        title: "Sales Assistant",
        org: "Maxbo Stormarked Lier",
        period: "April 2016 – August 2021",
        kind: "general",
        bullets: [
            "Assisted customers with product choices in timber and building merchendice departments.",
            "Contributed to sales growth through service and solution-oriented advice.",
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
