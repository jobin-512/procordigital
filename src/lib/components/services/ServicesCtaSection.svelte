<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="relative section-padding-hero overflow-hidden" aria-labelledby="services-cta-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-blue/5 via-transparent to-emerald/5 pointer-events-none"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue/8 to-emerald/5 rounded-full blur-3xl pointer-events-none animate-float"></div>

  <div use:reveal class="container-premium">
    <div class="premium-card-blue relative overflow-hidden p-8 sm:p-12 lg:p-16 animate-glow-pulse">
      <div class="absolute -top-16 -right-16 w-32 h-32 border-2 border-blue/20 rounded-full opacity-20"></div>
      <div class="absolute -bottom-16 -left-16 w-40 h-40 border-2 border-emerald/20 rounded-full opacity-20"></div>

      <span class="badge mb-6">Let's build together</span>

      <h2 id="services-cta-heading" class="max-w-3xl display-title animate-text-reveal">
        Ready to scale
        <br />
        <span class="text-gradient-blue">your digital</span>
        <span class="text-gradient-emerald ml-2">operations?</span>
      </h2>

      <p class="mt-6 max-w-2xl text-base leading-relaxed text-muted animate-fade-up" style="animation-delay: 200ms;">
        Tell us what you need — a single service or the full stack. We'll map the right solution and deliver a free audit within 48 hours.
      </p>

      <form class="mt-8 grid max-w-xl gap-3 sm:grid-cols-[1fr_auto] animate-fade-up" style="animation-delay: 350ms;" aria-label="Service inquiry">
        <label class="sr-only" for="services-email">Email address</label>
        <input
          id="services-email"
          class="input-premium"
          type="email"
          placeholder="you@company.com"
          required
          aria-describedby="services-email-hint"
        />
        <button class="btn-blue whitespace-nowrap" type="submit">
          Get my free audit
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </form>

      <p id="services-email-hint" class="mt-4 text-sm text-muted animate-fade-up" style="animation-delay: 500ms;">
        No sales call. No obligation. You get a prioritized audit + sprint roadmap + revenue projection. In your inbox within 48 hours.
      </p>

      <div class="mt-10 grid gap-4 sm:grid-cols-3 animate-fade-up" style="animation-delay: 650ms;" role="list" aria-label="What happens next">
        <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-5">
          <p class="text-xs font-semibold uppercase tracking-widest text-gradient-blue">AUDIT DELIVERED</p>
          <p class="mt-1 text-sm font-medium text-muted">48 hours max</p>
        </div>
        <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-5">
          <p class="text-xs font-semibold uppercase tracking-widest text-gradient-emerald">SOLUTION MAPPED</p>
          <p class="mt-1 text-sm font-medium text-muted">Week 1 kickoff</p>
        </div>
        <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-5">
          <p class="text-xs font-semibold uppercase tracking-widest text-gradient-blue">RESULTS DELIVERED</p>
          <p class="mt-1 text-sm font-medium text-muted">Weekly reviews</p>
        </div>
      </div>
    </div>
  </div>
</section>
