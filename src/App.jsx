import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let [counter,setCounter] =useState(25)
  let [counter,gauravCounter] = useState(10)
  //let counter = 25
  const addvalue=()=>{
    //counter=counter+1
    //setCounter(counter)
    if(counter<20)
    {
      gauravCounter(counter+1)
      console.log("clicked",counter);
    }
    else
    {
      gauravCounter(counter)
      console.log("clicled,value reached to 20");
    }
  }

  const decreasevalue =()=>{
    if(counter>1)
    {
      gauravCounter(counter-1)
      console.log("clicked",counter);
    }
    else
    {
      gauravCounter(counter)
      console.log("clicked , value reached to 1");
    }
  }
  return (
    <>
      <h1> react and chai</h1>
      <h2>counter value : {counter}</h2>

      <button
        onClick={addvalue}
      >add value</button>
      <br />
      <button
        onClick={decreasevalue}
      >decrease value</button>
      <br />
      <h2>hello counter {counter}</h2>
      <h1>{counter} hii</h1>
    </>
  )
}

export default App
