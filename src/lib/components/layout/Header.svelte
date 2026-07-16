<script lang="ts">
  let isOpen = $state(false);
  let isMegaOpen = $state(false);
  let megaTimeout: ReturnType<typeof setTimeout>;

  const navItems = [
    { label: 'Process', href: '/process' },
    { label: 'Proof', href: '#proof' },
    { label: 'Packages', href: '#packages' },
    { label: 'Industries', href: '#industries' }
  ];

  const services = [
    { title: 'Website Development', href: '/services/website-development', icon: '🌐', description: 'Custom, responsive websites that convert visitors into customers.', color: 'blueprint' },
    { title: 'AEO & GEO', href: '/services/aeo-geo', icon: '🤖', description: 'Get found in AI overviews, ChatGPT, and generative search.', color: 'cyan' },
    { title: 'SEO', href: '/services/seo', icon: '🎯', description: 'Organic traffic systems that compound every month.', color: 'blueprint' },
    { title: 'Mobile App', href: '/services/mobile-app', icon: '📱', description: 'Native and cross-platform apps for iOS and Android.', color: 'hot' },
    { title: 'Payroll', href: '/services/payroll', icon: '💰', description: 'Automated payroll processing, tax filing, and compliance.', color: 'lime' },
    { title: 'Compliance', href: '/services/compliance', icon: '📋', description: 'Stay compliant with GDPR, HIPAA, SOX, and more.', color: 'accent' },
    { title: 'Accounting', href: '/services/accounting', icon: '📊', description: 'Bookkeeping, tax prep, and CFO advisory services.', color: 'blue-pop' }
  ];

  function openMega() {
    clearTimeout(megaTimeout);
    isMegaOpen = true;
  }

  function closeMega() {
    megaTimeout = setTimeout(() => { isMegaOpen = false; }, 120);
  }

  function cancelClose() {
    clearTimeout(megaTimeout);
  }

  let mobileServicesOpen = $state(false);
</script>

<header class="sticky top-0 z-50 border-b-4 border-ink bg-paper/95 backdrop-blur">
  <nav class="container-brutal flex min-h-20 items-center justify-between gap-4 py-3" aria-label="Main navigation">
    <a href="/" class="group flex items-center gap-3" aria-label="Procor home">
      <span class="grid size-12 place-items-center border-4 border-ink bg-blueprint text-2xl font-black text-white shadow-[4px_4px_0_#07111f] transition group-hover:-rotate-6 group-hover:shadow-[8px_8px_0_#07111f]">
        PC
      </span>
      <span class="font-display text-2xl tracking-[-0.08em] sm:text-3xl">Procor</span>
    </a>

    <div class="hidden items-center gap-2 lg:flex">
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="relative"
        onmouseenter={openMega}
        onmouseleave={closeMega}
      >
        <a
          class="border-3 border-transparent px-3 py-2 text-sm font-black uppercase hover:border-ink hover:bg-blue-pale transition-all duration-100 inline-flex items-center gap-1"
          href="/services"
        >
          Services
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="transition-transform" class:rotate-180={isMegaOpen}>
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </a>

        {#if isMegaOpen}
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div
            class="absolute top-full left-1/2 -translate-x-1/2 pt-2"
            onmouseenter={cancelClose}
            onmouseleave={closeMega}
          >
            <div class="w-[720px] border-4 border-ink bg-paper-soft shadow-[12px_12px_0_#07111f] p-6 animate-slide-down">
              <div class="grid grid-cols-2 gap-3">
                {#each services as service}
                  <a
                    href={service.href}
                    class="group flex items-start gap-3 border-3 border-ink bg-white p-4 transition-all duration-100 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#07111f] hover:bg-blue-pale"
                  >
                    <span class="text-2xl mt-0.5">{service.icon}</span>
                    <div class="min-w-0">
                      <p class="font-black uppercase text-xs tracking-wider text-{service.color}">{service.title}</p>
                      <p class="mt-1 text-xs font-bold leading-snug text-ink/60">{service.description}</p>
                    </div>
                  </a>
                {/each}
              </div>
              <div class="mt-4 pt-4 border-t-3 border-ink flex items-center justify-between">
                <a href="/services" class="font-black uppercase text-xs tracking-widest text-blueprint hover:text-hot transition-colors">View all services →</a>
                <a href="#contact" class="brutal-button-blue px-4 py-2 text-xs">Get audit</a>
              </div>
            </div>
          </div>
        {/if}
      </div>

      {#each navItems as item}
        <a class="border-3 border-transparent px-3 py-2 text-sm font-black uppercase hover:border-ink hover:bg-blue-pale transition-all duration-100" href={item.href}>{item.label}</a>
      {/each}
    </div>

    <div class="hidden lg:block">
      <a class="brutal-button-blue-insane px-6 py-3" href="#contact">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M17 15v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6"/>
        </svg>
        Get audit
      </a>
    </div>

    <button
      class="border-4 border-ink bg-blue-pale px-4 py-2 font-black shadow-[4px_4px_0_#07111f] lg:hidden"
      type="button"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      onclick={() => (isOpen = !isOpen)}
    >
      {isOpen ? 'Close' : 'Menu'}
    </button>
  </nav>

  {#if isOpen}
    <div id="mobile-menu" class="container-brutal pb-5 lg:hidden animate-slide-down">
      <div class="brutal-card-insane grid gap-2 p-3">
        <a class="border-3 border-ink bg-blueprint px-4 py-3 font-black uppercase text-white" href="/services" onclick={() => (isOpen = false)}>Services</a>

        <button
          class="border-3 border-ink bg-white px-4 py-3 font-black uppercase text-left flex items-center justify-between"
          onclick={() => (mobileServicesOpen = !mobileServicesOpen)}
        >
          All Service Pages
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="transition-transform" class:rotate-180={mobileServicesOpen}>
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        {#if mobileServicesOpen}
          <div class="grid gap-1 pl-4 animate-slide-down">
            {#each services as service}
              <a
                href={service.href}
                class="border-3 border-ink bg-blue-pale px-3 py-2 text-xs font-bold uppercase flex items-center gap-2"
                onclick={() => { isOpen = false; mobileServicesOpen = false; }}
              >
                <span>{service.icon}</span>
                {service.title}
              </a>
            {/each}
          </div>
        {/if}

        {#each navItems as item}
          <a class="border-3 border-ink bg-white px-4 py-3 font-black uppercase" href={item.href} onclick={() => (isOpen = false)}>{item.label}</a>
        {/each}
        <a class="brutal-button-blue-insane mt-2" href="#contact" onclick={() => (isOpen = false)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M17 15v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6"/>
          </svg>
          Get audit
        </a>
      </div>
    </div>
  {/if}
</header>
