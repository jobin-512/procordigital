<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import ImageSlot from '$lib/components/common/ImageSlot.svelte';
  import audit from "$lib/assets/home/4.webp";

  const auditChecks = [
    { category: 'TRACKING INFRASTRUCTURE', checks: [
      { label: 'GA4 + GTM + Server-side', status: 'PASS', score: 94 },
      { label: 'Enhanced ecommerce events', status: 'FAIL', score: 31 },
      { label: 'Cross-domain tracking', status: 'WARN', score: 67 },
      { label: 'Data layer governance', status: 'FAIL', score: 23 }
    ]},
    { category: 'CONVERSION ARCHITECTURE', checks: [
      { label: 'Landing page message match', status: 'FAIL', score: 41 },
      { label: 'Offer clarity & urgency', status: 'WARN', score: 58 },
      { label: 'Form friction audit', status: 'PASS', score: 82 },
      { label: 'Trust signal density', status: 'FAIL', score: 34 }
    ]},
    { category: 'ACQUISITION HEALTH', checks: [
      { label: 'Search impression share', status: 'WARN', score: 47 },
      { label: 'Ad account structure', status: 'FAIL', score: 29 },
      { label: 'Creative testing velocity', status: 'FAIL', score: 18 },
      { label: 'Audience signal quality', status: 'WARN', score: 52 }
    ]},
    { category: 'RETENTION & LTV', checks: [
      { label: 'Email/SMS automation coverage', status: 'FAIL', score: 12 },
      { label: 'Post-purchase sequences', status: 'FAIL', score: 8 },
      { label: 'Win-back campaigns', status: 'MISSING', score: 0 },
      { label: 'Referral/loyalty mechanics', status: 'MISSING', score: 0 }
    ]}
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'PASS': return 'bg-blueprint text-white';
      case 'WARN': return 'bg-accent text-ink';
      case 'FAIL': return 'bg-hot text-white';
      case 'MISSING': return 'bg-ink text-accent';
      default: return 'bg-paper text-ink';
    }
  };
</script>

<section id="audit" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="audit-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-hot/5 via-transparent to-lime/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
    <div use:reveal={{ x: -40 }} class="lg:sticky lg:top-28">
      <span class="section-label-insane">Free revenue leak scan</span>
      <h2 id="audit-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        We find the money
        <br />
        <span class="gradient-text-hot">you're leaving</span>
        <br />
        <span class="gradient-text-cyan">on the table.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        Before we sell you a single package, we run a 127-point diagnostic across tracking, conversion, acquisition, and retention. You get a prioritized hit list — not a PDF nobody reads.
      </p>
      <a class="brutal-button-insane mt-8 inline-flex" href="#contact">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M17 15v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6"/>
        </svg>
        Request my audit
      </a>

      <div class="mt-10 brutal-card-insane p-5 animate-scale-in" style="animation-delay: 400ms;">
        <p class="font-black uppercase text-xs tracking-widest mb-3 text-blueprint">AUDIT DELIVERABLES</p>
        <ul class="space-y-3 text-sm font-bold" role="list">
          <li class="flex items-center gap-3"><span class="w-6 h-6 border-3 border-ink bg-blueprint flex items-center justify-center text-xs text-white">1</span>127-point diagnostic report</li>
          <li class="flex items-center gap-3"><span class="w-6 h-6 border-3 border-ink bg-accent flex items-center justify-center text-xs text-ink">2</span>Prioritized sprint backlog</li>
          <li class="flex items-center gap-3"><span class="w-6 h-6 border-3 border-ink bg-cyan flex items-center justify-center text-xs text-ink">3</span>30/60/90-day revenue projection</li>
          <li class="flex items-center gap-3"><span class="w-6 h-6 border-3 border-ink bg-hot flex items-center justify-center text-xs text-white">4</span>Competitive gap analysis</li>
          <li class="flex items-center gap-3"><span class="w-6 h-6 border-3 border-ink bg-lime flex items-center justify-center text-xs text-ink">5</span>Creative & offer teardown</li>
        </ul>
      </div>
    </div>

    <div class="grid gap-6">
      <div use:reveal={{ x: 40, delay: 120 }} class="brutal-card-insane bg-white p-5 sm:p-7">
        <div class="mb-5 flex items-center justify-between gap-4 border-4 border-ink bg-blue-pale p-4 relative overflow-hidden">
          <div class="relative z-10 flex items-center gap-3">
            <div class="w-10 h-10 border-3 border-ink bg-blueprint flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <p class="font-black uppercase text-sm">PROCOR LEAK SCANNER v3.7</p>
          </div>
          <span class="relative z-10 border-3 border-ink bg-accent px-3 py-1 font-black text-xs animate-pulse-subtle">LIVE SCAN</span>
          <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(7,17,31,0.02),rgba(7,17,31,0.02)_1px,transparent_1px,transparent_2px)] pointer-events-none"></div>
        </div>

        <div class="grid gap-4">
          {#each auditChecks as category, catIndex}
            <div class="border-4 border-ink bg-paper p-4" use:reveal={{ y: 18, delay: 160 + catIndex * 120 }}>
              <div class="mb-3 flex items-center justify-between">
                <h3 class="font-black uppercase text-xs tracking-widest text-blueprint">{category.category}</h3>
                <span class="font-mono text-xs font-bold text-ink/50">{category.checks.filter(c => c.status === 'PASS').length}/{category.checks.length} PASS</span>
              </div>
              <div class="grid gap-3 sm:grid-cols-2">
                {#each category.checks as check, checkIndex}
                  <div class="border-3 border-ink bg-white p-3 relative group overflow-hidden" use:reveal={{ y: 12, delay: 180 + catIndex * 120 + checkIndex * 40 }}>
                    <div class="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-{check.status === 'PASS' ? 'blueprint' : check.status === 'WARN' ? 'accent' : check.status === 'FAIL' ? 'hot' : 'ink'}/30 to-transparent"></div>
                    <div class="flex items-start justify-between gap-2">
                      <span class="text-xs font-bold uppercase leading-snug pr-2 flex-1">{check.label}</span>
                      <span class="flex-shrink-0 {getStatusClass(check.status)} px-2.5 py-0.5 text-[10px] font-black uppercase rounded-none shadow-[2px_2px_0_#07111f]">{check.status}</span>
                    </div>
                    <div class="mt-2 h-3 border-3 border-ink bg-void relative overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-{check.status === 'PASS' ? 'blueprint' : check.status === 'WARN' ? 'accent' : check.status === 'FAIL' ? 'hot' : 'ink'} to-{check.status === 'PASS' ? 'cyan' : check.status === 'WARN' ? 'lime' : check.status === 'FAIL' ? 'accent' : 'hot'} animate-meter-pulse" style="width: {check.score}%"></div>
                      <span class="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[10px] font-bold text-white drop-shadow-[1px_1px_0_#000]">{check.score}%</span>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>

        <div class="mt-5 p-4 border-4 border-ink bg-gradient-to-r from-blueprint via-cyan to-accent rounded-none shadow-[5px_5px_0_#07111f] animate-bounce-in" style="animation-delay: 800ms;">
          <p class="font-black uppercase text-xs text-white/80 mb-1">OVERALL FUNNEL HEALTH INDEX</p>
          <p class="font-display text-4xl tracking-[-0.08em] text-white">34%</p>
          <p class="text-sm font-bold text-white/90 mt-1">TARGET: 75%+ • CRITICAL GAP: 41 POINTS</p>
        </div>
      </div>

      <div use:reveal={{ x: 40, delay: 220 }}>
        <ImageSlot
          variant="dark"
          title={audit}
          description="Real audit dashboard showing funnel health scores across tracking, conversion, acquisition, and retention pillars."
        />
      </div>
    </div>
  </div>
</section>