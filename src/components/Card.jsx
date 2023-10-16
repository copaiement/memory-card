// build a card to display an image and text about the image

export function Card({ img }) {
  return (
    <div className="card">
      <img className="cardImage" src={img[0]}></img>
      <div className="cardTitle">{img[1]}</div>
    </div>
  )
}