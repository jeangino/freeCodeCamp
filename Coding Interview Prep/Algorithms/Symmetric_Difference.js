/**
 * Turns out [].includes() is faster than Set.has()
 * 
 * The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.
 * For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
 *
 * Symmetric difference is a binary operation, which means it operates on only two elements.
 * So to evaluate an expression involving symmetric differences among three elements (A △ B △ C),
 * you must complete one operation at a time. Thus, for sets A and B above,
 * and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
 * https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
 */
let sym = (...args) => {
  return args.reduce((previous, current) => {
    const previousSet = new Set(previous);
    const currentSet = new Set(current);
    const result = new Set([]);
    for (let i = 0; i < previous.length; i++) {
      if (!currentSet.has(previous[i]) && !result.has(previous[i])) {
        result.add(previous[i]);
      }
    };
    for (let i = 0; i < current.length; i++) {
      if (!previousSet.has(current[i]) && !result.has(current[i])) {
        result.add(current[i]);
      }
    }
    return [...result];
  });
}

let symArray = (...args) => {
  return args.reduce((previous, current) => {
    const result = [];
    for (let i = 0; i < previous.length; i++) {
      if (!current.includes(previous[i]) && !result.includes(previous[i])) {
        result.push(previous[i]);
      }
    };
    for (let i = 0; i < current.length; i++) {
      if (!previous.includes(current[i]) && !result.includes(current[i])) {
        result.push(current[i]);
      }
    }
    return result;
  });
}



console.time('set')
console.log(sym([3, 3, 3, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
console.timeEnd('set')



console.time('array')
console.log(symArray([3, 3, 3, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 53, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5],[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
console.timeEnd('array')
