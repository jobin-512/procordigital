<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: 'Future-Proof Visibility', description: 'As AI search grows, brands optimized for AEO/GEO will dominate. Get ahead before competitors catch up.', stat: 'First mover' },
    { title: 'Zero-Click Branding', description: 'Appear in AI answers without requiring clicks. Your brand gets exposure even when users don\'t visit your site.', stat: '+312%' },
    { title: 'Voice Search Dominance', description: 'Rank #1 for voice queries as Siri, Alexa, and Google Assistant become primary search interfaces.', stat: 'Top 3' },
    { title: 'Higher Trust Signals', description: 'AI engines prefer authoritative sources. Our optimization makes your brand the trusted answer.', stat: '3x trust' },
    { title: 'Cross-Platform Presence', description: 'Get cited across ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews simultaneously.', stat: '5+ platforms' },
    { title: 'Measurable ROI', description: 'Track exactly how AI engines reference your brand with custom dashboards and reporting.', stat: 'Full visibility' }
  ];
</script>

<section id="benefits" class="relative section-padding-lg bg-ghost" aria-labelledby="benefits-heading">
  <div class="container-premium">
    <div use:reveal class="mb-14 lg:mb-18 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 section-heading max-w-4xl mx-auto">
        The future of search
        <br />
        <span class="text-gradient-blue">is already here.</span>
      </h2>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each benefits as benefit, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="premium-card p-6 relative overflow-hidden group">
          <div class="flex items-start justify-between gap-4 mb-3">
            <span class="text-2xl font-semibold tracking-tight text-gradient-blue">{benefit.stat}</span>
          </div>
          <h3 class="font-display text-xl font-semibold tracking-tight mb-2">{benefit.title}</h3>
          <p class="text-sm leading-relaxed text-muted">{benefit.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
