<script lang="ts">
  import christmas from '@/pages/christmas/index.svelte';
  import dah from '@/pages/dah/index.svelte';
  import summerDiary from '@/pages/summer-diary/index.svelte';
  import { Route, Router } from 'svelte-routing';

  let url = '';
</script>

<main>
  <Router {url}>
    <Route path="/" component={dah} />
    <Route path="/christmas" component={christmas} />
    <Route path="/summer-diary" component={summerDiary} />
  </Router>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
