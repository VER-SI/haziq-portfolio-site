import { useState, useEffect } from 'react';
import { type DesignAesthetic } from './Hero';

type NavbarProps = {
    aesthetic: DesignAesthetic;
};

export default function Navbar({ aesthetic }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    // Track active section on scroll using IntersectionObserver
    useEffect(() => {
        const sections = navLinks
            .map((link) => document.getElementById(link.href.replace('#', '')))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, [navLinks]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(targetId);
        }
    };

    const getStyles = () => {
        switch (aesthetic) {
            case 'neo-brutalism':
                return {
                    headerBg: 'bg-[#341C09] text-[#FFEBDC] border-b-2 border-[#341C09]',
                    logo: 'text-[#FFEBDC] hover:text-[#FC7307]',
                    logoAccent: 'text-[#FC7307]',
                    navActive: 'text-[#FC7307] font-extrabold underline decoration-2 decoration-[#FEAB6D]',
                    navInactive: 'text-[#FFEBDC] font-bold hover:text-[#FC7307]',
                    resumeBtn: 'rounded-none border-2 border-[#FFEBDC] bg-[#FC7307] px-3.5 py-1.5 text-xs font-extrabold text-[#341C09] shadow-[2px_2px_0px_0px_#FFEBDC] hover:bg-[#FEAB6D] transition-all',
                    mobileBtn: 'rounded-none border-2 border-[#FFEBDC] bg-[#FC7307] text-[#341C09] shadow-[2px_2px_0px_0px_#FFEBDC] hover:bg-[#FEAB6D]',
                    mobileDrawer: 'border-b-2 border-[#341C09] bg-[#341C09]',
                    mobileResumeBtn: 'rounded-none border-2 border-[#FFEBDC] bg-[#FC7307] px-4 py-2.5 text-xs font-extrabold text-[#341C09] shadow-[2px_2px_0px_0px_#FFEBDC] hover:bg-[#FEAB6D]',
                };
            case 'neumorphism':
                return {
                    headerBg: 'bg-zinc-950/80 text-zinc-100 border-b border-zinc-800/80',
                    logo: 'text-zinc-100 hover:text-orange-500',
                    logoAccent: 'text-orange-500',
                    navActive: 'text-orange-400 font-semibold after:w-full',
                    navInactive: 'text-zinc-400 hover:text-orange-400',
                    resumeBtn: 'rounded-xl border border-orange-500/40 bg-orange-500/10 px-3.5 py-1.5 text-xs font-semibold text-orange-400 hover:bg-orange-500 hover:text-white shadow-[2px_2px_5px_#09090b]',
                    mobileBtn: 'rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-orange-400',
                    mobileDrawer: 'border-b border-zinc-800 bg-zinc-950',
                    mobileResumeBtn: 'mt-2 text-center rounded-xl border border-orange-500/50 bg-orange-500/10 px-4 py-2.5 text-xs font-semibold text-orange-400',
                };
            case 'default':
            default:
                return {
                    headerBg: 'bg-zinc-950/80 text-zinc-100 border-b border-zinc-800/80',
                    logo: 'text-zinc-100 hover:text-orange-500',
                    logoAccent: 'text-orange-500',
                    navActive: 'text-orange-400 font-semibold after:w-full',
                    navInactive: 'text-zinc-400 hover:text-orange-400',
                    resumeBtn: 'rounded-lg border border-orange-500/40 bg-orange-500/10 px-3.5 py-1.5 text-xs font-semibold text-orange-400 hover:bg-orange-500 hover:text-white',
                    mobileBtn: 'rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-orange-400',
                    mobileDrawer: 'border-b border-zinc-800 bg-zinc-950',
                    mobileResumeBtn: 'mt-2 text-center rounded-lg border border-orange-500/50 bg-orange-500/10 px-4 py-2.5 text-xs font-semibold text-orange-400',
                };
        }
    };

    const s = getStyles();

    return (
        <header className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-500 ${s.headerBg}`}>
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo / Brand Name */}
                <a
                    href="#home"
                    onClick={(e) => handleScroll(e, '#home')}
                    className={`font-mono text-base font-bold transition ${s.logo}`}
                >
                    Haziq<span className={s.logoAccent}>.dev</span>
                </a>

                {/* Desktop Links */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => {
                        const targetId = link.href.replace('#', '');
                        const isActive = activeSection === targetId;

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className={`relative py-1 text-xs font-medium transition-colors duration-200 ${
                                    aesthetic !== 'neo-brutalism'
                                        ? 'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full'
                                        : ''
                                } ${
                                    isActive ? s.navActive : s.navInactive
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                    <a
                        href="/images/cv.jpg"
                        target="_blank"
                        download="Haziq_CV.jpg"
                        rel="noopener noreferrer"
                        className={s.resumeBtn}
                    >
                        Resume / CV
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`flex h-9 w-9 items-center justify-center transition md:hidden ${s.mobileBtn}`}
                    aria-label="Toggle Navigation"
                >
                    {mobileMenuOpen ? (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className={`px-6 py-6 md:hidden ${s.mobileDrawer}`}>
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => {
                            const targetId = link.href.replace('#', '');
                            const isActive = activeSection === targetId;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className={`text-sm font-medium transition ${
                                        isActive ? s.navActive : s.navInactive
                                    }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <a
                            href="/images/cv.jpg"
                            target="_blank"
                            download="Haziq_CV.jpg"
                            rel="noopener noreferrer"
                            className={s.mobileResumeBtn}
                        >
                            View Resume / CV
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}