import { useState } from 'react';
import { experiences } from '../data/experienceData';

export default function Experience() {
    
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section id="experience" className="border-t border-zinc-800 bg-zinc-950 py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-14">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-400">
                        Where I’ve contributed
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Work Experience
                    </h2>
                    <div className="mt-3 h-1 w-12 rounded-full bg-orange-500"></div>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                        My professional background spanning software development consulting, operations, and leadership. Click an experience card to see full responsibilities and achievements.
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