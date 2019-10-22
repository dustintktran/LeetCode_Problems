const containsMatch = (sObject, word) => {
  for(var i = 0; i < word.length; i++) {
    if(!sObject[word[i]]) {
      return false;
    } else {
      sObject[word[i]] -= 1;
      if(sObject[word[i]] < 0) {
        return false;
      }
    }
  }
  return true;
}

const numMatchingSubseq = function(S, words) {
  let sObject = {};
  let count = 0
  for (var i = 0; i < S.length; i++) {
    if(!sObject[S[i]]) {
      sObject[S[i]] = 1;
    } else {
      sObject[S[i]]++;
    }
  }
  for(var i = 0; i < words.length; i++) {
    let objectCopy = {...sObject}
    if(containsMatch(objectCopy, words[i])) {
      count++;
    }
  }
  return count;
};