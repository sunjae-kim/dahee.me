import * as firebase from 'firebase/app'
import { getAuth } from 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDkeJyuaSqLgMuPFiloUuE4op3Md740IaY',
  authDomain: 'daheeme.firebaseapp.com',
  projectId: 'daheeme',
  appId: '1:1006048077629:web:b5cda684a0286744a40754',
})

export const auth = getAuth(app)
export default app
