<script lang="ts">
  import DahImgCard from '@/pages/dah/DahImgCard/index.svelte';

  /** @referenrce https://github.com/EmilTholin/svelte-routing/issues/122#issuecomment-630745231 */
  export let location;
</script>

<div class="container">
  <DahImgCard />
</div>

<style>
  .container {
    background-color: rgb(240, 230, 230);
    height: 100vh;
  }
</style>
