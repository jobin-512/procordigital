<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-padding-lg noise-overlay zigzag" aria-labelledby="culture-heading">
  <div class="container-brutal">
    <div class="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
      <div use:reveal>
        <div class="section-label-cyber inline-flex">🎮 CULTURE</div>
        <h2 id="culture-heading" class="mt-8 section-heading">
          REMOTE.<br/>
          <span class="gradient-neon">RUTHLESS.</span><br/>
          <span class="gradient-plasma">REAL.</span>
        </h2>
        <p class="mt-6 max-w-xl text-xl font-bold uppercase leading-relaxed">
          Our office is wherever we can GET SHIT DONE. Remote-first by design, results-first by nature.
        </p>
        
        <div class="mt-8 space-y-4">
          <div class="brutal-card-electric p-5 flex items-center gap-4">
            <div class="w-14 h-14 border-4 border-white bg-plasma flex items-center justify-center text-2xl">☀</div>
            <div>
              <p class="font-display uppercase">ASYNC-FIRST</p>
              <p class="text-sm font-bold mt-1">Deep work > Pointless meetings</p>
            </div>
          </div>
          <div class="brutal-card-neon p-5 flex items-center gap-4">
            <div class="w-14 h-14 border-4 border-ink bg-electric flex items-center justify-center text-2xl text-white">🌍</div>
            <div>
              <p class="font-display uppercase">GLOBAL DOMINATION</p>
              <p class="text-sm font-bold mt-1">8 countries, 1 obsession: WINNING</p>
            </div>
          </div>
          <div class="brutal-card-plasma p-5 flex items-center gap-4">
            <div class="w-14 h-14 border-4 border-white bg-toxic flex items-center justify-center text-2xl">📚</div>
            <div>
              <p class="font-display uppercase text-white">LEARNING BUDGET</p>
              <p class="text-sm font-bold mt-1 text-white">$2k/year for courses, books, CHAOS</p>
            </div>
          </div>
        </div>
      </div>
      
      <div use:reveal={{ delay: 200, y: 30 }} class="relative">
        <div class="brutal-card card-padding-lg relative overflow-hidden rotate-1 hover:rotate-0 transition-transform">
          <div class="absolute top-0 right-0 w-32 h-32 bg-electric/20 -rotate-12"></div>
          
          <h3 class="font-display text-2xl uppercase mb-6">THE DAILY GRIND</h3>
          
          <div class="space-y-6">
            <div class="flex gap-4 items-start border-b-4 border-ink/20 pb-4">
              <span class="font-display text-2xl text-electric w-20">9AM</span>
              <div class="border-l-4 border-electric pl-4 flex-1">
                <p class="font-display uppercase">SYNC UP</p>
                <p class="font-bold text-sm mt-1">15 min or GTFO</p>
              </div>
            </div>
            <div class="flex gap-4 items-start border-b-4 border-ink/20 pb-4">
              <span class="font-display text-2xl text-neon w-20">10AM</span>
              <div class="border-l-4 border-neon pl-4 flex-1">
                <p class="font-display uppercase">DEEP WORK</p>
                <p class="font-bold text-sm mt-1">Zero Slack. Full FOCUS.</p>
              </div>
            </div>
            <div class="flex gap-4 items-start border-b-4 border-ink/20 pb-4">
              <span class="font-display text-2xl text-plasma w-20">2PM</span>
              <div class="border-l-4 border-plasma pl-4 flex-1">
                <p class="font-display uppercase">CLIENT WINS</p>
                <p class="font-bold text-sm mt-1">Show us the NUMBERS</p>
              </div>
            </div>
            <div class="flex gap-4 items-start">
              <span class="font-display text-2xl text-toxic w-20">EOD</span>
              <div class="border-l-4 border-toxic pl-4 flex-1">
                <p class="font-display uppercase">SHIP OR DIE</p>
                <p class="font-bold text-sm mt-1">Every. Single. Day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
