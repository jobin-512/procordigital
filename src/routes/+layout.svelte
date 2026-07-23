<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import SmoothScroll from '$lib/components/layout/SmoothScroll.svelte';

  import "../app.css";

  let { children } = $props();

  let loaded = $state(false);
  let theme = $state<'light' | 'dark'>('light');
  let scrollBar: HTMLDivElement;

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }

  onMount(() => {
    setTimeout(() => { loaded = true; }, 400);

    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      document.documentElement.style.setProperty('--scroll-progress', progress.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<svelte:head>
  <title>Procor Digital — Growth Systems for Modern Brands</title>
  <meta
    name="description"
    content="Digital growth systems for B2B and DTC brands. Strategy, architecture, build, and iteration — no fluff, just pipeline."
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<!-- Page Loader -->
<div class="page-loader" class:loaded>
  <div class="page-loader__text">Procor Digital</div>
</div>

<!-- Scroll Progress -->
<div bind:this={scrollBar} class="scroll-progress"></div>

<!-- Skip to Content -->
<a href="#main-content" class="skip-link">Skip to content</a>

<SmoothScroll />
<Header {theme} {toggleTheme} />
<main id="main-content">
  {@render children()}
</main>
<Footer />
