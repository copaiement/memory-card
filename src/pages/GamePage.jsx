// build the main page of the game, made of multiple cards

export function Gameboard({ list }) {

}

export function NewGame({ easyFxn, medFxn, hardFxn}) {
  return (
    <div className="newGameContainer">
      <div className="selectMsg">Select Difficulty</div>
      <div className="diffyBtns">
        <button onClick={easyFxn}>Easy</button>
        <button onClick={medFxn}>Medium</button>
        <button onClick={hardFxn}>Hard</button>
      </div>
    </div>
  )
}