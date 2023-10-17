// build a card to display an image and text about the image

export function Card({ image, title, colorId, handleClick }) {
  return (
    <div 
      className="card"
      id={colorId}
      onClick={handleClick}
    >
      <img className="cardImage" src={image}></img>
      <div className="cardTitle">{title}</div>
    </div>
  )
}