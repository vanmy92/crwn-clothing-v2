import { useState } from "react";
import {createAuthUserWithEmailAndPassword} from '../../utils/firebase.utils'
const defautformFields={

    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUpForm = () =>{

    const [formFields, setFormFileds] = useState(defautformFields);
    const { displayName, email, password, confirmPassword} = formFields;

    const handleSubmit =async (event)=>{
        event.preventDefault();
        
    }

    const handleChange =(event) =>{
        const {name, value} = event.target;
        setFormFileds({formFields, [name]: value});
    }

    return (
        <div>
            <h1>Sign up with you email and password</h1>
            <form onSubmit={()=>{}}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name='displayName' value={displayName}/>
                
                <label>Email</label>
                <input type="email" required onChange={handleChange} name='email' value={email}/>

                <label>Password</label>
                <input type="password" required onChange={handleChange} name='password' value={password}/>

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                
                <button type="submit">Sign up</button>
            </form>
        </div>

    )
}
export default SignUpForm;