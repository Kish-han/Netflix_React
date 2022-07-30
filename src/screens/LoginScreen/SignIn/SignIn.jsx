import "./SignIn.css"
import React, { useRef, useState } from 'react'
import Signup from './Signup/Signup'
import { auth } from "../../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

const SignIn = () => {

    const [signup, setSignup] = useState(false)

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className='signupScreen'>
            {signup ? (
                <Signup />
            ) : (
                <form action="">
                    <h1> Sign In</h1>
                    <input ref={emailRef} type="email" placeholder='Email' />
                    <input ref={passwordRef} type="password" placeholder='Password' />
                    <button type='sumbit' onClick={signIn}>Sign In</button>
                    <h4>
                        <span className='signupscreen__gray'>New to Netflix clone? </span>
                        <span className='signupscreen__link' onClick={() => setSignup(true)} >Sign Up now.</span>
                    </h4>
                </form>
            )}
        </div>
    )
}

export default SignIn
