<script lang="ts">
  import { Particle } from '@/utils/particle';
  import { onMount } from 'svelte';

  onMount(() => Particle.initParticleJs('snow'));
</script>

<div id="particles-js" />

<style>
  #particles-js {
    position: fixed;
    inset: 0;
    animation: fadein 2s;
  }
</style>
