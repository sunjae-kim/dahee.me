<script lang="ts">
  import _ from 'lodash'
  import { onMount } from 'svelte'

  let flip = false
  let loading = true
  let card: HTMLElement
  let image: HTMLImageElement

  const onFlip = _.throttle(() => {
    flip = !flip
  }, 800)

  onMount(async () => {
    await new Promise(resolve => {
      image.onload = resolve
    })
    const { naturalHeight, naturalWidth } = image
    const ratio = naturalHeight / naturalWidth
    const width = 250
    const height = width * ratio
    card.style.width = `${width}px`
    card.style.height = `${height}px`
    loading = false
  })
</script>

<div class="layout h-screen bg-blue-50">
  <button class="flip-card" class:flip class:fadein={!loading} on:click={onFlip} bind:this={card}>
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="images/dahee.jpeg" alt="pretty dahee" bind:this={image} />
      </div>
      <div class="flip-card-back">
        <h1 class="name font-gaegu absolute-center">Dahee</h1>
        <div class="absolute-center icon-box">
          <a
            href="https://www.instagram.com/b2byby/"
            target="_blank"
            on:click={e => e.stopPropagation()}
            rel="noreferrer"><div class="icon"><i class="fab fa-instagram" /></div></a
          >
          <a
            href="https://m.blog.naver.com/PostList.naver?blogId=b2byby"
            target="_blank"
            on:click={e => e.stopPropagation()}
            rel="noreferrer"
            ><div class="icon">
              <img src="/images/icons/naver-blog.png" alt="" />
            </div></a
          >
        </div>
      </div>
    </div>
  </button>
</div>

<style>
  .flip-card {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    perspective: 1000px;

    font-size: 1.5em;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card.flip .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    box-shadow: #0004 0px 0px 8px;
  }

  .flip-card-back {
    position: relative;
    background-color: #293b5f;
    color: #f3f1f5;
    transform: rotateY(180deg);
  }

  .flip-card-back > .icon-box {
    top: 90%;
  }

  i {
    vertical-align: text-top;
  }

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
