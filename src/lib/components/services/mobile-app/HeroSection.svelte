<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero noise-overlay grid-pattern-tight overflow-hidden" aria-labelledby="mobile-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-hot/10 via-transparent to-accent/10 pointer-events-none"></div>
  <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-hot/12 to-accent/8 rounded-full blur-3xl pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">Mobile Apps</span>
      <h1 id="mobile-hero-heading" class="mt-8 hero-heading-xl animate-text-reveal">
        Your business
        <br />
        <span class="gradient-text-hot">in every pocket.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-xl lg:text-2xl font-bold leading-snug text-ink/70 animate-slide-up" style="animation-delay: 200ms;">
        Native or cross-platform, we build mobile apps that users love. From concept to App Store — design, development, launch, and beyond.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#contact" class="brutal-button-insane bg-hot text-white hover:bg-accent hover:text-ink">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Build my app
      </a>
      <a href="#process" class="brutal-button-outline">See our process</a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      <div class="border-4 border-ink bg-white card-padding shadow-[6px_6px_0_#07111f]">
        <p class="stat-number-lg text-hot">98%</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">App store approval</p>
      </div>
      <div class="border-4 border-ink bg-white card-padding shadow-[6px_6px_0_#07111f]">
        <p class="stat-number-lg text-blueprint">+64%</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">User retention</p>
      </div>
      <div class="border-4 border-ink bg-white card-padding shadow-[6px_6px_0_#07111f]">
        <p class="stat-number-lg text-cyan">12 wks</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Avg launch time</p>
      </div>
      <div class="border-4 border-ink bg-white card-padding shadow-[6px_6px_0_#07111f]">
        <p class="stat-number-lg text-lime">4.8★</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Avg app rating</p>
      </div>
    </div>
  </div>
</section>
