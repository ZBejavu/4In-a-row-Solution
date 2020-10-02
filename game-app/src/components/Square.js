import React, {useState,useEffect} from 'react';
function Board() {
    const [board, setBoard] = useState();
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

  return (
    <div className="Board">
        {
            !board? null :
            board.map((collumn, i) => {
                return <div className="Collumn" id={`collumn${i}`}>
                    {
                        collumn.map((square, index) => {
                            return <div className="Square" id={`square${index}`}>
                                {
                                    board[i][index] ===0? square 
                                    :
                                    <div className={board[i][index] === 1? 'player1':'player2'}></div>
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
