<script lang="ts">
  import { Particle } from '@/vendors/particleJs'
  import { onMount } from 'svelte'

  onMount(async () => {
    let particlesJS = await Particle.init()
    particlesJS('particles-js', Particle.particleOptions.snow)
  })
</script>

<div id="particles-js" />

<style>
  #particles-js {
    position: fixed;
    inset: 0;
    animation: fadein 2s;
  }
</style>
