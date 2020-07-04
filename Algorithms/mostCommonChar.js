// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {};
  let max = 0;
  let maxChar = '';

  for (const char of str) map[char] = map[char] + 1 || 1;

  for (const key in map) {
    if (map[key] > max) {
      max = map[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxChar('aaassd'));
