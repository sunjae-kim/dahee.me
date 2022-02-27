<script lang="ts">
  import { throttle } from '@/utils';
  import { onMount } from 'svelte';

  let flip = false;
  let loading = true;
  let card: HTMLElement;
  let image: HTMLImageElement;

  const onFlip = throttle(() => {
    flip = !flip;
  }, 800);

  onMount(async () => {
    await new Promise(resolve => {
      image.onload = resolve;
    });
    const { naturalHeight, naturalWidth } = image;
    const ratio = naturalHeight / naturalWidth;
    const width = 200;
    const height = width * ratio;
    card.style.width = `${width}px`;
    card.style.height = `${height}px`;
    loading = false;
  });
</script>

<div class="flip-card" class:flip class:fadein={!loading} on:click={onFlip} bind:this={card}>
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="images/dahee.jpeg" alt="pretty dahee" bind:this={image} />
    </div>
    <div class="flip-card-back">
      <h1 class="font-gaegu">dahee</h1>
      <a href="https://www.instagram.com/b2byby/" target="_blank" on:click={e => e.stopPropagation()}
        ><i class="fab fa-instagram" /></a
      >
    </div>
  </div>
</div>

<style>
  .flip-card {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card.flip .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    box-shadow: #0004 0px 0px 8px;
  }

  .flip-card-back {
    background-color: #293b5f;
    color: #f3f1f5;
    transform: rotateY(180deg);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  a {
    color: inherit;
    padding: 0.5em;
  }

  i {
    vertical-align: text-top;
  }
</style>
