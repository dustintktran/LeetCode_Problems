const palPerms = (string) => {
  let odds = 0;
  let storage = {};
  for(var i = 0; i < string.length; i++) {
    let letter =  string[i].toLowerCase();
    if(letter === ' ') {
      continue;
    }
    if(!storage[letter]) {
      storage[letter] = 1;
    } else {
      storage[letter]++;
    }
  }
  for(var element in storage) {
    if(storage[element] % 2 === 1) {
      odds++;
    }
    if(odds > 1) {
      return false;
    }
  }
  return true;
}
