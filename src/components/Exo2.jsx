import React from 'react'
import { useState } from 'react'
import Cafe  from './Cafe'
import Client  from './Client'


function Exo2() {

    let Menu = ['Coffe', 'Exspresso', 'Cappuccino' , 'Iced'];
    const [input, setInput] = useState ("");
    const [result, setResult] = useState ("");
    const [choise, setChoice] = useState ([""]);




    const event = (e) => {
        setInput(e.target.value);
    }

    const output = (e) => {
          e.preventDefault();

          let exist = false;
if (Menu.includes(input)){
    setResult("Voila votre demande"+" " + input);
    setChoice([result])

}else{
    setResult("desole" +" " + input + " " + "n'exsite pas dans notre menu");
    setChoice([result])

}

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
      marginTop: '5rem'
    }

    return (
        <div style={divStyle}>


            <Client input={input} event={event} choise={choise} output={output}/>

            <div style={DivStyle}></div>

            <Cafe Menu={Menu}/>


        </div>
    )
}

export default Exo2;
