<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const oldWay = ['Random posting', 'Guess-based ads', 'Pretty pages only', 'Reports nobody reads'];
  const procorWay = ['Problem-first packages', 'Measured experiments', 'Conversion-led design', 'Clear weekly decisions'];
</script>

<section class="bg-ink py-16 text-white lg:py-24">
  <div class="container-brutal">
    <div use:reveal class="mb-10 text-center">
      <span class="section-label bg-blue-pale text-ink">Why Procor</span>
      <h2 class="mx-auto mt-6 max-w-4xl font-display text-4xl leading-none tracking-[-0.08em] sm:text-6xl">Less agency fog. More growth architecture.</h2>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <article use:reveal={{ x: -40 }} class="border-4 border-white bg-paper p-6 text-ink shadow-[8px_8px_0_#4db7ff]">
        <h3 class="font-display text-4xl tracking-[-0.08em]">The old way</h3>
        <ul class="mt-6 grid gap-3">
          {#each oldWay as item}
            <li class="border-4 border-ink bg-white p-4 font-black">✕ {item}</li>
          {/each}
        </ul>
      </article>

      <article use:reveal={{ x: 40, delay: 120 }} class="border-4 border-white bg-blueprint p-6 text-white shadow-[8px_8px_0_#fff04d]">
        <h3 class="font-display text-4xl tracking-[-0.08em]">The Procor way</h3>
        <ul class="mt-6 grid gap-3">
          {#each procorWay as item}
            <li class="border-4 border-white bg-ink p-4 font-black text-accent">✓ {item}</li>
          {/each}
        </ul>
      </article>
    </div>
  </div>
</section>
