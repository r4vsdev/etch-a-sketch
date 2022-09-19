function makeGrid(numberOfSquares) {
    for (let i=0 ; i <= numberOfSquares ; i++) {
        const grid = document.querySelector('.grid');
        const square = document.createElement('div');
        square.classList.add('square')
        square.textContent = i
        grid.appendChild(square);
    }
}

makeGrid(256)

const squares = document.querySelectorAll('.square')
squares.forEach(square => square.addEventListener('mouseenter',changeBackground ));

function changeBackground() {
    console.log('hi');
    this.style.background = 'white';                                      

}

