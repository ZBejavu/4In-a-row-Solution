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
            gameBoard[gameBoard.length-1][gameBoard[0].length-1] !== 0 &&
            gameBoard[gameBoard.length-2][gameBoard[0].length-1] !== 0 &&
            gameBoard[gameBoard.length-3][gameBoard[0].length-1] !== 0 &&
            gameBoard[gameBoard.length-4][gameBoard[0].length-1] !== 0 &&
            gameBoard[gameBoard.length-5][gameBoard[0].length-1] !== 0 &&
            gameBoard[gameBoard.length-6][gameBoard[0].length-1] !== 0 &&
            gameBoard[gameBoard.length-7][gameBoard[0].length-1] !== 0
            ) {
        return winner = 'no winner'
        }
}

export default checkBoard