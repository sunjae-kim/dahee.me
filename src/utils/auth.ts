import { auth } from '@/vendors/firebase'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from 'firebase/auth'
import { writable } from 'svelte/store'
const provider = new GoogleAuthProvider()

type State = {
  user: User | null
  token: string
  loading: boolean
}

const useAuth = () => {
  const state = writable<State>({ user: null, token: '', loading: true })

  const signInWithGoogle = () => {
    state.set({ user: null, token: '', loading: true })
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        if (!credential || !credential.accessToken) return
        state.set({ user: result.user, token: credential.accessToken, loading: false })
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.error({ errorCode, errorMessage, email, credential })
        alert(errorMessage)
        state.set({ user: null, token: '', loading: false })
      })
  }

  const logout = () => {
    auth.signOut()
    state.set({ user: null, token: '', loading: false })
  }

  onAuthStateChanged(auth, async user => {
    const token = (await user?.getIdToken()) || ''
    state.set({ user, token, loading: false })
  })

  return {
    subscribe: state.subscribe,
    signInWithGoogle,
    logout,
  }
}

export default useAuth
