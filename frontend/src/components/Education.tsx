import "./Education.css";

const education = [
    {
        degree: "Bachelor of Science in Applied Computer Science",
        school: "OsloMet – Oslo Metropolitan University",
        year: "2022 – 2025",
        description:
            "Focused on full-stack development with React/TypeScript and .NET 8, including specialization in Human–Computer Interaction (HCI) and UI/UX design. Led a team project developing a web-app deployed in production.",
    },
    {
        degree: "Bachelor of Architectural Lighting Design",
        school: "USN – University of South-Eastern Norway",
        year: "2017 – 2020",
        description:
            "Explored the intersection of technology, perception, and design. Gained a strong foundation in color theory, contrast, and user-centered spatial design that I employ in my frontend work.",
    },
];

export function Education() {
    return (
        <section id="education" className="education">
            <h2 className="education__title">
                Educ<span className="education__accent">ation</span>
            </h2>

            <div className="education__list">
                {education.map((edu, index) => (
                    <div key={index} className="education__card">
                        <div className="education__header">
                            <div>
                                <h3 className="education__degree">{edu.degree}</h3>
                                <p className="education__school">{edu.school}</p>
                            </div>
                            <div className="education__meta">
                                <span className="education__year">{edu.year}</span>
                            </div>
                        </div>
                        <p className="education__description">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
