import { useState } from 'react';
import { projects, type Project } from '../data/projectsData';

function ProjectImage({ project }: { project: Project }) {
    const [imageFailed, setImageFailed] = useState(false);

    if (project.confidential) {
        return (
            <div className="flex aspect-video w-full flex-col items-center justify-center rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-6 text-center shadow-inner">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <p className="mt-3 text-sm font-semibold text-zinc-200">
                    Confidential Project Preview
                </p>
                <p className="mt-1.5 max-w-xs text-xs text-zinc-500 leading-5">
                    {project.confidentialNote}
                </p>
            </div>
        );
    }

    if (imageFailed) {
        return (
            <div className="flex aspect-video items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 p-6 text-center">
                <div>
                    <p className="font-semibold text-zinc-300">{project.name}</p>
                    <p className="mt-2 text-xs text-zinc-500">
                        Add a screenshot at
                    </p>
                    <code className="mt-1 block text-xs text-orange-400">
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
            className="aspect-video w-full rounded-lg border border-zinc-800 bg-zinc-950 object-cover"
            onError={() => setImageFailed(true)}
        />
    );
}

export default function Projects() {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);
    const [activeTabs, setActiveTabs] = useState<{ [key: string]: string }>({});

    const handleTabChange = (projectId: string, tab: string) => {
        setActiveTabs((prev) => ({ ...prev, [projectId]: tab }));
    };

    return (
        <section id="projects" className="border-t border-zinc-800 bg-zinc-900/40 py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-14">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-400">
                        Portfolio
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Featured Projects
                    </h2>
                    <div className="mt-3 h-1 w-12 rounded-full bg-orange-500"></div>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
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
                                className="border-t border-zinc-800 pt-16 first:border-0 first:pt-0"
                            >
                                {/* Project header info */}
                                <div className="mb-4 pl-1">
                                    <h3 className="text-2xl font-bold text-zinc-100">
                                        <span className="mr-2 font-mono text-orange-500">
                                            {String(index + 1).padStart(2, '0')}.
                                        </span>
                                        {project.name}
                                    </h3>
                                    <div className="mt-1 flex flex-wrap items-center gap-2">
                                        <p className="font-mono text-xs font-medium uppercase tracking-wider text-orange-500">
                                            {project.category}
                                        </p>
                                        {project.prototypeNote && (
                                            <span className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-[10px] font-medium text-zinc-400">
                                                Prototype
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
                                        {project.summary}
                                    </p>
                                </div>

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
                                        onClick={() =>
                                            setExpandedProject(
                                                isExpanded ? null : project.id,
                                            )
                                        }
                                        className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 ${
                                            isExpanded
                                                ? 'border-b border-orange-500/20 bg-orange-500/10'
                                                : 'hover:bg-zinc-800/40'
                                        }`}
                                    >
                                        <span
                                            className={`text-sm font-medium ${
                                                isExpanded
                                                    ? 'font-semibold text-orange-400'
                                                    : 'text-zinc-300'
                                            }`}
                                        >
                                            {isExpanded
                                                ? 'Hide project details'
                                                : 'Click to expand project details & features'}
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
                                                    <ProjectImage project={project} />
                                                    
                                                    {/* Tech stack badges */}
                                                    <div className="mt-6">
                                                        <p className="mb-2 text-xs font-medium text-zinc-400">
                                                            Tools &amp; Technologies
                                                        </p>
                                                        <ul className="flex flex-wrap gap-2">
                                                            {project.technologies.map(
                                                                (technology) => (
                                                                    <li
                                                                        key={technology}
                                                                        className="rounded-md border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs text-orange-300"
                                                                    >
                                                                        {technology}
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col justify-between">
                                                    <div>
                                                        {/* Sub-content switch buttons */}
                                                        <div className="flex gap-2 border-b border-zinc-800 pb-3">
                                                            <button
                                                                onClick={() => handleTabChange(project.id, 'overview')}
                                                                className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                                                                    currentTab === 'overview'
                                                                        ? 'bg-orange-500 text-white'
                                                                        : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                                                                }`}
                                                            >
                                                                Overview
                                                            </button>
                                                            <button
                                                                onClick={() => handleTabChange(project.id, 'features')}
                                                                className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                                                                    currentTab === 'features'
                                                                        ? 'bg-orange-500 text-white'
                                                                        : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                                                                }`}
                                                            >
                                                                Key Features
                                                            </button>
                                                            <button
                                                                onClick={() => handleTabChange(project.id, 'impact')}
                                                                className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                                                                    currentTab === 'impact'
                                                                        ? 'bg-orange-500 text-white'
                                                                        : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                                                                }`}
                                                            >
                                                                Impact
                                                            </button>
                                                        </div>

                                                        {/* Tab Content Panels */}
                                                        <div className="mt-4 min-h-[140px]">
                                                            {currentTab === 'overview' && (
                                                                <div className="space-y-2">
                                                                    <p className="font-mono text-xs uppercase tracking-wider text-orange-500">
                                                                        About this project
                                                                    </p>
                                                                    <p className="text-sm leading-7 text-zinc-300">
                                                                        {project.details}
                                                                    </p>
                                                                    {project.prototypeNote && (
                                                                        <p className="mt-2 text-xs text-orange-400/90 italic">
                                                                            Note: {project.prototypeNote}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            )}

                                                            {currentTab === 'features' && (
                                                                <div className="space-y-2">
                                                                    <p className="font-mono text-xs uppercase tracking-wider text-orange-500">
                                                                        Key Functions &amp; Modules
                                                                    </p>
                                                                    <ul className="list-disc list-inside space-y-2 text-sm leading-6 text-zinc-300">
                                                                        {project.features.map((feature, idx) => (
                                                                            <li key={idx}>{feature}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}

                                                            {currentTab === 'impact' && (
                                                                <div className="space-y-2">
                                                                    <p className="font-mono text-xs uppercase tracking-wider text-orange-500">
                                                                        Project Outcome &amp; Value
                                                                    </p>
                                                                    <p className="text-sm leading-7 text-zinc-300">
                                                                        {project.impact}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Repository link button / Internal notice */}
                                                    <div className="mt-6 border-t border-zinc-800 pt-4">
                                                        {!project.confidential ? (
                                                            <a
                                                                href={project.githubUrl}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                tabIndex={isExpanded ? 0 : -1}
                                                                className="inline-flex items-center gap-2 rounded-lg border border-orange-500/50 px-4 py-2 text-sm font-medium text-orange-400 transition hover:bg-orange-500/10"
                                                            >
                                                                <span>View Repository</span>
                                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                </svg>
                                                            </a>
                                                        ) : (
                                                            <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-medium text-zinc-500">
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
    );
}