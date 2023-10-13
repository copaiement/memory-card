import { useEffect, useState } from "react";

// Use the color API to get random colors
// https://www.thecolorapi.com/id?rgb=rgb(255,0,0)

// Pick random RGB value (0 to 255)

// Get images and name info from API

// useEffect to do this once on load.

// store colors and info in an array

// helper functions
function randRGB() {
  return `${getRand(0, 255)},${getRand(0, 255)},${getRand(0, 255)}`;
}

function getRand(min, max) {
  min = Math.ceil(min);
  // add 1 to max since random never != max
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min) + min); 
}

export function GetColors({ qty }) {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetchColors(qty)
      .then(newColors => {
        if (mounted) {
          setColors(newColors)
        }
      })
    return () => mounted = false;
  })
}

async function fetchOneColor() {
  let response = await fetch(`https://www.thecolorapi.com/id?rgb=${randRGB()}`);
  let color = await response.json();

  return color;
}

function fetchColors(qty) {
  let colorArray = [];
  for (let i = 0; i < qty; i++) {
    fetchOneColor().then((color) => {
      colorArray.push(color);
    })
  }

  return colorArray;
}

async function getWeather(loc) {
  toggleLoader();
  let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=400f15b7cc534eb7850174113230505&q=${loc}&days=7&aqi=no&alerts=no`, { mode: 'cors' });
  let weather = await response.json();
  return weather;
}

function updatePage(loc) {
  getWeather(loc).then((weather) => {
    console.log(weather);
    buildPage(weather);
  })
    .catch(() => {
      location.textContent = 'Location Not Found!';
    });
}