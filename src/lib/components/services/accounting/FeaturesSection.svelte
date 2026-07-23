<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Full-Service Bookkeeping', description: 'Complete bookkeeping from transaction recording to financial statement preparation.' },
    { title: 'Financial Reporting', description: 'Monthly, quarterly, and annual financial statements with analysis and insights.' },
    { title: 'Tax Planning & Prep', description: 'Proactive tax planning to minimize liability. Full preparation and filing services.' },
    { title: 'Accounts Payable & Receivable', description: 'Manage vendor payments and customer invoices. Keep cash flow healthy.' },
    { title: 'Bank Reconciliation', description: 'Monthly reconciliation of all accounts. Catch discrepancies and maintain accuracy.' },
    { title: 'Cash Flow Management', description: 'Forecast and manage cash flow to ensure you always have the money you need.' },
    { title: 'CFO Advisory', description: 'Strategic financial guidance from experienced CFOs. Budgeting, forecasting, and planning.' },
    { title: 'Financial Forecasting', description: 'Data-driven financial projections and scenario planning for better decision making.' }
  ];
</script>

<section id="features" class="section-padding bg-ink/3 relative overflow-hidden" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue/3 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 section-heading max-w-3xl animate-text-reveal">
        Every accounting
        <br />
        <span class="text-gradient-blue">service covered.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        From daily bookkeeping to strategic CFO advisory, we handle every layer of your financial operations.
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {#each features as feature, i}
        <article use:reveal={{ y: 24, delay: i * 60 }} class="premium-card p-6 sm:p-7 group relative overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-500">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-xs font-semibold tracking-tight text-blue mb-4 group-hover:bg-blue group-hover:text-ink transition-colors duration-300">{String(i + 1).padStart(2, '0')}</span>
          <h3 class="text-base font-semibold tracking-tight mb-2">{feature.title}</h3>
          <p class="text-sm text-muted leading-relaxed">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
