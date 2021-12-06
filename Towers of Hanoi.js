/**
 * Solution to this challenge: https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/towers-of-hanoi
 * 
 * @param {*} n Number of discs
 * @param {*} a Source pillar
 * @param {*} b Destination pillar
 * @param {*} c extra pillar
 * @returns Array of moves [source, destination]
 */
function towerOfHanoi(n, a, b, c) {
    if (n <= 1) {
      return [[a, b]];
    }
    return towerOfHanoi(n - 1, a, c, b).concat([[a, b]]).concat(towerOfHanoi(n-1, c, b, a));
  }
  
console.log(towerOfHanoi(10, 'A', 'B', 'C'));
