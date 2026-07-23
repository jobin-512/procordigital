<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-padding bg-ghost relative overflow-hidden" aria-labelledby="locations-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-l from-emerald/5 to-transparent rounded-full blur-[100px] pointer-events-none animate-float" style="animation-delay: -4s;"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="text-center mb-12 lg:mb-16">
      <span class="eyebrow">Global reach</span>
      <h2 id="locations-heading" class="section-heading mt-5">
        We're <span class="text-gradient-blue">everywhere</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-xl mx-auto">
        47 clients across 23 countries. One time zone matters: results time.
      </p>
    </div>

    <div use:reveal={{ y: 20 }} class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div class="premium-card p-6 text-center group">
        <span class="flex h-14 w-14 items-center justify-center rounded-xl bg-blue/10 text-2xl mx-auto mb-4 transition-all duration-300 group-hover:bg-blue group-hover:text-white-pure">🌎</span>
        <h3 class="text-base font-semibold tracking-tight">Americas</h3>
        <p class="text-sm text-muted mt-1">NYC LA São Paulo</p>
      </div>
      <div class="premium-card p-6 text-center group">
        <span class="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald/10 text-2xl mx-auto mb-4 transition-all duration-300 group-hover:bg-emerald group-hover:text-white-pure">🌍</span>
        <h3 class="text-base font-semibold tracking-tight">Europe</h3>
        <p class="text-sm text-muted mt-1">London Berlin Barcelona</p>
      </div>
      <div class="premium-card p-6 text-center group">
        <span class="flex h-14 w-14 items-center justify-center rounded-xl bg-blue/10 text-2xl mx-auto mb-4 transition-all duration-300 group-hover:bg-blue group-hover:text-white-pure">🌏</span>
        <h3 class="text-base font-semibold tracking-tight">APAC</h3>
        <p class="text-sm text-muted mt-1">Tokyo Singapore Sydney</p>
      </div>
      <div class="premium-card p-6 text-center group">
        <span class="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald/10 text-2xl mx-auto mb-4 transition-all duration-300 group-hover:bg-emerald group-hover:text-white-pure">🌐</span>
        <h3 class="text-base font-semibold tracking-tight">Remote</h3>
        <p class="text-sm text-muted mt-1">Everywhere else</p>
      </div>
    </div>

    <div use:reveal class="mt-12 premium-card-dark p-8 text-center">
      <p class="text-xl sm:text-2xl font-semibold tracking-tight text-white-pure">
        47 clients. 23 countries. <span class="text-gradient-blue">One obsession.</span>
      </p>
      <p class="mt-2 text-sm text-white/50">Building systems that print predictable revenue.</p>
    </div>
  </div>
</section>
