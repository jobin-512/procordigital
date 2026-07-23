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

<section id="website-development" class="relative section-padding-lg overflow-hidden" aria-labelledby="webdev-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-ink/3 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
      <div use:reveal={{ x: -20 }}>
        <span class="section-label-insane">Web Development</span>
        <h2 id="webdev-heading" class="mt-6 section-heading animate-text-reveal">
          Websites that
          <br />
          <span class="text-gradient-emerald">sell, not just</span>
          <br />
          <span class="text-gradient-blue">sit there.</span>
        </h2>
        <p class="mt-5 text-base leading-relaxed text-muted">
          We build fast, beautiful, conversion-optimized websites that turn visitors into customers. No templates. No cookie-cutter. Every pixel is intentional.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          {#each stats as stat, i}
            <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg px-4 py-3" use:reveal={{ y: 12, delay: 200 + i * 80 }}>
              <p class="font-semibold text-2xl tracking-tight text-gradient-blue">{stat.value}</p>
              <p class="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">{stat.label}</p>
            </div>
          {/each}
        </div>
      </div>

      <div use:reveal={{ x: 20, delay: 150 }} class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 sm:p-8">
        <div class="flex items-center gap-3 mb-5 pb-4 border-b border-black/5">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white text-sm font-semibold">W</span>
          <span class="font-semibold uppercase text-xs tracking-widest text-muted">What we deploy</span>
        </div>

        <ul class="space-y-3" role="list">
          {#each features as feature, i}
            <li class="flex items-center gap-3 text-sm font-medium text-muted" use:reveal={{ y: 8, delay: 180 + i * 60 }}>
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-ink flex items-center justify-center text-white text-[9px] font-bold">✓</span>
              {feature}
            </li>
          {/each}
        </ul>

        <div class="mt-6 pt-5 border-t border-black/5">
          <a href="/services/website-development" class="btn-primary w-full justify-center text-sm">
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
