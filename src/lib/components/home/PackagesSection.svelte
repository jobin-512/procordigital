<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const packages = [
    {
      name: 'STRIKE TEAM',
      price: '$2,997',
      period: '/ sprint',
      description: 'One growth system deployed. One leak plugged. 30-day sprint.',
      features: [
        'Full 127-point audit',
        '1 growth system buildout',
        'Weekly optimization calls',
        'Real-time Slack channel',
        'Dashboard + reporting',
        'Asset ownership guarantee'
      ],
      ideal: 'Teams with one critical leak',
      color: 'blueprint',
      bg: 'blue-pale',
      border: 'blueprint',
      popular: false,
      cta: 'Deploy Strike Team'
    },
    {
      name: 'GROWTH ENGINE',
      price: '$6,997',
      period: '/ month',
      description: 'Multiple systems stacked. Full funnel ownership. Compound growth.',
      features: [
        'Everything in Strike Team',
        '3 growth systems active',
        'Creative testing lab',
        'Bi-weekly strategy reviews',
        'Competitive intelligence',
        'Quarterly architecture audit',
        'Priority support & slack'
      ],
      ideal: 'Brands ready to scale',
      color: 'accent',
      bg: 'accent',
      border: 'ink',
      popular: true,
      badge: 'MOST DEPLOYED',
      cta: 'Fire Growth Engine'
    },
    {
      name: 'SCALE DIVISION',
      price: '$14,997',
      period: '/ month',
      description: 'All six systems. Dedicated pod. Enterprise-grade velocity.',
      features: [
        'Everything in Growth Engine',
        'All 6 systems deployed',
        'Dedicated growth pod (4+)',
        'Daily standups + weekly reviews',
        'Custom tooling & automation',
        'Executive monthly reviews',
        'Unlimited creative iterations',
        'New channel R&D budget'
      ],
      ideal: 'Market leaders dominating',
      color: 'hot',
      bg: 'blue-pale',
      border: 'hot',
      popular: false,
      cta: 'Mobilize Division'
    }
  ];
</script>

<section id="packages" class="relative bg-ink section-padding-hero text-white noise-overlay">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,240,77,0.06),transparent_60%)] pointer-events-none" aria-hidden="true"></div>
  <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.01),rgba(255,255,255,0.01)_1px,transparent_1px,transparent_3px)] pointer-events-none" aria-hidden="true"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-void">Choose your firepower</span>
      <h2 class="mx-auto mt-6 max-w-4xl font-display text-5xl leading-[0.9] tracking-[-0.08em] sm:text-6xl lg:text-8xl animate-text-reveal">
        Select your
        <br />
        <span class="gradient-text-accent">level of</span>
        <span class="gradient-text-cyan ml-2">marketing</span>
        <span class="gradient-text-lime ml-2">firepower.</span>
      </h2>
      <p class="mt-5 max-w-2xl mx-auto text-lg font-bold leading-snug text-blue-50">
        No retainers. No long-term lock-ins. Month-to-month. Cancel anytime. You own every asset, every data point, every system we build.
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      {#each packages as plan, index}
        <article
          use:reveal={{ y: 46, delay: plan.popular ? 120 : index * 100 }}
          class="relative brutal-card-insane p-6 overflow-hidden group {plan.bg} {plan.popular ? 'ring-4 ring-accent ring-offset-4 ring-offset-ink -translate-y-2 lg:-translate-y-4' : ''}"
          style="border-color: var(--color-{plan.border});"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-{plan.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div class="absolute -top-3 -right-3 size-16 lg:size-20 border-4 border-ink bg-{plan.color}/20 rotate-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>

          {#if plan.popular}
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 mb-4 z-20 animate-pulse-subtle">
              <span class="section-label bg-hot text-white px-4 py-2">{plan.badge}</span>
            </div>
          {/if}

          <div class="relative z-10 mb-5">
            <h3 class="font-display text-3xl sm:text-4xl tracking-[-0.08em]">{plan.name}</h3>
            <p class="mt-2 font-black uppercase text-xs tracking-widest text-{plan.color}">{plan.ideal}</p>
          </div>

          <div class="relative z-10 mb-4">
            <p class="font-display text-5xl sm:text-6xl tracking-[-0.08em]">{plan.price}</p>
            <p class="text-base font-bold tracking-normal text-white/70">{plan.period}</p>
          </div>

          <p class="relative z-10 min-h-16 text-lg font-bold leading-snug mb-6 text-white/80">{plan.description}</p>

          <ul class="relative z-10 my-6 space-y-3 border-y-4 border-ink/30 py-6" role="list">
            {#each plan.features as feature}
              <li class="flex items-start gap-3 font-bold text-white/90 animate-slide-up" style="animation-delay: {index * 100 + 200}ms;">
                <span class="w-6 h-6 border-3 border-ink bg-{plan.color} flex items-center justify-center text-[11px] text-white flex-shrink-0 mt-0.5">✓</span>
                {feature}
              </li>
            {/each}
          </ul>

          <a
            class="relative z-10 w-full {plan.popular ? 'brutal-button-blue' : 'brutal-button-outline'}"
            href="#contact"
          >
            {plan.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ml-2 transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {#if !plan.popular}
            <div class="mt-5 relative z-10 p-4 border-4 border-ink bg-void/50 text-center animate-bounce-in" style="animation-delay: {index * 100 + 400}ms;">
              <p class="font-black uppercase text-xs tracking-widest text-accent mb-1">NO CONTRACT TRAP</p>
              <p class="text-sm font-bold text-white/80">Month-to-month. Cancel anytime. Keep all assets.</p>
            </div>
          {/if}
        </article>
      {/each}
    </div>

    <div use:reveal={{ delay: 400, y: 20 }} class="mt-12 lg:mt-16 text-center">
      <p class="font-black uppercase tracking-widest text-sm mb-4 gradient-text-accent">Need something different?</p>
      <a href="#contact" class="brutal-button-void inline-flex">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v8M8 12h8"/>
        </svg>
        Design custom engagement
      </a>
    </div>
  </div>
</section>

<style>
  .ring-lime {
    --tw-ring-color: #d4ff00;
  }
  .ring-offset-ink {
    --tw-ring-offset-color: #07111f;
  }
</style>