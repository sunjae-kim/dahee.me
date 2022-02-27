<script lang="ts">
  import LittleSnowMan from '@/pages/christmas/LittleSnowMan/index.svelte';
  import SnowLand from '@/pages/christmas/SnowLand/index.svelte';
  import SnowParticles from '@/pages/christmas/SnowParticles/index.svelte';
  import Tree from '@/pages/christmas/Tree/index.svelte';
  import DahCharacter from '@/pages/christmas/DahCharacter/index.svelte';

  export let location;
  const BASE_URL = process.env.BASE_URL;
</script>

<svelte:head>
  <!-- Open Graph -->
  <meta property="og:url" content="{BASE_URL}/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Dahee" />
  <meta property="og:description" content="Merry Christmas from Dahee 🎄" />
  <meta property="og:image" content="{BASE_URL}/images/opengraph/christmas.png" />
</svelte:head>

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
