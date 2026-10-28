export type ExperienceItem = {
    id: string;
    role: string;
    company: string;
    department?: string;
    period: string;
    summary: string;
    bullets: string[];
    skills: string[];
};

export const experiences: ExperienceItem[] = [
    {
        id: 'jpa',
        role: 'Pelajar Intern | Full-Stack Developer & UI/UX Designer | Consultant',
        company: 'Jabatan Perkhidmatan Awam (JPA)',
        department: 'Bahagian Penyelidikan Dan Perancangan',
        period: 'Jan 2026 – Jun 2026',
        summary: 'Engineered the Scheme of Service Hub (SoSH) web portal, modernizing civil service administrative workflows across Brunei.',
        bullets: [
            'Built the Scheme of Service Hub (SoSH), a centralised web portal (Laravel, MySQL, Tailwind CSS) replacing fragmented PDF and paper-based manual processes for managing Schemes of Service across the Brunei civil service.',
            'Redesigned a 12-step manual drafting and approval process into an 8-step guided digital workflow with multi-tier approval.',
            'Designed and cleaned a normalised MySQL database from unstructured source data, mapping relationships between users, scheme templates, submissions and department assignments.',
            'Gathered requirements from non-technical stakeholders, alignment meetings with government divisions and translated civil service salary structures and approval procedures into software specifications.',
            'Delivered formal technical reports, technical feasibility and institutional impact executive project documentation, and stakeholder presentations outlining architecture and deployment roadmaps.',
        ],
        skills: [
            'Laravel',
            'MySQL',
            'Tailwind CSS',
            'Figma',
            'UI/UX Design',
            'System Architecture',
            'Stakeholder Management',
        ],
    },
    {
        id: 'hyatt-borneo',
        role: 'House Keeping (Part-Time / On-Call)',
        company: 'Hyatt Borneo Service Management',
        period: 'Jul 2024 – Jul 2025',
        summary: 'Provided responsive frontline hospitality service to VIP guests and maintained rigorous facility standards.',
        bullets: [
            'Provided responsive frontline service to VIP guests and delegates, attending promptly to personalized requests and amenity replenishment.',
            'Maintained inventory levels for room amenities, linens, and cleaning supplies.',
            'Ensured a clean work environment at Assaraa during His Majesty’s 78th Birthday, ASEAN meeting.',
            'Ensured a clean work environment at Istana Edinburgh during Kosovo meeting.',
        ],
        skills: [
            'Client Communication',
            'Inventory Management',
            'Quality Assurance',
            'Time Management',
            'Teamwork',
        ],
    },
    {
        id: 'lets-eat-corner',
        role: 'In Charge Of Service Crew',
        company: "Let's Eat Corner Midvalley",
        period: 'Nov 2022 – Apr 2023',
        summary: 'Promoted to lead daily front-of-house operations, supervise staff, manage schedules, and control inventory.',
        bullets: [
            'Promoted after 1 month as Service Crew to lead a team of service crew members, lead daily front-of-house operations, supervise staff, delegated tasks effectively, monitored performance and manage workflow efficiency.',
            'Provided on-the-job training to new staff members and managed staff scheduling.',
            'Maintained inventory levels, tracked stock data, and placed orders for items as needed to prevent shortages.',
            'Delivered high-standard customer service, managed order processing, and maintained cleanliness standards.',
        ],
        skills: [
            'Leadership',
            'Staff Training',
            'Operations Management',
            'Inventory Control',
            'Customer Service',
        ],
    },
];