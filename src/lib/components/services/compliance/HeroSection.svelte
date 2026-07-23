<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero overflow-hidden" aria-labelledby="compliance-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-ink/5 via-transparent to-emerald/5 pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-emerald/8 to-blue/5 rounded-full blur-3xl pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">Compliance</span>
      <h1 id="compliance-hero-heading" class="mt-8 display-title animate-text-reveal">
        Stay compliant.
        <br />
        <span class="text-gradient-emerald">Stay protected.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-lg leading-relaxed text-muted animate-fade-up" style="animation-delay: 200ms;">
        Regulations change fast. We keep your business ahead of them. From GDPR to HIPAA, SOX to industry-specific mandates — we audit, document, and monitor so you never face a penalty.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#contact" class="btn-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Get compliant
      </a>
      <a href="#process" class="btn-outline">See our process</a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-blue text-4xl font-semibold tracking-tight">100%</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Audit pass rate</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-emerald text-4xl font-semibold tracking-tight">-78%</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Risk reduction</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-blue text-4xl font-semibold tracking-tight">23</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Avg gaps found</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-emerald text-4xl font-semibold tracking-tight">$0</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Penalties incurred</p>
      </div>
    </div>
  </div>
</section>
