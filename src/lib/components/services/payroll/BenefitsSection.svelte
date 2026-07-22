<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: 'Zero Tax Penalties', description: 'Automated tax filing ensures you never miss a deadline. We guarantee $0 in penalties.', stat: '$0 penalties', icon: '🛡️' },
    { title: 'Save 12 Hours Weekly', description: 'Automation eliminates manual calculations, data entry, and check processing. Reclaim your time.', stat: '12 hrs/week', icon: '⏰' },
    { title: '99.99% Accuracy', description: 'Automated calculations eliminate human error. Every paycheck is 100% correct, every time.', stat: '99.99%', icon: '✅' },
    { title: 'Happy Employees', description: 'Self-service portal gives employees instant access to pay stubs, W-2s, and benefits info.', stat: '98% satisfaction', icon: '😊' },
    { title: 'Multi-State Ready', description: 'Handle employees across all 50 states with different tax rates and compliance requirements.', stat: '50 states', icon: '🗺️' },
    { title: 'Real-Time Visibility', description: 'Instant reports on payroll costs, tax liabilities, and cash flow for better financial planning.', stat: 'Live data', icon: '📊' }
  ];
</script>

<section id="benefits" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-lime/5 via-transparent to-cyan/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 section-heading max-w-4xl mx-auto animate-text-reveal">
        The payroll that
        <br />
        <span class="gradient-text-lime">just works.</span>
      </h2>
    </div>

    <div class="benefit-grid">
      {#each benefits as benefit, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-5 sm:p-6 bg-white relative overflow-hidden group">
          <div class="absolute -bottom-4 -right-4 size-20 border-4 border-ink bg-lime rotate-12 opacity-10 group-hover:opacity-20 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <div class="flex items-start justify-between gap-3 mb-3">
            <span class="text-3xl">{benefit.icon}</span>
            <span class="font-display text-2xl tracking-[-0.06em] text-lime">{benefit.stat}</span>
          </div>
          <h3 class="font-display text-xl tracking-[-0.06em] mb-2">{benefit.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{benefit.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
