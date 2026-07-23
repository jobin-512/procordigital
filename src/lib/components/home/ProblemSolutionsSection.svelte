<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const solutions = [
    {
      problem: 'Invisible on search',
      symptom: 'Competitors own your keywords. Organic traffic is flatlining.',
      fix: 'Technical SEO overhaul, topical authority clusters, E-E-A-T content engine, local map domination.',
      tag: 'SEO',
      metric: '214% avg traffic lift'
    },
    {
      problem: 'Ads burning cash',
      symptom: 'High CPA, low ROAS, creative fatigue, no tracking hygiene.',
      fix: 'Campaign restructure, creative testing framework, server-side tracking, weekly optimization loops.',
      tag: 'PAID MEDIA',
      metric: '3.8x avg ROAS'
    },
    {
      problem: 'Traffic doesn\'t convert',
      symptom: 'High bounce rate, low form fills, leaky checkout, no trust signals.',
      fix: 'CRO audit, landing page rebuild, offer engineering, heatmap UX fixes, trust architecture.',
      tag: 'CRO',
      metric: '19% conversion lift'
    },
    {
      problem: 'Leads go cold',
      symptom: 'Manual follow-up, no scoring, broken CRM, zero nurture sequences.',
      fix: 'CRM migration and cleanup, lead scoring, email and SMS sequences, pipeline dashboards.',
      tag: 'AUTOMATION',
      metric: '67% faster close rate'
    },
    {
      problem: 'Content is noise',
      symptom: 'Blog posts nobody reads, no distribution, zero SEO value.',
      fix: 'Content strategy, pillar and cluster architecture, repurposing system, distribution automation.',
      tag: 'CONTENT',
      metric: '400% organic lead growth'
    },
    {
      problem: 'Data is chaos',
      symptom: 'GA4 misconfigured, no event tracking, unattributed revenue.',
      fix: 'Analytics governance, server-side GTM, custom dashboards, attribution modeling.',
      tag: 'ANALYTICS',
      metric: '100% attribution clarity'
    }
  ];
</script>

<section id="solutions" class="section-padding bg-white relative overflow-hidden">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="max-w-3xl mb-12 lg:mb-16">
      <span class="eyebrow">Identify the leak</span>
      <h2 class="section-heading mt-5">
        Pick the <span class="text-gradient-blue">problem</span>.
        <br />
        We deploy the <span class="text-gradient-blue">system</span>.
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-xl">
        Every engagement is a packaged growth system, not a menu of deliverables. Strategy, build, iteration, ownership.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each solutions as item, index}
        <article
          use:reveal={{ y: 24, delay: index * 60 }}
          class="premium-card p-6 group relative overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-500"
        >
          <div class="flex items-start justify-between gap-4 mb-4">
            <span class="badge">{item.tag}</span>
            <span class="text-2xl font-semibold tracking-tight text-border select-none">0{index + 1}</span>
          </div>

          <h3 class="text-lg font-semibold tracking-tight mb-2">{item.problem}</h3>
          <p class="text-sm text-muted leading-relaxed mb-4">{item.symptom}</p>

          <div class="divider mb-4"></div>

          <p class="text-sm font-medium mb-3 text-muted">The fix</p>
          <p class="text-sm leading-relaxed mb-4">{item.fix}</p>

          <div class="inline-flex items-center gap-2 rounded-lg bg-blue/8 px-3.5 py-2 text-xs font-semibold text-blue-dark">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            {item.metric}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
