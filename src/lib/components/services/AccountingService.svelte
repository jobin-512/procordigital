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

<section id="accounting" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="accounting-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue-pop/5 via-transparent to-blueprint/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10 two-col-grid">
    <div use:reveal={{ x: -40 }}>
      <span class="section-label-insane">Accounting</span>
      <h2 id="accounting-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        Numbers that
        <br />
        <span class="gradient-text-blueprint">tell the truth.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        Clean books, smart taxes, clear forecasts. We handle the numbers so you can make decisions with confidence — not gut feelings. From startup to scale-up, we've got your ledger.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        {#each stats as stat, i}
          <div class="border-4 border-ink bg-white px-5 py-3 shadow-[4px_4px_0_#07111f]" use:reveal={{ y: 20, delay: 200 + i * 100 }}>
            <p class="stat-number text-blue-pop">{stat.value}</p>
            <p class="mt-1 font-black uppercase text-[10px] tracking-widest text-ink/50">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>

    <div use:reveal={{ x: 40, delay: 150 }} class="brutal-card-insane bg-white card-padding-lg">
      <div class="mb-5 flex items-center gap-3 border-4 border-ink bg-blue-pop p-4">
        <span class="text-3xl">📊</span>
        <span class="font-black uppercase text-sm text-ink">Accounting services</span>
      </div>

      <ul class="space-y-3" role="list">
        {#each features as feature, i}
          <li class="flex items-center gap-3 text-sm font-bold text-ink/80" use:reveal={{ y: 12, delay: 180 + i * 60 }}>
            <span class="w-6 h-6 border-3 border-ink bg-blue-pop flex items-center justify-center text-xs text-ink flex-shrink-0">✓</span>
            {feature}
          </li>
        {/each}
      </ul>

      <div class="mt-6 pt-5 border-t-4 border-ink">
        <a href="/services/accounting" class="brutal-button-blue-insane w-full justify-center">
          Learn more
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
