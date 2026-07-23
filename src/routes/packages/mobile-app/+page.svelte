<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const plans = [
    { name: 'MVP Launch', price: '$4,997', period: 'one-time', desc: 'A minimum viable product to validate your idea and get to market fast.', features: ['Single platform (iOS or Android)', 'Core feature set', 'Basic UI/UX design', 'API integration (1 source)', 'App store submission', '1 month of support'], popular: false },
    { name: 'Business App', price: '$9,997', period: 'one-time', desc: 'A full-featured app with cross-platform support and advanced functionality.', features: ['Cross-platform (iOS + Android)', 'Full UI/UX design system', 'Push notifications', 'User authentication', 'Analytics integration', '2 API integrations', 'App store optimization', '3 months of support'], popular: true },
    { name: 'Enterprise Suite', price: '$19,997', period: 'one-time', desc: 'A custom platform with backend, real-time features, and enterprise-grade infrastructure.', features: ['Everything in Business', 'Custom backend API', 'Real-time features', 'Scalable infrastructure', 'CI/CD pipeline', 'Security audit', 'Load testing', 'Dedicated PM', 'Priority support'], popular: false },
  ];

  const steps = [
    { title: 'Define & Design', desc: 'Product strategy, user flows, wireframes, and high-fidelity UI/UX design tailored to your audience.' },
    { title: 'Build & Test', desc: 'Agile development sprints with continuous testing on real devices. Cross-platform when needed.' },
    { title: 'Ship & Support', desc: 'App store submission, launch monitoring, and post-launch support. We stay until you\'re stable.' },
  ];

  const diffs = [
    { title: 'Cross-platform expertise.', desc: 'React Native, Flutter, or native — we pick the right stack for your use case. No one-size-fits-all.' },
    { title: 'Designed for retention.', desc: 'Push notifications, onboarding flows, and engagement loops built in from day one — not bolted on later.' },
    { title: 'Full ownership.', desc: 'Source code, design files, app store accounts — everything is yours. No platform lock-in.' },
  ];

  const faqs = [
    { q: 'Which platform should I build for first?', a: 'For most startups, iOS first (higher revenue per user). For market-share plays, Android first. We\'ll help you decide based on your audience data.' },
    { q: 'How long does app development take?', a: 'An MVP typically ships in 6-8 weeks. A full-featured Business App takes 10-14 weeks. Enterprise builds are scoped per project.' },
    { q: 'Do you handle App Store submission?', a: 'Yes. We handle the entire submission process including metadata, screenshots, and compliance review for both Apple and Google stores.' },
  ];

  let openIndex = $state<number | null>(null);
</script>

<svelte:head>
  <title>Mobile App Packages — Procor Digital</title>
  <meta name="description" content="Native and cross-platform apps. iOS, Android, and PWAs that users actually keep." />
</svelte:head>

<section class="relative section-padding-hero overflow-hidden bg-white">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-emerald/8 to-blue/5 rounded-full blur-3xl pointer-events-none animate-float" style="animation-delay: -3s;"></div>

  <div class="container-premium relative z-10 pt-16 lg:pt-24">
    <div use:reveal class="max-w-4xl text-center mx-auto">
      <a href="/packages" class="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors mb-6"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Back to packages</a>
      <span class="eyebrow">Mobile App Development</span>
      <h1 class="hero-heading mt-6">Apps that <span class="text-gradient-emerald">users love.</span></h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted mx-auto">Native, cross-platform, or PWA — we build apps that perform, engage, and retain.</p>
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
          <div class="mt-4 mb-6"><span class="text-3xl font-semibold tracking-tight">{plan.price}</span><span class="text-sm text-muted">/{plan.period}</span></div>
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
      <h2 class="section-heading mt-5">From idea to <span class="text-gradient-emerald">app store.</span></h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">A structured process that de-risks your app investment.</p>
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
      <h2 class="section-heading mt-5">Apps that <span class="text-gradient-emerald">users keep.</span></h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Three reasons our apps outperform the competition.</p>
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
        <h2 class="section-heading mt-5">Mobile app <span class="text-gradient-emerald">answers.</span></h2>
        <p class="mt-4 max-w-sm text-base leading-relaxed text-muted">Common questions about our app development process.</p>
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
      <h2 class="section-heading text-2xl sm:text-3xl">Need something custom?</h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Custom features, complex backends, or unique platform requirements. We'll scope your project.</p>
      <a href="/contact" class="btn-blue mt-8 inline-flex items-center gap-2">Get a quote <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
    </div>
  </div>
</section>
