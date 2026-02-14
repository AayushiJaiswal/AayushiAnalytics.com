import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_minmax(0,1fr)] lg:items-start">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              About
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              From raw data to <span className="gradient-text">AI-native experiences</span>.
            </h2>
            <p className="text-sm text-slate-300 sm:text-[15px]">
              I&apos;m an AI &amp; Data Analytics Engineer with a BTech in Information Science &amp;
              Engineering. I enjoy working at the intersection of data pipelines, statistical
              modelling, and product-minded engineering—shaping systems that are not just accurate,
              but also intuitive to use.
            </p>
            <p className="text-sm text-slate-300 sm:text-[15px]">
              At <span className="font-semibold text-cyan-300">NITI Aayog</span>, I focused on
              making data operations repeatable and scalable. By rethinking how datasets were
              prepared, validated, and transformed, I was able to reduce manual data cleaning effort
              by roughly <span className="font-semibold text-cyan-300">70%</span>.
            </p>
            <p className="text-sm text-slate-300 sm:text-[15px]">
              As a <span className="font-semibold text-cyan-300">Machine Learning Engineer Intern</span>{' '}
              at <span className="font-semibold text-cyan-300">Ada Lovelace Software</span>, I built
              and shipped ML systems that had to survive beyond notebooks—packaged behind APIs with
              real constraints, deadlines, and users.
            </p>
          </motion.div>

          <motion.div
            className="glass-panel relative flex flex-col gap-4 rounded-3xl p-5 sm:p-6"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/15 via-sky-500/10 to-transparent" />
            <div className="relative space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-300">
                What I love working on
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>
                    <span className="font-semibold text-slate-100">AI-driven automation</span> — from
                    fraud detection to intelligent agents that close the loop between insight and
                    action.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>
                    <span className="font-semibold text-slate-100">Clean, reliable analytics</span> —
                    data models, dashboards, and interfaces that help stakeholders make confident
                    decisions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>
                    <span className="font-semibold text-slate-100">Human-centered AI UX</span> — ML
                    experiences that explain themselves, feel responsive, and respect context.
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative grid gap-3 rounded-2xl border border-slate-800/70 bg-slate-950/80 p-4 text-xs text-slate-300">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                Snapshot
              </p>
              <div className="grid gap-2">
                <p>
                  🎓 <span className="font-semibold">BTech, Information Science &amp; Engineering</span>
                </p>
                <p>
                  🧠 <span className="font-semibold">AI &amp; ML</span> with an obsession for production
                  constraints.
                </p>
                <p>
                  📊 <span className="font-semibold">Analytics &amp; storytelling</span> at the level
                  decision-makers care about.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

