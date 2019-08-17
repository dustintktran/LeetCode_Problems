/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let layer = 0;
  let arrayed = S.split('');
  for (var i = 0; i < arrayed.length; i++) {
    if (layer === 0 && arrayed[i] === "(") {
      arrayed.splice(i, 1);
      i--;
      layer++;
    } else if (layer === 1 && arrayed[i] === ")") {
      arrayed.splice(i,1);
      i--;
      layer--;
    } else if(arrayed[i] === "(") {
      layer++;
    } else if(arrayed[i] === ")") {
      layer--;
    }
  }
  return arrayed.join('');
};