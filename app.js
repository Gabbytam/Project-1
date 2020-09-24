console.log('here we goooooo');

document.addEventListener('DOMContentLoaded', ()=> {
    let boardRows;
    let boardSquares;
    for(let i= 0; i<11; i++){
        boardRows= document.createElement('div');
        boardRows.classList.add('row');
        container.append(boardRows);
        for(let j=0; j<14; j++){
            boardSquares= document.createElement('div');
            boardSquares.classList.add('square');
            boardRows.append(boardSquares);
        }
    }
})