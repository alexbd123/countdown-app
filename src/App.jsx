import { useState } from 'react'
import './App.css'
import LaunchCountdown from './LaunchCountdown'

function App() {


  return (
    <>
      <div>
      <LaunchCountdown />
      <LaunchCountdown />
      <LaunchCountdown />
      </div>
      <div className="card">   
      </div>
    </>
  )
}

export default App
