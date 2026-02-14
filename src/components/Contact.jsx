import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../utils/emailjsConfig.js';



export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          Name: form.name,
        Email: form.email,
          Message: form.message
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('EmailJS error', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 space-y-3 text-center sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Contact
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Let&apos;s <span className="gradient-text">build something</span> together.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[15px]">
            Whether it&apos;s a full ML pipeline, an analytics platform, or an AI-native product
            idea—reach out and let&apos;s explore what we can ship.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <motion.form
            onSubmit={handleSubmit}
            className="glass-panel relative overflow-hidden rounded-3xl p-5 sm:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/15 via-sky-500/8 to-transparent" />
            <div className="relative space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none ring-cyan-400/0 transition focus:border-cyan-400/90 focus:ring-2 focus:ring-cyan-400/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none ring-cyan-400/0 transition focus:border-cyan-400/90 focus:ring-2 focus:ring-cyan-400/50"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none ring-cyan-400/0 transition focus:border-cyan-400/90 focus:ring-2 focus:ring-cyan-400/50"
                  placeholder="Tell me about your project, problem, or idea."
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/80 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.26em] text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-80"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p
                      className="flex items-center gap-2 text-xs font-medium text-emerald-300"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Message sent! I&apos;ll get back to you shortly.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      className="flex items-center gap-2 text-xs font-medium text-rose-300"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                    >
                      <span className="h-2 w-2 rounded-full bg-rose-400" />
                      Something went wrong. Please try again or email me directly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.form>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
          >
            <div className="glass-panel relative rounded-3xl p-5 sm:p-6">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/15 via-sky-500/8 to-transparent" />
              <div className="relative space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-300">
                  Prefer socials?
                </p>
                <p className="text-sm text-slate-300">
                  Reach out via GitHub, LinkedIn, or email if you&apos;d like to collaborate, have
                  a question, or want feedback on an AI/data idea.
                </p>
                <div className="mt-2 flex gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/80 text-slate-200 shadow-inner-glass transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/80 text-slate-200 shadow-inner-glass transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:hello@aayushianalytics.com"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/80 text-slate-200 shadow-inner-glass transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    <FaEnvelope className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4 text-xs text-slate-300">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                Response style
              </p>
              <p className="mt-2">
                I like keeping things structured and practical. Expect replies with clear next
                steps, timelines, and how we can move from idea to a working system.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

