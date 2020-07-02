// Function returns if exists a value in two arrays

function elementoEmProp(arr1, arr2) {
  let c = {};

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    c[element] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    const element = arr2[j];

    if (c[element]) return true;
  }

  return false;
}

console.log(elementoEmProp(arr1, arr2));
