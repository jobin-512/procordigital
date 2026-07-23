<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const oldWay = [
    { label: 'Retainer for "activity"', detail: 'Pay for hours, not outcomes. Busy work disguised as strategy.' },
    { label: 'Siloed channel vendors', detail: 'SEO does not talk to ads. Creative ghosted. Data fragmented.' },
    { label: 'Vanity metric reports', detail: 'Impressions, likes, traffic. Zero connection to revenue.' },
    { label: 'Junior execution', detail: 'Senior sells. Junior delivers. You are the training ground.' },
    { label: 'Rigid contracts', detail: 'Locked in before you know if it works. Exit penalties.' },
    { label: 'You own nothing', detail: 'Accounts, pixels, data, creative — locked in their ecosystem.' },
  ];

  const procorWay = [
    { label: 'Sprint-based outcomes', detail: 'Pay for systems deployed and metrics moved. Every sprint ships revenue assets.' },
    { label: 'Unified architecture', detail: 'One team, one strategy, shared data. Creative fuels SEO fuels ads.' },
    { label: 'Revenue-tied KPIs', detail: 'Leads to SQLs to pipeline to revenue. Every metric traces to the bank account.' },
    { label: 'Senior-led execution', detail: 'The strategist builds. No handoff degradation. You get the A-team.' },
    { label: 'Month-to-month', detail: 'Cancel anytime. Kill criteria on every bet. No sunk cost traps.' },
    { label: 'You own everything', detail: 'Ad accounts, pixels, CRM, creative, code, data. Zero vendor lock-in.' },
  ];
</script>

<section id="comparison" class="section-padding bg-ink text-white-pure relative overflow-hidden" aria-labelledby="comparison-heading">
  <div class="absolute inset-0 bg-grid-subtle-dark pointer-events-none"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue/3 rounded-full blur-[120px] pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="max-w-3xl mb-12 lg:mb-16">
      <span class="eyebrow text-white/40 before:bg-white/20" style="color: rgba(255,255,255,0.5);">Why Procor</span>
      <h2 id="comparison-heading" class="section-heading mt-5 text-white-pure">
        Less agency fog.
        <br />
        <span class="text-gradient-blue">More growth architecture.</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-white/50 max-w-xl">
        The old model is broken. We replaced it with a system that compounds.
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <article use:reveal={{ x: -20 }} class="premium-card-dark p-6">
        <h3 class="text-lg font-semibold tracking-tight mb-6 flex items-center gap-3 text-white/70">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
          The Old Way
        </h3>

        <ul class="space-y-3">
          {#each oldWay as item}
            <li class="rounded-lg border border-border bg-surface p-4">
              <p class="text-sm font-medium mb-1 text-white/80">{item.label}</p>
              <p class="text-xs text-white/40">{item.detail}</p>
            </li>
          {/each}
        </ul>
      </article>

      <article use:reveal={{ x: 20, delay: 80 }} class="premium-card-dark p-6 border-blue/20">
        <h3 class="text-lg font-semibold tracking-tight mb-6 flex items-center gap-3 text-blue-light">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          The Procor Way
        </h3>

        <ul class="space-y-3">
          {#each procorWay as item}
            <li class="rounded-lg border border-blue/10 bg-blue/5 p-4">
              <p class="text-sm font-medium mb-1 text-blue-light">{item.label}</p>
              <p class="text-xs text-white/50">{item.detail}</p>
            </li>
          {/each}
        </ul>
      </article>
    </div>

    <div use:reveal class="mt-12 text-center">
      <div class="premium-card-blue p-6 inline-block mx-auto animate-glow-pulse">
        <p class="text-xs font-semibold uppercase tracking-widest text-blue-dark mb-2">The bottom line</p>
        <p class="text-xl font-semibold tracking-tight">Agencies manage spend. We build assets that print.</p>
      </div>
    </div>
  </div>
</section>
