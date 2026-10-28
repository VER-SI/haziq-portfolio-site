import { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Define the design choices type
export type DesignAesthetic = 'default' | 'neo-brutalism' | 'neumorphism';

export default function App() {
  // State to track which design is currently active
  const [aesthetic, setAesthetic] = useState<DesignAesthetic>('default');
  // State to toggle the mobile view drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getAppStyles = () => {
    switch (aesthetic) {
      case 'neo-brutalism':
        return {
          rootBg: 'bg-[#FFEBDC] text-[#341C09]',
          toolbar: 'rounded-none border-2 border-[#341C09] bg-[#FEAB6D] px-4 py-2 shadow-[6px_6px_0px_0px_#341C09]',
          label: 'font-mono text-xs text-[#341C09] font-bold mr-1',
          buttonActive: 'rounded-none border-2 border-[#341C09] bg-[#FC7307] px-3 py-1 font-mono text-xs font-extrabold text-[#341C09] shadow-[2px_2px_0px_0px_#341C09]',
          buttonInactive: 'rounded-none border-2 border-[#341C09] bg-[#FFEBDC] px-3 py-1 font-mono text-xs font-bold text-[#341C09] hover:bg-[#f6d7be]',
          mobileToggleBtn: 'rounded-none border-2 border-[#341C09] bg-[#FC7307] px-3.5 py-2 font-mono text-xs font-extrabold text-[#341C09] shadow-[2px_2px_0px_0px_#341C09]',
        };
      case 'neumorphism':
        return {
          rootBg: 'bg-zinc-950 text-zinc-100',
          toolbar: 'rounded-2xl bg-white px-4 py-2 shadow-[10px_10px_30px_rgba(0,0,0,0.15),-5px_-5px_15px_rgba(255,255,255,0.8)] transition-all duration-500',
          label: 'font-mono text-xs text-[#2D343F] font-bold mr-1',
          buttonActive: 'rounded-xl bg-[#F98829] px-3.5 py-1 font-mono text-xs font-bold text-white shadow-[3px_3px_6px_#d47322,-3px_-3px_6px_#ff9d30]',
          buttonInactive: 'rounded-xl bg-[#EBECF0] px-3.5 py-1 font-mono text-xs font-semibold text-[#2D343F] shadow-[3px_3px_6px_#c8c9ce,-3px_-3px_6px_#ffffff] hover:text-[#F98829] transition-all',
          mobileToggleBtn: 'rounded-xl bg-[#F98829] px-3.5 py-2 font-mono text-xs font-semibold text-white shadow-[3px_3px_6px_#d47322,-3px_-3px_6px_#ff9d30]',
        };
      case 'default':
      default:
        return {
          rootBg: 'bg-zinc-950 text-zinc-100',
          toolbar: 'rounded-2xl border border-zinc-700 bg-zinc-900/90 px-4 py-2 shadow-2xl backdrop-blur-md',
          label: 'font-mono text-xs text-zinc-400 mr-1',
          buttonActive: 'rounded-2xl bg-orange-500 px-3 py-1 font-mono text-xs font-medium text-white',
          buttonInactive: 'rounded-2xl px-3 py-1 font-mono text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-all',
          mobileToggleBtn: 'rounded-2xl bg-orange-600 px-3.5 py-2 font-mono text-xs font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-500 transition-all',
        };
    }
  };

  const s = getAppStyles();

  return (
    <div className={`min-h-screen antialiased scroll-smooth transition-colors duration-500 ${s.rootBg}`}>
      <Navbar aesthetic={aesthetic} />
      
      <main>
        <Hero aesthetic={aesthetic} />
        <Projects aesthetic={aesthetic} />
        <Experience aesthetic={aesthetic} />
        <Education aesthetic={aesthetic} />
        <Skills aesthetic={aesthetic} />
        <Contact aesthetic={aesthetic} />
      </main>

      {/* Floating Design Aesthetic Switcher Toolbar */}
      <aside aria-label="Design Aesthetic Switcher" className="fixed bottom-6 right-6 z-50">
        {/* Mobile View: Collapsed Toggle Button */}
        <div className="block sm:hidden">
          {!mobileMenuOpen ? (
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={s.mobileToggleBtn}
            >
              Change Design
            </button>
          ) : (
            <div className={`flex flex-col gap-2 p-3 ${s.toolbar}`}>
              <div className="flex items-center justify-between pb-1">
                <span className={s.label}>Style:</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-xs font-bold opacity-70 hover:opacity-100"
                >
                  ✕
                </button>
              </div>
              <button
                type="button"
                onClick={() => { setAesthetic('default'); setMobileMenuOpen(false); }}
                className={aesthetic === 'default' ? s.buttonActive : s.buttonInactive}
              >
                Default
              </button>
              <button
                type="button"
                onClick={() => { setAesthetic('neo-brutalism'); setMobileMenuOpen(false); }}
                className={aesthetic === 'neo-brutalism' ? s.buttonActive : s.buttonInactive}
              >
                Neo-Brutalism
              </button>
              <button
                type="button"
                onClick={() => { setAesthetic('neumorphism'); setMobileMenuOpen(false); }}
                className={aesthetic === 'neumorphism' ? s.buttonActive : s.buttonInactive}
              >
                Neumorphism
              </button>
            </div>
          )}
        </div>

        {/* Desktop View: Always Expanded Bar */}
        <div className={`hidden sm:flex items-center gap-2 ${s.toolbar}`}>
          <span className={s.label}>Style:</span>
          
          <button
            type="button"
            onClick={() => setAesthetic('default')}
            className={aesthetic === 'default' ? s.buttonActive : s.buttonInactive}
          >
            Default
          </button>

          <button
            type="button"
            onClick={() => setAesthetic('neo-brutalism')}
            className={aesthetic === 'neo-brutalism' ? s.buttonActive : s.buttonInactive}
          >
            Neo-Brutalism
          </button>

          <button
            type="button"
            onClick={() => setAesthetic('neumorphism')}
            className={aesthetic === 'neumorphism' ? s.buttonActive : s.buttonInactive}
          >
            Neumorphism
          </button>
        </div>
      </aside>
    </div>
  );
}