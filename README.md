# simple-sorting [![Build Status](https://travis-ci.org/robertjgabriel/simple-sorting.svg?branch=master)](https://travis-ci.org/robertjgabriel/simple-sorting)

> Node module for sorting data though different algorithms


## Install

```
$ npm install simple-sorting --save
```


## Usage

```js
const simpleSorting = require('simple-sorting');

sortedArray = simpleSorting.bubbleSort([2, 2, 4, 2]);
//=> [2, 2, 2, 4]


sortedArray = simpleSorting.quickSort([2, 2, 4, 2]);
//=> [2, 2, 2, 4]

sortedArray = simpleSorting.insertionSort([2, 2, 4, 2]);
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

## License

MIT © [Robert James Gabriel](https://robertgabriel.ninja)
