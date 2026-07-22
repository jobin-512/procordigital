<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Automated Processing', description: 'Run payroll in minutes, not hours. Automatic calculations for wages, deductions, and taxes.', icon: '⚙️', color: 'lime' },
    { title: 'Tax Filing & Compliance', description: 'Federal, state, and local tax filing automated. Never miss a deadline or penalty.', icon: '📋', color: 'blueprint' },
    { title: 'Direct Deposit', description: 'Same-day and next-day direct deposit for employees. No more manual check writing.', icon: '🏦', color: 'cyan' },
    { title: 'Employee Self-Service', description: 'Employees access pay stubs, W-2s, and benefits info through a secure portal.', icon: '👤', color: 'hot' },
    { title: 'Benefits Integration', description: 'Seamless integration with health insurance, retirement plans, and other benefits.', icon: '🛡️', color: 'accent' },
    { title: 'Garnishment Handling', description: 'Automatic calculation and remittance of child support, tax levies, and other garnishments.', icon: '💰', color: 'lime' },
    { title: 'Multi-State Payroll', description: 'Handle employees across multiple states with different tax rates and regulations.', icon: '🗺️', color: 'blue-pop' },
    { title: 'Real-Time Reporting', description: 'Instant payroll reports, tax summaries, and analytics for better decision making.', icon: '📊', color: 'blueprint' }
  ];
</script>

<section id="features" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-lime/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 section-heading max-w-3xl animate-text-reveal">
        Everything your
        <br />
        <span class="gradient-text-lime">payroll needs.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-lg font-bold leading-snug text-ink/70">
        From processing to filing, we automate every aspect of your payroll operations.
      </p>
    </div>

    <div class="feature-grid">
      {#each features as feature, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-4 sm:p-5 relative overflow-hidden group">
          <div class="absolute -top-3 -right-3 size-16 border-4 border-ink bg-{feature.color} rotate-6 opacity-15 group-hover:opacity-30 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <span class="text-3xl block mb-3">{feature.icon}</span>
          <h3 class="font-display text-xl tracking-[-0.06em] text-{feature.color} mb-2">{feature.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
