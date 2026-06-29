<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import Lenis from 'lenis';

  let lenis: Lenis | undefined;
  let rafId = 0;

  onMount(() => {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5
    });

    const raf = (time: number) => {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const handleAnchorClick = (event: MouseEvent) => {
      const link = event.currentTarget as HTMLAnchorElement;
      const target = link.getAttribute('href');

      if (!target || target === '#') return;

      const element = document.querySelector<HTMLElement>(target);
      if (!element) return;

      event.preventDefault();
      lenis?.scrollTo(element, {
        offset: -88,
        duration: 1.2
      });
    };

    anchorLinks.forEach((link) => link.addEventListener('click', handleAnchorClick));

    return () => {
      anchorLinks.forEach((link) => link.removeEventListener('click', handleAnchorClick));
    };
  });

  onDestroy(() => {
    if (rafId) cancelAnimationFrame(rafId);
    lenis?.destroy();
  });
</script>
