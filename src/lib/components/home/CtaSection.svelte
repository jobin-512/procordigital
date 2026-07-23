<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="section-padding bg-ghost relative overflow-hidden" aria-labelledby="cta-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue/8 to-emerald/5 rounded-full blur-[120px] pointer-events-none animate-float"></div>

  <div use:reveal class="container-premium premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden bg-white-pure text-center relative z-10 p-8 sm:p-12 lg:p-16">
    <span class="badge">Start here</span>

    <h2 id="cta-heading" class="section-heading mt-6">
      Ready to solve your
      <br />
      <span class="text-gradient-blue">loudest growth</span>
      problem?
    </h2>

    <p class="mt-4 text-base leading-relaxed text-muted max-w-xl mx-auto">
      Tell us what is broken: flat traffic, weak leads, messy tracking, or a website that refuses to sell. We will map the next best sprint — free.
    </p>

    <form class="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" aria-label="Free audit request">
      <label class="sr-only" for="cta-email">Email address</label>
      <input
        id="cta-email"
        class="input-premium flex-1"
        type="email"
        placeholder="you@company.com"
        required
      />
      <button class="btn-primary whitespace-nowrap" type="submit">
        Get my free audit
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </form>

    <p class="mt-4 text-xs text-muted">
      No sales call. No obligation. You get a 127-point diagnostic, prioritized sprint backlog, and 30/60/90 revenue projection. In your inbox within 48 hours.
    </p>

    <div class="mt-10 grid gap-4 sm:grid-cols-3 max-w-lg mx-auto">
      <div class="rounded-lg border border-border bg-ghost p-4">
        <p class="text-xs font-semibold uppercase tracking-wider text-blue-dark mb-1">Audit delivered</p>
        <p class="text-sm text-muted">48 hours max</p>
      </div>
      <div class="rounded-lg border border-border bg-ghost p-4">
        <p class="text-xs font-semibold uppercase tracking-wider text-blue-dark mb-1">Sprint planned</p>
        <p class="text-sm text-muted">Week 1 launch</p>
      </div>
      <div class="rounded-lg border border-border bg-ghost p-4">
        <p class="text-xs font-semibold uppercase tracking-wider text-blue-dark mb-1">Results measured</p>
        <p class="text-sm text-muted">Weekly reviews</p>
      </div>
    </div>

    <div class="mt-10 pt-8 border-t border-border">
      <p class="text-xs text-muted mb-4">Still not sure?</p>
      <div class="flex flex-col gap-3 sm:flex-row justify-center">
        <a href="/services" class="btn-outline text-sm">
          See our packages
        </a>
        <a href="#faq" class="btn-outline text-sm">
          Read the FAQ
        </a>
      </div>
    </div>
  </div>
</section>
