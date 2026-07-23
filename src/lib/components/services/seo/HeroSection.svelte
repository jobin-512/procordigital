<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero overflow-hidden bg-grid-subtle" aria-labelledby="seo-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue/5 via-transparent to-emerald/5 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">SEO Growth</span>
      <h1 id="seo-hero-heading" class="mt-8 hero-heading animate-text-reveal">
        Organic traffic
        <br />
        <span class="text-gradient-emerald">that compounds</span>
        <br />
        <span class="text-gradient-blue">every month.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
        SEO is a long game — but most agencies play it wrong. We build systems, not tasks. Technical foundations, content engines, and authority loops that compound over 6, 12, 24 months.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#contact" class="btn-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Start SEO growth
      </a>
      <a href="#process" class="btn-outline">See our process</a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg px-5 py-6 text-center">
        <p class="stat-number text-gradient-emerald">+312%</p>
        <p class="mt-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted">Avg organic growth</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg px-5 py-6 text-center">
        <p class="stat-number text-gradient-blue">247+</p>
        <p class="mt-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted">First-page keywords</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg px-5 py-6 text-center">
        <p class="stat-number text-gradient-emerald">90 days</p>
        <p class="mt-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted">ROI timeline</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg px-5 py-6 text-center">
        <p class="stat-number text-gradient-blue">12mo</p>
        <p class="mt-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted">Compounding asset</p>
      </div>
    </div>
  </div>
</section>
