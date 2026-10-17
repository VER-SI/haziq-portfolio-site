import { useState } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
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
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="text-xs font-medium text-zinc-400 transition hover:text-orange-400"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/cv.pdf"
                        target="_blank"
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
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-sm font-medium text-zinc-300 transition hover:text-orange-400"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/cv.pdf"
                            target="_blank"
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