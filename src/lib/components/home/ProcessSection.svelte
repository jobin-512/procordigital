<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  const steps = [
    ['01', 'Diagnose', 'We audit your current channels, tracking, competitors and highest-friction conversion points.'],
    ['02', 'Blueprint', 'We turn the findings into a channel plan, offer map, content angle and execution sprint.'],
    ['03', 'Build', 'We launch pages, ads, automations, SEO fixes and reporting dashboards with brutal clarity.'],
    ['04', 'Optimize', 'We measure what moved, kill weak ideas and double down on the experiments that convert.']
  ];
</script>

<section id="process" class="py-16 lg:py-24">
  <div class="container-brutal">
    <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div use:reveal={{ x: -30 }} class="lg:sticky lg:top-28">
        <span class="section-label">Our process</span>
        <h2 class="mt-6 font-display text-4xl leading-none tracking-[-0.08em] sm:text-6xl">No fluff. Just a clear sprint path.</h2>
        <p class="mt-5 text-lg font-bold">The style is loud, but the process is disciplined. Each sprint ends with assets shipped and numbers reviewed.</p>
      </div>

      <div class="grid gap-5">
        {#each steps as step}
          <article use:reveal={{ x: 34 }} class="brutal-card grid gap-4 bg-white p-5 sm:grid-cols-[7rem_1fr] sm:p-7">
            <div class="grid size-24 place-items-center border-4 border-ink bg-blue-pop font-display text-5xl tracking-[-0.08em] shadow-[5px_5px_0_#07111f]">{step[0]}</div>
            <div>
              <h3 class="font-display text-4xl tracking-[-0.08em]">{step[1]}</h3>
              <p class="mt-2 text-lg font-bold leading-snug">{step[2]}</p>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
