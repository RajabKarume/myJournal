import React from "react";
import './Navbar.css'
import Button from "../../Button/Button";

function Navbar(){

    return(
        <div className="navbar-div">
            <div className="appname">
                <h1>My Journal</h1>
            </div>
            <div className="user-display">
                <h1>Rajab</h1>
            </div>
            <div className="logout-button">
                <Button  buttonText={"logout"} />
            </div>
        </div>
    )
}

export default Navbar