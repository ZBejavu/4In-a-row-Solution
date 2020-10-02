import checkRow from './checkRow';
import checkDiagonal from './checkDiagonal';
import checkColumn from './checkColumn';
function checkBoard(gameBoard){
    let winner;
    winner = checkRow(gameBoard);
    if(winner){
        return winner;
    }
    winner = checkColumn(gameBoard);
    if(winner){
        return winner;
    }
    winner = checkDiagonal(gameBoard);
    if(winner){
        return winner;
    }
        if (
            gameBoard[gameBoard.length-1].findIndex(value => value === 0) === -1 &&
            gameBoard[gameBoard.length-2].findIndex(value => value === 0) === -1 &&
            gameBoard[gameBoard.length-3].findIndex(value => value === 0) === -1 &&
            gameBoard[gameBoard.length-4].findIndex(value => value === 0) === -1 &&
            gameBoard[gameBoard.length-5].findIndex(value => value === 0) === -1 &&
            gameBoard[gameBoard.length-6].findIndex(value => value === 0) === -1 &&
            gameBoard[gameBoard.length-7].findIndex(value => value === 0) === -1
            ) {
        return winner = 'no winner'
        }
}

export default checkBoard