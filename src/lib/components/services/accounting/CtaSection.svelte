<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="relative px-4 section-padding-hero noise-overlay grid-pattern" aria-labelledby="accounting-cta-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-blueprint via-transparent to-cyan pointer-events-none opacity-40" aria-hidden="true"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-pop/10 to-blueprint/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

  <div use:reveal={{ scale: 0.95 }} class="container-brutal cta-card bg-blueprint z-10">
    <div class="absolute left-6 top-6 hidden h-16 w-16 border-4 border-white bg-accent md:block animate-floaty" aria-hidden="true"></div>
    <div class="absolute right-6 bottom-6 hidden h-20 w-20 border-4 border-white bg-blue-pop md:block animate-floaty [animation-delay:1.5s]" aria-hidden="true"></div>

    <span class="section-label-void inline-block mb-6 animate-slide-up">Ready for clarity?</span>

    <h2 id="accounting-cta-heading" class="mx-auto mt-6 max-w-4xl cta-heading text-white animate-text-reveal">
      Get your finances
      <br />
      <span class="text-accent">in order today.</span>
    </h2>

    <p class="mx-auto mt-6 max-w-2xl text-xl font-bold leading-snug text-blue-100 animate-slide-up" style="animation-delay: 200ms;">
      Get a free financial health check. We'll show you exactly where you stand and how to improve.
    </p>

    <form class="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-[1fr_auto] animate-slide-up" style="animation-delay: 350ms;" aria-label="Financial health check request">
      <label class="sr-only" for="accounting-email">Email address</label>
      <input
        id="accounting-email"
        class="border-4 border-ink bg-white px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-bold shadow-[5px_5px_0_#07111f] outline-none placeholder:text-ink/60 focus:bg-blue-pale transition-colors"
        type="email"
        placeholder="you@company.com"
        required
      />
      <button class="brutal-button-insane whitespace-nowrap bg-accent text-ink" type="submit">
        Get free health check
      </button>
    </form>

    <p class="mt-5 text-sm font-bold text-blue-200 animate-slide-up" style="animation-delay: 500ms;">
      Free health check. No obligation. Financial assessment + savings opportunities + action plan.
    </p>
  </div>
</section>

<style>
  @media (prefers-reduced-motion: reduce) {
    .animate-floaty { animation: none !important; }
  }
</style>
