export type Project = {
    id: string;
    name: string;
    category: string;
    summary: string;
    details: string;
    features: string[];
    impact: string;
    technologies: string[];
    image: string;
    imageAlt: string;
    githubUrl: string;
    confidential?: boolean;
    confidentialNote?: string;
    prototypeNote?: string;
};

export const projects: Project[] = [
    {
        id: 'sosh',
        name: 'Scheme of Service Hub — SoSH',
        category: 'Administrative Web Portal',
        summary: 'A centralized web portal built during internship at JPA to replace fragmented paper and PDF processes across Brunei civil service.',
        details: 'SoSH modernizes how Schemes of Service are managed across the Brunei civil service. Built as an individual project during my internship at the Public Service Department (JPA), it gathered requirements directly from non-technical stakeholders and transformed manual workflows into a structured digital portal.',
        features: [
            'Redesigned a 12-step manual drafting & approval process into an 8-step guided digital workflow with multi-tier approval',
            'Implemented Role-Based Access Control (RBAC) for 4 user types with email validation and deletion safeguards',
            'Designed and cleaned a normalized MySQL database from unstructured source data',
            'Prototyped full interface in Figma with stakeholder usability testing',
        ],
        impact: 'Replaced paper-heavy procedures across departments with a streamlined, multi-tier digital review process.',
        technologies: ['Laravel', 'MySQL', 'Tailwind CSS', 'Figma'],
        image: '/images/projects/sosh.png',
        imageAlt: 'Scheme of Service Hub screenshot',
        githubUrl: 'https://github.com/VER-SI',
        confidential: true,
        confidentialNote: 'Internal Government Work — Screenshots and repository code are restricted due to JPA institutional privacy guidelines. Featured for portfolio demonstration.',
    },
    {
        id: 'teamspace-calendar',
        name: 'TeamSpace Calendar',
        category: 'Internal Collaboration Portal (Prototype)',
        summary: 'An internal collaboration web portal combining Teams-style shared file workspaces with personal calendar scheduling.',
        details: 'Built during my internship at JPA around real department workflow requirements, TeamSpace Calendar combines document management with personal scheduling. Note: This is a front-end prototype with a partially implemented database layer demonstrating permissions and password behaviors.',
        features: [
            'Shared File Workspace: Team-style folders to view, share, and organize files like Microsoft Teams',
            'Role-Based Permissions: Selected user privilege logic for uploading, editing, or deleting files vs. view-only access',
            'Password-Protected Folders: Folders locked with randomly generated passwords required prior to opening',
            'Personal Calendar & Event Filtering: Google Calendar-style planner with day, week, and month views',
        ],
        impact: 'Demonstrates a unified workspace concept designed to improve visibility over team scheduling timelines and shared files.',
        technologies: ['React', 'Tailwind CSS', 'Laravel', 'MySQL', 'Figma'],
        image: '/images/projects/teamspace-calendar.png',
        imageAlt: 'TeamSpace Calendar screenshot',
        githubUrl: 'https://github.com/VER-SI',
        confidential: true,
        confidentialNote: 'Internal Government Work — Screenshots and repository code are restricted due to JPA institutional privacy guidelines. Featured for portfolio demonstration.',
        prototypeNote: 'Front-end interface complete with partially implemented backend layer.',
    },
    {
        id: 'taruskira',
        name: 'TarusKira',
        category: 'Mobile-First Profit Analytics App (Prototype)',
        summary: 'A mobile-first front-end web app prototype helping micro-vendors transition from paper logbooks to digital record-keeping.',
        details: 'TarusKira addresses the daily accounting challenges of micro-vendors (such as pasar malam stall owners). It demonstrates how daily sales recording, inventory management, and profit tracking can be simplified through a mobile-first digital workflow.',
        features: [
            'Stock & Pricing Management: Add, update, calculate, and remove inventory items via a mobile-friendly layout',
            'Profit Summaries: Calculates and displays profit figures and trends across weekly, monthly, and yearly views',
            'Paperless Logbook Concept: Structured digital workflow replacing manual record-keeping on the go',
        ],
        impact: 'Provides micro-business owners with accessible visual profit analytics without requiring complex accounting software.',
        technologies: ['React', 'TypeScript', 'HTML5', 'CSS3'],
        image: '/images/projects/taruskira.png',
        imageAlt: 'TarusKira project screenshot',
        githubUrl: 'https://github.com/VER-SI',
        prototypeNote: 'Front-end prototype — Data managed locally within the browser / sample data.',
    },
    {
        id: 'lifesync',
        name: 'LifeSync',
        category: 'Cross-Platform Mobile Application',
        summary: 'A cross-platform mobile app combining task/calendar management with expense tracking and routine reminders.',
        details: 'My first individual project, Built with React Native (Expo) and Firebase, LifeSync was my first individual mobile project. Designed in Figma before implementation, it scales routine scheduling, event management, and personal expense tracking into a cohesive mobile interface.',
        features: [
            'Firebase Authentication: Complete account sign-up and login management',
            'Cloud Calendar & Tasks: Custom events and tasks saved real-time to Firebase Firestore tied to user account',
            'Expense Tracking UI Prototype: Category spending statistics rendered with sample analytics data',
            'Custom Alarm & Routine Interface: Dedicated UI prototype for reminders and habit routines',
        ],
        impact: 'Successfully established a working cross-platform core bringing daily planning and personal finance together.',
        technologies: ['React Native', 'Expo', 'JavaScript', 'Firebase', 'Figma'],
        image: '/images/projects/lifesync.png',
        imageAlt: 'LifeSync project screenshot',
        githubUrl: 'https://github.com/VER-SI',
    },
];