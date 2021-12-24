function smallestCommons(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const numberDivisors = max - min + 1;
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  console.log("upper bound: " + upperBound);
  console.log("divisors: " + numberDivisors);

  /**
   * Example with 1:5
   * For m = 5 til 120, we check if that number is divisible by our range.
   * If divisorCount !== numberDivisor, at least one is missing so we'll
   * check the next one.
   */
  for (let multiple = max; multiple <= upperBound; multiple += max) {
   // console.log("multiple: " + multiple);
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}
console.log(smallestCommons([1,5]));
