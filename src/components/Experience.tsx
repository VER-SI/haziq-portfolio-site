import { useState } from 'react';
import { experiences } from '../data/experienceData';
import { type DesignAesthetic } from './Hero';

type ExperienceProps = {
    aesthetic: DesignAesthetic;
};

export default function Experience({ aesthetic }: ExperienceProps) {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    const getStyles = () => {
        switch (aesthetic) {
            case 'neo-brutalism':
                return {
                    sectionBg: 'bg-[#FEAB6D] text-[#341C09]',
                    categoryText: 'text-[#FC7307]',
                    titleText: 'text-[#341C09]',
                    summaryText: 'text-[#341C09]',
                    cardContainer: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] shadow-[6px_6px_0px_0px_#341C09]',
                    cardExpanded: 'border-2 border-[#341C09] bg-[#FFEBDC]',
                    cardHeaderButton: 'rounded-none border-b-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09] hover:bg-[#f6d7be]',
                    arrowIcon: 'rounded-none border-2 border-[#341C09] bg-[#FEAB6D] text-[#341C09]',
                    badge: 'rounded-none border-2 border-[#341C09] bg-[#FC7307] text-[#341C09] font-bold text-xs shadow-[2px_2px_0px_0px_#341C09]',
                    skillBadge: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09] font-bold text-xs shadow-[2px_2px_0px_0px_#341C09]',
                    divider: 'border-t-2 border-[#341C09]',
                };
            case 'neumorphism':
                return {
                    sectionBg: 'bg-zinc-950 text-zinc-100',
                    categoryText: 'text-orange-500',
                    titleText: 'text-zinc-100',
                    summaryText: 'text-zinc-400',
                    cardContainer: 'rounded-2xl bg-zinc-900 shadow-[10px_10px_20px_#09090b,-10px_-10px_20px_#1b1b1f] border border-zinc-800/40',
                    cardExpanded: 'border-orange-500 bg-orange-500/5 ring-1 ring-orange-500/20',
                    cardHeaderButton: 'hover:bg-zinc-800/40',
                    arrowIcon: 'rounded-full border border-zinc-700 text-zinc-400',
                    badge: 'rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-mono text-xs',
                    skillBadge: 'rounded-md border border-orange-500/20 bg-orange-500/10 text-orange-300 text-xs',
                    divider: 'border-t border-zinc-800',
                };
            case 'default':
            default:
                return {
                    sectionBg: 'bg-zinc-950 text-zinc-100',
                    categoryText: 'text-orange-500',
                    titleText: 'text-zinc-100',
                    summaryText: 'text-zinc-400',
                    cardContainer: 'rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700',
                    cardExpanded: 'border-orange-500 bg-orange-500/5 ring-1 ring-orange-500/20',
                    cardHeaderButton: 'hover:bg-zinc-800/40',
                    arrowIcon: 'rounded-full border border-zinc-700 text-zinc-400',
                    badge: 'rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-mono text-xs',
                    skillBadge: 'rounded-md border border-orange-500/20 bg-orange-500/10 text-orange-300 text-xs',
                    divider: 'border-t border-zinc-800',
                };
        }
    };

    const s = getStyles();

    return (
        <div className={`transition-colors duration-500 ${s.sectionBg}`}>
            <section id="experience" className={`py-20 ${s.divider}`}>
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-14">
                        <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${s.categoryText}`}>
                            Where I’ve contributed
                        </p>
                        <h2 className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${s.titleText}`}>
                            Work Experience
                        </h2>
                        <div className={`mt-3 h-1 w-12 rounded-full ${aesthetic === 'neo-brutalism' ? 'bg-[#341C09]' : 'bg-orange-500'}`}></div>
                        <p className={`mt-4 max-w-2xl text-sm leading-7 ${s.summaryText}`}>
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
                                    className={`pt-8 first:border-0 first:pt-0 ${s.divider}`}
                                >
                                    <div
                                        className={`overflow-hidden transition-colors duration-300 ${
                                            isExpanded ? s.cardExpanded : s.cardContainer
                                        }`}
                                    >
                                        <button
                                            type="button"
                                            aria-expanded={isExpanded}
                                            aria-controls={detailsId}
                                            onClick={() => toggleExpand(exp.id)}
                                            className={`w-full p-6 text-left transition-colors duration-300 sm:p-8 ${s.cardHeaderButton}`}
                                        >
                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                                <div>
                                                    <h3 className={`text-xl font-bold ${s.titleText}`}>
                                                        {exp.company}
                                                    </h3>
                                                    <p className={`mt-1 font-mono text-xs font-medium uppercase tracking-wider ${s.categoryText}`}>
                                                        {exp.role}
                                                    </p>
                                                    {exp.department && (
                                                        <p className={`mt-1 text-xs font-mono ${aesthetic === 'neo-brutalism' ? 'text-[#9D4502] font-bold' : 'text-zinc-400'}`}>
                                                            {exp.department}
                                                        </p>
                                                    )}
                                                    <p className={`mt-3 max-w-2xl text-sm leading-6 ${s.summaryText}`}>
                                                        {exp.summary}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between gap-3 sm:justify-end">
                                                    <span className={`px-3 py-1 shrink-0 ${s.badge}`}>
                                                        {exp.period}
                                                    </span>
                                                    <span
                                                        aria-hidden="true"
                                                        className={`flex h-8 w-8 shrink-0 items-center justify-center transition-all duration-300 ${
                                                            isExpanded
                                                                ? `${aesthetic === 'neo-brutalism' ? 'rotate-180 border-2 border-[#341C09] bg-[#FC7307] text-[#341C09] font-bold shadow-[2px_2px_0px_0px_#341C09]' : 'rotate-180 border-orange-500 bg-orange-500 text-white'}`
                                                                : s.arrowIcon
                                                        }`}
                                                    >
                                                        ↓
                                                    </span>
                                                </div>
                                            </div>

                                            <span
                                                className={`mt-4 inline-block text-xs font-medium ${
                                                    isExpanded 
                                                        ? aesthetic === 'neo-brutalism' ? 'text-[#341C09] font-bold' : 'text-orange-400' 
                                                        : aesthetic === 'neo-brutalism' ? 'text-[#9D4502]' : 'text-zinc-500'
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
                                                    <h4 className={`font-mono text-xs uppercase tracking-wider ${s.categoryText}`}>
                                                        Key Responsibilities &amp; Contributions
                                                    </h4>
                                                    <ul className={`mt-3 list-disc list-inside space-y-2.5 max-w-3xl text-sm leading-7 ${aesthetic === 'neo-brutalism' ? 'text-[#341C09]' : 'text-zinc-300'}`}>
                                                        {exp.bullets.map((bullet, idx) => (
                                                            <li key={idx}>{bullet}</li>
                                                        ))}
                                                    </ul>

                                                    <h4 className={`mt-6 font-mono text-xs uppercase tracking-wider ${s.categoryText}`}>
                                                        Skills &amp; Focus Areas
                                                    </h4>
                                                    <ul className="mt-3 flex flex-wrap gap-2">
                                                        {exp.skills.map((skill) => (
                                                            <li
                                                                key={skill}
                                                                className={`px-3 py-1.5 ${s.skillBadge}`}
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
        </div>
    );
}