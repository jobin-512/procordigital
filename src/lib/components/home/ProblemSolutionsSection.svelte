<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const solutions = [
    {
      problem: 'Invisible on search',
      symptom: 'Competitors own your keywords. You\'re page 3+. Organic flatlines.',
      fix: 'Technical SEO overhaul + topical authority clusters + E-E-A-T content engine + local/map domination.',
      tag: 'SEO',
      color: 'blueprint',
      bg: 'blue-pale',
      icon: '🎯',
      metric: '214% avg traffic lift'
    },
    {
      problem: 'Ads burning cash',
      symptom: 'High CPA, low ROAS, creative fatigue, no tracking hygiene.',
      fix: 'Campaign restructure + creative testing framework + server-side tracking + weekly optimization loops.',
      tag: 'PAID MEDIA',
      color: 'hot',
      bg: 'accent',
      icon: '💰',
      metric: '3.8x avg ROAS'
    },
    {
      problem: 'Traffic doesn\'t convert',
      symptom: 'High bounce, low form fills, leaky checkout, no trust signals.',
      fix: 'CRO audit + landing page rebuild + offer engineering + heatmap UX fixes + trust architecture.',
      tag: 'CRO',
      color: 'cyan',
      bg: 'white',
      icon: '📈',
      metric: '19% conversion lift'
    },
    {
      problem: 'Leads go cold',
      symptom: 'Manual follow-up, no scoring, broken CRM, zero nurture sequences.',
      fix: 'CRM migration/cleanup + lead scoring + email/SMS sequences + pipeline dashboards + sales enablement.',
      tag: 'AUTOMATION',
      color: 'lime',
      bg: 'blue-pale',
      icon: '⚡',
      metric: '67% faster close rate'
    },
    {
      problem: 'Content is noise',
      symptom: 'Blog posts nobody reads, no distribution, zero SEO value, brand inconsistency.',
      fix: 'Content strategy + pillar/cluster architecture + repurposing system + distribution automation + performance tracking.',
      tag: 'CONTENT',
      color: 'blue-pop',
      bg: 'accent',
      icon: '📝',
      metric: '400% organic lead growth'
    },
    {
      problem: 'Data is chaos',
      symptom: 'GA4 misconfigured, no event tracking, unattributed revenue, gut-feel decisions.',
      fix: 'Analytics governance + server-side GTM + custom dashboards + attribution modeling + weekly insights reports.',
      tag: 'ANALYTICS',
      color: 'ink',
      bg: 'white',
      icon: '📊',
      metric: '100% attribution clarity'
    }
  ];
</script>

<section id="solutions" class="py-16 lg:py-28 relative noise-overlay grid-pattern">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,240,77,0.08),transparent_40%)] pointer-events-none" aria-hidden="true"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-3xl">
        <span class="section-label-insane">Problem → System → Result</span>
        <h2 class="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.08em] sm:text-6xl lg:text-8xl">
          Pick the <span class="gradient-text-hot">leak</span>.
          <br />
          We deploy the <span class="gradient-text-blueprint">machine</span>.
        </h2>
      </div>
      <p class="max-w-xl text-lg font-bold leading-snug lg:max-w-lg">
        Every engagement is a packaged system — not a menu of deliverables. Strategy, build, iteration, ownership. You get a growth operating system, not a vendor.
      </p>
    </div>

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each solutions as item, index}
        <article
          use:reveal={{ y: 30, delay: index * 80 }}
          class="brutal-card-insane p-6 relative overflow-hidden group {item.bg}"
          style="border-color: var(--color-ink);"
        >
          <div class="absolute -top-3 -right-3 size-16 lg:size-20 border-4 border-ink bg-{item.color}/10 rotate-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>
          <div class="absolute bottom-3 left-3 size-12 lg:size-16 border-4 border-ink bg-{item.color}/10 -rotate-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>

          <div class="mb-4 flex items-start justify-between gap-4 relative z-10">
            <div class="flex items-center gap-2">
              <span class="text-3xl lg:text-4xl animate-bounce-in" style="animation-delay: {index * 100}ms;">{item.icon}</span>
              <span class="border-3 border-ink bg-{item.color} px-3 py-1 text-xs font-black uppercase text-white">{item.tag}</span>
            </div>
            <span class="font-display text-5xl lg:text-6xl tracking-[-0.1em] text-ink/10">0{index + 1}</span>
          </div>

          <h3 class="font-display text-2xl lg:text-3xl tracking-[-0.08em] mb-3 relative z-10">{item.problem}</h3>
          <p class="text-sm font-bold leading-snug mb-4 text-ink/70 relative z-10">{item.symptom}</p>

          <div class="border-t-4 border-ink pt-4 relative z-10">
            <p class="font-black uppercase text-xs mb-3 tracking-wider">THE FIX</p>
            <p class="text-base font-bold leading-snug mb-4">{item.fix}</p>

            <div class="border-4 border-ink bg-{item.color} p-3 font-black uppercase text-xs text-white shadow-[3px_3px_0_#07111f]">
              {item.metric}
            </div>
          </div>

          <a href="#contact" class="mt-5 inline-flex items-center gap-2 brutal-button-outline text-sm px-5 py-3 relative z-10 group/wrapper">
            Deploy this system
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover/wrapper:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>