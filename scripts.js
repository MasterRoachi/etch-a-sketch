const container = document.querySelector(".container");
const refreshButton = document.querySelector("#refresh");
const rainbowButton = document.querySelector("#rainbow");
const opacityButton = document.querySelector("#opacity");

let rainbowEffect = false;
let opacityEffect = false;

/* Initial Grid */

createGrid(16, 16);

/* Events */

/* Refresh Button clears screen and gets new grid dimensions*/

refreshButton.addEventListener("click", () => {
  clearGrid();
  getGridSize();
});

/* Rainbow Button turns on the rgb Rainbow Effect */

rainbowButton.addEventListener("click", () => {
  rainbowEffect = !rainbowEffect;
});

/* Opacity Button turns on the Opacity Effect */

opacityButton.addEventListener("click", () => {
  opacityEffect = !opacityEffect;
});

/* Pen Functions */

function drawSquare(square) {
  let color;
  if (rainbowEffect) {
    color = getRandomColor();
  } else {
    color = "217, 164, 65";
  }

  let opacity;
  if (opacityEffect) {
    opacity = Number(square.dataset.opacity);

    if (opacity < 1) {
      opacity = Math.min(1, opacity + 0.1);
      square.dataset.opacity = opacity;
    } 
  }else {
      opacity = 1;
    }
    square.style.backgroundColor = `rgba(${color}, ${opacity})`;
  }

/* Grid Functions */

function createGrid(gridHeight, gridWidth) {
  for (let i = 1; i <= gridHeight * gridWidth; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("block");

    gridBlock.style.width = `${100 / gridWidth}%`;
    gridBlock.style.height = `${100 / gridHeight}%`;

    gridBlock.dataset.opacity = 0;

    gridBlock.addEventListener("mouseover", () => {
      drawSquare(gridBlock);
    });

    container.appendChild(gridBlock);
  }
}

function clearGrid() {
  document.querySelectorAll(".block").forEach((gridBlock) => {
    gridBlock.remove();
  });
}

function getGridSize() {
  let size = Number(prompt("How many squares per side?"));
  while (!Number.isInteger(size) || size < 1 || size > 100) {
    size = Number(prompt("Please enter a whole number between 1 and 100."));
  }
  createGrid(size, size);
}

/* Utility Functions */

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return (rgb = `${r}, ${g}, ${b}`);
}
