
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

function makeId(colorName) {
  return colorName.replace(/\s/g, '').toLowerCase();
}

// new method
async function fetchOneColor(rgb) {
  let res = await fetch(`https://www.thecolorapi.com/id?rgb=${rgb}`)
  let colorFull = await res.json();
  return [colorFull.image.bare, colorFull.name.value, makeId(colorFull.name.value)];
}

export async function fetchAllColors(qty) {
  let colorArray = [];
  while (colorArray.length < qty) {
    // add duplicate checking??
    colorArray.push(randRGB());
  }
  return await Promise.all(colorArray.map(fetchOneColor))
}
