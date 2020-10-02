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
}

export default checkBoard