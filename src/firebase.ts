import firebase from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'
export const firebaseConfig = {
  apiKey: "AIzaSyBp_JtpFYlJcVFt0Aj_UmdE5LgVhEpKWOA",
  authDomain: "slack-clone-127d2.firebaseapp.com",
  projectId: "slack-clone-127d2",
  storageBucket: "slack-clone-127d2.appspot.com",
  messagingSenderId: "355772518213",
  appId: "1:355772518213:web:4a540634d04b30b2e6382c"
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db=getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

export {auth , provider ,db}
