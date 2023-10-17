import './App.css'
import { useState } from 'react'
import { fetchAllColors } from './utils/getImages'
import { NewGame } from './components/NewGame';
import { Loader } from './components/Loader';
import { GamePage } from './pages/GamePage';
import { toggleLoader } from './utils/domFunctions';
// build score state here

function App() {
  const [colors, setColors] = useState([]);
  const [difficulty, setDifficulty] = useState();
  const [currScore, setCurrScore] = useState(0);
  const [hiScore, setHiScore] = useState(
    localStorage.getItem('hiScore') || 0
  );
  const [status, setStatus] = useState('load');

  async function updateColorArr(qty) {
    toggleLoader();
    let newColors = await fetchAllColors(qty);
    setColors(newColors);
    console.log(newColors);
    setCurrScore(0);
    setStatus('play');
    toggleLoader();
  }

  function saveScore() {
    let newHiScore = 0;
    localStorage.setItem('hiScore', newHiScore)
  }

  function handleCardClick(e) {
    console.log(e.target.id);

  }

  function handleNG(difficulty) {
    setDifficulty(difficulty)
    if (difficulty === 'easy') {
      updateColorArr(5);
    } else if (difficulty === 'medium') {
      updateColorArr(10);
    } else if (difficulty === 'hard') {
      updateColorArr(15);
    }
  }

  return (
    <>
      <Loader/>
      {status === 'load' ? 
        <NewGame
        easyFxn={() => handleNG('easy')}
        medFxn={() => handleNG('medium')}
        hardFxn={() => handleNG('hard')}
        />
      :
        <GamePage
          piecelist={colors}
          score={[currScore, hiScore]}
          difficulty={difficulty}
          handleClick={handleCardClick}
        />
      }

    </>
  )
}

export default App
