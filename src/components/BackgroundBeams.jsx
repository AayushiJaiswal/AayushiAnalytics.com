import { motion } from 'framer-motion';

export default function BackgroundBeams() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="floating-particle left-[-10%] top-[10%] h-72 w-72" />
      <div className="floating-particle right-[-12%] top-[40%] h-80 w-80" />
      <div className="floating-particle bottom-[-16%] left-[30%] h-96 w-96" />

      <motion.div
        className="absolute inset-x-0 top-[-10%] h-72 bg-gradient-to-b from-cyan-500/15 via-sky-500/5 to-transparent blur-3xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <motion.div
        className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      />
    </div>
  );
}

