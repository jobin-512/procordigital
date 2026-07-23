<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const benefits = [
    { title: '$18K+ Tax Savings', description: 'Average annual tax savings for our clients. Smart planning beats last-minute scrambling.', stat: '$18K+' },
    { title: '48-Hour Turnaround', description: 'Get your books closed and reports delivered within 48 hours of month-end. No more waiting.', stat: '48 hrs' },
    { title: '100% Accuracy', description: 'Clean, accurate books you can trust for decisions. No guessing, no surprises.', stat: '100%' },
    { title: 'Clear Financial Picture', description: 'Understand exactly where your money is going. Real-time dashboards and insights.', stat: 'Full clarity' },
    { title: 'Strategic Guidance', description: 'CFO-level advice without the CFO salary. Budgeting, forecasting, and growth planning.', stat: 'CFO-level' },
    { title: 'Peace of Mind', description: 'Know your finances are handled by experts. Focus on growth, not paperwork.', stat: 'Zero stress' }
  ];
</script>

<section id="benefits" class="section-padding relative overflow-hidden" aria-labelledby="benefits-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-emerald/3 via-transparent to-blue/3 pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Why Choose Us</span>
      <h2 id="benefits-heading" class="mt-6 section-heading max-w-4xl mx-auto animate-text-reveal">
        The accounting that
        <br />
        <span class="text-gradient-emerald">drives growth.</span>
      </h2>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {#each benefits as benefit, i}
        <article use:reveal={{ y: 24, delay: i * 80 }} class="premium-card p-6 sm:p-7 relative overflow-hidden group">
          <div class="flex items-start justify-between gap-4 mb-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-sm font-semibold text-emerald">{i + 1}</span>
            <span class="text-gradient-blue text-2xl font-semibold tracking-tight">{benefit.stat}</span>
          </div>
          <h3 class="text-base font-semibold tracking-tight mb-2">{benefit.title}</h3>
          <p class="text-sm text-muted leading-relaxed">{benefit.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
