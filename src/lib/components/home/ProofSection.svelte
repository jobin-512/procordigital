<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  const stats = [
    { value: '3.8x', label: 'return on ad sprint' },
    { value: '+214%', label: 'organic traffic growth' },
    { value: '19%', label: 'checkout conversion lift' }
  ];
</script>

<section id="proof" class="py-16 lg:py-24">
  <div class="container-brutal">
    <div use:reveal={{ scale: 0.96 }} class="brutal-card-blue overflow-hidden">
      <div class="grid lg:grid-cols-[1fr_1.2fr]">
        <div class="border-b-4 border-ink bg-accent p-8 text-ink lg:border-b-0 lg:border-r-4 lg:p-10">
          <span class="section-label bg-white">Proof board</span>
          <h2 class="mt-6 font-display text-4xl leading-none tracking-[-0.08em] sm:text-6xl">Numbers that do not whisper.</h2>
          <p class="mt-5 text-lg font-bold">A sample of the outcomes our home page is designed to showcase for your future case studies.</p>
        </div>
        <div class="p-6 sm:p-10">
          <div class="grid gap-5 sm:grid-cols-3">
            {#each stats as stat}
              <div class="border-4 border-white bg-ink p-5 text-center shadow-[5px_5px_0_#4db7ff]">
                <p class="font-display text-5xl tracking-[-0.08em] text-accent">{stat.value}</p>
                <p class="mt-2 text-sm font-black uppercase">{stat.label}</p>
              </div>
            {/each}
          </div>
          <blockquote class="mt-6 border-4 border-white bg-white p-6 text-ink shadow-[6px_6px_0_#07111f]">
            <p class="font-display text-3xl leading-none tracking-[-0.08em]">“Procor made our funnel obvious, fast and profitable. The new landing system paid for itself in the first campaign.”</p>
            <footer class="mt-4 font-black uppercase">— Maya R., SaaS Founder</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>
