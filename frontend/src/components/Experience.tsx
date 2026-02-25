import { useMemo, useState } from "react";
import "./Experience.css";
import { useLanguage } from "../language/LanguageContext";

type TimelineItem = {
    id: string;
    kind: "it" | "general";
    tags?: string[];
    linkHref?: string;
    sortKey: number;
};

const ITEMS: TimelineItem[] = [
    {
        id: "portfolio",
        kind: "it",
        tags: ["React", "TypeScript", "Figma", "Modular CSS", "Design systems", "Accessibility"],
        sortKey: 202509,
    },
    {
        id: "bandsite",
        kind: "it",
        tags: [
            "React", "TypeScript", "Figma", ".NET Web API", "REST", "Docker", "SQLite", "Azure", "UI/UX", "Accessibility",
        ],
        sortKey: 202512,
    },
    {
        id: "drommekoppen",
        kind: "it",
        tags: ["React", "JavaScript", ".NET 8", "Azure (App Service, SQL)", "GitHub Actions (CI/CD)", "Figma", "UI/UX", "Accessibility", "GSAP"],
        linkHref: "https://matchaogmokka.no/",
        sortKey: 202506,
    },
    {
        id: "maxbo-lier",
        kind: "general",
        tags: ["Logistics", "Order handling", "Forklift operation", "Customer service"],
        sortKey: 202601,
    },
    {
        id: "maxbo-sinsen",
        kind: "general",
        tags: ["Customer service", "Color guidance", "Product knowledge", "Communication"],
        sortKey: 202306,
    },
    {
        id: "maxbo-lier-2",
        kind: "general",
        tags: ["Team coordination", "Customer service", "Logistics", "Inventory management"],
        sortKey: 202109,
    },
    {
        id: "maxbo-lier-1",
        kind: "general",
        tags: ["Sales", "Customer service"],
        sortKey: 201604,
    },
];

export function Experience() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState<"it" | "general" | "all">("it");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const data = useMemo(() => {
        const arr = filter === "all" ? ITEMS : ITEMS.filter((i) => i.kind === filter);
        return [...arr].sort((a, b) => b.sortKey - a.sortKey);
    }, [filter]);

    const toggle = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    const tr = t.experience.items;

    return (
        <section id="experience" className="tl">
            <header className="tl__head">
                <h2 className="tl__title">
                    {t.experience.title}
                    {t.experience.titleAnd}
                    <span className="tl__accent">{t.experience.titleAccent}</span>
                </h2>
                <div className="tl__tabs" role="tablist" aria-label="Experience filters">
                    {[
                        { key: "it", label: t.experience.tabs.it },
                        { key: "general", label: t.experience.tabs.general },
                        { key: "all", label: t.experience.tabs.all },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            role="tab"
                            aria-selected={filter === (tab.key as typeof filter)}
                            className={`tl__tab ${filter === (tab.key as typeof filter) ? "is-active" : ""}`}
                            onClick={() => {
                                setFilter(tab.key as typeof filter);
                                setExpandedId(null);
                            }}
                        >
                            {tab.label}
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
                        const itemTr = tr[item.id as keyof typeof tr];
                        return (
                            <li key={item.id} className={`tl__row tl__row--${side}`}>
                                <button
                                    className={`tl__dot ${isOpen ? "is-open" : ""}`}
                                    aria-label={`Toggle details for ${itemTr.title}`}
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
                                            <h3 className="tl__role">{itemTr.title}</h3>
                                            <div className="tl__meta">
                                                <span className="tl__org">{itemTr.org}</span>
                                                <span className="tl__period">{itemTr.period}</span>
                                            </div>
                                        </button>
                                    </header>
                                    {item.tags && (
                                        <div className={`tl__tags ${isOpen ? "is-open" : "is-collapsed"}`}>
                                            {item.tags.map((tag) => (
                                                <span key={tag} className="tl__tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {isOpen && (
                                        <>
                                            <ul className="tl__bullets">
                                                {itemTr.bullets.map((b: string, j: number) => (
                                                    <li key={j}>{b}</li>
                                                ))}
                                            </ul>
                                            {item.linkHref && "linkLabel" in itemTr && (
                                                <a
                                                    className="tl__link"
                                                    href={item.linkHref}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {(itemTr as any).linkLabel}
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
