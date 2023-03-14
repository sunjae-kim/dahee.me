<script lang="ts">
  export let text: string
  $: rows = text?.split('\n').length
</script>

<section>
  <textarea
    class="mt-2 w-full resize-none overflow-hidden border border-dashed p-1"
    bind:value={text}
    {rows}
  />
</section>
