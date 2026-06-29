<script lang="ts">
  import { onMount } from 'svelte';

  const items = ['SEO', 'Paid ads', 'Funnels', 'Landing pages', 'Automation', 'Content', 'Analytics', 'CRO'];

  let track: HTMLDivElement;
  let firstGroup: HTMLDivElement;
  let raf = 0;
  let lastTime = 0;
  let offset = 0;
  let loopWidth = 0;
  let paused = false;
  let reduceMotion = false;
  let resizeObserver: ResizeObserver | undefined;

  const measure = () => {
    // Includes the visual gap after the first group so the loop is seamless.
    loopWidth = firstGroup ? firstGroup.getBoundingClientRect().width + 16 : 0;
  };

  const tick = (time: number) => {
    if (!lastTime) lastTime = time;

    const delta = time - lastTime;
    lastTime = time;

    if (!paused && !reduceMotion && loopWidth > 0 && track) {
      // pixels per second. Increase this number for a faster marquee.
      const speed = 95;
      offset = (offset + (speed * delta) / 1000) % loopWidth;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    }

    raf = requestAnimationFrame(tick);
  };

  onMount(() => {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    measure();

    resizeObserver = new ResizeObserver(measure);
    if (firstGroup) resizeObserver.observe(firstGroup);

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver?.disconnect();
    };
  });
</script>

<section class="overflow-hidden border-y-4 border-ink bg-accent py-5" aria-label="Digital marketing capabilities">
  <p class="sr-only">Procor capabilities: {items.join(', ')}</p>

  <div
    class="marquee"
    aria-hidden="true"
    onmouseenter={() => (paused = true)}
    onmouseleave={() => (paused = false)}
    onfocusin={() => (paused = true)}
    onfocusout={() => (paused = false)}
  >
    <div class="marquee__track" bind:this={track}>
      <div class="marquee__group" bind:this={firstGroup}>
        {#each items as item}
          <span class="marquee__item">{item}</span>
        {/each}
      </div>
      <div class="marquee__group">
        {#each items as item}
          <span class="marquee__item">{item}</span>
        {/each}
      </div>
      <div class="marquee__group">
        {#each items as item}
          <span class="marquee__item">{item}</span>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .marquee {
    width: 100%;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
    mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
  }

  .marquee__track {
    display: flex;
    width: max-content;
    gap: 1rem;
    transform: translate3d(0, 0, 0);
    will-change: transform;
  }

  .marquee__group {
    display: flex;
    flex: 0 0 auto;
    gap: 1rem;
    min-width: max-content;
  }

  .marquee__item {
    display: inline-flex;
    flex: 0 0 auto;
    white-space: nowrap;
    border: 4px solid #07111f;
    background: #fffaf0;
    padding: 0.75rem 1.5rem;
    font-family: var(--font-display);
    font-size: clamp(1.875rem, 3vw, 3rem);
    line-height: 1;
    letter-spacing: -0.08em;
    text-transform: uppercase;
    color: #07111f;
    box-shadow: 4px 4px 0 #07111f;
  }
</style>
