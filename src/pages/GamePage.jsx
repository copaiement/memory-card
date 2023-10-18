import { Gameboard } from "../components/Gameboard";
import { Scoreboard } from "../components/Scoreboard";

// build the main page of the game, made of scoreboard and gameboard
export function GamePage({ flipStatus, piecelist, currScore, hiScore, difficulty, handleClick }) {
  return (
    <div className="gamePage">
      <Scoreboard
        currScore={currScore}
        hiScore={hiScore}
      />
      <Gameboard
        flipStatus={flipStatus}
        piecelist={piecelist}
        difficulty={difficulty}
        handleClick={handleClick}
      />
    </div>
  )
}


