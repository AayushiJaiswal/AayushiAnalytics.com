import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800/70 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-medium text-slate-300">
            © {new Date().getFullYear()} AayushiAnalytics.com. All rights reserved.
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-slate-500">
            AI &amp; Data Analytics Engineer · Aayushi Jaiswal
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-300">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700/80 bg-slate-900/80 p-2 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700/80 bg-slate-900/80 p-2 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@aayushianalytics.com"
            className="rounded-full border border-slate-700/80 bg-slate-900/80 p-2 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            <FaEnvelope className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

