// Use the color API to get random colors
// https://www.thecolorapi.com/id?rgb=rgb(255,0,0)

// Pick random RGB value (0 to 255)

// Get images and name info from API

// useEffect to do this once on load.

// sore colors and info in an array

function randRGB() {

}

function getRand(min, max) {
  min = Math.ceil(min);
  // add 1 to max since random never != max
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min) + min); 
}