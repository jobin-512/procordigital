<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const steps = [
    {
      num: '01',
      title: 'Diagnose',
      subtitle: 'The audit',
      description: 'We tear down your entire funnel — tracking, creative, offer, tech stack, competitors. 127-point diagnostic. No sacred cows.',
      timeline: 'Days 1–5',
    },
    {
      num: '02',
      title: 'Blueprint',
      subtitle: 'The architecture',
      description: 'We convert findings into a channel plan, offer map, content angles, and a 90-day sprint calendar. Every task has an owner and a KPI.',
      timeline: 'Days 6–10',
    },
    {
      num: '03',
      title: 'Build',
      subtitle: 'Ship the system',
      description: 'Pages go live. Campaigns launch. Automations fire. Dashboards populate. Daily standups and weekly reviews keep everything on track.',
      timeline: 'Days 11–30',
    },
    {
      num: '04',
      title: 'Optimize',
      subtitle: 'Relentless iteration',
      description: 'Weekly: kill losers, scale winners, test new angles. Monthly: strategy review, budget reallocation. Quarterly: full architecture audit.',
      timeline: 'Ongoing',
    },
  ];
</script>

<section id="process" class="section-padding bg-ghost relative overflow-hidden">
  <div class="container-premium relative z-10">
    <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div use:reveal={{ x: -20 }} class="lg:sticky lg:top-28 space-y-6">
        <span class="eyebrow">The Procor Protocol</span>
        <h2 class="section-heading">
          No fluff.
          <br />
          <span class="text-gradient-blue">Just a clear</span>
          <br />
          sprint path.
        </h2>
        <p class="text-sm leading-relaxed text-muted">
          Every sprint ends with assets shipped, numbers reviewed, and the next bet placed. Surgical execution, clear milestones, measurable outcomes.
        </p>

        <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-5">
          <p class="text-xs font-semibold uppercase tracking-widest text-blue-dark mb-4">Core principles</p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-sm">
              <span class="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-xs font-medium text-white-pure">1</span>
              Problem-first, never deliverable-first
            </li>
            <li class="flex items-center gap-3 text-sm">
              <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue text-xs font-medium text-ink">2</span>
              Weekly decisions, not monthly reports
            </li>
            <li class="flex items-center gap-3 text-sm">
              <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald text-xs font-medium text-white-pure">3</span>
              Kill criteria on every experiment
            </li>
            <li class="flex items-center gap-3 text-sm">
              <span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal text-xs font-medium text-white-pure">4</span>
              You own all assets and data — always
            </li>
          </ul>
        </div>
      </div>

      <div class="space-y-5">
        {#each steps as step, index}
          <article
            use:reveal={{ x: 20, delay: index * 80 }}
            class="premium-card p-6 sm:p-7 group relative overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-500"
          >
            <div class="flex items-start gap-5">
              <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ink text-xl font-semibold tracking-tight text-blue">
                {step.num}
              </span>
              <div class="min-w-0">
                <div class="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 class="text-lg font-semibold tracking-tight">{step.title}</h3>
                  <span class="text-xs text-muted font-medium">/ {step.subtitle}</span>
                </div>
                <p class="text-sm text-muted leading-relaxed mb-3">{step.description}</p>
                <span class="inline-flex items-center gap-1.5 text-xs font-medium text-blue-dark">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {step.timeline}
                </span>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
