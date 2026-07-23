<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="relative section-padding-hero overflow-hidden bg-ink" aria-labelledby="seo-cta-heading">
  <div class="absolute inset-0 bg-grid-subtle-dark pointer-events-none"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue/5 to-emerald/5 rounded-full blur-3xl pointer-events-none animate-float"></div>

  <div use:reveal={{ scale: 0.97 }} class="container-narrow relative z-10 text-center">
    <span class="badge-dark mb-6">Ready to rank?</span>

    <h2 id="seo-cta-heading" class="hero-heading text-white animate-text-reveal">
      Dominate organic
      <br />
      <span class="text-gradient-blue">search results.</span>
    </h2>

    <p class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
      Get a free SEO audit. We will show you exactly where you are losing traffic and how to fix it.
    </p>

    <form class="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row" aria-label="SEO audit request">
      <label class="sr-only" for="seo-email">Email address</label>
      <input
        id="seo-email"
        class="input-premium-dark flex-1"
        type="email"
        placeholder="you@company.com"
        required
      />
      <button class="btn-blue whitespace-nowrap" type="submit">
        Get free SEO audit
      </button>
    </form>

    <p class="mt-5 text-xs font-medium text-white/40">
      Free audit. No obligation. Technical report, keyword opportunities, and growth roadmap.
    </p>
  </div>
</section>
