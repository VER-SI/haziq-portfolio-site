import { type DesignAesthetic } from './Hero';

type ContactProps = {
    aesthetic: DesignAesthetic;
};

const email = 'ziqhazri@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/haziq-hazri-dev';
const githubUrl = 'https://github.com/VER-SI';
const whatsappUrl = 'https://wa.me/6738995016';

export default function Contact({ aesthetic }: ContactProps) {
    const getStyles = () => {
        switch (aesthetic) {
            case 'neo-brutalism':
                return {
                    sectionBg: 'bg-[#FFEBDC] text-[#341C09]',
                    categoryText: 'text-[#FC7307]',
                    titleText: 'text-[#341C09]',
                    summaryText: 'text-[#341C09]',
                    cardContainer: 'rounded-none border-2 border-[#341C09] bg-[#FEAB6D] px-6 py-12 text-center shadow-[8px_8px_0px_0px_#341C09] sm:px-12',
                    buttonPrimary: 'rounded-none border-2 border-[#341C09] bg-[#FC7307] px-5 py-3 text-sm font-extrabold text-[#341C09] shadow-[4px_4px_0px_0px_#341C09] active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-[#e06505] transition-all',
                    buttonSecondary: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] px-5 py-3 text-sm font-bold text-[#341C09] shadow-[4px_4px_0px_0px_#341C09] active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-[#f6d7be] transition-all',
                    divider: 'border-t-2 border-[#341C09]',
                    footerDivider: 'border-t-2 border-[#341C09]',
                };
            case 'neumorphism':
                return {
                    sectionBg: 'bg-[#F98829] text-white',
                    categoryText: 'text-white font-bold',
                    titleText: 'text-white',
                    summaryText: 'text-white/95',
                    cardContainer: 'rounded-3xl bg-[#EBECF0] text-[#2D343F] shadow-[10px_10px_20px_#d47322,-10px_-10px_20px_#ff9d30] px-6 py-12 text-center sm:px-12',
                    buttonPrimary: 'inline-flex items-center gap-2 rounded-xl bg-[#EBECF0] px-5 py-3 text-sm font-semibold text-[#F98829] shadow-[3px_3px_6px_#c8c9ce,-3px_-3px_6px_#ffffff] transition hover:text-[#2D343F]',
                    buttonSecondary: 'inline-flex items-center gap-2 rounded-xl bg-[#EBECF0] px-5 py-3 text-sm font-semibold text-[#2D343F] shadow-[3px_3px_6px_#c8c9ce,-3px_-3px_6px_#ffffff] transition hover:text-[#F98829]',
                    divider: 'border-t-2 border-white/20',
                    footerDivider: 'border-t-2 border-white/20',
                };
            case 'default':
            default:
                return {
                    sectionBg: 'bg-zinc-950 text-zinc-100',
                    categoryText: 'text-orange-500',
                    titleText: 'text-zinc-100',
                    summaryText: 'text-zinc-400',
                    cardContainer: 'rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-12 text-center shadow-xl shadow-black/20 sm:px-12',
                    buttonPrimary: 'inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500',
                    buttonSecondary: 'inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-orange-500 hover:text-orange-500',
                    divider: 'border-t border-zinc-800',
                    footerDivider: 'border-t border-zinc-800/80',
                };
        }
    };

    const s = getStyles();

    return (
        <div className={`transition-colors duration-500 ${s.sectionBg}`}>
            <section
                id="contact"
                className={`py-20 ${s.divider}`}
            >
                <div className="mx-auto max-w-6xl px-6 pt-0 pb-12">
                    {/* Contact Card */}
                    <div className={s.cardContainer}>
                        <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${aesthetic === 'neumorphism' ? 'text-[#F98829] font-bold' : s.categoryText}`}>
                            Have a project or opportunity?
                        </p>
                        <h2 className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${aesthetic === 'neumorphism' ? 'text-[#2D343F]' : s.titleText}`}>
                            Get In Touch
                        </h2>
                        <div className={`mx-auto mt-3 h-1 w-12 rounded-full ${aesthetic === 'neo-brutalism' ? 'bg-[#341C09]' : aesthetic === 'neumorphism' ? 'bg-[#F98829]' : 'bg-white'}`}></div>
                        <p className={`mx-auto mt-4 max-w-xl text-sm leading-7 ${aesthetic === 'neumorphism' ? 'text-[#5A6578]' : s.summaryText}`}>
                            I’m happy to connect about software development,
                            collaboration, or opportunities. Feel free to reach out.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            {/* Email Button */}
                            <a
                                href={`mailto:${email}`}
                                className={s.buttonPrimary}
                            >
                                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>ziqhazri@gmail.com</span>
                            </a>

                            {/* WhatsApp Button */}
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={s.buttonSecondary}
                            >
                                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                </svg>
                                <span>+673 899 5016</span>
                            </a>

                            {/* LinkedIn Button */}
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={s.buttonSecondary}
                            >
                                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                </svg>
                                <span>haziq-hazri-dev</span>
                            </a>

                            {/* GitHub Button */}
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={s.buttonSecondary}
                            >
                                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                </svg>
                                <span>VER-SI</span>
                            </a>
                        </div>
                    </div>

                    {/* Minimal Footer Area */}
                    <div className={`mt-16 flex flex-col items-center justify-between gap-4 pt-8 text-center text-xs sm:flex-row ${s.footerDivider} ${aesthetic === 'neo-brutalism' ? 'text-[#341C09] font-medium' : aesthetic === 'neumorphism' ? 'text-white/90' : 'text-zinc-500'}`}>
                        <p>
                            © {new Date().getFullYear()} Haziq. All rights reserved.
                        </p>
                        <p className="font-mono">
                            Designed &amp; Built with React &amp; Tailwind CSS
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}