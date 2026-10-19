import { useState, useEffect } from 'react';

export default function Navbar() {
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

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo / Brand Name */}
                <a
                    href="#home"
                    onClick={(e) => handleScroll(e, '#home')}
                    className="font-mono text-base font-bold text-zinc-100 transition hover:text-orange-500"
                >
                    Haziq<span className="text-orange-500">.dev</span>
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
                                className={`relative py-1 text-xs font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full ${
                                    isActive
                                        ? 'text-orange-400 font-semibold after:w-full'
                                        : 'text-zinc-400 hover:text-orange-400'
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
                        className="rounded-lg border border-orange-500/40 bg-orange-500/10 px-3.5 py-1.5 text-xs font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-white"
                    >
                        Resume / CV
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:text-orange-400 md:hidden"
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
                <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-6 md:hidden">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => {
                            const targetId = link.href.replace('#', '');
                            const isActive = activeSection === targetId;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className={`text-sm font-medium transition hover:text-orange-400 ${
                                        isActive ? 'text-orange-400 font-semibold' : 'text-zinc-300'
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
                            className="mt-2 text-center rounded-lg border border-orange-500/50 bg-orange-500/10 px-4 py-2.5 text-xs font-semibold text-orange-400"
                        >
                            View Resume / CV
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}