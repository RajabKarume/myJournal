import React from "react";
import './Input.css'
import Button from "../../Button/Button";

function Input(){

    return(
        <div className="input-div">
            <form >
                <h2>Journal entry</h2>
                <input type='text' placeholder="Enter your Journal " className="message-input" />
                <br/>
                <Button buttonText={"send"} />
            </form>
        </div>
    )
}

export default Input