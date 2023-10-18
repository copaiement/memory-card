// build a card to display an image and text about the image

export function Card({ flip, image, title, colorId, handleClick }) {
  // handle flip change
  if (flip) {
    return (    
      <div 
        className="card flip"
      >
        <img className="cardImage" src={image}></img>
        <div className="cardTitle">{title}</div>
      </div>
    )
  } else {
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
}