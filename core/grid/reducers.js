import R from 'ramda';
import {
  REVEAL_LOCATION,
} from './actions.js';

const mapIndexed = R.addIndex(R.map);

const pad = (padding) =>
  R.compose(R.prepend(padding), R.append(padding));

export const padGrid = R.curry((padding, grid) => {
  const rowPadding = R.compose(pad(padding), R.map(() => padding), R.head)(grid);
  return R.compose(R.prepend(rowPadding), R.append(rowPadding), R.map(pad(padding)))(grid);
});

export const neighbours = R.curry((row, col, grid) => {
  const padded = padGrid(null)(grid);

  const paddedRowIndex = R.inc(row);
  const paddedColIndex = R.inc(col);
  const rowSlice = R.slice(paddedRowIndex - 1, paddedRowIndex + 2);
  const colSlice = R.slice(paddedColIndex - 1, paddedColIndex + 2);
  return R.compose(
    R.filter(e => e !== null),
    R.remove(4, 1),   // the middle is at position 4
    R.flatten,
    R.map(colSlice),
    rowSlice
  )(padded);
});

const isMine = (c) => c.mine;
const isRevealed = (c) => c.revealed;
const isHidden = R.not(isRevealed);
const hasNeighbours = (c) => c.neighbours > 0;

export const proximityMines =
  R.compose(R.length, R.filter(isMine), neighbours);


const generateCell = () =>({
  mine: Math.random() <= 0.2,
  flagged: false,
  neighbours: 0,
  revealed: false,
});

const generateRow = (n) =>
  R.range(0, n).map(generateCell);

const getNeighbours = (grid, row, col) =>
  ({ neighbours: proximityMines(grid, row, col) });

export const generateGrid = (rows, cols) => {
  const grid = R.map(generateRow.bind(null, cols))(R.range(0, rows));

  const gridWithValues = mapIndexed(
    (row, rowIndex, grid) => mapIndexed(
      (cell, colIndex, row) => {
        return R.merge(cell, getNeighbours(rowIndex, colIndex, grid))
      })(row)
  )(grid);

  return gridWithValues;
};

const hiddenNeighbours = R.compose(
  R.filter(isHidden),
  neighbours,
);

export const reveal = R.curry((row, col, grid) => {
  var gridCopy = R.clone(grid);

  gridCopy[row][col].revealed = true;

  var revelableAjdacent = R.compose(
    R.filter(hasNeighbours),
    hiddenNeighbours
  );

  // TODO: Finish depth first reveal
  // R.reduce((grid, ))

  // if (R.length(revelableAjdacent) > 0) {
  //   const revealRowCol = reveal()
  // }

  //   gridCopy = reveal

  return grid;
})


const initialGrid = generateGrid(20, 30);

const grid = (state = initialGrid, action) => {

  switch (action.type) {

    case REVEAL_LOCATION:
      var { row, col } = action;
      const cp = R.clone(state);
      cp[row][col].revealed = true;
      return cp;


    default:
      return state;
  }
};

export default grid;
