import { Card } from "./Card"

export function Gameboard({ flipStatus, piecelist, difficulty, handleClick }) {
  // object method
  return (
    <div className={'gameboard ' + difficulty}>
      {piecelist.map((item) => (
        <Card
          key={item.id}
          flipStatus={flipStatus}
          image={item.img}
          title={item.name}
          colorId={item.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  )
}

