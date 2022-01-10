import React from 'react'
import { useState } from "react";


function Chat({name, ChatMessage ,SendMsg}) {

    const [msg, setmsg] = useState("");

  const  inputChangeHandler = (e) =>  setmsg(e.target.value);


  const formStyle ={
    display : 'flex',
    gap : '1rem',
    flexDirection : 'column',
}



const inputStyle ={
    width : '100%',
    fontFamily: 'Montserrat',
    padding : '10px',

}

const titleStyle ={
    textAlign : 'center',
}

    return (
        <div>
             <h1 style={titleStyle}>{name}</h1>
             <form style={formStyle}

                    onSubmit={(e) => {
                        e.preventDefault();
                        {SendMsg(msg)};
                        setmsg({ msg: "" });
                    }}>

             <input style={inputStyle} type="text" placeholder="Votre message" onChange={inputChangeHandler} value={msg} />
             <input type="submit" style={{textAlign : 'center' , backgroundColor : '#315344', border : 'none', borderRadius : '5px', padding : '10px', color : 'white', fontFamily: 'Montserrat', width : '50%', marginLeft : '4rem',

}}></input>

             </form>

             <h4 style ={{textDecoration : 'underline', fontWeight : 'bold',}}>Message</h4>
             <h5> {ChatMessage} </h5>


           </div>
    )
}

export default Chat;
