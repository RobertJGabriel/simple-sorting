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
