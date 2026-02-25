import { useEffect, useRef, useState } from 'react'
import './AboutMe.css'
import { useLanguage } from '../language/LanguageContext'

export function AboutMe() {
    const { t } = useLanguage();
    const [skillPercent, setSkillPercent] = useState(50);
    const [openGroup, setOpenGroup] = useState<string | null>("Frontend");
    const [displayPercent, setDisplayPercent] = useState(50);
    const rafRef = useRef<number | null>(null);


    useEffect(() => {
        const start = performance.now();
        const from = displayPercent;   // read once, correct value
        const to = skillPercent;
        const dur = 600; // ms

        const ease = (t: number) =>
            t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            const v = from + (to - from) * ease(t);
            setDisplayPercent(v);
            console.log("Animating:", from, "→", to, "current:", v.toFixed(1));
            if (t < 1) rafRef.current = requestAnimationFrame(tick);
        };

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [skillPercent]);

    return (
        <section id="about" className="about">
            <div className="about__grid">
                {/* Left */}
                <div className="about__left">
                    <h2 className="about__title">
                        {t.about.title} <span className="about__accent">{t.about.titleAccent}</span>
                    </h2>

                    <div className="about__text">
                        {t.about.paragraphs.map((p: string, i: number) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>

                    {/* Example: buttons that later control the ring progress */}
                    <div className='divider' aria-hidden="true"></div>
                    <div>{t.about.exploreSkills}</div>
                    <div className="about__skills">
                        {/* Frontend */}
                        <button
                            type="button"
                            className="about__skills-heading"
                            onClick={() =>
                                setOpenGroup(prev => (prev === "Frontend" ? null : "Frontend"))
                            }
                            aria-expanded={openGroup === "Frontend"}
                        >
                            {t.about.skillGroups.frontend} {openGroup === "Frontend" ? "▾" : "▸"}
                        </button>
                        {openGroup === "Frontend" && (
                            <div className="about__buttons">
                                {[
                                    ["HTML", 85],
                                    ["React", 80],
                                    ["CSS / SCSS", 75],
                                    ["TypeScript", 75],
                                    ["JavaScript", 70],
                                    ["Bootstrap", 40],
                                    ["Vue.js", 10],
                                    ["Angular", 10],
                                    ["Tailwind", 10],
                                    ["Svelte", 5],
                                ].map(([label, val]) => (
                                    <button
                                        key={label as string}
                                        onClick={() => setSkillPercent(val as number)}
                                        className="about__chip"
                                        aria-pressed={skillPercent === val}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Backend */}
                        <button
                            type="button"
                            className="about__skills-heading"
                            onClick={() =>
                                setOpenGroup(prev => (prev === "Backend" ? null : "Backend"))
                            }
                            aria-expanded={openGroup === "Backend"}
                        >
                            {t.about.skillGroups.backend} {openGroup === "Backend" ? "▾" : "▸"}
                        </button>
                        {openGroup === "Backend" && (
                            <div className="about__buttons">
                                {[
                                    [".NET", 75],
                                    ["Node.js", 25],
                                    ["Java", 25],
                                    ["Python", 20],
                                ].map(([label, val]) => (
                                    <button
                                        key={label as string}
                                        onClick={() => setSkillPercent(val as number)}
                                        className="about__chip"
                                        aria-pressed={skillPercent === val}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Cloud & Tools */}
                        <button
                            type="button"
                            className="about__skills-heading"
                            onClick={() =>
                                setOpenGroup(prev => (prev === "Cloud" ? null : "Cloud"))
                            }
                            aria-expanded={openGroup === "Cloud"}
                        >
                            {t.about.skillGroups.cloud} {openGroup === "Cloud" ? "▾" : "▸"}
                        </button>
                        {openGroup === "Cloud" && (
                            <div className="about__buttons">
                                {[
                                    ["GitHub Actions", 75],
                                    ["Git", 70],
                                    ["SQL", 60],
                                    ["Azure", 40],
                                    ["Docker", 30],
                                ].map(([label, val]) => (
                                    <button
                                        key={label as string}
                                        onClick={() => setSkillPercent(val as number)}
                                        className="about__chip"
                                        aria-pressed={skillPercent === val}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Design & UX */}
                        <button
                            type="button"
                            className="about__skills-heading"
                            onClick={() =>
                                setOpenGroup(prev => (prev === "Design" ? null : "Design"))
                            }
                            aria-expanded={openGroup === "Design"}
                        >
                            {t.about.skillGroups.design} {openGroup === "Design" ? "▾" : "▸"}
                        </button>
                        {openGroup === "Design" && (
                            <div className="about__buttons">
                                {[
                                    ["Prototyping (Figma)", 80],
                                    ["UI/UX Design", 75],
                                    ["Accessibility (WCAG)", 70],
                                    ["GSAP Animations", 65],
                                ].map(([label, val]) => (
                                    <button
                                        key={label as string}
                                        onClick={() => setSkillPercent(val as number)}
                                        className="about__chip"
                                        aria-pressed={skillPercent === val}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right */}
                <div className="about__right">
                    <div
                        className="skill-ring"
                        style={{ ["--progress" as any]: skillPercent }}
                        aria-label={`Skill meter: ${Math.round(displayPercent)}%`}
                    >
                        <div className="skill-ring__inner">
                            <img src={`${import.meta.env.BASE_URL}me.jpg`} alt="Martin Lyngås" className="skill-ring__img" />
                        </div>
                    </div>

                    <p className="skill-ring__percent">
                        <strong>{Math.round(displayPercent)}%</strong>
                    </p>

                    <div className="skill-ring__help">
                        <span className="skill-ring__icon">?</span>
                        <div className="skill-ring__tooltip">
                            {t.about.skillRingTooltip}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe
