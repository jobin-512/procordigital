<script lang="ts">
  import { onMount } from 'svelte';

  const items = [
    { label: 'SEO DOMINANCE', color: 'blueprint', icon: '🎯' },
    { label: 'PAID MEDIA SCALE', color: 'hot', icon: '💰' },
    { label: 'FUNNEL ARCHITECTURE', color: 'cyan', icon: '🏗️' },
    { label: 'LANDING PAGE CRO', color: 'accent', icon: '📈' },
    { label: 'MARKETING AUTOMATION', color: 'lime', icon: '⚡' },
    { label: 'CONTENT ENGINES', color: 'blue-pop', icon: '📝' },
    { label: 'ANALYTICS GOVERNANCE', color: 'ink', icon: '📊' },
    { label: 'CREATIVE TESTING', color: 'hot', icon: '🎨' }
  ];

  let track: HTMLDivElement;
  let firstGroup: HTMLDivElement;
  let raf = 0;
  let lastTime = 0;
  let offset = 0;
  let loopWidth = 0;
  let paused = false;
  let reduceMotion = false;
  let resizeObserver: ResizeObserver | undefined;
  let direction = 1;
  let currentSpeed = 80;

  const measure = () => {
    loopWidth = firstGroup ? firstGroup.getBoundingClientRect().width + 24 : 0;
  };

  const tick = (time: number) => {
    if (!lastTime) lastTime = time;

    const delta = time - lastTime;
    lastTime = time;

    if (!paused && !reduceMotion && loopWidth > 0 && track) {
      offset = (offset + (currentSpeed * delta * direction) / 1000) % loopWidth;
      if (offset < 0) offset += loopWidth;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    }

    raf = requestAnimationFrame(tick);
  };

  const handleMouseEnter = () => { paused = true; };
  const handleMouseLeave = () => { paused = false; };
  const handleFocusIn = () => { paused = true; };
  const handleFocusOut = () => { paused = false; };

  const reverseDirection = () => {
    direction *= -1;
    track?.style.setProperty('--direction', direction.toString());
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

<section class="overflow-hidden border-y-6 border-ink bg-gradient-to-r from-accent via-lime to-cyan py-6 relative" aria-label="Procor capabilities" role="region">
  <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(7,17,31,0.03),rgba(7,17,31,0.03)_2px,transparent_2px,transparent_4px)] pointer-events-none" aria-hidden="true"></div>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(7,17,31,0.1)_100%)] pointer-events-none" aria-hidden="true"></div>

  <p class="sr-only">Procor capabilities: {items.map(i => i.label).join(', ')}</p>

  <div
    class="marquee relative z-10"
    aria-hidden="true"
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
    onfocusin={handleFocusIn}
    onfocusout={handleFocusOut}
    onclick={reverseDirection}
    style="cursor: pointer;"
  >
    <div class="marquee__track" bind:this={track}>
      <div class="marquee__group" bind:this={firstGroup}>
        {#each items as item}
          <span class="marquee__item marquee__item--{item.color}">{item.icon} {item.label}</span>
        {/each}
      </div>
      <div class="marquee__group">
        {#each items as item}
          <span class="marquee__item marquee__item--{item.color}">{item.icon} {item.label}</span>
        {/each}
      </div>
      <div class="marquee__group">
        {#each items as item}
          <span class="marquee__item marquee__item--{item.color}">{item.icon} {item.label}</span>
        {/each}
      </div>
    </div>
  </div>

  <div class="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-full bg-gradient-to-r from-[var(--color-accent)] to-transparent pointer-events-none" aria-hidden="true"></div>
  <div class="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-full bg-gradient-to-l from-[var(--color-accent)] to-transparent pointer-events-none" aria-hidden="true"></div>
</section>

<style>
  .marquee {
    width: 100%;
    overflow: hidden;
    mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
  }

  .marquee__track {
    display: flex;
    width: max-content;
    gap: 1.5rem;
    transform: translate3d(0, 0, 0);
    will-change: transform;
  }

  .marquee__group {
    display: flex;
    flex: 0 0 auto;
    gap: 1.5rem;
    min-width: max-content;
  }

  .marquee__item {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    flex: 0 0 auto;
    white-space: nowrap;
    border: 4px solid #07111f;
    background: #fffaf0;
    padding: 1rem 2rem;
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    line-height: 1;
    letter-spacing: -0.06em;
    text-transform: uppercase;
    color: #07111f;
    box-shadow: 6px 6px 0 #07111f;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  }

  .marquee__item:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 10px 10px 0 #07111f;
    z-index: 10;
  }

  .marquee__item--blueprint { background: #145cff; color: white; border-color: #07111f; box-shadow: 6px 6px 0 #07111f; }
  .marquee__item--blueprint:hover { background: #4db7ff; color: #07111f; }

  .marquee__item--hot { background: #ff5a7a; color: white; border-color: #07111f; box-shadow: 6px 6px 0 #07111f; }
  .marquee__item--hot:hover { background: #fff04d; color: #07111f; }

  .marquee__item--cyan { background: #00e5ff; color: #07111f; border-color: #07111f; box-shadow: 6px 6px 0 #07111f; }
  .marquee__item--cyan:hover { background: #ff5a7a; color: white; }

  .marquee__item--accent { background: #fff04d; color: #07111f; border-color: #07111f; box-shadow: 6px 6px 0 #07111f; }
  .marquee__item--accent:hover { background: #00e5ff; color: #07111f; }

  .marquee__item--lime { background: #d4ff00; color: #07111f; border-color: #07111f; box-shadow: 6px 6px 0 #07111f; }
  .marquee__item--lime:hover { background: #145cff; color: white; }

  .marquee__item--blue-pop { background: #4db7ff; color: #07111f; border-color: #07111f; box-shadow: 6px 6px 0 #07111f; }
  .marquee__item--blue-pop:hover { background: #040a12; color: #fff04d; }

  .marquee__item--ink { background: #07111f; color: #fff04d; border-color: #fff04d; box-shadow: 6px 6px 0 #fff04d; }
  .marquee__item--ink:hover { background: #fff04d; color: #07111f; box-shadow: 6px 6px 0 #07111f; }

  @media (prefers-reduced-motion: reduce) {
    .marquee__track {
      animation: none !important;
    }
  }

  @media (max-width: 640px) {
    .marquee__item {
      font-size: clamp(1.125rem, 3vw, 1.5rem);
      padding: 0.75rem 1.25rem;
    }
  }
</style>