/**
 * Reverse a string using spread operator, reverse and join.
 * @param {*} str string to reverse
 * @returns reversed string
 */
function reverseString(str) {
    return [...str].reverse().join('');
  }

/**
 * Finds the longest word in a string.
 * 
 * match: creates an array of words
 * reduce: reduces the array keeping only the largest string.
 * .length at the end.
 * 
 * @param {*} str initial string.
 * @returns length of the longest word.
 */
function findLongestWordLength(str) {
  return str.match(/([a-z]+)/ig).reduce((a, b) => a.length > b.length ? a : b).length;
}