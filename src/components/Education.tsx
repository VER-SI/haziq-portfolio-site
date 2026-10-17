import { useState } from 'react';

type EducationItem = {
    id: string;
    degree: string;
    institution: string;
    levelTag: string;
    period: string;
    grade?: string;
    summary: string;
    subjects: string[];
    activities: string[];
};

const educationList: EducationItem[] = [
    {
        id: 'utb',
        degree: 'Bachelor of Science (Hons) in Computing (Major in Software Development)',
        institution: 'Universiti Teknologi Brunei (UTB)',
        levelTag: 'Undergraduate Studies',
        period: 'Jul 2023 – Aug 2026',
        grade: 'Second Class Honours',
        summary: 'Focused on core software engineering principles, full-stack application development, database architecture, and system engineering.',
        subjects: [
            'Software Engineering Architecture',
            'Web Application Development (Laravel, React)',
            'Database Management Systems (MySQL)',
            'Data Structures & Algorithms',
            'Object-Oriented Programming',
        ],
        activities: [
            'Executive Member / Representative, Majlis Perwakilan Pelajar (MPP), UTB (2025 – 2026)',
            'Participant, UTB Sports Fiesta — Futsal & Esports (MLBB) (2023, 2026)',
            'Participant, UTB Sports Fiesta — Tug of War (2023)',
        ],
    },
    {
        id: 'a-level',
        degree: 'GCE A-Level (Physics / Science Stream)',
        institution: 'Pusat Tingkatan Enam Meragang',
        levelTag: 'Pre-University Education',
        period: 'Feb 2021 – Dec 2022',
        grade: '3 A-Levels (Mathematics, Chemistry, Physics, General Paper)',
        summary: 'Completed advanced pre-university studies focusing on analytical reasoning, physical sciences, and mathematics.',
        subjects: [
            'Mathematics',
            'Physics',
            'Chemistry',
            'General Paper',
        ],
        activities: [
            'Head of Welfare, Penolong Rejimen Rintis 8',
            'Member of Ping Pong Club',
            'Aku Anak Brunei Club',
        ],
    },
    {
        id: 'o-level',
        degree: 'GCE O-Level (All Science Subject Class)',
        institution: 'Sekolah Menengah Pehin Dato Seri Maharaja',
        levelTag: 'Secondary Education',
        period: '2016 – 2020',
        grade: '8 O-Levels',
        summary: 'Achieved strong academic results across all core science subjects, mathematics, and humanities.',
        subjects: [
            'Additional Mathematics',
            'Mathematics D',
            'Physics',
            'Chemistry',
            'Biology',
            'English Language',
            'Malay Language',
        ],
        activities: [
            'Dodgeball Club Member (2016 – 2019)',
            'Coin & Stamp Collection Club Member (2020)',
        ],
    },
    {
        id: 'ssru',
        degree: 'Sijil Sekolah-Sekolah Rendah Ugama (SSRU)',
        institution: 'Religious School (Tentera Laut Diraja Brunei)',
        levelTag: 'Religious Primary Education',
        period: '2016 – 2017',
        grade: 'Pangkat 1 (Aggregate 10)',
        summary: 'Completed fundamental religious primary education emphasizing Islamic jurisprudence, Quranic recitation, and Arabic literacy.',
        subjects: [
            'Al-Quran & Tajwid',
            'Tauhid & Fiqh',
            'Sejarah Islam (Islamic History)',
            'Bahasa Arab',
            'Tulisan Jawi',
        ],
        activities: [
            'Religious School Co-curricular Activities',
            'Islamic Studies & Quranic Competitions',
        ],
    },
];

export default function Education() {
    // Default open UTB for instant engagement
    const [expandedId, setExpandedId] = useState<string | null>('utb');

    const toggleExpand = (id: string) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section id="education" className="border-t border-zinc-800 bg-zinc-900/30">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="mb-10">
                    <p className="font-mono text-xs uppercase tracking-wider text-orange-500">
                        Learning and growing
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Education &amp; Qualifications
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                        My formal academic background and qualifications spanning software development, sciences, and leadership.
                    </p>
                    <p className="mt-3 text-xs text-zinc-500">
                        Click an education card to view subjects, grades, and co-curricular activities.
                    </p>
                </div>

                <div className="space-y-8">
                    {educationList.map((edu) => {
                        const isExpanded = expandedId === edu.id;
                        const detailsId = `education-details-${edu.id}`;

                        return (
                            <article
                                key={edu.id}
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
                                        onClick={() => toggleExpand(edu.id)}
                                        className={`w-full p-6 text-left transition-colors duration-300 sm:p-8 ${
                                            isExpanded ? 'bg-orange-500/10 border-b border-orange-500/20' : 'hover:bg-zinc-800/40'
                                        }`}
                                    >
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                            <div>
                                                <p className="font-mono text-xs font-medium uppercase tracking-wider text-orange-500">
                                                    {edu.levelTag}
                                                </p>
                                                <h3 className="mt-2 text-xl font-bold text-zinc-100">
                                                    {edu.degree}
                                                </h3>
                                                <p className="mt-1 text-sm font-medium text-zinc-300">
                                                    {edu.institution}
                                                </p>
                                                {edu.grade && (
                                                    <p className="mt-1 font-mono text-xs text-orange-400">
                                                        Grade: {edu.grade}
                                                    </p>
                                                )}
                                                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                                                    {edu.summary}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between gap-3 sm:justify-end">
                                                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 font-mono text-xs text-orange-400 shrink-0">
                                                    {edu.period}
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
                                            {isExpanded ? 'Hide details' : 'Click to expand subjects & activities'}
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
                                            <div
                                                className={`grid gap-6 px-6 py-6 transition-all duration-300 sm:px-8 md:grid-cols-2 ${
                                                    isExpanded
                                                        ? 'translate-y-0 opacity-100'
                                                        : '-translate-y-2 opacity-0'
                                                }`}
                                            >
                                                {/* Key Subjects & Focus Areas */}
                                                <div>
                                                    <h4 className="font-mono text-xs uppercase tracking-wider text-orange-500">
                                                        Subjects &amp; Focus Areas
                                                    </h4>
                                                    <ul className="mt-3 flex flex-wrap gap-2">
                                                        {edu.subjects.map((subject, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="rounded-md border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs text-orange-300"
                                                            >
                                                                {subject}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Co-Curricular & Extra Activities */}
                                                <div>
                                                    <h4 className="font-mono text-xs uppercase tracking-wider text-orange-500">
                                                        Co-Curricular &amp; Activities
                                                    </h4>
                                                    <ul className="mt-3 list-disc list-inside space-y-2 text-sm leading-6 text-zinc-300">
                                                        {edu.activities.map((activity, idx) => (
                                                            <li key={idx}>{activity}</li>
                                                        ))}
                                                    </ul>
                                                </div>
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