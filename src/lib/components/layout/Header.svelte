<script lang="ts">
  import { onMount } from 'svelte';

  let {
    theme = 'light',
    toggleTheme = () => {}
  } = $props<{
    theme?: 'light' | 'dark';
    toggleTheme?: () => void;
  }>();

  let isOpen = $state(false);
  let isScrolled = $state(false);
  let servicesOpen = $state(false);
  let servicesTimeout: ReturnType<typeof setTimeout> | null = null;
  let packagesOpen = $state(false);
  let packagesTimeout: ReturnType<typeof setTimeout> | null = null;

  const servicePages = [
    { label: 'Website Development', href: '/services/website-development' },
    { label: 'AEO & GEO', href: '/services/aeo-geo' },
    { label: 'SEO Growth Systems', href: '/services/seo' },
    { label: 'Mobile App Development', href: '/services/mobile-app' },
    { label: 'Payroll Services', href: '/services/payroll' },
    { label: 'Compliance Services', href: '/services/compliance' },
    { label: 'Accounting Services', href: '/services/accounting' },
  ];

  const packagePages = [
    { label: 'Website Development', href: '/packages/website-development' },
    { label: 'AEO & GEO', href: '/packages/aeo-geo' },
    { label: 'SEO Growth Systems', href: '/packages/seo' },
    { label: 'Mobile App Development', href: '/packages/mobile-app' },
    { label: 'Payroll Services', href: '/packages/payroll' },
    { label: 'Compliance Services', href: '/packages/compliance' },
    { label: 'Accounting Services', href: '/packages/accounting' },
  ];

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 40;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function openServices() {
    if (servicesTimeout) clearTimeout(servicesTimeout);
    if (packagesTimeout) clearTimeout(packagesTimeout);
    servicesOpen = true;
    packagesOpen = false;
  }

  function closeServices() {
    servicesTimeout = setTimeout(() => {
      servicesOpen = false;
    }, 150);
  }

  function openPackages() {
    if (packagesTimeout) clearTimeout(packagesTimeout);
    if (servicesTimeout) clearTimeout(servicesTimeout);
    packagesOpen = true;
    servicesOpen = false;
  }

  function closePackages() {
    packagesTimeout = setTimeout(() => {
      packagesOpen = false;
    }, 150);
  }
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
  class:header-scrolled={isScrolled}
  style="backdrop-filter: {isScrolled ? 'blur(24px)' : 'none'}"
>
  <nav class="container-premium flex h-16 md:h-20 items-center justify-between gap-4">
    <a href="/" class="flex items-center gap-3 group">
      <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-sm font-semibold tracking-tight text-white-pure transition-all duration-300 group-hover:bg-blue group-hover:text-ink">
        P
      </span>
      <span class="hidden text-sm font-semibold tracking-tight sm:block">
        <span class="text-ink">Procor</span>
        <span class="text-muted"> Digital</span>
      </span>
    </a>

    <div class="hidden items-center gap-1 md:flex">
      <div
        class="relative"
        role="menubar"
        onmouseenter={openServices}
        onmouseleave={closeServices}
      >
        <a
          href="/services"
          class="nav-link rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 inline-flex items-center gap-1.5"
          aria-expanded={servicesOpen}
        >
          Services
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="transition-transform duration-200"
            class:rotate-180={servicesOpen}
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </a>
        {#if servicesOpen}
          <div
            role="menu"
            class="absolute top-full left-0 mt-2 w-64 rounded-xl border border-border bg-white-pure shadow-xl shadow-black/5 p-2 animate-fade-up"
            onmouseenter={openServices}
            onmouseleave={closeServices}
          >
            <div class="grid gap-1">
              <a href="/services" class="rounded-lg px-3.5 py-2.5 text-sm font-semibold text-blue transition-colors hover:bg-blue/5">
                View all services
              </a>
              <div class="h-px bg-border my-1"></div>
              {#each servicePages as sp}
                <a
                  href={sp.href}
                  class="rounded-lg px-3.5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ghost"
                >
                  {sp.label}
                </a>
              {/each}
            </div>
          </div>
        {/if}
      </div>

      <div
        class="relative"
        role="menubar"
        onmouseenter={openPackages}
        onmouseleave={closePackages}
      >
        <a
          href="/packages"
          class="nav-link rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 inline-flex items-center gap-1.5"
          aria-expanded={packagesOpen}
        >
          Packages
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="transition-transform duration-200"
            class:rotate-180={packagesOpen}
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </a>
        {#if packagesOpen}
          <div
            role="menu"
            class="absolute top-full left-0 mt-2 w-64 rounded-xl border border-border bg-white-pure shadow-xl shadow-black/5 p-2 animate-fade-up"
            onmouseenter={openPackages}
            onmouseleave={closePackages}
          >
            <div class="grid gap-1">
              <a href="/packages" class="rounded-lg px-3.5 py-2.5 text-sm font-semibold text-blue transition-colors hover:bg-blue/5">
                View all packages
              </a>
              <div class="h-px bg-border my-1"></div>
              {#each packagePages as pp}
                <a
                  href={pp.href}
                  class="rounded-lg px-3.5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ghost"
                >
                  {pp.label}
                </a>
              {/each}
            </div>
          </div>
        {/if}
      </div>

      <a href="/about" class="nav-link rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200">
        About
      </a>
      <a href="/case-studies" class="nav-link rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200">
        Case Studies
      </a>
    </div>

    <div class="hidden md:flex items-center gap-2">
      <button
        onclick={toggleTheme}
        class="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all duration-200 hover:border-border-light hover:text-ink"
        aria-label="Toggle theme"
      >
        {#if theme === 'light'}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        {:else}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        {/if}
      </button>
      <a href="/contact" class="btn-primary text-sm px-5 py-2.5">
        Get in touch
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <button
      class="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
      onclick={() => (isOpen = !isOpen)}
      aria-label="Toggle menu"
    >
      {#if isOpen}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      {:else}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
      {/if}
    </button>
  </nav>

  {#if isOpen}
    <div class="container-premium border-t border-border bg-white-pure pb-6 pt-4 md:hidden">
      <div class="flex flex-col gap-2">
        <div class="px-4 py-2">
          <p class="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Services</p>
          <div class="flex flex-col gap-1">
            <a href="/services" class="rounded-lg px-3 py-2 text-sm font-semibold text-blue" onclick={() => (isOpen = false)}>
              View all services
            </a>
            <div class="h-px bg-border my-1"></div>
            {#each servicePages as sp}
              <a
                href={sp.href}
                class="rounded-lg px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-ghost"
                onclick={() => (isOpen = false)}
              >
                {sp.label}
              </a>
            {/each}
          </div>
        </div>
        <div class="px-4 py-2">
          <p class="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Packages</p>
          <div class="flex flex-col gap-1">
            <a href="/packages" class="rounded-lg px-3 py-2 text-sm font-semibold text-blue" onclick={() => (isOpen = false)}>
              View all packages
            </a>
            <div class="h-px bg-border my-1"></div>
            {#each packagePages as pp}
              <a
                href={pp.href}
                class="rounded-lg px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-ghost"
                onclick={() => (isOpen = false)}
              >
                {pp.label}
              </a>
            {/each}
          </div>
        </div>
        <a
          href="/about"
          class="rounded-lg px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-ghost"
          onclick={() => (isOpen = false)}
        >
          About
        </a>
        <a
          href="/case-studies"
          class="rounded-lg px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-ghost"
          onclick={() => (isOpen = false)}
        >
          Case Studies
        </a>
        <a
          href="/contact"
          class="btn-primary mt-3 w-full justify-center"
          onclick={() => (isOpen = false)}
        >
          Get in touch
        </a>
      </div>
    </div>
  {/if}
</header>
