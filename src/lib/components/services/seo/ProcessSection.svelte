<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const steps = [
    { num: '01', title: 'SEO Audit & Benchmark', description: 'Comprehensive audit of your current SEO health, competitor landscape, and growth opportunities.', deliverables: ['Technical audit', 'Competitor analysis', 'Keyword opportunity map', 'Baseline metrics'], color: 'blueprint' },
    { num: '02', title: 'Strategy & Architecture', description: 'Build the keyword clusters, content strategy, and site architecture that will drive organic growth.', deliverables: ['Keyword clusters', 'Content calendar', 'Site architecture plan', 'Internal linking map'], color: 'cyan' },
    { num: '03', title: 'Content Engine', description: 'Execute the content strategy with optimized articles, pages, and assets that build topical authority.', deliverables: ['Blog content', 'Landing pages', 'Content optimization', 'Schema markup'], color: 'hot' },
    { num: '04', title: 'Authority Building', description: 'Systematic link acquisition and digital PR to build domain authority and trust signals.', deliverables: ['Link building', 'Digital PR', 'Citation building', 'Brand mentions'], color: 'lime' },
    { num: '05', title: 'Optimize & Scale', description: 'Continuous optimization based on data. What works gets doubled down, what doesn\'t gets pivoted.', deliverables: ['Monthly reporting', 'Strategy iteration', 'Content updates', 'Growth forecasting'], color: 'accent' }
  ];
</script>

<section id="process" class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="process-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-lime/5 via-transparent to-blueprint/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10 process-grid">
    <div use:reveal={{ x: -40 }} class="lg:sticky lg:top-28">
      <span class="section-label-insane">Our Process</span>
      <h2 id="process-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        SEO that
        <br />
        <span class="gradient-text-cyan">compounds.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        A five-phase system designed for long-term organic dominance. Each phase builds on the last.
      </p>
      <a class="brutal-button-insane mt-8 inline-flex" href="#contact">
        Start SEO growth
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <div class="process-steps">
      {#each steps as step, i}
        <div use:reveal={{ x: 40, delay: i * 120 }} class="step-card">
          <div class="absolute -top-4 -right-4 size-20 border-4 border-ink bg-{step.color} rotate-12 opacity-10 group-hover:opacity-25 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <div class="step-card-inner">
            <span class="step-number text-{step.color} opacity-30">{step.num}</span>
            <div class="flex-1 min-w-0">
              <h3 class="font-display text-2xl tracking-[-0.06em]">{step.title}</h3>
              <p class="mt-2 text-sm font-bold leading-snug text-ink/70">{step.description}</p>
              <ul class="mt-3 deliverables-grid" role="list">
                {#each step.deliverables as d}
                  <li class="flex items-center gap-2 text-xs font-bold text-ink/60">
                    <span class="w-4 h-4 border-2 border-ink bg-{step.color} flex items-center justify-center text-[8px] flex-shrink-0">✓</span>
                    {d}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
