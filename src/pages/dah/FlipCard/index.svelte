<script lang="ts">
  import { throttle } from '@/utils';
  import { fade } from 'svelte/transition';

  let flip = false;
  export let onFlip: () => void;

  const onCardClick = throttle(() => {
    flip = !flip;
    if (flip) onFlip();
  }, 800);
</script>

<div class="flip-card" class:flip on:click={onCardClick} transition:fade={{ duration: 1500 }}>
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <slot name="front" />
    </div>
    <div class="flip-card-back">
      <slot name="back" />
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
    width: 200px;
    height: 300px;
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

  .flip-card-front {
    background-color: rgb(112, 92, 90);
    color: rgb(213, 200, 200);
  }

  .flip-card-back {
    background-color: rgb(112, 92, 90);
    color: rgb(213, 200, 200);
    transform: rotateY(180deg);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
</style>
