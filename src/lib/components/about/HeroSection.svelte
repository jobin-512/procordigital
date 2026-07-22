<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero noise-overlay checkerboard overflow-hidden" aria-labelledby="about-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-toxic/10 pointer-events-none"></div>
  
  <div class="absolute top-10 left-10 w-40 h-40 border-8 border-electric bg-electric/20 rotate-12 animate-pulse-fast" aria-hidden="true"></div>
  <div class="absolute bottom-20 right-20 w-32 h-32 border-8 border-neon bg-neon/20 -rotate-12 animate-bounce-hard" aria-hidden="true"></div>
  <div class="absolute top-1/2 right-10 w-24 h-24 border-8 border-plasma bg-plasma/20 rotate-45 animate-spin-slow" aria-hidden="true"></div>

  <div class="container-brutal relative z-10">
    <div class="grid gap-12 lg:gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <div use:reveal>
        <div class="section-label-electric inline-flex mb-6 animate-shake">⚡ ABOUT US</div>
        
        <h1 id="about-hero-heading" class="hero-heading">
          WE DON'T<br/>
          <span class="gradient-electric">FUCK</span><br/>
          AROUND.
        </h1>
        
        <p class="mt-8 max-w-2xl text-xl font-bold leading-snug uppercase tracking-wide">
          While others make excuses, WE MAKE SHIT HAPPEN. No fluff. No bullshit. Just RAW DIGITAL POWER.
        </p>
        
        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#team" class="brutal-button">
            <span class="text-2xl">🔥</span>
            MEET THE MANIACS
          </a>
          <a href="#values" class="brutal-button-outline">
            <span class="text-2xl">💀</span>
            OUR VALUES
          </a>
        </div>
      </div>

      <div use:reveal={{ delay: 200, y: 30 }} class="relative">
        <div class="brutal-card-electric card-padding-lg relative overflow-hidden">
          <div class="absolute -top-10 -right-10 text-[150px] font-display opacity-20 animate-pulse-fast" aria-hidden="true">⚡</div>
          
          <div class="relative z-10">
            <h2 class="font-display text-3xl uppercase tracking-[-0.02em] mb-6">THE PROCOR MANIFESTO</h2>
            
            <ul class="space-y-4 font-bold uppercase">
              <li class="flex items-start gap-4 bg-white/10 p-3 border-2 border-white border-dashed">
                <span class="text-3xl">01</span>
                <span>VANITY METRICS ARE FOR LOSERS. WE WANT RESULTS.</span>
              </li>
              <li class="flex items-start gap-4 bg-white/10 p-3 border-2 border-white border-dashed">
                <span class="text-3xl">02</span>
                <span>IF IT DOESN'T CONVERT, IT'S TRASH.</span>
              </li>
              <li class="flex items-start gap-4 bg-white/10 p-3 border-2 border-white border-dashed">
                <span class="text-3xl">03</span>
                <span>SPEED KILLS. SLOW LOSES.</span>
              </li>
              <li class="flex items-start gap-4 bg-white/10 p-3 border-2 border-white border-dashed">
                <span class="text-3xl">04</span>
                <span>UNDERPROMISE. OVERDELIVER. REPEAT.</span>
              </li>
            </ul>
            
            <div class="mt-8 pt-6 border-t-4 border-white/30">
              <p class="font-display text-2xl uppercase animate-glitch">BUILD LOUDER. CONVERT HARDER.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
