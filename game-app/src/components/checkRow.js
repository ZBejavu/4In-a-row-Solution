function checkRow(gameBoard) {
    let win = false;
    for(let i = 0; i < 6; i++) {
        for(let j = 0; j < 4; j++) {
            if(
                gameBoard[j][i] !== 0 && 
                gameBoard[j][i] === gameBoard[j+1][i] &&
                gameBoard[j][i] === gameBoard[j+2][i] &&
                gameBoard[j][i] === gameBoard[j+3][i] 
            )
            {
                win = gameBoard[j][i]
                return win;
            }
        }
    }
    return win;
}

export default checkRow;