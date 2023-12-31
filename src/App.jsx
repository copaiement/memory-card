import './App.css'
import { useState, useEffect } from 'react'
import { fetchAllColors } from './utils/getImages'
import { NewGame } from './components/NewGame';
import { Loader } from './components/Loader';
import { GamePage, GameOverPage } from './pages/GamePage';
import { toggleLoader, getRand } from './utils/utils';
// build score state here

function App() {
  // game variables
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
      colors: 15,
      visible: 8
    }
  ];
  const flipTime = 1000;
  // states
  const [colors, setColors] = useState([]);
  const [visible, setVisible] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [currScore, setCurrScore] = useState(0);
  const [hiScore, setHiScore] = useState(
    localStorage.getItem('hiScore') || '0'
  );
  const [status, setStatus] = useState('load');
  const [flip, setFlip] = useState(false);

  // useEffect for card flip
  useEffect(() => {
    setTimeout(() => {
      setFlip(false);
    }, flipTime)
  }, [flip]);

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

  function getNewVisible() {
    // pick randomly from colors and update visible colors array
    // at least one color should not be clicked
    let qty = gameValues.find((setup) => setup.difficulty === difficulty).visible;
    let newVisible = [];

    while (newVisible.length < qty) {
      // pick randomly from colors and push
      let next = colors[getRand(0, (colors.length - 1))];
      if (!newVisible.includes(next)) {
        newVisible.push(next);
      }
      // if every color is clicked, reshuffle
      if (newVisible.every((color) => color.clicked === true)) {
        newVisible = [];
      }
    }
    setVisible(newVisible);
  }

  function saveHiScore(score) {
    if (score > hiScore) {
      setHiScore(score);
      localStorage.setItem('hiScore', score);
    }
  }

  function checkWin() {
    if (colors.every((color) => color.clicked === true)) {
      return true
    }
    return false
  }

  function handleCardClick(e) {
    // make all cards not clickable and flip
    setFlip(true);
    // check if card already clicked
    let clickedColor = colors.find((color) => color.id === e.target.id);
    if (clickedColor.clicked) {
      setStatus('lose'); 
    } else {
      // set color as clicked
      colors.map((color) => {
        if (color.id === e.target.id) {
          color.clicked = true;
        }
      })
      // update score
      setCurrScore(currScore + 1);
      saveHiScore(currScore + 1);
      // check for win
      if (checkWin()) {
        setStatus('win');
      } else {
        // update visible colors
        getNewVisible();
        // set flip to false

      }
    }
  }

  function handleNG(diffy) {
    setDifficulty(diffy);
    let gameVal = gameValues.find((setup) => setup.difficulty === diffy);
    initializeColorArr(gameVal.colors, gameVal.visible);
    setCurrScore(0);
    setStatus('play');
  }

  function playAgain() {
    setStatus('load');
  }

  return (
    <>
      <div className='titleBar'>
        <div className='title'>Color Clicker</div>
        <div className='scoreboard'>
          <div className='currScore'>Current Score: {currScore}</div> 
          <div className='hiScore'>High Score: {hiScore}</div>
        </div>
      </div>
      <Loader/>
      {status === 'load' ? 
        <NewGame
        easyFxn={() => handleNG('easy')}
        medFxn={() => handleNG('medium')}
        hardFxn={() => handleNG('hard')}
        />
      : status === 'play' ?
        <GamePage
          flip={flip}
          piecelist={visible}
          difficulty={difficulty}
          handleClick={handleCardClick}
        />
      :
        <GameOverPage
          status={status}
          currScore={currScore}
          hiScore={hiScore}
          playAgain={playAgain}
        />
      }

    </>
  )
}

export default App
