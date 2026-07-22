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

<section id="aeo-geo" class="relative section-padding-lg noise-overlay grid-pattern-tight overflow-hidden" aria-labelledby="aeo-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-blueprint/5 pointer-events-none"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan/8 to-blueprint/8 rounded-full blur-3xl pointer-events-none"></div>

  <div class="container-brutal relative z-10 two-col-grid">
    <div use:reveal={{ x: -40 }} class="order-2 lg:order-1 brutal-card-insane bg-ink card-padding-lg text-white">
      <div class="mb-5 flex items-center gap-3 border-4 border-white bg-cyan p-4">
        <span class="text-3xl">🤖</span>
        <span class="font-black uppercase text-sm text-ink">AI-era search</span>
      </div>

      <ul class="space-y-3" role="list">
        {#each features as feature, i}
          <li class="flex items-center gap-3 text-sm font-bold text-white/80" use:reveal={{ y: 12, delay: 180 + i * 60 }}>
            <span class="w-6 h-6 border-3 border-white bg-cyan flex items-center justify-center text-xs text-ink flex-shrink-0">✓</span>
            {feature}
          </li>
        {/each}
      </ul>

      <div class="mt-6 pt-5 border-t-4 border-white">
        <a href="/services/aeo-geo" class="brutal-button-insane w-full justify-center bg-cyan text-ink hover:bg-lime">
          Learn more
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>

    <div use:reveal={{ x: 40, delay: 150 }} class="order-1 lg:order-2">
      <span class="section-label-insane">AEO & GEO</span>
      <h2 id="aeo-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        Get found in
        <br />
        <span class="gradient-text-cyan">AI overviews,</span>
        <br />
        <span class="gradient-text-hot">not just Google.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        Search is evolving. ChatGPT, Perplexity, and Google AI Overviews are stealing clicks. We optimize your content to be the source these AI engines cite — not the competitor they skip.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        {#each stats as stat, i}
          <div class="border-4 border-ink bg-white px-5 py-3 shadow-[4px_4px_0_#07111f]" use:reveal={{ y: 20, delay: 200 + i * 100 }}>
            <p class="stat-number text-cyan">{stat.value}</p>
            <p class="mt-1 font-black uppercase text-[10px] tracking-widest text-ink/50">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
