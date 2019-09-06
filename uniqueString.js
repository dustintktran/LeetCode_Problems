const uniqueString = (string) => {
  let characterStorage = {};
  for (var i = 0; i < string.length; i++) {
    if(characterStorage[string[i]]) {
      return false;
    } else {
      characterStorage[string[i]] = true;
    }
  }
  return true;
}

const uniqueStringNoDataStructs = (string) => {
  for(var i = 0; i < string.length; i++) {
    for(var j = i+1; j < string.length; j++) {
      if(string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}