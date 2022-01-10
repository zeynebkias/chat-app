import React from 'react'
import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);
  
    const handleIncrement = () => {
      setCount( count => count + 1);
    };
  
    const handleDecrement = () => {
      setCount(count => count - 1);
    };


    return (
      <div>
        <div style={{display: 'flex', gap : '2rem', justifyContent: 'center'}}>
          <button style={{width :'5%', height : '25px', marginTop : '5rem'}} onClick={handleDecrement}>-</button>
          <h5 style={{marginTop : '5rem'}} > {count}</h5>
          <button style={{width :'5%', height : '25px', marginTop : '5rem'}} onClick={handleIncrement}>+</button>
        </div>
      </div>
    );
  }
  
  export default Counter;
