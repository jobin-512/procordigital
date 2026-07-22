<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  
  const categories = [
    { name: 'All Posts', active: true },
    { name: 'Growth', active: false },
    { name: 'SEO', active: false },
    { name: 'Design', active: false },
    { name: 'Strategy', active: false },
    { name: 'Automation', active: false }
  ];
</script>

<div class="container-brutal py-8">
  <div use:reveal class="flex flex-wrap gap-3">
    {#each categories as cat}
      <button 
        class="px-5 py-2 font-medium text-sm transition-all rounded {cat.active 
          ? 'brutal-button-primary' 
          : 'brutal-card border-ink/10 hover:border-primary/30 hover:bg-primary/5'}" 
        aria-pressed={cat.active}
      >
        {cat.name}
      </button>
    {/each}
  </div>
</div>
