<script lang="ts">
  import FlipCard from '@/pages/dah/FlipCard/index.svelte';

  /** @referenrce https://github.com/EmilTholin/svelte-routing/issues/122#issuecomment-630745231 */
  export let location: Location;
</script>

<svelte:head />

<div class="container">
  <FlipCard />
</div>

<style>
  .container {
    background-color: rgb(240, 240, 250);
    height: 100vh;
  }
</style>
