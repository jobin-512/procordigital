<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Technical SEO Audits', description: 'Deep-dive audits covering crawlability, indexation, Core Web Vitals, site speed, and architecture.', icon: '🔧', color: 'blueprint' },
    { title: 'Content Strategy', description: 'Topic clusters, content gaps, editorial calendars, and keyword mapping for maximum topical authority.', icon: '📝', color: 'cyan' },
    { title: 'Link Building & Digital PR', description: 'White-hat link acquisition through digital PR, guest posts, and high-authority placements.', icon: '🔗', color: 'hot' },
    { title: 'Local SEO & GBP', description: 'Google Business Profile optimization, local citations, review management, and map pack domination.', icon: '📍', color: 'lime' },
    { title: 'Programmatic SEO', description: 'Scale to thousands of targeted pages automatically. Templates, data feeds, and dynamic content.', icon: '⚙️', color: 'accent' },
    { title: 'Keyword Research & Clusters', description: 'Data-driven keyword research organized into clusters that build topical authority and capture intent.', icon: '🎯', color: 'blue-pop' },
    { title: 'Site Architecture', description: 'Internal linking, URL structure, navigation, and information architecture optimized for crawlers and users.', icon: '📐', color: 'blueprint' },
    { title: 'Monthly Reporting', description: 'Transparent dashboards showing rankings, traffic, conversions, and ROI. No vanity metrics.', icon: '📊', color: 'cyan' }
  ];
</script>

<section id="features" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blueprint/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 section-heading max-w-3xl animate-text-reveal">
        Every SEO lever.
        <br />
        <span class="gradient-text-cyan">Pulled to max.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-lg font-bold leading-snug text-ink/70">
        We don't do half-measures. Full technical, content, authority, and local SEO — all working together as one system.
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
