<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    'Regulatory compliance auditing',
    'Risk assessment & mitigation',
    'Policy development & documentation',
    'Employee training & certification',
    'Internal audit support',
    'Compliance monitoring dashboards',
    'Industry-specific compliance (GDPR, HIPAA, SOX)',
    'Incident response planning'
  ];

  const stats = [
    { label: 'Audit pass rate', value: '100%' },
    { label: 'Risk reduction', value: '-78%' },
    { label: 'Compliance gaps found', value: 'Avg 23' }
  ];
</script>

<section id="compliance" class="relative py-16 lg:py-24 noise-overlay grid-pattern-tight overflow-hidden" aria-labelledby="compliance-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-hot/5 pointer-events-none"></div>
  <div class="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-r from-accent/8 to-hot/8 rounded-full blur-3xl pointer-events-none"></div>

  <div class="container-brutal relative z-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
    <div use:reveal={{ x: -40 }} class="order-2 lg:order-1 brutal-card-insane bg-white p-6 sm:p-8">
      <div class="mb-5 flex items-center gap-3 border-4 border-ink bg-accent p-4">
        <span class="text-3xl">📋</span>
        <span class="font-black uppercase text-sm text-ink">Compliance toolkit</span>
      </div>

      <ul class="space-y-3" role="list">
        {#each features as feature, i}
          <li class="flex items-center gap-3 text-sm font-bold text-ink/80" use:reveal={{ y: 12, delay: 180 + i * 60 }}>
            <span class="w-6 h-6 border-3 border-ink bg-accent flex items-center justify-center text-xs text-ink flex-shrink-0">✓</span>
            {feature}
          </li>
        {/each}
      </ul>

      <div class="mt-6 pt-5 border-t-4 border-ink">
        <a href="/services/compliance" class="brutal-button-insane w-full justify-center">
          Learn more
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>

    <div use:reveal={{ x: 40, delay: 150 }} class="order-1 lg:order-2">
      <span class="section-label-insane">Compliance</span>
      <h2 id="compliance-heading" class="mt-6 font-display text-5xl lg:text-7xl tracking-[-0.08em] leading-[0.9] max-w-xl animate-text-reveal">
        Stay compliant.
        <br />
        <span class="gradient-text-accent">Stay protected.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        Regulations change fast. We keep your business ahead of them. From GDPR to HIPAA, SOX to industry-specific mandates — we audit, document, and monitor so you never face a penalty.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        {#each stats as stat, i}
          <div class="border-4 border-ink bg-white px-5 py-3 shadow-[4px_4px_0_#07111f]" use:reveal={{ y: 20, delay: 200 + i * 100 }}>
            <p class="font-display text-3xl tracking-[-0.08em] text-ink">{stat.value}</p>
            <p class="mt-1 font-black uppercase text-[10px] tracking-widest text-ink/50">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
