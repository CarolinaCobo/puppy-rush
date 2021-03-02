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

// Drag the puppies. 
    let colorBeingDragged;
    let colorBeingReplaced;
    let squareIdBeingDragged;
    let squareIdBeingReplaced; 

    //In built event event listeners in every event of dragging. 
    squares.forEach ( square => square.addEventListener('dragstart', dragStart))
    squares.forEach ( square => square.addEventListener('dragend', dragEnd))
    squares.forEach ( square => square.addEventListener('dragover', dragOver))
    squares.forEach ( square => square.addEventListener('dragenter', dragEnter))
    squares.forEach ( square => square.addEventListener('dragLeave', dragLeave))
    squares.forEach ( square => square.addEventListener('drop', dragDrop))

    function dragStart() {
        colorBeingDragged = this.style.backgroundColor; // Will pick the color that is being dragged
        squareIdBeingDragged = parseInt(this.id); //ParseInt will make it an integer
    }

    function dragOver(e) {
        e.preventDefault() //Prevents it to do the default action
    }

    function dragEnter(e) {
        e.preventDefault() //Prevents it to do the default action        
    }

    function dragLeave() {
        console.log(this.id, 'dragover')
    }  

    function dragDrop() {
        colorBeingReplaced = this.style.backgroundColor; 
        squareIdBeingReplaced = parseInt(this.id);
        this.style.backgroundColor = colorBeingDragged;
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;    
    }

    function dragEnd() {
        console.log(this.id, 'dragend')

        //Valid moves will only allow to move it around 
        let validMoves = [
            squareIdBeingDragged -1, 
            squareIdBeingDragged -width, 
            squareIdBeingDragged +1,
            squareIdBeingDragged +width,
        ]

        let validMove = validMoves.includes(squareIdBeingReplaced);

        if (squareIdBeingReplaced && validMove) {
            squareIdBeingReplaced = null;  
        } else if (squareIdBeingReplaced && !validMove) {   // if it's too far 
            squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced; // Gives back its color to get back to the original spot
            squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged; // Original square that will be back to the original color
        } else squares [squareIdBeingDragged].style.backgroundColor = colorBeingDragged; //Color back to the original square
    }

// Checking for matches 

// Check for row of three 

function checkRowForThree() {
    for (i=0; i < 61; i++) { //Max squares is 64 so we are using 61 as it will check if there are 3 matches checking from 61 to 64
        let rowOfThree = [i, i+1, i+2]  
        let decidedColor = squares[i].style.backgroundColor;
        const isBlank = squares[i].style.backgroundColor === '';

}


})