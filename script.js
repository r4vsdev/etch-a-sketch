let size;
let squares;
let currentColor = 'white';
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
    squares.forEach(square => square.addEventListener('mouseenter', changeBackgroundToCurrentColor));
    // squares.forEach(square => square.addEventListener('mouseenter', changeBackgroundToRandom ));
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
function changeBackgroundToCurrentColor() {
    if (currentColor === 'colorful') this.style.background = getRandomColor();
    if (currentColor === 'white') this.style.background = 'white';
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
