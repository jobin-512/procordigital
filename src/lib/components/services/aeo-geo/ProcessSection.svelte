<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const steps = [
    { num: '01', title: 'AI Search Audit', description: 'We analyze how AI engines currently reference your brand, identify gaps, and map opportunities across all platforms.', deliverables: ['AI platform audit', 'Brand mention analysis', 'Competitor AI mapping', 'Opportunity score'] },
    { num: '02', title: 'Content Architecture', description: 'Restructure your content to answer questions directly, with clear entity signals and authority markers.', deliverables: ['Content gap analysis', 'Entity mapping', 'Topic cluster redesign', 'Answer-first formatting'] },
    { num: '03', title: 'Schema & Technical', description: 'Implement structured data, optimize page speed, and ensure AI crawlers can easily parse your content.', deliverables: ['Schema markup', 'Technical optimization', 'Crawlability fixes', 'Indexing improvements'] },
    { num: '04', title: 'Authority Building', description: 'Build E-E-A-T signals through citations, mentions, and content quality that AI engines trust.', deliverables: ['Citation building', 'Brand mention strategy', 'Content quality audits', 'Authority benchmarks'] },
    { num: '05', title: 'Monitor & Iterate', description: 'Track AI platform citations, measure visibility changes, and continuously optimize for better results.', deliverables: ['AI citation tracking', 'Visibility reports', 'Monthly optimization', 'Competitive monitoring'] }
  ];
</script>

<section id="process" class="relative section-padding-lg bg-white" aria-labelledby="process-heading">
  <div class="container-premium">
    <div class="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
      <div use:reveal={{ x: -40 }} class="lg:sticky lg:top-28 lg:self-start">
        <span class="section-label-insane">Our Process</span>
        <h2 id="process-heading" class="mt-6 section-heading max-w-xl">
          Five steps to
          <br />
          <span class="text-gradient-emerald">AI search</span>
          <br />
          <span class="text-gradient-blue">dominance.</span>
        </h2>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          A proven framework for getting your brand cited by every major AI search platform.
        </p>
        <a class="btn-primary mt-8 inline-flex" href="#contact">
          Start now
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div class="grid gap-5">
        {#each steps as step, i}
          <div use:reveal={{ y: 30, delay: i * 100 }} class="premium-card p-6 relative overflow-hidden group">
            <div class="flex items-start gap-5">
              <span class="font-display text-4xl font-semibold tracking-tight text-muted opacity-10 leading-none">{step.num}</span>
              <div class="flex-1 min-w-0">
                <h3 class="font-display text-xl font-semibold tracking-tight">{step.title}</h3>
                <p class="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                <div class="divider mt-4 mb-3"></div>
                <ul class="flex flex-wrap gap-2" role="list">
                  {#each step.deliverables as d}
                    <li class="badge">{d}</li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
