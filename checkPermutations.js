const checkPermutations = (s1, s2) => {
  let storage = {};
  for(var i = 0; i < s1.length; i++) {
    if(storage[s1[i]]) { //if element exists in storage
      storage[s1[i]]++;
    } else {
      storage[s1[i]] = 1;
    }
  }

  for(var i = 0; i < s2.length; i++) {
    if(!storage[s2[i]] || storage[s2[i]] === 0) { //if element doesn't exist in storage or is = to 0
      return false;
    } else {
      storage[s2[i]]--;
    }
  }

  for (element in storage) { //check if any characters remain
    if(storage[element] > 0) {
      return false;
    }
  }
  return true;
}

// Tests
// console.log(checkPermutations('asd', 'dsa')); //expect true
// console.log(checkPermutations('aasdsd', 'asddsa')); //expect true
// console.log(checkPermutations('asda', 'dsa')); //expect false
// console.log(checkPermutations('asd', 'dsaa')); //expect false
