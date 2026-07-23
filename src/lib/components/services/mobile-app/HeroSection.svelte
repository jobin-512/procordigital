<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero overflow-hidden" aria-labelledby="mobile-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-blue/5 via-transparent to-emerald/5 pointer-events-none"></div>
  <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue/8 to-emerald/5 rounded-full blur-3xl pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">Mobile Apps</span>
      <h1 id="mobile-hero-heading" class="mt-8 display-title animate-text-reveal">
        Your business
        <br />
        <span class="text-gradient-blue">in every pocket.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-lg leading-relaxed text-muted animate-fade-up" style="animation-delay: 200ms;">
        Native or cross-platform, we build mobile apps that users love. From concept to App Store — design, development, launch, and beyond.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#contact" class="btn-blue">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Build my app
      </a>
      <a href="#process" class="btn-outline">See our process</a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-blue stat-number">98%</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">App store approval</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-emerald stat-number">+64%</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">User retention</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-blue stat-number">12 wks</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Avg launch time</p>
      </div>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 text-center">
        <p class="text-gradient-emerald stat-number">4.8★</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Avg app rating</p>
      </div>
    </div>
  </div>
</section>
