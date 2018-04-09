function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

//  Bubble Sort is the simplest sorting algorithm that works by
//  repeatedly swapping the adjacent elements if they are in wrong order.
//  First Pass:
//  ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
//  ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
//  ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
//  ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
//  Second Pass:
//  ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
//  ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
//  ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
//  ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )
//  Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.

//  Third Pass:
//  ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
//  ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
//  ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
//  ß( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
exports.bubbleSort = function(array) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

// Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
// It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
// Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.

// Example
//  12, 11, 13, 5, 6

// Let us loop for i = 1 (second element of the array) to 5 (Size of input array)

// i = 1. Since 11 is smaller than 12, move 12 and insert 11 before 12
// 11, 12, 13, 5, 6

// i = 2. 13 will remain at its position as all elements in A[0..I-1] are smaller than 13
// 11, 12, 13, 5, 6

// i = 3. 5 will move to the beginning and all other elements from 11 to 13 will move one position ahead of their current position.
// 5, 11, 12, 13, 6

// i = 4. 6 will move to position after 5, and elements from 11 to 13 will move one position ahead of their current position.
// 5, 6, 11, 12, 13

exports.insertionSort = function(array) {
  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
};

exports.selectionSort = function(array) {
  var arraySize = array.length;

  for (var i = 0; i < arraySize; i++) {
    var min = i;
    for (var j = i + 1; j < arraySize; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(array, i, min);
    }
  }
  return array;
};

exports.quickSort = function(array) {
  if (array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesser = [];
  var greater = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return exports.quickSort(lesser).concat(pivot, exports.quickSort(greater));
};
