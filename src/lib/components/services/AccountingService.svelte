<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    'Full-service bookkeeping',
    'Financial statement preparation',
    'Tax planning & preparation',
    'Accounts payable & receivable',
    'Bank reconciliation',
    'Cash flow management',
    'CFO advisory services',
    'Financial forecasting & budgeting'
  ];

  const stats = [
    { label: 'Tax savings avg', value: '$18K+' },
    { label: 'Books turnaround', value: '48 hrs' },
    { label: 'Client satisfaction', value: '99%' }
  ];
</script>

<section id="accounting" class="relative section-padding-lg overflow-hidden" aria-labelledby="accounting-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-ink/3 via-transparent to-emerald/3 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
      <div use:reveal={{ x: -20 }}>
        <span class="section-label-insane">Accounting</span>
        <h2 id="accounting-heading" class="mt-6 section-heading animate-text-reveal">
          Numbers that
          <br />
          <span class="text-gradient-emerald">tell the truth.</span>
        </h2>
        <p class="mt-5 text-base leading-relaxed text-muted">
          Clean books, smart taxes, clear forecasts. We handle the numbers so you can make decisions with confidence — not gut feelings. From startup to scale-up, we've got your ledger.
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
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white text-sm font-semibold">A</span>
          <span class="font-semibold uppercase text-xs tracking-widest text-muted">Accounting services</span>
        </div>

        <ul class="space-y-3" role="list">
          {#each features as feature, i}
            <li class="flex items-center gap-3 text-sm font-medium text-muted" use:reveal={{ y: 8, delay: 180 + i * 60 }}>
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-ink flex items-center justify-center text-white text-[9px] font-bold">✓</span>
              {feature}
            </li>
          {/each}
        </ul>

        <div class="mt-6 pt-5 border-t border-black/5">
          <a href="/services/accounting" class="btn-primary w-full justify-center text-sm">
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
