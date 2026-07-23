<script lang="ts">
  import { onMount } from 'svelte';
  import { reveal } from '$lib/actions/reveal';

  let mouseX = 0;
  let mouseY = 0;
  let reduceMotion = false;

  onMount(() => {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const handleMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  });

  const stats = [
    { value: '847%', label: 'Average ROI' },
    { value: '12.3x', label: 'Traffic growth' },
    { value: '31d', label: 'Avg launch time' },
    { value: '$2.4M+', label: 'Pipeline added' },
  ];
</script>

<section class="relative min-h-[100dvh] flex items-center overflow-hidden bg-white">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue/8 to-transparent rounded-full blur-[100px] pointer-events-none animate-float"></div>
  <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-emerald/5 to-transparent rounded-full blur-[80px] pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24">
    <div class="max-w-4xl">
      <div use:reveal={{ y: 20, delay: 100 }}>
        <span class="eyebrow">Growth systems for modern brands</span>
      </div>

      <h1 class="hero-heading mt-6 max-w-4xl" use:reveal={{ y: 24, delay: 200 }}>
        We build marketing
        <br />
        <span class="text-gradient-blue">systems that print</span>
        <br />
        predictable revenue
      </h1>

      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted" use:reveal={{ y: 20, delay: 350 }}>
        Battle-tested systems for SEO, paid media, automation, and conversion that turn traffic into pipeline. No fluff. No vanity metrics. Just results.
      </p>

      <div class="mt-8 flex flex-col gap-4 sm:flex-row" use:reveal={{ y: 20, delay: 500 }}>
        <a href="/contact" class="btn-primary">
          Get your free audit
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="/services" class="btn-outline">
          Explore services
        </a>
      </div>
    </div>

    <div class="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" use:reveal={{ y: 24, delay: 650 }}>
      {#each stats as stat, i}
        <div class="rounded-xl border border-border bg-white-pure p-4 sm:p-5 text-center transition-all duration-300 group" style="transition-delay: {i * 50}ms;">
          <p class="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{stat.value}</p>
          <p class="mt-1 text-xs text-muted font-medium">{stat.label}</p>
        </div>
      {/each}
    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none" aria-hidden="true">
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-muted/30">
      <rect x="1" y="1" width="14" height="22" rx="7"/>
      <circle cx="8" cy="8" r="2" fill="currentColor" class="animate-float"/>
    </svg>
  </div>
</section>
