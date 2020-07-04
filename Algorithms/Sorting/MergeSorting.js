// Implementing merging Sort

const mergeSortedArrays = (sortedArray1, sortedArray2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < sortedArray1.length && j < sortedArray2.length) {
    if (sortedArray1[i] < sortedArray2[j]) {
      result.push(sortedArray1[i]);
      i++;
      continue;
    }
    result.push(sortedArray2[j]);
    j++;
  }

  while (i < sortedArray1.length) {
    result.push(sortedArray1[i]);
    i++;
  }
  while (j < sortedArray2.length) {
    result.push(sortedArray2[j]);
    j++;
  }
  return result;
};

const mergeSorting = anArray => {
  debugger;
  //take 2 arrays with lenght=1 and call mergeSortedArrays
  if (anArray.length <= 1) return anArray;
  let midpoint = Math.floor(anArray.length / 2);
  let left = mergeSorting(anArray.slice(0, midpoint));
  let right = mergeSorting(anArray.slice(midpoint));

  return mergeSortedArrays(left, right);
};

// mergeSortedArrays vai apenas por em ordem os 2 arrays de lenght 1

console.log(mergeSorting([1, 3, 0, 4]));
