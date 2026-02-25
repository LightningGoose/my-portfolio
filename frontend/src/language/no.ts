import type { Translations } from "./en";

const no: Translations = {
    header: {
        subtitle: "Fullstack-utvikler med fokus på frontend og UX",
        darkMode: "Mørk modus",
        lightMode: "Lys modus",
        nav: {
            aboutMe: "Om meg",
            education: "Utdanning",
            experience: "Erfaring",
            contact: "Kontakt",
        },
    },

    about: {
        title: "Om",
        titleAccent: "Meg",
        paragraphs: [
            "Hei, jeg heter Martin Lyngås — en fullstack-utvikler med sterkt fokus på frontend og bakgrunn i Anvendt datateknologi fra OsloMet. Jeg liker å bygge rene, intuitive brukergrensesnitt og gjøre idéer om til konkrete, brukbare løsninger.",
            "Mitt hovedfokus er React og moderne frontendutvikling, men jeg har også erfaring med å jobbe på tvers av stacken, fra .NET-baserte API-er og databaser til frontendarkitektur og UI. Jeg verdsetter struktur, vedlikeholdbarhet og forståelse av hvordan tekniske beslutninger påvirker det helhetlige produktet.",
            "Gjennom bachelorprosjektet og personlige prosjekter har jeg tatt idéer fra tidlige skisser i Figma til ferdige, interaktive webløsninger med fungerende backend. Jeg har også bakgrunn i arkitektonisk lysdesign, som har gitt meg en sterk forståelse for farge, kontrast og visuelt hierarki — noe jeg aktivt tar med inn i arbeidet med UI og brukeropplevelse.",
        ],
        exploreSkills: "Utforsk ferdighetene mine",
        skillGroups: {
            frontend: "Frontend",
            backend: "Backend",
            cloud: "Sky og verktøy",
            design: "Design og UX",
        },
        skillRingTooltip:
            "Denne prosentandelen gjenspeiler min erfaring og komfortnivå med den valgte teknologien.",
    },

    education: {
        title: "Utdan",
        titleAccent: "ning",
        items: [
            {
                degree: "Bachelor i Anvendt datateknologi",
                school: "OsloMet – Storbyuniversitetet",
                year: "2022 – 2025",
                description:
                    "Fokus på frontendutvikling med React og JavaScript, kombinert med .NET-basert backendutvikling. Spesialisering innen menneske–maskin-interaksjon (HCI) og UI/UX-design. Bidro til et teambasert bachelorprosjekt som resulterte i en produksjonslansert webapplikasjon.",
            },
            {
                degree: "Bachelor i Arkitektonisk lysdesign",
                school: "USN – Universitetet i Sørøst-Norge",
                year: "2017 – 2020",
                description:
                    "Fokus på arkitektonisk belysning, persepsjon og design, inkludert hvordan lys, kontrast og farge påvirker menneskelig opplevelse. Fikk et solid grunnlag i lysprinsipper, visuelt hierarki og brukersentrert romlig design, som informerer min tilnærming til frontend- og UI-arbeid.",
            },
        ],
    },

    experience: {
        title: "Erfaring",
        titleAnd: " og ",
        titleAccent: "Prosjekter",
        tabs: {
            it: "IT-relatert",
            general: "Generelt",
            all: "Alle",
        },
        items: {
            portfolio: {
                title: "Digital portefølje / CV",
                org: "Personlig prosjekt",
                period: "2025 – nå",
                bullets: [
                    "Frontend-basert digital portefølje brukt for å vise frem prosjekter og erfaring.",
                    "Minimalistisk mørkt tema med fokus på typografi, layout og lesbarhet.",
                    "Komponentbasert React-struktur med modulær og gjenbrukbar styling.",
                    "Oppdateres løpende etter hvert som prosjekter utvikler seg og nytt arbeid legges til.",
                ],
            },
            bandsite: {
                title: "Bandnettside (hobbyprosjekt)",
                org: "Selvstendig",
                period: "2025 – nå",
                bullets: [
                    "Designer nettstedstruktur, brukerflyt og high-fidelity UI i Figma.",
                    "Implementerte en fullstack-arkitektur med React + TypeScript-frontend og .NET Web API-backend.",
                    "Utviklet REST-baserte API-kontrakter med DTO-er, versjonerte ruter og sentralisert feilhåndtering.",
                    "Bygde innholdsdrevne funksjoner for merch, konserter, kontaktmeldinger og dynamiske tekstblokker.",
                    "Satte opp Dockerisert backend med SQLite-persistens og Azure-klar distribusjonskonfigurasjon.",
                    "Prosjektet er under aktiv utvikling med fokus på tilgjengelighet, vedlikeholdbarhet og ren arkitektur.",
                ],
            },
            drommekoppen: {
                title: 'Bachelorprosjekt – «Drømmekoppen»',
                org: "OsloMet",
                period: "2024 – 2025",
                bullets: [
                    "Ansvarlig for frontendutvikling med React og JavaScript.",
                    "Lagde UI/UX-skisser og prototyper i Figma.",
                    "Implementerte GSAP-baserte animasjoner og interaktive UI-elementer.",
                    "Håndterte distribusjon og hosting på Azure, inkludert CI/CD med GitHub Actions.",
                    "Jobbet tett med teamet for å sikre brukervennlighet, tilgjengelighet og ytelse.",
                ],
                linkLabel: "Live demo",
            },
            "maxbo-lier": {
                title: "Lager- og logistikkmedarbeider",
                org: "Maxbo Stormarked Lier",
                period: "Januar 2026 – nå",
                bullets: [
                    "Mottak og håndtering av innkommende varer til lageret.",
                    "Truckføring for lossing av lastebiler og intern logistikkstøtte.",
                    "Klargjøring og ferdigstilling av kundeordre, inkludert klikk og hent.",
                    "Levering av ordrevarer til profesjonelle og private kunder.",
                    "Støtter alle avdelinger med logistikk og materialhandtering ved behov.",
                ],
            },
            "maxbo-sinsen": {
                title: "Selger – Maling og jernvare",
                org: "Maxbo Sinsen",
                period: "Juni 2023 – November 2025",
                bullets: [
                    "Jobbet hovedsakelig i malingavdelingen, tok eierskap over daglig drift og sørget for at området fungerte godt.",
                    "Veiledet kunder om malingstyper, fargevalg og materialkombinasjoner.",
                    "Blandet og klargjorde malingordre med fokus på nøyaktighet og kvalitet.",
                    "Støttet relaterte områder som verktøy, festemidler og generell jernvare ved behov.",
                    "Veiledet kunder gjennom hele kjøpsprosessen.",
                ],
            },
            "maxbo-lier-2": {
                title: "Områdeansvarlig – Trelast",
                org: "Maxbo Stormarked Lier",
                period: "September 2021 – August 2022",
                bullets: [
                    "Ansvarlig for trelastavdelingen på butikkgulvet, inkludert produktkunnskap og daglig drift.",
                    "Ga daglig veiledning og koordinering for et team på 6 heltids- og 7 deltidsansatte.",
                    "Håndterte leverandørbestillinger, lagerpåfylling og spesialbestillinger fra kunder.",
                    "Håndterte reklamasjoner og sikret produktkvalitet og kundetilfredshet.",
                ],
            },
            "maxbo-lier-1": {
                title: "Selger",
                org: "Maxbo Stormarked Lier",
                period: "April 2016 – August 2021",
                bullets: [
                    "Veiledet kunder med produktvalg i trelast- og byggevareavdelingene.",
                    "Ga serviceorientert veiledning for å hjelpe kunder med å finne passende løsninger.",
                ],
            },
        },
    },

    contact: {
        title: "Ta",
        titleAccent: "Kontakt",
        intro:
            "Mitt hovedfokus er frontendutvikling og UX/UI-design, der jeg kan kombinere kode med kreativitet. Jeg er også åpen for fullstack juniorstillinger, frilansoppdrag og samarbeidsprosjekter. Ikke nøl med å ta kontakt!",
        labels: {
            email: "E-post",
            linkedin: "LinkedIn",
            github: "GitHub",
            location: "Sted",
        },
        locationValue: "Drammen, Norge",
        emailButton: "Send e-post",
    },

    backToTop: "Topp ↑",
} as const;

export default no;
