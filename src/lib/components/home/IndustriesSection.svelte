<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const industries = [
    {
      name: 'B2B SAAS',
      description: 'PLG/SLG funnels, demo automation, free-to-paid optimization, expansion revenue systems, churn prediction.',
      systems: ['SEO', 'Paid', 'Automation', 'Content', 'Analytics'],
      color: 'blueprint',
      bg: 'blue-pale',
      icon: '🏢',
      stat: '3.2x avg ARR growth'
    },
    {
      name: 'LOCAL SERVICES',
      description: 'Map pack domination, GBP optimization, review automation, call tracking, dispatch integration, multi-location scale.',
      systems: ['Local SEO', 'Paid', 'Automation', 'Analytics'],
      color: 'cyan',
      bg: 'white',
      icon: '🔧',
      stat: '12.3x lead volume'
    },
    {
      name: 'ECOMMERCE / DTC',
      description: 'Creative testing labs, funnel architecture, email/SMS flows, post-purchase optimization, attribution governance.',
      systems: ['Paid', 'CRO', 'Automation', 'Analytics', 'Content'],
      color: 'hot',
      bg: 'accent',
      icon: '📦',
      stat: '4.2x ROAS at scale'
    },
    {
      name: 'PROFESSIONAL SERVICES',
      description: 'Authority content engines, landing page systems, lead scoring, pipeline dashboards, referral automation.',
      systems: ['SEO', 'Content', 'Automation', 'Analytics'],
      color: 'lime',
      bg: 'blue-pale',
      icon: '⚖️',
      stat: '67% faster close rate'
    },
    {
      name: 'CREATOR ECONOMY',
      description: 'Content factories, newsletter operations, course funnels, community platforms, sponsorship pipelines, audience ownership.',
      systems: ['Content', 'Automation', 'Analytics', 'CRO'],
      color: 'blue-pop',
      bg: 'white',
      icon: '🎬',
      stat: '400% organic growth'
    },
    {
      name: 'HIGH-TICKET COACHING',
      description: 'VSL/USL production, application funnels, sales enablement, CRM pipelines, retreat/event marketing, ascension paths.',
      systems: ['Paid', 'CRO', 'Automation', 'Content'],
      color: 'ink',
      bg: 'accent',
      icon: '🎯',
      stat: '$50K+ avg deal size'
    }
  ];
</script>

<section class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="industries-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-blueprint/5 via-transparent to-hot/5 pointer-events-none" aria-hidden="true"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Who we build for</span>
      <h2 id="industries-heading" class="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.08em] sm:text-6xl lg:text-8xl animate-text-reveal">
        Built for brands
        <br />
        <span class="gradient-text-cyan">with growth</span>
        <span class="gradient-text-accent ml-2">pressure.</span>
      </h2>
      <p class="mt-5 max-w-2xl mx-auto text-lg font-bold leading-snug text-ink/70">
        We don't do generalist. Every vertical gets a tailored system architecture — the right channels, the right creative angles, the right metrics. You get a growth OS built for your economics, not a template.
      </p>
    </div>

    <div class="benefit-grid">
      {#each industries as industry, index}
        <article
          use:reveal={{ y: 30, delay: index * 80 }}
          class="brutal-card-insane p-6 relative overflow-hidden group {industry.bg}"
          style="border-color: var(--color-ink);"
        >
          <div class="absolute -top-3 -right-3 size-16 lg:size-20 border-4 border-ink bg-{industry.color}/10 rotate-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>
          <div class="absolute bottom-3 left-3 size-12 lg:size-16 border-4 border-ink bg-{industry.color}/10 -rotate-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>

          <div class="relative z-10 mb-4 flex items-start gap-3">
            <span class="text-4xl lg:text-5xl animate-bounce-in" style="animation-delay: {index * 100 + 300}ms;">{industry.icon}</span>
            <div>
              <span class="border-3 border-ink bg-{industry.color} px-3 py-1 text-xs font-black uppercase text-white">{industry.name}</span>
              <p class="mt-2 font-mono text-xs font-bold text-ink/40">VERTICAL #{index + 1}</p>
            </div>
          </div>

          <p class="relative z-10 text-base font-bold leading-snug mb-5 text-ink/80">{industry.description}</p>

          <div class="relative z-10 mb-5 flex flex-wrap gap-2" role="list" aria-label="Systems deployed">
            {#each industry.systems as system}
              <span class="border-2 border-ink bg-white px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0_#07111f]">{system}</span>
            {/each}
          </div>

          <div class="relative z-10 border-t-4 border-ink pt-4">
            <p class="font-black uppercase text-xs tracking-widest mb-2 text-{industry.color}">TYPICAL OUTCOME</p>
            <p class="font-display text-2xl lg:text-3xl tracking-[-0.08em] gradient-text-{industry.color}">{industry.stat}</p>
          </div>

          <a href="#contact" class="mt-5 inline-flex items-center gap-2 brutal-button-outline text-sm px-5 py-3 relative z-10 group/wrapper">
            Deploy in {industry.name}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover/wrapper:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </article>
      {/each}
    </div>

    <div use:reveal={{ delay: 500, y: 20 }} class="mt-12 lg:mt-16 brutal-card-insane bg-ink p-8 text-center">
      <p class="font-black uppercase tracking-widest text-sm mb-3 text-accent">Your vertical not listed?</p>
      <h3 class="font-display text-3xl lg:text-4xl tracking-[-0.08em] text-white mb-4">Good. We build custom.</h3>
      <p class="text-blue-50 font-bold mb-6 max-w-2xl mx-auto">If you have a clear product, a hungry market, and a broken funnel — we'll architect the system from scratch. No templates. No playbooks. Pure architecture.</p>
      <a href="#contact" class="brutal-button-void inline-flex">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        Build my custom system
      </a>
    </div>
  </div>
</section>