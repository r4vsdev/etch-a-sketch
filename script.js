let size;
let squares;
let currentColor = 'white';

function makeGrid(numberOfSquares) {
    const grid = document.querySelector('.grid');
    const width = parseInt(
        getComputedStyle(grid)
        .width
        .replace('px',''));
    
    for (i=1 ; i <= numberOfSquares**2 ; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('style',`width: ${width/numberOfSquares}px;`)
        grid.appendChild(square);
    }
    size = i-1;
    updateSquareList();
    squares.forEach(square => square.addEventListener('mouseenter', changeBackgroundToCurrentColor));
}
function deleteGrid () {
    for (i = 1 ; i <= size ; i++) {
        const square = document.querySelector('.square');
        square.remove();
    }
}
function getRandomColor () {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
function changeBackgroundToCurrentColor() {
    if (currentColor === 'colorful') this.style.background = getRandomColor();
    if (currentColor === 'white')    this.style.background = 'white';
}
function makeNewGrid () {
    let newSize = +window.prompt("Enter the new size of the grid","20");
    if (newSize > 60) newSize = 60;
    if (newSize <= 0) newSize = 4;
    deleteGrid();
    makeGrid(newSize);
}
function updateSquareList () {
    squares = document.querySelectorAll('.square');
}
function changeCurrentColorToWhite() {
    currentColor = 'white';
}
function changeCurrentColorToColorful() {
    currentColor = 'colorful';
}

makeGrid(10);

// New Grid btn
const btn = document.querySelector('.btn');
btn.addEventListener('click', makeNewGrid);

// white
const whiteButton = document.querySelector('#white');
whiteButton.addEventListener('click', changeCurrentColorToWhite);

// colorful
const colorfulButton = document.querySelector('#colorful');
colorfulButton.addEventListener('click', changeCurrentColorToColorful);
