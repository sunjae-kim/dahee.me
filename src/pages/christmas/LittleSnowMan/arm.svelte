<script lang="ts">
  export let left: string
  export let top: string
  export let deg: string
  export let z: number = 0
</script>

<div style="--left: {left}; --top: {top}; --deg: {deg}; --z: {z}" class="arm">
  <div class="left" />
  <div class="right" />
</div>

<style>
  .arm {
    position: absolute;
    z-index: var(--z);
    left: var(--left);
    top: var(--top);
    transform: rotate(var(--deg));
    width: 30px;
    height: 2px;
    background-color: burlywood;
    border-radius: 0 50% 50% 50%;
  }

  .arm > div {
    position: absolute;
    width: 10px;
    height: 2px;
    background-color: burlywood;
    border-radius: 0 50% 50% 50%;
  }

  .left {
    transform: rotate(30deg);
    top: -2px;
    left: 1px;
  }

  .right {
    transform: rotate(-30deg);
    top: 2px;
    left: 5px;
  }
</style>
