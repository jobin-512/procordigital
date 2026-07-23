<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: 'Faster Time to Market', description: 'Launch in 4-8 weeks, not 6 months. Our streamlined process gets you live while competitors are still in meetings.', stat: '6x faster' },
    { title: 'Higher Conversions', description: 'Every design decision is backed by conversion psychology. We build sites that turn visitors into customers.', stat: '+47% CVR' },
    { title: 'Lower Bounce Rates', description: 'Speed, clarity, and engagement keep visitors on your site longer and exploring deeper.', stat: '-38% bounce' },
    { title: 'SEO-Ready Architecture', description: 'Clean code, semantic HTML, fast load times — your site is built to rank from day one.', stat: 'Top 10' },
    { title: 'Scalable Infrastructure', description: 'Built to grow with you. Add pages, features, and traffic without rebuilding.', stat: 'Unlimited' },
    { title: 'Ongoing Support', description: 'Post-launch monitoring, updates, and optimization. We don\'t disappear after deployment.', stat: '24/7 uptime' }
  ];
</script>

<section id="benefits" class="section-padding relative overflow-hidden" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-emerald/3 via-transparent to-blue/3 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 section-heading max-w-4xl mx-auto animate-text-reveal">
        The results speak
        <br />
        <span class="text-gradient-emerald">for themselves.</span>
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
