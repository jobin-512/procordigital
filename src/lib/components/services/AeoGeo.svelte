<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    'Answer Engine Optimization (AEO)',
    'Generative Engine Optimization (GEO)',
    'AI search visibility strategy',
    'Structured data & schema markup',
    'Voice search optimization',
    'Featured snippet & position zero targeting',
    'AI overview optimization',
    'Zero-click search strategy'
  ];

  const stats = [
    { label: 'AI visibility boost', value: '+312%' },
    { label: 'Zero-click wins', value: '84%' },
    { label: 'Voice search rank', value: 'Top 3' }
  ];
</script>

<section id="aeo-geo" class="relative section-padding-lg overflow-hidden" aria-labelledby="aeo-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-emerald/3 via-transparent to-ink/3 pointer-events-none"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-emerald/5 to-blue/5 rounded-full blur-3xl pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
      <div use:reveal={{ x: -20 }} class="order-2 lg:order-1 premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 sm:p-8">
        <div class="flex items-center gap-3 mb-5 pb-4 border-b border-black/5">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald text-white text-sm font-semibold">A</span>
          <span class="font-semibold uppercase text-xs tracking-widest text-muted">AI-era search</span>
        </div>

        <ul class="space-y-3" role="list">
          {#each features as feature, i}
            <li class="flex items-center gap-3 text-sm font-medium text-muted" use:reveal={{ y: 8, delay: 180 + i * 60 }}>
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-emerald flex items-center justify-center text-white text-[9px] font-bold">✓</span>
              {feature}
            </li>
          {/each}
        </ul>

        <div class="mt-6 pt-5 border-t border-black/5">
          <a href="/services/aeo-geo" class="btn-primary w-full justify-center text-sm">
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <div use:reveal={{ x: 20, delay: 150 }} class="order-1 lg:order-2">
        <span class="section-label-insane">AEO & GEO</span>
        <h2 id="aeo-heading" class="mt-6 section-heading animate-text-reveal">
          Get found in
          <br />
          <span class="text-gradient-emerald">AI overviews,</span>
          <br />
          <span class="text-gradient-blue">not just Google.</span>
        </h2>
        <p class="mt-5 text-base leading-relaxed text-muted">
          Search is evolving. ChatGPT, Perplexity, and Google AI Overviews are stealing clicks. We optimize your content to be the source these AI engines cite — not the competitor they skip.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          {#each stats as stat, i}
            <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg px-4 py-3" use:reveal={{ y: 12, delay: 200 + i * 80 }}>
              <p class="font-semibold text-2xl tracking-tight text-gradient-emerald">{stat.value}</p>
              <p class="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">{stat.label}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
