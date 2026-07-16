<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Full-Service Bookkeeping', description: 'Complete bookkeeping from transaction recording to financial statement preparation.', icon: '📒', color: 'blue-pop' },
    { title: 'Financial Reporting', description: 'Monthly, quarterly, and annual financial statements with analysis and insights.', icon: '📊', color: 'blueprint' },
    { title: 'Tax Planning & Prep', description: 'Proactive tax planning to minimize liability. Full preparation and filing services.', icon: '📋', color: 'hot' },
    { title: 'Accounts Payable & Receivable', description: 'Manage vendor payments and customer invoices. Keep cash flow healthy and organized.', icon: '💰', color: 'lime' },
    { title: 'Bank Reconciliation', description: 'Monthly reconciliation of all accounts. Catch discrepancies and maintain accuracy.', icon: '🏦', color: 'cyan' },
    { title: 'Cash Flow Management', description: 'Forecast and manage cash flow to ensure you always have the money you need.', icon: '📈', color: 'accent' },
    { title: 'CFO Advisory', description: 'Strategic financial guidance from experienced CFOs. Budgeting, forecasting, and planning.', icon: '🎯', color: 'blueprint' },
    { title: 'Financial Forecasting', description: 'Data-driven financial projections and scenario planning for better decision making.', icon: '🔮', color: 'blue-pop' }
  ];
</script>

<section id="features" class="relative py-16 lg:py-24 noise-overlay grid-pattern" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue-pop/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 font-display text-5xl lg:text-7xl tracking-[-0.08em] leading-[0.9] max-w-3xl animate-text-reveal">
        Every accounting
        <br />
        <span class="gradient-text-blueprint">service covered.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-lg font-bold leading-snug text-ink/70">
        From daily bookkeeping to strategic CFO advisory, we handle every layer of your financial operations.
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {#each features as feature, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-5 relative overflow-hidden group">
          <div class="absolute -top-3 -right-3 size-16 border-4 border-ink bg-{feature.color} rotate-6 opacity-15 group-hover:opacity-30 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <span class="text-3xl block mb-3">{feature.icon}</span>
          <h3 class="font-display text-xl tracking-[-0.06em] text-{feature.color} mb-2">{feature.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
