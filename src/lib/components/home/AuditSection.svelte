<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const deliverables = [
    '127-point diagnostic report',
    'Prioritized sprint backlog',
    '30/60/90-day revenue projection',
    'Competitive gap analysis',
    'Creative and offer teardown',
  ];
</script>

<section id="audit" class="section-padding bg-white relative overflow-hidden" aria-labelledby="audit-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue/5 to-transparent rounded-full blur-[100px] pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
    <div use:reveal={{ x: -20 }}>
      <span class="eyebrow">Free revenue leak scan</span>
      <h2 id="audit-heading" class="section-heading mt-5">
        Find the money
        <br />
        <span class="text-gradient-blue">you're leaving</span>
        <br />
        on the table.
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-lg">
        Before we sell you a single package, we run a 127-point diagnostic across tracking, conversion, acquisition, and retention. You get a prioritized hit list.
      </p>
      <a href="/contact" class="btn-primary mt-8 inline-flex">
        Request my audit
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>

      <div class="mt-10 premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6">
        <p class="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Audit deliverables</p>
        <ul class="space-y-3">
          {#each deliverables as item, i}
            <li class="flex items-center gap-3 text-sm">
              <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue/10 text-xs font-semibold text-blue-dark">{i + 1}</span>
              {item}
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div use:reveal={{ x: 20, delay: 120 }}>
      <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden">
        <div class="bg-ink p-6 sm:p-8 text-white-pure">
          <div class="flex items-center justify-between gap-4 mb-6">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <p class="text-sm font-medium">Procor Leak Scanner</p>
            </div>
            <span class="rounded-full bg-blue/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue">Live scan</span>
          </div>

          <div class="rounded-xl border border-border bg-surface p-5">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-medium uppercase tracking-wider text-muted">Funnel Health Index</span>
              <span class="text-3xl font-semibold tracking-tight text-blue">34%</span>
            </div>
            <div class="h-2 rounded-full bg-surface-elevated overflow-hidden">
              <div class="h-full rounded-full bg-gradient-to-r from-blue-dark to-blue transition-all duration-1000" style="width: 34%"></div>
            </div>
            <p class="mt-2 text-xs text-muted">Target: 75%+ • Critical gap: 41 points</p>
          </div>

          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <div class="rounded-xl border border-border bg-surface p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-muted">Tracking</span>
                <span class="text-xs font-semibold text-blue-light">54%</span>
              </div>
              <div class="h-1.5 rounded-full bg-surface-elevated">
                <div class="h-full rounded-full bg-gradient-to-r from-blue-dark to-blue" style="width: 54%"></div>
              </div>
            </div>
            <div class="rounded-xl border border-border bg-surface p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-muted">Conversion</span>
                <span class="text-xs font-semibold text-blue-light">41%</span>
              </div>
              <div class="h-1.5 rounded-full bg-surface-elevated">
                <div class="h-full rounded-full bg-gradient-to-r from-blue-dark to-blue" style="width: 41%"></div>
              </div>
            </div>
            <div class="rounded-xl border border-border bg-surface p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-muted">Acquisition</span>
                <span class="text-xs font-semibold text-blue-light">29%</span>
              </div>
              <div class="h-1.5 rounded-full bg-surface-elevated">
                <div class="h-full rounded-full bg-gradient-to-r from-blue-dark to-blue" style="width: 29%"></div>
              </div>
            </div>
            <div class="rounded-xl border border-border bg-surface p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-muted">Retention</span>
                <span class="text-xs font-semibold text-blue-light">8%</span>
              </div>
              <div class="h-1.5 rounded-full bg-surface-elevated">
                <div class="h-full rounded-full bg-gradient-to-r from-blue-dark to-blue" style="width: 8%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
