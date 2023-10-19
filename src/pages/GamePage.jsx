import { Gameboard } from "../components/Gameboard";

// build the main page of the game, made of scoreboard and gameboard
export function GamePage({ flip, piecelist, difficulty, handleClick }) {
  return (
    <div className="gamePage">
      <Gameboard
        flip={flip}
        piecelist={piecelist}
        difficulty={difficulty}
        handleClick={handleClick}
      />
    </div>
  )
}

export function GameOverPage({ status, currScore, hiScore, playAgain }) {
  return (
    <div className="gamePage">
      <div className="gameOver">
        <div className="gameOverMsg">Game Over! You {status}.</div>
        <div className="gameOverScore">Your Score: {currScore}</div>
        {currScore === hiScore ?
          <div className="hiScoreMsg">New High Score!</div>
        : ''
        }
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}


