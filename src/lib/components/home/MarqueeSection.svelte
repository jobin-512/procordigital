<script lang="ts">
  import { onMount } from 'svelte';

  const items = [
    'SEO Growth Systems',
    'Paid Media Scale',
    'Funnel Architecture',
    'Conversion Optimization',
    'Marketing Automation',
    'Content Engines',
    'Analytics Governance',
    'Creative Testing',
    'Brand Strategy',
    'Revenue Operations',
  ];

  let track: HTMLDivElement;
  let firstGroup: HTMLDivElement;
  let raf = 0;
  let lastTime = 0;
  let offset = 0;
  let loopWidth = 0;
  let paused = false;
  let reduceMotion = false;

  const measure = () => {
    loopWidth = firstGroup ? firstGroup.getBoundingClientRect().width + 32 : 0;
  };

  const tick = (time: number) => {
    if (!lastTime) lastTime = time;
    const delta = time - lastTime;
    lastTime = time;
    if (!paused && !reduceMotion && loopWidth > 0 && track) {
      offset = (offset + (80 * delta) / 1000) % loopWidth;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    }
    raf = requestAnimationFrame(tick);
  };

  onMount(() => {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    measure();
    const ro = new ResizeObserver(measure);
    if (firstGroup) ro.observe(firstGroup);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  });
</script>

<section class="overflow-hidden border-y border-border bg-ghost py-5" aria-label="Procor capabilities" >
  <p class="sr-only">Procor capabilities: {items.join(', ')}</p>

  <div
    class="marquee-premium"
    aria-hidden="true"
    onmouseenter={() => { paused = true; }}
    onmouseleave={() => { paused = false; }}
  >
    <div class="marquee-premium__track" bind:this={track}>
      <div class="marquee-premium__group" bind:this={firstGroup}>
        {#each items as item}
          <span class="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-white-pure px-5 py-2.5 text-sm font-medium text-muted transition-all duration-200 hover:border-blue/30 hover:text-blue-dark hover:bg-blue/5">
            {item}
            <span class="w-1.5 h-1.5 rounded-full bg-blue/30"></span>
          </span>
        {/each}
      </div>
      <div class="marquee-premium__group">
        {#each items as item}
          <span class="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-white-pure px-5 py-2.5 text-sm font-medium text-muted transition-all duration-200 hover:border-blue/30 hover:text-blue-dark hover:bg-blue/5">
            {item}
            <span class="w-1.5 h-1.5 rounded-full bg-blue/30"></span>
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  @media (prefers-reduced-motion: reduce) {
    .marquee-premium__track {
      animation: none !important;
    }
  }
</style>
