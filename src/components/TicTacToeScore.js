import React from 'react';
import "./TicTacToeScore.css";
const TicTacToeScore = ({scores,playX}) => {
    const {xScore, oScore} = scores;
    return (
        <div className='tttScoreBoard'>
           <span className={`score x-score ${!playX && "inactive"}`}>X-{xScore}</span>
           <span className={`score o-score ${!playX && "inactive"}`}>O-{oScore}</span>
        </div>
    );
};

export default TicTacToeScore;