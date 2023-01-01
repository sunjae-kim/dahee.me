<script lang="ts">
  export let left: string
  export let top: string
  export let z = 0
</script>

<div style="--left: {left}; --top: {top}; --z: {z}" class="touch" />

<style>
  .touch {
    position: absolute;
    background-color: #fbe4e0bb;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    box-shadow: 0px 0px 3px #fbe4e0;

    left: var(--left);
    top: var(--top);
    z-index: var(--z);
  }
</style>
