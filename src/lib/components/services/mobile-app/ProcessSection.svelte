<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const steps = [
    { num: '01', title: 'Strategy & Discovery', deliverables: ['App strategy', 'User personas', 'Feature roadmap', 'Technical architecture'] },
    { num: '02', title: 'Design & Prototype', deliverables: ['UI/UX design', 'Interactive prototype', 'Design system', 'User testing'] },
    { num: '03', title: 'Development & Testing', deliverables: ['App development', 'API integration', 'QA testing', 'Performance optimization'] },
    { num: '04', title: 'Launch & ASO', deliverables: ['App store listing', 'ASO optimization', 'Launch campaign', 'Press kit'] },
    { num: '05', title: 'Grow & Iterate', deliverables: ['Analytics setup', 'User feedback loops', 'Regular updates', 'Growth optimization'] }
  ];
</script>

<section id="process" class="relative section-padding-lg bg-grid-subtle" aria-labelledby="process-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue/5 via-transparent to-emerald/5 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
      <div use:reveal={{ x: -40 }} class="lg:sticky lg:top-28 lg:self-start">
        <span class="section-label-insane">Our Process</span>
        <h2 id="process-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
          From concept to
          <br />
          <span class="text-gradient-blue">App Store.</span>
        </h2>
        <p class="mt-5 max-w-xl text-base leading-relaxed text-muted">
          A battle-tested process that delivers beautiful, functional apps on time and on budget.
        </p>
        <a href="#contact" class="btn-primary mt-8 inline-flex">
          Start building
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div class="grid gap-4">
        {#each steps as step, i}
          <div use:reveal={{ x: 40, delay: i * 120 }} class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 relative overflow-hidden">
            <div class="flex items-start gap-5">
              <span class="font-display text-3xl tracking-tight text-gradient-blue opacity-30 leading-none mt-1">{step.num}</span>
              <div class="flex-1 min-w-0">
                <h3 class="font-display text-xl tracking-tight">{step.title}</h3>
                <div class="mt-4 flex flex-wrap gap-2">
                  {#each step.deliverables as d}
                    <span class="badge">{d}</span>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
