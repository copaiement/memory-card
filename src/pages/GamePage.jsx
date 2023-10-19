import { Gameboard } from "../components/Gameboard";
import { Scoreboard } from "../components/Scoreboard";

// build the main page of the game, made of scoreboard and gameboard
export function GamePage({ flip, piecelist, currScore, hiScore, difficulty, handleClick }) {
  return (
    <div className="gamePage">
      <Scoreboard
        currScore={currScore}
        hiScore={hiScore}
      />
      <Gameboard
        flip={flip}
        piecelist={piecelist}
        difficulty={difficulty}
        handleClick={handleClick}
      />
    </div>
  )
}

export function GameOverPage({ status, currScore, hiScore }) {
  return (
    <div className="gamePage">
      <div className="gameOver">
        <div className="gameOverMsg">Game Over! You {status}.</div>
        <div className="gameOverScore">Your Score: {currScore}</div>
        {currScore === hiScore ?
          <div className="hiScoreMsg">New High Score!</div>
        : ''
        }
        <button onClick={newGame}>Play Again</button>
      </div>
    </div>
  )
}


