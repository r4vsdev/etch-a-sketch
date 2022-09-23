let size;
let squares;
let currentColor = 0; // 0 maps to black, 1 maps to colorful
function makeGrid(numberOfSquares) {
    for (i=1 ; i <= numberOfSquares**2 ; i++) {
        const grid = document.querySelector('.grid');
        const square = document.createElement('div');
        square.classList.add('square');
        const width = parseInt(getComputedStyle(grid).width.replace('px','')); 
        square.setAttribute('style',`width: ${width/numberOfSquares}px;`)

        grid.appendChild(square);
    }
    size = i-1;
    updateSquareList();
    squares.forEach(square => square.addEventListener('mouseenter', changeBackgroundToWhite ));
}
function deleteGrid () {
    for (i = 1 ; i <= size ; i++) {
        const square = document.querySelector('.square');
        square.remove();
    }
}
function getRandomColor () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
}
function changeBackgroundToWhite () {
    this.style.background = 'white';
}
function changeBackgroundToRandom () {
    this.style.background = getRandomColor();
}
function makeNewGrid () {
    let newSize = +window.prompt("Enter the new size of the grid","20");
    if (newSize > 50) {newSize = 50;}
    if (newSize <= 0) {newSize = 4}
    deleteGrid();
    makeGrid(newSize);
}
function updateSquareList () {
    squares = document.querySelectorAll('.square');
}

makeGrid(10);

// New Grid btn
const btn = document.querySelector('.btn');
btn.addEventListener('click', makeNewGrid);


// black
// colorful

