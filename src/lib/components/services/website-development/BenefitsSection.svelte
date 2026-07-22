<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: 'Faster Time to Market', description: 'Launch in 4-8 weeks, not 6 months. Our streamlined process gets you live while competitors are still in meetings.', stat: '6x faster', icon: '🚀' },
    { title: 'Higher Conversions', description: 'Every design decision is backed by conversion psychology. We build sites that turn visitors into customers.', stat: '+47% CVR', icon: '📈' },
    { title: 'Lower Bounce Rates', description: 'Speed, clarity, and engagement keep visitors on your site longer and exploring deeper.', stat: '-38% bounce', icon: '⬇️' },
    { title: 'SEO-Ready Architecture', description: 'Clean code, semantic HTML, fast load times — your site is built to rank from day one.', stat: 'Top 10 ranking', icon: '🔍' },
    { title: 'Scalable Infrastructure', description: 'Built to grow with you. Add pages, features, and traffic without rebuilding.', stat: '∞ scale', icon: '📐' },
    { title: 'Ongoing Support', description: 'Post-launch monitoring, updates, and optimization. We don\'t disappear after deployment.', stat: '24/7 uptime', icon: '🛡️' }
  ];
</script>

<section id="benefits" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-lime/5 via-transparent to-cyan/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 section-heading max-w-4xl mx-auto animate-text-reveal">
        The results speak
        <br />
        <span class="gradient-text-cyan">for themselves.</span>
      </h2>
    </div>

    <div class="benefit-grid">
      {#each benefits as benefit, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-5 sm:p-6 bg-white relative overflow-hidden group">
          <div class="absolute -bottom-4 -right-4 size-20 border-4 border-ink bg-blueprint rotate-12 opacity-10 group-hover:opacity-20 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <div class="flex items-start justify-between gap-3 mb-3">
            <span class="text-3xl">{benefit.icon}</span>
            <span class="font-display text-2xl tracking-[-0.06em] text-blueprint">{benefit.stat}</span>
          </div>
          <h3 class="font-display text-xl tracking-[-0.06em] mb-2">{benefit.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{benefit.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
