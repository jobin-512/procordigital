<script lang="ts">
  import HeroSection from '$lib/components/about/HeroSection.svelte';
  import StorySection from '$lib/components/about/StorySection.svelte';
  import TeamSection from '$lib/components/about/TeamSection.svelte';
  import ValuesSection from '$lib/components/about/ValuesSection.svelte';
  import CultureSection from '$lib/components/about/CultureSection.svelte';
  import CtaSection from '$lib/components/about/CtaSection.svelte';
</script>

<svelte:head>
  <title>About Us — Procor Digital</title>
  <meta name="description" content="We don't do boring. Started in a garage with caffeine and chaos. Now we're the team serious brands call when they're tired of fluff." />
</svelte:head>

<HeroSection />
<StorySection />
<TeamSection />
<ValuesSection />
<CultureSection />
<CtaSection />
