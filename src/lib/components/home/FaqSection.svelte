<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const faqs = [
    {
      q: 'Can you work with our existing website and stack?',
      a: 'Yes. We audit and improve your current foundation, or rebuild pages when the architecture is fundamentally limiting growth. We plug into Webflow, WordPress, Shopify, Framer, custom React, Svelte — whatever you run.',
    },
    {
      q: 'Do package prices include ad spend?',
      a: 'No. Package prices cover strategy, architecture, creative direction, buildout, automation, and weekly optimization. Media spend is billed directly by platforms. You own the accounts, you pay the bills, you keep the data.',
    },
    {
      q: 'How fast can we launch?',
      a: 'Strike Team (single system): assets live in 10 to 14 days. Growth Engine (3 systems): full deployment in 30 days. Scale Division (all 6): phased rollout over 45 to 60 days.',
    },
    {
      q: 'What if we need to pause or cancel?',
      a: 'Month-to-month. Zero lock-in. Cancel anytime with 5 days notice. You keep 100% of every asset we built: ad accounts, pixels, CRM data, creative files, code, dashboards, automations.',
    },
    {
      q: 'Who actually does the work?',
      a: 'Senior practitioners only. The strategist who diagnoses your funnel builds the system. No junior handoffs. You get direct Slack access to the people executing.',
    },
    {
      q: 'How do you measure success?',
      a: 'Revenue-tied KPIs only: SQLs generated, pipeline created, CAC reduced, ROAS improved, LTV increased, churn decreased. We set baselines in the audit and report weekly.',
    },
    {
      q: 'What industries do you not work with?',
      a: 'We decline gambling, adult, crypto and MLM, regulated pharma without compliance review, and anyone selling vaporware. We also turn down clients who want brand awareness without conversion infrastructure.',
    },
    {
      q: 'What is the audit process?',
      a: 'You fill a 12-minute intake. We run a 127-point diagnostic. You get a prioritized leak list with revenue impact scores. We recommend the fastest win. You decide: deploy that system, or walk away with the audit free.',
    },
  ];
</script>

<section id="faq" class="section-padding bg-ghost relative overflow-hidden" aria-labelledby="faq-heading">
  <div class="container-premium max-w-4xl relative z-10">
    <div use:reveal class="max-w-3xl mb-12 lg:mb-16">
      <span class="eyebrow">FAQ</span>
      <h2 id="faq-heading" class="section-heading mt-5">
        Questions
        <br />
        <span class="text-gradient-blue">before you</span>
        commit?
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-xl">
        Straight answers. No sales fluff. If your question is not here, the audit will cover it.
      </p>
    </div>

    <div class="space-y-3">
      {#each faqs as faq, index}
        <details
          use:reveal={{ y: 16, delay: index * 40 }}
          class="premium-card group overflow-hidden [&[open]]:border-blue/20 [&[open]]:bg-blue/5"
        >
          <summary class="flex cursor-pointer list-none items-center gap-4 p-5 select-none">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink text-sm font-medium text-blue transition-transform duration-300 group-open:rotate-45 group-open:bg-blue group-open:text-ink">+</span>
            <span class="text-sm font-medium">{faq.q}</span>
          </summary>
          <div class="px-5 pb-5 pl-17">
            <div class="divider mb-4"></div>
            <p class="text-sm text-muted leading-relaxed">{faq.a}</p>
          </div>
        </details>
      {/each}
    </div>

    <div use:reveal class="mt-10 text-center">
      <p class="text-sm text-muted mb-4">Still have questions?</p>
      <a href="/contact" class="btn-primary">
        Run the free audit instead
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>
