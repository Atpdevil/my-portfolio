import { aeroaspire } from "../assets/images";
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
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
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
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "TailWind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "Aeroaspire",
        // icon: aeroaspire,
        // iconBg: "#b7e4c7",
        date: "Sep 2025 - Oct 2025",
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
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    }
];