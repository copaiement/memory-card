import { toggleLoader } from "./toggleloader";

// Use the color API to get random colors
// https://www.thecolorapi.com/id?rgb=rgb(255,0,0)

// Pick random RGB value (0 to 255)

// Get images and name info from API

// useEffect to do this once on load.

// store colors and info in an array

// helper functions
function randRGB() {
  return `rgb(${getRand(0, 255)},${getRand(0, 255)},${getRand(0, 255)})`;
}

function getRand(min, max) {
  min = Math.ceil(min);
  // add 1 to max since random never != max
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min) + min); 
}

async function fetchOneColor() {
  let response = await fetch(`https://www.thecolorapi.com/id?rgb=${randRGB()}`);
  let color = await response.json();
  return [color.image.bare, color.name.value];
}

export function fetchColors(qty) {
  toggleLoader();
  let colorArray = [];
  for (let i = 0; i < qty; i++) {
    fetchOneColor().then((color) => {
      colorArray.push(color);
    })
  }

  setTimeout(() => {
    console.log('delay')
    toggleLoader();
  }, 1000)
  
  return colorArray;
}


