<script lang="ts">
  import { throttle } from 'lodash'
  export let width: string
  export let height: string
  export let loading: boolean

  let flip = false

  const onFlip = throttle(() => {
    flip = !flip
  }, 800)
</script>

<div class="layout h-screen bg-blue-50">
  <button
    class="flip-card"
    class:flip
    class:fadein={!loading}
    on:click={onFlip}
    style:width
    style:height
  >
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <slot name="front" />
      </div>
      <div class="flip-card-back">
        <slot name="back" />
      </div>
    </div>
  </button>
</div>

<style>
  .flip-card {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    perspective: 1000px;

    font-size: 1.5em;
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
    position: relative;
    background-color: #293b5f;
    color: #f3f1f5;
    transform: rotateY(180deg);
  }
</style>
