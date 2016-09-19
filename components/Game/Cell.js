import React from 'react';


export const Mine = () => (
  <span>💣</span>
);

export const Flag = () => (
  <span>🚩</span>
);

export const Safe = ({ value }) => (
  <span>{ value || '⬜'}</span>
);


const Cell = ({ isMine, isFlagged, neighbours }) => {
  if (isMine) return <Mine />;
  if (isFlagged) return <Flag />;
  return <Safe value={neighbours} />;
};

export default Cell;
