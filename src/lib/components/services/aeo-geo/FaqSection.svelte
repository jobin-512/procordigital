<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const faqs = [
    { q: 'What is AEO and GEO?', a: 'AEO (Answer Engine Optimization) structures content to be selected as the definitive answer by AI chatbots. GEO (Generative Engine Optimization) targets Google AI Overviews, Bing Chat, and Perplexity to appear in AI-generated search results.' },
    { q: 'How is this different from traditional SEO?', a: 'Traditional SEO targets blue links. AEO/GEO targets AI-generated answers. The optimization focuses on entity signals, structured data, content formatting for machine comprehension, and authority building for AI trust signals.' },
    { q: 'Which AI platforms do you optimize for?', a: 'We optimize for Google AI Overviews, ChatGPT Search, Perplexity, Bing Chat, Claude, Gemini, and voice assistants like Siri and Alexa. The strategy covers all major AI search surfaces.' },
    { q: 'How long before I see results?', a: 'Initial AI citation improvements appear within 2-4 weeks. Significant visibility gains typically occur within 60-90 days. Full AI search dominance develops over 6-12 months as authority compounds.' },
    { q: 'Do I need to change my existing content?', a: 'We restructure and optimize your existing content for AI comprehension. This includes formatting changes, schema markup, entity signals, and authority markers — not a complete rewrite.' },
    { q: 'Is AEO/GEO replacing SEO?', a: 'No — they complement each other. AEO/GEO layers on top of traditional SEO. You still need technical SEO, content quality, and authority building. AEO/GEO adds the AI-specific optimization layer.' }
  ];

  let openIndex = $state<number | null>(null);

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="faq" class="relative section-padding-lg noise-overlay grid-pattern-tight" aria-labelledby="faq-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent pointer-events-none"></div>

  <div class="container-brutal relative z-10 faq-grid">
    <div use:reveal={{ x: -40 }}>
      <span class="section-label-insane">FAQ</span>
      <h2 id="faq-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        AI search
        <br />
        <span class="gradient-text-cyan">questions answered.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        The AI search landscape is new. Here's what you need to know to stay ahead.
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
