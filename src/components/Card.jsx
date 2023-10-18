// build a card to display an image and text about the image

export function Card({ flipStatus, image, title, colorId, handleClick }) {
  if (flipStatus) {
    return (    
      <div 
        className="card flip"
      >
        <img className="flipImage" src={image}></img>
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