<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="relative px-4 py-16 lg:py-28 noise-overlay grid-pattern" aria-labelledby="payroll-cta-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-lime via-transparent to-cyan pointer-events-none opacity-40" aria-hidden="true"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-lime/10 to-cyan/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

  <div use:reveal={{ scale: 0.95 }} class="container-brutal brutal-card-insane relative overflow-hidden bg-lime p-8 sm:p-12 lg:p-16 text-center z-10">
    <div class="absolute left-6 top-6 hidden h-16 w-16 border-4 border-ink bg-white md:block animate-floaty" aria-hidden="true"></div>
    <div class="absolute right-6 bottom-6 hidden h-20 w-20 border-4 border-ink bg-cyan md:block animate-floaty [animation-delay:1.5s]" aria-hidden="true"></div>

    <span class="section-label inline-block mb-6 animate-slide-up bg-white">Ready to automate?</span>

    <h2 id="payroll-cta-heading" class="mx-auto mt-6 max-w-4xl font-display text-5xl leading-[0.9] tracking-[-0.08em] sm:text-7xl lg:text-8xl text-ink animate-text-reveal">
      Automate your
      <br />
      <span class="gradient-text-cyan">payroll today.</span>
    </h2>

    <p class="mx-auto mt-6 max-w-2xl text-xl font-bold leading-snug text-ink/70 animate-slide-up" style="animation-delay: 200ms;">
      Get a free payroll audit. We'll show you exactly where you're losing time and money — and how to fix it.
    </p>

    <form class="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-[1fr_auto] animate-slide-up" style="animation-delay: 350ms;" aria-label="Payroll audit request">
      <label class="sr-only" for="payroll-email">Email address</label>
      <input
        id="payroll-email"
        class="border-4 border-ink bg-white px-5 py-4 text-lg font-bold shadow-[5px_5px_0_#07111f] outline-none placeholder:text-ink/60 focus:bg-blue-pale transition-colors"
        type="email"
        placeholder="you@company.com"
        required
      />
      <button class="brutal-button-blue-insane whitespace-nowrap" type="submit">
        Get free audit
      </button>
    </form>

    <p class="mt-5 text-sm font-bold text-ink/50 animate-slide-up" style="animation-delay: 500ms;">
      Free audit. No obligation. Cost analysis + savings projection + implementation timeline.
    </p>
  </div>
</section>

<style>
  @media (prefers-reduced-motion: reduce) {
    .animate-floaty { animation: none !important; }
  }
</style>
