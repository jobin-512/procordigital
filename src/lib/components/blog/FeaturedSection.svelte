<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  
  const featured = [
    {
      title: 'Strategic SEO: A Framework for Sustainable Growth',
      excerpt: 'Building an SEO strategy that compounds over time. Learn the framework we use to drive organic traffic for clients.',
      category: 'SEO',
      readTime: '8 min',
      color: 'primary'
    },
    {
      title: 'Design Systems That Scale',
      excerpt: 'How to build design systems that grow with your product and team without becoming a maintenance burden.',
      category: 'Design',
      readTime: '12 min',
      color: 'secondary'
    }
  ];
</script>

<section class="section-padding noise-overlay grid-pattern" aria-labelledby="featured-heading">
  <div class="container-brutal">
    <div use:reveal class="mb-8">
      <div class="section-label">Featured</div>
      <h2 id="featured-heading" class="mt-4 font-semibold text-2xl">
        Editor's picks
      </h2>
    </div>
    
    <div class="grid gap-6 lg:grid-cols-2">
      {#each featured as post, i}
        <article use:reveal={{ delay: i * 100, y: 30 }} class="group relative overflow-hidden {post.color === 'primary' ? 'brutal-card-primary' : 'brutal-card-secondary'} card-padding">
          <div class="absolute top-6 right-6 font-bold text-6xl opacity-10 group-hover:opacity-20 transition-opacity" aria-hidden="true">{i + 1}</div>
          
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <span class="px-3 py-1 text-xs font-medium bg-white/20 rounded">{post.category}</span>
              <span class="text-xs font-medium text-white/70">{post.readTime} read</span>
            </div>
            
            <h3 class="font-bold text-xl lg:text-2xl leading-tight group-hover:translate-x-1 transition-transform">
              {post.title}
            </h3>
            
            <p class="mt-4 text-white/80 leading-relaxed">{post.excerpt}</p>
            
            <a href="#" class="mt-6 inline-flex items-center gap-2 font-medium text-sm group-hover:gap-3 transition-all">
              Read article
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
