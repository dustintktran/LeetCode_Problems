const mirrorQuickSort = (arrayToSort, sort = 'asc', arrayToRearrange) => {
  if (arrayToSort.length === 1 || arrayToSort.length === 0) {
    return [arrayToSort,arrayToRearrange];
  }
  let pivot = arrayToSort[0];
  let left = [];
  let right = [];
  let left2 = [];
  let right2 = [];
  for (var i = 1; i < arrayToSort.length; i++) {
    if (sort === 'asc') {
      if (arrayToSort [i] < pivot) {
        left.push(arrayToSort[i]);
        left2.push(arrayToRearrange[i])
      } else {
        right.push(arrayToSort[i]);
        right2.push(arrayToRearrange[i])
      }
    } else {
      if (arrayToSort[i] >= pivot) {
        left.push(arrayToSort[i]);
        left2.push(arrayToRearrange[i])
      } else {
        right.push(arrayToSort[i]);
        right2.push(arrayToRearrange[i]);
      }
    }
  }
  let outputArray = [];
  let reArrangedArray = [];

  if (left.length > 0) {
    let pair = mirrorQuickSort(left, sort, left2);
    outputArray = outputArray.concat(pair[0]);
    reArrangedArray = reArrangedArray.concat(pair[1]);
  }
  outputArray = outputArray.concat([pivot]);
  reArrangedArray = reArrangedArray.concat([arrayToRearrange[0]])
  if (right.length > 0) {
    let pair = mirrorQuickSort(right, sort, right2);
    outputArray = outputArray.concat(pair[0]);
    reArrangedArray = reArrangedArray.concat(pair[1]);
  }

  return [outputArray, reArrangedArray]

}

// console.log(JSON.stringify(mirrorQuickSort([4, 7, 5, 2, 6], 'asc', ['a', 'b', 'c', 'd', 'e'])));

module.exports = mirrorQuickSort;