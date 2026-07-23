<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero overflow-hidden bg-white" aria-labelledby="contact-hero-heading">
  <div class="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
  <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue/8 to-emerald/5 rounded-full blur-[100px] pointer-events-none animate-float" style="animation-delay: -2s;"></div>
  <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-emerald/5 to-transparent rounded-full blur-[80px] pointer-events-none animate-float" style="animation-delay: -5s;"></div>

  <div class="container-premium relative z-10 pt-16 lg:pt-24">
    <div class="grid gap-12 lg:gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
      <div use:reveal>
        <span class="eyebrow">Contact</span>
        <h1 id="contact-hero-heading" class="hero-heading mt-6">
          Let's build
          <br />
          <span class="text-gradient-blue">something</span>
          <br />
          <span class="text-gradient-emerald">remarkable.</span>
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Tell us about your project. We'll respond within 24 hours with a plan and a prioritized audit.
        </p>

        <div class="mt-8 space-y-4">
          <div class="premium-card p-5 flex items-center gap-4">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-lg">📧</span>
            <div>
              <p class="text-sm font-semibold">Email us</p>
              <a href="mailto:info@procorhrms.com" class="text-sm text-blue transition-colors hover:text-blue-light">info@procorhrms.com</a>
            </div>
          </div>
          <div class="premium-card p-5 flex items-center gap-4">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-lg">⏱</span>
            <div>
              <p class="text-sm font-semibold">Response time</p>
              <p class="text-sm text-muted">Less than 24 hours (avg 4 hours)</p>
            </div>
          </div>
          <div class="premium-card p-5 flex items-center gap-4">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-lg">📞</span>
            <div>
              <p class="text-sm font-semibold">Call us</p>
              <a href="tel:+14064792132" class="text-sm text-blue transition-colors hover:text-blue-light">+1 (406) 479-2132</a>
            </div>
          </div>
        </div>
      </div>

      <div use:reveal={{ x: 20, delay: 150 }}>
        <div class="premium-card p-6 sm:p-8 relative overflow-hidden">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-blue/5 to-transparent rounded-bl-full pointer-events-none"></div>

          <form class="relative z-10 space-y-5">
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label for="name" class="block mb-1.5 text-xs font-semibold text-ink">Name</label>
                <input type="text" id="name" name="name" required class="input-premium" placeholder="Your name" />
              </div>
              <div>
                <label for="email" class="block mb-1.5 text-xs font-semibold text-ink">Email</label>
                <input type="email" id="email" name="email" required class="input-premium" placeholder="you@company.com" />
              </div>
            </div>

            <div>
              <label for="service" class="block mb-1.5 text-xs font-semibold text-ink">What do you need?</label>
              <select id="service" name="service" class="input-premium">
                <option value="">Select a service...</option>
                <option value="website">Website Development</option>
                <option value="aeo-geo">AEO & GEO</option>
                <option value="seo">SEO Growth Systems</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="payroll">Payroll Services</option>
                <option value="compliance">Compliance Services</option>
                <option value="accounting">Accounting Services</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label for="budget" class="block mb-1.5 text-xs font-semibold text-ink">Budget range</label>
              <select id="budget" name="budget" class="input-premium">
                <option value="">Select a range</option>
                <option value="5-10k">$5k - $10k</option>
                <option value="10-25k">$10k - $25k</option>
                <option value="25-50k">$25k - $50k</option>
                <option value="50k+">$50k+</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <div>
              <label for="message" class="block mb-1.5 text-xs font-semibold text-ink">Tell us about your project</label>
              <textarea id="message" name="message" rows="4" required class="input-premium resize-none" placeholder="Describe your project, goals, and timeline..."></textarea>
            </div>

            <button type="submit" class="btn-blue w-full justify-center">
              Send message
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
