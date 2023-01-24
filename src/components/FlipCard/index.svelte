<script lang="ts">
  import _ from 'lodash'
  export let width: string
  export let height: string
  export let loading: boolean
  let className: string
  export { className as class }

  let flip = false

  const onFlip = _.throttle(() => {
    flip = !flip
  }, 800)
</script>

<button
  class={`flip-card ${className}`}
  class:flip
  class:visible={!loading}
  class:invisible={loading}
  class:animate-fade-in={!loading}
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

<style>
  .flip-card {
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
    position: relative;
    background-color: #293b5f;
    color: #f3f1f5;
    transform: rotateY(180deg);
  }
</style>
