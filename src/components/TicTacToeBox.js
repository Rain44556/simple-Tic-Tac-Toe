import React from 'react';
import "./TicTacToeBox.css";
const TicTacToeBox = ({value, onClick}) => {
    const style = value === "X" ? "tttbox X" : "tttbox O";
    return (
        <div>
            <button className={style} onClick={onClick}>{value}</button>
        </div>
    );
};

export default TicTacToeBox;