<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-padding-lg bg-void relative overflow-hidden" aria-labelledby="story-heading">
  <div class="absolute inset-0 checkerboard opacity-20 pointer-events-none"></div>
  <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-electric via-neon to-cyber"></div>
  <div class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-toxic via-plasma to-hazard"></div>
  
  <div class="container-brutal relative z-10">
    <div use:reveal class="text-center mb-16">
      <div class="section-label-hazard inline-flex">🔥 THE ORIGIN</div>
      <h2 id="story-heading" class="mt-8 display-title text-white">
        BORN FROM<br/>
        <span class="gradient-neon">CHAOS</span>
      </h2>
    </div>
    
    <div class="grid gap-8 lg:gap-12 lg:grid-cols-3">
      <div use:reveal={{ delay: 100, y: 30 }} class="brutal-card-electric card-padding-lg relative rotate-1 hover:rotate-0 transition-transform">
        <div class="text-[100px] font-display opacity-10 absolute -top-8 -right-4">2019</div>
        <h3 class="font-display text-4xl uppercase mb-4">IGNITION</h3>
        <p class="font-bold uppercase leading-relaxed">
          Started in a garage with TOO MUCH COFFEE and a hatred for BS marketing. Built different from day one.
        </p>
      </div>
      
      <div use:reveal={{ delay: 200, y: 30 }} class="brutal-card-toxic card-padding-lg relative -rotate-1 hover:rotate-0 transition-transform">
        <div class="text-[100px] font-display opacity-10 absolute -top-8 -right-4">2022</div>
        <h3 class="font-display text-4xl uppercase mb-4">EXPLOSION</h3>
        <p class="font-bold uppercase leading-relaxed">
          Word got out. Projects grew. We hired WEIRD, BRILLIANT people who hate losing as much as we do.
        </p>
      </div>
      
      <div use:reveal={{ delay: 300, y: 30 }} class="brutal-card-plasma card-padding-lg relative rotate-2 hover:rotate-0 transition-transform">
        <div class="text-[100px] font-display opacity-10 absolute -top-8 -right-4">NOW</div>
        <h3 class="font-display text-4xl uppercase mb-4">DOMINATION</h3>
        <p class="font-bold uppercase leading-relaxed">
          47+ clients. $24M added to their bottom lines. Still the same hungry team. Still ZERO LOSS.
        </p>
      </div>
    </div>
    
    <div use:reveal={{ delay: 400, y: 40 }} class="mt-16 brutal-card-void p-8 sm:p-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <p class="stat-number gradient-neon">47+</p>
          <p class="mt-2 font-black uppercase text-sm text-white/60">WINS</p>
        </div>
        <div class="text-center">
          <p class="stat-number gradient-electric">$24M</p>
          <p class="mt-2 font-black uppercase text-sm text-white/60">GENERATED</p>
        </div>
        <div class="text-center">
          <p class="stat-number gradient-plasma">847%</p>
          <p class="mt-2 font-black uppercase text-sm text-white/60">AVG ROI</p>
        </div>
        <div class="text-center">
          <p class="stat-number text-hazard">ZERO</p>
          <p class="mt-2 font-black uppercase text-sm text-white/60">FAILURES</p>
        </div>
      </div>
    </div>
  </div>
</section>
