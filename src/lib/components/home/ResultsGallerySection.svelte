<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import ImageSlot from '$lib/components/common/ImageSlot.svelte';
  import website from "$lib/assets/home/2.gif"
  import seo from "$lib/assets/home/seo.webp"
  import mobile from "$lib/assets/home/3.webp"


  const cards = [
    {
      eyebrow: 'Project image 01',
      title: website, 
      description: 'website',
      variant: 'light',
      height:"250px"
    },
    {
      eyebrow: 'Project image 02',
      title: seo,
      description: 'Add winning ad creatives, campaign visuals, or content examples.',
      variant: 'blue',
      height:"250px"
    },
    {
      eyebrow: 'Project image 03',
      title: mobile,
      description: 'Add performance charts, traffic growth, lead reports, or dashboards.',
      variant: 'yellow',
      height:"250px"
    }
  ] as const;
</script>

<section class="py-16 lg:py-24">
  <div class="container-brutal">
    <div use:reveal class="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
      <div>
        <span class="section-label">Image gallery</span>
        <h2 class="mt-6 font-display text-4xl leading-none tracking-[-0.08em] sm:text-6xl">Show the work. Let the visuals sell.</h2>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      {#each cards as card, index}
        <div use:reveal={{ y: 36, delay: index * 100 }}>
          <ImageSlot {...card} />
        </div>
      {/each}
    </div>
  </div>
</section>
