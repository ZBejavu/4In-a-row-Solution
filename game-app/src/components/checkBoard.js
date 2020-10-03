import checkRow from './checkRow';
import checkDiagonal from './checkDiagonal';
import checkColumn from './checkColumn';

function checkBoard(gameBoard) {
    let winner;
    winner = checkRow(gameBoard);
    if(winner) {
        return winner;
    }
    winner = checkColumn(gameBoard);
    if(winner) {
        return winner;
    }
    winner = checkDiagonal(gameBoard);
    if(winner) {
        return winner;
    }
    // tie check
    if(!gameBoard.some(column => column.some(square => square === 0))) {
        return winner = 'tie'
    }
}

export default checkBoard