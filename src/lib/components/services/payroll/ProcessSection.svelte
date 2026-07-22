<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const steps = [
    { num: '01', title: 'Assessment & Setup', description: 'We audit your current payroll process, identify inefficiencies, and design the optimal system.', deliverables: ['Current state audit', 'System design', 'Employee data migration', 'Integration mapping'], color: 'lime' },
    { num: '02', title: 'Configuration & Testing', description: 'Set up tax tables, deduction rules, direct deposit, and employee portal. Rigorous testing before go-live.', deliverables: ['Tax configuration', 'Deduction rules', 'Portal setup', 'Test runs'], color: 'blueprint' },
    { num: '03', title: 'Training & Onboarding', description: 'Train your team on the new system. HR and finance teams become confident power users.', deliverables: ['Admin training', 'Employee onboarding', 'Documentation', 'Support playbook'], color: 'cyan' },
    { num: '04', title: 'Go-Live & Monitoring', description: 'Seamless transition to the new system. We monitor the first few payrolls to ensure accuracy.', deliverables: ['Go-live support', 'Accuracy monitoring', 'Issue resolution', 'Performance tracking'], color: 'hot' },
    { num: '05', title: 'Ongoing Management', description: 'Continuous payroll management, tax filing, compliance updates, and system optimization.', deliverables: ['Monthly processing', 'Tax filing', 'Compliance updates', 'System optimization'], color: 'accent' }
  ];
</script>

<section id="process" class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="process-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-lime/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10 process-grid">
    <div use:reveal={{ x: -40 }} class="lg:sticky lg:top-28">
      <span class="section-label-insane">Our Process</span>
      <h2 id="process-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        From chaos to
        <br />
        <span class="gradient-text-lime">automated.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        A proven process that transforms messy payroll into a smooth, automated operation.
      </p>
      <a class="brutal-button-insane mt-8 inline-flex" href="#contact">
        Automate payroll
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
