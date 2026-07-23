<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="section-padding relative overflow-hidden" aria-labelledby="payroll-cta-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-ink/5 via-transparent to-blue/5 pointer-events-none"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue/8 to-emerald/5 rounded-full blur-3xl pointer-events-none animate-float" aria-hidden="true"></div>

  <div use:reveal class="container-premium relative z-10">
    <div class="premium-card-blue overflow-hidden p-8 sm:p-12 lg:p-16 text-center relative animate-glow-pulse">
      <span class="section-label-insane inline-block mb-6">Ready to automate?</span>

      <h2 id="payroll-cta-heading" class="max-w-3xl mx-auto section-heading animate-text-reveal">
        Automate your
        <br />
        <span class="text-gradient-blue">payroll today.</span>
      </h2>

      <p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
        Get a free payroll audit. We'll show you exactly where you're losing time and money — and how to fix it.
      </p>

      <form class="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row" aria-label="Payroll audit request">
        <label class="sr-only" for="payroll-email">Email address</label>
        <input
          id="payroll-email"
          class="input-premium flex-1"
          type="email"
          placeholder="you@company.com"
          required
        />
        <button class="btn-blue whitespace-nowrap" type="submit">
          Get free audit
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </form>

      <p class="mt-5 text-xs font-medium text-muted">
        Free audit. No obligation. Cost analysis + savings projection + implementation timeline.
      </p>
    </div>
  </div>
</section>
