import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDTdnLaprci48QsZAgwsfx7qfnYG5Gm_94",
    authDomain: "clone-14161.firebaseapp.com",
    projectId: "clone-14161",
    storageBucket: "clone-14161.appspot.com",
    messagingSenderId: "603761596131",
    appId: "1:603761596131:web:08a8a919de91ba68c617d6"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { projectFirestore, projectAuth, provider }