<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-padding bg-white relative overflow-hidden" aria-labelledby="newsletter-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-blue/5 to-transparent rounded-full blur-[100px] pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden bg-ink text-white-pure border-none">
      <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center p-8 sm:p-10 lg:p-12">
        <div>
          <span class="badge-dark">Growth Intel</span>
          <h2 id="newsletter-heading" class="section-heading mt-5 text-white-pure">
            Get brutally clear
            <br />
            <span class="text-gradient-blue">marketing</span>
            intel.
          </h2>
          <p class="mt-4 text-sm text-white/50 leading-relaxed max-w-md">
            One email every Thursday. Zero fluff. One teardown, one framework, one creative angle, one metric that matters. For founders and growth leads who build, not browse.
          </p>

          <div class="flex flex-wrap gap-4 mt-8">
            <div class="rounded-lg border border-border bg-surface px-4 py-3 text-center min-w-[100px]">
              <p class="text-lg font-semibold text-blue">47+</p>
              <p class="text-xs text-white/40">Issues shipped</p>
            </div>
            <div class="rounded-lg border border-border bg-surface px-4 py-3 text-center min-w-[100px]">
              <p class="text-lg font-semibold text-blue">3,847</p>
              <p class="text-xs text-white/40">Subscribers</p>
            </div>
            <div class="rounded-lg border border-border bg-surface px-4 py-3 text-center min-w-[100px]">
              <p class="text-lg font-semibold text-blue">0%</p>
              <p class="text-xs text-white/40">Fluff tolerance</p>
            </div>
          </div>
        </div>

        <form class="rounded-xl border border-border bg-surface p-6" aria-label="Newsletter signup">
          <label class="text-xs font-semibold uppercase tracking-widest text-blue block mb-3" for="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            class="input-premium-dark mb-3"
            type="email"
            placeholder="you@company.com"
            required
          />
          <button class="btn-blue w-full" type="submit">
            Join the operators
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"/>
            </svg>
          </button>
          <p class="mt-3 text-center text-xs text-white/30">No spam. Unsubscribe in one click.</p>
        </form>
      </div>
    </div>
  </div>
</section>
