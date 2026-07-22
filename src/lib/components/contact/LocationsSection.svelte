<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-padding-lg noise-overlay diagonal-lines" aria-labelledby="map-heading">
  <div class="container-brutal">
    <div use:reveal class="text-center mb-12">
      <div class="section-label-cyber inline-flex">🌍 GLOBAL</div>
      <h2 id="map-heading" class="mt-8 section-heading">
        WE'RE <span class="gradient-neon">EVERYWHERE</span>
      </h2>
    </div>
    
    <div use:reveal={{ delay: 200, y: 40 }} class="brutal-card-void p-8 sm:p-12">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="text-center rotate-1 hover:rotate-0 transition-transform">
          <div class="w-20 h-20 border-4 border-neon bg-neon mx-auto flex items-center justify-center text-3xl mb-4 shadow-[4px_4px_0_#0a0a0a]">🌎</div>
          <h3 class="font-display text-xl uppercase">AMERICAS</h3>
          <p class="mt-2 font-bold text-white/60">NYC • LA • São Paulo</p>
        </div>
        <div class="text-center -rotate-1 hover:rotate-0 transition-transform">
          <div class="w-20 h-20 border-4 border-electric bg-electric mx-auto flex items-center justify-center text-3xl mb-4 shadow-[4px_4px_0_#cc00ff]">🌍</div>
          <h3 class="font-display text-xl uppercase">EUROPE</h3>
          <p class="mt-2 font-bold text-white/60">London • Berlin • Barcelona</p>
        </div>
        <div class="text-center rotate-2 hover:rotate-0 transition-transform">
          <div class="w-20 h-20 border-4 border-cyber bg-cyber mx-auto flex items-center justify-center text-3xl mb-4">🌏</div>
          <h3 class="font-display text-xl uppercase text-ink">APAC</h3>
          <p class="mt-2 font-bold text-ink/60">Tokyo • Singapore • Sydney</p>
        </div>
        <div class="text-center -rotate-2 hover:rotate-0 transition-transform">
          <div class="w-20 h-20 border-4 border-plasma bg-plasma mx-auto flex items-center justify-center text-3xl mb-4 shadow-[4px_4px_0_#cc5500]">🌐</div>
          <h3 class="font-display text-xl uppercase">REMOTE</h3>
          <p class="mt-2 font-bold text-white/60">Everywhere else</p>
        </div>
      </div>
      
      <div class="mt-12 text-center pt-8 border-t-4 border-white/20">
        <p class="font-display text-3xl lg:text-4xl gradient-neon">
          47 CLIENTS. 23 COUNTRIES.
        </p>
        <p class="mt-2 font-black uppercase text-white/50">ONE TIME ZONE MATTERS: RESULTS TIME</p>
      </div>
    </div>
  </div>
</section>
