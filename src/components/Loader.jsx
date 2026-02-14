import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="loader-gradient fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          className="relative h-24 w-24 rounded-3xl bg-slate-900/80 shadow-glass backdrop-blur-xl border border-slate-700/60"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-3 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-500 opacity-80"
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2.4, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-[18px] rounded-xl bg-slate-950/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="text-xl font-semibold tracking-[0.2em] text-slate-100"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
            >
              AA
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          className="h-1.5 w-40 overflow-hidden rounded-full bg-slate-900/70 border border-slate-800/80"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full w-1/3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500"
            initial={{ x: '-120%' }}
            animate={{ x: '220%' }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-slate-300/80"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
        >
          Initializing AayushiAnalytics
        </motion.p>
      </div>
    </div>
  );
}

