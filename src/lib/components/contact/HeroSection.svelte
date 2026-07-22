<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative section-padding-hero noise-overlay checkerboard overflow-hidden" aria-labelledby="contact-hero-heading">
  <div class="absolute inset-0 bg-gradient-to-br from-toxic/20 via-transparent to-cyber/20 pointer-events-none"></div>
  
  <div class="absolute top-20 right-20 w-48 h-48 border-8 border-toxic/50 rotate-12 animate-pulse-fast" aria-hidden="true"></div>
  <div class="absolute bottom-40 left-20 w-40 h-40 border-8 border-cyber/50 -rotate-12 animate-bounce-hard" aria-hidden="true"></div>

  <div class="container-brutal relative z-10">
    <div class="grid gap-12 lg:gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div use:reveal>
        <div class="section-label-toxic inline-flex mb-6 animate-shake">📞 GET AT US</div>
        
        <h1 id="contact-hero-heading" class="hero-heading">
          READY TO<br/>
          <span class="gradient-electric">BREAK</span><br/>
          <span class="gradient-plasma">SOME RULES?</span>
        </h1>
        
        <p class="mt-8 max-w-xl text-xl font-bold uppercase tracking-wide leading-relaxed">
          Fill out the form. We respond in under 24 hours (usually faster if COFFEE is involved).
        </p>
        
        <div class="mt-10 space-y-4">
          <div class="brutal-card-electric p-5 flex items-center gap-4">
            <div class="w-14 h-14 border-4 border-white bg-hazard flex items-center justify-center text-2xl">📧</div>
            <div>
              <p class="font-black uppercase text-sm">EMAIL</p>
              <p class="font-bold text-lg">info@procordigital.com</p>
            </div>
          </div>
          
          <div class="brutal-card-cyber p-5 flex items-center gap-4">
            <div class="w-14 h-14 border-4 border-ink bg-electric flex items-center justify-center text-2xl text-white">⏱️</div>
            <div>
              <p class="font-black uppercase text-sm">RESPONSE TIME</p>
              <p class="font-bold text-lg">&lt; 24 HOURS (AVG 4H)</p>
            </div>
          </div>
        </div>
      </div>

      <div use:reveal={{ delay: 200, y: 30 }} class="relative">
        <div class="brutal-card card-padding-lg relative overflow-hidden rotate-1 hover:rotate-0 transition-transform">
          <div class="absolute top-0 right-0 w-32 h-32 bg-electric/10 -rotate-12"></div>
          
          <form class="relative z-10 space-y-5">
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label for="name" class="block mb-2 font-black uppercase text-xs">Name *</label>
                <input type="text" id="name" name="name" required class="w-full border-4 border-ink bg-white p-4 font-bold uppercase focus:outline-none focus:ring-4 focus:ring-electric transition-all text-ink" placeholder="YOUR NAME" />
              </div>
              <div>
                <label for="email" class="block mb-2 font-black uppercase text-xs">Email *</label>
                <input type="email" id="email" name="email" required class="w-full border-4 border-ink bg-white p-4 font-bold uppercase focus:outline-none focus:ring-4 focus:ring-electric transition-all text-ink" placeholder="YOUR EMAIL" />
              </div>
            </div>
            
            <div>
              <label for="service" class="block mb-2 font-black uppercase text-xs">What do you need?</label>
              <select id="service" name="service" class="w-full border-4 border-ink bg-white p-4 font-bold uppercase focus:outline-none focus:ring-4 focus:ring-electric transition-all text-ink">
                <option value="">SELECT A SERVICE...</option>
                <option value="website">Website Dev</option>
                <option value="aeo-geo">AEO & GEO</option>
                <option value="seo">SEO</option>
                <option value="mobile-app">Mobile App</option>
                <option value="payroll">Payroll</option>
                <option value="compliance">Compliance</option>
                <option value="accounting">Accounting</option>
                <option value="other">SOMETHING ELSE</option>
              </select>
            </div>
            
            <div>
              <label for="budget" class="block mb-2 font-black uppercase text-xs">Budget range</label>
              <select id="budget" name="budget" class="w-full border-4 border-ink bg-white p-4 font-bold uppercase focus:outline-none focus:ring-4 focus:ring-electric transition-all text-ink">
                <option value="">WHAT'S YOUR RANGE?</option>
                <option value="5-10k">$5k - $10k</option>
                <option value="10-25k">$10k - $25k</option>
                <option value="25-50k">$25k - $50k</option>
                <option value="50k+">$50k+</option>
                <option value="not-sure">NOT SURE YET</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block mb-2 font-black uppercase text-xs">What's the chaos? *</label>
              <textarea id="message" name="message" rows="4" required class="w-full border-4 border-ink bg-white p-4 font-bold uppercase focus:outline-none focus:ring-4 focus:ring-electric transition-all resize-none text-ink" placeholder="TELL US ABOUT YOUR PROJECT..."></textarea>
            </div>
            
            <button type="submit" class="w-full brutal-button">
              <span class="text-2xl">📤</span>
              SEND IT
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
