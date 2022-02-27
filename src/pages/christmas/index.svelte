<script lang="ts">
  import LittleSnowMan from '@/pages/christmas/LittleSnowMan/index.svelte';
  import SnowLand from '@/pages/christmas/SnowLand/index.svelte';
  import SnowParticles from '@/pages/christmas/SnowParticles/index.svelte';
  import Tree from '@/pages/christmas/Tree/index.svelte';
  import DahCharacter from '@/pages/christmas/DahCharacter/index.svelte';

  export let location: Location;
</script>

<div class="container">
  <SnowParticles />
  <Tree />
  <SnowLand />
  <DahCharacter />
  <LittleSnowMan />
</div>

<style>
  .container {
    background-color: #111;
    height: 100vh;
  }
</style>
