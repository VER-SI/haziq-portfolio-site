import { useState } from 'react';
import { skillCategories } from '../data/skillsData';
import { type DesignAesthetic } from './Hero';

type SkillsProps = {
    aesthetic: DesignAesthetic;
};

export default function Skills({ aesthetic }: SkillsProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // Defensive fallback to prevent crashes if dataset is undefined/empty
    const categories = skillCategories || [];

    const filteredCategories = selectedCategory === 'all' 
        ? categories 
        : categories.filter((cat) => cat.id === selectedCategory);

    const getStyles = () => {
        switch (aesthetic) {
            case 'neo-brutalism':
                return {
                    sectionBg: 'bg-[#FEAB6D] text-[#341C09]',
                    categoryText: 'text-[#FC7307]',
                    titleText: 'text-[#341C09]',
                    summaryText: 'text-[#341C09]',
                    counterText: 'text-[#341C09]',
                    cardContainer: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] p-6 shadow-[6px_6px_0px_0px_#341C09] transition-transform hover:-translate-y-1',
                    filterActive: 'rounded-none border-2 border-[#341C09] bg-[#FC7307] text-[#341C09] font-extrabold shadow-[3px_3px_0px_0px_#341C09]',
                    filterInactive: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09] font-bold hover:bg-[#f6d7be]',
                    pill: 'rounded-none border-2 border-[#341C09] bg-[#FEAB6D] font-mono text-xs font-bold text-[#341C09] shadow-[2px_2px_0px_0px_#341C09]',
                    countBadge: 'rounded-none border-2 border-[#341C09] bg-[#FC7307] px-2 py-0.5 font-mono text-[10px] font-bold text-[#341C09]',
                    divider: 'border-t-2 border-[#341C09]',
                    navBorder: 'border-b-2 border-[#341C09]',
                };
            case 'neumorphism':
                return {
                    sectionBg: 'bg-[#EBECF0] text-[#2D343F]',
                    categoryText: 'text-[#F98829]',
                    titleText: 'text-[#2D343F]',
                    summaryText: 'text-[#5A6578]',
                    counterText: 'text-[#F98829]',
                    cardContainer: 'group flex flex-col justify-between rounded-3xl bg-[#EBECF0] p-6 text-[#2D343F] shadow-[10px_10px_20px_#c8c9ce,-10px_-10px_20px_#ffffff]',
                    filterActive: 'rounded-xl bg-[#EBECF0] text-[#F98829] font-bold shadow-[inset_3px_3px_6px_#c8c9ce,inset_-3px_-3px_6px_#ffffff]',
                    filterInactive: 'rounded-xl bg-[#EBECF0] text-[#2D343F] font-semibold shadow-[3px_3px_6px_#c8c9ce,-3px_-3px_6px_#ffffff] hover:text-[#F98829]',
                    pill: 'rounded-xl bg-[#EBECF0] px-3 py-1.5 font-mono text-xs font-semibold text-[#2D343F] shadow-[3px_3px_6px_#c8c9ce,-3px_-3px_6px_#ffffff]',
                    countBadge: 'rounded-lg bg-[#EBECF0] px-2 py-0.5 font-mono text-[10px] font-bold text-[#F98829] shadow-[inset_2px_2px_4px_#c8c9ce,inset_-2px_-2px_4px_#ffffff]',
                    divider: 'border-t-2 border-[#2D343F]/15',
                    navBorder: 'border-b-2 border-[#2D343F]/15',
                };
            case 'default':
            default:
                return {
                    sectionBg: 'bg-zinc-950 text-zinc-100',
                    categoryText: 'text-orange-500',
                    titleText: 'text-zinc-100',
                    summaryText: 'text-zinc-400',
                    counterText: 'text-orange-500',
                    cardContainer: 'group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:border-orange-500/50 hover:bg-zinc-900/80 shadow-xl shadow-black/20',
                    filterActive: 'rounded-lg bg-orange-500 text-white shadow-lg shadow-orange-500/20',
                    filterInactive: 'rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200',
                    pill: 'rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 font-mono text-xs text-zinc-300 transition hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-300',
                    countBadge: 'rounded bg-orange-500/10 px-2 py-0.5 font-mono text-[10px] text-orange-400',
                    divider: 'border-t border-zinc-800',
                    navBorder: 'border-b border-zinc-800',
                };
        }
    };

    const s = getStyles();

    return (
        <div className={`transition-colors duration-500 ${s.sectionBg}`}>
            <section id="skills" className={`py-20 ${s.divider}`}>
                <div className="mx-auto max-w-6xl px-6">
                    {/* Section Header */}
                    <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${s.categoryText}`}>
                                Capabilities &amp; Expertise
                            </p>
                            <h2 className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${s.titleText}`}>
                                Skills &amp; Competencies
                            </h2>
                            <div className={`mt-3 h-1 w-12 rounded-full ${aesthetic === 'neo-brutalism' ? 'bg-[#341C09]' : 'bg-[#F98829]'}`}></div>
                            <p className={`mt-4 max-w-2xl text-sm leading-7 ${s.summaryText}`}>
                                A breakdown of my technical stack, data analytics tools, administrative background, and professional soft skills.
                            </p>
                        </div>

                        {/* Total Skills Counter */}
                        <div className="hidden lg:block text-right shrink-0">
                            <span className={`font-mono text-2xl font-bold ${s.counterText}`}>
                                {categories.reduce((acc, cat) => acc + (cat.skills?.length || 0), 0)}+
                            </span>
                            <p className={`text-xs font-mono ${aesthetic === 'neo-brutalism' ? 'text-[#9D4502] font-bold' : aesthetic === 'neumorphism' ? 'text-[#5A6578] font-medium' : 'text-zinc-500'}`}>
                                Total Tracked Skills
                            </p>
                        </div>
                    </div>

                    {/* Filter Category Navigation Bar */}
                    <div className={`mb-12 flex flex-wrap gap-2 pb-6 ${s.navBorder}`}>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory('all')}
                            className={`px-4 py-2 text-xs font-mono font-medium transition ${
                                selectedCategory === 'all' ? s.filterActive : s.filterInactive
                            }`}
                        >
                            All Categories
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-2 text-xs font-mono font-medium transition ${
                                    selectedCategory === cat.id ? s.filterActive : s.filterInactive
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
                                className={s.cardContainer}
                            >
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className={`text-lg font-bold ${aesthetic === 'neumorphism' ? 'text-[#2D343F]' : s.titleText}`}>
                                            {category.name}
                                        </h3>
                                        <span className={s.countBadge}>
                                            {category.skills?.length || 0} skills
                                        </span>
                                    </div>
                                    <p className={`mt-2 text-xs leading-5 ${aesthetic === 'neumorphism' ? 'text-[#5A6578]' : s.summaryText}`}>
                                        {category.description}
                                    </p>

                                    {/* Skill Pills */}
                                    <ul className="mt-6 flex flex-wrap gap-2">
                                        {category.skills?.map((skill) => (
                                            <li
                                                key={skill}
                                                className={`px-3 py-1.5 font-mono text-xs ${s.pill}`}
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
        </div>
    );
}