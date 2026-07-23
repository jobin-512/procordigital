<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const steps = [
    { num: '01', title: 'Compliance Audit', deliverables: ['Regulation mapping', 'Gap analysis', 'Risk assessment', 'Compliance score'] },
    { num: '02', title: 'Strategy & Roadmap', deliverables: ['Remediation plan', 'Priority matrix', 'Timeline & budget', 'Resource allocation'] },
    { num: '03', title: 'Policy & Documentation', deliverables: ['Policy documents', 'Procedure manuals', 'Training materials', 'Record templates'] },
    { num: '04', title: 'Training & Implementation', deliverables: ['Employee training', 'Manager workshops', 'Certification tracking', 'Compliance portal'] },
    { num: '05', title: 'Monitor & Maintain', deliverables: ['Continuous monitoring', 'Quarterly reviews', 'Regulatory updates', 'Incident response'] }
  ];
</script>

<section id="process" class="section-padding bg-ghost relative overflow-hidden" aria-labelledby="process-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-emerald/3 via-transparent to-ink/3 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div use:reveal={{ x: -20 }} class="lg:sticky lg:top-28 space-y-6">
        <span class="section-label-insane">Our Process</span>
        <h2 id="process-heading" class="section-heading animate-text-reveal">
          From risk to
          <br />
          <span class="text-gradient-blue">resilience.</span>
        </h2>
        <p class="text-base leading-relaxed text-muted">
          A proven process that transforms compliance risk into competitive advantage.
        </p>
        <a class="btn-primary inline-flex" href="#contact">
          Get compliant
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div class="space-y-5">
        {#each steps as step, i}
          <article use:reveal={{ x: 20, delay: i * 100 }} class="premium-card p-6 sm:p-7 group relative overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-500">
            <div class="flex items-start gap-5">
              <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ink text-xl font-semibold tracking-tight text-blue">{step.num}</span>
              <div class="min-w-0">
                <h3 class="text-lg font-semibold tracking-tight mb-1">{step.title}</h3>
                <p class="text-sm text-muted leading-relaxed mb-4">Complete {step.title.toLowerCase()} to ensure full regulatory alignment.</p>
                <ul class="flex flex-wrap gap-x-4 gap-y-2" role="list">
                  {#each step.deliverables as d}
                    <li class="flex items-center gap-2 text-xs font-medium text-muted">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-emerald">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {d}
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
