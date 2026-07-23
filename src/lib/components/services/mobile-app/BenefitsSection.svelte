<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: 'Faster Time to Market', description: 'Launch in 12 weeks with a polished, functional app. Streamlined process without cutting corners.', stat: '12 weeks' },
    { title: 'Higher User Retention', description: 'Intuitive design and smooth performance keep users coming back. Average retention boost of 64%.', stat: '+64%' },
    { title: 'App Store Success', description: '98% first-submission approval rate. We know the guidelines and optimize for acceptance.', stat: '98%' },
    { title: 'Platform-Native Feel', description: 'Whether native or cross-platform, your app feels right at home on iOS and Android.', stat: '4.8★ rating' },
    { title: 'Scalable Architecture', description: 'Built to handle growth. From 100 to 1M users, your app performs flawlessly at every scale.', stat: '∞ scale' },
    { title: 'Ongoing Partnership', description: 'Post-launch support, updates, and feature additions. We grow with your app.', stat: '24/7 support' }
  ];
</script>

<section id="benefits" class="relative section-padding-lg" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-emerald/5 via-transparent to-blue/5 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 section-heading max-w-4xl mx-auto animate-text-reveal">
        Apps users
        <br />
        <span class="text-gradient-emerald">actually love.</span>
      </h2>
    </div>

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each benefits as benefit, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="premium-card p-6 relative overflow-hidden group">
          <div class="flex items-start justify-between gap-3 mb-3">
            <h3 class="font-display text-lg tracking-tight">{benefit.title}</h3>
            <span class="font-display text-2xl tracking-tight text-gradient-blue flex-shrink-0">{benefit.stat}</span>
          </div>
          <p class="text-sm leading-relaxed text-muted">{benefit.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
