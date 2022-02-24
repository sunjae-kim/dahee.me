<script lang="ts">
  import Lips from './lips.svelte';
  import Hair from './Hair/index.svelte';
  import Eyes from './Eyes/index.svelte';
  import Nose from './nose.svelte';
</script>

<div class="head">
  <Hair />

  <div class="face">
    <Eyes direction={'left'} />
    <Eyes direction={'right'} />
    <Nose />
    <Lips />
  </div>

  <div class="neck" />
</div>

<style>
  .head {
    z-index: 1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -60px;
    width: 55px;
    height: 100px;
    background-color: #222;
    border-radius: 40% 40% 0 0;

    overflow: hidden;
  }

  .face {
    z-index: 2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 3px;
    width: 38px;
    height: 60px;
    background-color: wheat;
    border-radius: 50%;
    box-shadow: 0px 0px 3px #222;
  }

  .neck {
    z-index: 1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 60px;
    width: 15px;
    height: 15px;
    background-color: thistle;
  }
</style>
