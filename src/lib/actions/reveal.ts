export type RevealOptions = {
  x?: number;
  y?: number;
  scale?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const getHiddenTransform = ({ x = 0, y = 46, scale = 0.985 }: RevealOptions) =>
  `translate3d(${x}px, ${y}px, 0) scale(${scale})`;

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  let observer: IntersectionObserver | undefined;
  let frameOne = 0;
  let frameTwo = 0;
  let cleanupTimer: ReturnType<typeof setTimeout> | undefined;
  let current = { duration: 950, delay: 0, once: true, ...options };

  const hide = () => {
    if (cleanupTimer) clearTimeout(cleanupTimer);
    node.style.opacity = '0';
    node.style.transform = getHiddenTransform(current);
    node.style.transitionProperty = 'opacity, transform, filter';
    node.style.transitionDuration = `${current.duration}ms`;
    node.style.transitionTimingFunction = 'cubic-bezier(0.16, 1, 0.3, 1)';
    node.style.transitionDelay = `${current.delay}ms`;
    node.style.filter = 'blur(8px)';
    node.style.willChange = 'opacity, transform, filter';
    node.style.backfaceVisibility = 'hidden';
  };

  const show = () => {
    node.style.opacity = '1';
    node.style.transform = 'translate3d(0, 0, 0) scale(1)';
    node.style.filter = 'blur(0)';

    cleanupTimer = setTimeout(() => {
      node.style.willChange = 'auto';
    }, current.duration + current.delay + 80);
  };

  if (prefersReducedMotion()) {
    show();
    return {};
  }

  hide();

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        show();
        if (current.once) observer?.unobserve(node);
      } else if (!current.once) {
        hide();
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );

  // Wait two animation frames before observing so the hidden state is painted first.
  // This makes above-the-fold elements animate reliably instead of appearing instantly.
  frameOne = requestAnimationFrame(() => {
    frameTwo = requestAnimationFrame(() => observer?.observe(node));
  });

  return {
    update(nextOptions: RevealOptions = {}) {
      current = { ...current, ...nextOptions };
    },
    destroy() {
      observer?.disconnect();
      cancelAnimationFrame(frameOne);
      cancelAnimationFrame(frameTwo);
      if (cleanupTimer) clearTimeout(cleanupTimer);
    }
  };
}
