import { useEffect, useRef } from "react";

export default function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            (entry.target as any).__revealed = true;
          }
        });
      },
      { threshold }
    );

    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => {
      observer.observe(el);
      if ((el as any).__revealed) {
        el.classList.add("visible");
      }
    });

    return () => observer.disconnect();
  }, [threshold]);

  // Restore "visible" class on every render if the element of the DOM node has already been revealed.
  // This prevents React's VDOM diffing from removing classes added by IntersectionObserver when state changes.
  useEffect(() => {
    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => {
      if ((el as any).__revealed) {
        el.classList.add("visible");
      }
    });
  });

  return ref;
}
