export interface Translations {
    header: {
        subtitle: string;
        darkMode: string;
        lightMode: string;
        nav: {
            aboutMe: string;
            education: string;
            experience: string;
            contact: string;
        };
    };

    about: {
        title: string;
        titleAccent: string;
        paragraphs: string[];
        exploreSkills: string;
        skillGroups: {
            frontend: string;
            backend: string;
            cloud: string;
            design: string;
        };
        skillRingTooltip: string;
    };

    education: {
        title: string;
        titleAccent: string;
        items: {
            degree: string;
            school: string;
            year: string;
            description: string;
        }[];
    };

    experience: {
        title: string;
        titleAnd: string;
        titleAccent: string;
        tabs: {
            it: string;
            general: string;
            all: string;
        };
        items: {
            [key: string]: {
                title: string;
                org: string;
                period: string;
                bullets: string[];
                linkLabel?: string;
            };
        };
    };

    contact: {
        title: string;
        titleAccent: string;
        intro: string;
        labels: {
            email: string;
            linkedin: string;
            github: string;
            location: string;
        };
        locationValue: string;
        emailButton: string;
    };

    backToTop: string;
}

const en: Translations = {
    header: {
        subtitle: "Fullstack Developer with a Frontend & UX Focus",
        darkMode: "Dark mode",
        lightMode: "Light mode",
        nav: {
            aboutMe: "About Me",
            education: "Education",
            experience: "Experience",
            contact: "Contact",
        },
    },

    about: {
        title: "About",
        titleAccent: "Me",
        paragraphs: [
            "Hi, I\u2019m Martin Lyng\u00e5s \u2014 a fullstack developer with a strong frontend focus and a background in Applied Computer Science from OsloMet. I enjoy building clean, intuitive user interfaces and turning ideas into concrete, usable solutions.",
            "My main focus is React and modern frontend development, but I also have experience working across the stack, from .NET-based APIs and databases to frontend architecture and UI. I value structure, maintainability, and understanding how technical decisions affect the overall product.",
            "Through my bachelor project and personal work, I\u2019ve taken ideas from early sketches in Figma to finished, interactive web solutions with a working backend. I also have a background in architectural lighting design, which has given me a strong understanding of color, contrast, and visual hierarchy \u2014 something I actively bring into my work with UI and user experience.",
        ],
        exploreSkills: "Explore My Skills",
        skillGroups: {
            frontend: "Frontend",
            backend: "Backend",
            cloud: "Cloud & Tools",
            design: "Design & UX",
        },
        skillRingTooltip:
            "This percentage reflects my experience and comfort level with the selected technology.",
    },

    education: {
        title: "Educ",
        titleAccent: "ation",
        items: [
            {
                degree: "Bachelor of Science in Applied Computer Science",
                school: "OsloMet \u2013 Oslo Metropolitan University",
                year: "2022 \u2013 2025",
                description:
                    "Focused on frontend development with React and JavaScript, combined with .NET-based backend development. Specialized in Human\u2013Computer Interaction (HCI) and UI/UX design. Contributed to a team-based bachelor project resulting in a production-deployed web application.",
            },
            {
                degree: "Bachelor of Architectural Lighting Design",
                school: "USN \u2013 University of South-Eastern Norway",
                year: "2017 \u2013 2020",
                description:
                    "Focused on architectural lighting, perception, and design, including how light, contrast, and color influence human experience. Gained a strong foundation in lighting principles, visual hierarchy, and user-centered spatial design, which informs my approach to frontend and UI work.",
            },
        ],
    },

    experience: {
        title: "Experience",
        titleAnd: " & ",
        titleAccent: "Projects",
        tabs: {
            it: "IT-related",
            general: "General",
            all: "All",
        },
        items: {
            portfolio: {
                title: "Digital Portfolio / CV",
                org: "Personal project",
                period: "2025 \u2013 Present",
                bullets: [
                    "Frontend-only digital portfolio used to showcase projects and experience.",
                    "Minimalistic dark theme with focus on typography, layout, and readability.",
                    "Component-based React structure with modular and reusable styling.",
                    "Continuously updated as projects progress and new work is added.",
                ],
            },
            bandsite: {
                title: "Band Website (Hobby Project)",
                org: "Independent",
                period: "2025 - Present",
                bullets: [
                    "Designing site structure, user flows, and high-fidelity UI in Figma.",
                    "Implemented a full-stack architecture with a React + TypeScript frontend and a .NET Web API backend.",
                    "Developed REST-based API contracts with DTOs, versioned routes, and centralized error handling.",
                    "Built content-driven features for merch, concerts, contact messages, and dynamic text blocks.",
                    "Set up Dockerized backend with SQLite persistence and Azure-ready deployment configuration.",
                    "Project is under active development with focus on accessibility, maintainability, and clean architecture.",
                ],
            },
            drommekoppen: {
                title: "Bachelor Project \u2013 \u201CDr\u00f8mmekoppen\u201D",
                org: "OsloMet",
                period: "2024 \u2013 2025",
                bullets: [
                    "Responsible for frontend development using React and JavaScript.",
                    "Created UI/UX sketches and prototypes in Figma.",
                    "Implemented GSAP-based animations and interactive UI elements.",
                    "Handled deployment and hosting on Azure, including CI/CD with GitHub Actions.",
                    "Worked closely with the team to ensure usability, accessibility, and performance.",
                ],
                linkLabel: "Live demo",
            },
            "maxbo-lier": {
                title: "Warehouse & Logistics Associate",
                org: "Maxbo Stormarked Lier",
                period: "January 2026 \u2013 Present",
                bullets: [
                    "Receiving and handling incoming goods for the warehouse.",
                    "Operating forklift for unloading trucks and internal logistics support.",
                    "Preparing and completing customer orders, including click & collect.",
                    "Delivering order goods to professional and private customers.",
                    "Supporting all departments with logistics and material handling as needed.",
                ],
            },
            "maxbo-sinsen": {
                title: "Sales Assistant \u2013 Paint & Hardware",
                org: "Maxbo Sinsen",
                period: "June 2023 \u2013 November 2025",
                bullets: [
                    "Worked primarily in the paint department, taking ownership of daily operations and ensuring the area ran smoothly.",
                    "Advised customers on paint types, color choices, and material combinations.",
                    "Mixed and prepared paint orders with focus on accuracy and quality.",
                    "Supported related areas such as tools, fasteners, and general hardware as needed.",
                    "Provided customer guidance throughout the purchasing process.",
                ],
            },
            "maxbo-lier-2": {
                title: "Area Lead \u2013 Timber",
                org: "Maxbo Stormarked Lier",
                period: "September 2021 \u2013 August 2022",
                bullets: [
                    "Responsible for the timber department on the shop floor, including product knowledge and day-to-day operations.",
                    "Provided daily guidance and coordination for a team of 6 full-time and 7 part-time employees.",
                    "Handled supplier orders, warehouse restocking, and special customer orders.",
                    "Managed complaints and ensured product quality and customer satisfaction.",
                ],
            },
            "maxbo-lier-1": {
                title: "Sales Assistant",
                org: "Maxbo Stormarked Lier",
                period: "April 2016 \u2013 August 2021",
                bullets: [
                    "Assisted customers with product choices in timber and building merchandise departments.",
                    "Provided service-oriented guidance to help customers find suitable solutions.",
                ],
            },
        },
    },

    contact: {
        title: "Get in",
        titleAccent: "Touch",
        intro:
            "My main focus is frontend development and UX/UI design, where I can combine code with creativity. I\u2019m also open to full-stack junior roles, freelance opportunities, and collaborative projects. Don\u2019t hesitate to get in touch!",
        labels: {
            email: "Email",
            linkedin: "LinkedIn",
            github: "GitHub",
            location: "Location",
        },
        locationValue: "Drammen, Norway",
        emailButton: "Email me",
    },

    backToTop: "Top \u2191",
};

export default en;
