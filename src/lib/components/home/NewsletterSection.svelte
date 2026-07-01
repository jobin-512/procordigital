<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="py-16 lg:py-24">
  <div class="container-brutal">
    <div use:reveal={{ scale: 0.96 }} class="brutal-card grid gap-8 bg-blueprint p-8 text-white lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-12">
      <div>
        <span class="section-label bg-accent text-ink">Growth notes</span>
        <h2 class="mt-6 font-display text-4xl leading-none tracking-[-0.08em] sm:text-6xl">Get brutally clear marketing ideas.</h2>
        <p class="mt-5 text-lg font-bold leading-snug text-blue-50">
          A simple newsletter section you can connect later to your email platform. Share audits, case studies, templates and growth lessons.
        </p>
      </div>

      <form class="border-4 border-white bg-paper p-5 text-ink shadow-[7px_7px_0_#4db7ff]" aria-label="Newsletter signup">
        <label class="font-black uppercase" for="newsletter-email">Email address</label>
        <input
          id="newsletter-email"
          class="mt-3 w-full border-4 border-ink bg-white px-4 py-4 font-bold outline-none focus:bg-blue-pale"
          type="email"
          placeholder="you@company.com"
        />
        <button class="brutal-button-blue mt-4 w-full" type="submit">Join the list</button>
      </form>
    </div>
  </div>
</section>
