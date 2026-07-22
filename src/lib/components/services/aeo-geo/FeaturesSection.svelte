<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Answer Engine Optimization', description: 'Structure content to be selected as the definitive answer by AI-powered search engines and chatbots.', icon: '💬', color: 'cyan' },
    { title: 'Generative Engine Optimization', description: 'Optimize for Google AI Overviews, Bing Chat, and Perplexity to appear in AI-generated responses.', icon: '🤖', color: 'blueprint' },
    { title: 'Structured Data & Schema', description: 'Implement JSON-LD schema markup that helps AI understand and cite your content accurately.', icon: '📐', color: 'hot' },
    { title: 'Voice Search Optimization', description: 'Rank for conversational queries as voice assistants become the primary search interface.', icon: '🎙️', color: 'lime' },
    { title: 'Featured Snippet Targeting', description: 'Win position zero with content formatted for Google\'s instant answer boxes and AI summaries.', icon: '🏆', color: 'accent' },
    { title: 'Content Authority Signals', description: 'Build E-E-A-T signals that make AI engines trust and prefer your content over competitors.', icon: '🛡️', color: 'blue-pop' },
    { title: 'Zero-Click Strategy', description: 'Capture attention in search results without requiring clicks. Brand visibility at scale.', icon: '⚡', color: 'cyan' },
    { title: 'AI Platform Monitoring', description: 'Track how AI engines reference your brand across ChatGPT, Perplexity, Claude, and Gemini.', icon: '📊', color: 'blueprint' }
  ];
</script>

<section id="features" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 section-heading max-w-3xl animate-text-reveal">
        Dominate the
        <br />
        <span class="gradient-text-cyan">AI search era.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-lg font-bold leading-snug text-ink/70">
        Traditional SEO isn't enough. We optimize for the platforms where your customers actually search now.
      </p>
    </div>

    <div class="feature-grid">
      {#each features as feature, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-4 sm:p-5 relative overflow-hidden group">
          <div class="absolute -top-3 -right-3 size-16 border-4 border-ink bg-{feature.color} rotate-6 opacity-15 group-hover:opacity-30 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <span class="text-3xl block mb-3">{feature.icon}</span>
          <h3 class="font-display text-xl tracking-[-0.06em] text-{feature.color} mb-2">{feature.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
