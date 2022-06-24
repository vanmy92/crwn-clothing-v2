import {initializeApp} from 'firebase/app';
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc, 
    setDoc
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM3Vq57UA0PjEYMnK69gWtq5-Uaj7YPYM",
    authDomain: "crwn-clothing-db-7b29a.firebaseapp.com",
    projectId: "crwn-clothing-db-7b29a",
    storageBucket: "crwn-clothing-db-7b29a.appspot.com",
    messagingSenderId: "92328060700",
    appId: "1:92328060700:web:a77f7494206f5da7db7cd9"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider =new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:'select_account'
});

export const auth =getAuth();
export const signInWithGooglePopup =() => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect =() =>signInWithRedirect(auth,googleProvider);
export const db=getFirestore()

export const createUserDocumentFromAuth= async(userAuth)=>{
    const userDocRef =doc (db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot =await getDoc(userDocRef);
    

    if(!userSnapshot.exists()){
        const {displayName , email}=userAuth;
        const createdAt=new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
    // if user data exists

     

}

