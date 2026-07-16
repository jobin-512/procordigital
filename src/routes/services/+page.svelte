<script lang="ts">
  import ServicesHeroSection from '$lib/components/services/ServicesHeroSection.svelte';
  import WebsiteDevelopment from '$lib/components/services/WebsiteDevelopment.svelte';
  import AeoGeo from '$lib/components/services/AeoGeo.svelte';
  import SeoService from '$lib/components/services/SeoService.svelte';
  import MobileApp from '$lib/components/services/MobileApp.svelte';
  import PayrollService from '$lib/components/services/PayrollService.svelte';
  import ComplianceService from '$lib/components/services/ComplianceService.svelte';
  import AccountingService from '$lib/components/services/AccountingService.svelte';
  import ServicesCtaSection from '$lib/components/services/ServicesCtaSection.svelte';
</script>

<svelte:head>
  <title>Services — Procor Digital</title>
  <meta
    name="description"
    content="Full-stack digital services: Website Development, AEO & GEO, SEO, Mobile Apps, Payroll, Compliance, and Accounting. One team. Zero silos."
  />
</svelte:head>

<ServicesHeroSection />
<WebsiteDevelopment />
<AeoGeo />
<SeoService />
<MobileApp />
<PayrollService />
<ComplianceService />
<AccountingService />
<ServicesCtaSection />
