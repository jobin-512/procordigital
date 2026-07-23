<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="section-padding bg-white relative overflow-hidden" aria-labelledby="culture-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gradient-to-l from-emerald/5 to-transparent rounded-full blur-[100px] pointer-events-none animate-float" style="animation-delay: -5s;"></div>

  <div class="container-premium relative z-10">
    <div class="grid gap-12 lg:gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <div use:reveal class="order-2 lg:order-1">
        <span class="eyebrow">Culture</span>
        <h2 id="culture-heading" class="section-heading mt-5">
          Remote first.
          <br />
          <span class="text-gradient-emerald">Results first.</span>
        </h2>
        <p class="mt-4 text-base leading-relaxed text-muted max-w-lg">
          Our office is wherever we get things done. Remote-first by design, results-first by nature.
        </p>

        <div class="mt-8 space-y-3">
          <div class="premium-card p-5 flex items-center gap-4">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-lg">☀</span>
            <div>
              <p class="text-sm font-semibold">Async-first</p>
              <p class="text-xs text-muted">Deep work over pointless meetings</p>
            </div>
          </div>
          <div class="premium-card p-5 flex items-center gap-4">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-lg">🌍</span>
            <div>
              <p class="text-sm font-semibold">Global team</p>
              <p class="text-xs text-muted">8 countries, one obsession: winning</p>
            </div>
          </div>
          <div class="premium-card p-5 flex items-center gap-4">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-lg">📚</span>
            <div>
              <p class="text-sm font-semibold">Learning budget</p>
              <p class="text-xs text-muted">$2k/year for courses, books, conferences</p>
            </div>
          </div>
        </div>
      </div>

      <div use:reveal={{ x: 20, delay: 150 }} class="order-1 lg:order-2">
        <div class="premium-card p-6 sm:p-8 relative overflow-hidden">
          <div class="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-bl from-emerald/5 to-transparent rounded-bl-full pointer-events-none"></div>
          <div class="relative z-10">
            <span class="badge mb-5">Typical day</span>

            <div class="space-y-5">
              <div class="flex gap-4 items-start border-b border-border pb-4">
                <span class="text-sm font-semibold text-blue w-16 shrink-0">9 AM</span>
                <div class="border-l-2 border-blue/30 pl-4">
                  <p class="text-sm font-semibold">Sync up</p>
                  <p class="text-xs text-muted mt-0.5">15 min standup. No more.</p>
                </div>
              </div>
              <div class="flex gap-4 items-start border-b border-border pb-4">
                <span class="text-sm font-semibold text-emerald w-16 shrink-0">10 AM</span>
                <div class="border-l-2 border-emerald/30 pl-4">
                  <p class="text-sm font-semibold">Deep work</p>
                  <p class="text-xs text-muted mt-0.5">Zero interruptions. Full focus.</p>
                </div>
              </div>
              <div class="flex gap-4 items-start border-b border-border pb-4">
                <span class="text-sm font-semibold text-blue w-16 shrink-0">2 PM</span>
                <div class="border-l-2 border-blue/30 pl-4">
                  <p class="text-sm font-semibold">Client wins</p>
                  <p class="text-xs text-muted mt-0.5">Show the numbers. Move the needle.</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <span class="text-sm font-semibold text-emerald w-16 shrink-0">EOD</span>
                <div class="border-l-2 border-emerald/30 pl-4">
                  <p class="text-sm font-semibold">Ship or die</p>
                  <p class="text-xs text-muted mt-0.5">Every single day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
