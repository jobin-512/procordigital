<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: 'Zero Tax Penalties', description: 'Automated tax filing ensures you never miss a deadline. We guarantee $0 in penalties.', stat: '$0 penalties' },
    { title: 'Save 12 Hours Weekly', description: 'Automation eliminates manual calculations, data entry, and check processing. Reclaim your time.', stat: '12 hrs/week' },
    { title: '99.99% Accuracy', description: 'Automated calculations eliminate human error. Every paycheck is 100% correct, every time.', stat: '99.99%' },
    { title: 'Happy Employees', description: 'Self-service portal gives employees instant access to pay stubs, W-2s, and benefits info.', stat: '98% satisfaction' },
    { title: 'Multi-State Ready', description: 'Handle employees across all 50 states with different tax rates and compliance requirements.', stat: '50 states' },
    { title: 'Real-Time Visibility', description: 'Instant reports on payroll costs, tax liabilities, and cash flow for better financial planning.', stat: 'Live data' }
  ];
</script>

<section id="benefits" class="section-padding relative overflow-hidden" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-emerald/3 via-transparent to-blue/3 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 section-heading max-w-4xl mx-auto animate-text-reveal">
        The payroll that
        <br />
        <span class="text-gradient-emerald">just works.</span>
      </h2>
    </div>

    <div class="benefit-grid">
      {#each benefits as benefit, i}
        <article use:reveal={{ y: 24, delay: i * 80 }} class="premium-card p-6 sm:p-7 relative overflow-hidden group">
          <div class="flex items-start justify-between gap-4 mb-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-sm font-semibold text-emerald">{i + 1}</span>
            <span class="text-gradient-blue text-2xl font-semibold tracking-tight">{benefit.stat}</span>
          </div>
          <h3 class="text-base font-semibold tracking-tight mb-2">{benefit.title}</h3>
          <p class="text-sm text-muted leading-relaxed">{benefit.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
