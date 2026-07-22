<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="newsletter-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-blueprint/5 via-transparent to-hot/5 pointer-events-none" aria-hidden="true"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-accent/10 to-cyan/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal={{ scale: 0.96 }} class="brutal-card-insane grid gap-8 bg-blueprint p-8 text-white lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-12">
      <div class="relative">
        <div class="absolute -top-4 -left-4 size-16 border-4 border-white/20 bg-accent/20 rotate-6 opacity-50" aria-hidden="true"></div>

        <span class="section-label bg-accent text-ink">Growth Intel</span>
        <h2 id="newsletter-heading" class="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.08em] sm:text-6xl lg:text-7xl animate-text-reveal">
          Get brutally clear
          <br />
          <span class="gradient-text-accent">marketing</span>
          <span class="gradient-text-cyan ml-2">intel.</span>
        </h2>
        <p class="mt-5 text-lg font-bold leading-snug text-blue-50 max-w-xl">
          One email every Thursday. Zero fluff. One teardown, one framework, one creative angle, one metric that matters. For founders and growth leads who build, don't browse.
        </p>

        <div class="mt-8 grid gap-3 sm:grid-cols-3">
          <div class="border-3 border-white/20 p-4 text-center">
            <p class="font-display text-2xl tracking-[-0.08em] text-accent">47+</p>
            <p class="text-xs font-black uppercase tracking-wider text-blue-50">Issues shipped</p>
          </div>
          <div class="border-3 border-white/20 p-4 text-center">
            <p class="font-display text-2xl tracking-[-0.08em] text-cyan">3,847</p>
            <p class="text-xs font-black uppercase tracking-wider text-blue-50">Operators subscribed</p>
          </div>
          <div class="border-3 border-white/20 p-4 text-center">
            <p class="font-display text-2xl tracking-[-0.08em] text-lime">0%</p>
            <p class="text-xs font-black uppercase tracking-wider text-blue-50">Fluff tolerance</p>
          </div>
        </div>

        <div class="mt-8 p-4 border-3 border-white/20 bg-white/5">
          <p class="font-black uppercase text-xs tracking-widest text-accent mb-2">LATEST EDITION PREVIEW</p>
          <p class="font-bold text-white/90 text-sm">"The $38 CAC Framework: How a DTC brand killed creative fatigue with a 12-concept testing loop + the exact Notion template we use"</p>
          <a href="#contact" class="inline-flex items-center gap-2 mt-3 text-sm font-black uppercase tracking-wider text-accent hover:text-lime transition-colors">
            Read full archive →
          </a>
        </div>
      </div>

      <form class="relative border-4 border-white bg-ink p-6 shadow-[8px_8px_0_#fff04d]" aria-label="Newsletter signup">
        <div class="absolute -top-3 -right-3 size-12 border-3 border-white/20 bg-accent/20 rotate-6 opacity-50" aria-hidden="true"></div>

        <label class="font-black uppercase tracking-widest text-xs text-accent block mb-3" for="newsletter-email">Email address</label>
        <input
          id="newsletter-email"
          class="w-full border-4 border-white bg-void px-5 py-5 font-bold outline-none placeholder:text-white/40 focus:border-accent focus:bg-white/5 transition-colors"
          type="email"
          placeholder="you@company.com"
          required
        />
        <button class="brutal-button-blue mt-4 w-full" type="submit">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
            <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"/>
          </svg>
          Join the operators
        </button>

        <p class="mt-4 text-center text-xs font-bold text-white/50">No spam. Unsubscribe in one click. <a href="#contact" class="text-accent hover:text-lime underline">See past issues →</a></p>
      </form>
    </div>

    <div use:reveal={{ delay: 400, y: 20 }} class="mt-10 lg:mt-14 text-center">
      <p class="font-black uppercase tracking-widest text-sm mb-4 gradient-text-ink">Prefer the feed?</p>
      <div class="flex flex-col gap-3 sm:flex-row justify-center">
        <a href="#contact" class="brutal-button-outline inline-flex items-center justify-center gap-2 text-sm px-5 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.579v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          Follow on Twitter
        </a>
        <a href="#contact" class="brutal-button-outline inline-flex items-center justify-center gap-2 text-sm px-5 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          Connect on LinkedIn
        </a>
        <a href="#contact" class="brutal-button-outline inline-flex items-center justify-center gap-2 text-sm px-5 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.579v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          Subscribe on YouTube
        </a>
      </div>
    </div>
  </div>
</section>