const simpleSorting = require('../index.js');

describe('simpleSorting', () => {
  it('Bubble Sort: 5 1 4 2 8', () => {
    expect.assertions(1);
    return expect(simpleSorting.bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
  });
});
