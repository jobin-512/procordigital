<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="section-padding-hero relative overflow-hidden bg-ink" aria-labelledby="compliance-cta-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-ink via-ink to-emerald/10 pointer-events-none"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald/10 to-blue/5 rounded-full blur-3xl pointer-events-none animate-float"></div>

  <div use:reveal class="container-premium relative z-10 text-center">
    <span class="section-label-insane inline-block text-white/60 border-white/10">Ready for compliance?</span>
    <h2 id="compliance-cta-heading" class="mt-8 display-title text-white animate-text-reveal">
      Protect your
      <br />
      <span class="text-gradient-emerald">business today.</span>
    </h2>
    <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
      Get a free compliance assessment. We will show you exactly where your risks are and how to eliminate them.
    </p>

    <form class="mx-auto mt-10 grid max-w-lg gap-4 sm:grid-cols-[1fr_auto]" aria-label="Compliance assessment request">
      <label class="sr-only" for="compliance-email">Email address</label>
      <input
        id="compliance-email"
        class="input-premium-dark"
        type="email"
        placeholder="you@company.com"
        required
      />
      <button class="btn-blue whitespace-nowrap" type="submit">
        Get free assessment
      </button>
    </form>

    <p class="mt-5 text-sm font-medium text-white/40">
      Free assessment. No obligation. Risk report and remediation roadmap in 48 hours.
    </p>
  </div>
</section>
