const range = (n) => Array.apply(null, { length: n }).map(Number.call, Number);
const generateCell = () => ({ mine: Math.random() <= 0.3, flagged: Math.random() >= 0.7, neighbours: 0 });
const generateRow = (n) => range(n).map(generateCell);
const generateGrid = (n) => range(n).map(generateRow.bind(null, n));


const closeNeighbours = (grid, row, col) => {
  const width = grid.length;
  const length = grid[0].length;

  const rowMin = Math.max(0, row - 1);
  const rowMax = Math.min(width, row + 1);
  const colMin = Math.max(0, col - 1);
  const colMax = Math.min(length, col + 1);

  const rows = grid.slice(rowMin, rowMax + 1);
  return rows
    .map(row => slice(colMin, colMax + 1))
  return rows.;
};
const neighbours = (grid) => {
  grid
}


const initialState = {
  lost: false,
  won: false,
  grid: generateGrid(20),
};


const game = (state = initialState, action) => {

  switch (action.type) {


    default:
      return state;
  }
};

export default game;
