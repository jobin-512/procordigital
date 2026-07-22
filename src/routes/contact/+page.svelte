<script lang="ts">
  import HeroSection from '$lib/components/contact/HeroSection.svelte';
  import FaqSection from '$lib/components/contact/FaqSection.svelte';
  import LocationsSection from '$lib/components/contact/LocationsSection.svelte';
  import CtaSection from '$lib/components/about/CtaSection.svelte';
</script>

<svelte:head>
  <title>Contact — Procor Digital</title>
  <meta name="description" content="Ready to break some rules? Let's go. We respond in under 24 hours." />
</svelte:head>

<HeroSection />
<LocationsSection />
<FaqSection />
<CtaSection />
