import './App.css'
import { useState } from 'react'
import { GetColors } from './components/GetImages'
// build score state here

function App() {

  return (
    <>
      <GetColors
        qty={10}
      />
    </>
  )
}

export default App
