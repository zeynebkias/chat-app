import React from 'react'
import {useReducer} from 'react'

function reducer(state, action) {

switch (action.type) {
case 'increment':
    return {count : state.count +1};
case 'decrement' :
    return {count : state.count - 1};
case 'reset':
    return {count : initialState.count};
default: 
throw new Error 
}

}

const initialState = {count: 0};


    function CounterCoponent  () {


const [state, dispatch]  = useReducer(reducer, initialState);

    return (
        <div>
            <div style={{display: 'flex', gap : '2rem', justifyContent: 'center'}}>
          <button style={{width :'5%', height : '25px', marginTop : '5rem'}} onClick={() => dispatch({type: 'increment'})}>+</button>
          <div style={{marginTop : '5rem'}}>{state.count}</div>
          <button style={{width :'5%', height : '25px', marginTop : '5rem'}} onClick={() => dispatch({type: 'decrement'})}>-</button>
          <button style={{width :'5%', height : '25px', marginTop : '5rem'}} onClick={() => dispatch({type: 'reset'})}>Reset</button>

            </div>
        </div>
    )
}

export default CounterCoponent;
