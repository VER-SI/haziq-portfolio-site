import { useState } from 'react';
import { educationList } from '../data/educationData';
import { type DesignAesthetic } from './Hero';

type EducationProps = {
    aesthetic: DesignAesthetic;
};

export default function Education({ aesthetic }: EducationProps) {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    const getStyles = () => {
        switch (aesthetic) {
            case 'neo-brutalism':
                return {
                    sectionBg: 'bg-[#FFEBDC] text-[#341C09]',
                    categoryText: 'text-[#FC7307]',
                    titleText: 'text-[#341C09]',
                    summaryText: 'text-[#341C09]',
                    cardContainer: 'rounded-none border-2 border-[#341C09] bg-[#FEAB6D] shadow-[6px_6px_0px_0px_#341C09]',
                    cardExpanded: 'border-2 border-[#341C09] bg-[#FEAB6D]',
                    cardHeaderButton: 'rounded-none border-b-2 border-[#341C09] bg-[#FEAB6D] text-[#341C09] hover:bg-[#f39c59]',
                    arrowIcon: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09]',
                    badge: 'rounded-none border-2 border-[#341C09] bg-[#FC7307] text-[#341C09] font-bold text-xs shadow-[2px_2px_0px_0px_#341C09]',
                    subjectBadge: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09] font-bold text-xs shadow-[2px_2px_0px_0px_#341C09]',
                    divider: 'border-t-2 border-[#341C09]',
                };
            case 'neumorphism':
                return {
                    sectionBg: 'bg-[#F98829] text-white',
                    categoryText: 'text-white font-bold',
                    titleText: 'text-white',
                    summaryText: 'text-white/95',
                    cardContainer: 'rounded-3xl bg-[#EBECF0] text-[#2D343F] shadow-[10px_10px_20px_#d47322,-10px_-10px_20px_#ff9d30]',
                    cardExpanded: 'rounded-3xl bg-[#EBECF0] text-[#2D343F] shadow-[inset_6px_6px_12px_#c8c9ce,inset_-6px_-6px_12px_#ffffff]',
                    cardHeaderButton: 'hover:bg-[#e1e2e6] rounded-2xl transition-colors',
                    arrowIcon: 'rounded-full bg-[#EBECF0] text-[#2D343F] shadow-[3px_3px_6px_#c8c9ce,-3px_-3px_6px_#ffffff]',
                    badge: 'rounded-xl bg-[#EBECF0] text-[#F98829] font-mono text-xs font-bold shadow-[inset_3px_3px_6px_#c8c9ce,inset_-3px_-3px_6px_#ffffff]',
                    subjectBadge: 'rounded-xl bg-[#EBECF0] text-[#2D343F] font-semibold text-xs shadow-[3px_3px_6px_#c8c9ce,-3px_-3px_6px_#ffffff]',
                    divider: 'border-t-2 border-white/20',
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
                    subjectBadge: 'rounded-md border border-orange-500/20 bg-orange-500/10 text-orange-300 text-xs',
                    divider: 'border-t border-zinc-800',
                };
        }
    };

    const s = getStyles();

    return (
        <div className={`transition-colors duration-500 ${s.sectionBg}`}>
            <section id="education" className={`py-20 ${s.divider}`}>
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-14">
                        <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${s.categoryText}`}>
                            Learning and growing
                        </p>
                        <h2 className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${s.titleText}`}>
                            Education &amp; Qualifications
                        </h2>
                        <div className={`mt-3 h-1 w-12 rounded-full ${aesthetic === 'neo-brutalism' ? 'bg-[#341C09]' : 'bg-white'}`}></div>
                        <p className={`mt-4 max-w-2xl text-sm leading-7 ${s.summaryText}`}>
                            My formal academic background and qualifications spanning software development, sciences, and leadership. Click an education card to view subjects, grades, and co-curricular activities.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {educationList.map((edu) => {
                            const isExpanded = expandedId === edu.id;
                            const detailsId = `education-details-${edu.id}`;

                            return (
                                <article
                                    key={edu.id}
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
                                            onClick={() => toggleExpand(edu.id)}
                                            className={`w-full p-6 text-left transition-colors duration-300 sm:p-8 ${s.cardHeaderButton}`}
                                        >
                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                                <div>
                                                    <p className={`font-mono text-xs font-medium uppercase tracking-wider ${aesthetic === 'neumorphism' ? 'text-[#F98829] font-bold' : s.categoryText}`}>
                                                        {edu.levelTag}
                                                    </p>
                                                    <h3 className={`mt-2 text-xl font-bold ${aesthetic === 'neumorphism' ? 'text-[#2D343F]' : s.titleText}`}>
                                                        {edu.degree}
                                                    </h3>
                                                    <p className={`mt-1 text-sm font-semibold ${aesthetic === 'neo-brutalism' ? 'text-[#341C09]' : aesthetic === 'neumorphism' ? 'text-[#5A6578]' : 'text-zinc-300'}`}>
                                                        {edu.institution}
                                                    </p>
                                                    {edu.grade && (
                                                        <p className={`mt-1 font-mono text-xs ${aesthetic === 'neo-brutalism' ? 'text-[#9D4502] font-bold' : aesthetic === 'neumorphism' ? 'text-[#F98829] font-bold' : 'text-orange-400'}`}>
                                                            Grade: {edu.grade}
                                                        </p>
                                                    )}
                                                    <p className={`mt-3 max-w-2xl text-sm leading-6 ${aesthetic === 'neumorphism' ? 'text-[#2D343F]' : s.summaryText}`}>
                                                        {edu.summary}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between gap-3 sm:justify-end">
                                                    <span className={`px-3 py-1 shrink-0 ${s.badge}`}>
                                                        {edu.period}
                                                    </span>
                                                    <span
                                                        aria-hidden="true"
                                                        className={`flex h-8 w-8 shrink-0 items-center justify-center transition-all duration-300 ${
                                                            isExpanded
                                                                ? `${aesthetic === 'neo-brutalism' ? 'rotate-180 border-2 border-[#341C09] bg-[#FC7307] text-[#341C09] font-bold shadow-[2px_2px_0px_0px_#341C09]' : aesthetic === 'neumorphism' ? 'rotate-180 bg-[#F98829] text-white shadow-[inset_2px_2px_4px_#c8c9ce,inset_-2px_-2px_4px_#ffffff]' : 'rotate-180 border-orange-500 bg-orange-500 text-white'}`
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
                                                        ? aesthetic === 'neo-brutalism' ? 'text-[#341C09] font-bold' : aesthetic === 'neumorphism' ? 'text-[#F98829] font-bold' : 'text-orange-400' 
                                                        : aesthetic === 'neo-brutalism' ? 'text-[#9D4502]' : aesthetic === 'neumorphism' ? 'text-[#5A6578]' : 'text-zinc-500'
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
                                                        <h4 className={`font-mono text-xs uppercase tracking-wider ${aesthetic === 'neumorphism' ? 'text-[#F98829] font-bold' : s.categoryText}`}>
                                                            Subjects &amp; Focus Areas
                                                        </h4>
                                                        <ul className="mt-3 flex flex-wrap gap-2">
                                                            {edu.subjects.map((subject, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className={`px-3 py-1.5 ${s.subjectBadge}`}
                                                                >
                                                                    {subject}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Co-Curricular & Extra Activities */}
                                                    <div>
                                                        <h4 className={`font-mono text-xs uppercase tracking-wider ${aesthetic === 'neumorphism' ? 'text-[#F98829] font-bold' : s.categoryText}`}>
                                                            Co-Curricular &amp; Activities
                                                        </h4>
                                                        <ul className={`mt-3 list-disc list-inside space-y-2 text-sm leading-6 ${aesthetic === 'neo-brutalism' ? 'text-[#341C09]' : aesthetic === 'neumorphism' ? 'text-[#2D343F]' : 'text-zinc-300'}`}>
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
        </div>
    );
}