import React from 'react'
import { useState } from 'react'
import Chat  from './Chat';

function Exo1() {

    const [message1, setmessage1]=useState("");
    const [message2, setmessage2]=useState("");

const SendMessage = (msg)=>{ 
    setmessage1(msg)
}

const divStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

}

const DivStyle = {

  height: '50vh',
  width: '10px',
  backgroundColor : 'gray',
  marginTop: '5rem',
}

    return (
        <div style={divStyle}>
                <Chat
                    name="Mohammed"
                    SendMsg={SendMessage}
                    ChatMessage={message2}>
                </Chat>
                <div style={DivStyle}></div>
                <Chat
                    name="Ali"
                    SendMsg={msg => setmessage2(msg)}
                    ChatMessage={message1}>
                </Chat>


        </div>
    )
}

export default Exo1;
