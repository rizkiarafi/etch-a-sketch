const gridContainer = document.querySelector("#container");

const CONTAINER_SIZE = 800;
const gridSize = 20;
const squareSize = CONTAINER_SIZE / gridSize;

for (let i = 0; i < Math.pow(gridSize, 2); i++) {
  gridContainer.appendChild(newGridSquare());
}

function newGridSquare() {
  const newSquare = document.createElement("div");

  newSquare.style.width = inPixels(squareSize);
  newSquare.style.height = inPixels(squareSize);
  newSquare.classList.add("square");

  return newSquare;
}

function inPixels(number) {
  return number + "px";
}
