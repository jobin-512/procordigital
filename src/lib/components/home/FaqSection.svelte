<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const faqs = [
    [
      'Can you work with our existing website/stack?',
      'Yes. We audit and improve your current foundation, or rebuild pages when the architecture is fundamentally limiting growth. We plug into Webflow, WordPress, Shopify, Framer, custom React/Svelte — whatever you run. No migration required unless it\'s the bottleneck.'
    ],
    [
      'Do package prices include ad spend?',
      'No. Package prices cover strategy, architecture, creative direction, buildout, automation, and weekly optimization. Media spend is billed directly by platforms (Google, Meta, LinkedIn, etc.) — you own the accounts, you pay the bills, you keep the data.'
    ],
    [
      'How fast can we launch?',
      'Strike Team (single system): assets live in 10–14 days. Growth Engine (3 systems): full deployment in 30 days. Scale Division (all 6): phased rollout over 45–60 days. Speed depends on your asset readiness and approval velocity — we move at the speed of your decisions.'
    ],
    [
      'What if we need to pause or cancel?',
      'Month-to-month. Zero lock-in. Cancel anytime with 5 days\' notice. You keep 100% of every asset we built: ad accounts, pixels, CRM data, creative files, code, dashboards, automations. Zero vendor lock-in. Ever.'
    ],
    [
      'Who actually does the work?',
      'Senior practitioners only. The strategist who diagnoses your funnel builds the system. No junior handoffs. No account managers learning on your dime. You get direct Slack access to the people executing. Typical pod: 1 Growth Lead + 2 Specialists + 1 Creative Director.'
    ],
    [
      'How do you measure success?',
      'Revenue-tied KPIs only: SQLs generated, pipeline created, CAC reduced, ROAS improved, LTV increased, churn decreased. We set baselines in the audit, define kill criteria for every experiment, and report weekly. No vanity metrics. No "brand awareness" cop-outs.'
    ],
    [
      'What industries do you NOT work with?',
      'We decline: gambling, adult, crypto/mlm, regulated pharma without compliance review, and anyone selling vaporware. We also turn down clients who want "brand awareness" without conversion infrastructure — that\'s not a growth problem, that\'s a budget waste.'
    ],
    [
      'What\'s the audit process?',
      '1) You fill a 12-minute intake. 2) We run 127-point diagnostic (tracking, conversion, acquisition, retention, creative, tech). 3) You get a prioritized leak list with revenue impact scores. 4) We recommend the fastest win. 5) You decide: deploy that system, or walk away with the audit free.'
    ]
  ];
</script>

<section id="faq" class="relative section-padding-lg noise-overlay grid-pattern" aria-labelledby="faq-heading">
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" aria-hidden="true"></div>

  <div class="container-brutal max-w-5xl relative z-10">
    <div use:reveal class="mb-12 lg:mb-16 text-center">
      <span class="section-label-insane">Before the bolt hits</span>
      <h2 id="faq-heading" class="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.08em] sm:text-6xl lg:text-8xl animate-text-reveal">
        Questions
        <br />
        <span class="gradient-text-hot">before the</span>
        <span class="gradient-text-cyan ml-2">bolt hits?</span>
      </h2>
      <p class="mt-5 max-w-2xl mx-auto text-lg font-bold leading-snug text-ink/70">
        Straight answers. No sales fluff. If your question isn't here, the audit will cover it.
      </p>
    </div>

    <div class="grid gap-4">
      {#each faqs as faq, index}
        <details use:reveal={{ y: 24, delay: index * 60 }} class="brutal-card-insane group bg-white p-5 open:bg-blue-pale relative overflow-hidden">
          <div class="absolute -top-3 -right-3 size-12 border-4 border-ink bg-accent/10 rotate-6 opacity-0 group-hover:opacity-100 group-open:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>

          <summary class="cursor-pointer list-none font-display text-2xl sm:text-3xl tracking-[-0.08em] relative z-10 flex items-center gap-4">
            <span class="mr-2 inline-block w-10 h-10 border-3 border-ink bg-blueprint flex items-center justify-center font-black text-white transition-transform group-open:rotate-45 group-open:bg-accent group-open:text-ink">+</span>
            {faq[0]}
          </summary>

          <div class="mt-4 border-t-4 border-ink pt-4 relative z-10 animate-slide-down">
            <p class="text-lg font-bold leading-snug text-ink/80">{faq[1]}</p>
          </div>
        </details>
      {/each}
    </div>

    <div use:reveal={{ delay: 600, y: 20 }} class="mt-10 lg:mt-16 text-center">
      <p class="font-black uppercase tracking-widest text-sm mb-4 gradient-text-ink">Still have questions?</p>
      <a href="#audit" class="brutal-button-insane inline-flex">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M17 15v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6"/>
        </svg>
        Run the free audit instead
      </a>
    </div>
  </div>
</section>