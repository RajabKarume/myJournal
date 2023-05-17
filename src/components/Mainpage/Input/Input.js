import React, { useContext, useState } from "react";
import './Input.css'
import Button from "../../Button/Button";
import PopupMessage from "../PopupMessage/PopupMessage";
import { AuthContext } from '../../Auth/WithAuth';

function Input(){
    
    const {currentUser} = useContext(AuthContext)
    const [ entry, setEntry ] = useState('')
    const [send, setSend] = useState("Send")
    const [sendMail, setSendMail] = useState(false)
    const email = currentUser.email
    const [message, setMessage] = useState("")

    const handleSubmit = async(e) =>{
        // Prevent blank entries
        if (entry !==''){
            e.preventDefault()
            const newEntry = [...entry].join("")
            setSend("Sending")
            try{
                const response = await fetch('https://us-central1-my-journal-c0b42.cloudfunctions.net/addEntries', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, newEntry})
                  });
              
                  const { id } = await response.json();
                  console.log("New entry added with ID:", id);
                
                setSendMail(true)
                setMessage("Entry submited successfully")
            } catch(error){
                setSendMail(true)
                setMessage(`Could not submit entry. ${error}`)
                console.error(error) 
            }
            e.target.reset()
            setEntry('')
            setSend("Send")
        }else{
            alert('Entry cannot be blank')
        }
    }

    return(
        <div className="input-div">
            <form onSubmit={handleSubmit} >
                <h2>Journal entry</h2>
                <textarea maxLength={500} type='text' placeholder="Enter your Journal " className="message-input" value={entry} onChange={(e)=> setEntry(e.target.value)} />
                <br/>
                <Button buttonText={send} />
            </form>
            <PopupMessage 
                setSendMail={setSendMail} 
                sendMail={sendMail}
                message={message}
                />
        </div>
    )
}

export default Input