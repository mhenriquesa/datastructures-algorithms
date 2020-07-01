function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function findIndexPivot(array) {
  let pivotIndex = 0;

  for (let marker = 1; marker < array.length; marker++) {
    if (array[0] > array[marker]) {
      pivotIndex++;
      swap(array, pivotIndex, marker);
    }
  }
  swap(array, 0, pivotIndex);
  return pivotIndex;
}

console.log(findIndexPivot([10, 5, 1, 8]));
