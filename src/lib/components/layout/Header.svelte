<script lang="ts">
  let isOpen = $state(false);

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Systems', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Proof', href: '#proof' },
    { label: 'Packages', href: '#packages' },
    { label: 'Industries', href: '#industries' },
    { label: 'FAQ', href: '#faq' }
  ];
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