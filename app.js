const game_grid_div = document.getElementById('game-grid');

// create 16x16 game grid
for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    game_grid_div.appendChild(gridSquare);
}

const gridSquares = document.querySelectorAll('.grid-square');
gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseenter', () => {
        gridSquare.classList.add('activated');
    });
});