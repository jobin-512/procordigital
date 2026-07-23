<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="section-padding bg-ghost relative overflow-hidden" aria-labelledby="cta-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue/8 to-emerald/5 rounded-full blur-[120px] pointer-events-none"></div>

  <div use:reveal class="container-premium premium-card overflow-hidden bg-white-pure text-center relative z-10 p-8 sm:p-12 lg:p-16">
    <span class="badge">Start here</span>

    <h2 id="cta-heading" class="section-heading mt-6">
      Ready to build your
      <br />
      <span class="text-gradient-blue">next growth system?</span>
    </h2>

    <p class="mt-4 text-base leading-relaxed text-muted max-w-xl mx-auto">
      Tell us what you need. We'll map the right solution and deliver a free audit within 48 hours.
    </p>

    <div class="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
      <a href="/contact" class="btn-primary">
        Get my free audit
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="/case-studies" class="btn-outline">See our work</a>
    </div>

    <div class="mt-10 grid gap-4 sm:grid-cols-3 max-w-lg mx-auto">
      <div class="rounded-lg border border-border bg-ghost p-4">
        <p class="text-xs font-semibold uppercase tracking-wider text-blue-dark mb-1">Audit delivered</p>
        <p class="text-sm text-muted">48 hours max</p>
      </div>
      <div class="rounded-lg border border-border bg-ghost p-4">
        <p class="text-xs font-semibold uppercase tracking-wider text-blue-dark mb-1">Solution mapped</p>
        <p class="text-sm text-muted">Week 1 kickoff</p>
      </div>
      <div class="rounded-lg border border-border bg-ghost p-4">
        <p class="text-xs font-semibold uppercase tracking-wider text-blue-dark mb-1">Results measured</p>
        <p class="text-sm text-muted">Weekly reviews</p>
      </div>
    </div>
  </div>
</section>
