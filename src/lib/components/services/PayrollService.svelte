<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    'Automated payroll processing',
    'Tax filing & compliance (federal, state, local)',
    'Direct deposit & payment management',
    'Employee self-service portal',
    'Benefits administration integration',
    'Garnishment & deduction handling',
    'Multi-state payroll management',
    'Real-time payroll reporting'
  ];

  const stats = [
    { label: 'Processing accuracy', value: '99.99%' },
    { label: 'Time saved weekly', value: '12 hrs' },
    { label: 'Tax penalty avoidance', value: '$0' }
  ];
</script>

<section id="payroll" class="relative py-16 lg:py-24 noise-overlay grid-pattern" aria-labelledby="payroll-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-lime/5 via-transparent to-cyan/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
    <div use:reveal={{ x: -40 }}>
      <span class="section-label-insane">Payroll</span>
      <h2 id="payroll-heading" class="mt-6 font-display text-5xl lg:text-7xl tracking-[-0.08em] leading-[0.9] max-w-xl animate-text-reveal">
        Payroll that
        <br />
        <span class="gradient-text-lime">runs itself.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        Stop wrestling with spreadsheets and manual calculations. Our payroll systems automate processing, filing, and compliance — so you focus on growing your team, not paperwork.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        {#each stats as stat, i}
          <div class="border-4 border-ink bg-white px-5 py-3 shadow-[4px_4px_0_#07111f]" use:reveal={{ y: 20, delay: 200 + i * 100 }}>
            <p class="font-display text-3xl tracking-[-0.08em] text-lime">{stat.value}</p>
            <p class="mt-1 font-black uppercase text-[10px] tracking-widest text-ink/50">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>

    <div use:reveal={{ x: 40, delay: 150 }} class="brutal-card-insane bg-white p-6 sm:p-8">
      <div class="mb-5 flex items-center gap-3 border-4 border-ink bg-lime p-4">
        <span class="text-3xl">💰</span>
        <span class="font-black uppercase text-sm text-ink">Payroll features</span>
      </div>

      <ul class="space-y-3" role="list">
        {#each features as feature, i}
          <li class="flex items-center gap-3 text-sm font-bold text-ink/80" use:reveal={{ y: 12, delay: 180 + i * 60 }}>
            <span class="w-6 h-6 border-3 border-ink bg-lime flex items-center justify-center text-xs text-ink flex-shrink-0">✓</span>
            {feature}
          </li>
        {/each}
      </ul>

      <div class="mt-6 pt-5 border-t-4 border-ink">
        <a href="/services/payroll" class="brutal-button-insane w-full justify-center">
          Learn more
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
