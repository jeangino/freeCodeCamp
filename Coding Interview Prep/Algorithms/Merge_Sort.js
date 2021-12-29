function mergeSort(array) {
  // Only change code below this line
  if (array.length <= 1) {
    return array;
  } else {
    const left = mergeSort(array.slice(0, Math.floor(array.length / 2)));
    const right = mergeSort(array.slice(Math.floor(array.length / 2)));
    return merge(left, right);
  }
  // Only change code above this line
}

function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  while (left.length > 0) {
    result.push(left.shift());
  }
  while (right.length > 0) {
    result.push(right.shift());
  }
  return result;
}

console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
