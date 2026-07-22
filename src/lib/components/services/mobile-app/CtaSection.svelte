<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="relative px-4 section-padding-hero noise-overlay grid-pattern" aria-labelledby="mobile-cta-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-hot via-transparent to-accent pointer-events-none opacity-40" aria-hidden="true"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-hot/10 to-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

  <div use:reveal={{ scale: 0.95 }} class="container-brutal cta-card bg-hot z-10">
    <div class="absolute left-6 top-6 hidden h-16 w-16 border-4 border-white bg-accent md:block animate-floaty" aria-hidden="true"></div>
    <div class="absolute right-6 bottom-6 hidden h-20 w-20 border-4 border-white bg-blueprint md:block animate-floaty [animation-delay:1.5s]" aria-hidden="true"></div>

    <span class="section-label-void inline-block mb-6 animate-slide-up">Ready to build?</span>

    <h2 id="mobile-cta-heading" class="mx-auto mt-6 max-w-4xl cta-heading text-white animate-text-reveal">
      Let's build your
      <br />
      <span class="text-accent">dream app.</span>
    </h2>

    <p class="mx-auto mt-6 max-w-2xl text-xl font-bold leading-snug text-white/80 animate-slide-up" style="animation-delay: 200ms;">
      Tell us about your app idea. We'll map the right solution and deliver a free proposal within 48 hours.
    </p>

    <form class="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-[1fr_auto] animate-slide-up" style="animation-delay: 350ms;" aria-label="App project inquiry">
      <label class="sr-only" for="mobile-email">Email address</label>
      <input
        id="mobile-email"
        class="border-4 border-ink bg-white px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-bold shadow-[5px_5px_0_#07111f] outline-none placeholder:text-ink/60 focus:bg-blue-pale transition-colors"
        type="email"
        placeholder="you@company.com"
        required
      />
      <button class="brutal-button-insane whitespace-nowrap bg-accent text-ink" type="submit">
        Get free proposal
      </button>
    </form>

    <p class="mt-5 text-sm font-bold text-white/60 animate-slide-up" style="animation-delay: 500ms;">
      Free proposal. No obligation. Scope breakdown + timeline + cost estimate.
    </p>
  </div>
</section>

<style>
  @media (prefers-reduced-motion: reduce) {
    .animate-floaty { animation: none !important; }
  }
</style>
