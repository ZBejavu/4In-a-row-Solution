function checkColumn(board){
    let winner;
    for (let j = 0; j < 7; j++) {
        for (let i = 0; i < 3; i++) {
         if (
         board[j][i] !== 0 &&
         board[j][i + 1] === board[j][i] &&
         board[j][i] === board[j][i + 2] &&
         board[j][i] === board[j][i + 3]
         ) {
         winner = board[j][i];
         return winner;
        }
      }
    }
    return winner;
}
export default checkColumn;