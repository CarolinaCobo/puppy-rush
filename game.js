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
        square.setAttribute('id', i) // 64 squares on the board
        let randomColor = Math.floor(Math.random() * puppyColors.length) // assign a random integer
        square.style.backgroundColor = puppyColors[randomColor] // assign the random color
        grid.appendChild(square)
        squares.push(square)
    }
}
createBoard()

// Drag the puppies. In built event event listeners in every event of dragging. 

    let colorBeingDragged;
    let colorBeingReplaced;
    let squareIdBeingDragged;
    let squareIdBeingReplaced; 

    squares.forEach ( square => square.addEventListener('dragstart', dragStart))
    squares.forEach ( square => square.addEventListener('dragend', dragEnd))
    squares.forEach ( square => square.addEventListener('dragOver', dragOver))
    squares.forEach ( square => square.addEventListener('dragEnter', dragEnter))
    squares.forEach ( square => square.addEventListener('dragLeave', dragLeave))
    squares.forEach ( square => square.addEventListener('drop', dragDrop))

    function dragStart() {
        colorBeingDragged = this.style.backgroundColor
        squareIdBeingDragged = parseInt(this.id)
        console.log(colorBeingDragged)
    }

    function dragOver() {
        
    }

    function dragEnter() {
        
    }

    function dragLeave() {
        
    }

    function dragEnd() {
        
    }

    function dragDrop() {
        colorBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
        
    }

})