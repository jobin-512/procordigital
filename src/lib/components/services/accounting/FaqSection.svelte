<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const faqs = [
    { q: 'How much does accounting service cost?', a: 'Pricing depends on business size and complexity. Bookkeeping starts at $500/month, full-service accounting at $1,500/month, and CFO advisory at $3,000/month. We provide custom quotes after assessment.' },
    { q: 'Can you work with our existing accounting software?', a: 'Yes. We work with QuickBooks, Xero, FreshBooks, Wave, and most major platforms. If you\'re not on a platform, we\'ll recommend and set up the best one for your needs.' },
    { q: 'How quickly can you get our books in order?', a: 'Most cleanup projects are completed within 2-4 weeks depending on the state of your books. Current clients get monthly close within 48 hours of month-end.' },
    { q: 'Do you handle tax filing?', a: 'Yes. We handle quarterly estimated taxes, annual tax preparation, and filing for businesses and individuals. Our proactive tax planning typically saves clients $18K+ annually.' },
    { q: 'What industries do you specialize in?', a: 'We work across e-commerce, SaaS, professional services, healthcare, real estate, and more. Our systems adapt to any industry\'s unique accounting needs.' },
    { q: 'Do you provide CFO advisory services?', a: 'Yes. Our fractional CFO services include budgeting, forecasting, cash flow management, board reporting, and strategic financial guidance — at a fraction of a full-time CFO cost.' }
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
        Accounting
        <br />
        <span class="text-gradient-blue">questions answered.</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-xl">
        Financial questions, clear answers. Don't see yours? Reach out — we're transparent about everything.
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
