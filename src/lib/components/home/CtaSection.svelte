<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>
<section id="contact" class="px-4 py-16 lg:py-24">
  <div use:reveal={{ scale: 0.95 }} class="container-brutal brutal-card relative overflow-hidden bg-accent p-8 text-center sm:p-12 lg:p-16">
    <div class="absolute left-6 top-6 hidden h-16 w-16 border-4 border-ink bg-blue-pop md:block"></div>
    <div class="absolute bottom-6 right-6 hidden h-20 w-20 border-4 border-ink bg-hot md:block"></div>
    <span class="section-label bg-white">Free growth audit</span>
    <h2 class="mx-auto mt-6 max-w-4xl font-display text-5xl leading-[0.9] tracking-[-0.08em] sm:text-7xl">Ready to solve your loudest digital problem?</h2>
    <p class="mx-auto mt-6 max-w-2xl text-xl font-bold leading-snug">Tell us what is broken: low traffic, weak leads, messy tracking or a website that refuses to sell. We will map the next best sprint.</p>
    <form class="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-[1fr_auto]" aria-label="Contact form">
      <label class="sr-only" for="email">Email address</label>
      <input id="email" class="border-4 border-ink bg-white px-5 py-4 text-lg font-bold shadow-[5px_5px_0_#07111f] outline-none placeholder:text-ink/60 focus:bg-blue-pale" type="email" placeholder="you@company.com" />
      <button class="brutal-button-blue" type="submit">Get audit</button>
    </form>
  </div>
</section>
