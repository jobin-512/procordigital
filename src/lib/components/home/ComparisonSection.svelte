<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const oldWay = [
    { label: 'Retainer for "activity"', detail: 'Pay for hours, not outcomes. Busy work disguised as strategy.', icon: '⏳' },
    { label: 'Siloed channel vendors', detail: 'SEO guy doesn\'t talk to ads guy. Creative team ghosted. Data fragmented.', icon: '🏝️' },
    { label: 'Vanity metric reports', detail: 'Impressions! Likes! Traffic! Zero connection to pipeline or revenue.', icon: '📊' },
    { label: 'Junior execution', detail: 'Senior sells. Junior delivers. You\'re the training ground.', icon: '👶' },
    { label: 'Rigid 12-month contracts', detail: 'Locked in before you know if it works. Exit penalties. Zero leverage.', icon: '🔒' },
    { label: 'Black box creative', detail: 'No testing framework. No iteration loops. "Trust the process" = hope.', icon: '🎨' },
    { label: 'Reactive optimization', detail: 'Monthly check-ins. "Let\'s wait and see." Money burns while you wait.', icon: '🐢' },
    { label: 'You own nothing', detail: 'Accounts, pixels, data, creative — all locked in their ecosystem.', icon: '🚫' }
  ];

  const procorWay = [
    { label: 'Sprint-based outcomes', detail: 'Pay for systems deployed & metrics moved. Every sprint ships revenue assets.', icon: '🎯' },
    { label: 'Unified growth architecture', detail: 'One team. One strategy. Shared data. Creative fuels SEO fuels ads fuels email.', icon: '🏗️' },
    { label: 'Revenue-tied KPIs only', detail: 'Leads → SQLs → Pipeline → Revenue. Every metric traces to bank account.', icon: '💰' },
    { label: 'Senior-led, senior-executed', detail: 'The strategist builds. No handoff degradation. You get the A-team.', icon: '👑' },
    { label: '30-day sprint cycles', detail: 'Kill criteria on every bet. Pivot or double down monthly. No sunk cost traps.', icon: '⚡' },
    { label: 'Creative testing engine', detail: '12+ concepts/week. Statistical significance. Losers killed. Winners scaled.', icon: '🧪' },
    { label: 'Weekly decision loops', detail: 'Monday standup. Wednesday data. Friday bets. Money moves at speed of insight.', icon: '🔄' },
    { label: 'You own everything', detail: 'Ad accounts. Pixels. CRM. Creative. Code. Data. Zero vendor lock-in. Ever.', icon: '🔓' }
  ];
</script>

<section id="comparison" class="relative py-16 lg:py-24 noise-overlay grid-pattern" aria-labelledby="comparison-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink to-ink/90 pointer-events-none" aria-hidden="true"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blueprint/10 to-hot/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-void inline-block">Why Procor</span>
      <h2 id="comparison-heading" class="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.08em] sm:text-6xl lg:text-8xl text-white animate-text-reveal">
        Less agency fog.
        <br />
        <span class="gradient-text-accent">More growth architecture.</span>
      </h2>
      <p class="mt-5 max-w-2xl mx-auto text-lg font-bold leading-snug text-blue-50">
        The old model is broken. You know it. We replaced it with a system that compounds.
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <article use:reveal={{ x: -40 }} class="brutal-card-insane border-white bg-ink/50 p-6 text-white shadow-[8px_8px_0_#4db7ff] backdrop-blur-sm">
        <div class="absolute -top-4 -right-4 size-16 lg:size-20 border-4 border-white bg-hot/20 rotate-6 opacity-30" aria-hidden="true"></div>

        <h3 class="font-display text-4xl tracking-[-0.08em] mb-6 relative z-10 flex items-center gap-3">
          <span class="text-4xl">💀</span>
          The Old Way
        </h3>

        <ul class="grid gap-4 relative z-10" role="list">
          {#each oldWay as item}
            <li class="border-4 border-white bg-ink/30 p-5 group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-hot/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="flex items-start gap-4 relative z-10">
                <span class="text-3xl lg:text-4xl animate-shake" style="animation-delay: 2s;">{item.icon}</span>
                <div>
                  <p class="font-black uppercase text-lg">{item.label}</p>
                  <p class="mt-1 text-sm font-bold text-white/70">{item.detail}</p>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </article>

      <article use:reveal={{ x: 40, delay: 120 }} class="brutal-card-insane border-white bg-blueprint/90 p-6 text-white shadow-[8px_8px_0_#fff04d] backdrop-blur-sm">
        <div class="absolute -top-4 -left-4 size-16 lg:size-20 border-4 border-white bg-accent/20 -rotate-6 opacity-30" aria-hidden="true"></div>

        <h3 class="font-display text-4xl tracking-[-0.08em] mb-6 relative z-10 flex items-center gap-3">
          <span class="text-4xl">⚡</span>
          The Procor Way
        </h3>

        <ul class="grid gap-4 relative z-10" role="list">
          {#each procorWay as item}
            <li class="border-4 border-white bg-ink/30 p-5 group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="flex items-start gap-4 relative z-10">
                <span class="text-3xl lg:text-4xl animate-bounce-in" style="animation-delay: 1s;">{item.icon}</span>
                <div>
                  <p class="font-black uppercase text-lg text-accent">{item.label}</p>
                  <p class="mt-1 text-sm font-bold text-white/80">{item.detail}</p>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </article>
    </div>

    <div use:reveal={{ delay: 400, y: 20 }} class="mt-12 lg:mt-16 text-center">
      <div class="brutal-card-insane bg-accent p-6 inline-block mx-auto shadow-[8px_8px_0_#07111f]">
        <p class="font-black uppercase tracking-widest text-xs mb-3 text-blueprint">THE BOTTOM LINE</p>
        <p class="font-display text-3xl lg:text-4xl tracking-[-0.08em]">Agencies manage spend.</p>
        <p class="font-display text-3xl lg:text-4xl tracking-[-0.08em] gradient-text-hot">We build assets that print.</p>
      </div>
    </div>
  </div>
</section>