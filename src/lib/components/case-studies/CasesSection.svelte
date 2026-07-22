<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  
  const caseStudies = [
    {
      client: 'TechCorp',
      industry: 'SaaS',
      title: 'Enterprise Pipeline Growth',
      problem: 'Growing SaaS company with great product but underperforming lead generation. Existing funnel converting at 0.3%.',
      solution: 'Comprehensive funnel optimization: landing page redesign, automated email sequences, paid media restructuring.',
      results: ['$2.4M pipeline value', '341% increase in leads', '1,247% ROI'],
      color: 'primary',
      featured: true
    },
    {
      client: 'RetailX',
      industry: 'E-commerce',
      title: 'Mobile Commerce Transformation',
      problem: 'Legacy retailer with outdated website. Mobile experience was costing significant revenue.',
      solution: 'Modern e-commerce platform with mobile-first design, optimized checkout, and performance improvements.',
      results: ['12x revenue growth', '98 Lighthouse score', '45% mobile CVR'],
      color: 'accent'
    },
    {
      client: 'HealthFirst',
      industry: 'Healthcare',
      title: 'Compliant Growth Strategy',
      problem: 'Healthcare startup needing HIPAA-compliant digital presence with strong local visibility.',
      solution: 'Built compliant CRM and patient portal. Implemented local SEO strategy across 23 locations.',
      results: ['#1 rankings', '340% patient growth', 'Zero issues'],
      color: 'secondary'
    },
    {
      client: 'FinanceFlow',
      industry: 'FinTech',
      title: 'Ad Performance Optimization',
      problem: 'Well-funded startup burning budget on ads with poor conversion rates.',
      solution: 'Creative testing framework, landing page optimization, and comprehensive analytics implementation.',
      results: ['847% ROI increase', '$1.2M revenue', '95% attribution'],
      color: 'violet'
    }
  ];
</script>

<section id="cases" class="section-padding-lg noise-overlay grid-pattern" aria-labelledby="cases-grid-heading">
  <div class="container-brutal">
    <div use:reveal class="mb-12 text-center">
      <div class="section-label-secondary">Our Work</div>
      <h2 id="cases-grid-heading" class="mt-6 section-heading">
        Recent <span class="gradient-text-secondary">projects</span>
      </h2>
    </div>
    
    <div class="grid gap-8">
      {#each caseStudies as study, i}
        <article use:reveal={{ delay: i * 100, y: 40 }} class="brutal-card relative overflow-hidden {study.featured ? 'lg:grid lg:grid-cols-[1.4fr_1fr]' : ''} border-{study.color}/20">
          <div class="card-padding">
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="px-3 py-1 text-xs font-medium rounded {study.color === 'primary' ? 'bg-primary text-white' : study.color === 'accent' ? 'bg-accent text-ink' : study.color === 'secondary' ? 'bg-secondary text-white' : 'bg-violet text-white'}">{study.industry}</span>
              <span class="text-xs text-slate">{study.client}</span>
            </div>
            
            <h3 class="font-semibold text-2xl leading-tight">
              {study.title}
            </h3>
            
            <div class="mt-6 grid gap-4 sm:grid-cols-2">
              <div class="border-2 border-ink/10 bg-ink/5 p-4 rounded">
                <p class="text-xs font-medium text-slate mb-2">THE CHALLENGE</p>
                <p class="text-sm text-ink leading-relaxed">{study.problem}</p>
              </div>
              <div class="border-2 border-{study.color}/30 bg-{study.color}/5 p-4 rounded">
                <p class="text-xs font-medium mb-2 {study.color === 'primary' ? 'text-primary' : study.color === 'accent' ? 'text-accent' : study.color === 'secondary' ? 'text-secondary' : 'text-violet'}">OUR APPROACH</p>
                <p class="text-sm text-ink leading-relaxed">{study.solution}</p>
              </div>
            </div>
            
            <div class="mt-6 flex flex-wrap gap-2">
              {#each study.results as result}
                <span class="px-3 py-1 text-sm font-medium border-2 rounded {study.color === 'primary' ? 'bg-primary text-white border-primary' : study.color === 'accent' ? 'bg-accent text-ink border-accent' : study.color === 'secondary' ? 'bg-secondary text-white border-secondary' : 'bg-violet text-white border-violet'}">{result}</span>
              {/each}
            </div>
            
            <a href="#" class="mt-6 inline-flex items-center gap-2 font-medium text-sm {study.color === 'primary' ? 'text-primary' : study.color === 'accent' ? 'text-accent' : study.color === 'secondary' ? 'text-secondary' : 'text-violet'} hover:gap-3 transition-all">
              Read full case study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          
          {#if study.featured}
            <div class="bg-{study.color} p-8 flex flex-col justify-center text-white">
              <p class="font-bold text-5xl lg:text-6xl">847%</p>
              <p class="mt-3 font-medium text-white/80">ROI INCREASE</p>
              <div class="mt-6 h-2 border border-white/30 bg-white/20 overflow-hidden rounded">
                <div class="h-full w-[84.7%] bg-white/50"></div>
              </div>
              <p class="mt-2 text-xs text-white/60">Measured over 12 months</p>
            </div>
          {/if}
        </article>
      {/each}
    </div>
  </div>
</section>
