import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "nyt1-815c4.appspot.com",
  messagingSenderId: "334363334418",
  appId: "1:334363334418:web:b1469b377c0edfc29105cb"
}

const app = initializeApp(firebaseConfig)

export default app





