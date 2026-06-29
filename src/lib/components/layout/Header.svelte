<script lang="ts">
  let isOpen = $state(false);

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Packages', href: '#packages' },
    { label: 'Process', href: '#process' },
    { label: 'Proof', href: '#proof' },
    { label: 'FAQ', href: '#faq' }
  ];
</script>

<header class="sticky top-0 z-50 border-b-4 border-ink bg-paper/95 backdrop-blur">
  <nav class="container-brutal flex min-h-20 items-center justify-between gap-4 py-3" aria-label="Main navigation">
    <a href="/" class="group flex items-center gap-3" aria-label="Procor home">
      <span class="grid size-12 place-items-center border-4 border-ink bg-blueprint text-2xl font-black text-white shadow-[4px_4px_0_#07111f] transition group-hover:-rotate-6">
        PC
      </span>
      <span class="font-display text-2xl tracking-[-0.08em] sm:text-3xl">Procor</span>
    </a>

    <div class="hidden items-center gap-2 lg:flex">
      {#each navItems as item}
        <a class="border-3 border-transparent px-3 py-2 text-sm font-black uppercase hover:border-ink hover:bg-blue-pale" href={item.href}>{item.label}</a>
      {/each}
    </div>

    <div class="hidden lg:block">
      <a class="brutal-button-blue px-5 py-2" href="#contact">Get audit</a>
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
    <div id="mobile-menu" class="container-brutal pb-5 lg:hidden">
      <div class="brutal-card grid gap-2 p-3">
        {#each navItems as item}
          <a class="border-3 border-ink bg-white px-4 py-3 font-black uppercase" href={item.href} onclick={() => (isOpen = false)}>{item.label}</a>
        {/each}
        <a class="brutal-button-blue mt-2" href="#contact" onclick={() => (isOpen = false)}>Get audit</a>
      </div>
    </div>
  {/if}
</header>
