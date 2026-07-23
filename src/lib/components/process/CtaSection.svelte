<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="relative px-4 section-padding-hero noise-overlay grid-pattern" aria-labelledby="process-cta-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-blueprint pointer-events-none opacity-50" aria-hidden="true"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-hot/10 to-cyan/10 rounded-full blur-3xl pointer-events-none animate-float" aria-hidden="true"></div>

  <div use:reveal={{ scale: 0.95 }} class="container-brutal cta-card bg-accent z-10">
    <div class="absolute left-6 top-6 hidden h-16 w-16 border-4 border-ink bg-blue-pop md:block animate-floaty" aria-hidden="true"></div>
    <div class="absolute right-6 bottom-6 hidden h-20 w-20 border-4 border-ink bg-hot md:block animate-floaty [animation-delay:1.5s]" aria-hidden="true"></div>

    <span class="section-label bg-white inline-block mb-6 animate-slide-up">Ready to start?</span>

    <h2 id="process-cta-heading" class="cta-heading mx-auto mt-6 max-w-4xl animate-text-reveal">
      Let's run the
      <br />
      <span class="gradient-text-hot">protocol on</span>
      <span class="gradient-text-cyan ml-2">your business.</span>
    </h2>

    <p class="mx-auto mt-6 max-w-2xl text-xl font-bold leading-snug text-muted animate-slide-up" style="animation-delay: 200ms;">
      Tell us what's broken. We'll map the right sprint and deliver a free audit within 48 hours.
    </p>

    <form class="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-[1fr_auto] animate-slide-up" style="animation-delay: 350ms;" aria-label="Process inquiry">
      <label class="sr-only" for="process-email">Email address</label>
      <input
        id="process-email"
        class="border-4 border-ink bg-white px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-bold shadow-[5px_5px_0_#07111f] outline-none placeholder:text-muted focus:bg-blue-pale transition-colors"
        type="email"
        placeholder="you@company.com"
        required
      />
      <button class="brutal-button-blue-insane whitespace-nowrap" type="submit">
        Get free audit
      </button>
    </form>

    <p class="mt-5 text-sm font-bold text-muted animate-slide-up" style="animation-delay: 500ms;">
      Free audit. No obligation. 127-point diagnostic + sprint roadmap + revenue projection.
    </p>

    <div class="mt-10 grid gap-4 md:grid-cols-3 animate-slide-up" style="animation-delay: 650ms;" role="list" aria-label="What happens next">
      <div class="border-4 border-ink bg-white p-4 shadow-[4px_4px_0_#07111f]">
        <span class="text-3xl block mb-2">📋</span>
        <p class="font-black uppercase text-xs tracking-widest text-blueprint">AUDIT DELIVERED</p>
        <p class="mt-1 text-sm font-bold">48 hours max</p>
      </div>
      <div class="border-4 border-ink bg-white p-4 shadow-[4px_4px_0_#07111f]">
        <span class="text-3xl block mb-2">🎯</span>
        <p class="font-black uppercase text-xs tracking-widest text-hot">SPRINT PLANNED</p>
        <p class="mt-1 text-sm font-bold">Week 1 kickoff</p>
      </div>
      <div class="border-4 border-ink bg-white p-4 shadow-[4px_4px_0_#07111f]">
        <span class="text-3xl block mb-2">📈</span>
        <p class="font-black uppercase text-xs tracking-widest text-cyan">RESULTS MEASURED</p>
        <p class="mt-1 text-sm font-bold">Weekly reviews</p>
      </div>
    </div>
  </div>
</section>

<style>
  @media (prefers-reduced-motion: reduce) {
    .animate-floaty { animation: none !important; }
  }
</style>
