<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import ImageSlot from '$lib/components/common/ImageSlot.svelte';
  import website from "$lib/assets/home/2.gif"
  import seo from "$lib/assets/home/seo.webp"
  import mobile from "$lib/assets/home/3.webp"

  const images = [
    { src: website, title: 'Website Development', description: 'Custom web development projects showcasing responsive, high-performance sites.' },
    { src: seo, title: 'SEO Growth', description: 'Search engine optimization results and traffic growth dashboards.' },
    { src: mobile, title: 'Mobile Apps', description: 'Native and cross-platform mobile application development.' },
  ];
</script>

<section class="section-padding bg-ghost">
  <div class="container-premium">
    <div use:reveal class="max-w-3xl mb-10">
      <span class="eyebrow">Our work</span>
      <h2 class="section-heading mt-5">
        See the <span class="text-gradient-blue">results</span>
        <br />
        we deliver.
      </h2>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
      {#each images as image, index}
        <div use:reveal={{ y: 24, delay: index * 80 }}>
          <div class="premium-card overflow-hidden group">
            <div class="aspect-[4/3] overflow-hidden bg-ghost">
              <ImageSlot
                title={image.src}
                description={image.description}
                variant="light"
                height="100%"
              />
            </div>
            <div class="p-4">
              <h3 class="text-sm font-semibold mb-1">{image.title}</h3>
              <p class="text-xs text-muted">{image.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
