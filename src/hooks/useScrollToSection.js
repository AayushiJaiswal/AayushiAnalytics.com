export default function useScrollToSection() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offset = window.scrollY + rect.top - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return { scrollToSection };
}

