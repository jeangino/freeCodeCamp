function sumPrimesNaive(num) {
  let res = 2;
  for (let i = 1; i <= num; i += 2) {
    if (isPrimeNaive(i)) {
      res += i;
    }
  }
  return res;
}

function isPrimeNaive(num) {
  if (num == 1) {
    return false;
  }
  if (num == 2) {
    return true;
  }
  if (num % 2 == 0) {
    return false;
  }
  for (let i = 3; i < num; i += 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}


function sumPrimes(num) {
  const arr = [...Array(num).fill(true)];
  let sum = 0;
  arr.map((element, index, array) => {
    const number = index + 1;
 //   console.log("Number: " + number);
    if (index == 0) {
      array[index] = false;
    }
    if (element) {
      if (number > 1) {
        for (let i = number * number; i <= num; i += number) {
        //  console.log("THIS IS NOT PRIME: " + i);
          array[i - 1] = false;
        }
      }
    } 
  });
  arr.map((element, index) => {
    if (element == true) {
      sum += index + 1;
    }
  });
//  console.log(arr);
  return sum;
}

let t0 = performance.now();
console.log(sumPrimesNaive(3000));
let t1 = performance.now();
console.log(`Naive took ${t1 - t0} milliseconds.`);

t0 = performance.now();
console.log(sumPrimes(3000));
t1 = performance.now();
console.log(`Sieve took ${t1 - t0} milliseconds.`);
