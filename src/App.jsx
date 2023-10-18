import './App.css'
import { useState } from 'react'
import { fetchAllColors } from './utils/getImages'
import { NewGame } from './components/NewGame';
import { Loader } from './components/Loader';
import { GamePage } from './pages/GamePage';
import { toggleLoader, getRand } from './utils/utils';
// build score state here

function App() {
  const gameValues = [
    {
      difficulty: 'easy',
      colors: 5,
      visible: 3
    },
    {
      difficulty: 'medium',
      colors: 10,
      visible: 6
    },
    {
      difficulty: 'hard',
      colors: 40,
      visible: 8
    }
  ];
  const [colors, setColors] = useState([]);
  const [visible, setVisible] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [currScore, setCurrScore] = useState(0);
  const [hiScore, setHiScore] = useState(
    localStorage.getItem('hiScore') || '0'
  );
  const [status, setStatus] = useState('load');

  async function initializeColorArr(colorQty, visibleQty) {
    toggleLoader();
    // initialize colors
    let newColors = await fetchAllColors(colorQty);
    // initialize visible
    let newVisible = []
    for (let i = 0; i < visibleQty; i++) {
      newVisible[i] = newColors[i];
    }
    setColors(newColors);
    setVisible(newVisible);
    toggleLoader();
  }

  function getNewVisible(qty) {
    // pick randomly from colors and update visible colors array
    // at least one color should not be clicked
    let newVisible = [];

    while (newVisible.length < qty) {
      console.log('looping');
      // pick randomly from colors and push
      newVisible.push(colors[getRand(0, (colors.length - 1))]);
      // if every color is clicked, reshuffle
      if (newVisible.every((color) => color.clicked === true)) {
        newVisible = [];
      }
    }
    setVisible(newVisible);
  }

  function saveScore() {
    let newHiScore = 0;
    localStorage.setItem('hiScore', newHiScore)
  }

  function handleCardClick(e) {
    console.log(e.target.id);
    console.log(colors);
    console.log(difficulty);
    // check if card already clicked
    let clickedColor = colors.find((color) => color.id === e.target.id);
    console.log(clickedColor);
    if (clickedColor.clicked) console.log('LOSER')
    // if clicked, set status to 'lose'

    // if not clicked
    // update score
    // check for a win
    // set status to flip
    // update visible colors


    // find color in array, mark clicked
    colors.map((color) => {
      if (color.id === e.target.id) {
        color.clicked = true;
      }
    })
    
  }

  function handleNG(diffy) {
    setDifficulty(diffy);
    let gameVal = gameValues.find((setup) => setup.difficulty === diffy);
    initializeColorArr(gameVal.colors, gameVal.visible);
    setCurrScore(0);
    setStatus('play');
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
          piecelist={visible}
          score={[currScore, hiScore]}
          difficulty={difficulty}
          handleClick={handleCardClick}
        />
      }

    </>
  )
}

export default App
