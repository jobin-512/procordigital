<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Custom Design', description: 'Bespoke UI/UX tailored to your brand and business goals. No cookie-cutter templates.', icon: '🎨', color: 'blueprint' },
    { title: 'Responsive Architecture', description: 'Mobile-first development that looks perfect on every screen size and device.', icon: '📱', color: 'cyan' },
    { title: 'CMS Integration', description: 'WordPress, Sanity, Strapi, or custom — manage your content without touching code.', icon: '📝', color: 'blue-pop' },
    { title: 'E-commerce Solutions', description: 'Shopify, WooCommerce, or custom stores built for maximum conversion.', icon: '🛒', color: 'hot' },
    { title: 'Performance Optimization', description: 'Core Web Vitals, lazy loading, image optimization — blazing fast load times.', icon: '⚡', color: 'accent' },
    { title: 'Accessibility (WCAG 2.1)', description: 'Inclusive design that works for everyone. Screen readers, keyboard nav, and more.', icon: '♿', color: 'lime' },
    { title: 'Conversion-Focused Pages', description: 'Landing pages engineered with psychological triggers and A/B testing frameworks.', icon: '🎯', color: 'blueprint' },
    { title: 'Analytics & Tracking', description: 'GA4, GTM, and conversion tracking set up from day one. Data-driven decisions.', icon: '📊', color: 'cyan' }
  ];
</script>

<section id="features" class="relative py-16 lg:py-24 noise-overlay grid-pattern" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blueprint/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 font-display text-5xl lg:text-7xl tracking-[-0.08em] leading-[0.9] max-w-3xl animate-text-reveal">
        Everything your
        <br />
        <span class="gradient-text-cyan">website needs.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-lg font-bold leading-snug text-ink/70">
        From design to deployment, we handle every layer of your web presence with precision engineering.
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {#each features as feature, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-5 relative overflow-hidden group">
          <div class="absolute -top-3 -right-3 size-16 border-4 border-ink bg-{feature.color} rotate-6 opacity-15 group-hover:opacity-30 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <span class="text-3xl block mb-3">{feature.icon}</span>
          <h3 class="font-display text-xl tracking-[-0.06em] text-{feature.color} mb-2">{feature.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
