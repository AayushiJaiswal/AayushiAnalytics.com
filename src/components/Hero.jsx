import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiOutlineDownload, HiOutlineArrowRight } from 'react-icons/hi';
import useScrollToSection from '../hooks/useScrollToSection.js';
import useMagnetic from '../hooks/useMagnetic.js';
import Typewriter from './Typewriter.jsx';
import MetricCounter from './MetricCounter.jsx';
import { metrics } from '../data/metrics.js';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// These expect files in public/images/
// public/images/aayushi-photo-1.png
// public/images/aayushi-photo-2.png
const profilePhotos = ['/images/aayushi-photo-1.png', '/images/aayushi-photo-2.png'];

export default function Hero() {
  const { scrollToSection } = useScrollToSection();
  const primaryMagnetic = useMagnetic(0.18);
  const secondaryMagnetic = useMagnetic(0.18);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % profilePhotos.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="section-padding relative overflow-hidden pt-28 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="floating-particle left-[8%] top-[10%] h-64 w-64" />
        <div className="floating-particle right-[4%] top-[35%] h-80 w-80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          className="flex-1 space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.26em] text-slate-300 shadow-inner-glass">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-500" />
            Available for AI &amp; Data roles
          </p>

          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              Hi, I&apos;m{' '}
              <span className="gradient-text">Aayushi Jaiswal</span>
              <span className="block text-lg font-normal text-slate-300 sm:text-xl md:text-2xl">
                Crafting <span className="gradient-text">AI &amp; data systems</span> that
                feel product-ready from day one.
              </span>
            </h1>
            <p className="text-sm text-slate-400 sm:text-base">
              AI &amp; Data Analytics Engineer with a BTech in Information Science &amp;
              Engineering. I build ML systems, analytics platforms, and AI-driven automation
              that connect clean data to sharp decisions.
            </p>
          </div>

          <div className="space-y-2 text-sm text-slate-300 sm:text-base">
            <p>
              Previously{' '}
              <span className="font-semibold text-cyan-300">
                Data Analyst Intern @ NITI Aayog
              </span>{' '}
              where I reduced manual data cleaning effort by ~70%.
            </p>
            <p>
              Also{' '}
              <span className="font-semibold text-cyan-300">
                Machine Learning Engineer Intern @ Ada Lovelace Software
              </span>{' '}
              building real-world ML systems, and an{' '}
              <span className="font-semibold text-cyan-300">open source contributor</span>{' '}
              passionate about AI-driven automation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
              I work as
            </span>
            <Typewriter
              words={[
                'AI Engineer',
                'Machine Learning Developer',
                'Data Analytics Specialist'
              ]}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-5">
            <div
              className="magnetic"
              ref={primaryMagnetic.ref}
              onMouseMove={primaryMagnetic.handleMouseMove}
              onMouseLeave={primaryMagnetic.handleMouseLeave}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="magnetic-inner relative inline-flex items-center gap-2 rounded-full border border-cyan-400/80 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.26em] text-slate-950 shadow-lg shadow-cyan-500/35 transition hover:brightness-110"
              >
                <span>View Projects</span>
                <HiOutlineArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div
              className="magnetic"
              ref={secondaryMagnetic.ref}
              onMouseMove={secondaryMagnetic.handleMouseMove}
              onMouseLeave={secondaryMagnetic.handleMouseLeave}
            >
              <a
                href="/Aayushi_Jaiswal_Resume.pdf"
                className="magnetic-inner inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.26em] text-slate-200 shadow-inner-glass transition hover:border-cyan-400/80 hover:text-cyan-200"
              >
                <HiOutlineDownload className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <a
                href="https://github.com/AayushiJaiswal"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 text-slate-200 shadow-inner-glass transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/aayushi-jaiswal-14480825b/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 text-slate-200 shadow-inner-glass transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:angleaayushi21@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 text-slate-200 shadow-inner-glass transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <FaEnvelope className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex-[1.2] space-y-5"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6, ease: 'easeOut' }}
        >
          <div className="glass-panel relative w-full overflow-hidden rounded-3xl border border-slate-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/18 via-sky-500/8 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),_rgba(2,6,23,1))]" />

            <div className="relative flex flex-col gap-8 p-8 sm:flex-row sm:items-start sm:gap-10">
              <div className="flex flex-1 flex-col items-center gap-3 sm:items-start">
                <div className="relative">
                  <motion.div
                    className="absolute inset-[-5px] rounded-full bg-gradient-to-tr from-cyan-400 via-sky-500 to-blue-500 opacity-90"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ filter: 'blur(1px)' }}
                  />
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border border-slate-900 bg-slate-900/90 shadow-xl shadow-cyan-500/40 sm:h-36 sm:w-36 md:h-40 md:w-40">
                    <motion.img
                      key={profilePhotos[activePhotoIndex]}
                      src={profilePhotos[activePhotoIndex]}
                      alt="Portrait of Aayushi Jaiswal"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold text-slate-50">
                    Aayushi Jaiswal
                  </p>
                  <p className="text-xs text-cyan-200">
                    AI &amp; Data Analytics Engineer
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Blending machine learning, analytics, and thoughtful UX into product-ready experiences.
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-6">
  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
    Highlights
  </p>

  <div className="space-y-5">
    {metrics.map((metric) => (
      <div
        key={metric.label}
        className="glass-panel flex items-center gap-8 rounded-2xl px-8 py-7"
      >
        {/* Number */}
        <div className="text-5xl font-semibold text-slate-50 min-w-[90px] leading-none">
          {metric.value}
          <span className="text-cyan-400">{metric.suffix}</span>
        </div>

        {/* Text */}
        <div className="text-sm text-slate-400 leading-relaxed">
          <p className="text-sm font-semibold text-slate-200">
            {metric.label}
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            {metric.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>



            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

