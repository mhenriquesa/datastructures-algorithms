// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str
    .split('')
    .reduce((reversed, currentValue) => currentValue + reversed, '');

  return str === reversed;
}

function palindrome2(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}

console.log(palindrome('abba'));
console.log(palindrome('Moises'));
console.log(palindrome2('avva'));
console.log(palindrome2('Moises'));
