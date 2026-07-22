<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  
  const values = [
    { title: 'BRUTAL HONESTY', desc: 'We tell you what you NEED to hear, not what you WANT to hear. No sugarcoating.', icon: '💀', color: 'electric' },
    { title: 'OBSESSIVE CRAFT', desc: 'Every pixel, every word, every line of code is intentional. We OBSESS.', icon: '⚡', color: 'neon' },
    { title: 'RESULTS OVER AWARDS', desc: 'Revenue > Trophies. Your bottom line is our ONLY metric.', icon: '💰', color: 'plasma' },
    { title: 'ZERO BULLSHIT', desc: 'No jargon, no vanity metrics, no hidden fees. Just WORK THAT WORKS.', icon: '🔥', color: 'hazard' },
    { title: 'RELENTLESS SPEED', desc: 'While others plan, we SHIP. Speed is a feature, not a tradeoff.', icon: '🚀', color: 'toxic' },
    { title: 'OBSESSIVE SUPPORT', desc: 'We don\'t ghost. We\'re in the trenches with you until YOU WIN.', icon: '💪', color: 'cyber' }
  ];
</script>

<section id="values" class="section-padding-lg bg-electric relative overflow-hidden" aria-labelledby="values-heading">
  <div class="absolute inset-0 checkerboard opacity-20 pointer-events-none"></div>
  
  <div class="container-brutal relative z-10">
    <div use:reveal class="text-center mb-12">
      <div class="section-label inline-flex bg-white text-ink">⚡ VALUES</div>
      <h2 id="values-heading" class="mt-8 section-heading text-white">
        RULES WE<br/>
        <span class="text-outline">BLEED</span>
      </h2>
    </div>
    
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each values as value, i}
        <div use:reveal={{ delay: i * 100, y: 30 }} class="group relative overflow-hidden border-4 border-white card-padding bg-void text-white rotate-{i % 2 === 0 ? '1' : '-1'} hover:rotate-0 transition-all duration-300">
          <div class="absolute -bottom-4 -right-4 text-[80px] opacity-20 group-hover:opacity-40 transition-opacity" aria-hidden="true">{value.icon}</div>
          
          <div class="relative z-10">
            <span class="text-5xl mb-4 block animate-bounce-hard" style="animation-delay: {i * 0.1}s">{value.icon}</span>
            <h3 class="font-display text-xl uppercase tracking-[-0.02em]">{value.title}</h3>
            <p class="mt-3 font-bold text-white/80 leading-relaxed uppercase">{value.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
