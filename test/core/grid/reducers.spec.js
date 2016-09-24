import { expect } from 'chai';
import R from 'ramda';
import gridReducer, {
  neighbours,
  padGrid,
  proximityMines
} from '../../../core/grid/reducers.js';



describe('Grid Reducer', () => {

  it('TODO', () => {});

});

describe('Grid Neighbours', () => {

  const GRID = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  it('should return closest neighbours given a middle index', () => {
    expect(neighbours(1, 1, GRID)).to.be.eql([
      1, 2, 3, 4, 6, 7, 8, 9,
    ]);
  });

  it('should return edge neighbours given a top left corner index', () => {
    expect(neighbours(0, 0, GRID)).to.be.eql([
      2, 4, 5,
    ]);
  });

  it('should return edge neighbours given a top right corner index', () => {
    expect(neighbours(0, 2, GRID)).to.be.eql([
      2, 5, 6,
    ]);
  });

  it('should return edge neighbours given a bot left corner index', () => {
    expect(neighbours(2, 0, GRID)).to.be.eql([
      4, 5, 8,
    ]);
  });

  it('should return edge neighbours given a bot right corner index', () => {
    expect(neighbours(2, 2, GRID)).to.be.eql([
      5, 6, 8,
    ]);
  });

  it('should return edge neighbours given a left edge index', () => {
    expect(neighbours(1, 0, GRID)).to.be.eql([
      1, 2, 5, 7, 8,
    ]);
  });

  it('should return edge neighbours given a top edge index', () => {
    expect(neighbours(0, 1, GRID)).to.be.eql([
      1, 3, 4, 5, 6,
    ]);
  });

  it('should return edge neighbours given a right edge index', () => {
    expect(neighbours(1, 2, GRID)).to.be.eql([
      2, 3, 5, 8, 9,
    ]);
  });

  it('should return edge neighbours given a bottom edge index', () => {
    expect(neighbours(2, 1, GRID)).to.be.eql([
      4, 5, 6, 7, 9,
    ]);
  });

});

describe('Proximity Mines', () => {

  const GRID = [
    R.map(() => ({ mine: true }))(R.range(0, 3)),
    R.map(() => ({ mine: true }))(R.range(0, 3)),
    R.map(() => ({ mine: true }))(R.range(0, 3)),
  ];

  it('should be zero with no mines for center peiece', () => {
    const grid = [
      R.map(() => ({ mine: false }))(R.range(0, 3)),
      R.map(() => ({ mine: false }))(R.range(0, 3)),
      R.map(() => ({ mine: false }))(R.range(0, 3)),
    ];
    expect(proximityMines(1, 1, grid)).to.be.eql(0);
  });

  it('should be 8 with all mines for center peiece', () => {
    expect(proximityMines(1, 1, GRID)).to.be.eql(8);
  });

  it('should be 5 with all mines for edge peice', () => {
    expect(proximityMines(1, 0, GRID)).to.be.eql(5);
  });

  it('should be 3 with all mines for edge peice', () => {
    expect(proximityMines(0, 0, GRID)).to.be.eql(3);
  });

});

describe('Pad Grid', () => {

  const GRID = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  it('should pad the grid', () => {
    expect(padGrid(null, GRID)).to.be.eql([
      [null, null, null, null, null],
      [null, 1, 2, 3, null],
      [null, 4, 5, 6, null],
      [null, 7, 8, 9, null],
      [null, null, null, null, null],
    ]);
  });

});
