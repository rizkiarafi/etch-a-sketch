const gridContainer = document.querySelector("#container");
const newGridSizeButton = document.querySelector("#replace-grid-size");

const CONTAINER_SIZE = 800;
const INITIAL_GRID_SIZE = 16;

setGridSize(INITIAL_GRID_SIZE, CONTAINER_SIZE);

gridContainer.addEventListener("mouseover", changeColor);
newGridSizeButton.addEventListener("click", () =>
  setGridSize(getNewGridSize(), CONTAINER_SIZE),
);

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

function getNewGridSize() {
  let gridSize = prompt("Give a number!");

  while (isNaN(Number(gridSize))) {
    alert("You should give a number not a string!");
    gridSize = prompt("Give a number!");
  }

  return gridSize;
}

function setGridSize(gridSize, containerSize) {
  const squareSize = containerSize / gridSize;

  clearGridContainer();
  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    gridContainer.appendChild(newGridSquare(squareSize));
  }
}

function clearGridContainer() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}
