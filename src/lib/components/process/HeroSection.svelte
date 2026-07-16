<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative py-20 lg:py-32 noise-overlay grid-pattern-tight overflow-hidden" aria-labelledby="process-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blueprint/10 pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-accent/15 to-blueprint/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-cyan/10 to-lime/10 rounded-full blur-3xl pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">The Procor Protocol</span>
      <h1 id="process-hero-heading" class="mt-8 font-display text-6xl lg:text-8xl xl:text-9xl tracking-[-0.08em] leading-[0.85] animate-text-reveal">
        No fluff.
        <br />
        <span class="gradient-text-blueprint">Just a clear</span>
        <br />
        <span class="gradient-text-accent">sprint path.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-xl lg:text-2xl font-bold leading-snug text-ink/70 animate-slide-up" style="animation-delay: 200ms;">
        The aesthetic is loud. The process is surgical. Each sprint ends with assets shipped, numbers reviewed, and the next bet placed.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#steps" class="brutal-button-blue-insane">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        See the process
      </a>
      <a href="#contact" class="brutal-button-outline">Get a free audit</a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-blueprint">4</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Sprint phases</p>
      </div>
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-hot">5 days</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">To first audit</p>
      </div>
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-cyan">30 days</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">To full build</p>
      </div>
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-lime">∞</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Optimization</p>
      </div>
    </div>
  </div>
</section>
