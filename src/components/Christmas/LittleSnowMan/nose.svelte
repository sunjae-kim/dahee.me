<script lang="ts">
  export let left: string;
  export let top: string;
</script>

<div style="--left: {left}; --top: {top};" class="nose">
  <i class="fas fa-carrot" />
  <div class="carrot-veil" />
</div>

<style>
  .nose {
    position: absolute;
    left: var(--left);
    top: var(--top);
  }

  .fa-carrot {
    position: absolute;
    color: #e78111;
    transform: rotate(218deg);
  }

  .carrot-veil {
    position: absolute;
    background-color: snow;
    width: 5px;
    height: 10px;
    left: -1px;
    top: 3px;
  }
</style>
