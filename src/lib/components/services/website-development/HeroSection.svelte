<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero overflow-hidden" aria-labelledby="webdev-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-ink/5 via-transparent to-blue/5 pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue/8 to-emerald/5 rounded-full blur-3xl pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">Web Development</span>
      <h1 id="webdev-hero-heading" class="mt-8 display-title animate-text-reveal">
        Websites that
        <br />
        <span class="text-gradient-blue">sell, not just</span>
        <br />
        <span class="text-gradient-emerald">sit there.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-lg leading-relaxed text-muted animate-fade-up" style="animation-delay: 200ms;">
        Custom-built, conversion-optimized websites designed to turn your traffic into revenue. No templates. No shortcuts. Every pixel is intentional.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#contact" class="btn-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Start your project
      </a>
      <a href="#process" class="btn-outline">See our process</a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-blue text-4xl font-semibold tracking-tight">&lt;1.2s</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Avg load time</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-emerald text-4xl font-semibold tracking-tight">+47%</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Conversion lift</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-blue text-4xl font-semibold tracking-tight">99.9%</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Uptime SLA</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-emerald text-4xl font-semibold tracking-tight">100</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Lighthouse score</p>
      </div>
    </div>
  </div>
</section>
