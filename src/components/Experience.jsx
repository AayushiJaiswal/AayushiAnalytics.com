import { motion } from 'framer-motion';
import { experience } from '../data/experience.js';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 space-y-3 text-center sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Experience
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            A timeline of <span className="gradient-text">hands-on learning</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[15px]">
            Each role sharpened a different part of the AI &amp; data stack—from policy analytics
            at NITI Aayog to ML engineering at Ada Lovelace Software and open-source collaboration
            with Focalboard.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-sky-500/40 to-transparent sm:left-1/2 sm:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />

          <div className="space-y-6 sm:space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.company}
                className="relative flex flex-col gap-4 sm:flex-row sm:items-stretch"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="flex items-center gap-3 sm:w-1/2 sm:justify-end sm:pr-6">
                  <div className="hidden text-right sm:block">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                      {item.period}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">{item.location}</p>
                  </div>
                </div>

                <div className="relative flex items-stretch sm:w-1/2">
                  <div className="absolute left-3 top-3 z-10 h-3 w-3 rounded-full border border-slate-900 bg-gradient-to-br from-cyan-400 to-sky-500 shadow-lg shadow-cyan-500/40 sm:left-[-7px]" />
                  <div className="ml-10 flex-1 sm:ml-5">
                    <div className="glass-panel relative h-full rounded-2xl p-4 sm:p-5">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-transparent" />
                      <div className="relative space-y-2">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-300">
                          {item.title}
                        </p>
                        <h3 className="text-sm font-semibold text-slate-100">{item.link ? (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-400 transition"
    >
      {item.company}
      <HiOutlineExternalLink className="h-3 w-3" />
    </a>
  ) : (
    item.company
  )}</h3>
                        <p className="text-xs text-slate-400">
                          {item.period} · {item.location}
                        </p>
                        <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                        <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2">
                              <span className="mt-1 h-1 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

