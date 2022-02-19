import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config ={
        apiKey: "AIzaSyCPrh9kmvDrXm7jnqrQ02jiDJ76Nfoo0hw",
        authDomain: "thrifty-94ed4.firebaseapp.com",
        projectId: "thrifty-94ed4",
        storageBucket: "thrifty-94ed4.appspot.com",
        messagingSenderId: "453925134036",
        appId: "1:453925134036:web:3a39d14a2df3d6cc702541",
        measurementId: "G-P8FYJ3LEGT"
};


firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase