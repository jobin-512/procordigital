<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  
  const testimonials = [
    {
      quote: 'Outstanding work. They took the time to understand our business and delivered results that exceeded expectations.',
      author: 'Sarah Chen',
      role: 'CEO, RetailX',
      color: 'primary'
    },
    {
      quote: 'Professional, responsive, and highly skilled. Our project was delivered on time and on budget.',
      author: 'Michael Brooks',
      role: 'CFO, FinanceFlow',
      color: 'accent'
    },
    {
      quote: 'They don\'t just build websites—they build partnerships. Always available, always helpful.',
      author: 'Dr. James Miller',
      role: 'CMO, HealthFirst',
      color: 'secondary'
    }
  ];
</script>

<section class="section-padding-lg bg-paper-warm relative overflow-hidden" aria-labelledby="testimonials-heading">
  <div class="absolute inset-0 opacity-50 dot-pattern pointer-events-none"></div>
  
  <div class="container-brutal relative z-10">
    <div use:reveal class="text-center mb-12">
      <div class="section-label-accent">Client Feedback</div>
      <h2 id="testimonials-heading" class="mt-6 section-heading">
        What clients <span class="gradient-text-accent">say</span>
      </h2>
    </div>
    
    <div class="grid gap-6 md:grid-cols-3">
      {#each testimonials as t, i}
        <div use:reveal={{ delay: i * 100, y: 30 }} class="brutal-card card-padding border-{t.color}/20">
          <span class="text-5xl opacity-10 font-serif absolute top-4 left-4" aria-hidden="true">"</span>
          <p class="relative z-10 font-medium text-ink leading-relaxed">
            {t.quote}
          </p>
          <div class="mt-6 pt-6 border-t-2 border-ink/10">
            <p class="font-semibold">{t.author}</p>
            <p class="text-sm text-slate">{t.role}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
