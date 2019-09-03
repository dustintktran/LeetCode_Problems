

/**
 * @param {number} n
 * @return {number}
 */
let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
  31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101];

var smallestDivisors = function (n) {
  let tuples = [];
  let min = Infinity;
  let index = 0;
  if (primes.includes(n)) {
    return [1, n];
  }
  for (var i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      tuples.push([i, n / i]);
    }
  }
  for (var i = 0; i < tuples.length; i++) {
    if (tuples[i][0] + tuples[i][1] < min) {
      min = tuples[i][0] + tuples[i][1];
      index = i;
    }
  }
  // console.log(tuples, index);
  return tuples[index];
}

var minSteps = function (n) {
  let smallestSumTuple = smallestDivisors(n);
  if (n == 1) {
    return 0
  } else if (smallestSumTuple[0] == 1) {
    return n
  } else {
    return smallestSumTuple[0] + smallestSumTuple[1];
  }
};


var minStepsSol = (n) => {
  var ans = 0;
  var d = 2;
  while (n > 1) {
    while (n % d == 0) {
      ans += d;
      n /= d;
    }
    d++;
  }
  return ans;
}


console.log(minStepsSol(18));