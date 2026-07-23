<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    { title: 'Regulatory Auditing', description: 'Comprehensive compliance audits across all applicable regulations. We find gaps before regulators do.' },
    { title: 'Risk Assessment', description: 'Identify, quantify, and prioritize compliance risks across your organization.' },
    { title: 'Policy Development', description: 'Clear, enforceable policies and procedures that meet regulatory requirements.' },
    { title: 'Employee Training', description: 'Comprehensive training programs that ensure your team understands and follows compliance rules.' },
    { title: 'Internal Audit Support', description: 'Expert guidance for internal audits. We help you prepare, execute, and remediate findings.' },
    { title: 'Compliance Dashboards', description: 'Real-time monitoring of compliance status across all regulations and requirements.' },
    { title: 'GDPR & Data Privacy', description: 'Full GDPR, CCPA, and data privacy compliance including consent management and data mapping.' },
    { title: 'Incident Response', description: 'Prepared response plans for data breaches, compliance violations, and regulatory inquiries.' }
  ];
</script>

<section id="features" class="section-padding bg-ghost relative overflow-hidden" aria-labelledby="features-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-emerald/3 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">Features</span>
      <h2 id="features-heading" class="mt-6 section-heading max-w-3xl animate-text-reveal">
        Full compliance
        <br />
        <span class="text-gradient-emerald">coverage.</span>
      </h2>
      <p class="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        From auditing to training, we cover every aspect of regulatory compliance.
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {#each features as feature, i}
        <article use:reveal={{ y: 24, delay: i * 60 }} class="premium-card p-6 sm:p-7 group relative overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-500">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-xs font-semibold tracking-tight text-emerald mb-4 group-hover:bg-emerald group-hover:text-white transition-colors duration-300">{feature.title.slice(0, 2)}</span>
          <h3 class="text-base font-semibold tracking-tight mb-2">{feature.title}</h3>
          <p class="text-sm text-muted leading-relaxed">{feature.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
