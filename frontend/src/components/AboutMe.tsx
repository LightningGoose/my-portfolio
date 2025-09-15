import { useState } from 'react'
import './AboutMe.css'
import meImg from '../assets/me.jpg';


export function AboutMe() {
    const [skillPercent, setSkillPercent] = useState(85);
    const [openGroup, setOpenGroup] = useState<string | null>("Frontend");

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
                            Hi, I’m Martin Lyngås — a full-stack developer with a Bachelor’s degree in Applied Computer Science from OsloMet (2025).
                            My main focus is React/TypeScript on the frontend and .NET on the backend, always with an eye for usability and clean design.
                        </p>
                        <p>
                            For my bachelor project I led a team of five in building <em>“Drømmekoppen”</em>,
                            a café web-app where guests create drinks in real time.
                            I worked across both architecture and implementation — React components, .NET API, Azure SQL, and CI/CD pipelines —
                            and also crafted motion design with GSAP.
                        </p>
                        <p>
                            With an earlier degree in Architectural Lighting Design, I bring a strong sense for color, contrast, and accessibility
                            that translates directly into my UI/UX work. I enjoy turning complex flows into simple, intuitive experiences
                            and I’m motivated by projects where code and creativity meet.
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
                                    ["React", 90],
                                    ["TypeScript", 80],
                                    ["JavaScript", 70],
                                    ["CSS / SCSS", 75],
                                    ["Bootstrap", 50],
                                    ["Tailwind", 10],
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
                                    ["Java", 25],
                                    ["Python", 20],
                                    ["Node.js", 30],
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
                                    ["Azure", 60],
                                    ["Docker", 40],
                                    ["GitHub Actions", 75],
                                    ["SQL", 60],
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
                                    ["Accessibility (WCAG)", 70],
                                    ["UI/UX Design", 75],
                                    ["Prototyping (Figma)", 80],
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
                        aria-label={`Skill meter: ${skillPercent}%`}
                    >
                        <div className="skill-ring__inner">
                            <img src={`${import.meta.env.BASE_URL}me.jpg`} alt="Martin Lyngås" className="skill-ring__img" />
                        </div>
                    </div>

                    {/* Percent caption under the image - moved OUTSIDE .skill-ring */}
                    <p className="skill-ring__percent">
                        <strong>{Math.round(skillPercent)}%</strong>
                    </p>

                    {/* Hover help under the percent - moved OUTSIDE .skill-ring */}
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
