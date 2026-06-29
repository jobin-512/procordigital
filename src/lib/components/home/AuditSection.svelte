<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const checks = [
    { label: 'Tracking', score: '91%', width: '91%' },
    { label: 'Offer clarity', score: '64%', width: '64%' },
    { label: 'Page speed', score: '78%', width: '78%' },
    { label: 'Lead nurture', score: '39%', width: '39%' }
  ];
</script>

<section class="py-16 lg:py-24">
  <div class="container-brutal grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    <div use:reveal={{ x: -36 }}>
      <span class="section-label">Free audit preview</span>
      <h2 class="mt-6 font-display text-4xl leading-none tracking-[-0.08em] sm:text-6xl">We find the revenue leaks hiding in plain sight.</h2>
      <p class="mt-5 text-lg font-bold leading-snug">
        Before selling you a package, Procor scores your funnel across visibility, conversion, analytics and follow-up. Then we recommend the fastest win.
      </p>
      <a class="brutal-button-blue mt-7" href="#contact">Request audit</a>
    </div>

    <div use:reveal={{ x: 40, delay: 120 }} class="brutal-card bg-white p-5 sm:p-7">
      <div class="mb-5 flex items-center justify-between border-4 border-ink bg-blue-pale p-4">
        <p class="font-black uppercase">Procor leak scanner</p>
        <p class="border-3 border-ink bg-accent px-3 py-1 font-black">LIVE</p>
      </div>
      <div class="grid gap-4">
        {#each checks as check, index}
          <div class="border-4 border-ink bg-paper p-4" use:reveal={{ y: 18, delay: 160 + index * 90 }}>
            <div class="mb-2 flex justify-between font-black uppercase">
              <span>{check.label}</span>
              <span>{check.score}</span>
            </div>
            <div class="h-6 border-4 border-ink bg-white">
              <div class="h-full bg-blueprint animate-meter-pulse" style={`width: ${check.width}`}></div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
