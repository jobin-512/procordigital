<script lang="ts">
  import { onMount } from 'svelte';

  let mouseX = 0;
  let mouseY = 0;
  let reduceMotion = false;

  onMount(() => {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const handleMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  });

  const stats = [
    { value: '847%', label: 'ROI increase', accent: 'accent' },
    { value: '12.3x', label: 'traffic growth', accent: 'cyan' },
    { value: '31d', label: 'avg launch', accent: 'hot' },
    { value: '$2.4M+', label: 'pipeline added', accent: 'blue-pop' }
  ];
</script>

<section class="relative overflow-hidden min-h-screen flex items-center pt-20 pb-16 lg:pt-28 lg:pb-24 noise-overlay grid-pattern">
  <div class="absolute inset-0 bg-gradient-to-br from-blueprint/5 via-transparent to-hot/5 pointer-events-none"></div>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,240,77,0.12),transparent_50%)] pointer-events-none"></div>

  <div class="pointer-events-none absolute top-20 left-4 lg:left-8 animate-bolt-wiggle z-10">
    <div class="section-label-insane">Revenue leaking?</div>
  </div>
  <div class="pointer-events-none absolute top-20 right-4 lg:right-8 animate-bolt-wiggle [animation-delay:0.8s] z-10">
    <div class="section-label-insane bg-cyan text-ink">Plug it now</div>
  </div>
  <div class="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 animate-floaty z-10">
    <div class="brutal-card-accent px-6 py-3 font-black uppercase tracking-wider text-sm animate-pulse-subtle">▼ SCROLL FOR THE CURE ▼</div>
  </div>

  <div class="container-brutal relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
    <div class="relative" style:transform="perspective(1000px) rotateY({mouseX * -0.1}deg) rotateX({mouseY * 0.1}deg)">
      <div class="absolute -top-6 -left-6 lg:-top-10 lg:-left-10 size-24 lg:size-32 border-6 border-ink bg-accent rotate-6 animate-floaty opacity-50" aria-hidden="true"></div>
      <div class="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12 size-20 lg:size-28 border-6 border-ink bg-cyan -rotate-6 animate-floaty [animation-delay:1.5s] opacity-50" aria-hidden="true"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 lg:size-[32rem] border-4 border-ink/20 bg-gradient-to-br from-blueprint/5 to-cyan/5 rounded-none pointer-events-none" aria-hidden="true"></div>

      <span class="section-label-insane animate-slide-up" style="animation-delay: 100ms;">Digital chaos meets brutal order</span>

      <h1 class="display-title-insane mt-6 max-w-4xl animate-text-reveal" style="animation-delay: 200ms;">
        <span class="relative z-10">We build</span>
        <br />
        <span class="gradient-text-ink relative z-10">marketing</span>
        <span class="gradient-text-accent relative z-10 ml-2">machines</span>
        <br />
        <span class="relative z-10">that print</span>
        <span class="gradient-text-cyan relative z-10 ml-2">revenue</span>
      </h1>

      <p class="mt-6 max-w-2xl text-lg font-bold leading-snug sm:text-xl animate-slide-up" style="animation-delay: 400ms;">
        No fluff. No vanity metrics. Just battle-tested systems for SEO, paid ads, funnels, automation & CRO that turn traffic into predictable pipeline.
      </p>

      <div class="mt-8 flex flex-col gap-4 sm:flex-row animate-slide-up" style="animation-delay: 550ms;">
        <a class="brutal-button-insane" href="#packages">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          See the arsenal
        </a>
        <a class="brutal-button-outline" href="#solutions">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          Diagnose my funnel
        </a>
      </div>

      <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up" style="animation-delay: 700ms;" role="list" aria-label="Key metrics">
        {#each stats as stat}
          <article class="brutal-card-insane p-4 text-center group relative overflow-hidden" aria-label="{stat.value} {stat.label}">
            <div class="absolute inset-0 bg-gradient-to-br from-{stat.accent}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] relative z-10 gradient-text-{stat.accent}">{stat.value}</p>
            <p class="mt-1 text-xs font-black uppercase tracking-wider relative z-10">{stat.label}</p>
          </article>
        {/each}
      </div>
    </div>

    <div class="relative" style:transform="perspective(1000px) rotateY({mouseX * 0.1}deg) rotateX({mouseY * -0.1}deg)">
      <div class="absolute -top-8 -right-8 lg:-top-12 lg:-right-12 size-28 lg:size-36 border-6 border-ink bg-blue-pop rotate-12 animate-floaty [animation-delay:0.5s] opacity-50" aria-hidden="true"></div>
      <div class="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 size-20 lg:size-28 border-6 border-ink bg-hot -rotate-12 animate-floaty [animation-delay:2s] opacity-50" aria-hidden="true"></div>

      <div class="brutal-card-insane bg-blue-pale p-5 sm:p-7 relative overflow-hidden">
        <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(7,17,31,0.02),rgba(7,17,31,0.02)_2px,transparent_2px,transparent_4px)] pointer-events-none"></div>

        <div class="mb-5 flex items-center justify-between gap-4 relative z-10">
          <div class="flex gap-1.5">
            <span class="size-3.5 rounded-full border-2 border-ink bg-hot"></span>
            <span class="size-3.5 rounded-full border-2 border-ink bg-accent"></span>
            <span class="size-3.5 rounded-full border-2 border-ink bg-cyan"></span>
          </div>
          <span class="text-xs font-black uppercase tracking-widest text-blueprint">PROCOR GROWTH OS v3.7</span>
        </div>

        <div class="grid gap-4 relative z-10">
          <div class="brutal-card border-4 border-ink bg-blueprint p-5 text-white shadow-[5px_5px_0_#07111f] animate-scale-in" style="animation-delay: 600ms;">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-black uppercase text-accent">⚠ CRITICAL LEAK DETECTED</span>
              <span class="text-xs font-mono text-blue-pale">LIVE</span>
            </div>
            <h2 class="font-display text-3xl lg:text-4xl leading-none tracking-[-0.08em]">Your funnel bleeds 67% of qualified traffic before contact</h2>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="brutal-card border-4 border-ink bg-white p-4 animate-scale-in" style="animation-delay: 750ms;">
              <p class="font-black uppercase text-sm mb-3">IMMEDIATE FIX STACK</p>
              <ul class="space-y-2 text-sm font-bold" role="list">
                <li class="flex items-center gap-2"><span class="w-5 h-5 border-3 border-ink bg-accent flex items-center justify-center text-xs">✓</span>Landing page reconstruction</li>
                <li class="flex items-center gap-2"><span class="w-5 h-5 border-3 border-ink bg-accent flex items-center justify-center text-xs">✓</span>Search intent mapping</li>
                <li class="flex items-center gap-2"><span class="w-5 h-5 border-3 border-ink bg-accent flex items-center justify-center text-xs">✓</span>Ad creative testing matrix</li>
                <li class="flex items-center gap-2"><span class="w-5 h-5 border-3 border-ink bg-accent flex items-center justify-center text-xs">✓</span>Analytics governance setup</li>
              </ul>
            </div>

            <div class="brutal-card border-4 border-ink bg-accent p-4 animate-scale-in" style="animation-delay: 900ms;">
              <p class="font-black uppercase text-sm mb-3">PROJECTED IMPACT</p>
              <p class="font-display text-4xl tracking-[-0.08em] gradient-text-hot">+341 leads</p>
              <p class="text-sm font-bold">per quarter (conservative)</p>
            </div>
          </div>

          <div class="brutal-card border-4 border-ink bg-white p-4 animate-scale-in" style="animation-delay: 1050ms;">
            <div class="flex items-center justify-between mb-3 text-xs font-black uppercase">
              <span>FUNNEL HEALTH INDEX</span>
              <span class="gradient-text-blueprint">34%</span>
            </div>
            <div class="h-8 border-4 border-ink bg-void relative overflow-hidden">
              <div class="h-full w-[34%] bg-gradient-to-r from-blueprint via-cyan to-accent animate-meter-pulse relative">
                <div class="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-marquee"></div>
              </div>
              <div class="absolute right-0 top-0 bottom-0 w-px bg-white/50"></div>
              <div class="absolute left-[67%] top-0 bottom-0 w-px bg-red-500/50"></div>
            </div>
            <p class="mt-2 text-xs font-bold text-hot">TARGET: 75%+ • GAP: 41 PTS</p>
          </div>
        </div>

        <div class="absolute bottom-4 right-4 opacity-30 animate-floaty [animation-delay:3s]" aria-hidden="true">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#07111f" stroke-width="2">
            <path d="M50 10 L50 90 M10 50 L90 50" stroke-dasharray="10 10"/>
            <circle cx="50" cy="50" r="35" stroke-dasharray="20 10"/>
            <circle cx="50" cy="50" r="20"/>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8 pointer-events-none lg:hidden" aria-hidden="true">
    <div class="brutal-card-accent px-4 py-2 rotate-3 animate-floaty text-xs font-black">TAP CARDS</div>
    <div class="brutal-card-cyan px-4 py-2 -rotate-3 animate-floaty [animation-delay:1s] text-xs font-black">SCROLL DEEP</div>
  </div>
</section>

<style>
  @media (prefers-reduced-motion: reduce) {
    .animate-floaty,
    .animate-bolt-wiggle,
    .animate-pulse-subtle,
    .animate-marquee,
    .animate-meter-pulse {
      animation: none !important;
    }
  }
</style>