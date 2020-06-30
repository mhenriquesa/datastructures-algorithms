//Selection Sort

let basket = [3, 8, 1, 4, 9, 2, 6, 100, 88];

function selectionSort(basket) {
  for (let j = 0; j < basket.length; j++) {
    for (let i = j + 1; i < basket.length; i++) {
      if (basket[j] > basket[i]) {
        let temp = basket[j];
        basket[j] = basket[i];
        basket[i] = temp;
      }
    }
  }
  return console.log(basket);
}

// versao otimizada by Colt Steele
function selectionSort2(basket) {
  for (let base = 0; base < basket.length; base++) {
    let lowest = base;
    for (var scout = base + 1; scout < basket.length; scout++) {
      if (basket[lowest] > basket[scout]) lowest = scout;
    }
    if (basket[lowest] !== basket[scout]) {
      temp = basket[lowest];
      basket[lowest] = basket[base];
      basket[base] = temp;
    }
  }
  return console.log(basket);
}

selectionSort2([3, 8, 1, 4, 9, 2, 6, 100, 88, 98, 5, 11, 26]);
