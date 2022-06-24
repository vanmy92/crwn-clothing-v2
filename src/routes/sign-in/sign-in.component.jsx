import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {signInWithGooglePopup} from '../../utils/firebase.utils'
import { createUserDocumentFromAuth , signInWithGoogleRedirect, auth} from '../../utils/firebase.utils';
import { async } from '@firebase/util';



const SignIn = ()=>{
    useEffect(async ()=>{
        const response = await getRedirectResult(auth);

        
    }, []);

    const logGoogleUser=async ()=>{
        const {user} =await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(user);
        
    }; 

    

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google PopUp</button>
            <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>

            
        </div>
    )

}


export default SignIn;