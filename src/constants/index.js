import {
    css,
    github,
    html,
    javascript,
    nextjs,
    nodejs,
    react,
    contact,
    tailwindcss,
    linkedin,
    typescript,
    pricewise
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "TailWind CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
];

export const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "Aeroaspire",
        date: "Sep 2025 - Oct 2025",
        link: 'https://drive.google.com/file/d/14IMSyJePEE36ZaF4iVnK6wjetruFLJCv/view?usp=sharing',
        points: [
            "Built production-ready features as part of a 5-week hands-on training sprint covering core software development concepts.",
            "Developed full-stack web applications using React/TypeScript (frontend), Flask/Python(backend), SQLite (database), and Docker (containerization).",
            "Collaborated with mentors and team members to complete assigned mini-projects and meet weekly performance goals.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Atpdevil',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/gokul-k-1b5123291',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'EVry Charge',
        description: 'Built a dual-role EV charging platform enabling users to find chargers, while hosts add stations.',
        link: 'https://evrycharge.vercel.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Gaming Masters',
        description: 'Created a collection of browser-based games optimized for mobile and desktop.',
        link: 'https://gaming-masters-1.vercel.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Insight Tracker',
        description: 'Built an AI-powered tracker showing URL changes, alerts, and logs with auto-refresh.',
        link: 'https://ai-insight-tracker.vercel.app/',
    }
];