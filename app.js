const gridContainer = document.querySelector("#container");

const CONTAINER_SIZE = 800;
let gridSize = 16;
const squareSize = CONTAINER_SIZE / gridSize;

for (let i = 0; i < Math.pow(gridSize, 2); i++) {
  gridContainer.appendChild(newGridSquare(squareSize));
}

gridContainer.addEventListener("mouseover", changeColor);

function newGridSquare(size) {
  const newSquare = document.createElement("div");

  newSquare.style.width = inPixels(size);
  newSquare.style.height = inPixels(size);
  newSquare.classList.add("square");

  return newSquare;
}

function changeColor(e) {
  e.target.classList.replace("square", "pen-trailed");
}

function inPixels(number) {
  return number + "px";
}
