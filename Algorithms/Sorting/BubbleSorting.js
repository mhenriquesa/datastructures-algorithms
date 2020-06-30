// Bubble sorting

let basket = [3, 8, 1, 4, 9, 2];

//Naive Version
function BubbleSorting(basket) {
  for (let j = 0; j < basket.length; j++) {
    for (let i = 0; i < basket.length; i++) {
      if (basket[i] > basket[i + 1]) {
        temp = basket[i];
        basket[i] = basket[i + 1];
        basket[i + 1] = temp;
      }
    }
  }
}

// -> Versao otimizada
// Um loop do fim pro inicio anulando o numero ja sortied
// o segundo do inicio até o elemento do primeiro loop

function BubbleSorting2(basket) {
  for (let i = basket.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (basket[j] > basket[j + 1]) {
        temp = basket[j];
        basket[j] = basket[j + 1];
        basket[j + 1] = temp;
      }
    }
  }
  console.log(basket);
}

BubbleSorting2([3, 8, 1, 4, 9, 2, 6, 90, 12]);
