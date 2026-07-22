<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import ImageSlot from '$lib/components/common/ImageSlot.svelte';

  const services = [
    {
      title: 'SEO GROWTH SYSTEMS',
      description: 'Technical audits, content clusters, topical authority maps, link velocity campaigns, local domination, and programmatic SEO at scale.',
      icon: '🎯',
      color: 'blueprint',
      stats: ['312% avg organic growth', '47 min first-page keywords', '12-month compounding assets'],
      cta: 'See SEO playbook'
    },
    {
      title: 'PAID MEDIA SCALE',
      description: 'Google/Meta/LinkedIn/TikTok campaign architecture, creative testing frameworks, bid strategy automation, audience expansion loops.',
      icon: '💰',
      color: 'hot',
      stats: ['3.8x ROAS median', '67% CAC reduction', '14-day creative velocity'],
      cta: 'View ad library'
    },
    {
      title: 'FUNNEL ARCHITECTURE',
      description: 'Landing page systems, offer engineering, VSL/USL production, checkout optimization, upsell/downsell sequences, post-purchase nurture.',
      icon: '🏗️',
      color: 'cyan',
      stats: ['19% avg conversion lift', '42% AOV increase', '3-step max funnel depth'],
      cta: 'Audit my funnel'
    },
    {
      title: 'AUTOMATION ENGINES',
      description: 'CRM setup (HubSpot/Close/Pipedrive), lead scoring, behavioral email/SMS sequences, sales alerts, pipeline dashboards, revenue attribution.',
      icon: '⚡',
      color: 'lime',
      stats: ['89% lead response < 5min', '3.2x SQL conversion', '100% pipeline visibility'],
      cta: 'Map my automation'
    },
    {
      title: 'CONTENT FACTORIES',
      description: 'SEO content pipelines, thought leadership systems, case study engines, newsletter operations, social content repurposing, asset libraries.',
      icon: '📝',
      color: 'blue-pop',
      stats: ['47 assets/month capacity', '12:1 content ROI', 'Zero writer bottleneck'],
      cta: 'Start content engine'
    },
    {
      title: 'ANALYTICS GOVERNANCE',
      description: 'GA4/GTM/Server-side implementation, event taxonomy, custom dashboards (Looker/PowerBI), attribution modeling, data quality SLAs.',
      icon: '📊',
      color: 'ink',
      stats: ['99.9% data accuracy', 'Real-time decision loops', 'Single source of truth'],
      cta: 'Fix my tracking'
    }
  ];
</script>

<section class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="services-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blueprint/5 to-transparent pointer-events-none"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/10 to-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">What we deploy</span>
      <h2 id="services-heading" class="mt-6 section-heading max-w-4xl animate-text-reveal">
        Six growth systems.
        <br />
        <span class="gradient-text-cyan">Zero integration gaps.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-lg font-bold leading-snug text-ink/70">
        Each system is a modular, battle-tested machine. Deploy one. Stack all six. They share data, creative, and strategy — no silos, no handoff friction.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each services as service, index}
        <article use:reveal={{ y: 30, delay: index * 80 }} class="brutal-card-insane p-6 relative overflow-hidden group" style="--accent-color: var(--color-{service.color})">
          <div class="absolute inset-0 bg-gradient-to-br from-{service.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div class="absolute -top-3 -right-3 size-16 lg:size-20 border-4 border-ink bg-{service.color} rotate-6 opacity-20 group-hover:opacity-40 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <div class="absolute bottom-3 left-3 size-12 lg:size-16 border-4 border-ink bg-{service.color} -rotate-6 opacity-20 group-hover:opacity-40 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>

          <div class="relative z-10 mb-4 flex items-center gap-3">
            <span class="text-3xl lg:text-4xl animate-bounce-in" style="animation-delay: {index * 100 + 300}ms;">{service.icon}</span>
            <span class="font-display text-2xl lg:text-3xl tracking-[-0.08em] text-{service.color}">{service.title}</span>
          </div>

          <p class="relative z-10 text-base font-bold leading-snug mb-5 text-ink/80">{service.description}</p>

          <ul class="relative z-10 space-y-2 mb-5" role="list">
            {#each service.stats as stat}
              <li class="flex items-center gap-2 text-sm font-bold text-ink/70 animate-slide-up" style="animation-delay: {index * 100 + 450}ms;">
                <span class="w-5 h-5 border-2 border-ink bg-{service.color} flex items-center justify-center text-xs">✓</span>
                {stat}
              </li>
            {/each}
          </ul>

          <a href="#contact" class="relative z-10 inline-flex items-center gap-2 brutal-button-outline text-sm px-5 py-3 group/link">
            {service.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover/link:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </article>
      {/each}
    </div>

    <div use:reveal={{ delay: 400, y: 20 }} class="mt-12 lg:mt-16 text-center">
      <p class="font-black uppercase tracking-widest text-sm mb-4 gradient-text-ink">Need a custom stack?</p>
      <a href="#contact" class="brutal-button-insane inline-flex">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        Build my custom system
      </a>
    </div>
  </div>
</section>