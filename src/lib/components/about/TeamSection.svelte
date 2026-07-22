<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  
  const team = [
    { name: 'ALEX RIVERA', role: 'CHIEF CHAOS OFFICER', emoji: '🔥' },
    { name: 'JORDAN CHEN', role: 'DESIGN DESTROYER', emoji: '💥' },
    { name: 'SAM MORRISON', role: 'CODE OVERLORD', emoji: '⚡' },
    { name: 'TAYLOR BROOKS', role: 'GROWTH HACKER', emoji: '🚀' },
    { name: 'CASEY WILLIAMS', role: 'COPY ASSASSIN', emoji: '💀' },
    { name: 'MORGAN PATEL', role: 'STRATEGY SAVAGE', emoji: '🎯' }
  ];
</script>

<section id="team" class="section-padding-lg noise-overlay diagonal-lines" aria-labelledby="team-heading">
  <div class="container-brutal">
    <div use:reveal class="text-center mb-12">
      <div class="section-label-plasma inline-flex">👥 THE CREW</div>
      <h2 id="team-heading" class="mt-8 section-heading">
        MEET THE<br/>
        <span class="gradient-electric">MANIACS</span>
      </h2>
      <p class="mt-4 max-w-2xl mx-auto text-xl font-bold uppercase tracking-wide">
        No suits. No jargon. Just HUMANS OBSESSED WITH WINNING.
      </p>
    </div>
    
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each team as member, i}
        <div use:reveal={{ delay: i * 100, y: 30 }} class="brutal-card card-padding relative overflow-hidden {i % 3 === 0 ? 'hover:bg-electric hover:text-white' : i % 3 === 1 ? 'hover:bg-neon' : 'hover:bg-plasma hover:text-white'} transition-all duration-300 rotate-{i % 2 === 0 ? '1' : '-1'} hover:rotate-0">
          <div class="absolute -bottom-4 -right-4 text-[80px] opacity-10" aria-hidden="true">{member.emoji}</div>
          
          <div class="relative z-10">
            <div class="w-20 h-20 border-4 border-ink bg-electric mb-4 flex items-center justify-center text-4xl">
              {member.emoji}
            </div>
            
            <h3 class="font-display text-2xl uppercase tracking-[-0.02em]">{member.name}</h3>
            <p class="mt-2 font-black uppercase text-xs tracking-widest">{member.role}</p>
            
            <div class="mt-4 flex gap-2">
              <div class="w-10 h-10 border-2 border-ink bg-white flex items-center justify-center text-sm font-black hover:bg-electric hover:text-white transition-colors cursor-pointer">X</div>
              <div class="w-10 h-10 border-2 border-ink bg-white flex items-center justify-center text-sm font-black hover:bg-toxic hover:text-white transition-colors cursor-pointer">in</div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
