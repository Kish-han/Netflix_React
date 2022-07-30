import React, { useRef } from 'react'
import "./Signup.css"
import { auth } from '../../../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
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
        <div>
            <div className="signup">
                <form action="">
                    <h1>Sign up</h1>
                    <input ref={emailRef} type="email" placeholder='Email' />
                    <input ref={passwordRef} type="password" placeholder='Password' />
                    <button type='sumbit' onClick={register}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
