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

<section id="compliance" class="relative section-padding-lg overflow-hidden" aria-labelledby="compliance-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue/3 via-transparent to-ink/3 pointer-events-none"></div>
  <div class="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue/5 to-emerald/5 rounded-full blur-3xl pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
      <div use:reveal={{ x: -20 }} class="order-2 lg:order-1 premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 sm:p-8">
        <div class="flex items-center gap-3 mb-5 pb-4 border-b border-black/5">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue text-ink text-sm font-semibold">C</span>
          <span class="font-semibold uppercase text-xs tracking-widest text-muted">Compliance toolkit</span>
        </div>

        <ul class="space-y-3" role="list">
          {#each features as feature, i}
            <li class="flex items-center gap-3 text-sm font-medium text-muted" use:reveal={{ y: 8, delay: 180 + i * 60 }}>
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-blue flex items-center justify-center text-ink text-[9px] font-bold">✓</span>
              {feature}
            </li>
          {/each}
        </ul>

        <div class="mt-6 pt-5 border-t border-black/5">
          <a href="/services/compliance" class="btn-primary w-full justify-center text-sm">
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <div use:reveal={{ x: 20, delay: 150 }} class="order-1 lg:order-2">
        <span class="section-label-insane">Compliance</span>
        <h2 id="compliance-heading" class="mt-6 section-heading animate-text-reveal">
          Stay compliant.
          <br />
          <span class="text-gradient-blue">Stay protected.</span>
        </h2>
        <p class="mt-5 text-base leading-relaxed text-muted">
          Regulations change fast. We keep your business ahead of them. From GDPR to HIPAA, SOX to industry-specific mandates — we audit, document, and monitor so you never face a penalty.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          {#each stats as stat, i}
            <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg px-4 py-3" use:reveal={{ y: 12, delay: 200 + i * 80 }}>
              <p class="font-semibold text-2xl tracking-tight text-gradient-blue">{stat.value}</p>
              <p class="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">{stat.label}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
