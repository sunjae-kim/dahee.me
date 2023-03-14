import { writable } from 'svelte/store'
import { browser } from '$app/environment'

const useLocalstorageStore = <T>(key: string, defaultValue: T) => {
  const json = browser ? localStorage.getItem(key) : null
  const initialValue = json ? JSON.parse(json) : defaultValue
  console.log(JSON.stringify(initialValue, null, 2))
  const state = writable<T>(initialValue)

  state.subscribe(value => {
    if (browser) localStorage.setItem(key, JSON.stringify(value))
  })

  return state
}

export default useLocalstorageStore
