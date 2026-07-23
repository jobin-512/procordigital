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

<section id="payroll" class="relative section-padding-lg overflow-hidden" aria-labelledby="payroll-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-emerald/3 via-transparent to-ink/3 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
      <div use:reveal={{ x: -20 }}>
        <span class="section-label-insane">Payroll</span>
        <h2 id="payroll-heading" class="mt-6 section-heading animate-text-reveal">
          Payroll that
          <br />
          <span class="text-gradient-emerald">runs itself.</span>
        </h2>
        <p class="mt-5 text-base leading-relaxed text-muted">
          Stop wrestling with spreadsheets and manual calculations. Our payroll systems automate processing, filing, and compliance — so you focus on growing your team, not paperwork.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          {#each stats as stat, i}
            <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg px-4 py-3" use:reveal={{ y: 12, delay: 200 + i * 80 }}>
              <p class="font-semibold text-2xl tracking-tight text-gradient-emerald">{stat.value}</p>
              <p class="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">{stat.label}</p>
            </div>
          {/each}
        </div>
      </div>

      <div use:reveal={{ x: 20, delay: 150 }} class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 sm:p-8">
        <div class="flex items-center gap-3 mb-5 pb-4 border-b border-black/5">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald text-white text-sm font-semibold">P</span>
          <span class="font-semibold uppercase text-xs tracking-widest text-muted">Payroll features</span>
        </div>

        <ul class="space-y-3" role="list">
          {#each features as feature, i}
            <li class="flex items-center gap-3 text-sm font-medium text-muted" use:reveal={{ y: 8, delay: 180 + i * 60 }}>
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-emerald flex items-center justify-center text-white text-[9px] font-bold">✓</span>
              {feature}
            </li>
          {/each}
        </ul>

        <div class="mt-6 pt-5 border-t border-black/5">
          <a href="/services/payroll" class="btn-primary w-full justify-center text-sm">
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
