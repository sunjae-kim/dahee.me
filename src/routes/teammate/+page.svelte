<script lang="ts">
  import useAuth from '@/utils/auth'
  import useLocalstorageStore from '@/utils/localstorage'
  import Group from './components/Group.svelte'
  import Team from './components/Team.svelte'
  import useTeamateService from './teammate.service'
  const { state: authState, signInWithGoogle, logout } = useAuth()
  const { createTeams } = useTeamateService()

  const state = useLocalstorageStore('teammate', {
    groupRawData: [] as string[],
    numGroups: 2,
    numTeams: 2,
  })

  let teams = [] as string[][]
  $: username = $authState.user?.displayName
  $: groups = ($state.groupRawData || []).map(text => ({
    members: text.split('\n').map(name => ({ name })),
  }))
  $: $state.groupRawData = $state.groupRawData.slice(0, $state.numGroups)
</script>

<!-- Header -->
<header class="fixed top-0 left-0 right-0 p-4 font-gaegu">
  <header
    class="container mx-auto flex justify-end"
    class:hidden={!$authState.user || $authState.loading}
  >
    <div>
      <div class="text-3xl">
        {#if username}<span>{username}</span>{/if}
        <button on:click={logout}>logout</button>
      </div>
    </div>
  </header>
</header>

<!-- Main -->
<main class="h-screen px-4 font-gaegu text-gray-900">
  <div class="container mx-auto flex h-full items-center justify-center">
    <!-- Loading -->
    <div class="text-5xl" class:hidden={!$authState.loading}>loading...</div>

    <!-- Login -->
    <button
      class="text-5xl"
      class:hidden={$authState.user || $authState.loading}
      on:click={signInWithGoogle}>google login</button
    >

    <!-- Main -->
    <div
      class="flex flex-col items-center justify-center"
      class:hidden={!$authState.user || $authState.loading}
    >
      <div class="mt-4 flex">
        <div>
          <label for="num-groups">그룹 수: </label>
          <input type="number" bind:value={$state.numGroups} id="num-groups" min="1" max={10} />
        </div>

        <div>
          <label for="num-teams">팀 수: </label>
          <input type="number" bind:value={$state.numTeams} id="num-teams" min="1" max={99} />
        </div>
      </div>

      <div>엔터로 구분해서 입력해주세요 🐰</div>

      <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {#each Array($state.numGroups) as _, i}
          <Group bind:text={$state.groupRawData[i]} />
        {/each}
      </div>

      <button
        class="mt-4 text-xl"
        on:click={() => {
          teams = createTeams(groups, $state.numTeams)
        }}>팀 만들기!</button
      >

      {#if teams.length > 0}
        <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {#each teams as team}
            <Team {team} />
          {/each}
        </div>
      {/if}
    </div>
  </div>
</main>
