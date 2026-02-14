import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export default function MetricCounter({ value, suffix, label, description }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.4,
      ease: 'easeOut'
    });
    return () => controls.stop();
  }, [count, value]);

  return (
    <motion.div
      className="glass-panel relative flex flex-col gap-2 rounded-2xl p-4 sm:p-5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-sky-500/5 to-transparent opacity-70" />
      <div className="relative">
        <div className="flex items-baseline gap-1 text-3xl font-semibold text-slate-50 sm:text-4xl">
          <motion.span>{rounded}</motion.span>
          <span className="text-2xl text-cyan-300 sm:text-3xl">{suffix}</span>
        </div>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
          {label}
        </p>
        <p className="mt-2 text-xs text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
}

