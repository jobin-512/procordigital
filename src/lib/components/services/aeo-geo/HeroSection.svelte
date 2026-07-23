<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero bg-ink overflow-hidden" aria-labelledby="aeo-hero-heading">
  <div class="orb-container" aria-hidden="true">
    <div class="orb orb--1"></div>
    <div class="orb orb--2"></div>
    <div class="orb orb--3"></div>
  </div>
  <div class="bg-noise-light"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">AEO & GEO</span>
      <h1 id="aeo-hero-heading" class="mt-8 hero-heading text-white">
        Get found in
        <br />
        <span class="text-gradient-blue">AI overviews,</span>
        <br />
        not just Google.
      </h1>
      <p class="mt-8 max-w-2xl text-lg lg:text-xl leading-relaxed text-white/60">
        ChatGPT, Perplexity, and Google AI Overviews are stealing your clicks. We optimize your content to be the source these AI engines cite — not the competitor they skip.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#contact" class="btn-primary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Dominate AI search
      </a>
      <a href="#process" class="btn-outline-light">See our process</a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="premium-card-dark p-5">
        <p class="stat-number-lg text-gradient-blue">+312%</p>
        <p class="mt-1 text-xs font-semibold uppercase tracking-widest text-white/40">AI visibility boost</p>
      </div>
      <div class="premium-card-dark p-5">
        <p class="stat-number-lg text-gradient-emerald">84%</p>
        <p class="mt-1 text-xs font-semibold uppercase tracking-widest text-white/40">Zero-click wins</p>
      </div>
      <div class="premium-card-dark p-5">
        <p class="stat-number-lg text-gradient-blue">Top 3</p>
        <p class="mt-1 text-xs font-semibold uppercase tracking-widest text-white/40">Voice search rank</p>
      </div>
      <div class="premium-card-dark p-5">
        <p class="stat-number-lg text-gradient-emerald">3x</p>
        <p class="mt-1 text-xs font-semibold uppercase tracking-widest text-white/40">Citation rate</p>
      </div>
    </div>
  </div>
</section>
