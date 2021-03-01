document.addEventListener('DOMContentLoaded', () => {
     const grid = document.querySelector('.grid')
     const width = 8
     const squares = []

const puppyColors = [
    'red',
    'yellow',
    'orange',
    'purple',
    'green',
    'blue'
]     

// Create board 
function createBoard() {
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div') // creates new div
        square.setAttribute('draggable', true) // makes it draggable

        let randomColor = Math.floor(Math.random() * puppyColors.length) // assign a random integer
        square.style.backgroundColor = puppyColors[randomColor] // assign the random color
        grid.appendChild(square)
        squares.push(square)
    }
}
createBoard()

})