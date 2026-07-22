<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  
  const posts = [
    { title: 'AEO Playbook: Win AI Search', excerpt: 'How to dominate Google AI Overview, ChatGPT, and generative search.', category: 'SEO', color: 'electric' },
    { title: 'CRO: A Brutal Guide', excerpt: 'Forget A/B testing buttons. Here\'s how we approach CRO as a WEAPON.', category: 'Growth', color: 'plasma' },
    { title: 'Automation That Works', excerpt: 'How to build lean, mean, revenue-generating automation machines.', category: 'Tech', color: 'neon' },
    { title: 'Design Psychology', excerpt: 'Why ugly beats pretty, bold beats safe, in conversion design.', category: 'Design', color: 'cyber' },
    { title: 'Payroll Done Right', excerpt: 'Painful lessons from setting up payroll for 50+ companies.', category: 'Ops', color: 'hazard' },
    { title: 'SEO vs GEO Battle', excerpt: 'Traditional SEO is evolving. Win in the age of AI search.', category: 'SEO', color: 'toxic' }
  ];
</script>

<section class="section-padding-lg bg-void relative overflow-hidden" aria-labelledby="all-posts-heading">
  <div class="absolute inset-0 checkerboard opacity-20 pointer-events-none"></div>
  
  <div class="container-brutal relative z-10">
    <div use:reveal class="mb-8">
      <div class="section-label inline-flex bg-white">📚 ALL POSTS</div>
    </div>
    
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each posts as post, i}
        <article use:reveal={{ delay: i * 80, y: 30 }} class="group relative overflow-hidden border-4 border-ink bg-white card-padding hover:bg-{post.color} transition-all duration-300 rotate-{i % 3 - 1} hover:rotate-0">
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 text-xs font-black uppercase {post.color === 'electric' ? 'bg-electric' : post.color === 'plasma' ? 'bg-plasma' : post.color === 'neon' ? 'bg-neon' : post.color === 'cyber' ? 'bg-cyber' : post.color === 'hazard' ? 'bg-hazard' : 'bg-toxic'} text-white">{post.category}</span>
            </div>
            
            <h3 class="font-display text-lg uppercase leading-tight group-hover:text-white transition-colors">
              {post.title}
            </h3>
            
            <p class="mt-3 text-sm font-bold group-hover:text-white/80 transition-colors">{post.excerpt}</p>
          </div>
        </article>
      {/each}
    </div>
    
    <div use:reveal={{ delay: 600, y: 40 }} class="mt-12 text-center">
      <button class="brutal-button-outline">
        LOAD MORE
        <span class="text-xl">👇</span>
      </button>
    </div>
  </div>
</section>

<section class="section-padding relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-electric via-toxic to-plasma"></div>
  <div class="absolute inset-0 checkerboard opacity-30"></div>
  
  <div class="container-brutal relative z-10">
    <div use:reveal class="brutal-card-void card-padding-lg max-w-2xl mx-auto text-center">
      <span class="text-5xl mb-4 block">📬</span>
      <h2 class="font-display text-3xl uppercase">GET THE CHAOS NEWSLETTER</h2>
      
      <p class="mt-4 font-bold uppercase text-white/70">
        Weekly insights, zero spam. Unsubscribe anytime (but you won't want to).
      </p>
      
      <form class="mt-6 flex flex-col sm:flex-row gap-3">
        <input type="email" placeholder="YOUR EMAIL" class="flex-1 border-4 border-white bg-transparent px-6 py-4 font-bold uppercase focus:outline-none focus:ring-4 focus:ring-white/30" />
        <button type="submit" class="brutal-button-neon whitespace-nowrap">
          SUBSCRIBE
          <span class="text-xl">⚡</span>
        </button>
      </form>
      
      <p class="mt-4 text-xs font-bold text-white/50">8,729 MARKETING MANIACS SUBSCRIBED</p>
    </div>
  </div>
</section>
