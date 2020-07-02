// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const result = [];

  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];

    result.push(element);
  }
  return result.join('');
}

function reverse2(str) {
  let reversed = '';

  for (const character of str) reversed = character + reversed;
  return reversed;
}

function reverseUsingReduce(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

console.log(reverseUsingReduce('reversing'));
