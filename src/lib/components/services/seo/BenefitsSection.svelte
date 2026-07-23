<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: 'Compounding Returns', description: 'Unlike ads, SEO builds assets that grow in value over time. Month 12 traffic is worth 3x month 3 traffic.', stat: '3x ROI' },
    { title: 'Lower Customer Acquisition', description: 'Organic traffic costs 62% less than paid. Lower CAC means higher margins and more sustainable growth.', stat: '-62% CAC' },
    { title: 'Market Domination', description: 'Own your category in search. When customers search, they find you — not your competitors.', stat: '#1 rankings' },
    { title: 'Sustainable Growth', description: 'No algorithm panic. We build white-hat systems that survive every update and keep growing.', stat: 'Zero penalties' },
    { title: 'Data-Driven Decisions', description: 'Every move backed by data. Transparent reporting shows exactly what\'s working and what\'s next.', stat: '100% transparent' },
    { title: 'Competitive Moat', description: 'Authority compounds. The longer you invest, the harder it is for competitors to catch up.', stat: 'Unfair advantage' }
  ];
</script>

<section id="benefits" class="relative section-padding-lg overflow-hidden" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue/5 via-transparent to-emerald/5 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 section-heading max-w-4xl mx-auto animate-text-reveal">
        The SEO that
        <br />
        <span class="text-gradient-blue">actually works.</span>
      </h2>
    </div>

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each benefits as benefit, i}
        <article use:reveal={{ y: 20, delay: i * 80 }} class="premium-card p-6 sm:p-7 group">
          <div class="flex items-start justify-between gap-3 mb-3">
            <span class="font-display text-3xl tracking-tight text-gradient-blue">{benefit.stat}</span>
          </div>
          <h3 class="font-display text-lg tracking-tight mb-1.5">{benefit.title}</h3>
          <p class="text-sm leading-relaxed text-muted">{benefit.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
