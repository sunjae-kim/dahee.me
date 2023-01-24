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

<svelte:head>
  <!-- Open Graph -->
  <meta property="og:url" content="https://dahee.me/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Dahee" />
  <meta property="og:description" content="Introducing Dahee" />
  <meta property="og:image" content="images/opengraph/index.png" />
</svelte:head>

<div class="h-screen bg-blue-50">
  <FlipCard class="fixed center" {width} {height} {loading}>
    <img slot="front" src="images/dahee.jpeg" alt="pretty dahee" bind:this={image} />
    <div slot="back" class="relative flex h-full flex-col items-center justify-center">
      <h1 class="font-gaegu text-2xl">Dahee</h1>
      <div class="absolute bottom-2 grid grid-cols-2 items-center justify-center gap-4">
        <a
          class="h-8 w-8 p-1"
          href="https://www.instagram.com/b2byby/"
          target="_blank"
          on:click={e => e.stopPropagation()}
          rel="noreferrer"><i class="fab fa-instagram fa-xl" /></a
        >
        <a
          class="h-8 w-8 p-1"
          href="https://m.blog.naver.com/PostList.naver?blogId=b2byby"
          target="_blank"
          on:click={e => e.stopPropagation()}
          rel="noreferrer"><img src="images/icons/naver-blog.png" alt="naver-blog" /></a
        >
      </div>
    </div>
  </FlipCard>
</div>
