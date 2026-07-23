<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const faqs = [
    { q: 'How long does it take to build a website?', a: 'Most projects launch in 4-8 weeks depending on scope. A simple landing page can be done in 2 weeks. A complex e-commerce site with custom features may take 8-12 weeks.' },
    { q: 'What technologies do you use?', a: 'We choose the right stack for each project: SvelteKit, Next.js, or Astro for frontend; WordPress, Sanity, or Strapi for CMS; Shopify or custom solutions for e-commerce. No one-size-fits-all.' },
    { q: 'Do you handle hosting and maintenance?', a: 'Yes. We offer managed hosting on Vercel, Netlify, or AWS with 99.9% uptime SLA. Our maintenance plans include monitoring, security patches, content updates, and performance optimization.' },
    { q: 'Will my website be mobile-friendly?', a: 'Absolutely. Every site we build is mobile-first and responsive. We test across 20+ devices and browsers before launch to ensure a flawless experience everywhere.' },
    { q: 'Can you redesign my existing website?', a: 'Yes. We typically start with a UX audit of your current site, identify conversion bottlenecks, then redesign with improved architecture, visuals, and performance.' },
    { q: 'How much does a website cost?', a: 'Projects start at $5,000 for a focused landing page, $15,000-$30,000 for a full business website, and $30,000+ for complex e-commerce or custom applications. We provide detailed quotes after discovery.' }
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
        Questions?
        <br />
        <span class="text-gradient-blue">Answered.</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-xl">
        Everything you need to know about working with us. Don't see your question? Reach out — we're transparent about everything.
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
