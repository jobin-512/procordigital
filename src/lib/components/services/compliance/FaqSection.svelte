<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const faqs = [
    { q: 'Which regulations do you cover?', a: 'We cover GDPR, CCPA, HIPAA, SOX, PCI-DSS, ISO 27001, SOC 2, and industry-specific regulations. We stay current with all major compliance frameworks across industries.' },
    { q: 'How do you stay updated on regulation changes?', a: 'We have dedicated compliance analysts who monitor regulatory updates daily. When regulations change, we assess the impact on your business and implement necessary adjustments proactively.' },
    { q: 'What industries do you specialize in?', a: 'We work across healthcare (HIPAA), finance (SOX, PCI-DSS), technology (SOC 2, ISO 27001), and any industry with data privacy requirements (GDPR, CCPA).' },
    { q: 'How long does a compliance audit take?', a: 'Initial audits typically take 2-4 weeks depending on organization size and complexity. Remediation timelines vary based on gap severity, but most clients achieve full compliance within 60-90 days.' },
    { q: 'Do you provide ongoing compliance management?', a: 'Yes. We offer continuous compliance monitoring, periodic audits, regulatory update management, and incident response support. You stay compliant as regulations evolve.' },
    { q: 'What happens if we fail an audit?', a: 'We prepare you so thoroughly that audit failures are extremely rare. If issues arise, we provide immediate remediation support and work directly with auditors to resolve findings.' }
  ];

  let openIndex = $state<number | null>(null);

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="faq" class="section-padding relative overflow-hidden" aria-labelledby="faq-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue/3 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-premium container-narrow relative z-10">
    <div use:reveal class="mb-12 lg:mb-16">
      <span class="section-label-insane">FAQ</span>
      <h2 id="faq-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        Compliance
        <br />
        <span class="text-gradient-blue">questions answered.</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-xl">
        Compliance is complex. We make it clear and manageable.
      </p>
    </div>

    <div class="space-y-3">
      {#each faqs as faq, i}
        <div use:reveal={{ y: 12, delay: i * 60 }} class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden">
          <button
            class="w-full px-6 py-5 text-left text-sm font-medium flex items-center justify-between gap-4 hover:bg-blue/5 transition-colors"
            onclick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span>{faq.q}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="shrink-0 transition-transform duration-300"
              class:rotate-180={openIndex === i}
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          {#if openIndex === i}
            <div class="px-6 pb-6">
              <div class="divider mb-4"></div>
              <p class="text-sm text-muted leading-relaxed">{faq.a}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
