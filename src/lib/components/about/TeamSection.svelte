<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const team = [
    { name: 'Alex Rivera', role: 'Chief Chaos Officer', initials: 'AR' },
    { name: 'Jordan Chen', role: 'Design Director', initials: 'JC' },
    { name: 'Sam Morrison', role: 'Lead Engineer', initials: 'SM' },
    { name: 'Taylor Brooks', role: 'Growth Lead', initials: 'TB' },
    { name: 'Casey Williams', role: 'Content Strategist', initials: 'CW' },
    { name: 'Morgan Patel', role: 'Strategy Director', initials: 'MP' },
  ];
</script>

<section id="team" class="section-padding bg-ghost relative overflow-hidden" aria-labelledby="team-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-20 left-1/4 w-[350px] h-[350px] bg-gradient-to-r from-blue/5 to-emerald/5 rounded-full blur-[100px] pointer-events-none animate-float" style="animation-delay: -6s;"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="text-center mb-12 lg:mb-16">
      <span class="eyebrow">Team</span>
      <h2 id="team-heading" class="section-heading mt-5">
        Meet the <span class="text-gradient-blue">crew</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-xl mx-auto">
        No suits. No jargon. Just people obsessed with building systems that print revenue.
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {#each team as m, i}
        <article use:reveal={{ y: 20, delay: i * 60 }} class="premium-card p-5 sm:p-6 group relative overflow-hidden text-center">
          <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-blue/10 text-lg font-semibold text-blue-dark mx-auto mb-4 transition-all duration-300 group-hover:bg-blue group-hover:text-white-pure">
            {m.initials}
          </div>
          <h3 class="text-base font-semibold tracking-tight">{m.name}</h3>
          <p class="text-xs text-muted font-medium mt-1">{m.role}</p>
          <div class="mt-4 flex justify-center gap-2">
            <span class="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-xs text-muted transition-colors hover:border-blue/30 hover:text-blue-dark hover:bg-blue/5 cursor-pointer">in</span>
            <span class="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-xs text-muted transition-colors hover:border-blue/30 hover:text-blue-dark hover:bg-blue/5 cursor-pointer">X</span>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
