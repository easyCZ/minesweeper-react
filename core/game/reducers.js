const range = (n) => Array.apply(null, { length: n }).map(Number.call, Number);
const generateCell = () => ({ mine: Math.random() <= 0.3, flagged: Math.random() >= 0.7, neighbours: 0 });
const generateRow = (n) => range(n).map(generateCell);
const generateGrid = (n) => range(n).map(generateRow.bind(null, n));



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
