<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const faqs = [
    { q: 'Native or cross-platform?', a: 'Depends on your needs. Native (Swift/Kotlin) is best for performance-critical apps. Cross-platform (React Native/Flutter) saves time and cost while delivering near-native quality. We help you choose the right approach.' },
    { q: 'How much does a mobile app cost?', a: 'Simple apps start at $15,000-$25,000. Complex apps with custom features, APIs, and admin panels range from $30,000-$80,000+. We provide detailed estimates after discovery.' },
    { q: 'How long does it take to build?', a: 'Simple apps: 8-10 weeks. Medium complexity: 10-14 weeks. Complex apps: 14-20 weeks. We provide a detailed timeline during the strategy phase.' },
    { q: 'Do you handle App Store submission?', a: 'Yes. We handle the entire submission process for both Apple App Store and Google Play Store, including ASO optimization, screenshots, descriptions, and compliance requirements.' },
    { q: 'What about ongoing maintenance?', a: 'We offer maintenance plans that include OS compatibility updates, bug fixes, security patches, and feature additions. Apps need regular updates to stay current with platform changes.' },
    { q: 'Can you work with our existing backend?', a: 'Absolutely. We integrate with existing APIs, databases, and backend services. We can also build new backends if needed.' }
  ];

  let openIndex = $state<number | null>(null);

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="faq" class="relative section-padding-lg" aria-labelledby="faq-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-emerald/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
      <div use:reveal={{ x: -40 }}>
        <span class="section-label-insane">FAQ</span>
        <h2 id="faq-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
          App questions
          <br />
          <span class="text-gradient-emerald">answered.</span>
        </h2>
        <p class="mt-5 max-w-xl text-base leading-relaxed text-muted">
          Building an app is a big decision. Here is what you need to know.
        </p>
      </div>

      <div class="grid gap-3 sm:gap-4">
        {#each faqs as faq, i}
          <div use:reveal={{ x: 30, delay: i * 80 }} class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden">
            <button
              class="w-full px-5 py-4 sm:px-6 sm:py-5 text-left font-semibold text-sm flex items-center justify-between gap-4 hover:bg-ghost transition-colors"
              onclick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span>{faq.q}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 transition-transform duration-200 text-muted" class:rotate-180={openIndex === i}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            {#if openIndex === i}
              <div class="px-5 pb-5 sm:px-6 sm:pb-6 text-sm leading-relaxed text-muted border-t border-border pt-4 animate-fade-up">
                {faq.a}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
