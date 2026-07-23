<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero overflow-hidden" aria-labelledby="services-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-ink/5 via-transparent to-blue/5 pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-blue/8 to-emerald/5 rounded-full blur-3xl pointer-events-none animate-float"></div>
  <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-emerald/5 to-ink/5 rounded-full blur-3xl pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">Our Services</span>
      <h1 id="services-hero-heading" class="mt-8 hero-heading animate-text-reveal">
        Digital systems
        <br />
        <span class="text-gradient-blue">that actually</span>
        <br />
        <span class="text-gradient-emerald">move revenue.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-lg leading-relaxed text-muted animate-fade-up" style="animation-delay: 200ms;">
        From websites to payroll, from SEO to compliance — we build, optimize, and manage the digital backbone of your business. One team. Zero handoff friction.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#website-development" class="btn-primary">
        Explore services
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="#contact" class="btn-outline">Get a free audit</a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-blue text-4xl font-semibold tracking-tight">7</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Services</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-emerald text-4xl font-semibold tracking-tight">1</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Team</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-blue text-4xl font-semibold tracking-tight">0</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Silos</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-emerald text-4xl font-semibold tracking-tight">∞</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Scale</p>
      </div>
    </div>
  </div>
</section>
