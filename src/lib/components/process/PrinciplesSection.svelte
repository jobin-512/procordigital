<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const principles = [
    { num: '1', title: 'Problem-first', description: 'Never deliverable-first. We fix the root cause, not the symptom.', color: 'blueprint' },
    { num: '2', title: 'Weekly decisions', description: 'Not monthly reports. We make decisions every week based on real data.', color: 'accent' },
    { num: '3', title: 'Kill criteria', description: 'Every experiment has kill criteria. No sunk-cost fallacies.', color: 'cyan' },
    { num: '4', title: 'You own everything', description: 'All assets, data, and accounts are yours. Always. No lock-in.', color: 'hot' }
  ];

  const neverGets = [
    'Junior account managers learning on your dime',
    'Vanity metric dashboards nobody reads',
    '6-month contracts with 6-month ramp-up before "results"',
    'Opaque processes & black-box reporting',
    'Generic templates and cookie-cutter strategies',
    'Hidden fees and surprise invoices'
  ];
</script>

<section id="principles" class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="principles-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blueprint/5 via-transparent to-accent/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Our Principles</span>
      <h2 id="principles-heading" class="mt-6 section-heading max-w-4xl mx-auto animate-text-reveal">
        Built on principles,
        <br />
        <span class="gradient-text-accent">not promises.</span>
      </h2>
    </div>

    <div class="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 mb-10">
      {#each principles as principle, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-5 sm:p-6 bg-white relative overflow-hidden group">
          <div class="absolute -top-3 -right-3 size-16 border-4 border-ink bg-{principle.color} rotate-6 opacity-15 group-hover:opacity-30 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <span class="step-number text-{principle.color} opacity-30">{principle.num}</span>
          <h3 class="font-display text-xl tracking-[-0.06em] mt-3 mb-2">{principle.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{principle.description}</p>
        </article>
      {/each}
    </div>

    <div class="grid gap-5 sm:gap-6 lg:grid-cols-2">
      <div use:reveal={{ x: -30, delay: 200 }} class="brutal-card-insane bg-blueprint p-5 sm:p-6 lg:p-8 text-white">
        <div class="mb-5 flex items-center gap-3 border-4 border-white bg-accent p-4">
          <span class="text-3xl">⚡</span>
          <span class="font-black uppercase text-sm text-ink">Core Principles</span>
        </div>
        <ul class="space-y-4" role="list">
          {#each principles as principle}
            <li class="flex items-center gap-3 text-sm font-bold text-white/90">
              <span class="w-7 h-7 border-3 border-white bg-{principle.color} flex items-center justify-center text-xs text-ink flex-shrink-0">{principle.num}</span>
              {principle.title} — {principle.description}
            </li>
          {/each}
        </ul>
      </div>

      <div use:reveal={{ x: 30, delay: 300 }} class="brutal-card-insane bg-ink p-5 sm:p-6 lg:p-8 text-white">
        <div class="mb-5 flex items-center gap-3 border-4 border-white bg-hot p-4">
          <span class="text-3xl">🚫</span>
          <span class="font-black uppercase text-sm text-white">What You Never Get</span>
        </div>
        <ul class="space-y-3" role="list">
          {#each neverGets as item, i}
            <li class="flex items-start gap-3 text-sm font-bold text-white/80" use:reveal={{ y: 10, delay: 350 + i * 60 }}>
              <span class="w-5 h-5 border-2 border-white bg-hot flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">✕</span>
              {item}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
