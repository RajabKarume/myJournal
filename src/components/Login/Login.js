import React, { useState } from "react";
import './Login.css'
import Button from "../Button/Button";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";


function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("Login")
    const [err, setErr] = useState(false)
   

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setLogin("Loging in...")
        try{
            await signInWithEmailAndPassword(auth, email, password)
            console.log("login successful")
            
        } catch(err){
            setErr(true)
        }
        setLogin("Login")
    }

    return(
        <div className='main-div'> 
            <div className='login-container'>
                <div className='login-h1'>
                    <h1>Log in to your account</h1>
                </div>
                <div className='form-div'>
                    <form onSubmit={handleSubmit} > 
                        <h3>Email address</h3>
                        <input type="email" placeholder='Enter your email address' className='login-input' value={email} onChange={(e)=>setEmail(e.target.value)}  />
                        <h3>Password</h3>
                        <input type='password' placeholder='Enter your password' className='login-input' value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <br/>
                        <Button buttonText={login} />
                    </form>
                </div>
                <div>
                    {err? <p>Invalid email or password</p>:<span></span>}
                </div>
                <div className='span-div'>
                <span > SignUp for an account </span>
                </div>
            </div>
        </div>
    )
}

export default Login
