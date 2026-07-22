<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: '$18K+ Tax Savings', description: 'Average annual tax savings for our clients. Smart planning beats last-minute scrambling.', stat: '$18K+', icon: '💰' },
    { title: '48-Hour Turnaround', description: 'Get your books closed and reports delivered within 48 hours of month-end. No more waiting.', stat: '48 hrs', icon: '⚡' },
    { title: '100% Accuracy', description: 'Clean, accurate books you can trust for decisions. No guessing, no surprises.', stat: '100%', icon: '✅' },
    { title: 'Clear Financial Picture', description: 'Understand exactly where your money is going. Real-time dashboards and insights.', stat: 'Full clarity', icon: '📊' },
    { title: 'Strategic Guidance', description: 'CFO-level advice without the CFO salary. Budgeting, forecasting, and growth planning.', stat: 'CFO-level', icon: '🎯' },
    { title: 'Peace of Mind', description: 'Know your finances are handled by experts. Focus on growth, not paperwork.', stat: 'Zero stress', icon: '😴' }
  ];
</script>

<section id="benefits" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-blue-pop/5 via-transparent to-blueprint/5 pointer-events-none"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 section-heading max-w-4xl mx-auto animate-text-reveal">
        The accounting that
        <br />
        <span class="gradient-text-blueprint">drives growth.</span>
      </h2>
    </div>

    <div class="benefit-grid">
      {#each benefits as benefit, i}
        <article use:reveal={{ y: 30, delay: i * 80 }} class="brutal-card-insane p-5 sm:p-6 bg-white relative overflow-hidden group">
          <div class="absolute -bottom-4 -right-4 size-20 border-4 border-ink bg-blue-pop rotate-12 opacity-10 group-hover:opacity-20 group-hover:rotate-0 transition-all duration-300 pointer-events-none"></div>
          <div class="flex items-start justify-between gap-3 mb-3">
            <span class="text-3xl">{benefit.icon}</span>
            <span class="font-display text-2xl tracking-[-0.06em] text-blue-pop">{benefit.stat}</span>
          </div>
          <h3 class="font-display text-xl tracking-[-0.06em] mb-2">{benefit.title}</h3>
          <p class="text-sm font-bold leading-snug text-ink/70">{benefit.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
