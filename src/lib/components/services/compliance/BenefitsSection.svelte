<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: 'Zero Penalties', description: 'Our clients have never received a compliance penalty. We keep you ahead of every regulation.', stat: '$0 penalties', icon: '🛡️' },
    { title: '100% Audit Pass Rate', description: 'Every audit our clients face, they pass. We prepare you thoroughly and completely.', stat: '100% pass', icon: '✅' },
    { title: '78% Risk Reduction', description: 'Average risk reduction within the first 90 days of working with us.', stat: '-78% risk', icon: '📉' },
    { title: 'Peace of Mind', description: 'Sleep well knowing your compliance is handled by experts. No more regulatory anxiety.', stat: 'Zero stress', icon: '😴' },
    { title: 'Competitive Advantage', description: 'Compliance becomes a differentiator, not a burden. Win deals that require compliance certifications.', stat: 'Deal winner', icon: '🏆' },
    { title: 'Always Current', description: 'We monitor regulatory changes and update your compliance posture automatically.', stat: 'Always current', icon: '🔄' }
  ];
</script>

<section id="benefits" class="relative py-16 lg:py-24 noise-overlay grid-pattern" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-hot/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 font-display text-5xl lg:text-7xl tracking-[-0.08em] leading-[0.9] max-w-4xl mx-auto animate-text-reveal">
        Compliance that
        <br />
        <span class="gradient-text-accent">protects you.</span>
      </h2>
    </div>

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each benefits as benefit, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-6 bg-white relative overflow-hidden group">
          <div class="absolute -bottom-4 -right-4 size-20 border-4 border-ink bg-accent rotate-12 opacity-10 group-hover:opacity-20 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <div class="flex items-start justify-between gap-3 mb-3">
            <span class="text-3xl">{benefit.icon}</span>
            <span class="font-display text-2xl tracking-[-0.06em] text-ink">{benefit.stat}</span>
          </div>
          <h3 class="font-display text-xl tracking-[-0.06em] mb-2">{benefit.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{benefit.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
