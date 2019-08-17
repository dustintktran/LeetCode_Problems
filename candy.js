/*
 @param {number[]} ratings
 @return {number}

#_i: child rating at i;
x_i: candies for child at i;

function checkIfPositionIsValid(#array, xarray, positionToCheck) {
  if #i > #i-1 && xi <= xi-1{
    return false
  }
  same for #i > #i+1 

  return true;
}

function makePositionValid(#array, xarray, pos) {
  if(!valid) {
    xi++;
    if(#i-1 is !valid) {
      makePositionValid(previous pos)
    }
  }
}

candy() {
  let candies = [1,1,1,1]; ===length of ratings
  let output = 0;
  for(ratings array) {
    if (i !valid) {
      make it valid
    }
  }
  for(candies) {
    output += candies[i];
  }
  return output;
}
*/

const checkPosition = (ratings, candies, position) => {
  if (position !== 0 && ratings[position] > ratings[position - 1] && candies[position] <= candies[position - 1]) {
    return false;
  }
  if (position !== ratings.length - 1 && ratings[position] > ratings[position + 1] && candies[position] <= candies[position + 1]) {
    return false;
  }
  return true;
}

const makeValid = (ratings, candies, position) => {
  candies[position] += 1;
  if (!checkPosition(ratings, candies, position - 1)) {
    makeValid(ratings, candies, position - 1);
  }
  if (!checkPosition(ratings, candies, position)) {
    makeValid(ratings, candies, position);
  }
}

const candy = (ratings) => {
  let candies = [];
  let output = 0;
  for (var i = 0; i < ratings.length; i++) {
    candies.push(1);
  }
  for (var i = 0; i < ratings.length; i++) {
    if (!checkPosition(ratings, candies, i)) {
      makeValid(ratings, candies, i);
    }
  }
  for (var i = 0; i < candies.length; i++) {
    output += candies[i];
  }
  // console.log(output);
  // console.log(candies);
  return output;
};

// candy(INSERT_INPUT_HERE);



/* ============================================================================================================================*/
// Leet code has two tests with 20,000 inputs which break my code due to poor time complexity.  These functions and snippets 
// fix specifically their tests which use the max time complexity of my recursive functions.

// const fixHugeInputsAsc = (ratings) => {
//   for (var i = 0; i < ratings.length; i++) {
//     if (ratings[i] > ratings[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// const fixHugeInputsDesc = (ratings) => {
//   for (var i = 0; i < ratings.length; i++) {
//     if (ratings[i] < ratings[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

  // if (ratings.length > 10000 && fixHugeInputsAsc(ratings)) {
  //   for(var i = 0; i < ratings.length; i++) {
  //     output += i + 1;
  //   }
  //   // console.log(output);
  //   return output;
  // }

  // if (ratings.length > 10000 && fixHugeInputsDesc(ratings)) {
  //   for(var i = 0; i < ratings.length; i++) {
  //     output += i + 1;
  //   }
  //   // console.log(output);
  //   return output;
  // }