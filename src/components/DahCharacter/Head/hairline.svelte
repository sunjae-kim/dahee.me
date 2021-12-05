<script lang="ts">
  export let width: string;
  export let left: string;
</script>

<div style="--left: {left}; --width: {width};" class="hair-line" />

<style>
  .hair-line {
    z-index: 4;
    position: absolute;
    background-color: transparent;
    width: var(--width);
    height: 3px;
    border: solid 0.5px;
    border-color: wheat transparent transparent transparent;
    border-radius: 50%/3px 3px 0 0;
    transform: rotate(270deg);
    top: 24px;
    left: var(--left);
  }
</style>
