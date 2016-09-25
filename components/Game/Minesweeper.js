import React from 'react';
import { connect } from 'react-redux';

import Cell from './Cell.js';


const Game = ({ grid }) => {

  console.log('grid', grid);

  const renderCol = (col, colId) => (
    <div>
      {
        col.map((c, rowId) => <Cell
          isMine={c.mine}
          isFlagged={c.flagged}
          key={colId + '-' + rowId}
          neighbours={c.neighbours}
        />)
      }
    </div>
  );

  return (
    <div>
      {grid.map(renderCol)}
    </div>
  );
};


const Minesweeper = connect(
  (state) => ({ grid: state.grid }),
  (dispatch) => ({})
)(Game);

export default Minesweeper;
