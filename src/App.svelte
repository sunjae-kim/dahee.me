<script lang="ts">
  import christmas from '@/pages/christmas/index.svelte';
  import dah from '@/pages/dah/index.svelte';
  import { Route, Router } from 'svelte-routing';

  export let url = '';
</script>

<main>
  <Router {url}>
    <Route path="/christmas" component={christmas} />
    <Route path="/" component={dah} />
  </Router>
</main>

<style>
</style>
