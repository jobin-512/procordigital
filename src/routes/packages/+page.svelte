<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const packages = [
    { title: 'Website Development', desc: 'Custom websites built for conversion. Not templates. Not page builders. Real performance.', slug: 'website-development', price: '$2,997', color: 'blue' },
    { title: 'AEO & GEO', desc: 'Dominate AI search. Answer engines, generative engine optimization, and voice search infrastructure.', slug: 'aeo-geo', price: '$3,997', color: 'emerald' },
    { title: 'SEO Growth Systems', desc: 'Technical audits, content clusters, topical authority maps, and programmatic SEO at scale.', slug: 'seo', price: '$2,997', color: 'blue' },
    { title: 'Mobile App Development', desc: 'Native and cross-platform apps. iOS, Android, and PWAs that users actually keep.', slug: 'mobile-app', price: '$4,997', color: 'emerald' },
    { title: 'Payroll Services', desc: 'Modern payroll processing, tax compliance, direct deposit, and employee self-service portals.', slug: 'payroll', price: '$997', color: 'blue' },
    { title: 'Compliance Services', desc: 'Stay compliant with confidence. Audit prep, policy management, training, and regulatory tracking.', slug: 'compliance', price: '$1,497', color: 'emerald' },
    { title: 'Accounting Services', desc: 'Full-service accounting. Bookkeeping, tax prep, financial reporting, and CFO advisory.', slug: 'accounting', price: '$1,997', color: 'blue' },
  ];
</script>

<svelte:head>
  <title>Packages — Procor Digital</title>
  <meta name="description" content="Choose your package. Fixed-price sprints, monthly retainers, or custom engagements. No lock-in. Full ownership." />
</svelte:head>

<section class="relative section-padding-hero overflow-hidden bg-white">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue/8 to-emerald/5 rounded-full blur-3xl pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10 pt-16 lg:pt-24">
    <div use:reveal class="max-w-4xl">
      <span class="eyebrow">Packages</span>
      <h1 class="hero-heading mt-6">
        Choose your
        <br />
        <span class="text-gradient-blue">level of</span> firepower.
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Fixed-price sprints. Monthly retainers. Custom engagements. No lock-in. You own every asset we build.
      </p>
    </div>

    <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {#each packages as pkg, i}
        <a href="/packages/{pkg.slug}" use:reveal={{ y: 20, delay: i * 60 }} class="premium-card p-6 group block no-underline">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-{pkg.color}/10 text-{pkg.color} text-sm font-semibold mb-4 transition-all duration-300 group-hover:bg-{pkg.color} group-hover:text-white-pure">{String(i + 1).padStart(2, '0')}</span>
          <h2 class="text-lg font-semibold tracking-tight mb-2">{pkg.title}</h2>
          <p class="text-sm text-muted leading-relaxed mb-5">{pkg.desc}</p>
          <div class="flex items-center justify-between">
            <span class="text-xl font-semibold tracking-tight text-ink">From {pkg.price}</span>
            <span class="text-sm font-medium text-blue group-hover:gap-2 inline-flex items-center gap-1 transition-all">
              View package
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="section-padding bg-ghost">
  <div class="container-premium">
    <div use:reveal class="premium-card-blue p-8 sm:p-12 text-center">
      <h2 class="section-heading text-2xl sm:text-3xl">
        Need something <span class="text-gradient-blue">custom?</span>
      </h2>
      <p class="mt-4 text-base text-muted max-w-lg mx-auto">
        Every package is modular. Mix and match services, add custom features, or design a completely custom engagement.
      </p>
      <a href="/contact" class="btn-blue mt-8 inline-flex items-center gap-2">
        Design custom package
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>
