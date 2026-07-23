<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="relative section-padding-hero bg-ink overflow-hidden" aria-labelledby="aeo-cta-heading">
  <div class="orb-container" aria-hidden="true">
    <div class="orb orb--1"></div>
    <div class="orb orb--2"></div>
  </div>
  <div class="bg-noise-light"></div>

  <div use:reveal={{ scale: 0.95 }} class="container-premium relative z-10 text-center">
    <span class="badge-dark inline-block mb-8">Ready for AI search?</span>

    <h2 id="aeo-cta-heading" class="mx-auto max-w-4xl hero-heading text-white">
      Own the AI
      <br />
      <span class="text-gradient-blue">search results.</span>
    </h2>

    <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
      Get a free AI search audit. We'll show you exactly how AI engines see your brand — and how to fix it.
    </p>

    <form class="mx-auto mt-10 max-w-xl flex flex-col sm:flex-row gap-3" aria-label="AI search audit request">
      <label class="sr-only" for="aeo-email">Email address</label>
      <input
        id="aeo-email"
        class="input-premium-dark flex-1"
        type="email"
        placeholder="you@company.com"
        required
      />
      <button class="btn-blue whitespace-nowrap" type="submit">
        Get AI audit
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </form>

    <p class="mt-5 text-sm text-white/40">
      Free audit. No obligation. AI citation report + optimization roadmap in 48 hours.
    </p>
  </div>
</section>
