const container = document.querySelector(".container")

function draw() {
    const squares = document.querySelectorAll(".block")
    squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "#d9a441"
    })
})
}

function createGrid(gridHeight, gridWidth) {
    for (let i = 1; i <= gridHeight * gridWidth; i++) {
        const gridBlock = document.createElement("div")
        gridBlock.classList.add('block')

        gridBlock.style.width = `${100 / gridWidth}%`
        gridBlock.style.height = `${100 / gridHeight}%`

        container.appendChild(gridBlock)
    }
    draw()
}

createGrid(16,16)


const refreshButton = document.querySelector("#refresh");
refreshButton.addEventListener('click',(refresh) => {
    document.querySelectorAll('.block').forEach(gridBlock => {
        gridBlock.remove();
    });
    let size = Number(prompt("How many squares per side?"));
     if (size > 100) {
        let size = Number(prompt("That's too much!"))
    } else {
    createGrid(size,size)
    draw()
})

