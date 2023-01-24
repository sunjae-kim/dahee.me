<script lang="ts">
  import LittleSnowMan from '@/components/Christmas/LittleSnowMan/index.svelte'
  import SnowLand from '@/components/Christmas/SnowLand/index.svelte'
  import SnowParticles from '@/components/Christmas/SnowParticles/index.svelte'
  import Tree from '@/components/Christmas/Tree/index.svelte'
  import DahCharacter from '@/components/Christmas/DahCharacter/index.svelte'
</script>

<svelte:head>
  <!-- Open Graph -->
  <meta property="og:url" content="https://dahee.me/christmas" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Dahee" />
  <meta property="og:description" content="Merry Christmas🎄" />
  <meta property="og:image" content="images/opengraph/christmas.png" />
</svelte:head>

<div class="layout">
  <SnowParticles />
  <Tree />
  <SnowLand />
  <DahCharacter />
  <LittleSnowMan />
</div>

<style>
  .layout {
    background-color: #111;
    height: 100vh;
  }
</style>
