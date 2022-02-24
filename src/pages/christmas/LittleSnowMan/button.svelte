<script lang="ts">
  export let left: string;
  export let top: string;
</script>

<div style="--left: {left}; --top: {top}" class="button">
  <div class="circle left" />
  <div class="circle right" />
</div>

<style>
  .button {
    position: absolute;
    left: var(--left);
    top: var(--top);
    height: 3px;
    width: 3px;
    border-radius: 50%;
    background-color: #222;
  }
</style>
