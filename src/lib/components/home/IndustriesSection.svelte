<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const industries = [
    ['SaaS', 'Funnels, demos, onboarding and lifecycle campaigns.'],
    ['Local services', 'Local SEO, lead forms, reviews and high-intent ads.'],
    ['Ecommerce', 'Product pages, paid social, email flows and CRO.'],
    ['B2B teams', 'Authority content, landing pages and CRM automation.'],
    ['Creators', 'Offer pages, newsletters, launches and audience growth.'],
    ['Startups', 'Positioning, MVP websites and fast acquisition tests.']
  ];
</script>

<section class="bg-blue-pale py-16 lg:py-24">
  <div class="container-brutal">
    <div use:reveal class="mb-10 text-center">
      <span class="section-label bg-white">Who we help</span>
      <h2 class="mx-auto mt-6 max-w-4xl font-display text-4xl leading-none tracking-[-0.08em] sm:text-6xl">Built for brands with growth pressure.</h2>
    </div>

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each industries as industry, index}
        <article use:reveal={{ y: 30, delay: index * 70 }} class="border-4 border-ink bg-white p-6 shadow-[7px_7px_0_#07111f]">
          <span class="font-display text-5xl tracking-[-0.08em] text-blueprint">0{index + 1}</span>
          <h3 class="mt-4 font-display text-4xl tracking-[-0.08em]">{industry[0]}</h3>
          <p class="mt-3 text-lg font-bold leading-snug">{industry[1]}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
