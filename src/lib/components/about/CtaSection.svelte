<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-padding-lg relative overflow-hidden" aria-labelledby="about-cta-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-electric via-toxic to-plasma"></div>
  <div class="absolute inset-0 checkerboard opacity-30 pointer-events-none"></div>
  
  <div class="pointer-events-none absolute top-0 left-0 w-full h-full" aria-hidden="true">
    <div class="absolute top-20 left-20 w-32 h-32 border-8 border-white/20 rotate-12 animate-pulse-fast"></div>
    <div class="absolute bottom-20 right-20 w-24 h-24 border-8 border-white/20 -rotate-12 animate-bounce-hard"></div>
    <div class="absolute top-1/2 right-1/4 w-20 h-20 border-8 border-white/20 rotate-45 animate-spin-slow"></div>
  </div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="text-center">
      <div class="brutal-card-void p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto rotate--1 hover:rotate-0 transition-transform">
        <h2 id="about-cta-heading" class="font-display text-4xl sm:text-5xl lg:text-7xl uppercase tracking-[-0.04em] text-white leading-none">
          READY TO<br/>
          <span class="gradient-neon">FUCKING WIN?</span>
        </h2>
        
        <p class="mt-8 max-w-xl mx-auto text-lg font-bold text-white/80 uppercase">
          We don't work with everyone. We work with brands ready to STOP PLAYING SMALL and start DOMINATING.
        </p>
        
        <div class="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
          <a href="/contact" class="brutal-button-neon">
            <span class="text-2xl">⚡</span>
            LET'S GO
          </a>
          <a href="/case-studies" class="brutal-button-outline bg-transparent border-white text-white hover:bg-white hover:text-ink">
            <span class="text-2xl">👀</span>
            SEE THE WINS
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
