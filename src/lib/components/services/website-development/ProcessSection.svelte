<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const steps = [
    { num: '01', title: 'Discovery & Strategy', description: 'We audit your current site, study competitors, define user personas, and map the conversion architecture.', deliverables: ['Competitor analysis', 'User persona mapping', 'Sitemap & wireframes', 'Content strategy'], color: 'blueprint' },
    { num: '02', title: 'Design & Prototype', description: 'High-fidelity designs with interactive prototypes. You see exactly what you get before a line of code is written.', deliverables: ['UI/UX design system', 'Interactive prototype', 'Responsive mockups', 'Design handoff'], color: 'cyan' },
    { num: '03', title: 'Development & Integration', description: 'Clean, semantic code built on modern frameworks. CMS, analytics, forms, and third-party tools integrated.', deliverables: ['Frontend development', 'CMS setup', 'API integrations', 'Analytics tracking'], color: 'hot' },
    { num: '04', title: 'QA & Performance', description: 'Rigorous testing across devices, browsers, and network conditions. We optimize until every metric is green.', deliverables: ['Cross-browser testing', 'Performance optimization', 'Accessibility audit', 'Security hardening'], color: 'accent' },
    { num: '05', title: 'Launch & Grow', description: 'Deployment, monitoring, and ongoing optimization. Your website keeps improving after it goes live.', deliverables: ['Production deployment', 'Uptime monitoring', 'Monthly optimization', 'Growth reporting'], color: 'lime' }
  ];
</script>

<section id="process" class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="process-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-blueprint/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10 process-grid">
    <div use:reveal={{ x: -40 }} class="lg:sticky lg:top-28">
      <span class="section-label-insane">Our Process</span>
      <h2 id="process-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        From idea to
        <br />
        <span class="gradient-text-cyan">launch in</span>
        <br />
        <span class="gradient-text-hot">weeks, not months.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        A battle-tested process that delivers results fast. Five phases. Zero surprises. Full transparency at every step.
      </p>
      <a class="brutal-button-insane mt-8 inline-flex" href="#contact">
        Start your project
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
