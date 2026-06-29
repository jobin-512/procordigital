<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  const packages = [
    {
      name: 'Starter Strike',
      price: '$899',
      description: 'For small brands that need the essentials fixed fast.',
      features: ['Digital audit', '1 landing page', 'SEO basics', 'Analytics setup']
    },
    {
      name: 'Growth Engine',
      price: '$2,499',
      description: 'For teams ready to build a repeatable acquisition machine.',
      features: ['Funnel strategy', 'Ads + SEO plan', '3 campaign pages', 'CRM automations'],
      featured: true
    },
    {
      name: 'Scale Lab',
      price: '$5,999',
      description: 'For serious growth experiments across multiple channels.',
      features: ['Full growth roadmap', 'Creative testing', 'Content engine', 'Weekly optimization']
    }
  ];
</script>

<section id="packages" class="bg-blueprint py-16 text-white lg:py-24">
  <div class="container-brutal">
    <div use:reveal class="mb-10 text-center">
      <span class="section-label bg-accent text-ink">Packages</span>
      <h2 class="mx-auto mt-6 max-w-4xl font-display text-4xl leading-none tracking-[-0.08em] sm:text-6xl">Choose your level of marketing firepower.</h2>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      {#each packages as plan}
        <article use:reveal={{ y: 46, delay: plan.featured ? 120 : 40 }} class="border-4 border-ink {plan.featured ? 'bg-accent text-ink shadow-[10px_10px_0_#07111f] lg:-translate-y-5' : 'bg-paper text-ink shadow-[8px_8px_0_#07111f]'} p-6">
          {#if plan.featured}
            <p class="mb-4 inline-block border-3 border-ink bg-hot px-3 py-1 text-xs font-black uppercase text-white">Most popular</p>
          {/if}
          <h3 class="font-display text-4xl tracking-[-0.08em]">{plan.name}</h3>
          <p class="mt-3 font-display text-5xl tracking-[-0.08em]">{plan.price}<span class="text-base font-black tracking-normal"> / project</span></p>
          <p class="mt-4 min-h-16 text-lg font-bold leading-snug">{plan.description}</p>
          <ul class="my-6 space-y-3 border-y-4 border-ink py-6">
            {#each plan.features as feature}
              <li class="font-black">→ {feature}</li>
            {/each}
          </ul>
          <a class={plan.featured ? 'brutal-button-blue w-full' : 'brutal-button w-full'} href="#contact">Start here</a>
        </article>
      {/each}
    </div>
  </div>
</section>
