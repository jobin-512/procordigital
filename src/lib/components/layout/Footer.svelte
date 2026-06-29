<script lang="ts">
  const links = [
    { title: 'Solutions', items: ['SEO Fixes', 'Paid Ads', 'Website CRO', 'Automation'] },
    { title: 'Company', items: ['About', 'Case Studies', 'Careers', 'Contact'] },
    { title: 'Resources', items: ['Growth Guides', 'Templates', 'Newsletter', 'Audit Checklist'] }
  ];
</script>

<footer class="border-t-4 border-ink bg-ink text-white">
  <div class="container-brutal py-12 lg:py-16">
    <div class="grid gap-8 lg:grid-cols-[1.4fr_2fr]">
      <div class="brutal-card bg-blueprint p-6 text-white shadow-[8px_8px_0_#4db7ff]">
        <div class="mb-5 flex items-center gap-3">
          <span class="grid size-12 place-items-center border-4 border-white bg-accent font-black text-ink">PC</span>
          <span class="font-display text-3xl tracking-[-0.08em]">Procor</span>
        </div>
        <p class="max-w-md text-lg font-bold text-blue-50">
          Neo-brutal digital marketing systems for brands with messy funnels, flat traffic and underperforming websites.
        </p>
        <p class="mt-6 border-3 border-white bg-ink p-3 font-black uppercase text-accent">Build louder. Convert smarter.</p>
      </div>

      <div class="grid gap-5 sm:grid-cols-3">
        {#each links as group}
          <div class="border-4 border-white bg-paper p-5 text-ink shadow-[6px_6px_0_#4db7ff]">
            <h2 class="mb-4 font-display text-2xl tracking-[-0.08em]">{group.title}</h2>
            <ul class="space-y-3">
              {#each group.items as item}
                <li><a class="font-bold hover:bg-accent" href="/">{item}</a></li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <div class="mt-10 flex flex-col justify-between gap-4 border-t-4 border-white pt-6 text-sm font-bold uppercase sm:flex-row">
      <p>© 2026 Procor. All rights reserved.</p>
      <p>Privacy • Terms • hello@procor.studio</p>
    </div>
  </div>
</footer>
