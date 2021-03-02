document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score')
    const width = 8;
    const squares = [];
    let score = 0;

    const puppyColors = [
        'red',
        'yellow',
        'orange',
        'purple',
        'green',
        'blue'
    ];

    // Create board 
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
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
    squares.forEach(square => square.addEventListener('dragstart', dragStart));
    squares.forEach(square => square.addEventListener('dragend', dragEnd));
    squares.forEach(square => square.addEventListener('dragover', dragOver));
    squares.forEach(square => square.addEventListener('dragenter', dragEnter));
    squares.forEach(square => square.addEventListener('dragLeave', dragLeave));
    squares.forEach(square => square.addEventListener('drop', dragDrop));

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
            squareIdBeingDragged - 1,
            squareIdBeingDragged - width,
            squareIdBeingDragged + 1,
            squareIdBeingDragged + width,
        ]

        let validMove = validMoves.includes(squareIdBeingReplaced);

        if (squareIdBeingReplaced && validMove) {
            squareIdBeingReplaced = null;
        } else if (squareIdBeingReplaced && !validMove) {   // if it's too far 
            squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced; // Gives back its color to get back to the original spot
            squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged; // Original square that will be back to the original color
        } else squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged; //Color back to the original square
    }

    // Drop puppies once some have been cleared

    function moveDown() {
        for (i = 0; i < 55; i++) {  // Wants to check the squares below
        
            if(squares[i + width].style.backgroundColor === '') { //Empty color it will be true
                squares[i + width].style.backgroundColor = squares[i].style.backgroundColor; //Passing the color to the empty box. 
                squares[i].style.backgroundColor = '';
                const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
                const isFirstRow = firstRow.includes(i);
                if (isFirstRow && squares[i].style.backgroundColor === '') {
                    let randomColor = Math.floor(Math.random() * puppyColors.length);
                    squares[i].style.backgroundColor = puppyColors[randomColor];

                }

            }
        }

    } 



    // Checking for matches 
    // Check for row of Four

    function checkRowForFour() {
        for (i = 0; i < 60; i++) { //Max squares is 64 so we are using 60 as it will check if there are 4 matches checking from 61 to 64
            let rowOfFour = [i, i+1, i+2, i+3]; // Defines the row 
            let decidedColor = squares[i].style.backgroundColor; // Grab the color of the first square and assign it
            const isBlank = squares[i].style.backgroundColor === ''; //Blank space if it's empty it equals true

            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55]; // I don't what the row of 4 to start
            if (notValid.includes(i)) continue;

            if (rowOfFour.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {  //Every index is equal to the color of the first square it will execute
                score += 4; // Add 4 points when we find 3 colors
                scoreDisplay.innerHTML = score;
                rowOfFour.forEach(index => {
                    squares[index].style.backgroundColor = '' // If it matches will give it an empty color
                })
            }
        }
    }

    checkRowForFour();

    // Check for column of Four

    function checkColumnForFour() {
        for (i = 0; i < 47; i++) { 
            let columnOfFour = [i, i + width, i + width*2, i+width*3]; // Defines the row 
            let decidedColor = squares[i].style.backgroundColor; // Grab the color of the firs square and assign it
            const isBlank = squares[i].style.backgroundColor === ''; //Blank space if it's empty it equals true

            if (columnOfFour.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {  //Every index is equal to the color of the first square it will execute
                score += 4; // Add 4 points when we find 3 colors
                scoreDisplay.innerHTML = score;
                columnOfFour.forEach(index => {
                    squares[index].style.backgroundColor = '' // If it matches will give it an empty color
                })
            }
        }
    }

    checkColumnForFour();


    // Check for row of three 

    function checkRowForThree() {
        for (i = 0; i < 61; i++) { //Max squares is 64 so we are using 61 as it will check if there are 3 matches checking from 61 to 64
            let rowOfThree = [i, i + 1, i + 2]; // Defines the row 
            let decidedColor = squares[i].style.backgroundColor; // Grab the color of the first square and assign it
            const isBlank = squares[i].style.backgroundColor === ''; //Blank space if it's empty it equals true

            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55]; // I don't what the row of 3 to start
            if (notValid.includes(i)) continue;

            if (rowOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {  //Every index is equal to the color of the first square it will execute
                score += 3; // Add 3 points when we find 3 colors
                scoreDisplay.innerHTML = score;
                rowOfThree.forEach(index => {
                    squares[index].style.backgroundColor = '' // If it matches will give it an empty color
                })
            }
        }
    }

    checkRowForThree();

    // Check for column of three 

    function checkColumnForThree() {
        for (i = 0; i < 47; i++) { //3 squares multiplied 7
            let columnOfThree = [i, i + width, i + width * 2]; // Defines the row 
            let decidedColor = squares[i].style.backgroundColor; // Grab the color of the firs square and assign it
            const isBlank = squares[i].style.backgroundColor === ''; //Blank space if it's empty it equals true

            if (columnOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {  //Every index is equal to the color of the first square it will execute
                score += 3; // Add 3 points when we find 3 colors
                scoreDisplay.innerHTML = score;
                columnOfThree.forEach(index => {
                    squares[index].style.backgroundColor = '' // If it matches will give it an empty color
                })
            }
        }
    }

    checkColumnForThree();


    // TO DO HERE!! > ADD BUTTON TO ACTIVATE THIS FUNCTIONALITY (CHECK TETRIS GAME)

    window.setInterval(function () {  // Invokes the function constantly with a 100 milliseconds interval 
        moveDown()
        checkRowForFour();
        checkColumnForFour();
        checkRowForThree();
        checkColumnForThree();
    }, 100)




})