<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Technical SEO Audits', description: 'Deep-dive audits covering crawlability, indexation, Core Web Vitals, site speed, and architecture.' },
    { title: 'Content Strategy', description: 'Topic clusters, content gaps, editorial calendars, and keyword mapping for maximum topical authority.' },
    { title: 'Link Building & Digital PR', description: 'White-hat link acquisition through digital PR, guest posts, and high-authority placements.' },
    { title: 'Local SEO & GBP', description: 'Google Business Profile optimization, local citations, review management, and map pack domination.' },
    { title: 'Programmatic SEO', description: 'Scale to thousands of targeted pages automatically. Templates, data feeds, and dynamic content.' },
    { title: 'Keyword Research & Clusters', description: 'Data-driven keyword research organized into clusters that build topical authority and capture intent.' },
    { title: 'Site Architecture', description: 'Internal linking, URL structure, navigation, and information architecture optimized for crawlers and users.' },
    { title: 'Monthly Reporting', description: 'Transparent dashboards showing rankings, traffic, conversions, and ROI. No vanity metrics.' }
  ];
</script>

<section id="features" class="relative section-padding-lg overflow-hidden bg-grid-subtle" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-emerald/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 section-heading max-w-3xl animate-text-reveal">
        Every SEO lever.
        <br />
        <span class="text-gradient-emerald">Pulled to max.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        We don't do half-measures. Full technical, content, authority, and local SEO — all working together as one system.
      </p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {#each features as feature, i}
        <article use:reveal={{ y: 20, delay: i * 60 }} class="premium-card p-5 sm:p-6 group">
          <div class="w-8 h-px bg-gradient-to-r from-blue to-transparent mb-4 transition-all duration-300 group-hover:w-12"></div>
          <h3 class="font-display text-lg tracking-tight mb-2">{feature.title}</h3>
          <p class="text-sm leading-relaxed text-muted">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
