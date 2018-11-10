# simple-sorting [![Build Status](https://travis-ci.org/RobertJGabriel/simple-sorting.svg?branch=master)](https://travis-ci.org/RobertJGabriel/simple-sorting)

> Node module for different sorting algorithms.


## Install

```
$ npm install simple-sorting --save
```


## Usage

```js
const sort = require('simple-sorting');

sortedArray = simpleSorting.bubbleSort([2, 2, 4, 2]);
//=> [2, 2, 2, 4]

sortedArray = simpleSorting.quickSort([2, 2, 4, 2]);
//=> [2, 2, 2, 4]

sortedArray = simpleSorting.insertionSort([2, 2, 4, 2]);
//=> [2, 2, 2, 4]

sortedArray = simpleSorting.mergeSort([2, 2, 4, 2]);
//=> [2, 2, 2, 4]
```

## API

### bubbleSort([array])

**First Pass:**

- ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
- ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
- ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
- ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.

**Second Pass:**

- ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
- ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
- ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
- ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )

Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.

**Third Pass:**

- ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
- ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
- ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
- ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

### Insertion Sort([array])

Insertion Sort is an algorithm used to sort a given list of items. It does so by iterating through the list and building the sorted output one item at a time. Upon each iteration, an item is taken from the list and inserted into the correct position by comparison with its neighbours. This process is repeated until we reach the last item and there are no more left to be sorted.

### Selection Sort([array])

The Selection Sort. The selection sort improves on the bubble sort by making only one exchange for every pass through the list. In order to do this, a selection sort looks for the largest value as it makes a pass and, after completing the pass, places it in the proper location.

### Quick Sort([array])

Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.

### Mergesort([array])

Merge-sort is based on the divide-and-conquer paradigm. It involves the following three steps:

- Divide the array into two (or more) subarrays
- Sort each subarray (Conquer)
- Merge them into one (in a smart way!)

## License

MIT © [Robert James Gabriel](https://robertgabriel.ninja)
