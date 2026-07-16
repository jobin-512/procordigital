<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: 'Faster Time to Market', description: 'Launch in 12 weeks with a polished, functional app. We don\'t cut corners — we streamline the process.', stat: '12 weeks', icon: '🚀' },
    { title: 'Higher User Retention', description: 'Intuitive design and smooth performance keep users coming back. Average retention boost: +64%.', stat: '+64%', icon: '📈' },
    { title: 'App Store Success', description: '98% first-submission approval rate. We know the guidelines and optimize for acceptance.', stat: '98%', icon: '🏆' },
    { title: 'Platform-Native Feel', description: 'Whether native or cross-platform, your app feels right at home on iOS and Android.', stat: '4.8★ rating', icon: '📱' },
    { title: 'Scalable Architecture', description: 'Built to handle growth. From 100 to 1M users, your app performs flawlessly.', stat: '∞ scale', icon: '📐' },
    { title: 'Ongoing Partnership', description: 'Post-launch support, updates, and feature additions. We grow with your app.', stat: '24/7 support', icon: '🛡️' }
  ];
</script>

<section id="benefits" class="relative py-16 lg:py-24 noise-overlay grid-pattern" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-hot/5 via-transparent to-accent/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 font-display text-5xl lg:text-7xl tracking-[-0.08em] leading-[0.9] max-w-4xl mx-auto animate-text-reveal">
        Apps users
        <br />
        <span class="gradient-text-hot">actually love.</span>
      </h2>
    </div>

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each benefits as benefit, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-6 bg-white relative overflow-hidden group">
          <div class="absolute -bottom-4 -right-4 size-20 border-4 border-ink bg-hot rotate-12 opacity-10 group-hover:opacity-20 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <div class="flex items-start justify-between gap-3 mb-3">
            <span class="text-3xl">{benefit.icon}</span>
            <span class="font-display text-2xl tracking-[-0.06em] text-hot">{benefit.stat}</span>
          </div>
          <h3 class="font-display text-xl tracking-[-0.06em] mb-2">{benefit.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{benefit.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
