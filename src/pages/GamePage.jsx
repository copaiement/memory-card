import { Gameboard } from "../components/Gameboard";
import { Scoreboard } from "../components/Scoreboard";

// build the main page of the game, made of scoreboard and gameboard
export function GamePage({ piecelist, score, handleClick }) {
  return (
    <div className="gamePage">
      <Scoreboard
        score={score}
      />
      <Gameboard
        piecelist={piecelist}
        handleClick={handleClick}
      />
    </div>
  )
}


