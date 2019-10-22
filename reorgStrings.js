const mirrorQuickSort = require('./mirrorQuickSort.js');

const reorganizeString = function(S) {
  let storage = {};
  let highestFreq = 0;
  for(var i = 0; i < S.length; i++) { //O(n)
    if(!storage[S[i]]) {
      storage[S[i]] = 1;
    } else {
      storage[S[i]] += 1;
    }
    if(storage[S[i]] > highestFreq) {
      highestFreq = storage[S[i]];
    }
  }

  if(highestFreq > Math.ceil(S.length/2)) {
    return '';
  }

  let pairSorted = mirrorQuickSort(Object.values(storage), 'desc', Object.keys(storage))
  let keys = pairSorted[1];
  let values = pairSorted[0];
  
  console.log(keys,values)

  let possibleOutcome = '';// keys[0];
  // values[0]--;
  while(values[0]) {
    for(var i = 0; i < values.length; i++) {
      if(keys[i] !== possibleOutcome[possibleOutcome.length-1] && values[i] > values[i+1] || !values[i+1]) {
        possibleOutcome += keys[i];
        values[i]--;
        if(values[i] === 0) {
          values.splice(i,1);
          keys.splice(i,1);
        }
        break;
      }
    }
  }

  return possibleOutcome;
};

console.log(reorganizeString('zhmyo'))