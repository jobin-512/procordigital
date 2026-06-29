<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  const faqs = [
    ['Can you work with our existing website?', 'Yes. We can audit and improve your current stack, or rebuild pages when the foundation is slowing growth.'],
    ['Do packages include ad spend?', 'No. Package prices cover strategy, setup, creative direction, buildout and optimization. Media spend is billed directly by ad platforms.'],
    ['How fast can we launch?', 'Starter projects can begin producing assets in 1–2 weeks. Larger growth systems usually launch in structured 30-day sprints.'],
    ['What industries do you support?', 'Service businesses, SaaS, ecommerce, local brands and B2B teams that need clearer acquisition systems.']
  ];
</script>

<section id="faq" class="py-16 lg:py-24">
  <div class="container-brutal max-w-5xl">
    <div use:reveal class="mb-10 text-center">
      <span class="section-label">FAQ</span>
      <h2 class="mt-6 font-display text-4xl leading-none tracking-[-0.08em] sm:text-6xl">Questions before the bolt hits?</h2>
    </div>
    <div class="grid gap-4">
      {#each faqs as faq}
        <details use:reveal={{ y: 24 }} class="brutal-card group bg-white p-5 open:bg-blue-pale">
          <summary class="cursor-pointer list-none font-display text-2xl tracking-[-0.08em] marker:hidden sm:text-3xl">
            <span class="mr-3 inline-block text-blueprint group-open:rotate-45">+</span>{faq[0]}
          </summary>
          <p class="mt-4 border-t-4 border-ink pt-4 text-lg font-bold leading-snug">{faq[1]}</p>
        </details>
      {/each}
    </div>
  </div>
</section>
