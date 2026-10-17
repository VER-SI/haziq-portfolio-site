import { useState } from 'react';

type ExperienceItem = {
    id: string;
    role: string;
    company: string;
    department?: string;
    period: string;
    summary: string;
    bullets: string[];
    skills: string[];
};

const experiences: ExperienceItem[] = [
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

export default function Experience() {
    // Tracks which experience card is expanded (defaults to JPA open)
    const [expandedId, setExpandedId] = useState<string | null>('jpa');

    const toggleExpand = (id: string) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section id="experience" className="border-t border-zinc-800 bg-zinc-900/30">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="mb-10">
                    <p className="font-mono text-xs uppercase tracking-wider text-orange-500">
                        Where I’ve contributed
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Work Experience
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                        My professional background spanning software development consulting, operations, and leadership.
                    </p>
                    <p className="mt-3 text-xs text-zinc-500">
                        Click an experience card to see full responsibilities and achievements.
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp) => {
                        const isExpanded = expandedId === exp.id;
                        const detailsId = `experience-details-${exp.id}`;

                        return (
                            <article 
                                key={exp.id}
                                className="border-t border-zinc-800 pt-8 first:border-0 first:pt-0"
                            >
                                <div
                                    className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                                        isExpanded
                                            ? 'border-orange-500 bg-orange-500/5 ring-1 ring-orange-500/20'
                                            : 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
                                    }`}
                                >
                                    <button
                                        type="button"
                                        aria-expanded={isExpanded}
                                        aria-controls={detailsId}
                                        onClick={() => toggleExpand(exp.id)}
                                        className={`w-full p-6 text-left transition-colors duration-300 sm:p-8 ${
                                            isExpanded ? 'bg-orange-500/10 border-b border-orange-500/20' : 'hover:bg-zinc-800/40'
                                        }`}
                                    >
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold text-zinc-100">
                                                    {exp.company}
                                                </h3>
                                                <p className="mt-1 font-mono text-xs font-medium uppercase tracking-wider text-orange-500">
                                                    {exp.role}
                                                </p>
                                                {exp.department && (
                                                    <p className="mt-1 text-xs text-zinc-400 font-mono">
                                                        {exp.department}
                                                    </p>
                                                )}
                                                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                                                    {exp.summary}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between gap-3 sm:justify-end">
                                                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 font-mono text-xs text-orange-400 shrink-0">
                                                    {exp.period}
                                                </span>
                                                <span
                                                    aria-hidden="true"
                                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                                        isExpanded
                                                            ? 'rotate-180 border-orange-500 bg-orange-500 text-white'
                                                            : 'border-zinc-700 text-zinc-400'
                                                    }`}
                                                >
                                                    ↓
                                                </span>
                                            </div>
                                        </div>

                                        <span
                                            className={`mt-4 inline-block text-xs font-medium ${
                                                isExpanded ? 'text-orange-400' : 'text-zinc-500'
                                            }`}
                                        >
                                            {isExpanded ? 'Hide full details' : 'Click to expand responsibilities'}
                                        </span>
                                    </button>

                                    <div
                                        id={detailsId}
                                        aria-hidden={!isExpanded}
                                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                                            isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-6 py-6 transition-all duration-300 sm:px-8">
                                                <h4 className="font-mono text-xs uppercase tracking-wider text-orange-500">
                                                    Key Responsibilities &amp; Contributions
                                                </h4>
                                                <ul className="mt-3 list-disc list-inside space-y-2.5 max-w-3xl text-sm leading-7 text-zinc-300">
                                                    {exp.bullets.map((bullet, idx) => (
                                                        <li key={idx}>{bullet}</li>
                                                    ))}
                                                </ul>

                                                <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-orange-500">
                                                    Skills &amp; Focus Areas
                                                </h4>
                                                <ul className="mt-3 flex flex-wrap gap-2">
                                                    {exp.skills.map((skill) => (
                                                        <li
                                                            key={skill}
                                                            className="rounded-md border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs text-orange-300"
                                                        >
                                                            {skill}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}