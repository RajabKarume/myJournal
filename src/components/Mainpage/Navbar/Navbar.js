import React, { useState } from "react";
import './Navbar.css'
import Button from "../../Button/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

function Navbar({name}){

    const [logout, setLogout] = useState("LogOut")

    const userSignOut = () => {
        setLogout("Loging Out...")
        try{
        signOut(auth).then(()=>{
            console.log('signed out')
        })
        } catch{
            console.log("signout error")
        }
        setLogout("Log Out")
    }

    return(
        <div className="navbar-div">
            <div className="appname">
                <h1>My Journal</h1>
            </div>
            <div className="user-display">
                <h1>{name}</h1>
            </div>
            <div className="logout-button">
                <Button handleClick={userSignOut}  buttonText={logout} />
            </div>
        </div>
    )
}

export default Navbar