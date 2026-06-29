<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  const solutions = [
    { problem: 'Low website conversions', solution: 'CRO audits, landing pages, offer rewrites and heatmap-backed UX improvements.', tag: 'Website' },
    { problem: 'Ads burning budget', solution: 'Campaign restructuring, creative testing, tracking cleanup and weekly optimization loops.', tag: 'Paid Ads' },
    { problem: 'Invisible on Google', solution: 'Technical SEO, content clusters, local SEO and authority-building roadmaps.', tag: 'SEO' },
    { problem: 'Manual lead follow-up', solution: 'CRM automations, email sequences, lead scoring and sales pipeline dashboards.', tag: 'Automation' }
  ];
</script>

<section id="solutions" class="py-16 lg:py-24">
  <div class="container-brutal">
    <div use:reveal class="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
      <div>
        <span class="section-label">Solutions by problem</span>
        <h2 class="mt-6 font-display text-4xl leading-none tracking-[-0.08em] sm:text-6xl">Pick the leak. We build the fix.</h2>
      </div>
      <p class="max-w-xl text-lg font-bold">Every service is packaged around a business problem, not a vague deliverable list. You get strategy, buildout and iteration.</p>
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      {#each solutions as item, index}
        <article use:reveal={{ delay: index * 90 }} class="brutal-card p-6 {index === 1 ? 'bg-blue-pale' : index === 2 ? 'bg-accent' : 'bg-white'}">
          <div class="mb-5 flex items-center justify-between gap-4">
            <span class="border-3 border-ink bg-blueprint px-3 py-1 text-xs font-black uppercase text-white">{item.tag}</span>
            <span class="font-display text-4xl tracking-[-0.08em]">0{index + 1}</span>
          </div>
          <h3 class="font-display text-3xl tracking-[-0.08em] sm:text-4xl">{item.problem}</h3>
          <p class="mt-4 text-lg font-bold leading-snug">{item.solution}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
