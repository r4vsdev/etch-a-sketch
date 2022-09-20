let size;
function makeGrid(numberOfSquares) {
    for (i=1 ; i <= numberOfSquares**2 ; i++) {
        const grid = document.querySelector('.grid');
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = i;
        grid.appendChild(square);
    }
    size = i-1;
}

function deleteGrid() {
    for (i = 1 ; i <= size ; i++) {
        const square = document.querySelector('.square');
        square.remove();
    }
}

function changeBackground() {
    this.style.background = 'white';                                      
}

function getNewSize () {
    let newSize = window.prompt("Enter the new size of the grid","16");
    deleteGrid();
    makeGrid(newSize);
}


makeGrid(16)

// change background on hover
const squares = document.querySelectorAll('.square')
squares.forEach(square => square.addEventListener('mouseenter',changeBackground ));

// New Grid
const btn = document.querySelector('.btn');
btn.addEventListener('click', getNewSize);