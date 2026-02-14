import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import useScrollToSection from '../hooks/useScrollToSection.js';
import useTheme from '../hooks/useTheme.js';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? 'nav-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => handleNavClick('hero')}
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/80 border border-slate-700/70 shadow-glass">
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-sky-500/20" />
            <span className="relative text-xs font-semibold tracking-[0.14em] text-slate-100">
              AA
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-slate-100">
              AayushiAnalytics.com
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              AI &amp; Data
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="relative overflow-hidden text-xs uppercase tracking-[0.22em] text-slate-300/80 transition hover:text-cyan-300"
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-200 shadow-inner-glass transition hover:border-cyan-400/70 hover:text-cyan-300"
          >
            {theme === 'dark' ? <BsSun className="h-4 w-4" /> : <BsMoonStars className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="mr-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 text-slate-200 shadow-inner-glass"
          >
            {theme === 'dark' ? <BsSun className="h-4 w-4" /> : <BsMoonStars className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800/70 bg-slate-950/80 text-slate-100 shadow-inner-glass"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -20, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 20, scale: 0.7 }}
                  transition={{ duration: 0.15 }}
                >
                  <HiOutlineX className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 20, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -20, scale: 0.7 }}
                  transition={{ duration: 0.15 }}
                >
                  <HiOutlineMenuAlt4 className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-blur md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mx-auto max-w-6xl px-4 pb-4 pt-2 sm:px-6 lg:px-8">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-950/70 px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-200 transition hover:border-cyan-400/70 hover:text-cyan-200"
                  >
                    <span>{item.label}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

