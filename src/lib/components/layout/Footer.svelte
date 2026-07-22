<script lang="ts">
  const links = [
    { title: 'SERVICES', items: [
      {name: 'Website Dev', href: '/services/website-development'},
      {name: 'SEO', href: '/services/seo'},
      {name: 'AEO & GEO', href: '/services/aeo-geo'},
      {name: 'Mobile Apps', href: '/services/mobile-app'}
    ]},
    { title: 'COMPANY', items: [
      {name: 'About Us', href: '/about'},
      {name: 'Case Studies', href: '/case-studies'},
      {name: 'Blog', href: '/blog'},
      {name: 'Contact', href: '/contact'}
    ]},
    { title: 'RESOURCES', items: [
      {name: 'Process', href: '/process'},
      {name: 'Newsletter', href: '/blog'},
      {name: 'Support', href: '/contact'},
      {name: 'Guides', href: '/blog'}
    ] }
  ];
</script>

<footer class="border-t-4 border-electric bg-void text-white relative overflow-hidden">
  <div class="absolute inset-0 checkerboard opacity-10 pointer-events-none"></div>
  <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-electric via-neon to-cyber"></div>
  
  <div class="container-brutal py-16 relative z-10">
    <div class="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
      <div class="brutal-card-electric p-6 shadow-[8px_8px_0_#cc00ff]">
        <div class="flex items-center gap-3 mb-6">
          <span class="grid size-14 place-items-center border-4 border-white bg-white font-bold text-electric text-2xl">P</span>
          <span class="font-display text-3xl uppercase">PROCOR</span>
        </div>
        <p class="font-black uppercase leading-relaxed">
          NEO-BRUTALIST DIGITAL WARFARE FOR BRANDS READY TO STOP BEING BORING AND START DOMINATING.
        </p>
        <p class="mt-6 pt-6 border-t-4 border-white/30 font-display text-xl uppercase animate-glitch">
          BUILD LOUDER. WIN HARDER.
        </p>

        <div class="mt-6 flex gap-3">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="w-12 h-12 border-4 border-white flex items-center justify-center text-lg font-black hover:bg-white hover:text-electric transition-colors cursor-pointer">X</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-12 h-12 border-4 border-white flex items-center justify-center text-lg font-black hover:bg-white hover:text-electric transition-colors cursor-pointer">in</a>
          <a href="mailto:info@procordigital.com" class="w-12 h-12 border-4 border-white flex items-center justify-center text-lg font-black hover:bg-white hover:text-electric transition-colors cursor-pointer">@</a>
        </div>
      </div>

      <div class="grid gap-6 sm:grid-cols-3">
        {#each links as group}
          <div class="border-4 border-white bg-void p-5 shadow-[4px_4px_0_#ff0099]">
            <h2 class="font-display text-xl uppercase mb-4 gradient-electric">{group.title}</h2>
            <ul class="space-y-3">
              {#each group.items as item}
                <li><a class="font-bold text-white/70 hover:text-neon transition-colors uppercase text-sm" href={item.href}>{item.name}</a></li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <div class="mt-12 pt-8 border-t-4 border-white/20 flex flex-col justify-between gap-4 text-sm font-black uppercase sm:flex-row">
      <p>© 2026 PROCOR. NO RIGHTS RESERVED. WE OWN THIS.</p>
      <p>PRIVACY • TERMS • info@procordigital.com</p>
    </div>
  </div>
</footer>
