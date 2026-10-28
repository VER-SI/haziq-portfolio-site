import { useState } from 'react';
import { skillCategories } from '../data/skillsData';

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredCategories = selectedCategory === 'all' 
        ? skillCategories 
        : skillCategories.filter((cat) => cat.id === selectedCategory);

    return (
        <section id="skills" className="border-t border-zinc-800 bg-zinc-950 py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section Header with Accent Indicator */}
                <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-400">
                            Capabilities &amp; Expertise
                        </p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                            Skills &amp; Competencies
                        </h2>
                        <div className="mt-3 h-1 w-12 rounded-full bg-orange-500"></div>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                            A breakdown of my technical stack, data analytics tools, administrative background, and professional soft skills.
                        </p>
                    </div>

                    {/* Total Skills Counter */}
                    <div className="hidden lg:block text-right shrink-0">
                        <span className="font-mono text-2xl font-bold text-orange-500">
                            {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}+
                        </span>
                        <p className="text-xs text-zinc-500 font-mono">Total Tracked Skills</p>
                    </div>
                </div>

                {/* Filter Category Navigation Bar */}
                <div className="mb-12 flex flex-wrap gap-2 border-b border-zinc-800 pb-6">
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`rounded-lg px-4 py-2 text-xs font-mono font-medium transition ${
                            selectedCategory === 'all'
                                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                                : 'border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                        }`}
                    >
                        All Categories
                    </button>
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`rounded-lg px-4 py-2 text-xs font-mono font-medium transition ${
                                selectedCategory === cat.id
                                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                                    : 'border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Skills Grid / Category Cards */}
                <div className="grid gap-8 md:grid-cols-2">
                    {filteredCategories.map((category) => (
                        <div
                            key={category.id}
                            className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:border-orange-500/50 hover:bg-zinc-900/80 shadow-xl shadow-black/20"
                        >
                            <div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-zinc-100 group-hover:text-orange-400 transition-colors">
                                        {category.name}
                                    </h3>
                                    <span className="rounded bg-orange-500/10 px-2 py-0.5 font-mono text-[10px] text-orange-400">
                                        {category.skills.length} skills
                                    </span>
                                </div>
                                <p className="mt-2 text-xs leading-5 text-zinc-400">
                                    {category.description}
                                </p>

                                {/* Skill Pills */}
                                <ul className="mt-6 flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 font-mono text-xs text-zinc-300 transition hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-300"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}