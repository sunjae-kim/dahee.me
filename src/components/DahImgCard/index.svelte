<script lang="ts">
  import FlipCard from '@/components/FlipCard/index.svelte';

  let imgIdx = 0;
  const dahImgs = ['images/dah1.jpeg', 'images/dah2.jpeg'];

  let onFlip = () => setTimeout(() => (imgIdx ^= 1), 800); // toggle 0 1
</script>

<FlipCard bind:onFlip>
  <svelte:fragment slot="front">
    {#each dahImgs as img, idx (img)}
      <img class={idx !== imgIdx ? 'hidden' : ''} src={img} alt="pretty dahee" />
    {/each}
  </svelte:fragment>
  <svelte:fragment slot="back">
    <h1>dahee</h1>
    <a href="https://www.instagram.com/b2byby/" target="_blank" on:click={e => e.stopPropagation()}
      ><i class="fab fa-instagram" /></a
    >
  </svelte:fragment>
</FlipCard>

<style>
  a {
    color: inherit;
    padding: 0.5em;
  }

  i {
    vertical-align: text-top;
  }
</style>
