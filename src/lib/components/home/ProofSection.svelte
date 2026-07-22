<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const caseStudies = [
    {
      company: 'VERTICAL SAAS',
      industry: 'B2B SaaS',
      problem: 'Stuck at $2.1M ARR. SEO non-existent. Paid CAC $847. No attribution.',
      solution: 'Full SEO engine + paid restructure + analytics governance + content factory.',
      results: [
        { metric: '3.8x', label: 'ROAS in 90 days' },
        { metric: '+214%', label: 'organic traffic' },
        { metric: '67%', label: 'CAC reduction' },
        { metric: '$4.2M', label: 'pipeline added' }
      ],
      quote: '"Procor didn\'t just fix our marketing — they built us a growth operating system. The SEO engine alone paid for the entire engagement in month 2."',
      author: '— Sarah Chen, CEO',
      color: 'blueprint',
      bg: 'blue-pale'
    },
    {
      company: 'LOCAL PRO NETWORK',
      industry: 'Home Services',
      problem: '47 locations. Zero local SEO. Leads from Yelp only. No CRM. Chaotic follow-up.',
      solution: 'Local SEO domination + GBP optimization + CRM migration + automation sequences + review engine.',
      results: [
        { metric: '12.3x', label: 'organic leads' },
        { metric: '89%', label: 'lead response < 5 min' },
        { metric: '47', label: 'locations in map pack' },
        { metric: '$1.8M', label: 'new revenue Y1' }
      ],
      quote: '"We went from invisible to owning the map pack in every market. The automation meant our techs just show up — leads are pre-qualified and scheduled."',
      author: '— Mike Rodriguez, Founder',
      color: 'cyan',
      bg: 'white'
    },
    {
      company: 'DTC SUPPLEMENT BRAND',
      industry: 'E-commerce',
      problem: 'Meta CPA $142. Creative fatigue weekly. No email flows. 18% repeat rate.',
      solution: 'Creative testing lab + funnel rebuild + Klaviyo automation + post-purchase sequences + attribution.',
      results: [
        { metric: '4.2x', label: 'ROAS at scale' },
        { metric: '31%', label: 'repeat purchase rate' },
        { metric: '$2.7M', label: 'attributed revenue' },
        { metric: '47%', label: 'email revenue share' }
      ],
      quote: '"The creative testing framework changed everything. We now launch 12 new concepts weekly. CAC dropped from $142 to $38 while scaling spend 5x."',
      author: '— Alex Kim, CMO',
      color: 'hot',
      bg: 'accent'
    },
    {
      company: 'CREATOR ECONOMY PLATFORM',
      industry: 'Creator Tools',
      problem: 'Product-led growth stalled. No content engine. Churn at 14% monthly. Zero referral loop.',
      solution: 'Content factory + referral program + lifecycle automation + community building + analytics.',
      results: [
        { metric: '400%', label: 'organic signups' },
        { metric: '8.2%', label: 'monthly churn (was 14%)' },
        { metric: '23%', label: 'referral-driven growth' },
        { metric: '$890K', label: 'ARR added in 6 mo' }
      ],
      quote: '"They turned our users into our best marketers. The content engine produces 47 assets/month. Referral loop now drives 23% of new MRR."',
      author: '— Jordan Park, VP Growth',
      color: 'lime',
      bg: 'blue-pale'
    }
  ];
</script>

<section id="proof" class="relative section-padding-lg noise-overlay grid-pattern">
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" aria-hidden="true"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Receipts only</span>
      <h2 class="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.08em] sm:text-6xl lg:text-8xl animate-text-reveal">
        Numbers that
        <br />
        <span class="gradient-text-hot">don't whisper.</span>
      </h2>
      <p class="mt-5 max-w-2xl mx-auto text-lg font-bold leading-snug text-ink/70">
        Every metric below is from a real engagement. No cherry-picking. No "results not typical" asterisks. These are the outcomes our systems produce when deployed with discipline.
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      {#each caseStudies as study, index}
        <article
          use:reveal={{ y: 30, delay: index * 120 }}
          class="brutal-card-insane overflow-hidden {study.bg} relative"
          style="border-color: var(--color-ink);"
        >
          <div class="absolute -top-3 -right-3 size-16 lg:size-20 border-4 border-ink bg-{study.color}/10 rotate-6 opacity-20" aria-hidden="true"></div>

          <div class="p-6 sm:p-8">
            <div class="mb-4 flex items-center gap-3">
              <span class="border-3 border-ink bg-{study.color} px-3 py-1 text-xs font-black uppercase text-white">{study.industry}</span>
              <span class="font-mono text-xs font-bold text-ink/40">CASE #{index + 1}</span>
            </div>

            <h3 class="font-display text-3xl sm:text-4xl tracking-[-0.08em] mb-4">{study.company}</h3>

            <div class="mb-5 space-y-3 p-4 border-4 border-ink bg-white/50">
              <p class="font-black uppercase text-xs tracking-widest text-blueprint mb-2">THE PROBLEM</p>
              <p class="text-sm font-bold leading-snug">{study.problem}</p>
              <p class="font-black uppercase text-xs tracking-widest text-hot mt-3 mb-2">THE SOLUTION</p>
              <p class="text-sm font-bold leading-snug">{study.solution}</p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2 mb-6">
              {#each study.results as result}
                <div class="border-4 border-ink bg-{study.color} p-4 text-center text-white shadow-[4px_4px_0_#07111f]">
                  <p class="font-display text-4xl sm:text-5xl tracking-[-0.08em]">{result.metric}</p>
                  <p class="mt-1 text-xs font-black uppercase tracking-wider">{result.label}</p>
                </div>
              {/each}
            </div>

            <blockquote class="border-4 border-ink bg-white p-5 relative">
              <div class="absolute -top-3 -left-3 size-10 border-4 border-ink bg-accent flex items-center justify-center font-display text-xl rotate-6">
                "
              </div>
              <p class="font-display text-xl sm:text-2xl leading-none tracking-[-0.06em] mb-3">{study.quote}</p>
              <footer class="font-black uppercase text-sm text-ink/60">{study.author}</footer>
            </blockquote>
          </div>
        </article>
      {/each}
    </div>

    <div use:reveal={{ delay: 600, y: 20 }} class="mt-12 lg:mt-16 text-center">
      <p class="font-black uppercase tracking-widest text-sm mb-4 gradient-text-ink">Want the full case studies?</p>
      <div class="flex flex-col gap-4 sm:flex-row justify-center">
        <a href="#contact" class="brutal-button-insane inline-flex justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
          Get detailed case studies
        </a>
        <a href="#audit" class="brutal-button-outline inline-flex justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M17 15v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6"/>
          </svg>
          Run my audit instead
        </a>
      </div>
    </div>
  </div>
</section>