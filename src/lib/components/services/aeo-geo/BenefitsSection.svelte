<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: 'Future-Proof Visibility', description: 'As AI search grows, brands optimized for AEO/GEO will dominate. Get ahead before competitors catch up.', stat: 'First mover', icon: '🔮' },
    { title: 'Zero-Click Branding', description: 'Appear in AI answers without requiring clicks. Your brand gets exposure even when users don\'t visit your site.', stat: '+312%', icon: '⚡' },
    { title: 'Voice Search Dominance', description: 'Rank #1 for voice queries as Siri, Alexa, and Google Assistant become primary search interfaces.', stat: 'Top 3', icon: '🎙️' },
    { title: 'Higher Trust Signals', description: 'AI engines prefer authoritative sources. Our optimization makes your brand the trusted answer.', stat: '3x trust', icon: '🛡️' },
    { title: 'Cross-Platform Presence', description: 'Get cited across ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews simultaneously.', stat: '5+ platforms', icon: '🌐' },
    { title: 'Measurable ROI', description: 'Track exactly how AI engines reference your brand with custom dashboards and reporting.', stat: 'Full visibility', icon: '📊' }
  ];
</script>

<section id="benefits" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-lime/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 section-heading max-w-4xl mx-auto animate-text-reveal">
        The future of search
        <br />
        <span class="gradient-text-cyan">is already here.</span>
      </h2>
    </div>

    <div class="benefit-grid">
      {#each benefits as benefit, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-5 sm:p-6 bg-white relative overflow-hidden group">
          <div class="absolute -bottom-4 -right-4 size-20 border-4 border-ink bg-cyan rotate-12 opacity-10 group-hover:opacity-20 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <div class="flex items-start justify-between gap-3 mb-3">
            <span class="text-3xl">{benefit.icon}</span>
            <span class="font-display text-2xl tracking-[-0.06em] text-cyan">{benefit.stat}</span>
          </div>
          <h3 class="font-display text-xl tracking-[-0.06em] mb-2">{benefit.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{benefit.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
