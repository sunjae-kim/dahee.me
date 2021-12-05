<script lang="ts">
  import Eyeball from './eyeball.svelte';
  import Lips from './lips.svelte';
  import Hair from './hair.svelte';
</script>

<div class="head">
  <Hair />
  <div class="face">
    <div class="eyebrow left" />
    <div class="eyebrow right" />

    <div class="eyes left">
      <Eyeball />
    </div>
    <div class="eyes right">
      <Eyeball />
    </div>

    <div class="nose">
      <div class="nose-inner" />
    </div>

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

  .eyebrow {
    z-index: 3;
    position: absolute;

    width: 11px;
    height: 1.5px;

    background-color: #333;
    top: 30.5px;
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

    border-top: 0.5px solid #333;

    border-top-left-radius: 50px;
    border-top-right-radius: 50px;

    background-color: #fff;
    top: 33.5px;
  }

  .eyes.left {
    left: 26%;
    transform: rotate(4deg) translateX(-50%);
  }

  .eyes.right {
    right: 26%;
    transform: rotate(-4deg) translateX(50%);
  }

  .nose {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 40px;
    width: 8px;
    height: 8px;
    border-radius: 50%;

    background-color: #f00;
  }

  .nose-inner {
    position: absolute;
    left: 55%;
    top: 45%;
    transform: translate(-50%, -50%);
    width: 2.5px;
    height: 2px;
    border-radius: 50%;

    background-color: rgb(255, 71, 71);
  }
</style>
