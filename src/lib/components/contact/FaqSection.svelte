<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const faqs = [
    { q: 'How fast can you start?', a: 'Usually within 5 business days. We move fast because your competition isn\'t waiting. Most projects kick off in week 1.' },
    { q: 'Do you work with small businesses?', a: 'Absolutely. Packages start at $5k. If you\'re serious about growth, we\'re serious about you.' },
    { q: 'What makes you different from other agencies?', a: 'We don\'t do vanity metrics. We don\'t ghost. Every sprint ships revenue assets. Month-to-month, no lock-in, full ownership.' },
    { q: 'Do you offer ongoing retainers?', a: 'Yes. Monthly sprints, ongoing optimization, dedicated Slack. Think of us as your fractional growth team.' },
  ];

  let openIndex = $state<number | null>(null);
</script>

<section id="faq" class="section-padding bg-white relative overflow-hidden" aria-labelledby="contact-faq-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-blue/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
      <div use:reveal>
        <span class="eyebrow">FAQ</span>
        <h2 id="contact-faq-heading" class="section-heading mt-5">
          Got <span class="text-gradient-blue">questions?</span>
        </h2>
        <p class="mt-4 max-w-sm text-base leading-relaxed text-muted">
          We've got answers. If you don't see what you're looking for, just reach out.
        </p>
      </div>

      <div class="space-y-3">
        {#each faqs as faq, i}
          <div use:reveal={{ y: 12, delay: i * 60 }} class="premium-card overflow-hidden">
            <button
              onclick={() => openIndex = openIndex === i ? null : i}
              class="w-full px-6 py-5 text-left text-sm font-medium flex items-center justify-between gap-4 hover:bg-blue/5 transition-colors"
              aria-expanded={openIndex === i}
            >
              <span class="flex items-center gap-3">
                <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue/10 text-xs font-semibold text-blue-dark">{i + 1}</span>
                {faq.q}
              </span>
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                class="shrink-0 text-muted transition-transform duration-300"
                class:rotate-180={openIndex === i}
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            {#if openIndex === i}
              <div class="px-6 pb-5 pt-0">
                <div class="h-px bg-border mb-4"></div>
                <p class="text-sm text-muted leading-relaxed">{faq.a}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
