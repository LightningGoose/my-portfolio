import { useEffect, useRef, useState } from 'react'
import './AboutMe.css'

export function AboutMe() {
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
                        About <span className="about__accent">Me</span>
                    </h2>

                    <div className="about__text">
                        <p>
                            Hi, I’m Martin Lyngås — a frontend-oriented developer with a background in Applied Computer Science from OsloMet.
                            I enjoy building clean, intuitive user interfaces and turning ideas into concrete, usable solutions.
                        </p>
                        <p>
                            My main focus is React and modern frontend development, with an emphasis on UX, structure, and maintainability.
                            I’m comfortable working close to design, iterating on layouts, components, and interactions until things feel right.
                        </p>
                        <p>
                            Through my bachelor project and personal work, I’ve gained experience taking ideas from early sketches in Figma
                            to finished, interactive web solutions. I also have a background in architectural lighting design, which has given
                            me a strong understanding of color, contrast, and how people perceive visual information — something I bring with
                            me into my work with UI.
                        </p>
                    </div>

                    {/* Example: buttons that later control the ring progress */}
                    <div className='divider' aria-hidden="true"></div>
                    <div>Select a technology</div>
                    <div className="about__skills">
                        {/* Frontend */}
                        <h3
                            className="about__skills-heading"
                            onClick={() =>
                                setOpenGroup(prev => (prev === "Frontend" ? null : "Frontend"))
                            }
                        >
                            Frontend {openGroup === "Frontend" ? "▾" : "▸"}
                        </h3>
                        {openGroup === "Frontend" && (
                            <div className="about__buttons">
                                {[
                                    ["HTML", 85],
                                    ["React", 80],
                                    ["CSS / SCSS", 75],
                                    ["JavaScript", 70],
                                    ["TypeScript", 70],
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
                        <h3
                            className="about__skills-heading"
                            onClick={() =>
                                setOpenGroup(prev => (prev === "Backend" ? null : "Backend"))
                            }
                        >
                            Backend {openGroup === "Backend" ? "▾" : "▸"}
                        </h3>
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
                        <h3
                            className="about__skills-heading"
                            onClick={() =>
                                setOpenGroup(prev => (prev === "Cloud" ? null : "Cloud"))
                            }
                        >
                            Cloud & Tools {openGroup === "Cloud" ? "▾" : "▸"}
                        </h3>
                        {openGroup === "Cloud" && (
                            <div className="about__buttons">
                                {[
                                    ["GitHub Actions", 75],
                                    ["Git", 70],
                                    ["SQL", 60],
                                    ["Azure", 50],
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
                        <h3
                            className="about__skills-heading"
                            onClick={() =>
                                setOpenGroup(prev => (prev === "Design" ? null : "Design"))
                            }
                        >
                            Design & UX {openGroup === "Design" ? "▾" : "▸"}
                        </h3>
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
                            This percentage is a relative scale of my experience with the selected technology.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe
