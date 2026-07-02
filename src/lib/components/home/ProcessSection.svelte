<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const steps = [
    {
      num: '01',
      title: 'DIAGNOSE',
      subtitle: 'The Brutal Audit',
      description: 'We tear down your entire funnel — tracking, creative, offer, tech stack, competitors. 127-point diagnostic. No sacred cows. You get a ranked leak list with revenue impact scores.',
      deliverables: ['127-point funnel autopsy', 'Competitive gap map', 'Tracking governance audit', 'Revenue leak priority matrix'],
      timeline: 'Days 1–5',
      color: 'blueprint',
      bg: 'blue-pale',
      icon: '🔍'
    },
    {
      num: '02',
      title: 'BLUEPRINT',
      subtitle: 'The Growth Architecture',
      description: 'We convert findings into a channel plan, offer map, content angles, and a 90-day sprint calendar. Every task has an owner, a KPI, and a kill date. Zero ambiguity.',
      deliverables: ['Channel strategy doc', 'Offer & angle matrix', 'Creative testing roadmap', '90-day sprint calendar'],
      timeline: 'Days 6–10',
      color: 'cyan',
      bg: 'white',
      icon: '🏗️'
    },
    {
      num: '03',
      title: 'BUILD',
      subtitle: 'Ship the Machine',
      description: 'Pages go live. Campaigns launch. Automations fire. Dashboards populate. We build in public with daily standups, weekly reviews, and real-time slack updates. No black boxes.',
      deliverables: ['Landing pages + funnels', 'Ad accounts + creatives', 'CRM + email/SMS flows', 'Analytics + dashboards'],
      timeline: 'Days 11–30',
      color: 'accent',
      bg: 'accent',
      icon: '🚀'
    },
    {
      num: '04',
      title: 'OPTIMIZE',
      subtitle: 'Relentless Iteration',
      description: 'Weekly: kill losers, scale winners, test new angles. Monthly: strategy review, budget reallocation, competitive response. Quarterly: architecture audit, new channel evaluation. Forever.',
      deliverables: ['Weekly optimization logs', 'Monthly strategy reviews', 'Quarterly architecture audits', 'Continuous creative pipeline'],
      timeline: 'Ongoing',
      color: 'hot',
      bg: 'blue-pale',
      icon: '📊'
    }
  ];
</script>

<section id="process" class="py-16 lg:py-28 relative noise-overlay grid-pattern">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,240,77,0.08),transparent_50%)] pointer-events-none" aria-hidden="true"></div>

  <div class="container-brutal relative z-10">
    <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div use:reveal={{ x: -30 }} class="lg:sticky lg:top-28 space-y-6">
        <span class="section-label-insane inline-block">The Procor Protocol</span>
        <h2 class="font-display text-5xl leading-[0.9] tracking-[-0.08em] sm:text-6xl lg:text-8xl">
          No fluff. <br />
          <span class="gradient-text-blueprint">Just a clear</span>
          <span class="gradient-text-accent ml-2">sprint path.</span>
        </h2>
        <p class="text-lg font-bold leading-snug border-l-4 border-ink pl-4">
          The aesthetic is loud. The process is surgical. Each sprint ends with assets shipped, numbers reviewed, and the next bet placed.
        </p>

        <div class="brutal-card-insane p-6 pt-10 relative">
          <div class="absolute -top-3 left-6 w-14 h-14 border-4 border-ink bg-accent flex items-center justify-center font-display text-2xl rotate-6">
            ⚡
          </div>
          <p class="font-black uppercase text-xs tracking-widest mb-3 text-blueprint">CORE PRINCIPLES</p>
          <ul class="space-y-3 text-sm font-bold" role="list">
            <li class="flex items-center gap-3"><span class="w-6 h-6 border-3 border-ink bg-blueprint flex items-center justify-center text-xs text-white">1</span>Problem-first, never deliverable-first</li>
            <li class="flex items-center gap-3"><span class="w-6 h-6 border-3 border-ink bg-accent flex items-center justify-center text-xs text-ink">2</span>Weekly decisions, not monthly reports</li>
            <li class="flex items-center gap-3"><span class="w-6 h-6 border-3 border-ink bg-cyan flex items-center justify-center text-xs text-ink">3</span>Kill criteria on every experiment</li>
            <li class="flex items-center gap-3"><span class="w-6 h-6 border-3 border-ink bg-hot flex items-center justify-center text-xs text-white">4</span>You own all assets & data — always</li>
          </ul>
        </div>

        <div class="brutal-card-insane bg-blueprint p-6 text-white">
          <p class="font-black uppercase text-xs tracking-widest mb-3 text-accent">WHAT YOU NEVER GET</p>
          <ul class="space-y-2 text-sm font-bold text-white/80" role="list">
            <li class="flex items-center gap-2">✕ Junior account managers learning on your dime</li>
            <li class="flex items-center gap-2">✕ Vanity metric dashboards nobody reads</li>
            <li class="flex items-center gap-2">✕ 6-month contracts with 6-month ramp-up before "results"</li>
            <li class="flex items-center gap-2">✕ Opaque processes & black-box reporting</li>
          </ul>
        </div>
      </div>

      <div class="grid gap-5">
        {#each steps as step, index}
          <article
            use:reveal={{ x: 34, delay: index * 120 }}
            class="brutal-card-insane grid gap-4 sm:grid-cols-[5rem_1fr] p-5 sm:p-7 relative overflow-hidden group {step.bg}"
            style="border-color: var(--color-ink);"
          >
            <div class="relative grid place-items-center border-4 border-ink bg-{step.color} font-display text-4xl sm:text-5xl tracking-[-0.08em] shadow-[5px_5px_0_#07111f] z-10">
              {step.num}
              <div class="absolute -inset-4 border-2 border-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
            </div>

            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-3xl animate-bounce-in" style="animation-delay: {index * 100 + 200}ms;">{step.icon}</span>
                <div>
                  <h3 class="font-display text-3xl sm:text-4xl tracking-[-0.08em]">{step.title}</h3>
                  <p class="text-xs font-black uppercase tracking-widest text-{step.color}">{step.subtitle}</p>
                </div>
              </div>

              <p class="text-lg font-bold leading-snug mb-4">{step.description}</p>

              <div class="mb-4">
                <p class="font-black uppercase text-xs tracking-widest mb-2 text-ink/60">SPRINT DELIVERABLES</p>
                <ul class="space-y-2" role="list">
                  {#each step.deliverables as deliverable}
                    <li class="flex items-center gap-2 text-sm font-bold group-hover:translate-x-1 transition-transform duration-150">
                      <span class="w-5 h-5 border-3 border-ink bg-{step.color} flex items-center justify-center text-[10px] text-white flex-shrink-0">✓</span>
                      {deliverable}
                    </li>
                  {/each}
                </ul>
              </div>

              <div class="flex items-center justify-between pt-3 border-t-4 border-ink">
                <span class="font-black uppercase text-xs tracking-widest text-ink/50">TIMELINE</span>
                <span class="font-display text-xl tracking-[-0.08em] text-{step.color}">{step.timeline}</span>
              </div>
            </div>

            <div class="absolute -bottom-3 -right-3 size-16 lg:size-20 border-4 border-ink bg-{step.color}/10 rotate-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>