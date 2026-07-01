<script lang="ts">
  let {
    title = 'Add your image here',
    description = 'Replace this placeholder with a project screenshot, campaign graphic, team photo or dashboard image.',
    variant = 'blue',
    tall = false,
    height = "fit"
  } = $props<{
    eyebrow?: string;
    title?: string;
    description?: string;
    variant?: 'blue' | 'light' | 'yellow' | 'dark';
    tall?: boolean;
  }>();
</script>

<div class="image-slot {variant} {tall ? 'tall' : ''}">
  <div class="image-slot__topbar">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="image-slot__content ">
  <img src={title} alt={description} style="height: {height}; width:'auto'">
  </div>
</div>

<style>
  .image-slot {
    min-height: 15rem;
    border: 4px solid #07111f;
    background: #d9eeff;
    color: #07111f;
    box-shadow: 7px 7px 0 #07111f;
    overflow: hidden;
  }

  .image-slot.tall {
    min-height: 26rem;
  }

  .image-slot.light {
    background: #fffaf0;
  }

  .image-slot.yellow {
    background: #fff04d;
  }

  .image-slot.dark {
    background: #145cff;
    color: white;
  }

  .image-slot__topbar {
    display: flex;
    gap: 0.5rem;
    border-bottom: 4px solid #07111f;
    background: #fffaf0;
    padding: 0.75rem;
  }

  .image-slot__topbar span {
    width: 1rem;
    height: 1rem;
    border: 2px solid #07111f;
    border-radius: 999px;
  }

  .image-slot__topbar span:nth-child(1) {
    background: #ff5a7a;
  }

  .image-slot__topbar span:nth-child(2) {
    background: #fff04d;
  }

  .image-slot__topbar span:nth-child(3) {
    background: #4db7ff;
  }

  .image-slot__content {
    display: grid;
    min-height: inherit;
    place-items: center;
    gap: 1.25rem;
    padding: 1.5rem;
    text-align: center;
  }

  .image-slot__content svg {
    width: min(12rem, 52vw);
    fill: none;
    stroke: currentColor;
    stroke-width: 5;
    stroke-linejoin: round;
  }

  .image-slot__content p {
    display: inline-flex;
    border: 3px solid currentColor;
    background: #fff04d;
    color: #07111f;
    padding: 0.35rem 0.65rem;
    font-size: 0.75rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  .image-slot__content h3 {
    margin-top: 0.8rem;
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 0.9;
    letter-spacing: -0.08em;
  }

  .image-slot__content span {
    margin-inline: auto;
    margin-top: 0.75rem;
    display: block;
    max-width: 31rem;
    font-weight: 800;
    line-height: 1.25;
  }
</style>
