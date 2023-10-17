// build a card to display an image and text about the image

export function Card({ image, title, id, handleClick }) {
  return (
    <div className="card"
      onClick={handleClick}
    >
      <img className="cardImage" src={image}></img>
      <div className="cardTitle">{title}</div>
    </div>
  )
}