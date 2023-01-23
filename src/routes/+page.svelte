<script lang="ts">
  import { onMount } from 'svelte'
  import FlipCard from '@/components/FlipCard/index.svelte'

  let loading = true
  let image: HTMLImageElement
  let width: string
  let height: string

  onMount(() => {
    image.onload = () => {
      const { naturalHeight, naturalWidth } = image
      const ratio = naturalHeight / naturalWidth
      const baseWidth = 250
      width = `${baseWidth}px`
      height = `${baseWidth * ratio}px`
      loading = false
    }
    image.src = 'images/dahee.jpeg'
  })
</script>

<FlipCard {width} {height} {loading}>
  <img slot="front" src="images/dahee.jpeg" alt="pretty dahee" bind:this={image} />
  <div slot="back" class="relative flex h-full flex-col items-center justify-center">
    <h1 class="font-gaegu">Dahee</h1>
    <div class="icon-box absolute bottom-0 center-x">
      <a
        href="https://www.instagram.com/b2byby/"
        target="_blank"
        on:click={e => e.stopPropagation()}
        rel="noreferrer"><div class="icon"><i class="fab fa-instagram align-text-top" /></div></a
      >
      <a
        href="https://m.blog.naver.com/PostList.naver?blogId=b2byby"
        target="_blank"
        on:click={e => e.stopPropagation()}
        rel="noreferrer"
        ><div class="icon">
          <img src="/images/icons/naver-blog.png" alt="naver-blog" />
        </div></a
      >
    </div>
  </div>
</FlipCard>

<style>
  .icon-box {
    display: flex;
  }

  .icon-box > * + * {
    margin-left: 0.5em;
  }

  .icon-box > a {
    color: inherit;
    padding: 0.2em;
  }

  .icon-box .icon {
    display: inline-block;
    color: inherit;
    width: 1em;
    height: 1em;
  }
</style>
