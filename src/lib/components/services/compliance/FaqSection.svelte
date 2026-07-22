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

<section id="faq" class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="faq-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10 faq-grid">
    <div use:reveal={{ x: -40 }}>
      <span class="section-label-insane">FAQ</span>
      <h2 id="faq-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        Compliance
        <br />
        <span class="gradient-text-accent">questions answered.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        Compliance is complex. We make it clear and manageable.
      </p>
    </div>

    <div class="grid gap-3 sm:gap-4">
      {#each faqs as faq, i}
        <div use:reveal={{ x: 30, delay: i * 80 }} class="brutal-card-insane bg-white overflow-hidden">
          <button
            class="w-full px-4 py-4 sm:px-6 sm:py-5 text-left font-black uppercase text-sm tracking-wide flex items-center justify-between gap-4 hover:bg-blue-pale transition-colors"
            onclick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span>{faq.q}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 transition-transform duration-200" class:rotate-180={openIndex === i}>
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          {#if openIndex === i}
            <div class="px-4 pb-4 sm:px-6 sm:pb-5 text-sm font-bold leading-snug text-ink/70 border-t-3 border-ink pt-4 animate-slide-down">
              {faq.a}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
