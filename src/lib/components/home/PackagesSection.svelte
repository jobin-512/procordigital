<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const packages = [
    {
      name: 'Strike Team',
      price: '$2,997',
      period: '/ sprint',
      description: 'One growth system deployed. One leak plugged. 30-day sprint.',
      features: [
        'Full 127-point audit',
        '1 growth system buildout',
        'Weekly optimization calls',
        'Real-time Slack channel',
        'Dashboard and reporting',
        'Asset ownership guarantee',
      ],
      ideal: 'Teams with one critical leak',
      popular: false,
    },
    {
      name: 'Growth Engine',
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
        'Priority support and Slack',
      ],
      ideal: 'Brands ready to scale',
      popular: true,
    },
    {
      name: 'Scale Division',
      price: '$14,997',
      period: '/ month',
      description: 'All six systems. Dedicated pod. Enterprise-grade velocity.',
      features: [
        'Everything in Growth Engine',
        'All 6 systems deployed',
        'Dedicated growth pod (4+)',
        'Daily standups and weekly reviews',
        'Custom tooling and automation',
        'Executive monthly reviews',
        'Unlimited creative iterations',
        'New channel R&D budget',
      ],
      ideal: 'Market leaders dominating',
      popular: false,
    },
  ];
</script>

<section id="packages" class="section-padding bg-ink text-white-pure relative overflow-hidden">
  <div class="absolute inset-0 bg-grid-subtle-dark pointer-events-none"></div>
  <div class="absolute top-0 left-1/3 w-[400px] h-[400px] bg-blue/5 rounded-full blur-[120px] pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="max-w-3xl mb-12 lg:mb-16">
      <span class="eyebrow text-white/40 before:bg-white/20" style="color: rgba(255,255,255,0.5);">Choose your plan</span>
      <h2 class="section-heading mt-5 text-white-pure">
        Select your
        <br />
        <span class="text-gradient-blue">level of</span>
        firepower.
      </h2>
      <p class="mt-4 text-base leading-relaxed text-white/50 max-w-xl">
        No retainers. No long-term lock-ins. Month-to-month. Cancel anytime. You own every asset we build.
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      {#each packages as plan, index}
        <article
          use:reveal={{ y: 30, delay: plan.popular ? 120 : index * 80 }}
          class="premium-card-dark p-6 relative flex flex-col"
          class:border-blue/40="{plan.popular}"
          class:bg-blue/5="{plan.popular}"
        >
          {#if plan.popular}
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <span class="badge-dark text-blue border-blue/30">Most popular</span>
            </div>
          {/if}

          <div class="mb-5">
            <h3 class="text-lg font-semibold tracking-tight">{plan.name}</h3>
            <p class="text-xs text-white/40 mt-1">{plan.ideal}</p>
          </div>

          <div class="mb-4">
            <p class="text-3xl font-semibold tracking-tight">{plan.price}</p>
            <p class="text-sm text-white/40">{plan.period}</p>
          </div>

          <p class="text-sm text-white/60 mb-6">{plan.description}</p>

          <ul class="space-y-3 mb-8 flex-1">
            {#each plan.features as feature}
              <li class="flex items-start gap-3 text-sm text-white/70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {feature}
              </li>
            {/each}
          </ul>

          <a
            href="/contact"
            class={plan.popular ? 'btn-blue w-full justify-center' : 'btn-outline-light w-full justify-center'}
          >
            {plan.popular ? 'Get started' : 'Learn more'}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {#if !plan.popular}
            <p class="mt-4 text-center text-xs text-white/30">Month-to-month. Cancel anytime.</p>
          {/if}
        </article>
      {/each}
    </div>

    <div use:reveal class="mt-12 text-center">
      <p class="text-sm text-white/50 mb-4">Need something different?</p>
      <a href="/contact" class="btn-outline-light">
        Design custom engagement
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v8M8 12h8"/>
        </svg>
      </a>
    </div>
  </div>
</section>
