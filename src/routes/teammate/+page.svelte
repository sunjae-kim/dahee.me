<script lang="ts">
  import useAuth from '@/utils/auth'
  import type { User } from 'firebase/auth'
  const { subscribe, signInWithGoogle, logout } = useAuth()
  let user: User | null = null
  let loading = true
  subscribe(state => {
    user = state.user
    loading = state.loading
  })
</script>

<div class="container mx-auto flex h-screen items-center justify-center text-[#333]">
  <!-- Loading -->
  <div class="font-gaegu text-5xl" class:hidden={!loading}>loading...</div>
  <!-- Login -->
  <button class="font-gaegu text-5xl" class:hidden={user || loading} on:click={signInWithGoogle}
    >google login</button
  >
  <!-- Header -->
  <header
    class="container fixed top-0 left-0 right-0 mx-auto flex justify-end p-4"
    class:hidden={!user || loading}
  >
    <button class="font-gaegu text-3xl" on:click={logout}>logout</button>
  </header>
  <!-- Main -->
  <section class="flex flex-col items-center justify-center" class:hidden={!user || loading}>
    <div class="font-gaegu text-5xl">
      Hello, {user?.displayName}
    </div>
  </section>
</div>
