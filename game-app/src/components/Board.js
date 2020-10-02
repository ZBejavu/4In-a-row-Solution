import React, {useState,useEffect} from 'react';
function Board() {
    const [board, setBoard] = useState();
    const [turn, setTurn] = useState(1);
    useEffect(() => {
        const gameBoard = [];
        for(let i =0; i< 7; i++){
            gameBoard[i] = [];
            for(let j =0; j<6; j++){
                gameBoard[i][j] = 0;
            }
        }
        console.log(gameBoard);
        setBoard(gameBoard);
    },[])

    function insertTurn(i){
        const myIndex = board[i].findIndex(value => value===0);
        console.log(myIndex);
        if(myIndex === -1){
            return;
        }
        const newBoard = board.slice();
        if(turn%2 === 0){
            newBoard[i][myIndex] = 1;
            setTurn(turn+1);
        } else{
            newBoard[i][myIndex] = 2;
            setTurn(turn+1);
        }
        console.log(newBoard);
        setBoard(newBoard);
    }
  return (
    <div className="Board">
                {
            !board? null :
            board.map((collumn, i) => {
                return <div 
                onClick={() => { insertTurn(i)}}
                className="Collumn" id={`collumn${i}`}>
                    {
                        collumn.map((square, index) => {
                            return <div className="Square" id={`square${index}`}>
                                {
                                    square === 0 ? null 
                                    :
                                    <div className={square === 1? 'player1':'player2'}></div>
                                }
                            </div>
                        })
                    }
                </div>
            })
        }
    </div>
  );
}

export default Board;
