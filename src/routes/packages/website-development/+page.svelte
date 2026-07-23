<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const plans = [
    { name: 'Starter Site', price: '$2,997', period: 'one-time', desc: 'Perfect for startups and small businesses needing a professional online presence fast.', features: ['5-page responsive website', 'Mobile-first design', 'Basic SEO setup', 'Contact form integration', 'Social media links', '1 round of revisions'], popular: false },
    { name: 'Business Pro', price: '$6,997', period: 'one-time', desc: 'A full-featured business website with advanced functionality and conversion optimization.', features: ['Up to 12 pages', 'Custom design system', 'Advanced SEO architecture', 'Blog/News section', 'Analytics integration', 'CMS handoff training', 'Performance optimization', '3 rounds of revisions'], popular: true },
    { name: 'Enterprise', price: '$14,997', period: 'one-time', desc: 'A custom platform built for scale. Multi-site, multi-language, or SaaS-ready.', features: ['Unlimited pages', 'Custom post types', 'Multi-language support', 'Custom integrations', 'Load testing & CDN', 'Security hardening', 'API development', 'Dedicated project manager', 'Priority support'], popular: false },
  ];

  const steps = [
    { title: 'Discovery & Strategy', desc: 'We learn your business, audience, and goals. Information architecture, sitemap, and content strategy.' },
    { title: 'Design & Build', desc: 'Custom wireframes, high-fidelity design in Figma, then build in a modern stack optimized for speed and SEO.' },
    { title: 'Launch & Optimize', desc: 'QA, performance tuning, CDN setup, analytics, then launch. We monitor and optimize post-launch.' },
  ];

  const diffs = [
    { title: 'Not templates. Real code.', desc: 'Every site is hand-built with a modern stack — no WordPress, no page builders. Faster, safer, and fully customizable.' },
    { title: 'Built for conversion.', desc: 'Information architecture, copy layout, CTA placement — every pixel is designed to turn visitors into customers.' },
    { title: 'You own everything.', desc: 'Full source code, design files, and assets delivered at the end. No platform lock-in. No recurring fees for access.' },
  ];

  const faqs = [
    { q: 'How long does a website take?', a: 'A 5-page site typically ships in 2-3 weeks. The Business Pro package takes 4-6 weeks. Enterprise builds are scoped based on complexity.' },
    { q: 'Do you use templates or page builders?', a: 'Never. Every site is custom-built from scratch using SvelteKit, Astro, or Next.js depending on your needs. No WordPress. No Elementor.' },
    { q: 'What if I need ongoing updates?', a: 'We offer maintenance retainers and can hand off with full CMS training. You\'re never locked in.' },
  ];

  let openIndex = $state<number | null>(null);
</script>

<svelte:head>
  <title>Website Development Packages — Procor Digital</title>
  <meta name="description" content="Custom websites built for conversion. From startup landing pages to enterprise platforms." />
</svelte:head>

<section class="relative section-padding-hero overflow-hidden bg-white">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue/8 to-emerald/5 rounded-full blur-3xl pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10 pt-16 lg:pt-24">
    <div use:reveal class="max-w-4xl text-center mx-auto">
      <a href="/packages" class="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors mb-6">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to packages
      </a>
      <span class="eyebrow">Website Development</span>
      <h1 class="hero-heading mt-6">
        Websites that
        <br />
        <span class="text-gradient-blue">actually sell.</span>
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted mx-auto">
        Not templates. Not page builders. Custom-built websites optimized for speed, SEO, and conversion.
      </p>
    </div>
  </div>
</section>

<section class="section-padding bg-ghost">
  <div class="container-premium">
    <div class="grid gap-6 lg:grid-cols-3">
      {#each plans as plan, i}
        <article use:reveal={{ y: 20, delay: i * 80 }} class="premium-card p-6 sm:p-7 flex flex-col relative {plan.popular ? 'border-blue/30' : ''}">
          {#if plan.popular}
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 badge">Most popular</span>
          {/if}
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 text-blue text-sm font-semibold mb-4">{String(i + 1).padStart(2, '0')}</span>
          <h2 class="text-lg font-semibold tracking-tight">{plan.name}</h2>
          <p class="text-sm text-muted mt-1">{plan.desc}</p>
          <div class="mt-4 mb-6">
            <span class="text-3xl font-semibold tracking-tight">{plan.price}</span>
            <span class="text-sm text-muted">/{plan.period}</span>
          </div>
          <ul class="space-y-2.5 flex-1">
            {#each plan.features as f}
              <li class="flex items-start gap-2.5 text-sm text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                {f}
              </li>
            {/each}
          </ul>
          <a href="/contact" class={plan.popular ? 'btn-blue mt-8 w-full justify-center' : 'btn-outline mt-8 w-full justify-center'}>
            {plan.popular ? 'Get started' : 'Learn more'}
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section-padding bg-white">
  <div class="container-premium">
    <div use:reveal class="text-center max-w-3xl mx-auto mb-12">
      <span class="eyebrow">How it works</span>
      <h2 class="section-heading mt-5">From idea to <span class="text-gradient-blue">live site.</span></h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">A clear 3-phase process. No endless loops. No surprise fees.</p>
    </div>
    <div class="grid gap-6 md:grid-cols-3">
      {#each steps as step, i}
        <div use:reveal={{ y: 20, delay: i * 80 }} class="premium-card p-6 sm:p-7">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 text-blue text-sm font-semibold mb-4">0{i + 1}</span>
          <h3 class="text-base font-semibold tracking-tight mb-2">{step.title}</h3>
          <p class="text-sm text-muted leading-relaxed">{step.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section-padding bg-ghost">
  <div class="container-premium">
    <div use:reveal class="text-center max-w-3xl mx-auto mb-12">
      <span class="eyebrow">Why Procor</span>
      <h2 class="section-heading mt-5">Websites that <span class="text-gradient-blue">perform.</span></h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Three reasons our clients never go back to template shops.</p>
    </div>
    <div class="grid gap-6 md:grid-cols-3">
      {#each diffs as diff, i}
        <div use:reveal={{ y: 20, delay: i * 80 }} class="premium-card p-6 sm:p-7">
          <h3 class="text-base font-semibold tracking-tight mb-2">{diff.title}</h3>
          <p class="text-sm text-muted leading-relaxed">{diff.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section-padding bg-white relative overflow-hidden">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-blue/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
  <div class="container-premium relative z-10">
    <div class="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
      <div use:reveal>
        <span class="eyebrow">FAQ</span>
        <h2 class="section-heading mt-5">Common <span class="text-gradient-blue">questions.</span></h2>
        <p class="mt-4 max-w-sm text-base leading-relaxed text-muted">Everything you need to know about our web development process.</p>
      </div>
      <div class="space-y-3">
        {#each faqs as faq, i}
          <div use:reveal={{ y: 12, delay: i * 60 }} class="premium-card overflow-hidden">
            <button
              onclick={() => openIndex = openIndex === i ? null : i}
              class="w-full px-6 py-5 text-left text-sm font-medium flex items-center justify-between gap-4 hover:bg-blue/5 transition-colors"
              aria-expanded={openIndex === i}
            >
              <span class="flex items-center gap-3">
                <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue/10 text-xs font-semibold text-blue-dark">{i + 1}</span>
                {faq.q}
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-muted transition-transform duration-300" class:rotate-180={openIndex === i}><path d="M6 9l6 6 6-6"/></svg>
            </button>
            {#if openIndex === i}
              <div class="px-6 pb-5 pt-0">
                <div class="h-px bg-border mb-4"></div>
                <p class="text-sm text-muted leading-relaxed">{faq.a}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<section class="section-padding bg-ghost">
  <div class="container-premium">
    <div use:reveal class="premium-card-blue p-8 sm:p-12 text-center">
      <h2 class="section-heading text-2xl sm:text-3xl">Need a custom build?</h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Custom features, integrations, or a completely unique platform. We'll scope it and deliver a fixed price.</p>
      <a href="/contact" class="btn-blue mt-8 inline-flex items-center gap-2">
        Get a quote
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>
