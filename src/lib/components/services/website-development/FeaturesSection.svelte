<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Custom Design', description: 'Bespoke UI/UX tailored to your brand and business goals. No cookie-cutter templates.', badge: 'CD' },
    { title: 'Responsive Architecture', description: 'Mobile-first development that looks perfect on every screen size and device.', badge: 'RA' },
    { title: 'CMS Integration', description: 'WordPress, Sanity, Strapi, or custom — manage your content without touching code.', badge: 'CM' },
    { title: 'E-commerce Solutions', description: 'Shopify, WooCommerce, or custom stores built for maximum conversion.', badge: 'EC' },
    { title: 'Performance Optimization', description: 'Core Web Vitals, lazy loading, image optimization — blazing fast load times.', badge: 'PO' },
    { title: 'Accessibility (WCAG 2.1)', description: 'Inclusive design that works for everyone. Screen readers, keyboard nav, and more.', badge: 'A11y' },
    { title: 'Conversion-Focused Pages', description: 'Landing pages engineered with psychological triggers and A/B testing frameworks.', badge: 'CF' },
    { title: 'Analytics & Tracking', description: 'GA4, GTM, and conversion tracking set up from day one. Data-driven decisions.', badge: 'AT' }
  ];
</script>

<section id="features" class="section-padding bg-ghost relative overflow-hidden" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue/3 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 section-heading max-w-3xl animate-text-reveal">
        Everything your
        <br />
        <span class="text-gradient-blue">website needs.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        From design to deployment, we handle every layer of your web presence with precision engineering.
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {#each features as feature, i}
        <article use:reveal={{ y: 24, delay: i * 60 }} class="premium-card p-6 sm:p-7 group relative overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-500">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-xs font-semibold tracking-tight text-blue mb-4 group-hover:bg-blue group-hover:text-ink transition-colors duration-300">{feature.badge}</span>
          <h3 class="text-base font-semibold tracking-tight mb-2">{feature.title}</h3>
          <p class="text-sm text-muted leading-relaxed">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
