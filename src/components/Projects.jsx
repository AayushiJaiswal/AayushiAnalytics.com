import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineX } from 'react-icons/hi';
import { projects } from '../data/projects.js';

function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      className="glass-panel group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-4 text-left sm:p-5"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/15 via-sky-500/6 to-transparent opacity-80 transition group-hover:opacity-100" />
      <div className="relative space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Featured Project
            </p>
            <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
              {project.name}
            </h3>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-950/80 border border-slate-700/80 text-[10px] font-semibold text-slate-200">
            AI
          </div>
        </div>
        <p className="text-xs font-medium text-cyan-200/90">{project.role}</p>
        <p className="text-xs text-slate-300">{project.description}</p>
      </div>

      <div className="relative mt-4 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700/80 bg-slate-950/90 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300 transition group-hover:border-cyan-400/70 group-hover:text-cyan-100"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-500" />
            View details
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300">
            Modal · GitHub
          </span>
        </div>
      </div>
    </motion.button>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass-panel relative max-h-[80vh] w-full max-w-xl overflow-y-auto rounded-3xl p-5 sm:p-6"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.22 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/80 text-slate-300 transition hover:border-cyan-400/80 hover:text-cyan-300"
            >
              <HiOutlineX className="h-4 w-4" />
            </button>

            <div className="space-y-4 pr-3 pt-1">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Project Detail
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-50">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-cyan-200/90">{project.role}</p>
              </div>

              <p className="text-sm text-slate-300">{project.impact}</p>

              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Key highlights
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700/80 bg-slate-950/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-slate-200 transition hover:border-cyan-400/80 hover:text-cyan-200"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <p className="text-[11px] text-slate-400">
                  Designed for real-world constraints: performance, interpretability, and
                  maintainability.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 space-y-3 text-center sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Projects
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Production-minded <span className="gradient-text">AI &amp; analytics</span> work.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[15px]">
            A selection of projects that combine machine learning, analytics, and engineering to
            solve real-world problems—from fraud detection to RAG systems.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <ProjectCard project={project} onOpen={setSelected} />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

