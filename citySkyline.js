/**
 * @param {number[][]} grid
 * @return {number}
 */
var findSkyline = function(grid) {
  let rowMax = []
  let colMax = [];
  for (var i = 0; i < grid.length; i++) {
    let iMax =  0;
    for(var j = 0; j < grid[i].length;  j++) {
      if(grid[i][j] > iMax) {
        iMax = grid[i][j];
      }
      if(!colMax[j] || grid[i][j] > colMax[j]) {
        colMax[j] = grid[i][j];
      }
    }
    rowMax[i] = iMax;
  }
  // console.log(colMax, rowMax);
  return [colMax, rowMax];
}

var maxIncreaseKeepingSkyline = function(grid) {
    let max = findSkyline(grid);
    // let output = [];
    let sum = 0;
    for(var i = 0; i < grid.length; i++) {
      // output.push([]);
      for(var j = 0; j < grid[i].length; j++) {
        if(max[0][j] > max[1][i]) {
          // output[i].push(max[1][i]);
          sum += max[1][i] - grid[i][j];
        } else {
          // output[i].push(max[0][j]);
          sum += max[0][j] - grid[i][j];
        }
      }
    }
    console.log(sum);
    return sum;
  };

  maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]);