<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const services = [
    { label: 'Website Development', href: '/packages/website-development' },
    { label: 'AEO & GEO', href: '/packages/aeo-geo' },
    { label: 'SEO Growth Systems', href: '/packages/seo' },
    { label: 'Mobile App Development', href: '/packages/mobile-app' },
    { label: 'Payroll Services', href: '/packages/payroll' },
    { label: 'Compliance Services', href: '/packages/compliance' },
    { label: 'Accounting Services', href: '/packages/accounting' },
  ];

  const company = [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ];
</script>

<footer class="relative border-t border-border bg-ink text-white-pure overflow-hidden">
  <div class="absolute inset-0 pointer-events-none bg-grid-subtle-dark"></div>
  <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue/5 rounded-full blur-[120px] pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
      <div use:reveal={{ x: -20 }}>
        <a href="/" class="inline-flex items-center gap-3 mb-6">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue text-sm font-semibold text-ink">P</span>
          <span class="text-lg font-semibold tracking-tight">
            Procor <span class="text-muted">Digital</span>
          </span>
        </a>
        <p class="max-w-sm text-sm leading-relaxed text-white/50 mb-6">
          Growth systems for B2B and DTC brands. Strategy, architecture, build, and iteration. No fluff. No vanity metrics. Just pipeline.
        </p>
        <div class="space-y-2">
          <a href="mailto:info@procorhrms.com" class="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-blue">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 4l-10 8L2 4"/>
            </svg>
            info@procorhrms.com
          </a>
          <a href="tel:+14064792132" class="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-blue">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +1 (406) 479-2132
          </a>
          <p class="flex items-center gap-2 text-sm text-white/60">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Montana, USA
          </p>
        </div>
      </div>

      <div use:reveal={{ y: 20, delay: 80 }}>
        <h3 class="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Services</h3>
        <ul class="space-y-3">
          {#each services as item}
            <li>
              <a href={item.href} class="text-sm text-white/60 transition-all duration-200 hover:text-blue hover:translate-x-0.5 inline-block">
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div use:reveal={{ y: 20, delay: 160 }}>
        <h3 class="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Company</h3>
        <ul class="space-y-3">
          {#each company as item}
            <li>
              <a href={item.href} class="text-sm text-white/60 transition-all duration-200 hover:text-blue hover:translate-x-0.5 inline-block">
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div use:reveal={{ y: 20, delay: 240 }}>
        <h3 class="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Get in touch</h3>
        <p class="text-sm text-white/60 mb-4 leading-relaxed">
          Ready to build your growth system? Let's talk.
        </p>
        <a href="mailto:info@procorhrms.com" class="text-sm font-medium text-blue transition-colors hover:text-blue-light">
          info@procorhrms.com
        </a>
        <p class="mt-2 text-sm text-white/40">
          +1 (406) 479-2132
        </p>
        <p class="mt-1 text-sm text-white/40">
          Montana, USA
        </p>
      </div>
    </div>

    <div class="divider-light"></div>

    <div class="flex flex-col gap-4 py-8 sm:flex-row items-center justify-between">
      <p class="text-xs text-white/30">
        &copy; {new Date().getFullYear()} Procor HRMS. All rights reserved.
      </p>
      <p class="text-xs text-white/30">
        Built with care by the Procor team
      </p>
    </div>
  </div>
</footer>
