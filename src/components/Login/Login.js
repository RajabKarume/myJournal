import React from "react";
import './Login.css'
import Button from "../Button/Button";


function Login(){

    return(
        <div className='main-div'> 
            <div className='login-container'>
                <div className='login-h1'>
                    <h1>Log in to your account</h1>
                </div>
                <div className='form-div'>
                    <form > 
                        <h3>Email address</h3>
                        <input type="email" placeholder='Enter your email address' className='login-input'  />
                        <h3>Password</h3>
                        <input type='password' placeholder='Enter your password' className='login-input'/>
                        <br/>
                        <Button buttonText={'login'} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
