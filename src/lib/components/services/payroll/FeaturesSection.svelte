<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Automated Processing', description: 'Run payroll in minutes, not hours. Automatic calculations for wages, deductions, and taxes.', badge: 'AP' },
    { title: 'Tax Filing & Compliance', description: 'Federal, state, and local tax filing automated. Never miss a deadline or penalty.', badge: 'TX' },
    { title: 'Direct Deposit', description: 'Same-day and next-day direct deposit for employees. No more manual check writing.', badge: 'DD' },
    { title: 'Employee Self-Service', description: 'Employees access pay stubs, W-2s, and benefits info through a secure portal.', badge: 'ES' },
    { title: 'Benefits Integration', description: 'Seamless integration with health insurance, retirement plans, and other benefits.', badge: 'BI' },
    { title: 'Garnishment Handling', description: 'Automatic calculation and remittance of child support, tax levies, and other garnishments.', badge: 'GH' },
    { title: 'Multi-State Payroll', description: 'Handle employees across multiple states with different tax rates and regulations.', badge: 'MS' },
    { title: 'Real-Time Reporting', description: 'Instant payroll reports, tax summaries, and analytics for better decision making.', badge: 'RR' }
  ];
</script>

<section id="features" class="section-padding bg-ghost relative overflow-hidden" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue/3 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 section-heading max-w-3xl animate-text-reveal">
        Everything your
        <br />
        <span class="text-gradient-blue">payroll needs.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        From processing to filing, we automate every aspect of your payroll operations.
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {#each features as feature, i}
        <article use:reveal={{ y: 24, delay: i * 60 }} class="premium-card p-6 sm:p-7 group relative overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-500">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-xs font-semibold tracking-tight text-blue mb-4 group-hover:bg-blue group-hover:text-ink transition-colors duration-300">{feature.badge}</span>
          <h3 class="text-base font-semibold tracking-tight mb-2">{feature.title}</h3>
          <p class="text-sm text-muted leading-relaxed">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
