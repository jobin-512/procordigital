<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const steps = [
    { num: '01', title: 'SEO Audit & Benchmark', deliverables: ['Technical audit', 'Competitor analysis', 'Keyword opportunity map', 'Baseline metrics'] },
    { num: '02', title: 'Strategy & Architecture', deliverables: ['Keyword clusters', 'Content calendar', 'Site architecture plan', 'Internal linking map'] },
    { num: '03', title: 'Content Engine', deliverables: ['Blog content', 'Landing pages', 'Content optimization', 'Schema markup'] },
    { num: '04', title: 'Authority Building', deliverables: ['Link building', 'Digital PR', 'Citation building', 'Brand mentions'] },
    { num: '05', title: 'Optimize & Scale', deliverables: ['Monthly reporting', 'Strategy iteration', 'Content updates', 'Growth forecasting'] }
  ];
</script>

<section id="process" class="relative section-padding-lg overflow-hidden bg-grid-subtle" aria-labelledby="process-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-emerald/5 via-transparent to-blue/5 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
      <div use:reveal={{ x: -20 }} class="lg:sticky lg:top-28 lg:self-start">
        <span class="section-label-insane">Our Process</span>
        <h2 id="process-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
          SEO that
          <br />
          <span class="text-gradient-emerald">compounds.</span>
        </h2>
        <p class="mt-5 max-w-xl text-base leading-relaxed text-muted">
          A five-phase system designed for long-term organic dominance. Each phase builds on the last.
        </p>
        <a class="btn-primary mt-8 inline-flex" href="#contact">
          Start SEO growth
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div class="grid gap-4">
        {#each steps as step, i}
          <div use:reveal={{ x: 20, delay: i * 100 }} class="premium-card p-5 sm:p-6 group">
            <div class="flex items-start gap-5">
              <span class="font-display text-5xl font-semibold tracking-tight text-gradient-blue/30 leading-none">{step.num}</span>
              <div class="flex-1 min-w-0">
                <h3 class="font-display text-xl tracking-tight">{step.title}</h3>
                <ul class="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5" role="list">
                  {#each step.deliverables as d}
                    <li class="flex items-center gap-2 text-xs font-medium text-muted">
                      <span class="w-1 h-1 rounded-full bg-blue flex-shrink-0"></span>
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
  </div>
</section>
