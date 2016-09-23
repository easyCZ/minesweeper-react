import { expect } from 'chai';
import grid, {
  neighbours
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
    expect(neighbours(GRID, 1, 1)).to.be.eql([
      1, 2, 3, 4, 6, 7, 8, 9,
    ]);
  });

  it('should return edge neighbours given a top left corner index', () => {
    expect(neighbours(GRID, 0, 0)).to.be.eql([
      2, 4, 5,
    ]);
  });

  it('should return edge neighbours given a top right corner index', () => {
    expect(neighbours(GRID, 2, 2)).to.be.eql([
      2, 5, 6,
    ]);
  });

  it('should return edge neighbours given a bot left corner index', () => {
    expect(neighbours(GRID, 2, 0)).to.be.eql([
      4, 5, 8,
    ]);
  });

  it('should return edge neighbours given a bot right corner index', () => {
    expect(neighbours(GRID, 0, 2)).to.be.eql([
      5, 6, 8,
    ]);
  });

  it('should return edge neighbours given a left edge index', () => {
    expect(neighbours(GRID, 1, 0)).to.be.eql([
      1, 2, 5, 7, 8,
    ]);
  });

  it('should return edge neighbours given a top edge index', () => {
    expect(neighbours(GRID, 0, 1)).to.be.eql([
      1, 3, 4, 5, 6,
    ]);
  });

  it('should return edge neighbours given a right edge index', () => {
    expect(neighbours(GRID, 1, 2)).to.be.eql([
      2, 3, 5, 8, 9,
    ]);
  });

  it('should return edge neighbours given a bottom edge index', () => {
    expect(neighbours(GRID, 2, 1)).to.be.eql([
      4, 5, 6, 7, 9,
    ]);
  });

});
