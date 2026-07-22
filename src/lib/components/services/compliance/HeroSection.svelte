<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero noise-overlay grid-pattern-tight overflow-hidden" aria-labelledby="compliance-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-hot/10 pointer-events-none"></div>
  <div class="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-r from-accent/12 to-hot/8 rounded-full blur-3xl pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="max-w-4xl">
      <span class="section-label-insane">Compliance</span>
      <h1 id="compliance-hero-heading" class="mt-8 hero-heading-xl animate-text-reveal">
        Stay compliant.
        <br />
        <span class="gradient-text-accent">Stay protected.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-xl lg:text-2xl font-bold leading-snug text-ink/70 animate-slide-up" style="animation-delay: 200ms;">
        Regulations change fast. We keep your business ahead of them. From GDPR to HIPAA, SOX to industry-specific mandates — we audit, document, and monitor so you never face a penalty.
      </p>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-12 flex flex-wrap gap-4">
      <a href="#contact" class="brutal-button-insane">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Get compliant
      </a>
      <a href="#process" class="brutal-button-outline">See our process</a>
    </div>

    <div use:reveal={{ delay: 500, y: 30 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      <div class="border-4 border-ink bg-white card-padding shadow-[6px_6px_0_#07111f]">
        <p class="stat-number-lg text-ink">100%</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Audit pass rate</p>
      </div>
      <div class="border-4 border-ink bg-white card-padding shadow-[6px_6px_0_#07111f]">
        <p class="stat-number-lg text-hot">-78%</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Risk reduction</p>
      </div>
      <div class="border-4 border-ink bg-white card-padding shadow-[6px_6px_0_#07111f]">
        <p class="stat-number-lg text-cyan">23</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Avg gaps found</p>
      </div>
      <div class="border-4 border-ink bg-white card-padding shadow-[6px_6px_0_#07111f]">
        <p class="stat-number-lg text-lime">$0</p>
        <p class="mt-1 font-black uppercase text-xs tracking-widest text-ink/60">Penalties incurred</p>
      </div>
    </div>
  </div>
</section>
