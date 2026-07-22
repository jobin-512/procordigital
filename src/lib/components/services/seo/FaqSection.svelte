<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const faqs = [
    { q: 'How long does SEO take to show results?', a: 'Technical improvements show within 2-4 weeks. Content and authority gains typically take 3-6 months. Significant organic growth compounds over 6-12 months. SEO is a long-term investment, not a quick fix.' },
    { q: 'What makes your SEO different?', a: 'We build systems, not tasks. Everything is interconnected: technical foundation, content engine, authority loops, and analytics. Most agencies do isolated activities. We build an organic growth machine.' },
    { q: 'Do you guarantee rankings?', a: 'No ethical SEO agency can guarantee specific rankings. What we guarantee is a transparent process, data-driven decisions, and measurable progress. Our track record shows consistent, significant organic growth.' },
    { q: 'How do you report on SEO performance?', a: 'Monthly dashboards with rankings, traffic, conversions, and ROI. No vanity metrics. You see exactly what moved, why, and what we\'re doing next. Weekly check-ins available for active campaigns.' },
    { q: 'What industries do you specialize in?', a: 'We work across B2B, SaaS, e-commerce, professional services, healthcare, and more. Our systems are adaptable to any industry where organic search matters for growth.' },
    { q: 'Can you work with our existing team?', a: 'Absolutely. We often work alongside in-house marketing teams, providing SEO expertise and execution. We can be your full SEO department or an extension of your existing team.' }
  ];

  let openIndex = $state<number | null>(null);

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="faq" class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="faq-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blueprint/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10 faq-grid">
    <div use:reveal={{ x: -40 }}>
      <span class="section-label-insane">FAQ</span>
      <h2 id="faq-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        SEO questions
        <br />
        <span class="gradient-text-cyan">answered.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        SEO can be confusing. We're here to make it clear.
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
