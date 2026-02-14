import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Typewriter({ words, typingSpeed = 90, pause = 1100 }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, display.length + 1);
        setDisplay(next);
        if (next === current) {
          setDeleting(true);
        }
      } else {
        const next = current.slice(0, display.length - 1);
        setDisplay(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [display, deleting, index, words, typingSpeed]);

  useEffect(() => {
    if (!deleting && display === words[index % words.length]) {
      const pauseTimeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(pauseTimeout);
    }
    return undefined;
  }, [deleting, display, index, pause, words]);

  return (
    <div className="inline-flex items-center gap-1">
      <motion.span
        key={index}
        className="gradient-text font-semibold"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {display}
      </motion.span>
      <motion.span
        className="h-5 w-[2px] rounded bg-cyan-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </div>
  );
}

