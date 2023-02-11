<!-- TODO: 팀 생성할 때마다 border 변경 -->
<script lang="ts">
  export let team: string[]
  let width: number

  const randomBorderRadius = (reverse: boolean, width: number) => {
    const first = Math.floor(Math.random() * (width / 20)) + width / 20
    const second = Math.floor(Math.random() * (width / 10)) + width / 5
    return reverse ? `${second}px ${first}px` : `${first}px ${second}px`
  }

  $: style = `
    border-top-left-radius: ${randomBorderRadius(false, width)};
    border-top-right-radius: ${randomBorderRadius(false, width)};
    border-bottom-left-radius: ${randomBorderRadius(true, width)};
    border-bottom-right-radius: ${randomBorderRadius(true, width)};
  `
</script>

<ul bind:clientWidth={width} class="border border-gray-100 bg-gray-100 p-4 shadow" {style}>
  {#each team as member}
    <li>{member}</li>
  {/each}
</ul>
