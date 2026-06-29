<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const tools = [
    'Google Ads',
    'Meta Ads',
    'Search Console',
    'GA4',
    'HubSpot',
    'Zapier',
    'Shopify',
    'Webflow',
    'Svelte',
    'Looker Studio',
    'Mailchimp',
    'Notion'
  ];
</script>

<section class="py-16 lg:py-24">
  <div class="container-brutal">
    <div use:reveal class="mb-10 max-w-3xl">
      <span class="section-label">Stack friendly</span>
      <h2 class="mt-6 font-display text-4xl leading-none tracking-[-0.08em] sm:text-6xl">We plug into the tools you already use.</h2>
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {#each tools as tool, index}
        <div use:reveal={{ y: 26, delay: index * 35 }} class="border-4 border-ink bg-white p-5 text-center font-black uppercase shadow-[5px_5px_0_#07111f] transition hover:-translate-y-1 hover:bg-blue-pale hover:shadow-[8px_8px_0_#07111f]">
          {tool}
        </div>
      {/each}
    </div>
  </div>
</section>
