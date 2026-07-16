<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative py-20 lg:py-32 noise-overlay grid-pattern-tight overflow-hidden" aria-labelledby="seo-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-blueprint/10 via-transparent to-lime/10 pointer-events-none"></div>
  <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blueprint/15 to-lime/10 rounded-full blur-3xl pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">SEO Growth</span>
      <h1 id="seo-hero-heading" class="mt-8 font-display text-6xl lg:text-8xl xl:text-9xl tracking-[-0.08em] leading-[0.85] animate-text-reveal">
        Organic traffic
        <br />
        <span class="gradient-text-cyan">that compounds</span>
        <br />
        <span class="gradient-text-hot">every month.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-xl lg:text-2xl font-bold leading-snug text-ink/70 animate-slide-up" style="animation-delay: 200ms;">
        SEO is a long game — but most agencies play it wrong. We build systems, not tasks. Technical foundations, content engines, and authority loops that compound over 6, 12, 24 months.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#contact" class="brutal-button-blue-insane">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Start SEO growth
      </a>
      <a href="#process" class="brutal-button-outline">See our process</a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-blueprint">+312%</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Avg organic growth</p>
      </div>
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-hot">247+</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">First-page keywords</p>
      </div>
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-cyan">90 days</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">ROI timeline</p>
      </div>
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-lime">12mo</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Compounding asset</p>
      </div>
    </div>
  </div>
</section>
