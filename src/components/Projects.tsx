import { useState } from 'react';
import { projects, type Project } from '../data/projectsData';
import { type DesignAesthetic } from './Hero';

type ProjectsProps = {
    aesthetic: DesignAesthetic;
};

function ProjectImage({ project, aesthetic }: { project: Project; aesthetic: DesignAesthetic }) {
    const [imageFailed, setImageFailed] = useState(false);
    const isNeo = aesthetic === 'neo-brutalism';
    const isNeumorph = aesthetic === 'neumorphism';

    if (project.confidential) {
        return (
            <div className={`flex aspect-video w-full flex-col items-center justify-center p-6 text-center ${
                isNeo
                    ? 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09] shadow-[4px_4px_0px_0px_#341C09]'
                    : isNeumorph
                    ? 'rounded-2xl bg-[#EBECF0] text-[#2D343F] shadow-[inset_4px_4px_8px_#c8c9ce,inset_-4px_-4px_8px_#ffffff]'
                    : 'rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 shadow-inner'
            }`}>
                <div className={`flex h-12 w-12 items-center justify-center ${
                    isNeo
                        ? 'rounded-none border-2 border-[#341C09] bg-[#FC7307] text-[#341C09] shadow-[2px_2px_0px_0px_#341C09]'
                        : isNeumorph
                        ? 'rounded-2xl bg-[#F98829] text-white shadow-[3px_3px_6px_#c8c9ce,-3px_-3px_6px_#ffffff]'
                        : 'rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400'
                }`}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <p className={`mt-3 text-sm font-semibold ${isNeo ? 'text-[#341C09]' : isNeumorph ? 'text-[#2D343F]' : 'text-zinc-200'}`}>
                    Confidential Project Preview
                </p>
                <p className={`mt-1.5 max-w-xs text-xs leading-5 ${isNeo ? 'text-[#9D4502] font-medium' : isNeumorph ? 'text-[#5A6578]' : 'text-zinc-500'}`}>
                    {project.confidentialNote}
                </p>
            </div>
        );
    }

    if (imageFailed) {
        return (
            <div className={`flex aspect-video items-center justify-center p-6 text-center ${
                isNeo
                    ? 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09]'
                    : isNeumorph
                    ? 'rounded-2xl bg-[#EBECF0] text-[#2D343F] shadow-[inset_4px_4px_8px_#c8c9ce,inset_-4px_-4px_8px_#ffffff]'
                    : 'rounded-lg border border-zinc-800 bg-zinc-950'
            }`}>
                <div>
                    <p className={`font-semibold ${isNeo ? 'text-[#341C09]' : isNeumorph ? 'text-[#2D343F]' : 'text-zinc-300'}`}>{project.name}</p>
                    <p className={`mt-2 text-xs ${isNeo ? 'text-[#9D4502]' : isNeumorph ? 'text-[#5A6578]' : 'text-zinc-500'}`}>
                        Add a screenshot at
                    </p>
                    <code className={`mt-1 block text-xs ${isNeo ? 'text-[#FC7307] font-bold bg-[#341C09] px-1.5 py-0.5' : isNeumorph ? 'text-[#F98829] font-bold bg-[#EBECF0] px-2 py-1 rounded' : 'text-orange-400'}`}>
                        public{project.image}
                    </code>
                </div>
            </div>
        );
    }

    return (
        <img
            src={project.image}
            alt={project.imageAlt}
            className={`aspect-video w-full object-cover ${
                isNeo
                    ? 'rounded-none border-2 border-[#341C09] shadow-[4px_4px_0px_0px_#341C09]'
                    : isNeumorph
                    ? 'rounded-2xl shadow-[6px_6px_12px_#c8c9ce,-6px_-6px_12px_#ffffff]'
                    : 'rounded-lg border border-zinc-800 bg-zinc-950'
            }`}
            onError={() => setImageFailed(true)}
        />
    );
}

export default function Projects({ aesthetic }: ProjectsProps) {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);
    const [activeTabs, setActiveTabs] = useState<{ [key: string]: string }>({});

    const handleTabChange = (projectId: string, tab: string) => {
        setActiveTabs((prev) => ({ ...prev, [projectId]: tab }));
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
                    cardHeaderButton: 'rounded-none border-b-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09] hover:bg-[#f6d7be]',
                    arrowIcon: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09]',
                    tabActive: 'rounded-none border-2 border-[#341C09] bg-[#FC7307] text-[#341C09] font-extrabold shadow-[2px_2px_0px_0px_#341C09]',
                    tabInactive: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09] hover:bg-[#f6d7be]',
                    badge: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09] font-bold text-xs',
                    button: 'rounded-none border-2 border-[#341C09] bg-[#FC7307] text-[#341C09] font-extrabold shadow-[4px_4px_0px_0px_#341C09] active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-[#e06505]',
                    confidentialBadge: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09] text-xs font-bold',
                    divider: 'border-t-2 border-[#341C09]',
                };
            case 'neumorphism':
                return {
                    sectionBg: 'bg-[#F98829] text-white',
                    categoryText: 'text-white',
                    titleText: 'text-white',
                    summaryText: 'text-white/95',
                    cardContainer: 'rounded-3xl bg-[#EBECF0] p-6 shadow-[10px_10px_20px_#d47322,-10px_-10px_20px_#ff9d30] text-[#2D343F]',
                    cardExpanded: 'rounded-3xl bg-[#EBECF0] p-6 shadow-[inset_6px_6px_12px_#c8c9ce,inset_-6px_-6px_12px_#ffffff] text-[#2D343F]',
                    cardHeaderButton: 'hover:bg-[#e1e2e6] rounded-2xl transition-colors',
                    arrowIcon: 'rounded-full bg-[#EBECF0] text-[#2D343F] shadow-[3px_3px_6px_#c8c9ce,-3px_-3px_6px_#ffffff]',
                    tabActive: 'rounded-xl bg-[#F98829] text-white font-bold shadow-[inset_3px_3px_6px_#d47322,inset_-3px_-3px_6px_#ff9d30]',
                    tabInactive: 'rounded-xl bg-[#EBECF0] text-[#2D343F] font-semibold shadow-[3px_3px_6px_#c8c9ce,-3px_-3px_6px_#ffffff] hover:text-[#F98829]',
                    badge: 'rounded-xl bg-[#EBECF0] text-[#2D343F] font-semibold shadow-[3px_3px_6px_#c8c9ce,-3px_-3px_6px_#ffffff]',
                    button: 'rounded-2xl bg-[#F98829] text-white font-bold shadow-[4px_4px_8px_#c8c9ce,-4px_-4px_8px_#ffffff] hover:bg-[#e0771f]',
                    confidentialBadge: 'rounded-xl bg-[#EBECF0] text-[#2D343F] text-xs font-semibold shadow-[inset_3px_3px_6px_#c8c9ce,inset_-3px_-3px_6px_#ffffff]',
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
                    tabActive: 'bg-orange-500 text-white',
                    tabInactive: 'bg-zinc-800 text-zinc-400 hover:text-zinc-200',
                    badge: 'rounded-md border border-orange-500/20 bg-orange-500/10 text-orange-300',
                    button: 'rounded-lg border border-orange-500/50 text-orange-400 hover:bg-orange-500/10',
                    confidentialBadge: 'rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500 text-xs font-medium',
                    divider: 'border-t border-zinc-800',
                };
        }
    };

    const s = getStyles();

    return (
        <div className={`transition-colors duration-500 ${s.sectionBg}`}>
            <section id="projects" className={`py-20 ${s.divider}`}>
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-14">
                        <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${s.categoryText}`}>
                            Portfolio
                        </p>
                        <h2 className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${s.titleText}`}>
                            Featured Projects
                        </h2>
                        <div className={`mt-3 h-1 w-12 rounded-full ${aesthetic === 'neo-brutalism' ? 'bg-[#341C09]' : 'bg-white'}`}></div>
                        <p className={`mt-4 max-w-2xl text-sm leading-7 ${s.summaryText}`}>
                            A collection of full-stack web applications, internal tools, and mobile concepts I’ve engineered. Click a project card to expand its details and explore features.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {projects.map((project, index) => {
                            const isExpanded = expandedProject === project.id;
                            const detailsId = `project-details-${project.id}`;
                            const currentTab = activeTabs[project.id] || 'overview';

                            return (
                                <article 
                                    key={project.id} 
                                    className={`pt-16 first:border-0 first:pt-0 ${s.divider}`}
                                >
                                    {/* Project header info */}
                                    <div className="mb-4 pl-1">
                                        <h3 className={`text-2xl font-bold ${s.titleText}`}>
                                            <span className={`mr-2 font-mono ${aesthetic === 'neo-brutalism' ? 'text-[#341C09]' : 'text-white'}`}>
                                                {String(index + 1).padStart(2, '0')}.
                                            </span>
                                            {project.name}
                                        </h3>
                                        <div className="mt-1 flex flex-wrap items-center gap-2">
                                            <p className={`font-mono text-xs font-medium uppercase tracking-wider ${s.categoryText}`}>
                                                {project.category}
                                            </p>
                                            {project.prototypeNote && (
                                                <span className={`px-2 py-0.5 font-mono text-[10px] font-medium ${
                                                    aesthetic === 'neo-brutalism'
                                                        ? 'rounded-none border border-[#341C09] bg-[#FEAB6D] text-[#341C09]'
                                                        : aesthetic === 'neumorphism'
                                                        ? 'rounded-xl bg-[#EBECF0] text-[#2D343F] font-bold shadow-[2px_2px_4px_#d47322,-2px_-2px_4px_#ff9d30]'
                                                        : 'rounded bg-zinc-800 text-zinc-400'
                                                }`}>
                                                    Prototype
                                                </span>
                                            )}
                                        </div>
                                        <p className={`mt-2 max-w-3xl text-sm leading-6 ${s.summaryText}`}>
                                            {project.summary}
                                        </p>
                                    </div>

                                    <div
                                        className={`overflow-hidden transition-colors duration-300 ${
                                            isExpanded ? s.cardExpanded : s.cardContainer
                                        }`}
                                    >
                                        <button
                                            type="button"
                                            aria-expanded={isExpanded}
                                            aria-controls={detailsId}
                                            onClick={() =>
                                                setExpandedProject(
                                                    isExpanded ? null : project.id,
                                                )
                                            }
                                            className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 ${s.cardHeaderButton}`}
                                        >
                                            <span
                                                className={`text-sm font-medium ${
                                                    isExpanded
                                                        ? aesthetic === 'neo-brutalism' ? 'font-bold text-[#341C09]' : aesthetic === 'neumorphism' ? 'font-bold text-[#2D343F]' : 'font-semibold text-orange-400'
                                                        : aesthetic === 'neo-brutalism' ? 'text-[#341C09]' : aesthetic === 'neumorphism' ? 'text-[#2D343F]' : 'text-zinc-300'
                                                }`}
                                            >
                                                {isExpanded
                                                    ? 'Hide project details'
                                                    : 'Click to expand project details & features'}
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
                                        </button>

                                        <div
                                            id={detailsId}
                                            aria-hidden={!isExpanded}
                                            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                                                isExpanded
                                                    ? 'grid-rows-[1fr]'
                                                    : 'grid-rows-[0fr]'
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="grid gap-6 p-5 md:grid-cols-2 md:p-6">
                                                    <div>
                                                        <ProjectImage project={project} aesthetic={aesthetic} />
                                                        
                                                        {/* Tech stack badges */}
                                                        <div className="mt-6">
                                                            <p className={`mb-2 text-xs font-medium ${aesthetic === 'neo-brutalism' ? 'text-[#341C09]' : aesthetic === 'neumorphism' ? 'text-[#5A6578]' : 'text-zinc-400'}`}>
                                                                Tools &amp; Technologies
                                                            </p>
                                                            <ul className="flex flex-wrap gap-2">
                                                                {project.technologies.map((technology) => (
                                                                    <li
                                                                        key={technology}
                                                                        className={`px-3 py-1.5 text-xs ${s.badge}`}
                                                                    >
                                                                        {technology}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col justify-between">
                                                        <div>
                                                            {/* Sub-content switch buttons */}
                                                            <div className={`flex gap-2 pb-3 ${aesthetic === 'neo-brutalism' ? 'border-b-2 border-[#341C09]' : aesthetic === 'neumorphism' ? 'border-b border-[#2D343F]/20' : 'border-b border-zinc-800'}`}>
                                                                <button
                                                                    onClick={() => handleTabChange(project.id, 'overview')}
                                                                    className={`px-3 py-1.5 text-xs font-medium transition ${
                                                                        currentTab === 'overview'
                                                                            ? s.tabActive
                                                                            : s.tabInactive
                                                                    }`}
                                                                >
                                                                    Overview
                                                                </button>
                                                                <button
                                                                    onClick={() => handleTabChange(project.id, 'features')}
                                                                    className={`px-3 py-1.5 text-xs font-medium transition ${
                                                                        currentTab === 'features'
                                                                            ? s.tabActive
                                                                            : s.tabInactive
                                                                    }`}
                                                                >
                                                                    Key Features
                                                                </button>
                                                                <button
                                                                    onClick={() => handleTabChange(project.id, 'impact')}
                                                                    className={`px-3 py-1.5 text-xs font-medium transition ${
                                                                        currentTab === 'impact'
                                                                            ? s.tabActive
                                                                            : s.tabInactive
                                                                    }`}
                                                                >
                                                                    Impact
                                                                </button>
                                                            </div>

                                                            {/* Tab Content Panels */}
                                                            <div className="mt-4 min-h-[140px]">
                                                                {currentTab === 'overview' && (
                                                                    <div className="space-y-2">
                                                                        <p className={`font-mono text-xs uppercase tracking-wider ${aesthetic === 'neumorphism' ? 'text-[#F98829] font-bold' : s.categoryText}`}>
                                                                            About this project
                                                                        </p>
                                                                        <p className={`text-sm leading-7 ${aesthetic === 'neo-brutalism' ? 'text-[#341C09]' : aesthetic === 'neumorphism' ? 'text-[#2D343F]' : 'text-zinc-300'}`}>
                                                                            {project.details}
                                                                        </p>
                                                                        {project.prototypeNote && (
                                                                            <p className={`mt-2 text-xs italic ${aesthetic === 'neo-brutalism' ? 'text-[#9D4502]' : aesthetic === 'neumorphism' ? 'text-[#F98829]' : 'text-orange-400/90'}`}>
                                                                                Note: {project.prototypeNote}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                )}

                                                                {currentTab === 'features' && (
                                                                    <div className="space-y-2">
                                                                        <p className={`font-mono text-xs uppercase tracking-wider ${aesthetic === 'neumorphism' ? 'text-[#F98829] font-bold' : s.categoryText}`}>
                                                                            Key Functions &amp; Modules
                                                                        </p>
                                                                        <ul className={`list-disc list-inside space-y-2 text-sm leading-6 ${aesthetic === 'neo-brutalism' ? 'text-[#341C09]' : aesthetic === 'neumorphism' ? 'text-[#2D343F]' : 'text-zinc-300'}`}>
                                                                            {project.features.map((feature, idx) => (
                                                                                <li key={idx}>{feature}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )}

                                                                {currentTab === 'impact' && (
                                                                    <div className="space-y-2">
                                                                        <p className={`font-mono text-xs uppercase tracking-wider ${aesthetic === 'neumorphism' ? 'text-[#F98829] font-bold' : s.categoryText}`}>
                                                                            Project Outcome &amp; Value
                                                                        </p>
                                                                        <p className={`text-sm leading-7 ${aesthetic === 'neo-brutalism' ? 'text-[#341C09]' : aesthetic === 'neumorphism' ? 'text-[#2D343F]' : 'text-zinc-300'}`}>
                                                                            {project.impact}
                                                                        </p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>

                                                        {/* Repository link button / Internal notice */}
                                                        <div className={`mt-6 pt-4 ${aesthetic === 'neo-brutalism' ? 'border-t-2 border-[#341C09]' : aesthetic === 'neumorphism' ? 'border-t border-[#2D343F]/20' : 'border-t border-zinc-800'}`}>
                                                            {!project.confidential ? (
                                                                <a
                                                                    href={project.githubUrl}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    tabIndex={isExpanded ? 0 : -1}
                                                                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition ${s.button}`}
                                                                >
                                                                    <span>View Repository</span>
                                                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                    </svg>
                                                                </a>
                                                            ) : (
                                                                <span className={`inline-flex items-center gap-2 px-4 py-2 ${s.confidentialBadge}`}>
                                                                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                                    </svg>
                                                                    <span>Internal / Confidential Project Source Code</span>
                                                                </span>
                                                            )}
                                                        </div>
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