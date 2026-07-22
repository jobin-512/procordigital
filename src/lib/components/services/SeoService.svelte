<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const features = [
    'Technical SEO audits & fixes',
    'Content strategy & topical authority',
    'Link building & digital PR',
    'Local SEO & Google Business Profile',
    'Programmatic SEO at scale',
    'Keyword research & cluster mapping',
    'Site architecture optimization',
    'Monthly reporting & iteration'
  ];

  const stats = [
    { label: 'Organic traffic growth', value: '+312%' },
    { label: 'First-page keywords', value: '247+' },
    { label: 'ROI timeline', value: '90 days' }
  ];
</script>

<section id="seo" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="seo-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blueprint/5 via-transparent to-lime/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10 two-col-grid">
    <div use:reveal={{ x: -40 }}>
      <span class="section-label-insane">SEO Growth</span>
      <h2 id="seo-heading" class="mt-6 section-heading max-w-xl animate-text-reveal">
        Organic traffic
        <br />
        <span class="gradient-text-cyan">that compounds</span>
        <br />
        <span class="gradient-text-hot">every month.</span>
      </h2>
      <p class="mt-5 max-w-xl text-lg font-bold leading-snug text-ink/70">
        SEO is a long game — but most agencies play it wrong. We build systems, not tasks. Technical foundations, content engines, and authority loops that compound over 6, 12, 24 months.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        {#each stats as stat, i}
          <div class="border-4 border-ink bg-white px-5 py-3 shadow-[4px_4px_0_#07111f]" use:reveal={{ y: 20, delay: 200 + i * 100 }}>
            <p class="stat-number text-blueprint">{stat.value}</p>
            <p class="mt-1 font-black uppercase text-[10px] tracking-widest text-ink/50">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>

    <div use:reveal={{ x: 40, delay: 150 }} class="brutal-card-insane bg-white card-padding-lg">
      <div class="mb-5 flex items-center gap-3 border-4 border-ink bg-blueprint p-4">
        <span class="text-3xl">🎯</span>
        <span class="font-black uppercase text-sm text-white">SEO playbook</span>
      </div>

      <ul class="space-y-3" role="list">
        {#each features as feature, i}
          <li class="flex items-center gap-3 text-sm font-bold text-ink/80" use:reveal={{ y: 12, delay: 180 + i * 60 }}>
            <span class="w-6 h-6 border-3 border-ink bg-blueprint flex items-center justify-center text-xs text-white flex-shrink-0">✓</span>
            {feature}
          </li>
        {/each}
      </ul>

      <div class="mt-6 pt-5 border-t-4 border-ink">
        <a href="/services/seo" class="brutal-button-blue-insane w-full justify-center">
          Learn more
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
