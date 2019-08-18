/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var BITify = function(value, size) {
  let num = value;
  let degree = 0;
  for(var n = 31; n >= 0; n--) {
    if(num >= 2**n) {
      degree = n;
      break;
    }
  }
  let bit = [];
  let degreeMax = degree;
  for(var i = 0; i <= degreeMax; i++) {bit.push(0)};
  for(var i = 0; i <= degreeMax; i++) {
    if(2**degree <= num) {
      num -= 2**degree;
      bit[i] = 1;
    }
    degree--;
  }
  if(size > bit.length) {
    for(var i = bit.length; i <= size.length; i++) {
      bit.push(0);
    }
  }
  return bit;
}

var hammingDistance = function (x, y) {
  let count = 0;
  let small;
  let large;
  if(x > y) {
    large = BITify(x);
    small = BITify(y);
  } else {
    large = BITify(y);
    small = BITify(x);
  }
  for(var i = small.length; i < large.length; i++) {
    small.unshift(0);
  }
  for(var i = 0; i < large.length; i++) {
    if(small[i] !== large[i]) {
      count++;
    }
  }
  return count;
};

// console.log(BITify(12451));
// console.log(hammingDistance(1,4));