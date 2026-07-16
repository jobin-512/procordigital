<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const steps = [
    { num: '01', title: 'Financial Health Check', description: 'Comprehensive review of your current financial operations, books, and systems.', deliverables: ['Books review', 'System assessment', 'Process audit', 'Health score'], color: 'blue-pop' },
    { num: '02', title: 'System Setup & Cleanup', description: 'Set up or clean up your accounting systems. Migrate data, fix errors, establish processes.', deliverables: ['System setup', 'Data migration', 'Chart of accounts', 'Process docs'], color: 'blueprint' },
    { num: '03', title: 'Ongoing Management', description: 'Daily bookkeeping, reconciliation, reporting, and financial management. You focus on business.', deliverables: ['Monthly close', 'Reconciliation', 'Financial reports', 'Cash management'], color: 'cyan' },
    { num: '04', title: 'Tax Strategy & Prep', description: 'Proactive tax planning throughout the year. Minimize liability and maximize savings.', deliverables: ['Tax planning', 'Quarterly estimates', 'Annual filing', 'Tax optimization'], color: 'hot' },
    { num: '05', title: 'Advisory & Growth', description: 'Strategic CFO guidance for budgeting, forecasting, and growth planning.', deliverables: ['Financial forecasts', 'Budget planning', 'Growth modeling', 'Board reporting'], color: 'lime' }
  ];
</script>

<section id="process" class="relative py-16 lg:py-24 noise-overlay grid-pattern-tight" aria-labelledby="process-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blueprint/5 via-transparent to-blue-pop/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
    <div use:reveal={{ x: -40 }} class="lg:sticky lg:top-28">
      <span class="section-label-insane">Our Process</span>
      <h2 id="process-heading" class="mt-6 font-display text-5xl lg:text-7xl tracking-[-0.08em] leading-[0.9] max-w-xl animate-text-reveal">
        From messy books to
        <br />
        <span class="gradient-text-blueprint">clear insights.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        A proven process that transforms financial chaos into clarity and strategic advantage.
      </p>
      <a class="brutal-button-blue-insane mt-8 inline-flex" href="#contact">
        Start accounting
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
