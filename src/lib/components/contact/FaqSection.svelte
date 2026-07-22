<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  
  const faqs = [
    { q: 'How fast can you start?', a: 'Usually within 5 business days. We MOVE FAST because your competition isn\'t waiting.' },
    { q: 'Do you work with small businesses?', a: 'HELL YES. Packages starting at $5k. If you\'re serious about growth, we\'re serious about you.' },
    { q: 'What makes you different?', a: 'We don\'t do vanity metrics. We don\'t ghost. We DELIVER RESULTS or we don\'t get paid. Period.' },
    { q: 'Do you offer retainers?', a: 'Yes, and they\'re AWESOME. Monthly sprints, ongoing optimization, dedicated Slack. Think of us as your GROWTH ARMY.' }
  ];
</script>

<section class="section-padding-lg bg-void relative overflow-hidden" aria-labelledby="contact-faq-heading">
  <div class="absolute inset-0 checkerboard opacity-20 pointer-events-none"></div>
  
  <div class="container-brutal relative z-10">
    <div class="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
      <div use:reveal>
        <div class="section-label-hazard inline-flex">❓ FAQ</div>
        <h2 id="contact-faq-heading" class="mt-8 section-heading text-white">
          GOT<br/>
          <span class="gradient-plasma">QUESTIONS?</span>
        </h2>
        <p class="mt-6 max-w-sm text-lg font-bold uppercase text-white/70">
          We've got answers. And probably a sarcastic comment or two.
        </p>
      </div>
      
      <div class="space-y-4">
        {#each faqs as faq, i}
          <div use:reveal={{ delay: i * 100, y: 20 }} class="brutal-card-hazard p-6 rotate--{i % 2} hover:rotate-0 transition-transform">
            <h3 class="font-display text-xl uppercase flex items-start gap-4">
              <span class="w-10 h-10 border-4 border-ink bg-electric flex items-center justify-center text-sm font-black text-white flex-shrink-0">{i + 1}</span>
              {faq.q}
            </h3>
            <p class="mt-4 font-bold pl-14">{faq.a}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
