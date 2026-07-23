<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: 'Zero Penalties', description: 'Our clients have never received a compliance penalty. We keep you ahead of every regulation.', stat: '$0 penalties' },
    { title: '100% Audit Pass Rate', description: 'Every audit our clients face, they pass. We prepare you thoroughly and completely.', stat: '100% pass' },
    { title: '78% Risk Reduction', description: 'Average risk reduction within the first 90 days of working with us.', stat: '-78% risk' },
    { title: 'Peace of Mind', description: 'Sleep well knowing your compliance is handled by experts. No more regulatory anxiety.', stat: 'Zero stress' },
    { title: 'Competitive Advantage', description: 'Compliance becomes a differentiator, not a burden. Win deals that require compliance certifications.', stat: 'Deal winner' },
    { title: 'Always Current', description: 'We monitor regulatory changes and update your compliance posture automatically.', stat: 'Always current' }
  ];
</script>

<section id="benefits" class="section-padding relative overflow-hidden" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue/3 via-transparent to-emerald/3 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 section-heading max-w-4xl mx-auto animate-text-reveal">
        Compliance that
        <br />
        <span class="text-gradient-emerald">protects you.</span>
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
