<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const steps = [
    { num: '01', title: 'Compliance Audit', description: 'Deep-dive audit of your current compliance posture. We map regulations, identify gaps, and assess risk.', deliverables: ['Regulation mapping', 'Gap analysis', 'Risk assessment', 'Compliance score'], color: 'accent' },
    { num: '02', title: 'Strategy & Roadmap', description: 'Build a prioritized remediation roadmap. Critical gaps first, then systematic improvement.', deliverables: ['Remediation plan', 'Priority matrix', 'Timeline & budget', 'Resource allocation'], color: 'hot' },
    { num: '03', title: 'Policy & Documentation', description: 'Develop or update policies, procedures, and documentation to meet regulatory requirements.', deliverables: ['Policy documents', 'Procedure manuals', 'Training materials', 'Record templates'], color: 'blueprint' },
    { num: '04', title: 'Training & Implementation', description: 'Train your team on compliance requirements and new procedures. Build a compliance culture.', deliverables: ['Employee training', 'Manager workshops', 'Certification tracking', 'Compliance portal'], color: 'cyan' },
    { num: '05', title: 'Monitor & Maintain', description: 'Ongoing monitoring, periodic audits, and updates as regulations change. Stay compliant forever.', deliverables: ['Continuous monitoring', 'Quarterly reviews', 'Regulatory updates', 'Incident response'], color: 'lime' }
  ];
</script>

<section id="process" class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="process-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-hot/5 via-transparent to-accent/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10 process-grid">
    <div use:reveal={{ x: -40 }} class="lg:sticky lg:top-28">
      <span class="section-label-insane">Our Process</span>
      <h2 id="process-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        From risk to
        <br />
        <span class="gradient-text-accent">resilience.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        A proven process that transforms compliance risk into competitive advantage.
      </p>
      <a class="brutal-button-insane mt-8 inline-flex" href="#contact">
        Get compliant
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <div class="process-steps">
      {#each steps as step, i}
        <div use:reveal={{ x: 40, delay: i * 120 }} class="step-card">
          <div class="absolute -top-4 -right-4 size-20 border-4 border-ink bg-{step.color} rotate-12 opacity-10 group-hover:opacity-25 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <div class="step-card-inner">
            <span class="step-number text-{step.color} opacity-30">{step.num}</span>
            <div class="flex-1 min-w-0">
              <h3 class="font-display text-2xl tracking-[-0.06em]">{step.title}</h3>
              <p class="mt-2 text-sm font-bold leading-snug text-ink/70">{step.description}</p>
              <ul class="mt-3 deliverables-grid" role="list">
                {#each step.deliverables as d}
                  <li class="flex items-center gap-2 text-xs font-bold text-ink/60">
                    <span class="w-4 h-4 border-2 border-ink bg-{step.color} flex items-center justify-center text-[8px] flex-shrink-0">✓</span>
                    {d}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
