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
