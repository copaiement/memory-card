export function toggleLoader() {
  let loader = document.querySelector('.loaderContainer');
  loader.classList.toggle('hidden');
}

export function getRand(min, max) {
  min = Math.ceil(min);
  // add 1 to max since random never = max
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min) + min); 
}