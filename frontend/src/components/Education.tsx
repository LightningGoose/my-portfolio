import "./Education.css";
import { useLanguage } from "../language/LanguageContext";

export function Education() {
    const { t } = useLanguage();

    return (
        <section id="education" className="education">
            <h2 className="education__title">
                {t.education.title}<span className="education__accent">{t.education.titleAccent}</span>
            </h2>

            <div className="education__list">
                {t.education.items.map((edu, index) => (
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
