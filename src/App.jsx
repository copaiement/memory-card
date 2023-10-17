import './App.css'
import { useState, useQuery } from 'react'
import { fetchAllColors } from './utils/getImages'
import { NewGame } from './components/NewGame';
import { Loader } from './components/Loader';
import { GamePage } from './pages/GamePage';
import { toggleLoader } from './utils/domFunctions';
// build score state here

function App() {
  const [colors, setColors] = useState([]);
  const [currScore, setCurrScore] = useState(0);
  const [hiScore, setHiScore] = useState(
    localStorage.getItem('hiScore') || 0
  );
  const [status, setStatus] = useState('load');

  // TESTING
 


  async function updateColorArr(qty) {
    toggleLoader();
    let newColors = await fetchAllColors(qty);
    setColors(newColors);
    setCurrScore(0);
    setStatus('play');
    toggleLoader();
  }

  function saveScore() {
    let newHiScore = 0;
    localStorage.setItem('hiScore', newHiScore)
  }

  function handleCardClick(e) {

  }

  return (
    <>
      <Loader/>
      {status === 'load' ? 
        <NewGame
        easyFxn={() => updateColorArr(5)}
        medFxn={() => updateColorArr(10)}
        hardFxn={() => updateColorArr(15)}
        />
      :
        <GamePage
          piecelist={colors}
          score={[currScore, hiScore]}
          handleClick={handleCardClick}
        />
      }

    </>
  )
}

export default App
