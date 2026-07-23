<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const cases = [
    { client: 'TechCorp', title: '$2.4M Pipeline in 90 Days', results: ['847% ROI', '341% more leads', '1,247% ROAS'] },
    { client: 'RetailX', title: '12x Revenue Growth', results: ['12x revenue', '45% CVR', '98 Lighthouse score'] },
    { client: 'HealthFirst', title: 'Compliant Growth at Scale', results: ['23 locations #1', '340% patients', 'Zero compliance issues'] },
    { client: 'FinanceFlow', title: '847% Ad ROI in 60 Days', results: ['$1.2M revenue', '95% attribution', '3.8x ROAS'] },
  ];

  const testimonials = [
    { quote: 'They did outstanding work. Revenue up 12x in the first quarter. Finally, a team that delivers on their promises.', author: 'Sarah Chen', role: 'CEO, RetailX' },
    { quote: 'Professional, responsive, and brutally effective. Our pipeline went from flat to overflowing in 90 days.', author: 'Michael Brooks', role: 'CFO, FinanceFlow' },
    { quote: 'From nowhere to #1 across the board. They don\'t just build websites — they build growth systems.', author: 'Dr. James Miller', role: 'CMO, HealthFirst' },
  ];
</script>

<section class="relative section-padding-hero overflow-hidden bg-white" aria-labelledby="cases-hero-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue/8 to-emerald/5 rounded-full blur-[100px] pointer-events-none animate-float" style="animation-delay: -2s;"></div>
  <div class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-emerald/5 to-transparent rounded-full blur-[80px] pointer-events-none animate-float" style="animation-delay: -4s;"></div>

  <div class="container-premium relative z-10 pt-16 lg:pt-24">
    <div use:reveal class="max-w-4xl">
      <span class="eyebrow">Case studies</span>
      <h1 id="cases-hero-heading" class="hero-heading mt-6 max-w-4xl">
        Results <span class="text-gradient-blue">not</span> excuses
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Real clients. Real challenges. Real numbers. Every case study is a measurable, verifiable outcome.
      </p>
      <div class="mt-8 flex flex-col gap-4 sm:flex-row">
        <a href="#cases-grid" class="btn-primary">
          See the wins
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="/contact" class="btn-outline">Become a case study</a>
      </div>
    </div>

    <div use:reveal={{ delay: 300, y: 20 }} class="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="premium-card p-6 text-center">
        <p class="text-gradient-blue text-3xl font-semibold tracking-tight">47</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Case studies</p>
      </div>
      <div class="premium-card p-6 text-center">
        <p class="text-gradient-emerald text-3xl font-semibold tracking-tight">$24M</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Revenue generated</p>
      </div>
      <div class="premium-card p-6 text-center">
        <p class="text-gradient-blue text-3xl font-semibold tracking-tight">847%</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Avg ROI delivered</p>
      </div>
      <div class="premium-card p-6 text-center">
        <p class="text-gradient-emerald text-3xl font-semibold tracking-tight">Zero</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Failures</p>
      </div>
    </div>
  </div>
</section>

<section id="cases-grid" class="section-padding bg-ghost relative overflow-hidden">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="text-center mb-12 lg:mb-16">
      <span class="eyebrow">Our work</span>
      <h2 class="section-heading mt-5">
        Proof in <span class="text-gradient-blue">numbers</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-xl mx-auto">
        Every engagement is a packaged growth system with measurable outcomes.
      </p>
    </div>

    <div class="grid gap-5">
      {#each cases as study, i}
        <article use:reveal={{ y: 20, delay: i * 80 }} class="premium-card p-6 sm:p-8 relative overflow-hidden group">
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="badge">{study.client}</span>
          </div>

          <h3 class="text-xl sm:text-2xl font-semibold tracking-tight">{study.title}</h3>

          <div class="mt-6 flex flex-wrap gap-2">
            {#each study.results as result}
              <span class="rounded-full bg-blue/8 px-3.5 py-1.5 text-xs font-semibold text-blue-dark">{result}</span>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<section id="testimonials" class="section-padding bg-ink text-white-pure relative overflow-hidden">
  <div class="absolute inset-0 bg-grid-subtle-dark pointer-events-none"></div>
  <div class="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gradient-to-l from-blue/5 to-transparent rounded-full blur-[100px] pointer-events-none animate-float" style="animation-delay: -3s;"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="text-center mb-12 lg:mb-16">
      <span class="badge-dark">Testimonials</span>
      <h2 class="section-heading mt-5 text-white-pure">
        What clients <span class="text-gradient-blue">say</span>
      </h2>
    </div>

    <div class="grid gap-5 md:grid-cols-3">
      {#each testimonials as t, i}
        <div use:reveal={{ y: 20, delay: i * 80 }} class="premium-card-dark p-6 relative overflow-hidden">
          <span class="text-5xl font-serif leading-none text-blue/20 absolute top-3 left-4" aria-hidden="true">"</span>
          <p class="relative z-10 text-sm text-white/70 leading-relaxed mt-4">
            {t.quote}
          </p>
          <div class="mt-6 pt-5 border-t border-white/10">
            <p class="text-sm font-semibold text-white-pure">{t.author}</p>
            <p class="text-xs text-white/40">{t.role}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
