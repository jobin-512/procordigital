<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: 'Compounding Returns', description: 'Unlike ads, SEO builds assets that grow in value over time. Month 12 traffic is worth 3x month 3 traffic.', stat: '3x ROI', icon: '📈' },
    { title: 'Lower Customer Acquisition', description: 'Organic traffic costs 62% less than paid. Lower CAC means higher margins and more sustainable growth.', stat: '-62% CAC', icon: '💰' },
    { title: 'Market Domination', description: 'Own your category in search. When customers search, they find you — not your competitors.', stat: '#1 rankings', icon: '🏆' },
    { title: 'Sustainable Growth', description: 'No algorithm panic. We build white-hat systems that survive every update and keep growing.', stat: 'Zero penalties', icon: '🛡️' },
    { title: 'Data-Driven Decisions', description: 'Every move backed by data. Transparent reporting shows exactly what\'s working and what\'s next.', stat: '100% transparent', icon: '📊' },
    { title: 'Competitive Moat', description: 'Authority compounds. The longer you invest, the harder it is for competitors to catch up.', stat: 'Unfair advantage', icon: '🏰' }
  ];
</script>

<section id="benefits" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blueprint/5 via-transparent to-lime/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 section-heading max-w-4xl mx-auto animate-text-reveal">
        The SEO that
        <br />
        <span class="gradient-text-cyan">actually works.</span>
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
