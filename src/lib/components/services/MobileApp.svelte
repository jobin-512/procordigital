<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    'Native iOS & Android development',
    'Cross-platform (React Native, Flutter)',
    'UI/UX design & prototyping',
    'Push notification systems',
    'App Store Optimization (ASO)',
    'API integration & backend setup',
    'Performance monitoring & analytics',
    'Ongoing maintenance & updates'
  ];

  const stats = [
    { label: 'App store approval', value: '98%' },
    { label: 'User retention', value: '+64%' },
    { label: 'Launch timeline', value: '12 wks' }
  ];
</script>

<section id="mobile-app" class="relative py-16 lg:py-24 noise-overlay grid-pattern-tight overflow-hidden" aria-labelledby="mobile-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-hot/5 via-transparent to-accent/5 pointer-events-none"></div>
  <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-hot/8 to-accent/8 rounded-full blur-3xl pointer-events-none"></div>

  <div class="container-brutal relative z-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
    <div use:reveal={{ x: -40 }} class="order-2 lg:order-1 brutal-card-insane bg-white p-6 sm:p-8">
      <div class="mb-5 flex items-center gap-3 border-4 border-ink bg-hot p-4">
        <span class="text-3xl">📱</span>
        <span class="font-black uppercase text-sm text-white">App development</span>
      </div>

      <ul class="space-y-3" role="list">
        {#each features as feature, i}
          <li class="flex items-center gap-3 text-sm font-bold text-ink/80" use:reveal={{ y: 12, delay: 180 + i * 60 }}>
            <span class="w-6 h-6 border-3 border-ink bg-hot flex items-center justify-center text-xs text-white flex-shrink-0">✓</span>
            {feature}
          </li>
        {/each}
      </ul>

      <div class="mt-6 pt-5 border-t-4 border-ink">
          <a href="/services/mobile-app" class="brutal-button-insane w-full justify-center bg-hot text-white hover:bg-accent hover:text-ink">
            Learn more
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
      </div>
    </div>

    <div use:reveal={{ x: 40, delay: 150 }} class="order-1 lg:order-2">
      <span class="section-label-insane">Mobile Apps</span>
      <h2 id="mobile-heading" class="mt-6 font-display text-5xl lg:text-7xl tracking-[-0.08em] leading-[0.9] max-w-xl animate-text-reveal">
        Your business
        <br />
        <span class="gradient-text-hot">in every pocket.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        Native or cross-platform, we build mobile apps that users love. From concept to App Store — design, development, launch, and beyond. Your brand, always within reach.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        {#each stats as stat, i}
          <div class="border-4 border-ink bg-white px-5 py-3 shadow-[4px_4px_0_#07111f]" use:reveal={{ y: 20, delay: 200 + i * 100 }}>
            <p class="font-display text-3xl tracking-[-0.08em] text-hot">{stat.value}</p>
            <p class="mt-1 font-black uppercase text-[10px] tracking-widest text-ink/50">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
