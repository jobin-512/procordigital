<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const plans = [
    { name: 'Compliance Foundation', price: '$1,497', period: '/ month', desc: 'Essential compliance management for small to mid-size businesses.', features: ['Compliance gap analysis', 'Policy document creation', 'Employee training modules', 'Basic audit preparation', 'Regulatory tracking', 'Monthly compliance report'], popular: false },
    { name: 'Compliance Shield', price: '$3,497', period: '/ month', desc: 'Comprehensive compliance coverage with proactive monitoring and dedicated support.', features: ['Everything in Foundation', 'Risk assessment framework', 'Vendor compliance review', 'Incident response plan', 'Quarterly audit support', 'Regulatory change alerts', 'Dedicated compliance specialist'], popular: true },
    { name: 'Enterprise Guard', price: '$6,997', period: '/ month', desc: 'Enterprise-grade compliance program with full audit readiness and strategic advisory.', features: ['Everything in Shield', 'Full audit readiness program', 'Custom compliance dashboard', 'Board-ready reporting', 'M&A due diligence support', 'Regulatory filing assistance', 'Dedicated account manager', 'Priority 24/7 support'], popular: false },
  ];

  const steps = [
    { title: 'Assess & Plan', desc: 'We conduct a full compliance gap analysis, identify risk areas, and build a remediation roadmap.' },
    { title: 'Implement & Train', desc: 'Policy creation, control implementation, employee training, and vendor compliance review.' },
    { title: 'Monitor & Report', desc: 'Continuous regulatory monitoring, monthly compliance reports, and quarterly audit support.' },
  ];

  const diffs = [
    { title: 'Proactive, not reactive.', desc: 'We monitor regulatory changes in real time and update your program before issues arise — not after.' },
    { title: 'Audit-ready always.', desc: 'Your compliance documentation, controls, and evidence are maintained continuously — not crammed before an audit.' },
    { title: 'Dedicated compliance specialist.', desc: 'A real compliance professional who knows your business, your industry, and your regulatory landscape.' },
  ];

  const faqs = [
    { q: 'What regulations do you cover?', a: 'We cover GDPR, CCPA, SOC 2, ISO 27001, HIPAA, PCI-DSS, and industry-specific regulations. Tell us your landscape and we\'ll map it.' },
    { q: 'How do you handle audits?', a: 'We maintain continuous audit readiness with documented controls, evidence collection, and pre-audit dry runs. When the auditor calls, you\'re ready.' },
    { q: 'Do you provide employee training?', a: 'Yes. Each plan includes role-based training modules with tracking, completion certificates, and automated refresher scheduling.' },
  ];

  let openIndex = $state<number | null>(null);
</script>

<svelte:head>
  <title>Compliance Packages — Procor Digital</title>
  <meta name="description" content="Stay compliant with confidence. Audit prep, policy management, training, and regulatory tracking." />
</svelte:head>

<section class="relative section-padding-hero overflow-hidden bg-white">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-emerald/8 to-blue/5 rounded-full blur-3xl pointer-events-none animate-float" style="animation-delay: -1s;"></div>

  <div class="container-premium relative z-10 pt-16 lg:pt-24">
    <div use:reveal class="max-w-4xl text-center mx-auto">
      <a href="/packages" class="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors mb-6"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Back to packages</a>
      <span class="eyebrow">Compliance Services</span>
      <h1 class="hero-heading mt-6">Compliance with <span class="text-gradient-emerald">confidence.</span></h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted mx-auto">Audit prep, policy management, training, and regulatory tracking — so you can focus on growth.</p>
    </div>
  </div>
</section>

<section class="section-padding bg-ghost">
  <div class="container-premium">
    <div class="grid gap-6 lg:grid-cols-3">
      {#each plans as plan, i}
        <article use:reveal={{ y: 20, delay: i * 80 }} class="premium-card p-6 sm:p-7 flex flex-col relative {plan.popular ? 'border-emerald/30' : ''}">
          {#if plan.popular}<span class="absolute -top-3 left-1/2 -translate-x-1/2 badge">Most popular</span>{/if}
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10 text-emerald text-sm font-semibold mb-4">{String(i + 1).padStart(2, '0')}</span>
          <h2 class="text-lg font-semibold tracking-tight">{plan.name}</h2>
          <p class="text-sm text-muted mt-1">{plan.desc}</p>
          <div class="mt-4 mb-6"><span class="text-3xl font-semibold tracking-tight">{plan.price}</span><span class="text-sm text-muted">{plan.period}</span></div>
          <ul class="space-y-2.5 flex-1">
            {#each plan.features as f}
              <li class="flex items-start gap-2.5 text-sm text-muted"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>{f}</li>
            {/each}
          </ul>
          <a href="/contact" class={plan.popular ? 'btn-blue mt-8 w-full justify-center' : 'btn-outline mt-8 w-full justify-center'}>{plan.popular ? 'Get started' : 'Learn more'}</a>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section-padding bg-white">
  <div class="container-premium">
    <div use:reveal class="text-center max-w-3xl mx-auto mb-12">
      <span class="eyebrow">How it works</span>
      <h2 class="section-heading mt-5">Compliance, <span class="text-gradient-emerald">simplified.</span></h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">A systematic approach to regulatory peace of mind.</p>
    </div>
    <div class="grid gap-6 md:grid-cols-3">
      {#each steps as step, i}
        <div use:reveal={{ y: 20, delay: i * 80 }} class="premium-card p-6 sm:p-7">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10 text-emerald text-sm font-semibold mb-4">0{i + 1}</span>
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
      <h2 class="section-heading mt-5">Stay ahead of <span class="text-gradient-emerald">regulation.</span></h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Three reasons companies trust us with their compliance program.</p>
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
  <div class="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-emerald/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
  <div class="container-premium relative z-10">
    <div class="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
      <div use:reveal>
        <span class="eyebrow">FAQ</span>
        <h2 class="section-heading mt-5">Compliance <span class="text-gradient-emerald">answers.</span></h2>
        <p class="mt-4 max-w-sm text-base leading-relaxed text-muted">Common questions about our compliance services.</p>
      </div>
      <div class="space-y-3">
        {#each faqs as faq, i}
          <div use:reveal={{ y: 12, delay: i * 60 }} class="premium-card overflow-hidden">
            <button
              onclick={() => openIndex = openIndex === i ? null : i}
              class="w-full px-6 py-5 text-left text-sm font-medium flex items-center justify-between gap-4 hover:bg-emerald/5 transition-colors"
              aria-expanded={openIndex === i}
            >
              <span class="flex items-center gap-3">
                <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald/10 text-xs font-semibold text-emerald">{i + 1}</span>
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
      <h2 class="section-heading text-2xl sm:text-3xl">Need custom compliance?</h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Industry-specific regulations, multi-jurisdiction requirements, or custom programs. We'll build it.</p>
      <a href="/contact" class="btn-blue mt-8 inline-flex items-center gap-2">Get a consultation <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
    </div>
  </div>
</section>
