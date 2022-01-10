import { useState } from 'react'
import React from "react";
import './App.css'
import Message  from './components/Message';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    message1: '',
    message2:'',

     }
  }
  render() { 

const divStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

}

const DivStyle = {

  height: '50vh',
  width: '10px',
  backgroundColor : 'gray',
  marginTop: '5rem'
}

    return ( 

<div style={divStyle}>
                <Message
                    name="Mohammed"
                    SendMsg={msg => this.setState({ message1: msg })}
                    ChatMessage={this.state.message2}
                ></Message>
                <div style={DivStyle}></div>
                <Message
                    name="Ali"
                    SendMsg={msg => this.setState({ message2: msg })}
                    ChatMessage={this.state.message1}
                ></Message>
                
            </div>

     );
  }
}
 
export default App;

