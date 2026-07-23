<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="relative section-padding-hero overflow-hidden" aria-labelledby="mobile-cta-heading">
  <div class="absolute inset-0 bg-ink"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue/10 to-emerald/10 rounded-full blur-3xl pointer-events-none animate-float" aria-hidden="true"></div>
  <div class="absolute inset-0 bg-grid-subtle opacity-[0.03] pointer-events-none" aria-hidden="true"></div>

  <div class="container-narrow relative z-10 text-center">
    <div use:reveal={{ scale: 0.95 }}>
      <span class="badge-dark mb-6 animate-fade-up">Ready to build?</span>

      <h2 id="mobile-cta-heading" class="mt-8 hero-heading text-white animate-text-reveal">
        Let's build your
        <br />
        <span class="text-gradient-blue">dream app.</span>
      </h2>

      <p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 animate-fade-up" style="animation-delay: 200ms;">
        Tell us about your app idea. We will map the right solution and deliver a free proposal within 48 hours.
      </p>

      <form class="mx-auto mt-10 flex flex-col sm:flex-row gap-3 max-w-lg animate-fade-up" style="animation-delay: 350ms;" aria-label="App project inquiry">
        <label class="sr-only" for="mobile-email">Email address</label>
        <input
          id="mobile-email"
          class="input-premium-dark flex-1"
          type="email"
          placeholder="you@company.com"
          required
        />
        <button class="btn-blue whitespace-nowrap" type="submit">
          Get free proposal
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </form>

      <p class="mt-5 text-sm text-white/40 animate-fade-up" style="animation-delay: 500ms;">
        Free proposal. No obligation. Scope breakdown plus timeline plus cost estimate.
      </p>
    </div>
  </div>
</section>
