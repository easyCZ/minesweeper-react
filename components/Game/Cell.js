import React from 'react';

const style = {
  display: 'inline-block',
  width: '18px',
  height: '18px',
  textAlign: 'center',
  fontSize: '15px',
  boxShadow: '0 0 1px rgba(0, 0, 0, 0.1)'
};

export const Mine = () => (
  <span style={style}>💣</span>
);

export const Flag = () => (
  <span style={style}>🚩</span>
);

export const Safe = ({ value }) => (
  <span style={style}>{ value || '⬜'}</span>
);


const Cell = ({ isMine, isFlagged, neighbours }) => {
  if (isMine) return <Mine />;
  if (isFlagged) return <Flag />;
  return <Safe value={neighbours} />;
};

export default Cell;
