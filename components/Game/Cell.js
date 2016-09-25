import React from 'react';

const style = {
  display: 'inline-block',
  width: '18px',
  height: '18px',
  textAlign: 'center',
  fontSize: '15px',
  boxShadow: '0 0 1px rgba(0, 0, 0, 0.1)'
};


const Cell = ({ isMine, isFlagged, neighbours, isRevealed, onClick }) => {

  if (isRevealed) {
    if (isFlagged) return <span style={style} onClick={onClick}>🚩</span>;
    if (isMine) return <span style={style}>💣</span>;
    if (neighbours === 0) return <span style={style} onClick={onClick}>{ '✔️' }</span>;;
    return <span style={style} onClick={onClick}>{ neighbours }</span>;
  }

  return <span style={style} onClick={onClick}>{ '⬜' }</span>;
};

export default Cell;
