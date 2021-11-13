<script lang="ts">
  import { preloadImg } from './utils';
  import FlipCard from './components/FlipCard.svelte';

  let imgIdx = 0;
  const dahImgs = ['images/dah1.jpeg', 'images/dah2.jpeg'];
  
  const preloadAllImgs = () => Promise.all(dahImgs.map(x => preloadImg(x)));
  let onFlip = () => {
    setTimeout(() => {
      imgIdx = Math.abs(imgIdx - 1);
    }, 800);
  };

  $: imgSrc = dahImgs[imgIdx];
</script>

<main>
  {#await preloadAllImgs() then _}
    <FlipCard bind:onFlip>
      <img src={imgSrc} alt="pretty dahee" slot="front" />
      <svelte:fragment slot="back">
        <h1>dahee</h1>
        <a href="https://www.instagram.com/b2byby/" target="_blank" on:click={e => e.stopPropagation()}
          ><i class="fab fa-instagram" /></a
        >
      </svelte:fragment>
    </FlipCard>
  {/await}
</main>

<style>
  a {
    color: inherit;
    padding: 0.5em;
  }

  i {
    vertical-align: text-top;
  }
</style>
