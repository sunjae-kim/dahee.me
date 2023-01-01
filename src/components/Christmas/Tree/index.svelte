<script lang="ts">
  import Tree from './tree.svelte'
  import Star from './star.svelte'
  import Lights from './lights.svelte'
  import Balls from './balls.svelte'
  import Gifts from './gifts.svelte'
</script>

<div class="tree">
  <Tree />
  <Star />
  <Lights />
  <Balls />
  <Gifts />
</div>

<style>
  .tree {
    position: fixed;
    bottom: 150px;
    right: 30vw;
  }
</style>
