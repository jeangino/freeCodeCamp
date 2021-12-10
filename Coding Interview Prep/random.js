/**
 * Reverse a string using spread operator, reverse and join.
 * @param {*} str string to reverse
 * @returns reversed string
 */
function reverseString(str) {
    return [...str].reverse().join('');
  }
  