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
  <meta property="og:image" content="https://dahee.me/images/opengraph/christmas.png" />
</svelte:head>

<div class="h-screen bg-gray-900">
  <SnowParticles />
  <Tree />
  <SnowLand />
  <DahCharacter />
  <LittleSnowMan />
</div>
