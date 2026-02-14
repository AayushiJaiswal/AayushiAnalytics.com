import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 space-y-3 text-center sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Skills
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            An <span className="gradient-text">AI-first</span> engineering toolkit.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[15px]">
            A mix of programming, ML, analytics, and product skills that help ship AI-powered
            experiences end to end—from data ingestion to interactive frontends.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="glass-panel relative overflow-hidden rounded-2xl p-4 sm:p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/12 via-sky-500/6 to-transparent" />
              <div className="relative space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100">{category.name}</h3>
                    <p className="text-xs text-slate-400">
                      {category.items.join(' · ')}
                    </p>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-950/80 border border-slate-700/80 text-[11px] font-semibold text-cyan-300">
                    {category.level}%
                  </div>
                </div>

                <div className="mt-1 space-y-2">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-900/90">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Confidence level based on hands-on projects, internships, and experimentation.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

