import React from "react";
import './Login.css'
import Button from "../Button/Button";

function SignUp(){

    return(
        <div className='main-div'> 
        <div className='login-container'>
            <div className='login-h1'>
                <h1>Sign up of an account</h1>
            </div>
            <div className='form-div'>
                <form >
                    <h3>Name</h3>
                    <input type='text' placeholder='Enter your name' className='login-input' />
                    <h3>Email address</h3>
                    <input type="email" placeholder='Enter your email address' className='login-input' />
                    <h3>Password</h3>
                    <input type='password' placeholder='Enter your password'  className='login-input' />
                    <br/>
                    <Button buttonText={'signUpButton'} />
                    <br/>
                </form>
            </div>
            <div>
            </div>
            
        </div>
    </div>
)
}


export default SignUp