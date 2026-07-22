<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const faqs = [
    { q: 'How much does payroll automation cost?', a: 'Pricing depends on employee count and complexity. Most businesses pay $5-15 per employee per month. The ROI from time savings and penalty avoidance typically covers the cost within the first month.' },
    { q: 'How long does implementation take?', a: 'Simple payroll setups: 1-2 weeks. Complex multi-state setups: 2-4 weeks. We handle data migration, configuration, testing, and training to ensure a smooth transition.' },
    { q: 'Do you handle tax filing?', a: 'Yes. We handle all federal, state, and local tax filings, including quarterly returns, annual W-2s/1099s, and new hire reporting. You never touch a tax form again.' },
    { q: 'Can employees access their own data?', a: 'Absolutely. Employees get a self-service portal where they can view pay stubs, W-2s, benefits info, and update personal information. It reduces HR inquiries by 70%.' },
    { q: 'What if we have employees in multiple states?', a: 'Our system handles multi-state payroll seamlessly. We manage different tax rates, regulations, and compliance requirements for each state your employees work in.' },
    { q: 'Is my data secure?', a: 'Bank-level encryption, SOC 2 compliance, and strict access controls protect your payroll data. We never store sensitive information in unsecured locations.' }
  ];

  let openIndex = $state<number | null>(null);

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="faq" class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="faq-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-lime/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10 faq-grid">
    <div use:reveal={{ x: -40 }}>
      <span class="section-label-insane">FAQ</span>
      <h2 id="faq-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        Payroll questions
        <br />
        <span class="gradient-text-lime">answered.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        Payroll can be complex. We make it simple.
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
