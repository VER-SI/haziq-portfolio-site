import { useState } from 'react';

export type DesignAesthetic = 'default' | 'neo-brutalism' | 'neumorphism';

type HeroProps = {
    aesthetic: DesignAesthetic;
};

export default function Hero({ aesthetic }: HeroProps) {
    const [imageFailed, setImageFailed] = useState(false);
    const [isCvModalOpen, setIsCvModalOpen] = useState(false);

    const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToSkills = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const primarySkills = [
        'SQL',
        'React',
        'TypeScript',
        'Laravel',
        'MySQL',
        'Figma',
    ];

    const getStyles = () => {
        switch (aesthetic) {
            case 'neo-brutalism':
                return {
                    sectionBg: 'bg-[#FEAB6D] text-[#341C09]',
                    titleText: 'text-[#341C09]',
                    accentText: 'text-[#FC7307]',
                    subText: 'text-[#9D4502]',
                    card: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] shadow-[6px_6px_0px_0px_#341C09] transition-transform hover:-translate-y-1',
                    buttonPrimary: 'rounded-none border-2 border-[#341C09] bg-[#FC7307] text-[#341C09] font-extrabold shadow-[4px_4px_0px_0px_#341C09] active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-[#e06505]',
                    buttonSecondary: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09] font-bold shadow-[4px_4px_0px_0px_#341C09] hover:bg-[#f6d7be]',
                    pill: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] font-mono text-xs font-bold text-[#341C09] shadow-[2px_2px_0px_0px_#341C09]',
                    modalCard: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] shadow-[8px_8px_0px_0px_#341C09]',
                    socialIcon: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09] shadow-[2px_2px_0px_0px_#341C09] hover:bg-[#341C09] hover:text-[#FFEBDC]',
                };
            case 'neumorphism':
                return {
                    sectionBg: 'bg-[#EBECF0] text-[#485160]',
                    titleText: 'text-[#2D343F]',
                    accentText: 'text-[#F98829]',
                    subText: 'text-[#F98829]',
                    card: 'rounded-3xl bg-[#EBECF0] p-3 shadow-[10px_10px_20px_#c8c9ce,-10px_-10px_20px_#ffffff]',
                    buttonPrimary: 'rounded-2xl bg-[#F98829] text-white font-bold shadow-[6px_6px_12px_#c8c9ce,-6px_-6px_12px_#ffffff] hover:bg-[#e0771f] active:shadow-[inset_4px_4px_8px_#bd5f13] transition-all',
                    buttonSecondary: 'rounded-2xl bg-[#EBECF0] text-[#485160] font-semibold shadow-[6px_6px_12px_#c8c9ce,-6px_-6px_12px_#ffffff] hover:text-[#F98829] active:shadow-[inset_4px_4px_8px_#c8c9ce,inset_-4px_-4px_8px_#ffffff] transition-all',
                    pill: 'rounded-xl bg-[#EBECF0] font-mono text-xs font-bold text-[#F98829] shadow-[inset_3px_3px_6px_#c8c9ce,inset_-3px_-3px_6px_#ffffff]',
                    modalCard: 'rounded-3xl bg-[#EBECF0] text-[#485160] shadow-[16px_16px_32px_#c8c9ce,-16px_-16px_32px_#ffffff]',
                    socialIcon: 'rounded-2xl bg-[#EBECF0] text-[#485160] shadow-[5px_5px_10px_#c8c9ce,-5px_-5px_10px_#ffffff] hover:text-[#F98829] active:shadow-[inset_3px_3px_6px_#c8c9ce,inset_-3px_-3px_6px_#ffffff]',
                };
            case 'default':
            default:
                return {
                    sectionBg: 'bg-zinc-950 text-zinc-100',
                    titleText: 'text-zinc-100',
                    accentText: 'text-orange-500',
                    subText: 'text-zinc-400',
                    card: 'rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/20 hover:border-orange-500/50',
                    buttonPrimary: 'rounded-lg bg-orange-600 text-white hover:bg-orange-500',
                    buttonSecondary: 'rounded-lg border border-zinc-700 bg-zinc-900/50 text-zinc-200 hover:border-orange-500 hover:bg-zinc-900 hover:text-orange-400',
                    pill: 'rounded-md border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-orange-500/40 hover:text-orange-400',
                    modalCard: 'rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl',
                    socialIcon: 'rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-orange-500/50 hover:text-orange-500',
                };
        }
    };

    const s = getStyles();

    return (
        <div className={`transition-colors duration-500 ${s.sectionBg}`}>
            <section
                id="home"
                className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-8 px-6 pt-8 pb-20 md:grid-cols-2 md:gap-12 md:py-20"
            >
                {/* Text & Action Column */}
                <div className="flex flex-col">
                    <div className="md:hidden">
                        <h1 className={`text-4xl font-bold leading-tight tracking-tight ${s.titleText}`}>
                            Hi, I’m <span className={s.accentText}>Haziq.</span>
                        </h1>
                        <p className={`mt-2 font-mono text-xs font-semibold uppercase tracking-wide ${s.subText}`}>
                            Software Developer &amp; Data Analyst
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <p className={`mb-4 font-mono text-sm font-semibold uppercase tracking-wide ${s.subText} lg:text-base`}>
                            Software Developer &amp; Data Analyst
                        </p>
                        <h1 className={`text-6xl font-bold leading-tight tracking-tight ${s.titleText}`}>
                            Hi, I’m <span className={s.accentText}>Haziq.</span>
                        </h1>
                    </div>

                    <div className="my-6 block w-full max-w-sm md:hidden">
                        <ProfileCard imageFailed={imageFailed} setImageFailed={setImageFailed} styleClasses={s.card} aesthetic={aesthetic} />
                    </div>

                    <p className={`mt-2 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 md:mt-6 ${
                        aesthetic === 'neo-brutalism' 
                            ? 'text-[#341C09] font-medium' 
                            : aesthetic === 'neumorphism' 
                            ? 'text-[#616B7C] font-medium' 
                            : 'text-zinc-400'
                    }`}>
                        I build practical web experiences and data-driven systems with Laravel, React, SQL, and TypeScript. With a background in UI/UX design and administration, I enjoy making applications that are clear, efficient, and impactful.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-2">
                        {primarySkills.map((skill) => (
                            <span
                                key={skill}
                                className={`px-3 py-1.5 font-mono text-xs font-medium transition ${s.pill}`}
                            >
                                {skill}
                            </span>
                        ))}
                        <a
                            href="#skills"
                            onClick={scrollToSkills}
                            className={`group flex items-center gap-1 px-3 py-1.5 font-mono text-xs font-semibold transition ${
                                aesthetic === 'neo-brutalism'
                                    ? 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] text-[#341C09] shadow-[2px_2px_0px_0px_#341C09]'
                                    : aesthetic === 'neumorphism'
                                    ? 'rounded-xl bg-[#EBECF0] text-[#F98829] shadow-[4px_4px_8px_#c8c9ce,-4px_-4px_8px_#ffffff] hover:text-[#2D343F]'
                                    : 'rounded-md border border-orange-500/40 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white'
                            }`}
                        >
                            <span>+6 More</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            onClick={scrollToProjects}
                            className={`group flex items-center px-5 py-3 text-sm font-semibold transition ${s.buttonPrimary}`}
                        >
                            Explore Projects
                            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true">↓</span>
                        </a>

                        <button
                            type="button"
                            onClick={() => setIsCvModalOpen(true)}
                            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold transition ${s.buttonSecondary}`}
                        >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>View My CV</span>
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-8 flex items-center gap-3">
                        <a
                            href="mailto:ziqhazri@gmail.com"
                            title="Send Email"
                            className={`flex h-10 w-10 items-center justify-center transition ${s.socialIcon}`}
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/haziq-hazri-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn Profile"
                            className={`flex h-10 w-10 items-center justify-center transition ${s.socialIcon}`}
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                        </a>

                        <a
                            href="https://github.com/VER-SI"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub Profile"
                            className={`flex h-10 w-10 items-center justify-center transition ${s.socialIcon}`}
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                            </svg>
                        </a>

                        <a
                            href="https://wa.me/6738995016"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Chat on WhatsApp"
                            className={`flex h-10 w-10 items-center justify-center transition ${s.socialIcon}`}
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="hidden mx-auto w-full max-w-sm md:block">
                    <ProfileCard imageFailed={imageFailed} setImageFailed={setImageFailed} styleClasses={s.card} aesthetic={aesthetic} />
                </div>
            </section>

            {/* CV Modal */}
            {isCvModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
                    <div className={`relative flex max-h-[90vh] w-full max-w-3xl flex-col p-6 overflow-hidden ${s.modalCard}`}>
                        <div className="flex items-center justify-between border-b border-[#485160]/20 pb-4">
                            <div>
                                <h3 className={`text-lg font-bold ${aesthetic === 'neumorphism' ? 'text-[#2D343F]' : 'text-zinc-100'}`}>Curriculum Vitae Preview</h3>
                                <p className={`text-xs ${aesthetic === 'neumorphism' ? 'text-[#F98829]' : 'text-zinc-400'}`}>Haziq — Software Developer &amp; Data Analyst</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href="/images/cv.jpg"
                                    download="Haziq_CV.jpg"
                                    className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white transition ${s.buttonPrimary}`}
                                >
                                    Download (JPG)
                                </a>
                                <button
                                    onClick={() => setIsCvModalOpen(false)}
                                    className={`rounded-lg p-1.5 transition ${aesthetic === 'neumorphism' ? 'text-[#485160] hover:bg-[#c8c9ce]/50 hover:text-[#F98829]' : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'}`}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 flex-1 overflow-y-auto rounded-lg border border-[#485160]/20 bg-[#EBECF0] p-2">
                            <img src="/images/cv.jpg" alt="CV" className="w-full rounded object-contain" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function ProfileCard({ imageFailed, setImageFailed, styleClasses, aesthetic }: { imageFailed: boolean; setImageFailed: (val: boolean) => void; styleClasses: string; aesthetic: DesignAesthetic }) {
    return (
        <div className={`group relative overflow-hidden p-3 transition duration-300 hover:-translate-y-1 ${styleClasses}`}>
            <div className={`aspect-[4/5] overflow-hidden rounded-2xl ${aesthetic === 'neumorphism' ? 'bg-[#EBECF0] shadow-[inset_6px_6px_12px_#c8c9ce,inset_-6px_-6px_12px_#ffffff]' : 'bg-zinc-800'}`}>
                {!imageFailed ? (
                    <img
                        src="/images/profile.jpeg"
                        alt="Profile photo of Haziq"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        onError={() => setImageFailed(true)}
                    />
                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-900 to-orange-950/50">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full border border-orange-500/40 bg-zinc-900 text-5xl font-bold text-orange-500">
                            H
                        </div>
                        <code className="mt-1 text-xs text-orange-400">public/images/profile.jpeg</code>
                    </div>
                )}
            </div>

            <div className={`absolute bottom-6 left-6 px-4 py-3 backdrop-blur ${
                aesthetic === 'neo-brutalism'
                    ? 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] shadow-[3px_3px_0px_0px_#341C09]'
                    : aesthetic === 'neumorphism'
                    ? 'rounded-2xl bg-[#EBECF0] shadow-[6px_6px_12px_#c8c9ce,-6px_-6px_12px_#ffffff]'
                    : 'rounded-lg border border-zinc-700 bg-zinc-950/90'
            }`}>
                <p className={`text-sm font-semibold ${aesthetic === 'neo-brutalism' ? 'text-[#341C09]' : aesthetic === 'neumorphism' ? 'text-[#2D343F]' : 'text-zinc-100'}`}>Haziq</p>
                <p className={`mt-1 font-mono text-xs ${aesthetic === 'neo-brutalism' ? 'text-[#9D4502] font-bold' : aesthetic === 'neumorphism' ? 'text-[#F98829] font-bold' : 'text-orange-400'}`}>
                    Software Developer &amp; Data Analyst
                </p>
            </div>
        </div>
    );
}