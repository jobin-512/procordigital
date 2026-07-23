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
    'Notion',
  ];
</script>

<section class="section-padding bg-white">
  <div class="container-premium">
    <div use:reveal class="max-w-3xl mb-10">
      <span class="eyebrow">Stack friendly</span>
      <h2 class="section-heading mt-5">
        We plug into the tools
        <br />
        <span class="text-gradient-blue">you already use.</span>
      </h2>
    </div>

    <div class="flex flex-wrap gap-3" use:reveal>
      {#each tools as tool, index}
        <span
          class="inline-flex items-center rounded-full border border-border bg-white-pure px-4 py-2 text-sm font-medium text-muted transition-all duration-200 hover:border-blue/30 hover:text-blue-dark hover:bg-blue/5 hover:-translate-y-0.5"
          style="transition-delay: {index * 20}ms;"
        >
          {tool}
        </span>
      {/each}
    </div>
  </div>
</section>
