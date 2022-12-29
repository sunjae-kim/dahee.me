<script lang="ts">
  import Eyeball from './eyeball.svelte'

  export let direction: 'left' | 'right'
</script>

<div class="eyebrow {direction}" />
<div class="eyes {direction}">
  <Eyeball />
</div>

<style>
  .eyebrow {
    z-index: 3;
    position: absolute;

    width: 11px;
    height: 1.5px;

    background-color: #333e;
    top: 29px;

    border-radius: 25%;
  }

  .eyebrow.left {
    left: 25%;
    transform: rotate(-2deg) translateX(-50%);
  }

  .eyebrow.right {
    right: 25%;
    transform: rotate(2deg) translateX(50%);
  }

  .eyes {
    position: absolute;
    overflow: hidden;

    width: 11px;
    height: 5px;

    border-top: 1px solid #333;

    border-top-left-radius: 50px;
    border-top-right-radius: 50px;

    background-color: #fff;
    top: 32.5px;
  }

  .eyes.left {
    left: 26%;
    transform: rotate(4deg) translateX(-50%);
  }

  .eyes.right {
    right: 26%;
    transform: rotate(-4deg) translateX(50%);
  }
</style>
