function connect_phrases(first, last) {
  let firstPhrase = first;
  let lastArray = last.split(' ');
  lastArray.shift();
  return firstPhrase + " " + lastArray.join(' ');
}

console.log(connect_phrases('hello goodbye', 'goodbye you suck'));