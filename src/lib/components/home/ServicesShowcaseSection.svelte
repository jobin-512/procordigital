<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import ImageSlot from '$lib/components/common/ImageSlot.svelte';
  import collage from "$lib/assets/home/1.gif"

  const services = [
    'Performance websites',
    'SEO growth systems',
    'Paid campaign launches',
    'CRM + email automation',
    'Analytics dashboards',
    'Content engines'
  ];
</script>

<section class="py-16 lg:py-24">
  <div class="container-brutal">
    <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div use:reveal={{ x: -34 }}>
        <span class="section-label">What we build</span>
        <h2 class="mt-6 font-display text-4xl leading-none tracking-[-0.08em] sm:text-6xl">Digital assets that look loud and work harder.</h2>
        <p class="mt-5 text-lg font-bold leading-snug">
          Procor creates the growth pieces your business needs to attract, convert, track and nurture leads without turning your marketing stack into chaos.
        </p>
        <div class="mt-7 grid gap-3 sm:grid-cols-2">
          {#each services as service, index}
            <div use:reveal={{ y: 20, delay: index * 55 }} class="border-4 border-ink bg-white p-4 font-black uppercase shadow-[5px_5px_0_#07111f]">
              → {service}
            </div>
          {/each}
        </div>
      </div>

      <div use:reveal={{ x: 38, delay: 140 }}>
        <ImageSlot
          tall
          variant="yellow"
          eyebrow="Hero visual space"
          title={collage}
          description="growth"
        />
      </div>
    </div>
  </div>
</section>
