import { Card } from "./Card"

export function Gameboard({ flip, piecelist, difficulty, handleClick }) {
  // object method
  return (
    <div className={'gameboard ' + difficulty}>
      {piecelist.map((item) => (
        <Card
          key={item.id}
          flip={flip}
          image={item.img}
          title={item.name}
          colorId={item.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  )
}

