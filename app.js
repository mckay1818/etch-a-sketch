const game_grid_div = document.getElementById('game-grid');
const grid_resize_btn = document.querySelector('button');
let side = 16;
createGrid(side);

function createGrid(side) {
    // ensure grid size remains the same regardless of # of squares
    game_grid_div.style.gridTemplateColumns = 'repeat(' + side + ', 1fr)';
    game_grid_div.style.gridTemplateRows = 'repeat(' + side + ', 1fr)';
    // create 16x16 game grid
    for (let i = 0; i < (side * side); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        game_grid_div.appendChild(gridSquare);
        const gridSquares = document.querySelectorAll('.grid-square');
        gridSquares.forEach(gridSquare => colorTheSquare(gridSquare));
    }
}

function clearGrid(game_grid_div) {
    while (game_grid_div.firstChild) {
        game_grid_div.removeChild(game_grid_div.firstChild);
    }
}

function resizeGrid(side) {
    side = prompt('Please enter a new grid side length from 1-64');
    side = parseInt(side);
    if (side > 0 && side < 65) {
        clearGrid(game_grid_div);
        createGrid(side);
    } else {
        alert('Invalid input. Please use a number from 1-64');
        resizeGrid();
    }
};

const gridSquares = document.querySelectorAll('.grid-square');
function colorTheSquare(gridSquare) {
    gridSquare.addEventListener('mouseenter', () => {
        // let gridStyles = getComputedStyle(gridSquare);
        // let gridSquareBrightness = gridStyles.filter.
        gridSquare.style.backgroundColor = '#833ab4';
    });
}

grid_resize_btn.addEventListener('click', resizeGrid);