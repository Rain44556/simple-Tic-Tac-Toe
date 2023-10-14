import React, { useState } from 'react';
import './App.css';
import TicTacToeScore from './components/TicTacToeScore';
import TicTacToeBoard from './components/TicTacToeBoard';
import ClearButton from './components/ClearButton';

function App() {
const winner = [[0,1,2],[ 3,4,5], [6,7,8], [0,3,6], [1,4,7],[2,5,8,],[0,4,8],[2,4,6]]

  const [tttBoard, setTttBoard] = useState(Array(9).fill(null));
  const [playX, setPlayX] =useState(true);
  const [scores, setScores] = useState({xScore: 0, oScore: 0})
  const [overGame, setOverGame] = useState(false)

  const handleBoxClick = (boxIdx)=>{
  const updatedBoard = tttBoard.map((value,idx) =>{

if(idx === boxIdx){
  return playX === true ? "X": "O";
}
else{
  return value;
}
})

const check = winnerChecker(updatedBoard);
if(check){
if(check === "O"){
  let {oScore} = scores;
  oScore += 1
  setScores({...scores, oScore})
}
else{
  let {xScore} =scores;
  xScore += 1
  setScores({...scores, xScore})
}
}

console.log(scores)

setTttBoard(updatedBoard);
setPlayX(!playX);
  }

const winnerChecker = (tttBoard) => {
  for(let i= 0; i<winner.length; i++){
    const [x,y,z] = winner[i];
    if(tttBoard[x] && tttBoard[x] === tttBoard[y] && tttBoard[y] === tttBoard[z]){
     setOverGame(true)
      return tttBoard[x];
    }
  }
}

const resetBoard = () =>{
  setOverGame(false);
  setTttBoard(Array(9).fill(null))
}
  return(
    <div className="App">
      <TicTacToeScore scores = {scores} playX ={playX}></TicTacToeScore>
   <TicTacToeBoard tttBoard={tttBoard} onClick={overGame ? resetBoard : handleBoxClick}></TicTacToeBoard>
   <ClearButton resetBoard= {resetBoard}></ClearButton>
    </div>
  );
}

export default App;
