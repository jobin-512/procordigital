<script lang="ts">
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import SmoothScroll from '$lib/components/layout/SmoothScroll.svelte';

  import "../app.css";  

  let { children } = $props();
</script>

<svelte:head>
  <title>Procor Digital — Neo Brutalist Marketing Solutions</title>
  <meta
    name="description"
    content="Digital marketing packages and solutions for websites, SEO, ads, automations, funnels and growth problems."
  />
</svelte:head>

<SmoothScroll />
<Header />
<main>
  {@render children()}
</main>
<Footer />
