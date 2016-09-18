const range = (n) => Array.apply(null, { length: n }).map(Number.call, Number);
const generateCell = () => ({ mine: false, flagged: false, neighbours: 0 });
const generateRow = (n) => range(n).map(generateCell);
const generateGrid = (n) => range(n).map(generateRow.bind(null, n));


const initialState = {
  lost: false,
  won: false,
  grid: generateGrid(10)
};


const game = (state = {}, action) => {

  switch (action.type) {


    default:
      return state
  }

}

export default game;