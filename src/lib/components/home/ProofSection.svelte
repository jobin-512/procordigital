<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const caseStudies = [
    {
      company: 'Vertical SaaS',
      industry: 'B2B SaaS',
      problem: 'Stuck at $2.1M ARR. SEO non-existent. Paid CAC at $847. No attribution.',
      solution: 'Full SEO engine, paid restructure, analytics governance, content factory.',
      results: [
        { metric: '3.8x', label: 'ROAS in 90 days' },
        { metric: '+214%', label: 'organic traffic' },
        { metric: '67%', label: 'CAC reduction' },
        { metric: '$4.2M', label: 'pipeline added' },
      ],
      quote: '"Procor did not just fix our marketing — they built us a growth operating system. The SEO engine alone paid for the entire engagement in month 2."',
      author: '— Sarah Chen, CEO',
    },
    {
      company: 'Local Pro Network',
      industry: 'Home Services',
      problem: '47 locations. Zero local SEO. Leads from Yelp only. No CRM.',
      solution: 'Local SEO domination, GBP optimization, CRM migration, automation sequences.',
      results: [
        { metric: '12.3x', label: 'organic leads' },
        { metric: '89%', label: 'lead response < 5 min' },
        { metric: '47', label: 'locations in map pack' },
        { metric: '$1.8M', label: 'new revenue Y1' },
      ],
      quote: '"We went from invisible to owning the map pack in every market. The automation meant our techs just show up — leads are pre-qualified."',
      author: '— Mike Rodriguez, Founder',
    },
    {
      company: 'DTC Supplement Brand',
      industry: 'E-commerce',
      problem: 'Meta CPA at $142. Creative fatigue weekly. No email flows. 18% repeat rate.',
      solution: 'Creative testing lab, funnel rebuild, Klaviyo automation, post-purchase sequences.',
      results: [
        { metric: '4.2x', label: 'ROAS at scale' },
        { metric: '31%', label: 'repeat purchase rate' },
        { metric: '$2.7M', label: 'attributed revenue' },
        { metric: '47%', label: 'email revenue share' },
      ],
      quote: '"The creative testing framework changed everything. We now launch 12 new concepts weekly. CAC dropped from $142 to $38 while scaling spend 5x."',
      author: '— Alex Kim, CMO',
    },
    {
      company: 'Creator Economy Platform',
      industry: 'Creator Tools',
      problem: 'Product-led growth stalled. No content engine. 14% monthly churn.',
      solution: 'Content factory, referral program, lifecycle automation, community building.',
      results: [
        { metric: '400%', label: 'organic signups' },
        { metric: '8.2%', label: 'monthly churn' },
        { metric: '23%', label: 'referral-driven growth' },
        { metric: '$890K', label: 'ARR added in 6 mo' },
      ],
      quote: '"They turned our users into our best marketers. The content engine produces 47 assets per month."',
      author: '— Jordan Park, VP Growth',
    },
  ];
</script>

<section id="proof" class="section-padding bg-white relative overflow-hidden">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="max-w-3xl mb-12 lg:mb-16">
      <span class="eyebrow">Receipts only</span>
      <h2 class="section-heading mt-5">
        Numbers that
        <br />
        <span class="text-gradient-blue">do not whisper.</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-xl">
        Every metric below is from a real engagement. No cherry-picking. These are the outcomes our systems produce when deployed with discipline.
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      {#each caseStudies as study, index}
        <article
          use:reveal={{ y: 20, delay: index * 80 }}
          class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden"
        >
          <div class="p-6 sm:p-7">
            <div class="flex items-center gap-3 mb-4">
              <span class="badge">{study.industry}</span>
              <span class="text-xs text-muted">Case #{index + 1}</span>
            </div>

            <h3 class="text-xl font-semibold tracking-tight mb-4">{study.company}</h3>

            <div class="rounded-lg bg-ghost p-4 mb-5">
              <p class="text-xs font-semibold uppercase tracking-wider text-muted mb-1">The problem</p>
              <p class="text-sm mb-3">{study.problem}</p>
              <p class="text-xs font-semibold uppercase tracking-wider text-blue-dark mb-1">The solution</p>
              <p class="text-sm">{study.solution}</p>
            </div>

            <div class="grid gap-3 sm:grid-cols-2 mb-5">
              {#each study.results as result}
                <div class="rounded-lg bg-ink text-white-pure p-4 text-center">
                  <p class="text-2xl font-semibold tracking-tight">{result.metric}</p>
                  <p class="text-xs text-white/60 mt-1">{result.label}</p>
                </div>
              {/each}
            </div>

            <blockquote class="border-l-2 border-blue pl-4">
              <p class="text-sm leading-relaxed mb-2">{study.quote}</p>
              <footer class="text-xs font-medium text-muted">{study.author}</footer>
            </blockquote>
          </div>
        </article>
      {/each}
    </div>

    <div use:reveal class="mt-12 text-center">
      <p class="text-sm text-muted mb-4">Want the full case studies?</p>
      <div class="flex flex-col gap-3 sm:flex-row justify-center">
        <a href="/contact" class="btn-primary">
          Get detailed case studies
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="/contact#audit" class="btn-outline">
          Run my audit instead
        </a>
      </div>
    </div>
  </div>
</section>
