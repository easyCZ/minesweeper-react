export const REVEAL_LOCATION = 'REVEAL_LOCATION';
export const FLAG_LOCATION = 'FLAG_LOCATION';

export const reveal = (row, col) => ({
  type: REVEAL_LOCATION,
  row,
  col,
});


export const flag = (location) => ({
  type: FLAG_LOCATION,
  location,
});
