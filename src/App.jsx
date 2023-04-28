import { useState } from "react"
import "./App.css"

function App() {
  const [myNumber, setMyNumber] = useState(0)

  const incrementMyNumber = () => {
    setMyNumber(myNumber + 1)
  }

  const decrementMyNumber = () => {
    if (myNumber > 0) {
      setMyNumber(myNumber - 1)
    }
  }

  return (
    <div className="App">
      <h3>State management in React</h3>
      <main>
        <h1>{myNumber}</h1>

        <div className="buttons_wrapper">
          <button onClick={incrementMyNumber}>Increment</button>
          <button onClick={decrementMyNumber}>Decrement</button>
        </div>
      </main>
    </div>
  )
}

export default App
