<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Native iOS & Android', description: 'Platform-native apps built with Swift, Kotlin, or platform-specific frameworks for maximum performance.', badge: 'N' },
    { title: 'Cross-Platform', description: 'React Native or Flutter apps that run beautifully on both platforms with a single codebase.', badge: 'X' },
    { title: 'UI/UX Design', description: 'Mobile-first design with intuitive navigation, beautiful visuals, and platform-native feel.', badge: 'D' },
    { title: 'Push Notifications', description: 'Engaging push notification systems with segmentation, personalization, and smart timing.', badge: 'P' },
    { title: 'App Store Optimization', description: 'ASO strategies that improve visibility, downloads, and ratings in the App Store and Play Store.', badge: 'A' },
    { title: 'API Integration', description: 'Seamless backend integration with REST APIs, GraphQL, real-time data, and third-party services.', badge: 'I' },
    { title: 'Performance Monitoring', description: 'Crash reporting, analytics, and performance monitoring to keep your app running flawlessly.', badge: 'M' },
    { title: 'Ongoing Maintenance', description: 'Post-launch updates, bug fixes, OS compatibility, and feature additions to keep your app fresh.', badge: 'U' }
  ];
</script>

<section id="features" class="relative section-padding-lg bg-grid-subtle" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 section-heading max-w-3xl animate-text-reveal">
        Everything your
        <br />
        <span class="text-gradient-blue">app needs.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        From concept to App Store, we handle every layer of mobile app development.
      </p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {#each features as feature, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="premium-card p-5 sm:p-6 relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 text-blue text-sm font-semibold mb-4">{feature.badge}</span>
          <h3 class="font-display text-lg tracking-tight mb-2">{feature.title}</h3>
          <p class="text-sm leading-relaxed text-muted">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
