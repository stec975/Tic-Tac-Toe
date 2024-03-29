
import { useState } from 'react';
import './App.css'
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';
import Board from './components/Board';
import Title from './components/Title';


function App() {

  const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [board, setBoard] = useState(new Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({xScore: 0 , oScore: 0});
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxIdx) => {
    const updateBoard = board.map((value , idx) => {
      if(idx === boxIdx)
         return xPlaying === true ? "X" : "O";
      else
         return value;
    })
    
    const winner = checkWinner(updateBoard);
  
   
     if(winner){
      if(winner === "X"){
        let {xScore} = scores;
        xScore += 1;
        setScores({...scores, xScore})
      }
      else{
        let {oScore} = scores;
        oScore += 1;
        setScores({...scores, oScore})
      } 
    }
    
    setBoard(updateBoard);
    setXPlaying(!xPlaying);
  }
  
  const checkWinner = (board) => {
    for(let i=0 ; i<winConditions.length ; i++){
      const [x,y,z] = winConditions[i];
      
      if(board[x] && board[x] === board[y] && board[y] === board[z]){
         setGameOver(true);
         return board[x];
      }
     
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(new Array(9).fill(null));
  }

  return (
    <>
      <Title />
      <ScoreBoard scores = {scores} xPlaying={xPlaying}/>
      <Board board = {board} onClick={gameOver ? resetBoard : handleBoxClick}/>
      <ResetButton resetBoard={resetBoard}/>
    </>
   
  )
}

export default App
