<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const values = [
    { title: 'Radical honesty', desc: 'We tell you what you need to hear, not what you want to hear. No sugarcoating, no politics.', icon: '01' },
    { title: 'Obsessive craft', desc: 'Every pixel, every word, every line of code is intentional. We obsess so you don\'t have to.', icon: '02' },
    { title: 'Revenue over vanity', desc: 'Trophies don\'t pay the bills. Your bottom line is the only metric that matters.', icon: '03' },
    { title: 'Zero bullshit', desc: 'No jargon, no vanity metrics, no hidden fees. Just work that works.', icon: '04' },
    { title: 'Relentless speed', desc: 'While others plan, we ship. Speed is a feature, not a tradeoff.', icon: '05' },
    { title: 'Ownership mentality', desc: 'We treat your business like our own. Skin in the game. No exceptions.', icon: '06' },
  ];
</script>

<section id="values" class="section-padding bg-ink text-white-pure relative overflow-hidden">
  <div class="absolute inset-0 bg-grid-subtle-dark pointer-events-none"></div>
  <div class="absolute top-10 right-10 w-[400px] h-[400px] bg-blue/5 rounded-full blur-[120px] pointer-events-none animate-float" style="animation-delay: -3s;"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="text-center mb-12 lg:mb-16">
      <span class="badge-dark">Principles</span>
      <h2 id="values-heading" class="section-heading mt-5 text-white-pure">
        Rules we <span class="text-gradient-blue">live by</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-white/50 max-w-xl mx-auto">
        Six principles that guide every sprint, every strategy, every relationship.
      </p>
    </div>

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each values as v, i}
        <article use:reveal={{ y: 20, delay: i * 60 }} class="premium-card-dark p-6 group relative overflow-hidden">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-xs font-semibold text-blue-light">{v.icon}</span>
            <h3 class="text-base font-semibold tracking-tight text-white-pure">{v.title}</h3>
          </div>
          <p class="text-sm text-white/60 leading-relaxed">{v.desc}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
