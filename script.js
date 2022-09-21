let size;
function makeGrid(numberOfSquares) {
    for (i=1 ; i <= numberOfSquares**2 ; i++) {
        const grid = document.querySelector('.grid');
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);

        const style = getComputedStyle(grid);
        const width = parseInt(style.width.replace('px',''));
        square.setAttribute('style',`width: ${width/numberOfSquares}px;`)
    }
    size = i-1;
}
makeGrid(10)


function deleteGrid() {
    for (i = 1 ; i <= size ; i++) {
        const square = document.querySelector('.square');
        square.remove();
    }
}

function changeBackground() {
    this.style.background = 'white';                                      
}

function makeNewGrid () {
    let newSize = window.prompt("Enter the new size of the grid","16");
    deleteGrid();
    makeGrid(newSize);
}



// change background on hover
const squares = document.querySelectorAll('.square')
squares.forEach(square => square.addEventListener('mouseenter',changeBackground ));

// New Grid
const btn = document.querySelector('.btn');
btn.addEventListener('click', makeNewGrid);