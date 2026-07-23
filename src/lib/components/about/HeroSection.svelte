<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero overflow-hidden bg-white" aria-labelledby="about-hero-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue/8 to-transparent rounded-full blur-[100px] pointer-events-none animate-float" style="animation-delay: -2s;"></div>
  <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-emerald/5 to-transparent rounded-full blur-[80px] pointer-events-none animate-float" style="animation-delay: -4s;"></div>

  <div class="container-premium relative z-10 pt-16 lg:pt-24">
    <div class="grid gap-12 lg:gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <div use:reveal>
        <span class="eyebrow">About Procor</span>
        <h1 id="about-hero-heading" class="hero-heading mt-6 max-w-4xl">
          We build systems
          <br />
          <span class="text-gradient-blue">not busy work.</span>
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Started with a simple belief: digital growth should be measurable, accountable, and built to last. No vanity metrics. No handoff degradation. Just systems that print predictable revenue.
        </p>
        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="#values" class="btn-primary">
            Our values
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#team" class="btn-outline">Meet the team</a>
        </div>
      </div>

      <div use:reveal={{ delay: 200, y: 30 }} class="relative">
        <div class="premium-card p-8 sm:p-10 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue/5 to-transparent rounded-bl-full pointer-events-none"></div>
          <div class="relative z-10">
            <h2 class="section-heading text-2xl sm:text-3xl mb-6">
              <span class="text-gradient-blue">Built different</span>
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-sm font-semibold text-blue-dark">01</span>
                <div>
                  <p class="font-semibold text-sm">Results over activity</p>
                  <p class="text-sm text-muted mt-0.5">We track pipeline, not hours. Every sprint ships revenue assets.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-sm font-semibold text-blue-dark">02</span>
                <div>
                  <p class="font-semibold text-sm">Senior-led delivery</p>
                  <p class="text-sm text-muted mt-0.5">The strategist builds. No handoff degradation. You get the A-team.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-sm font-semibold text-blue-dark">03</span>
                <div>
                  <p class="font-semibold text-sm">Zero vendor lock-in</p>
                  <p class="text-sm text-muted mt-0.5">You own every asset, account, pixel, and line of code we build.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-sm font-semibold text-blue-dark">04</span>
                <div>
                  <p class="font-semibold text-sm">Month-to-month</p>
                  <p class="text-sm text-muted mt-0.5">No lock-in. Cancel anytime. Kill criteria on every bet.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div use:reveal={{ delay: 400, y: 20 }} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="premium-card p-6 text-center">
        <p class="text-gradient-blue text-3xl font-semibold tracking-tight">47+</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Clients served</p>
      </div>
      <div class="premium-card p-6 text-center">
        <p class="text-gradient-emerald text-3xl font-semibold tracking-tight">$24M+</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Pipeline generated</p>
      </div>
      <div class="premium-card p-6 text-center">
        <p class="text-gradient-blue text-3xl font-semibold tracking-tight">847%</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Avg ROI delivered</p>
      </div>
      <div class="premium-card p-6 text-center">
        <p class="text-gradient-emerald text-3xl font-semibold tracking-tight">31d</p>
        <p class="mt-1.5 text-xs font-semibold uppercase tracking-widest text-muted">Avg launch time</p>
      </div>
    </div>
  </div>
</section>
