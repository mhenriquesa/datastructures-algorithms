function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function firstElemAtRightSpot(array, start = 0, end = array.length - 1) {
  //take the first element and move the numbers less than to left and
  // all numbers greater than move to right
  let pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, start, swapIndex);
  console.log(array);
  return swapIndex;
}

function quickSort(anArray, left = 0, right = anArray.length - 1) {
  if (left < right) {
    let pivotIndex = firstElemAtRightSpot(anArray, left, right);
    console.log(pivotIndex);
    quickSort(anArray, left, pivotIndex - 1);
    quickSort(anArray, pivotIndex + 1, right);
  }
  return anArray;
}
console.log(firstElemAtRightSpot([7, 0, 10, 5, 1, 8]));
console.log(quickSort([7, 0, 10, 5, 1, 8]));
