import React, {useState,useEffect} from 'react';
import checkBoard from './checkBoard';
import Slide from '@material-ui/core/Slide';
import Modal from '@material-ui/core/Modal';

function Board() {
    const [board, setBoard] = useState([[]]);
    const [turn, setTurn] = useState(0);
    const [winner, setWinner] = useState();

    function emptyBoard(){
        const gameBoard = [];
        for(let i = 0; i < 7; i++){
            gameBoard[i] = [];
            for(let j = 0; j < 6; j++){
                gameBoard[i][j] = 0;
            }
        };
        setBoard(gameBoard);
        setWinner(false);
    }

    function insertTurn(i){
        const myIndex = board[i].findIndex(value => value === 0);
        if(myIndex === -1){
            return;
        }
        const newBoard = board.slice();
        if(turn % 2 === 0){
            newBoard[i][myIndex] = 1;
            setTurn(turn + 1);
        } else{
            newBoard[i][myIndex] = 2;
            setTurn(turn + 1);
        }
        setBoard(newBoard);
    }

    useEffect(() => {
        emptyBoard();
    }, [])

    useEffect(() => {
        if(board[0][0] !== undefined){
            const myWinner = checkBoard(board);
            if(myWinner){
                setWinner(myWinner);
                // setTimeout(() => {
                //     emptyBoard();
                // }, 3000);
            }
        }
    }, [board])

  return (
      <>
    <div className="Board">
                {
            !board? null :
            board.map((collumn, i) => {
                return <>
                {i===0&& <div className="Column2" />}
                <div 
                onClick={() => {
                if(winner){ return }
                insertTurn(i)}}
                className="Column" id={`column${i}`}>
                    {
                        collumn.map((square, index) => {
                            return <div className="Square" id={`square${index}`}>
                                {
                                    square === 0 ? null
                                    :
                                    <Slide direction="down" in={true} timeout={500}>
                                        <div className={square === 1? 'player1' : 'player2'}></div>
                                    </Slide>
                                }
                            </div>
                        })
                    }
                </div>
                <div className="Column2" />
                </>
            })
        }
            </div>

            <Modal open={winner? true : false} onClose={()=> {emptyBoard()}}>
                <div className ='winModal'>
                    <h2>Game Finished !</h2>
                    <h2>{winner ==='tie'? 'A Tie !':`Winner is: player ${winner}`}</h2>
                </div>
            </Modal>
        </>

  );
}


export default Board;
