const container = document.querySelector(".container");

let size = 0;

function draw() {
  const squares = document.querySelectorAll(".block");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();
    });
  });
}

function createGrid(gridHeight, gridWidth) {
  for (let i = 1; i <= gridHeight * gridWidth; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("block");

    gridBlock.style.width = `${100 / gridWidth}%`;
    gridBlock.style.height = `${100 / gridHeight}%`;

    container.appendChild(gridBlock);
  }
  draw();
}

createGrid(16, 16);

const refreshButton = document.querySelector("#refresh");
refreshButton.addEventListener("click", (refresh) => {
  document.querySelectorAll(".block").forEach((gridBlock) => {
    gridBlock.remove();
  });
  let size = Number(prompt("How many squares per side?"));
  while (size > 100) {
    size = Number(prompt("That's too much!"));
  }
    createGrid(size, size);
    draw();
});

function getRandomColor () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return rgb = `rgb(${r}, ${g}, ${b})`;
}
