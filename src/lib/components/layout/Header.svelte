<script lang="ts">
  let isOpen = $state(false);
  let isMegaOpen = $state(false);
  let megaTimeout: ReturnType<typeof setTimeout>;

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  const services = [
    { title: 'Website Dev', href: '/services/website-development', emoji: '🌐' },
    { title: 'AEO & GEO', href: '/services/aeo-geo', emoji: '🤖' },
    { title: 'SEO', href: '/services/seo', emoji: '🎯' },
    { title: 'Mobile App', href: '/services/mobile-app', emoji: '📱' },
    { title: 'Payroll', href: '/services/payroll', emoji: '💰' },
    { title: 'Compliance', href: '/services/compliance', emoji: '📋' },
    { title: 'Accounting', href: '/services/accounting', emoji: '📊' }
  ];

  function openMega() { clearTimeout(megaTimeout); isMegaOpen = true; }
  function closeMega() { megaTimeout = setTimeout(() => { isMegaOpen = false; }, 120); }
  function cancelClose() { clearTimeout(megaTimeout); }
</script>

<header class="sticky top-0 z-50 border-b-4 border-ink bg-white">
  <nav class="container-brutal flex min-h-16 items-center justify-between gap-4 py-3">
    <a href="/" class="flex items-center gap-3 group">
      <span class="grid size-12 place-items-center border-4 border-ink bg-electric text-2xl font-black text-white shadow-[4px_4px_0_#0a0a0a] transition group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0_#cc00ff] animate-shake">
        P
      </span>
      <span class="font-display text-2xl uppercase tracking-[-0.04em]">PROCOR</span>
    </a>

    <div class="hidden items-center gap-2 lg:flex">
      <div class="relative" onmouseenter={openMega} onmouseleave={closeMega}>
        <a class="border-4 border-ink bg-neon px-4 py-2 text-sm font-black uppercase text-ink shadow-[4px_4px_0_#0a0a0a] hover:shadow-[6px_6px_0_#00cc77] hover:-translate-y-0.5 transition-all inline-flex items-center gap-1" href="/services">
          SERVICES
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" class="transition-transform" class:rotate-180={isMegaOpen}>
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </a>

        {#if isMegaOpen}
          <div class="absolute top-full left-0 pt-2" onmouseenter={cancelClose} onmouseleave={closeMega}>
            <div class="w-[400px] border-4 border-ink bg-white shadow-[8px_8px_0_#0a0a0a] p-4 animate-slide-up grid grid-cols-2 gap-2">
              {#each services as service}
                <a href={service.href} class="flex items-center gap-2 border-4 border-ink bg-white p-3 hover:bg-electric hover:text-white transition-all font-black uppercase text-xs">
                  <span class="text-xl">{service.emoji}</span>
                  {service.title}
                </a>
              {/each}
              <button class="col-span-2 brutal-button-neon justify-center mt-2">
                SEE ALL SERVICES →
              </button>
            </div>
          </div>
        {/if}
      </div>

      {#each navItems as item}
        <a class="border-4 border-ink bg-white px-4 py-2 text-sm font-black uppercase hover:bg-plasma hover:text-white hover:shadow-[4px_4px_0_#cc5500] hover:-translate-y-0.5 transition-all" href={item.href}>{item.label}</a>
      {/each}
    </div>

    <div class="hidden lg:block">
      <a class="brutal-button-neon" href="/contact">
        <span class="text-xl">⚡</span>
        LET'S GO
      </a>
    </div>

    <button class="border-4 border-ink bg-electric px-4 py-2 font-black text-white shadow-[4px_4px_0_#cc00ff] lg:hidden" onclick={() => (isOpen = !isOpen)}>
      {isOpen ? '✕' : '☰'}
    </button>
  </nav>

  {#if isOpen}
    <div class="container-brutal pb-4 lg:hidden animate-slide-up">
      <div class="border-4 border-ink bg-white shadow-[8px_8px_0_#0a0a0a] p-4 grid gap-2">
        <a class="brutal-card-neon p-3 font-black uppercase text-center" href="/services">SERVICES 🔥</a>
        {#each navItems as item}
          <a class="brutal-card p-3 font-black uppercase text-center hover:bg-toxic hover:text-white transition-all" href={item.href}>{item.label}</a>
        {/each}
        <a class="brutal-button justify-center mt-2" href="/contact">
          <span class="text-xl">⚡</span> LET'S GO
        </a>
      </div>
    </div>
  {/if}
</header>
