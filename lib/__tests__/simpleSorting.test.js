const simpleSorting = require('../index.js');

describe('Javascript Sorting Alorgthims', () => {
  it('Bubble Sort: 5 1 4 2 8', () => {
    expect.assertions(1);
    return expect(simpleSorting.bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
  });

  it('Insertion Sort: 5 1 4 2 8', () => {
    expect.assertions(1);
    return expect(simpleSorting.insertionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
  });

  it('Selection Sort: 5 1 4 2 8', () => {
    expect.assertions(1);
    return expect(simpleSorting.selectionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
  });
  it('Quick Sort: 5 1 4 2 8', () => {
    expect.assertions(1);
    return expect(simpleSorting.quickSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
  });
});
