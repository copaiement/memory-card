// build scoreboard section with current score and max score
export function Scoreboard({ currScore, hiScore }) {
  return (
    <div className="scoreboard">
      <div className="currScore">Current Score: {currScore}</div>
      <div className="hiScore">High Score: {hiScore}</div>
    </div>
  )
} 