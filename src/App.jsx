import './App.css'
import { useState } from 'react'
import { fetchColors } from './utils/getImages'
import { NewGame } from './components/NewGame';
import { Loader } from './components/Loader';
// build score state here

function App() {
  const [colors, setColors] = useState([]);
  const [currScore, setCurrScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);

  function updateColorArr(qty) {
    //let newColors = fetchColors(qty);
    setColors(fetchColors(qty))
    console.log(colors);
  }

  return (
    <>
      <Loader/>
      <NewGame
        easyFxn={() => updateColorArr(5)}
        medFxn={() => updateColorArr(10)}
        hardFxn={() => updateColorArr(15)}
      />
    </>
  )
}

export default App
