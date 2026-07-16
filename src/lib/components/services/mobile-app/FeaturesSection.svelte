<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Native iOS & Android', description: 'Platform-native apps built with Swift, Kotlin, or platform-specific frameworks for maximum performance.', icon: '📱', color: 'hot' },
    { title: 'Cross-Platform', description: 'React Native or Flutter apps that run beautifully on both platforms with a single codebase.', icon: '🔄', color: 'blueprint' },
    { title: 'UI/UX Design', description: 'Mobile-first design with intuitive navigation, beautiful visuals, and platform-native feel.', icon: '🎨', color: 'cyan' },
    { title: 'Push Notifications', description: 'Engaging push notification systems with segmentation, personalization, and smart timing.', icon: '🔔', color: 'accent' },
    { title: 'App Store Optimization', description: 'ASO strategies that improve visibility, downloads, and ratings in the App Store and Play Store.', icon: '🔍', color: 'lime' },
    { title: 'API Integration', description: 'Seamless backend integration with REST APIs, GraphQL, real-time data, and third-party services.', icon: '🔗', color: 'blue-pop' },
    { title: 'Performance Monitoring', description: 'Crash reporting, analytics, and performance monitoring to keep your app running flawlessly.', icon: '📊', color: 'blueprint' },
    { title: 'Ongoing Maintenance', description: 'Post-launch updates, bug fixes, OS compatibility, and feature additions to keep your app fresh.', icon: '🛡️', color: 'hot' }
  ];
</script>

<section id="features" class="relative py-16 lg:py-24 noise-overlay grid-pattern" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-hot/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 font-display text-5xl lg:text-7xl tracking-[-0.08em] leading-[0.9] max-w-3xl animate-text-reveal">
        Everything your
        <br />
        <span class="gradient-text-hot">app needs.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-lg font-bold leading-snug text-ink/70">
        From concept to App Store, we handle every layer of mobile app development.
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {#each features as feature, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-5 relative overflow-hidden group">
          <div class="absolute -top-3 -right-3 size-16 border-4 border-ink bg-{feature.color} rotate-6 opacity-15 group-hover:opacity-30 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <span class="text-3xl block mb-3">{feature.icon}</span>
          <h3 class="font-display text-xl tracking-[-0.06em] text-{feature.color} mb-2">{feature.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
