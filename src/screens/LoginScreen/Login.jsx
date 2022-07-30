import React, { useState } from 'react'
import SignIn from './SignIn/SignIn';
import "./Login.css"

const Login = () => {

    const [signin, setSignin] = useState(false);



    return (
        <section className='loginScreen'>
            <div className="loginScreen__background">
                <div className="login__nav">
                    <img
                        className='loginscreen__logo'
                        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt=""
                    />
                    {!signin &&
                        <button className="loginScreen__button" onClick={() => setSignin(true)} >
                            Sign In
                        </button>
                    }
                </div>
                <div className="loginScreen__gradient"></div>
            </div>
            <div className="loginscreen__body">
            {signin ?
                (
                    <SignIn />
                ) :
                (
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch anywhere. Cancle at any time.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                            <div className="loginscreen__input">
                                <form action="">
                                    <input type="email" placeholder='Email Address' />
                                    <button className='loginscreen__getstarted' onClick={() => setSignin(true)} >
                                        GET STARTED
                                    </button>
                                </form>
                            </div>
                        </>
                ) 
            }
            </div>
        </section>
    )
}

export default Login
