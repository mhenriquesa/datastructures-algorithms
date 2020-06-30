// Insertion sort

// Algo by Andrei Naegoie
function insertionSort(basket) {
  let operations = 0;
  for (let i = 0; i < basket.length; i++) {
    //Para cada elemento do arrays
    if (basket[i] < basket[0]) {
      //teste se ele é menor que o primeiro
      basket.unshift(basket.splice(i, 1)[0]);
      operations++;
      //sim: move number to the first position
    } else {
      // não: find where number should go
      for (let j = 1; j < i; j++) {
        // A partir do 2o elemento, até o  elemento testado da vez
        if (basket[i] > basket[j - 1] && basket[i] < basket[j]) {
          operations++;
          basket.splice(j, 0, basket.splice(i, 1)[0]);
        }
      }
    }
  }
  console.log('Andrei : ', operations);
  return console.log(basket);
}

const insertionSortingV3 = values => {
  let operations = 0;
  for (let i = 1; i < values.length; i++) {
    let element = values[i];

    // Teste se o valor atual é menor que o anterior
    if (element < values[i - 1]) {
      // Teste se o valor atual é menor que o 1o da lista
      if (element < values[0]) {
        values.unshift(values.splice(i, 1)[0]);
        operations++;
        continue;
      }
      for (let j = i - 2; j >= 0; j--) {
        if (element > values[j]) {
          values.splice(j + 1, 0, values.splice(i, 1)[0]);
          operations++;
          break;
        }
      }
    }
  }
  console.log('V3 : ', operations);
  console.log(values);
};

insertionSortingV3([3, 8, 1, 4, 2, 5, 100, 6]);

//-> Notas de aulas e pesquisas
// * array.splice(index de referencia, num de elementos a ser removido, valor a
// * ser adicionado)
// let removed = basket.splice(1, 0, 100);
// 'removed' retorna um array com os elementos retirados

// * array.unshift(valor a ser inserido no inicio do array)
//
