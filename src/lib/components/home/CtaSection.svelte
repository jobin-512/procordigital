<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="relative px-4 py-16 lg:py-28 noise-overlay grid-pattern" aria-labelledby="cta-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-blueprint pointer-events-none opacity-50" aria-hidden="true"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-hot/10 to-cyan/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

  <div use:reveal={{ scale: 0.95 }} class="container-brutal brutal-card-insane relative overflow-hidden bg-accent p-8 sm:p-12 lg:p-16 text-center z-10">
    <div class="absolute left-6 top-6 hidden h-16 w-16 border-4 border-ink bg-blue-pop md:block animate-floaty" aria-hidden="true"></div>
    <div class="absolute right-6 bottom-6 hidden h-20 w-20 border-4 border-ink bg-hot md:block animate-floaty [animation-delay:1.5s]" aria-hidden="true"></div>
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>

    <span class="section-label bg-white inline-block mb-6 animate-slide-up">Final sprint starts here</span>

    <h2 id="cta-heading" class="mx-auto mt-6 max-w-4xl font-display text-5xl leading-[0.9] tracking-[-0.08em] sm:text-7xl lg:text-8xl animate-text-reveal">
      Ready to solve your
      <br />
      <span class="gradient-text-hot">loudest digital</span>
      <span class="gradient-text-cyan ml-2">problem?</span>
    </h2>

    <p class="mx-auto mt-6 max-w-2xl text-xl font-bold leading-snug text-ink/80 animate-slide-up" style="animation-delay: 200ms;">
      Tell us what is broken: flat traffic, weak leads, messy tracking, or a website that refuses to sell. We will map the next best sprint — free.
    </p>

    <form class="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-[1fr_auto] animate-slide-up" style="animation-delay: 350ms;" aria-label="Free audit request">
      <label class="sr-only" for="audit-email">Email address</label>
      <input
        id="audit-email"
        class="border-4 border-ink bg-white px-5 py-4 text-lg font-bold shadow-[5px_5px_0_#07111f] outline-none placeholder:text-ink/60 focus:bg-blue-pale transition-colors"
        type="email"
        placeholder="you@company.com"
        required
        aria-describedby="email-hint"
      />
      <button class="brutal-button-blue-insane whitespace-nowrap" type="submit">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M17 15v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6"/>
        </svg>
        Get my free audit
      </button>
    </form>

    <p id="email-hint" class="mt-5 text-sm font-bold text-ink/50 animate-slide-up" style="animation-delay: 500ms;">
      No sales call. No obligation. You get a 127-point diagnostic + prioritized sprint backlog + 30/60/90 revenue projection. In your inbox within 48 hours.
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
        <p class="mt-1 text-sm font-bold">Week 1 launch</p>
      </div>
      <div class="border-4 border-ink bg-white p-4 shadow-[4px_4px_0_#07111f]">
        <span class="text-3xl block mb-2">📈</span>
        <p class="font-black uppercase text-xs tracking-widest text-cyan">RESULTS MEASURED</p>
        <p class="mt-1 text-sm font-bold">Weekly reviews</p>
      </div>
    </div>

    <div class="mt-12 pt-8 border-t-4 border-ink animate-slide-up" style="animation-delay: 800ms;">
      <p class="font-black uppercase tracking-widest text-xs text-ink/50 mb-3">STILL NOT SURE?</p>
      <div class="flex flex-col gap-3 sm:flex-row justify-center">
        <a href="#audit" class="brutal-button-outline inline-flex items-center justify-center gap-2 px-6 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M17 15v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6"/>
          </svg>
          Run self-audit first
        </a>
        <a href="#packages" class="brutal-button inline-flex items-center justify-center gap-2 px-6 py-3 bg-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          See packages
        </a>
      </div>
    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8 pointer-events-none lg:hidden" aria-hidden="true">
    <div class="brutal-card-accent px-4 py-2 rotate-3 animate-floaty text-xs font-black">TAP TO EDIT</div>
    <div class="brutal-card-cyan px-4 py-2 -rotate-3 animate-floaty [animation-delay:1s] text-xs font-black">SCROLL UP</div>
  </div>
</section>

<style>
  @media (prefers-reduced-motion: reduce) {
    .animate-floaty {
      animation: none !important;
    }
  }
</style>