<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const plans = [
    { name: 'Payroll Essentials', price: '$997', period: '/ month', desc: 'Modern payroll processing for small teams. Simple, fast, and compliant.', features: ['Up to 10 employees', 'Direct deposit processing', 'Tax withholding & filing', 'Employee self-service portal', 'Year-end W-2 reporting', 'Basic reporting'], popular: false },
    { name: 'Payroll Pro', price: '$1,997', period: '/ month', desc: 'Full-featured payroll for growing businesses with multi-state and multi-location support.', features: ['Up to 50 employees', 'Multi-state payroll', 'Deductions & garnishments', 'PTO tracking', 'HR compliance alerts', 'Advanced reporting', 'Dedicated payroll specialist'], popular: true },
    { name: 'Enterprise Payroll', price: '$3,997', period: '/ month', desc: 'Enterprise-grade payroll with HRIS integration, custom workflows, and white-glove service.', features: ['Unlimited employees', 'HRIS integration', 'Custom approval workflows', 'Time clock integration', 'Benefits administration', 'Audit support', 'Custom reporting', 'Dedicated account manager'], popular: false },
  ];

  const steps = [
    { title: 'Onboard & Configure', desc: 'We set up your payroll profile, connect bank accounts, configure tax settings, and import employee data.' },
    { title: 'Process & Verify', desc: 'Each payroll cycle, we process time data, calculate deductions, and run pre-submission verification.' },
    { title: 'File & Report', desc: 'Tax filings, direct deposits, and employee reports are handled automatically. You get a monthly summary.' },
  ];

  const diffs = [
    { title: 'Tax compliance included.', desc: 'Federal, state, and local tax withholding, filing, and payment — all handled. We never miss a deadline.' },
    { title: 'Employee self-service.', desc: 'Employees access pay stubs, W-2s, PTO balances, and update their info through a modern portal.' },
    { title: 'Dedicated specialist.', desc: 'Every plan includes a real person who knows your account. No support tickets. No chatbots.' },
  ];

  const faqs = [
    { q: 'How fast can you onboard?', a: 'Most companies are fully set up and running their first payroll within 5 business days.' },
    { q: 'Do you handle multi-state payroll?', a: 'Yes. The Payroll Pro and Enterprise plans support unlimited states with automatic tax rate updates and compliance.' },
    { q: 'What about international contractors?', a: 'We support international contractor payments through our platform. Enterprise includes global compliance support.' },
  ];

  let openIndex = $state<number | null>(null);
</script>

<svelte:head>
  <title>Payroll Packages — Procor Digital</title>
  <meta name="description" content="Modern payroll processing, tax compliance, direct deposit, and employee self-service portals." />
</svelte:head>

<section class="relative section-padding-hero overflow-hidden bg-white">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue/8 to-transparent rounded-full blur-3xl pointer-events-none animate-float" style="animation-delay: -2s;"></div>

  <div class="container-premium relative z-10 pt-16 lg:pt-24">
    <div use:reveal class="max-w-4xl text-center mx-auto">
      <a href="/packages" class="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors mb-6"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Back to packages</a>
      <span class="eyebrow">Payroll Services</span>
      <h1 class="hero-heading mt-6">Payroll that <span class="text-gradient-blue">runs itself.</span></h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted mx-auto">Modern payroll processing with tax compliance, direct deposit, and employee self-service.</p>
    </div>
  </div>
</section>

<section class="section-padding bg-ghost">
  <div class="container-premium">
    <div class="grid gap-6 lg:grid-cols-3">
      {#each plans as plan, i}
        <article use:reveal={{ y: 20, delay: i * 80 }} class="premium-card p-6 sm:p-7 flex flex-col relative {plan.popular ? 'border-blue/30' : ''}">
          {#if plan.popular}<span class="absolute -top-3 left-1/2 -translate-x-1/2 badge">Most popular</span>{/if}
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 text-blue text-sm font-semibold mb-4">{String(i + 1).padStart(2, '0')}</span>
          <h2 class="text-lg font-semibold tracking-tight">{plan.name}</h2>
          <p class="text-sm text-muted mt-1">{plan.desc}</p>
          <div class="mt-4 mb-6"><span class="text-3xl font-semibold tracking-tight">{plan.price}</span><span class="text-sm text-muted">{plan.period}</span></div>
          <ul class="space-y-2.5 flex-1">
            {#each plan.features as f}
              <li class="flex items-start gap-2.5 text-sm text-muted"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>{f}</li>
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
      <h2 class="section-heading mt-5">Payroll, <span class="text-gradient-blue">simplified.</span></h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Three steps to a fully managed payroll system.</p>
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
      <h2 class="section-heading mt-5">Payroll you can <span class="text-gradient-blue">trust.</span></h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Three reasons businesses choose us for payroll.</p>
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
        <h2 class="section-heading mt-5">Payroll <span class="text-gradient-blue">questions.</span></h2>
        <p class="mt-4 max-w-sm text-base leading-relaxed text-muted">Everything you need to know about our payroll services.</p>
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
      <h2 class="section-heading text-2xl sm:text-3xl">Need custom payroll?</h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Complex payroll needs, international teams, or custom integrations. We'll build the right solution.</p>
      <a href="/contact" class="btn-blue mt-8 inline-flex items-center gap-2">Get a quote <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
    </div>
  </div>
</section>
