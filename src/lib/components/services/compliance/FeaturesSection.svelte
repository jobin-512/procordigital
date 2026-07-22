<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Regulatory Auditing', description: 'Comprehensive compliance audits across all applicable regulations. We find gaps before regulators do.', icon: '🔍', color: 'accent' },
    { title: 'Risk Assessment', description: 'Identify, quantify, and prioritize compliance risks across your organization.', icon: '⚠️', color: 'hot' },
    { title: 'Policy Development', description: 'Clear, enforceable policies and procedures that meet regulatory requirements.', icon: '📝', color: 'blueprint' },
    { title: 'Employee Training', description: 'Comprehensive training programs that ensure your team understands and follows compliance rules.', icon: '🎓', color: 'cyan' },
    { title: 'Internal Audit Support', description: 'Expert guidance for internal audits. We help you prepare, execute, and remediate findings.', icon: '📋', color: 'lime' },
    { title: 'Compliance Dashboards', description: 'Real-time monitoring of compliance status across all regulations and requirements.', icon: '📊', color: 'blue-pop' },
    { title: 'GDPR & Data Privacy', description: 'Full GDPR, CCPA, and data privacy compliance including consent management and data mapping.', icon: '🛡️', color: 'accent' },
    { title: 'Incident Response', description: 'Prepared response plans for data breaches, compliance violations, and regulatory inquiries.', icon: '🚨', color: 'hot' }
  ];
</script>

<section id="features" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 section-heading max-w-3xl animate-text-reveal">
        Full compliance
        <br />
        <span class="gradient-text-accent">coverage.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-lg font-bold leading-snug text-ink/70">
        From auditing to training, we cover every aspect of regulatory compliance.
      </p>
    </div>

    <div class="feature-grid">
      {#each features as feature, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-4 sm:p-5 relative overflow-hidden group">
          <div class="absolute -top-3 -right-3 size-16 border-4 border-ink bg-{feature.color} rotate-6 opacity-15 group-hover:opacity-30 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <span class="text-3xl block mb-3">{feature.icon}</span>
          <h3 class="font-display text-xl tracking-[-0.06em] text-{feature.color} mb-2">{feature.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
