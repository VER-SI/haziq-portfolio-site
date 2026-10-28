export type SkillCategory = {
    id: string;
    name: string;
    description: string;
    skills: string[];
};

export const skillCategories: SkillCategory[] = [
    {
        id: 'programming',
        name: 'Programming & Web Frameworks',
        description: 'Core languages and modern web frameworks used for building full-stack applications.',
        skills: [
            'JavaScript',
            'TypeScript',
            'Tailwind CSS',
            'PHP',
            'Laravel',
            'React',
            'Vue.js',
            'HTML5',
            'CSS3',
        ],
    },
    {
        id: 'databases',
        name: 'Databases & Data Tools',
        description: 'Relational database management, schema normalization, and data preparation.',
        skills: [
            'MySQL',
            'XAMPP',
            'Database Schema Design',
            'Data Cleaning',
            'Relational Databases',
        ],
    },
    {
        id: 'design',
        name: 'Design & Prototyping',
        description: 'User interface design, wireframing, component mapping, and visual collateral.',
        skills: [
            'Figma',
            'Canva',
            'Wireframing & Prototyping',
            'UI/UX Design',
        ],
    },
    {
        id: 'software',
        name: 'Software & Office Suites',
        description: 'Productivity software, documentation suites, and remote collaboration platforms.',
        skills: [
            'Microsoft Office (Excel, PowerPoint, Word)',
            'Team Collaboration Tools',
        ],
    },
    {
        id: 'soft-skills',
        name: 'Professional & Soft Skills',
        description: 'Interpersonal strengths, leadership roles (MPP UTB, PRR PTEM), and communication.',
        skills: [
            'Communication',
            'Leadership & Team Management (MPP UTB, PRR PTEM)',
            'Problem Solving',
            'Strategic Planning',
            'Adaptability',
            'Public Sector Stakeholder Management',
            'Strong Spoken & Written English',
            'Organizational Skills',
            'Team Collaboration',
            'Presentation Skills',
            'Conflict Resolution',
        ],
    },
    {
        id: 'admin',
        name: 'Administrative & HR Operations',
        description: 'Record-keeping, scheduling, document handling, and structured office workflows.',
        skills: [
            'Document Management',
            'Data Entry & Cleaning',
            'Record Keeping',
            'Scheduling & Calendar Management',
        ],
    },
];