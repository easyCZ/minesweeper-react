import R from 'ramda';


const generateCell = () =>
  ({ mine: Math.random() <= 0.3, flagged: Math.random() >= 0.7, neighbours: 0 });

const generateRow = (n) =>
  R.range(0, n).map(generateCell);

const generateGrid = (rows, cols) =>
  R.range(0, rows).map(generateRow.bind(null, cols));

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
    R.remove(4, 1),   // the middle is always equal to [row, col]
    R.flatten,
    R.map(colSlice),
    rowSlice
  )(padded);
});

const isMine = (c) => c.mine;

export const proximityMines =
  R.compose(R.length, R.filter(isMine), neighbours);

// R.curry((row, col, neighbours) =>)
const initialGrid = generateGrid(30, 20);

const grid = (state = initialGrid, action) => {

  switch (action.type) {


    default:
      return state;
  }
};

export default grid;
