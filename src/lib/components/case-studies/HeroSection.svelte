<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  
  const cases = [
    { client: 'TechCorp', title: '$2.4M Pipeline in 90 Days', results: ['847% ROI', '341% more leads'], color: 'electric' },
    { client: 'RetailX', title: '12x Revenue Growth', results: ['12x revenue', '45% CVR'], color: 'plasma' },
    { client: 'HealthFirst', title: 'HIPAA Compliant Domination', results: ['23 locations #1', '340% patients'], color: 'neon' },
    { client: 'FinanceFlow', title: '847% Ad ROI', results: ['$1.2M from $15k', '95% attribution'], color: 'hazard' }
  ];
  
  const testimonials = [
    { quote: 'They did TERRIFYING work. Revenue up 12x.', author: 'Sarah Chen', role: 'CEO' },
    { quote: 'Finally, an agency that delivers on BS.', author: 'Michael Brooks', role: 'CFO' },
    { quote: 'From nowhere to #1 across the board.', author: 'Dr. James Miller', role: 'CMO' }
  ];
</script>

<section class="relative section-padding-hero noise-overlay checkerboard overflow-hidden" aria-labelledby="cases-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-plasma/20 via-transparent to-electric/20 pointer-events-none"></div>
  
  <div class="absolute top-20 left-1/4 w-48 h-48 border-8 border-plasma/50 rotate-45 animate-pulse-fast" aria-hidden="true"></div>
  <div class="absolute bottom-32 right-20 w-40 h-40 border-8 border-electric/50 -rotate-12 animate-bounce-hard" aria-hidden="true"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="max-w-4xl">
      <div class="section-label-plasma inline-flex mb-6 animate-shake">🏆 WINS</div>
      
      <h1 id="cases-hero-heading" class="hero-heading">
        RESULTS<br/>
        <span class="gradient-electric">NOT</span><br/>
        <span class="gradient-neon">EXCUSES</span>
      </h1>
      
      <p class="mt-8 max-w-2xl text-xl font-bold uppercase tracking-wide">
        REAL CLIENTS. REAL CHAOS. REAL RESULTS. NO VAGUE BS. JUST NUMBERS THAT MATTER.
      </p>
      
      <div class="mt-10 flex flex-col gap-4 sm:flex-row">
        <a href="#cases" class="brutal-button">
          <span class="text-xl">🔥</span>
          SEE THE WINS
        </a>
        <a href="/contact" class="brutal-button-outline">
          <span class="text-xl">🎯</span>
          BECOME A WIN
        </a>
      </div>
    </div>
    
    <div use:reveal={{ delay: 300, y: 30 }} class="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="brutal-card-electric p-6 text-center animate-pulse-fast">
        <p class="stat-number">47</p>
        <p class="mt-2 font-black uppercase text-xs">CASES</p>
      </div>
      <div class="brutal-card-plasma p-6 text-center animate-bounce-hard">
        <p class="stat-number">$24M</p>
        <p class="mt-2 font-black uppercase text-xs">GENERATED</p>
      </div>
      <div class="brutal-card-neon p-6 text-center animate-shake">
        <p class="stat-number">847%</p>
        <p class="mt-2 font-black uppercase text-xs">AVG ROI</p>
      </div>
      <div class="brutal-card-toxic p-6 text-center">
        <p class="stat-number">ZERO</p>
        <p class="mt-2 font-black uppercase text-xs">FAILURES</p>
      </div>
    </div>
  </div>
</section>

<section id="cases" class="section-padding-lg noise-overlay diagonal-lines" aria-labelledby="cases-grid-heading">
  <div class="container-brutal">
    <div use:reveal class="mb-12 text-center">
      <div class="section-label-electric inline-flex">💥 THE WINS</div>
      <h2 id="cases-grid-heading" class="mt-6 section-heading">
        PROOF IN<br/>
        <span class="gradient-plasma">NUMBERS</span>
      </h2>
    </div>
    
    <div class="grid gap-8">
      {#each cases as study, i}
        <article use:reveal={{ delay: i * 100, y: 40 }} class="brutal-card-{study.color} card-padding-lg relative overflow-hidden rotate-{i % 2 === 0 ? '1' : '-1'} hover:rotate-0 transition-transform">
          <div class="absolute -top-8 -right-8 font-display text-[100px] opacity-10" aria-hidden="true">{i + 1}</div>
          
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <span class="px-4 py-2 text-xs font-black uppercase bg-white/20 border-2 border-white">{study.client}</span>
            </div>
            
            <h3 class="font-display text-3xl lg:text-4xl uppercase leading-tight">
              {study.title}
            </h3>
            
            <div class="mt-6 flex flex-wrap gap-3">
              {#each study.results as result}
                <span class="px-4 py-2 text-sm font-black uppercase border-4 border-white bg-white/10">{result}</span>
              {/each}
            </div>
            
            <a href="#" class="mt-6 inline-flex items-center gap-2 font-black uppercase text-sm hover:gap-4 transition-all">
              READ FULL CASE
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section-padding-lg bg-electric relative overflow-hidden" aria-labelledby="testimonials-heading">
  <div class="absolute inset-0 checkerboard opacity-20 pointer-events-none"></div>
  
  <div class="container-brutal relative z-10">
    <div use:reveal class="text-center mb-12">
      <div class="section-label inline-flex bg-white text-ink">💬 FEEDBACK</div>
      <h2 id="testimonials-heading" class="mt-6 section-heading text-white">
        THEY <span class="text-outline">SAID</span> IT
      </h2>
    </div>
    
    <div class="grid gap-6 md:grid-cols-3">
      {#each testimonials as t, i}
        <div use:reveal={{ delay: i * 100, y: 30 }} class="brutal-card-void card-padding rotate--{i} hover:rotate-0 transition-transform">
          <span class="text-6xl font-display opacity-20 absolute top-4 left-4">"</span>
          <p class="relative z-10 font-black text-lg leading-relaxed">
            {t.quote}
          </p>
          <div class="mt-6 pt-6 border-t-4 border-white/20">
            <p class="font-display text-lg uppercase">{t.author}</p>
            <p class="text-sm font-bold text-white/60">{t.role}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
