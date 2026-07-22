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

<section id="faq" class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="faq-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue-pop/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10 faq-grid">
    <div use:reveal={{ x: -40 }}>
      <span class="section-label-insane">FAQ</span>
      <h2 id="faq-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        Accounting
        <br />
        <span class="gradient-text-blueprint">questions answered.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        Financial questions, clear answers.
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
