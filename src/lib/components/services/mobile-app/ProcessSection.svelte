<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const steps = [
    { num: '01', title: 'Strategy & Discovery', description: 'Define your app\'s purpose, target audience, features, and success metrics. We create a roadmap.', deliverables: ['App strategy', 'User personas', 'Feature roadmap', 'Technical architecture'], color: 'hot' },
    { num: '02', title: 'Design & Prototype', description: 'Beautiful, intuitive UI/UX designed for mobile. Interactive prototypes for user testing.', deliverables: ['UI/UX design', 'Interactive prototype', 'Design system', 'User testing'], color: 'blueprint' },
    { num: '03', title: 'Development & Testing', description: 'Clean, performant code with rigorous testing across devices. Native or cross-platform.', deliverables: ['App development', 'API integration', 'QA testing', 'Performance optimization'], color: 'cyan' },
    { num: '04', title: 'Launch & ASO', description: 'App Store submission, optimization, and launch strategy to maximize initial downloads.', deliverables: ['App store listing', 'ASO optimization', 'Launch campaign', 'Press kit'], color: 'lime' },
    { num: '05', title: 'Grow & Iterate', description: 'Monitor analytics, gather feedback, and release updates. Your app keeps improving.', deliverables: ['Analytics setup', 'User feedback loops', 'Regular updates', 'Growth optimization'], color: 'accent' }
  ];
</script>

<section id="process" class="relative py-16 lg:py-24 noise-overlay grid-pattern-tight" aria-labelledby="process-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-hot/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
    <div use:reveal={{ x: -40 }} class="lg:sticky lg:top-28">
      <span class="section-label-insane">Our Process</span>
      <h2 id="process-heading" class="mt-6 font-display text-5xl lg:text-7xl tracking-[-0.08em] leading-[0.9] max-w-xl animate-text-reveal">
        From concept to
        <br />
        <span class="gradient-text-hot">App Store.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        A battle-tested process that delivers beautiful, functional apps on time and on budget.
      </p>
      <a class="brutal-button-insane mt-8 inline-flex bg-hot text-white hover:bg-accent hover:text-ink" href="#contact">
        Start building
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <div class="grid gap-5">
      {#each steps as step, i}
        <div use:reveal={{ x: 40, delay: i * 120 }} class="brutal-card-insane bg-white p-6 relative overflow-hidden group">
          <div class="absolute -top-4 -right-4 size-20 border-4 border-ink bg-{step.color} rotate-12 opacity-10 group-hover:opacity-25 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <div class="flex items-start gap-5">
            <span class="font-display text-5xl tracking-[-0.08em] text-{step.color} opacity-30">{step.num}</span>
            <div class="flex-1 min-w-0">
              <h3 class="font-display text-2xl tracking-[-0.06em]">{step.title}</h3>
              <p class="mt-2 text-sm font-bold leading-snug text-ink/70">{step.description}</p>
              <ul class="mt-3 grid grid-cols-2 gap-2" role="list">
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
