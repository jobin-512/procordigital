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

<section id="seo" class="relative section-padding-lg overflow-hidden" aria-labelledby="seo-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-ink/3 via-transparent to-blue/3 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
      <div use:reveal={{ x: -20 }}>
        <span class="section-label-insane">SEO Growth</span>
        <h2 id="seo-heading" class="mt-6 section-heading animate-text-reveal">
          Organic traffic
          <br />
          <span class="text-gradient-emerald">that compounds</span>
          <br />
          <span class="text-gradient-blue">every month.</span>
        </h2>
        <p class="mt-5 text-base leading-relaxed text-muted">
          SEO is a long game — but most agencies play it wrong. We build systems, not tasks. Technical foundations, content engines, and authority loops that compound over 6, 12, 24 months.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          {#each stats as stat, i}
            <div class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg px-4 py-3" use:reveal={{ y: 12, delay: 200 + i * 80 }}>
              <p class="font-semibold text-2xl tracking-tight text-gradient-emerald">{stat.value}</p>
              <p class="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">{stat.label}</p>
            </div>
          {/each}
        </div>
      </div>

      <div use:reveal={{ x: 20, delay: 150 }} class="premium-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg p-6 sm:p-8">
        <div class="flex items-center gap-3 mb-5 pb-4 border-b border-black/5">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white text-sm font-semibold">S</span>
          <span class="font-semibold uppercase text-xs tracking-widest text-muted">SEO playbook</span>
        </div>

        <ul class="space-y-3" role="list">
          {#each features as feature, i}
            <li class="flex items-center gap-3 text-sm font-medium text-muted" use:reveal={{ y: 8, delay: 180 + i * 60 }}>
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-ink flex items-center justify-center text-white text-[9px] font-bold">✓</span>
              {feature}
            </li>
          {/each}
        </ul>

        <div class="mt-6 pt-5 border-t border-black/5">
          <a href="/services/seo" class="btn-primary w-full justify-center text-sm">
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
