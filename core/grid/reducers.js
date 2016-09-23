const range = (n) => Array.apply(null, { length: n }).map(Number.call, Number);
const generateCell = () => ({ mine: Math.random() <= 0.3, flagged: Math.random() >= 0.7, neighbours: 0 });
const generateRow = (n) => range(n).map(generateCell);
const generateGrid = (rows, cols) => range(rows).map(generateRow.bind(null, cols));


export const neighbours = (grid, row, col) => {
  const width = grid.length;
  const length = grid[0].length;

  const rowMin = Math.max(0, row - 1);
  const rowMax = Math.min(width, row + 1);
  const colMin = Math.max(0, col - 1);
  const colMax = Math.min(length, col + 1);

  const rows = grid.slice(rowMin, rowMax + 1);
  return rows
    .map(row => slice(colMin, colMax + 1))
  // return rows.;
};
// const neighbours = (grid) => {
//   grid
// }

const initialGrid = generateGrid(30, 20);

const grid = (state = initialGrid, action) => {

  switch (action.type) {


    default:
      return state;
  }
};

export default grid;
