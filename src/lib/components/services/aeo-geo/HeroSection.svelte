<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero noise-overlay grid-pattern-tight overflow-hidden" aria-labelledby="aeo-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-blueprint/10 pointer-events-none"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan/12 to-blueprint/8 rounded-full blur-3xl pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">AEO & GEO</span>
      <h1 id="aeo-hero-heading" class="mt-8 hero-heading-xl animate-text-reveal">
        Get found in
        <br />
        <span class="gradient-text-cyan">AI overviews,</span>
        <br />
        <span class="gradient-text-hot">not just Google.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-xl lg:text-2xl font-bold leading-snug text-ink/70 animate-slide-up" style="animation-delay: 200ms;">
        ChatGPT, Perplexity, and Google AI Overviews are stealing your clicks. We optimize your content to be the source these AI engines cite — not the competitor they skip.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#contact" class="brutal-button-blue-insane">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Dominate AI search
      </a>
      <a href="#process" class="brutal-button-outline">See our process</a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      <div class="border-4 border-ink bg-white card-padding shadow-[6px_6px_0_#07111f]">
        <p class="stat-number-lg text-cyan">+312%</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">AI visibility boost</p>
      </div>
      <div class="border-4 border-ink bg-white card-padding shadow-[6px_6px_0_#07111f]">
        <p class="stat-number-lg text-blueprint">84%</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Zero-click wins</p>
      </div>
      <div class="border-4 border-ink bg-white card-padding shadow-[6px_6px_0_#07111f]">
        <p class="stat-number-lg text-hot">Top 3</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Voice search rank</p>
      </div>
      <div class="border-4 border-ink bg-white card-padding shadow-[6px_6px_0_#07111f]">
        <p class="stat-number-lg text-lime">3x</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Citation rate</p>
      </div>
    </div>
  </div>
</section>
