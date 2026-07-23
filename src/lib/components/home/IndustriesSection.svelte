<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const industries = [
    {
      name: 'B2B SaaS',
      description: 'PLG and SLG funnels, demo automation, free-to-paid optimization, expansion revenue systems, churn prediction.',
      systems: ['SEO', 'Paid', 'Automation', 'Content', 'Analytics'],
      stat: '3.2x avg ARR growth'
    },
    {
      name: 'Local Services',
      description: 'Map pack domination, GBP optimization, review automation, call tracking, multi-location scale.',
      systems: ['Local SEO', 'Paid', 'Automation', 'Analytics'],
      stat: '12.3x lead volume'
    },
    {
      name: 'E-commerce / DTC',
      description: 'Creative testing labs, funnel architecture, email and SMS flows, post-purchase optimization.',
      systems: ['Paid', 'CRO', 'Automation', 'Analytics', 'Content'],
      stat: '4.2x ROAS at scale'
    },
    {
      name: 'Professional Services',
      description: 'Authority content engines, landing page systems, lead scoring, pipeline dashboards, referral automation.',
      systems: ['SEO', 'Content', 'Automation', 'Analytics'],
      stat: '67% faster close rate'
    },
    {
      name: 'Creator Economy',
      description: 'Content factories, newsletter operations, course funnels, community platforms, audience ownership.',
      systems: ['Content', 'Automation', 'Analytics', 'CRO'],
      stat: '400% organic growth'
    },
    {
      name: 'High-Ticket Coaching',
      description: 'VSL and USL production, application funnels, sales enablement, CRM pipelines, ascension paths.',
      systems: ['Paid', 'CRO', 'Automation', 'Content'],
      stat: '$50K+ avg deal size'
    },
  ];
</script>

<section class="section-padding bg-white relative overflow-hidden" aria-labelledby="industries-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="max-w-3xl mb-12 lg:mb-16">
      <span class="eyebrow">Who we build for</span>
      <h2 id="industries-heading" class="section-heading mt-5">
        Built for brands
        <br />
        <span class="text-gradient-blue">with growth</span>
        pressure.
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-xl">
        Every vertical gets a tailored system architecture — the right channels, creative angles, and metrics.
      </p>
    </div>

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each industries as industry, index}
        <article
          use:reveal={{ y: 20, delay: index * 60 }}
          class="premium-card p-6 group relative overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-500"
        >
          <div class="mb-4">
            <span class="badge">{industry.name}</span>
          </div>

          <p class="text-sm text-muted leading-relaxed mb-4">{industry.description}</p>

          <div class="flex flex-wrap gap-2 mb-5">
            {#each industry.systems as system}
              <span class="inline-flex rounded-md border border-border bg-ghost px-2.5 py-1 text-[11px] font-medium text-muted">{system}</span>
            {/each}
          </div>

          <div class="divider mb-4"></div>

          <p class="text-xs font-medium uppercase tracking-wider text-blue-dark mb-1">Typical outcome</p>
          <p class="text-lg font-semibold tracking-tight">{industry.stat}</p>
        </article>
      {/each}
    </div>

    <div use:reveal class="mt-12 premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-ink text-white-pure p-8 text-center border-none">
      <p class="text-xs font-semibold uppercase tracking-widest text-blue mb-3">Your vertical not listed?</p>
      <h3 class="text-2xl font-semibold tracking-tight mb-4">Good. We build custom.</h3>
      <p class="text-sm text-white/60 mb-6 max-w-xl mx-auto">If you have a clear product, a hungry market, and a broken funnel, we will architect the system from scratch.</p>
      <a href="/contact" class="btn-blue inline-flex">
        Build my custom system
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>
