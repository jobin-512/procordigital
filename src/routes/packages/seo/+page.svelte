<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const plans = [
    { name: 'SEO Audit', price: '$2,997', period: 'one-time', desc: 'A comprehensive SEO audit that reveals every opportunity and issue in your current setup.', features: ['Full technical audit', 'Content gap analysis', 'Backlink profile review', 'Competitor benchmarking', 'Keyword opportunity map', 'Prioritized action plan'], popular: false },
    { name: 'Growth Sprint', price: '$6,997', period: '/ month', desc: 'Monthly SEO sprints that build topical authority, fix technical issues, and grow organic traffic.', features: ['Everything in Audit', 'Monthly content clusters', 'Technical SEO fixes', 'Topical authority building', 'Weekly rank tracking', 'Monthly performance report', 'Slack access'], popular: true },
    { name: 'Scale Engine', price: '$14,997', period: '/ month', desc: 'Full-spectrum SEO at scale. Programmatic content, link velocity, and enterprise technical SEO.', features: ['Everything in Sprint', 'Programmatic SEO', 'Link velocity campaigns', 'International SEO', 'Custom dashboard', 'Dedicated SEO strategist', 'Weekly strategy calls', 'Unlimited iterations'], popular: false },
  ];

  const steps = [
    { title: 'Audit & Strategy', desc: 'Deep technical audit, content gap analysis, competitor benchmarking, and a prioritized action plan.' },
    { title: 'Execute & Build', desc: 'Content clusters, technical fixes, topical authority building, and link velocity campaigns executed monthly.' },
    { title: 'Track & Scale', desc: 'Weekly rank tracking, monthly performance reports, and continuous strategy refinement based on data.' },
  ];

  const diffs = [
    { title: 'Topical authority, not keywords.', desc: 'We build content ecosystems that establish your site as the definitive resource — Google rewards depth.' },
    { title: 'Technical + creative combined.', desc: 'SEO isn\'t just content or just code. We fix infrastructure while building authority. Both, always.' },
    { title: 'Transparent reporting.', desc: 'Real rankings, real traffic, real conversions. No vanity dashboards. You see exactly what\'s working.' },
  ];

  const faqs = [
    { q: 'How long until I see SEO results?', a: 'Technical fixes show impact in 4-6 weeks. Content authority builds over 3-6 months. SEO is a compound asset — it grows faster over time.' },
    { q: 'Do you guarantee rankings?', a: 'No one can guarantee rankings. We guarantee execution. Every sprint ships real work that the data says will move the needle.' },
    { q: 'What\'s included in the audit?', a: 'Full technical crawl, content gap analysis, backlink profile review, competitor benchmarking, keyword opportunity map, and a prioritized action plan.' },
  ];

  let openIndex = $state<number | null>(null);
</script>

<svelte:head>
  <title>SEO Packages — Procor Digital</title>
  <meta name="description" content="Technical audits, content clusters, topical authority maps, and programmatic SEO at scale." />
</svelte:head>

<section class="relative section-padding-hero overflow-hidden bg-white">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue/8 to-emerald/5 rounded-full blur-3xl pointer-events-none animate-float" style="animation-delay: -1s;"></div>

  <div class="container-premium relative z-10 pt-16 lg:pt-24">
    <div use:reveal class="max-w-4xl text-center mx-auto">
      <a href="/packages" class="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors mb-6">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to packages
      </a>
      <span class="eyebrow">SEO Growth Systems</span>
      <h1 class="hero-heading mt-6">
        Traffic that
        <br />
        <span class="text-gradient-blue">compounds.</span>
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted mx-auto">
        Technical audits, content clusters, topical authority maps, and programmatic SEO — built to grow every month.
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
            <span class="text-sm text-muted">{plan.period}</span>
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
      <h2 class="section-heading mt-5">A system that <span class="text-gradient-blue">compounds.</span></h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Monthly sprints that build momentum. Each month doubles down on what works.</p>
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
      <h2 class="section-heading mt-5">SEO that <span class="text-gradient-blue">actually works.</span></h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Three reasons our approach outperforms traditional SEO agencies.</p>
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
        <h2 class="section-heading mt-5">SEO <span class="text-gradient-blue">questions.</span></h2>
        <p class="mt-4 max-w-sm text-base leading-relaxed text-muted">Honest answers about what SEO can and can't do.</p>
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
      <h2 class="section-heading text-2xl sm:text-3xl">Need a custom SEO strategy?</h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Every industry has unique search dynamics. We'll build a custom SEO engine for yours.</p>
      <a href="/contact" class="btn-blue mt-8 inline-flex items-center gap-2">Get a free audit <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
    </div>
  </div>
</section>
