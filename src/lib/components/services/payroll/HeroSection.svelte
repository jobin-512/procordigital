<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative py-20 lg:py-32 noise-overlay grid-pattern-tight overflow-hidden" aria-labelledby="payroll-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-lime/10 via-transparent to-cyan/10 pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-lime/15 to-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">Payroll</span>
      <h1 id="payroll-hero-heading" class="mt-8 font-display text-6xl lg:text-8xl xl:text-9xl tracking-[-0.08em] leading-[0.85] animate-text-reveal">
        Payroll that
        <br />
        <span class="gradient-text-lime">runs itself.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-xl lg:text-2xl font-bold leading-snug text-ink/70 animate-slide-up" style="animation-delay: 200ms;">
        Stop wrestling with spreadsheets and manual calculations. Our payroll systems automate processing, filing, and compliance — so you focus on growing your team.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#contact" class="brutal-button-insane">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Automate payroll
      </a>
      <a href="#process" class="brutal-button-outline">See our process</a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-lime">99.99%</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Processing accuracy</p>
      </div>
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-hot">12 hrs</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Time saved weekly</p>
      </div>
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-cyan">$0</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Tax penalties</p>
      </div>
      <div class="border-4 border-ink bg-white p-5 shadow-[6px_6px_0_#07111f]">
        <p class="font-display text-4xl lg:text-5xl tracking-[-0.08em] text-blueprint">100%</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Compliance rate</p>
      </div>
    </div>
  </div>
</section>
