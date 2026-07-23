<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const plans = [
    { name: 'AEO Starter', price: '$3,997', period: 'one-time', desc: 'Get your brand answering questions in AI search results and voice assistants.', features: ['AI content audit', 'Schema markup implementation', 'Entity signal optimization', '5 answer-optimized pages', 'Knowledge graph setup', '1 month of monitoring'], popular: false },
    { name: 'GEO Growth', price: '$7,997', period: 'one-time', desc: 'Dominate generative AI search results across ChatGPT, Gemini, Perplexity, and more.', features: ['Everything in Starter', 'Generative engine optimization', 'Multi-platform AI targeting', 'Content restructuring for AI', 'Authority signal building', 'Competitive AI analysis', '3 months of monitoring'], popular: true },
    { name: 'AI Dominance', price: '$14,997', period: 'one-time', desc: 'Full-spectrum AI search domination. Voice, visual, and generative across every platform.', features: ['Everything in Growth', 'Voice search optimization', 'Visual AI optimization', 'Custom AI training data', 'API integration monitoring', 'Monthly strategy reviews', 'Priority support', '6 months of monitoring'], popular: false },
  ];

  const steps = [
    { title: 'Audit & Map', desc: 'We analyze your current AI footprint across ChatGPT, Gemini, Perplexity, voice assistants, and more.' },
    { title: 'Optimize & Build', desc: 'Entity signals, schema markup, content restructuring, and knowledge graph setup tailored to each platform.' },
    { title: 'Monitor & Iterate', desc: 'Continuous monitoring of AI citations, answer accuracy, and competitive positioning with monthly reports.' },
  ];

  const diffs = [
    { title: 'First-mover advantage.', desc: 'Most brands have zero AI search presence. Being early means owning the answers before competitors even start.' },
    { title: 'Platform-specific strategy.', desc: 'ChatGPT favors different signals than Gemini or Perplexity. We optimize for each platform\'s ranking logic.' },
    { title: 'Measurable AI presence.', desc: 'We track citations, answer accuracy, share of voice, and visibility across every major AI search platform.' },
  ];

  const faqs = [
    { q: 'What\'s the difference between AEO and traditional SEO?', a: 'AEO optimizes for AI-generated answers rather than blue links. It focuses on entity signals, structured data, and conversational content that AI platforms pull from.' },
    { q: 'How long until I see results in AI search?', a: 'Initial citations can appear within 2-4 weeks. Dominating a category typically takes 2-3 months of consistent optimization.' },
    { q: 'Do you target specific AI platforms?', a: 'Yes. We optimize for ChatGPT, Google AI Overviews, Gemini, Perplexity, Copilot, and voice assistants like Siri and Alexa.' },
  ];

  let openIndex = $state<number | null>(null);
</script>

<svelte:head>
  <title>AEO & GEO Packages — Procor Digital</title>
  <meta name="description" content="Dominate AI search. Answer engines, generative engine optimization, and voice search infrastructure." />
</svelte:head>

<section class="relative section-padding-hero overflow-hidden bg-white">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald/8 to-blue/5 rounded-full blur-3xl pointer-events-none animate-float" style="animation-delay: -2s;"></div>

  <div class="container-premium relative z-10 pt-16 lg:pt-24">
    <div use:reveal class="max-w-4xl text-center mx-auto">
      <a href="/packages" class="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors mb-6">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to packages
      </a>
      <span class="eyebrow">AEO & GEO</span>
      <h1 class="hero-heading mt-6">
        Own the
        <br />
        <span class="text-gradient-emerald">AI conversation.</span>
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted mx-auto">
        Answer engines, generative AI, voice search — we optimize for the platforms that are replacing traditional search.
      </p>
    </div>
  </div>
</section>

<section class="section-padding bg-ghost">
  <div class="container-premium">
    <div class="grid gap-6 lg:grid-cols-3">
      {#each plans as plan, i}
        <article use:reveal={{ y: 20, delay: i * 80 }} class="premium-card p-6 sm:p-7 flex flex-col relative {plan.popular ? 'border-emerald/30' : ''}">
          {#if plan.popular}
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 badge">Most popular</span>
          {/if}
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10 text-emerald text-sm font-semibold mb-4">{String(i + 1).padStart(2, '0')}</span>
          <h2 class="text-lg font-semibold tracking-tight">{plan.name}</h2>
          <p class="text-sm text-muted mt-1">{plan.desc}</p>
          <div class="mt-4 mb-6">
            <span class="text-3xl font-semibold tracking-tight">{plan.price}</span>
            <span class="text-sm text-muted">/{plan.period}</span>
          </div>
          <ul class="space-y-2.5 flex-1">
            {#each plan.features as f}
              <li class="flex items-start gap-2.5 text-sm text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
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
      <h2 class="section-heading mt-5">Your path to <span class="text-gradient-emerald">AI dominance.</span></h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">A repeatable system to own the answers in every AI platform.</p>
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
      <h2 class="section-heading mt-5">AI search is <span class="text-gradient-emerald">different.</span></h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Three reasons you need a specialized AEO/GEO strategy.</p>
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
        <h2 class="section-heading mt-5">AEO & GEO <span class="text-gradient-emerald">answers.</span></h2>
        <p class="mt-4 max-w-sm text-base leading-relaxed text-muted">Common questions about optimizing for AI search.</p>
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
      <h2 class="section-heading text-2xl sm:text-3xl">Need a custom AI strategy?</h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">Every industry has unique AI search dynamics. We'll build a custom strategy for yours.</p>
      <a href="/contact" class="btn-blue mt-8 inline-flex items-center gap-2">
        Get a custom strategy
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>
