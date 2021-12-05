<script lang="ts">
  import Head from './Head/index.svelte';
</script>

<div class="container">
  <div class="heart">
    <Head />
    <div class="cloth">
      <div class="line" />
      <div class="zip" />
    </div>
    <div class="arm left" />
    <div class="arm right" />
    <div class="pants">
      <div class="line" />
    </div>

    <div class="shoes left" />
    <div class="shoes right" />
  </div>
</div>

<style>
  .container {
    position: fixed;
    bottom: 5px;
    right: calc(30vw + 150px);

    display: flex;
    justify-content: center;
    align-items: center;

    /* animation: fadein 10s; */
  }

  .heart {
    position: relative;
    width: 25px;
    height: 50px;
    background-color: white;
    margin-bottom: 200px;
  }

  .cloth {
    z-index: 2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    top: 6px;

    width: 50px;
    height: 80px;
    background-color: thistle;

    border-top-left-radius: 33%;
    border-top-right-radius: 33%;
  }

  .cloth .line {
    z-index: 2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 83px;
    width: 1px;
    background-color: #aa95aa;

    top: -3px;
  }

  .cloth .zip {
    z-index: 2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: gray;

    top: -2px;

    height: 5px;
    width: 2px;
  }

  :root {
    --radius: 45px;
  }

  .arm {
    z-index: 1;
    position: absolute;
    background-color: transparent;
    width: 90px;
    height: var(--radius);
    border: solid 17px thistle;
    border-color: thistle;
    border-radius: 50% / var(--radius) var(--radius) 0 0;
    top: 27px;
  }

  .arm.left {
    transform: rotate(270deg);
    left: -53px;
  }

  .arm.right {
    transform: rotate(90deg);
    right: -53px;
  }

  .pants {
    z-index: 2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    top: 86px;

    width: 50px;
    height: 120px;
    background-color: #222;
  }

  .pants .line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    background-color: #111;
    height: 100px;
    width: 1px;
    bottom: 0;
  }

  .shoes {
    z-index: 3;
    position: absolute;
    top: 198px;
    width: 25px;
    height: 10px;
    background-color: #555;
    border-radius: 30% 30% 10% 10%;
  }

  .shoes.left {
    left: 25.5px;
    transform: translateX(-50%);
  }
  .shoes.right {
    right: 25.5px;
    transform: translateX(50%);
  }
</style>
