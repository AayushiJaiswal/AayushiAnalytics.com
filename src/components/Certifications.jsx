import { motion } from 'framer-motion';
import { certifications } from '../data/certifications.js';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 space-y-3 text-center sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Certifications
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Continuous <span className="gradient-text">learning &amp; validation</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[15px]">
            A snapshot of formal certifications that complement hands-on projects—spanning cyber
            security, problem solving, and strategic IT thinking.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="glass-panel relative overflow-hidden rounded-2xl p-4 sm:p-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/12 via-sky-500/5 to-transparent" />
              <div className="relative space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  {cert.issuer}
                </p>
                <h3 className="text-sm font-semibold text-slate-100">{cert.name}</h3>
                <p className="text-xs text-slate-400">Year · {cert.year}</p>
                <p className="mt-1 text-xs text-slate-300">{cert.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

