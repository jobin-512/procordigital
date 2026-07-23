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

<section id="mobile-app" class="relative section-padding-lg overflow-hidden" aria-labelledby="mobile-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue/3 via-transparent to-emerald/3 pointer-events-none"></div>
  <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue/5 to-emerald/5 rounded-full blur-3xl pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
      <div use:reveal={{ x: -20 }} class="order-2 lg:order-1 premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 sm:p-8">
        <div class="flex items-center gap-3 mb-5 pb-4 border-b border-black/5">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue text-ink text-sm font-semibold">M</span>
          <span class="font-semibold uppercase text-xs tracking-widest text-muted">App development</span>
        </div>

        <ul class="space-y-3" role="list">
          {#each features as feature, i}
            <li class="flex items-center gap-3 text-sm font-medium text-muted" use:reveal={{ y: 8, delay: 180 + i * 60 }}>
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-blue flex items-center justify-center text-ink text-[9px] font-bold">✓</span>
              {feature}
            </li>
          {/each}
        </ul>

        <div class="mt-6 pt-5 border-t border-black/5">
          <a href="/services/mobile-app" class="btn-primary w-full justify-center text-sm">
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <div use:reveal={{ x: 20, delay: 150 }} class="order-1 lg:order-2">
        <span class="section-label-insane">Mobile Apps</span>
        <h2 id="mobile-heading" class="mt-6 section-heading animate-text-reveal">
          Your business
          <br />
          <span class="text-gradient-blue">in every pocket.</span>
        </h2>
        <p class="mt-5 text-base leading-relaxed text-muted">
          Native or cross-platform, we build mobile apps that users love. From concept to App Store — design, development, launch, and beyond. Your brand, always within reach.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          {#each stats as stat, i}
            <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg px-4 py-3" use:reveal={{ y: 12, delay: 200 + i * 80 }}>
              <p class="font-semibold text-2xl tracking-tight text-gradient-blue">{stat.value}</p>
              <p class="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">{stat.label}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
