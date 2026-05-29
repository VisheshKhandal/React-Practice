import { useState } from 'react'
import './App.css'

function App() {

  // useState Hook
  const [counter, setCounter] = useState(15)

  // Function to increase value
  /* React batches state updates inside event handlers, so the current `counter` variable is a fixed snapshot. 
  If we call setCounter(counter + 1) three times, every call uses the same old value and the updates do not accumulate.
   Using the functional updater form `prev => prev + 1` ensures each increment uses the latest state value, so all three updates are applied correctly. */
  const addValue = () => {
    console.log("Button Clicked")
    setCounter(prev => prev + 1)
    setCounter(prev => prev + 1)
    setCounter(prev => prev + 1)
  }

  // Function to decrease value
  const removeValue = () => {
    if(counter === 0) {
      alert("Counter value cannot be less than 0")
      return
    }
    setCounter(prev => prev - 1)
    setCounter(prev => prev - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>

      <br />

      <h2>Counter value : {counter}</h2>

      <br />

      <button onClick={addValue}>
        Add Value
      </button>

      <br />
      <br />

      <button onClick={removeValue}>
        Remove Value
      </button>
    </>
  )
}

export default App

