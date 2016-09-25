import React from 'react';
import { connect } from 'react-redux';

import Cell from './Cell.js';
import { reveal } from '../../core/grid/actions.js';


const Game = ({ grid, reveal }) => {

  console.log('grid', grid);

  const renderCol = (row, rowId) => (
    <div>
      {
        row.map((c, colId) => <Cell
          isMine={c.mine}
          isFlagged={c.flagged}
          key={colId + '-' + rowId}
          neighbours={c.neighbours}
          isRevealed={c.revealed}
          onClick={(e) => {
            console.log('click');
            reveal(rowId, colId)
          }}
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
  ({ grid }) => ({ grid }),
  (dispatch, ownProps) => {
    console.log('ownProps', ownProps);
    return {
      reveal: (row, col) => dispatch(reveal(row, col))
    };
  }
)(Game);

export default Minesweeper;
