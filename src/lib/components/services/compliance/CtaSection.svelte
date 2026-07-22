<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="relative px-4 section-padding-hero noise-overlay grid-pattern" aria-labelledby="compliance-cta-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-ink via-blueprint to-ink pointer-events-none opacity-90" aria-hidden="true"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/15 to-hot/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

  <div use:reveal={{ scale: 0.95 }} class="container-brutal cta-card bg-ink z-10">
    <div class="absolute left-6 top-6 hidden h-16 w-16 border-4 border-white bg-accent md:block animate-floaty" aria-hidden="true"></div>
    <div class="absolute right-6 bottom-6 hidden h-20 w-20 border-4 border-white bg-hot md:block animate-floaty [animation-delay:1.5s]" aria-hidden="true"></div>

    <span class="section-label-void inline-block mb-6 animate-slide-up">Ready for compliance?</span>

    <h2 id="compliance-cta-heading" class="mx-auto mt-6 max-w-4xl cta-heading text-white animate-text-reveal">
      Protect your
      <br />
      <span class="gradient-text-accent">business today.</span>
    </h2>

    <p class="mx-auto mt-6 max-w-2xl text-xl font-bold leading-snug text-white/70 animate-slide-up" style="animation-delay: 200ms;">
      Get a free compliance assessment. We'll show you exactly where your risks are — and how to eliminate them.
    </p>

    <form class="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-[1fr_auto] animate-slide-up" style="animation-delay: 350ms;" aria-label="Compliance assessment request">
      <label class="sr-only" for="compliance-email">Email address</label>
      <input
        id="compliance-email"
        class="border-4 border-white bg-void px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-bold shadow-[5px_5px_0_#fff04d] outline-none placeholder:text-white/40 focus:bg-blueprint transition-colors text-white"
        type="email"
        placeholder="you@company.com"
        required
      />
      <button class="brutal-button-insane whitespace-nowrap bg-accent text-ink" type="submit">
        Get free assessment
      </button>
    </form>

    <p class="mt-5 text-sm font-bold text-white/40 animate-slide-up" style="animation-delay: 500ms;">
      Free assessment. No obligation. Risk report + remediation roadmap in 48 hours.
    </p>
  </div>
</section>

<style>
  @media (prefers-reduced-motion: reduce) {
    .animate-floaty { animation: none !important; }
  }
</style>
