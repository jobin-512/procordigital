<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-padding bg-ink relative overflow-hidden">
  <div class="absolute inset-0 opacity-10 grid-pattern pointer-events-none"></div>
  
  <div class="container-brutal relative z-10">
    <div use:reveal class="brutal-card-accent card-padding-lg max-w-2xl mx-auto">
      <h2 class="font-bold text-2xl">
        Get weekly insights
      </h2>
      
      <p class="mt-3 text-slate">
        Practical tips and strategies delivered to your inbox. No spam, unsubscribe anytime.
      </p>
      
      <form class="mt-6 flex flex-col sm:flex-row gap-3">
        <input 
          type="email" 
          placeholder="your@email.com" 
          class="flex-1 border-2 border-ink bg-white px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-ink/20 rounded"
        />
        <button type="submit" class="brutal-button-primary whitespace-nowrap">
          Subscribe
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 2L11 13"/>
            <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
          </svg>
        </button>
      </form>
      
      <p class="mt-4 text-xs text-slate">8,729 subscribers • Weekly updates</p>
    </div>
  </div>
</section>
