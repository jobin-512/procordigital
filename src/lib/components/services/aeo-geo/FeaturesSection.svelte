<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Answer Engine Optimization', description: 'Structure content to be selected as the definitive answer by AI-powered search engines and chatbots.', letter: 'A' },
    { title: 'Generative Engine Optimization', description: 'Optimize for Google AI Overviews, Bing Chat, and Perplexity to appear in AI-generated responses.', letter: 'G' },
    { title: 'Structured Data & Schema', description: 'Implement JSON-LD schema markup that helps AI understand and cite your content accurately.', letter: 'S' },
    { title: 'Voice Search Optimization', description: 'Rank for conversational queries as voice assistants become the primary search interface.', letter: 'V' },
    { title: 'Featured Snippet Targeting', description: 'Win position zero with content formatted for Google\'s instant answer boxes and AI summaries.', letter: 'F' },
    { title: 'Content Authority Signals', description: 'Build E-E-A-T signals that make AI engines trust and prefer your content over competitors.', letter: 'C' },
    { title: 'Zero-Click Strategy', description: 'Capture attention in search results without requiring clicks. Brand visibility at scale.', letter: 'Z' },
    { title: 'AI Platform Monitoring', description: 'Track how AI engines reference your brand across ChatGPT, Perplexity, Claude, and Gemini.', letter: 'M' }
  ];
</script>

<section id="features" class="relative section-padding-lg bg-white" aria-labelledby="features-heading">
  <div class="container-premium">
    <div use:reveal class="mb-14 lg:mb-18">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 section-heading max-w-3xl">
        Dominate the
        <br />
        <span class="text-gradient-emerald">AI search era.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        Traditional SEO isn't enough. We optimize for the platforms where your customers actually search now.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {#each features as feature, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="premium-card p-6 relative overflow-hidden group">
          <div class="flex items-center justify-center size-10 rounded-full bg-ink text-white text-sm font-bold mb-4">
            {feature.letter}
          </div>
          <h3 class="font-display text-lg font-semibold tracking-tight mb-2">{feature.title}</h3>
          <p class="text-sm leading-relaxed text-muted">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
