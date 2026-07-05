const container = document.querySelector(".container");
const refreshButton = document.querySelector("#refresh");

let rainbowEffect = false;
let opacityEffect = false;

createGrid(16, 16);

const squares = document.querySelectorAll(".block");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "#d9a441";
  });
});

function rainbowPen() {
  squares.forEach((square) => {
    square.addEventListener("mouseover", () =>{
      square.style.backgroundColor = getRandomColor()
    })
  })
}

function opacityPen() {
  squares.forEach((square) => {
    square.dataset.opacity = 0;

    square.addEventListener("mouseover", () => {
      let opacity = Number(square.dataset.opacity);

      if (opacity < 1) {
        opacity = Math.min(1, opacity + 0.1);
        square.dataset.opacity = opacity;
      }
      square.style.backgroundColor = `rgba( ${square.dataset.color}, ${opacity})`;
    });
  });
}




/* Rainbow Button turns on the rgb rainbowEffeect */

const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", () => {
  if (rainbowEffect) {
    !rainbowEffect;
  } else {
    rainbowPen();
  }
});

/* Refresh Button clears screen and gets new grid dimensions*/

/* Events */

refreshButton.addEventListener("click", () => {
  clearGrid();
  getGridSize();
});

/* Functions */
function createGrid(gridHeight, gridWidth) {
  for (let i = 1; i <= gridHeight * gridWidth; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("block");

    gridBlock.style.width = `${100 / gridWidth}%`;
    gridBlock.style.height = `${100 / gridHeight}%`;

    container.appendChild(gridBlock);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `${r}, ${g}, ${b}`;
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

