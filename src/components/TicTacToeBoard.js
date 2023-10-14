import React from 'react';
import TicTacToeBox from './TicTacToeBox';
import "./TicTacToeBoard.css";
const TicTacToeBoard = ({tttBoard, onClick}) => {
    return (
        <div className='tttboard'>
            {tttBoard.map((value,idx)=>
            {
                return  <TicTacToeBox value = {value} onClick={() => value === null && onClick(idx)}></TicTacToeBox>
            })}
           
        </div>
    );
};

export default TicTacToeBoard;