const URLify = (string, length) => {
  let storage = [];
  for (var i = 0; i < length; i++) {
    if(string[i] === ' ') {
      storage.push('%20');
    } else {
      storage.push(string[i]);
    }
  }
  return storage.join('');
}


// let inputString = 'Hello Billy Bob';
// console.log(URLify(inputString, inputString.length));