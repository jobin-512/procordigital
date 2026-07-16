<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    'Custom website design & development',
    'Responsive mobile-first architecture',
    'CMS integration (WordPress, Sanity, Strapi)',
    'E-commerce solutions (Shopify, WooCommerce)',
    'Performance optimization & Core Web Vitals',
    'Accessibility compliance (WCAG 2.1)',
    'Conversion-focused landing pages',
    'Ongoing maintenance & support'
  ];

  const stats = [
    { label: 'Avg page load', value: '<1.2s' },
    { label: 'Conversion lift', value: '+47%' },
    { label: 'Uptime SLA', value: '99.9%' }
  ];
</script>

<section id="website-development" class="relative py-16 lg:py-24 noise-overlay grid-pattern" aria-labelledby="webdev-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blueprint/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
    <div use:reveal={{ x: -40 }}>
      <span class="section-label-insane">Web Development</span>
      <h2 id="webdev-heading" class="mt-6 font-display text-5xl lg:text-7xl tracking-[-0.08em] leading-[0.9] max-w-xl animate-text-reveal">
        Websites that
        <br />
        <span class="gradient-text-cyan">sell, not just</span>
        <br />
        <span class="gradient-text-hot">sit there.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        We build fast, beautiful, conversion-optimized websites that turn visitors into customers. No templates. No cookie-cutter. Every pixel is intentional.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        {#each stats as stat, i}
          <div class="border-4 border-ink bg-white px-5 py-3 shadow-[4px_4px_0_#07111f]" use:reveal={{ y: 20, delay: 200 + i * 100 }}>
            <p class="font-display text-3xl tracking-[-0.08em] text-blueprint">{stat.value}</p>
            <p class="mt-1 font-black uppercase text-[10px] tracking-widest text-ink/50">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>

    <div use:reveal={{ x: 40, delay: 150 }} class="brutal-card-insane bg-white p-6 sm:p-8">
      <div class="mb-5 flex items-center gap-3 border-4 border-ink bg-blueprint p-4">
        <span class="text-3xl">🌐</span>
        <span class="font-black uppercase text-sm text-white">What we deploy</span>
      </div>

      <ul class="space-y-3" role="list">
        {#each features as feature, i}
          <li class="flex items-center gap-3 text-sm font-bold text-ink/80" use:reveal={{ y: 12, delay: 180 + i * 60 }}>
            <span class="w-6 h-6 border-3 border-ink bg-blueprint flex items-center justify-center text-xs text-white flex-shrink-0">✓</span>
            {feature}
          </li>
        {/each}
      </ul>

      <div class="mt-6 pt-5 border-t-4 border-ink">
        <a href="/services/website-development" class="brutal-button-blue-insane w-full justify-center">
          Learn more
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
