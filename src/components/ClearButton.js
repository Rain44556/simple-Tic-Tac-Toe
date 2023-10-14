import React from 'react';
import './ClearButton.css';
const ClearButton = ({resetBoard}) => {
    return (
        <div>
             <button className='reset-btn' onClick={resetBoard}>Reset-Button</button>
        </div>
    );
};

export default ClearButton;