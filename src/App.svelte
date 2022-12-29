<script lang="ts">
  import Christmas from '@/pages/christmas/index.svelte'
  import Dah from '@/pages/dah/index.svelte'
  import SummerDiary from '@/pages/summer-diary/index.svelte'
  import Teammate from '@/pages/teammate/index.svelte'
  import { Route, Router } from 'svelte-routing'

  let url = ''
</script>

<main>
  <Router {url}>
    <Route path="/" component={Dah} />
    <Route path="/christmas" component={Christmas} />
    <Route path="/summer-diary" component={SummerDiary} />
    <Route path="/teammate" component={Teammate} />
  </Router>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
