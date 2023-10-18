import { getRand } from "./utils";
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

function makeId(colorName) {
  return colorName.replace(/\s/g, '').toLowerCase();
}

// fetch as an object
async function fetchOneColor(rgb) {
  let res = await fetch(`https://www.thecolorapi.com/id?rgb=${rgb}`)
  let colorFull = await res.json();
  return {
    img: colorFull.image.bare,
    name: colorFull.name.value,
    id: makeId(colorFull.name.value),
    clicked: false
  };
}

// check for duplicate colors and remove
function checkDupes(colors) {
  const colorsArr = colors;
  colorsArr.forEach((color) => {
    if (colorsArr.filter((item) => item.id === color.id).length > 1) {
      colorsArr.splice(colorsArr.indexOf(color), 1);
    }
  })
  return colorsArr;
}

export async function fetchAllColors(qty) {
  let colorArray = [];
  while (colorArray.length < qty) {
    let newRGB = randRGB();
    //reject value duplicates
    if (!colorArray.includes(newRGB)) colorArray.push(randRGB());
  }

  // response
  const colors = await Promise.all(colorArray.map(fetchOneColor))
  
  // check for duplicate color ids
  let noDupes = checkDupes(colors);
  while (noDupes.length < qty) {
    noDupes.push(await fetchOneColor(randRGB()));
    noDupes = checkDupes(noDupes);
  }
  
  return colors;
}
