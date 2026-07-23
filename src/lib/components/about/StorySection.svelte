<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-padding bg-ghost relative overflow-hidden" aria-labelledby="story-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-emerald/5 to-blue/5 rounded-full blur-[120px] pointer-events-none animate-float"></div>

  <div class="container-premium relative z-10">
    <div use:reveal class="text-center mb-14 lg:mb-18">
      <span class="eyebrow">Our story</span>
      <h2 id="story-heading" class="section-heading mt-5">
        Built from <span class="text-gradient-emerald">scratch</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted max-w-xl mx-auto">
        Three chapters. Same mission: make growth measurable and repeatable.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
      <article use:reveal={{ y: 24, delay: 100 }} class="premium-card p-6 sm:p-8 relative overflow-hidden group">
        <div class="text-6xl font-display font-semibold tracking-tight text-border select-none absolute -top-4 -right-2 leading-none">2019</div>
        <span class="badge mb-4">Chapter 1</span>
        <h3 class="text-lg font-semibold tracking-tight mb-3">Ignition</h3>
        <p class="text-sm text-muted leading-relaxed">
          Started in a garage with too much coffee and a hatred for fluff marketing. Built different from day one — no retainers, no vanity metrics, just results.
        </p>
      </article>

      <article use:reveal={{ y: 24, delay: 200 }} class="premium-card p-6 sm:p-8 relative overflow-hidden group">
        <div class="text-6xl font-display font-semibold tracking-tight text-border select-none absolute -top-4 -right-2 leading-none">2022</div>
        <span class="badge mb-4">Chapter 2</span>
        <h3 class="text-lg font-semibold tracking-tight mb-3">Growth</h3>
        <p class="text-sm text-muted leading-relaxed">
          Word got out. Projects grew. We hired brilliant people who hate losing as much as we do. Built a team that thinks like owners, not employees.
        </p>
      </article>

      <article use:reveal={{ y: 24, delay: 300 }} class="premium-card p-6 sm:p-8 relative overflow-hidden group">
        <div class="text-6xl font-display font-semibold tracking-tight text-border select-none absolute -top-4 -right-2 leading-none">Now</div>
        <span class="badge mb-4">Chapter 3</span>
        <h3 class="text-lg font-semibold tracking-tight mb-3">Scale</h3>
        <p class="text-sm text-muted leading-relaxed">
          47+ clients. $24M added to their bottom lines. Same hungry team. No massages from us. Just systems that print revenue.
        </p>
      </article>
    </div>
  </div>
</section>
