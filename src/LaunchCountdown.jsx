import React from "react"
import { useState } from "react"

export default function LaunchCountdown(props) {


  const [count, setCount] = useState(5)

  function handleDecrement() {
      setCount(prevCount => prevCount > 0 ? prevCount - 1 : prevCount)
  }

  function handleReset() {
      setCount(5)
  }


    return (
        
        <>
            <h1>{count > 1 ? count : count === 1 ? "👩🏽‍🚀" : "🚀"}</h1>
            <h1></h1>
            <h2>{count}</h2>
            <button onClick={handleDecrement}>
            Decrement
            </button>
            <button onClick={handleReset}>
            Reset
            </button>
        </>
    )
}