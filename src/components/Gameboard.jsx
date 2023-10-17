import { Card } from "./Card"

export function Gameboard({ piecelist, handleClick }) {
  return (
    <div className="gameboard">
      {piecelist.map((item) => (
        <Card
          key={item[2]}
          image={item[0]}
          title={item[1]}
          colorId={item[2]}
          handleClick={handleClick}
        />
      ))}
    </div>
  )
}

