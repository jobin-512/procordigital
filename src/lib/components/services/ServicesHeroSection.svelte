<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative py-20 lg:py-32 noise-overlay grid-pattern-tight overflow-hidden" aria-labelledby="services-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-blueprint/10 via-transparent to-cyan/10 pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-accent/15 to-hot/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-cyan/10 to-blueprint/10 rounded-full blur-3xl pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">Our Services</span>
      <h1 id="services-hero-heading" class="mt-8 font-display text-6xl lg:text-8xl xl:text-9xl tracking-[-0.08em] leading-[0.85] animate-text-reveal">
        Digital systems
        <br />
        <span class="gradient-text-cyan">that actually</span>
        <br />
        <span class="gradient-text-hot">move revenue.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-xl lg:text-2xl font-bold leading-snug text-ink/70 animate-slide-up" style="animation-delay: 200ms;">
        From websites to payroll, from SEO to compliance — we build, optimize, and manage the digital backbone of your business. One team. Zero handoff friction.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#website-development" class="brutal-button-blue-insane">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Explore services
      </a>
      <a href="#contact" class="brutal-button-outline">
        Get a free audit
      </a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-blueprint">7</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Services</p>
      </div>
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-hot">1</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Team</p>
      </div>
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-cyan">0</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Silos</p>
      </div>
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-lime">∞</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Scale</p>
      </div>
    </div>
  </div>
</section>
