<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  
  const featured = [
    { title: 'Why Your SEO Strategy Is GARBAGE', excerpt: 'Most SEO advice is TRASH. Here\'s what ACTUALLY WORKS based on real results.', category: 'SEO', color: 'electric' },
    { title: 'The Death of Cookie-Cutter Funnels', excerpt: 'Generic funnels are DEAD. Here\'s how we built one that drove 341% more conversions.', category: 'Growth', color: 'neon' }
  ];
</script>

<section class="relative section-padding-hero noise-overlay checkerboard overflow-hidden" aria-labelledby="blog-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-hazard/20 via-transparent to-electric/20 pointer-events-none"></div>
  
  <div class="absolute top-32 left-32 w-40 h-40 border-8 border-hazard/50 rotate-12 animate-pulse-fast" aria-hidden="true"></div>
  <div class="absolute bottom-32 right-32 w-32 h-32 border-8 border-electric/50 -rotate-12 animate-bounce-hard" aria-hidden="true"></div>

  <div class="container-brutal relative z-10">
    <div use:reveal class="max-w-4xl">
      <div class="section-label-hazard inline-flex mb-6 animate-shake">📝 THE BLOG</div>
      
      <h1 id="blog-hero-heading" class="hero-heading">
        BRUTAL<br/>
        <span class="gradient-electric">TRUTHS.</span><br/>
        <span class="gradient-plasma">ZERO FLUFF.</span>
      </h1>
      
      <p class="mt-8 max-w-2xl text-xl font-bold uppercase tracking-wide">
        Marketing that ACTUALLY WORKS. No theoretical fluff, just BATTLE-TESTED strategies from the trenches.
      </p>
    </div>
    
    <div use:reveal={{ delay: 300, y: 30 }} class="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="brutal-card-electric p-6 text-center">
        <p class="stat-number">142</p>
        <p class="mt-2 font-black uppercase text-xs">ARTICLES</p>
      </div>
      <div class="brutal-card-neon p-6 text-center">
        <p class="stat-number">47K</p>
        <p class="mt-2 font-black uppercase text-xs">READERS</p>
      </div>
      <div class="brutal-card-hazard p-6 text-center">
        <p class="stat-number">100%</p>
        <p class="mt-2 font-black uppercase text-xs">USEFUL</p>
      </div>
      <div class="brutal-card-toxic p-6 text-center">
        <p class="stat-number">ZERO</p>
        <p class="mt-2 font-black uppercase text-xs">FILLER</p>
      </div>
    </div>
  </div>
</section>

<div class="container-brutal py-8">
  <div use:reveal class="flex flex-wrap gap-3">
    <button class="brutal-button-neon text-sm">ALL POSTS</button>
    <button class="brutal-card hover:bg-plasma hover:text-white text-sm font-black uppercase p-3 transition-colors">GROWTH</button>
    <button class="brutal-card hover:bg-toxic hover:text-white text-sm font-black uppercase p-3 transition-colors">SEO</button>
    <button class="brutal-card hover:bg-cyber text-sm font-black uppercase p-3 transition-colors">DESIGN</button>
    <button class="brutal-card hover:bg-electric hover:text-white text-sm font-black uppercase p-3 transition-colors">STRATEGY</button>
  </div>
</div>

<section class="section-padding noise-overlay diagonal-lines" aria-labelledby="featured-heading">
  <div class="container-brutal">
    <div use:reveal class="mb-8">
      <div class="section-label-plasma inline-flex">🔥 FEATURED</div>
    </div>
    
    <div class="grid gap-6 lg:grid-cols-2">
      {#each featured as post, i}
        <article use:reveal={{ delay: i * 100, y: 30 }} class="brutal-card-{post.color} card-padding relative overflow-hidden rotate-{i % 2 === 0 ? '1' : '-1'} hover:rotate-0 transition-transform">
          <div class="absolute -top-8 -right-8 font-display text-[120px] opacity-10" aria-hidden="true">{i + 1}</div>
          
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <span class="border-4 border-white bg-white/20 px-3 py-1 text-xs font-black uppercase">{post.category}</span>
            </div>
            
            <h3 class="font-display text-2xl lg:text-3xl uppercase leading-tight">
              {post.title}
            </h3>
            
            <p class="mt-4 font-bold leading-relaxed">{post.excerpt}</p>
            
            <a href="#" class="mt-6 inline-flex items-center gap-2 font-black uppercase text-sm hover:gap-4 transition-all">
              READ THIS
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
