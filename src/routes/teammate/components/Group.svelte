<script lang="ts">
  import type Teammate from '../teammate.type'
  export let group: Teammate.Group = { name: '', members: [] }
  let text = ''
  $: group.members = text.split('\n').map(name => ({ name }))

  const autoGrow = (e: Event) => {
    const target = e.target as HTMLTextAreaElement
    target.style.height = 'auto'
    target.style.height = `${target.scrollHeight}px`
  }
</script>

<section>
  <!-- TODO: 그룹 저장기능 만들고 다시 구현 -->
  <div class="hidden">
    <label for={group.name}>그룹이름: </label>
    <input class="border-b" type="text" bind:value={group.name} />
  </div>
  <textarea
    id={group.name}
    class="mt-2 w-full resize-none overflow-hidden border border-dashed p-1"
    on:input={autoGrow}
    bind:value={text}
  />
</section>
