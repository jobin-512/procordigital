<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const services = [
    {
      title: 'SEO Growth Systems',
      description: 'Technical audits, content clusters, topical authority maps, link velocity campaigns, and programmatic SEO at scale.',
      stats: ['312% avg organic growth', '47 min first-page keywords', '12-month compounding assets'],
      cta: 'See SEO playbook'
    },
    {
      title: 'Paid Media Scale',
      description: 'Campaign architecture, creative testing frameworks, bid strategy automation, audience expansion loops across Google, Meta, LinkedIn.',
      stats: ['3.8x ROAS median', '67% CAC reduction', '14-day creative velocity'],
      cta: 'View ad library'
    },
    {
      title: 'Funnel Architecture',
      description: 'Landing page systems, offer engineering, VSL and USL production, checkout optimization, upsell and downsell sequences.',
      stats: ['19% avg conversion lift', '42% AOV increase', '3-step max funnel depth'],
      cta: 'Audit my funnel'
    },
    {
      title: 'Marketing Automation',
      description: 'CRM setup, lead scoring, behavioral email and SMS sequences, pipeline dashboards, revenue attribution.',
      stats: ['89% lead response < 5min', '3.2x SQL conversion', '100% pipeline visibility'],
      cta: 'Map my automation'
    },
    {
      title: 'Content Engines',
      description: 'SEO content pipelines, thought leadership systems, case study engines, newsletter operations, social content repurposing.',
      stats: ['47 assets/month capacity', '12:1 content ROI', 'Zero writer bottleneck'],
      cta: 'Start content engine'
    },
    {
      title: 'Analytics & Attribution',
      description: 'GA4 and GTM implementation, event taxonomy, custom dashboards, attribution modeling, data quality SLAs.',
      stats: ['99.9% data accuracy', 'Real-time decision loops', 'Single source of truth'],
      cta: 'Fix my tracking'
    }
  ];
</script>

<section class="section-padding bg-ghost relative overflow-hidden" aria-labelledby="services-heading">
  <div class="container-premium relative z-10">
    <div use:reveal class="max-w-3xl mb-12 lg:mb-16">
      <span class="eyebrow">What we deploy</span>
      <h2 id="services-heading" class="section-heading mt-5">
        Six growth systems.
        <br />
        <span class="text-gradient-blue">Zero integration gaps.</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-xl">
        Each system is modular and battle-tested. Deploy one. Stack all six. They share data, creative, and strategy.
      </p>
    </div>

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each services as service, index}
        <article
          use:reveal={{ y: 20, delay: index * 60 }}
          class="premium-card p-6 group relative overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-500"
        >
          <div class="flex items-center gap-3 mb-4">
            <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue/10 text-xs font-semibold text-blue-dark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </span>
            <h3 class="text-base font-semibold tracking-tight">{service.title}</h3>
          </div>

          <p class="text-sm text-muted leading-relaxed mb-5">{service.description}</p>

          <ul class="space-y-2 mb-5">
            {#each service.stats as stat}
              <li class="flex items-center gap-2 text-sm text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue shrink-0">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {stat}
              </li>
            {/each}
          </ul>

          <a href="/contact" class="inline-flex items-center gap-1.5 text-sm font-medium text-blue-dark transition-colors hover:text-blue group/link">
            {service.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover/link:translate-x-0.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </article>
      {/each}
    </div>

    <div use:reveal class="mt-12 text-center">
      <p class="text-sm text-muted mb-4">Need a custom stack?</p>
      <a href="/contact" class="btn-primary">
        Build my custom system
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>
