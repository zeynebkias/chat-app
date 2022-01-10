import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import Counter from './components/Counter'
import Exo1 from './components/Exo1'
import Exo2 from './components/Exo2'
import CounterCoponent from './components/CounterCoponent'



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter/> */}
    {/* <Exo1/> */}
       {/* <Exo2/> */}
       <CounterCoponent/>


  </React.StrictMode>,
  document.getElementById('root')
)
